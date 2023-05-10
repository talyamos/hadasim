import { useEffect, useState } from "react";
import "./App.css";
import MyContext from "./MyContext";
import Nav from "./components/Nav";
import Members from "./components/Members";
import CovidData from "./components/CovidData";

function App() {
  const [membersData, setMembersData] = useState([]);

  const fetchMembers = async function () {
    const response = await fetch("http://localhost:8000/api/members");
    const json = await response.json();
    setMembersData(json);
  };
  // console.log(membersData);

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <MyContext.Provider value={{ membersData }}>
      <div className="App">
        <Nav />
        <Members />
        <CovidData />
      </div>
    </MyContext.Provider>
  );
}

export default App;
