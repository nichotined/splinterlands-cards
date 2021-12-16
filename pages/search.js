import React from "react";
import { Grid, Header, Search, Segment, Table } from "semantic-ui-react";
import _ from "lodash";
import cardDetails from "../data/cardsDetails.json";

const source = cardDetails.map((card) => {
  return {
    id: card.id,
    title: card.name,
    name: card.name,
    color: card.color,
    type: card.type,
  };
});

const initialState = {
  loading: false,
  result: [],
  value: "",
};

const reducer = (state, action) => {
  // Implement react reducer
  switch (action.type) {
    case "CLEAN_QUERY":
      return initialState;
    case "START_SEARCH":
      return { ...state, loading: true, value: action.query };
    case "FINISH_SEARCH":
      return { ...state, loading: false, results: action.results };
    case "UPDATE_SELECTION":
      return {
        ...state,
        value: action.selection,
      };

    default:
      throw new Error();
  }
};

const SearchPage = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { loading, results, value } = state;
  const timeoutRef = React.useRef();

  const handleSearch = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: "START_SEARCH", query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: "CLEAN_QUERY" });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), "i");
      const isMatch = (result) => re.test(result.name);

      dispatch({
        type: "FINISH_SEARCH",
        results: _.filter(source, isMatch),
      });
    }, 300);
  }, []);

  const handleResultSelect = React.useCallback((e, data) => {
    const re = new RegExp(_.escapeRegExp(data.result.name), "i");
    const isMatch = (r) => re.test(r.name);

    console.log();

    dispatch({
      type: "FINISH_SEARCH",
      results: _.filter(source, isMatch)
    });
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Grid>
      <Grid.Column width={16}>
        <Search
          placeholder="Search for a card"
          loading={loading}
          onResultSelect={handleResultSelect}
          onSearchChange={handleSearch}
          results={results}
          value={value}
        />
      </Grid.Column>
      {/* <Grid.Column width={16}>
        <Segment>
          <Header>State</Header>
          <pre style={{ overflowX: "auto" }}>
            {JSON.stringify({ loading, results, value }, null, 2)}
          </pre>
          <Header>Options</Header>
          <pre style={{ overflowX: "auto" }}>
            {JSON.stringify(source, null, 2)}
          </pre>
        </Segment>
      </Grid.Column> */}
      <Grid.Column width={16}>
        <Table celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {results &&
              results.map((result) => (
                <Table.Row key={result.id}>
                  <Table.Cell>{result.id}</Table.Cell>
                  <Table.Cell>{result.name}</Table.Cell>
                  <Table.Cell>{result.type}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </Grid.Column>
    </Grid>
  );
};

export default SearchPage;
