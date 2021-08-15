import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

const CovidTable = () => {
  const [data, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/dayone/country/turkey")
      .then((response) => setCountries(response.data))
      .catch(error => console.log({error}))
  }, []);

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Date</th>
          <th>Active</th>
          <th>Confirmed</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data) => {
          return (
            <tr key={data.Date}>
              <th scope="row">{data.Date}</th>
              <td>{data.Active}</td>
              <td>{data.Confirmed}</td>
              <td>{data.Deaths}</td>
              <td>{data.Recovered}</td>
            </tr>
          );
        })}

      </tbody>
    </Table>
  );
};

export default CovidTable;
