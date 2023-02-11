import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import fuzzysort from "fuzzysort";
import throttle from "lodash.throttle";
import SearchResult from "components/SearchResult";
import useCardsDetails from "hooks/useCardsDetails";
import "./App.css";

function App() {
  const [form, setForm] = useState<{ name: string }>({ name: "" });
  const [filter, setFilter] = useState<Card.Info[]>([]);
  const { cards } = useCardsDetails();

  const onChange = throttle((event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;

    setForm((prev) => ({ ...prev, [id]: value }));
  }, 300);

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (form.name === "") {
      setFilter([]);
      return;
    }

    const result = fuzzysort.go(form.name, cards, { keys: ["name", "name_en", "name_ja"] });

    setFilter(result.map((item) => item.obj));
  };

  return (
    <div id="app" className="p-4">
      <Box component="form" onSubmit={onSubmit} className="mb-2">
        <TextField id="name" label="名稱" variant="outlined" size="small" onChange={onChange} />
      </Box>
      <SearchResult data={filter} />
    </div>
  );
}

export default App;
