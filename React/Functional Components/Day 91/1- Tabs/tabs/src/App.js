
// import logo from "./logo.svg";
import "./App.css";
import Tabs from "./components/Tabs";

function App() {

  const tabsArr= [{'label': "tab 1" , 'content': "I am tab 1"}, {'label': "tab 2" , 'content': "I am tab 2"} ,{'label': "tab 3" , 'content': "I am tab 3"}];

  return (
    <div className="App">
    <Tabs tabs={tabsArr} />
    </div>
  );
}

export default App;
