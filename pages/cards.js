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
import Header from "../src/headerComponent";

const rows = cardDetails;

function renderMonster(row) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell key={"0"} />
            {row.stats.mana &&
              row.stats.mana.map((e, i) => (
                <TableCell key={i + 1}>Lvl {i + 1}</TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(row.stats).map((item) => (
            <TableRow>
              <TableCell key={`${item}-${row.id}`}>{item}</TableCell>
              {row.stats[item].map((e, j) => (
                <TableCell key={`${item}-ch-${j}`}>{e}</TableCell>
              ))}
            </TableRow>
          ))}
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
            {Object.keys(row.stats).map((item) => (
              <TableRow>
                <TableCell key={`${item}-${row.id}`}>{item}</TableCell>
                <TableCell key={`${item}-ch-${row.id}`}>
                  {row.stats[item]}
                </TableCell>
              </TableRow>
            ))}
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
        <TableCell key={row.id}>{row.id}</TableCell>
        <TableCell key={row.name}>{row.name}</TableCell>
        <TableCell key={row.color}>{row.color}</TableCell>
        <TableCell key={row.type}>{row.type}</TableCell>
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
    <div>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell key={"#"} />
                  <TableCell key={"id"}>ID</TableCell>
                  <TableCell key={"name"}>Name</TableCell>
                  <TableCell key={"color"}>Color</TableCell>
                  <TableCell key={"type"}>Type</TableCell>
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
    </div>
  );
};

export default CardsPage;
