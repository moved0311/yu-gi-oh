import { useMemo } from "react";
import type { FC } from "react";
import fuzzysort from "fuzzysort";
import Table from "components/Table";
import parse from "html-react-parser";

type Props = {
  data: Card.Info[];
};

const SearchResult: FC<Props> = ({ data = [] }) => {
  console.log(data);

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
