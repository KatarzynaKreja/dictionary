import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h1>Dictionary</h1>
          <Dictionary start="sunset" />
        </section>
      </header>
      <Footer />
    </div>
  );
}

export default App;
