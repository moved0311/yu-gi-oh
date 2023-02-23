import type { FC } from "react";
import { useTable } from "react-table";
import type { Column } from "react-table";

type TableProps = {
  columns: Column[];
  data: Card.Info[];
};

const Table: FC<TableProps> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className="text-left w-full">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => {
              const { styles = {} } = column;
              return (
                <th {...column.getHeaderProps({ style: { minWidth: column.minWidth || "50px", width: column.width, ...styles } })}>
                  {column.render("Header")}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="border-b h-40">
              {row.cells.map((cell: any) => {
                return (
                  <td
                    {...cell.getCellProps({
                      style: {
                        width: cell.column.width,
                        ...cell.column.styles,
                      },
                    })}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
