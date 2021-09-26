import React from "react";

function Table({ countries }) {
  return (
    <div className="app__right__table">
      {countries.map((country, index) => (
        <tr key={index}>
          <td>{country.country}</td>
          <td>
            <strong>{country.cases}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
