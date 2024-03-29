import ReactDOM from "react-dom/client";
import "./App.css";

function App() {
  return (
    <section className="app-component">
      <h2>ENCRYPTOR/DECRYPTOR:</h2>

      <form id="app">
        <label htmlFor="message" form="app">
          Input message here:
        </label>
        <br />
        <input type="text" required={true} maxLength="50" id="message" />
        <br />
        <input type="button" value="ENCRYPT/DECRYPT" />
        <br />
        <input type="reset" value="RESET" id="reset-button" />
      </form>

      <p className="output">
        Output: <span></span>
      </p>
    </section>
  );
}

function Attribution() {
  return (
      <footer>
        <p>
          Built by{" "}
          <a href="https://github.com/nadupoy" target="_blank">
            Nadupoy
          </a>
          .
        </p>
      </footer>
  );
}

export default function Main() {
  return (
    <>
      <App />
      <Attribution />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
