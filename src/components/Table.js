import React from 'react';

function Table({ data, config, keyFn }) {
  const renderedRows = data.map((item) => {
    const renderedCells = config.map((column) => {
      return (
        <td key={column.label} className={`p-${config.length}`}>
          {column.render(item)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(item)}>
        {renderedCells}
      </tr>
    );
  });

  const renderedHeader = config.map((column) => {
    if (column.header) {
      return (
        <React.Fragment key={column.label}>{column.header()}</React.Fragment>
      );
    }

    return <th key={column.label}>{column.label}</th>;
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeader}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
