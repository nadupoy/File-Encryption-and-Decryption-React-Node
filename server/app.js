// Import Express and CORS:
const express = require("express");
const cors = require("cors");
// Create an Express application:
const app = express();
const port = 8000;

app.use(cors());
/*
Since this is a SPA, add a middleware function (i.e. 'use()') with no mount
path. The function is executed everytime app.js recieves a request.
*/
// app.use((req, res) => {
//   console.log("Hello from the server!");
// });
app.use(express.json());
app.get('/result', (req, res) => {
  res.json({message: "Hello from server!"});
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
