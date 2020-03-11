import React from "react";

// Functional component
const TableHeader = () => {
  return (
    // This is equivalent to the render method.
    // If the return is contained on one line, it does not need parentheses
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      /* Keys help React identify which items have changed, are added, or are removed.
      It should be a stable identity. Use item index as a last resort, but not if the
      order of items may change. */
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          {/* The onClick function must pass through a function that returns the
            removeCharacter() method, otherwise it will try to run automatically */}
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = props => {
  const { characterData, removeCharacter } = props;

  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};

export default Table;
