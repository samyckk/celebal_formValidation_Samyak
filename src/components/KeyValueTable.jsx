import React from 'react';

function KeyValueTable({ data }) {
  if (!data) {
    return <p>No data provided</p>;
  }

  const tableRows = Object.entries(data).map(([key, value]) => (
    <tr key={key}>
      <td style={{ padding: '10px', border: '1px solid #ddd', textAlign:"left", paddingLeft: "15px" }}>{key}</td>
      <td style={{ padding: '10px', border: '1px solid #ddd' }}>{value}</td>
    </tr>
  ));

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'sans-serif' }}>
      <thead>
        <tr>
          <th style={{ padding: '10px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', textAlign: 'center' }}>
            Key
          </th>
          <th style={{ padding: '10px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', textAlign: 'center' }}>
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}

export default KeyValueTable;
