const express = require("express");
const app = express();

const logger = (req, res, next) => {
    console.log("Haii ini dari logger");
    next()
}


app.use(express.json())
app.use(logger)

const movies = [
  {
    id: 2,
    title: "Wakanda",
  },
  {
    id: 3,
    title: "Minion",
  },
];
app.get("/movies", (req, res) => {
  res.send(movies);
  console.log("run at http://localhost/8080");
});

app.post("/movies", (req, res) => {
    const data = req.body
    movies.push(data)
    res.status(201)
    res.send({
        message: "sucsses add data"
    })
    console.log(req.body);
})

app.get("/user", (req, res) => {
  res.send([
    {
      nama: "Baim",
      password: "h5YtgK90QerkOpPiuKMBvF",
    },
  ]);
});

app.get('/movies/:id', (req, res) => {
  const query = req.params(['id'])
  console.log(query);
})

app.listen(8080);
