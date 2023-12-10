import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import List from "./List";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";

  const [reqType, setReqType] = useState("users");

  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);

        const data = await response.json();
        setItems(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchApi();
  }, [reqType]);

  return (
    <div className="App">
      <Navbar reqType={reqType} setReqType={setReqType} />
      <List items={items} />
    </div>
  );
}

export default App;
