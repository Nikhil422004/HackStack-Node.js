const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen(3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let products = [
  {
    name: "Football",
    brand: "Nivia Shining Star, Size 5",
    price: "900",
    date: "2024-06-24",
    desc: "Premium stitched foortball for all types of terrain. Comes with a 2 month replacement policy. BUY NOW!!",
  },
];

app.get("/", (req, res) => {
  res.render("index", { products });
});

app.get("/home", (req, res) => {
  res.redirect("/");
});

app.post("/add-product", (req, res) => {
  let newProduct = req.body;
  products.push(newProduct);
  res.redirect("/");
});

app.use((req, res) => {
  res.status(404).render("error");
});
