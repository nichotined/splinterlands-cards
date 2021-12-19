import React from "react";
import { Container, Icon, Table } from "semantic-ui-react";
import cardDetails from "../data/cardsDetails.json";
import _ from "lodash";
import ModalComponent from "../components/modal";
import DistributionModal from "../components/distributionModal";

const rows = cardDetails;

const sortColumn = (state, action) => {
  switch (action.type) {
    case "CHANGE_SORT":
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === "ascending" ? "descending" : "ascending",
        };
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: "ascending",
      };
    default:
      throw new Error();
  }
};

const HistoryPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = React.useReducer(sortColumn, {
    column: null,
    data: rows,
    direction: null,
  });
  const { column, data, direction } = state;

  return (
    <Table celled fixed sortable selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === "id" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "id" })}
          >
            ID
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === "name" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "name" })}
          >
            Name
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === "color" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "color" })}
          >
            Color
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === "type" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "type" })}
          >
            Type
          </Table.HeaderCell>
          <Table.HeaderCell>Distribution</Table.HeaderCell>
          <Table.HeaderCell>Card Details</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map(({ id, name, color, type, stats, distribution }) => (
          <Table.Row key={name}>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{color}</Table.Cell>
            <Table.Cell>{type}</Table.Cell>
            <Table.Cell textAlign="center">
              <DistributionModal distribution={distribution} name={name} />
            </Table.Cell>
            <Table.Cell textAlign="center">
              <ModalComponent
                name={name}
                type={type}
                color={color}
                stats={stats}
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default HistoryPage;
