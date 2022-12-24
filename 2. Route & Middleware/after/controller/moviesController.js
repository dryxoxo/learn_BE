const movies = require('../data/movies.js')

const getMovies = (req, res) => {
  res.send([
    {
      status: "Sucsses get data",
      movies,
    },
  ]);
};

const findMovies = (req, res) => {
  const query = req.params["id"];
  const data = movies.find((item) => item.id == +query);

  data
    ? res.send([
        {
          status: "Succses find item",
          data,
        },
      ])
    : res.send([
        {
          status: "cant find item",
        },
      ]);
};

const addMovies = (req, res) => {
  const data = req.body
    movies.push(data)
    res.status(201)
    res.send([{
        message: "sucsses add data",
        movies
    }])
}
module.exports = {
    getMovies,
    findMovies,
    addMovies
}