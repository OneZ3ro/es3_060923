import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import TypeBook from "./components/TypeBook";

function App() {
  return (
    <div className="App">
      <header>
        <MyNav logo={logo} />
      </header>
      <main className="main-height">
        <Welcome />
        <TypeBook />
      </main>
      <footer
        style={{
          backgroundColor: "black",
          width: "100%",
          color: "white",
          paddingBlock: "15px",
        }}
      >
        <MyFooter text="Il mio footer" />
      </footer>
    </div>
  );
}

export default App;
