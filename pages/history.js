import React from "react";
import { Icon, Table } from "semantic-ui-react";
import cardDetails from "../data/cardsDetails.json";
import _ from "lodash";
import ModalComponent from "../components/modal";

const rows = cardDetails;

const join = (arr) => {
  let n = String(arr).split(",");
  n.forEach((item, index) => {
    if (item === "") {
      n[index] = "_";
    }
  });
  return n.join(", ");
};

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

const historyPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = React.useReducer(sortColumn, {
    column: null,
    data: rows,
    direction: null,
  });
  const { column, data, direction } = state;

  return (
    <Table celled fixed sortable>
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
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map(({ id, name, color, type, stats }) => (
          <Table.Row key={name}>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{color}</Table.Cell>
            <Table.Cell>{type}</Table.Cell>
            <Table.Cell>
              <ModalComponent name={name} type={type} color={color} stats={stats} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default historyPage;
