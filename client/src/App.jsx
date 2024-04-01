import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [output, getOutput] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000")
  //     .then((res) => res.json())
  //     .then((data) => createCipher(data.message));
  // }, []);

  return (
    <section className="app-component">
      <h2>ENCRYPTOR/DECRYPTOR:</h2>

      <form id="app" method="post" onSubmit=""> {/*<form> sends data to the server
      for encryption/decryption
      */}
        <label htmlFor="message" form="app">
          Input message here:
        </label>
        <br />
        <input type="text" required={true} maxLength="50" id="message" />{" "}
        {/* 
        value is sent (i.e.'post') to the server for encryption or decryption
        */}
        <br />
        <input type="submit" value="ENCRYPT/DECRYPT" />
        <br />
        <input type="reset" value="RESET" id="reset-button" />
      </form>

      <p className="output">
        Output: <span>{output}</span>{" "}
        {/*the encrypted/decrypted message is displayed
        (i.e.'fetch') here from the server
         */}
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
