import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>{" "}
      </header>
      <section>
        <Dictionary start="sunset" />
        <Footer />
      </section>
    </div>
  );
}

export default App;
