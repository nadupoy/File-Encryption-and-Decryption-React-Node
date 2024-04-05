var express = require("express");
var cors = require("cors");
var app = express();

// Enable all CORS requests:
app.use(cors());

// Enable pre-flight across the board:
app.options('*', cors());

var port = 8080;

// Configure CORS:
var corsOptions = {
  origin: "http://localhost:5173/",
  optionsSuccessStatus: 200 /* some legacy browsers (IE11, various SmartTVs) 
  choke on 204 */,
};

// Deserialize form data sent from client into a JavaScript object:
app.use(express.json());

// POST request handler:
app.post("/", (req, res) => {
  const messageInput = req.body;
  console.log(messageInput); // verify data is coming through in the expected shape
});

// enable CORS for a single Route:
app.get("/", function (req, res, next) {
  res.json({ message: "" });
});

app.listen(port, function () {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
