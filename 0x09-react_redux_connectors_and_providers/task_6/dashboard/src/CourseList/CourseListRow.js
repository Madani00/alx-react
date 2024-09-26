import React, {useState} from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

// Define styles using Aphrodite
const styles = StyleSheet.create({
  row: {
    backgroundColor: "#f5f5f5ab",
  },
  headerRow: {
    backgroundColor: "#deb5b545",
  },
  cell: {
    padding: "10px",
  },
  headerCell: {
    padding: "10px",
    fontWeight: "bold",
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  }

  return (
    <tr className={css(
      styles.row,
      isHeader && styles.headerRow,
      isChecked && !isHeader && styles.rowChecked
      )}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} className={css(styles.headerCell)}>{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.headerCell)}>{textFirstCell}</th>
            <th className={css(styles.headerCell)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.cell)}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheck}
            />
            {textFirstCell}
          </td>
          <td className={css(styles.cell)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
