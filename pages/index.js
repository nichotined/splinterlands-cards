import { Grid } from "@mui/material";
import Header from "../src/headerComponent";

function HomePage() {
  return (
    <Header>
      <Grid container spacing={2}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Header>
  );
}

export default HomePage;
