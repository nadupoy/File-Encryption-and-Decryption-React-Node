import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [output, getOutput] = useState("");

  // Client requests computed data from the server:
  useEffect(() => {
    fetch("http://localhost:8080")
      .then((res) => res.json())
      .then((data) => getOutput(data.message));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // const input = document.getElementsByTagName('form')[0].value;
    const data = "Hello World";
    const serializedBody = JSON.stringify(data);
    const fetchOptions = {
      method: "POST",
      body: serializedBody,
    };

    fetch("/", fetchOptions);
  };

  // Client sends data for computing to the server:
  // function sendInput(e) {
  //   const input = document.getElementById('message').value;

  //   e.preventDefault();
  // }

  return (
    <section className="app-component">
      <h2>ENCRYPTOR/DECRYPTOR:</h2>

      <form
        id="app"
        // method="post"
        // action="/"
        onSubmit={handleSubmit}
      >
        {/*
        <form> sends data to the server for encryption/decryption
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
        {/*
        the encrypted/decrypted message is displayed (i.e.'fetch') here from the
        server
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
