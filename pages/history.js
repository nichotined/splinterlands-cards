import React from "react";
import { Icon, Table } from "semantic-ui-react";
import cardDetails from "../data/cardsDetails.json";

const join = (arr) => {
  let n = String(arr).split(",");
  n.forEach((item, index) => {
    if (item === "") {
      n[index] = "_";
    }
  });
  return n.join(", ");
};

const historyPage = () => {
  const rows = cardDetails;

  return (
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Color</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Stats</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {rows.map((row, index) => (
          <Table.Row key={index}>
            <Table.Cell>{row.id}</Table.Cell>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.color}</Table.Cell>
            <Table.Cell>{row.type}</Table.Cell>
            {Object.keys(row.stats).map((item) => (
              <Table.Row key={item}>
                <Table.Cell>{item}</Table.Cell>
                <Table.Cell key={item}>{join(row.stats[item])}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default historyPage;
