import { useMemo } from "react";
import type { FC } from "react";
import Table from "components/Table";

type Props = {
  data: Card.Info[];
};

const SearchResult: FC<Props> = ({ data = [] }) => {
  const columns = useMemo(
    () => [
      {
        Header: "名稱",
        accessor: "name",
        width: "15%",
      },
      { Header: "名稱", accessor: "name_en", width: "20%" },
      {
        Header: "效果",
        accessor: "desc",
        Cell: ({ value }: any) => {
          return <pre>{value}</pre>;
        },
      },
    ],
    []
  );

  // TODO: 名稱highligh顯示
  // let result = fuzzysort.single("query", "some string that contains my query.") || undefined;
  // {parse(fuzzysort.highlight(result, "<b>", "</b>") || "")}

  return (
    <>
      {data.length}筆
      <Table data={data} columns={columns} />
    </>
  );
};

export default SearchResult;
