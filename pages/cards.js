import * as React from "react";
import cardDetails from "../data/cardsDetails.json";
import {
  Collapse,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PropTypes from "prop-types";

const rows = cardDetails;

function renderMonster(row) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell />
            {row.stats.abilities &&
              row.stats.abilities.map((e, i) => (
                <TableCell key={i + 1}>Lvl {i + 1}</TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={row.id}>
            <TableCell>Abilities</TableCell>
            {row.stats.abilities.map((ability) => (
              <TableCell key={ability}>{ability}</TableCell>
            ))}
          </TableRow>
          <TableRow key={row.id}>
            <TableCell>Mana</TableCell>
            {row.stats.mana.map((mana) => (
              <TableCell key={mana}>{mana}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Attack</TableCell>
            {row.stats.attack.map((attack) => (
              <TableCell key={attack}>{attack}</TableCell>
            ))}
          </TableRow>
          <TableRow key={row.id}>
            <TableCell>Range</TableCell>
            {row.stats.ranged.map((ranged) => (
              <TableCell key={ranged}>{ranged}</TableCell>
            ))}
          </TableRow>
          <TableRow key={row.id}>
            <TableCell>Magic</TableCell>
            {row.stats.magic.map((magic) => (
              <TableCell key={magic}>{magic}</TableCell>
            ))}
          </TableRow>
          <TableRow key={row.id}>
            <TableCell>Armor</TableCell>
            {row.stats.armor.map((armor) => (
              <TableCell key={armor}>{armor}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Health</TableCell>
            {row.stats.health.map((health) => (
              <TableCell key={health}>{health}</TableCell>
            ))}
          </TableRow>
          <TableRow key={row.id}>
            <TableCell>Speed</TableCell>
            {row.stats.speed &&
              row.stats.speed.map((speed) => (
                <TableCell key={speed}>{speed}</TableCell>
              ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function renderSummoner(row) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell />
            {row.stats && <TableCell>#</TableCell>}
          </TableRow>
        </TableHead>
        {row.stats && (
          <TableBody>
            <TableRow key={row.id}>
              <TableCell>Abilities</TableCell>
              <TableCell>{row.stats.abilities}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mana</TableCell>
              <TableCell>{row.stats.mana}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Attack</TableCell>
              <TableCell>{row.stats.attack}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Range</TableCell>
              <TableCell>{row.stats.ranged}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Magic</TableCell>
              <TableCell>{row.stats.magic}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Armor</TableCell>
              <TableCell>{row.stats.armor}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Health</TableCell>
              <TableCell>{row.stats.health}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Speed</TableCell>
              <TableCell>{row.stats.speed}</TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.color}</TableCell>
        <TableCell>{row.type}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detail Stats
              </Typography>

              {row.type === "Monster"
                ? renderMonster(row)
                : renderSummoner(row)}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

const CardsPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Color</TableCell>
                <TableCell>Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid item xs={1} />
      </Grid>
    </Grid>
  );
};

export default CardsPage;
