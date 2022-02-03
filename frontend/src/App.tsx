import "./App.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Table from "./components/Table/cities";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Table />
    </div>
  );
}

export default App;
