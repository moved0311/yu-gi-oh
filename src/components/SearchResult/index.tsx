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
        Header: "",
        accessor: "id",
        width: "10%",
        Cell: ({ value }: any) => <img alt={`${value}-img`} src={`${process.env.PUBLIC_URL}/assets/cards/${value}.jpg`} className="p-4" />,
      },
      {
        Header: "名稱",
        accessor: "name",
        width: "20%",
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
        styles: { textAlign: "center" },
      },
      {
        Header: "攻擊",
        accessor: "atk",
        styles: { textAlign: "center" },
      },
      {
        Header: "守備",
        accessor: "def",
        styles: { textAlign: "center" },
      },
      {
        Header: "效果",
        accessor: "desc",
        styles: { paddingLeft: "20px" },
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

  console.log(data);

  return (
    <>
      {data.length}筆
      <Table data={data} columns={columns} />
    </>
  );
};

export default SearchResult;
