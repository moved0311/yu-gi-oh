import { useMemo } from "react";
import type { FC } from "react";
import Table from "components/Table";

type Props = {
  data: Card.Info[];
};

const SearchResult: FC<Props> = ({ data = [] }) => {
  /* TODO: add cell type */
  const columns = useMemo(
    () => [
      {
        Header: "名稱",
        accessor: "name",
        width: "25%",
        Cell: ({ row }: any) => {
          const name = row?.original?.name;
          const nameEnglish = row?.original?.name_en;
          const nameJapan = row?.original?.name_ja;

          return (
            <span>
              <p>{name}</p>
              <p>{nameEnglish}</p>
              <p>{nameJapan}</p>
            </span>
          );
        },
      },
      {
        Header: "等級",
        accessor: "level",
      },
      {
        Header: "攻擊",
        accessor: "atk",
      },
      {
        Header: "守備",
        accessor: "def",
      },
      {
        Header: "效果",
        accessor: "desc",
        Cell: ({ value }: any) => {
          return <pre>{value}</pre>;
        },
        width: "60%",
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
