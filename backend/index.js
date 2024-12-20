const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      dateOfBirth: "2019-03-12",
      name: "Saree",
      eyesColor: "GhostWhite",
      rating: 5,
    },
    {
      id: 2,
      dateOfBirth: "2002-07-14",
      name: "Peri",
      eyesColor: "RoyalBlue",
      rating: 4,
    },
    {
      id: 3,
      dateOfBirth: "1991-11-30",
      name: "Hildy",
      eyesColor: "LightCyan",
      rating: 8,
    },
    {
      id: 4,
      dateOfBirth: "1996-12-07",
      name: "Rosy",
      eyesColor: "Turquoise",
      rating: 2,
    },
    {
      id: 5,
      dateOfBirth: "1987-12-25",
      name: "Kellsie",
      eyesColor: "Coral",
      rating: 6,
    },
    {
      id: 6,
      dateOfBirth: "2018-03-18",
      name: "Caitlin",
      eyesColor: "MidnightBlue",
      rating: 6,
    },
    {
      id: 7,
      dateOfBirth: "2006-02-08",
      name: "Aime",
      eyesColor: "DimGrey",
      rating: 9,
    },
    {
      id: 8,
      dateOfBirth: "1980-03-18",
      name: "Zelma",
      eyesColor: "FloralWhite",
      rating: 1,
    },
    {
      id: 9,
      dateOfBirth: "1991-05-10",
      name: "Claude",
      eyesColor: "Moccasin",
      rating: 8,
    },
    {
      id: 10,
      dateOfBirth: "2021-08-13",
      name: "Audrie",
      eyesColor: "DarkOrchid",
      rating: 2,
    },
    {
      id: 11,
      dateOfBirth: "2021-07-18",
      name: "Vannie",
      eyesColor: "YellowGreen",
      rating: 0,
    },
    {
      id: 12,
      dateOfBirth: "2024-08-20",
      name: "Lishe",
      eyesColor: "SeaShell",
      rating: 3,
    },
  ]);
});

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});
