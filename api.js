const express = require("express");
const app = express();
const fs = require("fs");
const session = require("express-session");
const random = require("generaterandom");
const cors = require("cors");
const helmet = require("helmet");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 60 * 60 * 1000,
    },
  })
);
app.use(helmet());

app.use("/signin", (req, res, next) => {
  const db = JSON.parse(fs.readFileSync("./db.json").toString());
  const { username, password } = req.body;
  const user = db.users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    res.json({
      status: false,
      data: "Invalid Username/Password",
    });
  } else {
    req.session.userId = user.id;
    res.json({
      status: true,
      data: { id: user.id, username: user.username, admin: user.admin },
    });
  }
});

app.use("/signup", (req, res, next) => {
  const db = JSON.parse(fs.readFileSync("./db.json").toString());
  const { username, password, admin } = req.body;
  const user = db.users.find((user) => user.username === username);
  if (user) {
    return res.json({
      status: false,
      data: "User already exist",
    });
  }
  db.users.push({
    id: random.alphanumeric(10),
    username: username,
    password: password,
    admin: admin,
    cart:[],
    orders:[]
  });
  fs.writeFileSync("./db.json", JSON.stringify(db));
  return res.json({
    status: true,
    data: "user created",
  });
});

app.get("/products", (req, res, next) => {
  const db = JSON.parse(fs.readFileSync("./db.json").toString());
  return res.json({
    status: true,
    data: db.products,
  });
});

app.post("/products", (req, res, next) => {
  const db = JSON.parse(fs.readFileSync("./db.json").toString());
  db.products = req.body;
  fs.writeFileSync("./db.json", JSON.stringify(db));
  return res.json({
    status: true,
    data: "Products Updated",
  });
});

app.get("/cart", (req, res, next) => {
  const db = JSON.parse(fs.readFileSync("./db.json").toString());
  const user = db.users.find((user) => user.id === req.session.userId);
  const usercart = user.cart.map((cart) => {
    cart.product = db.products.find((product) => product.id === cart.product);
    return cart;
  });
  return res.json({
    status: true,
    data: usercart,
  });
});

app.post("/cart", (req, res, next) => {
  const db = JSON.parse(fs.readFileSync("./db.json").toString());
  const idx = db.users.findIndex((user) => user.id === req.session.userId);
  const usercart = req.body.map((cart) => {
    return { product: cart.product.id, id: cart.id, quantity: cart.quantity };
  });
  db.users[idx].cart = usercart;
  fs.writeFileSync("./db.json", JSON.stringify(db));
  return res.json({
    status: true,
    data: "Cart Updated",
  });
});

app.get("/orders", (req, res, next) => {
  const db = JSON.parse(fs.readFileSync("./db.json").toString());
  const user = db.users.find((user) => user.id === req.session.userId);
  const userorders = user.orders.map((order) => {
    order.product = db.products.find((product) => product.id === order.product);
    return order;
  });
  return res.json({
    status: true,
    data: userorders,
  });
});

app.post("/orders", (req, res, next) => {
  const db = JSON.parse(fs.readFileSync("./db.json").toString());
  const idx = db.users.findIndex((user) => user.id === req.session.userId);
  const userorders = req.body.map((order) => {
    return {
      product: order.product.id,
      id: order.id,
      quantity: order.quantity,
    };
  });
  db.users[idx].orders = userorders;
  fs.writeFileSync("./db.json", JSON.stringify(db));
  return res.json({
    status: true,
    data: "Orders Updated",
  });
});
app.listen(4000, () => {
  console.log("server started");
  if(fs.existsSync("./db.json")){
    return;
  }
  fs.writeFileSync(
    "./db.json",
    `
  {
    "users": [
      
    ],
    "products": [
      {
        "name": "Redux",
        "url": "https://redux.js.org/img/redux-logo-landscape.png",
        "price": "300",
        "id": "cXNYXzwTRaIcroNPkrBMfnUyWWfdORDXyQdrfrkufCTiAjLrlH"
      },
      {
        "name": "ReactJS",
        "url": "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png",
        "price": "167",
        "id": "buJCtCDIRyJXJJneiiQmEAyHihfzezLBARfMUllSKfdVyJyChA"
      },
      {
        "name": "React",
        "url": "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
        "price": "200",
        "id": "yuqafnYTnQLsbuszxRIZMDNAYvgKhcKXQlOESqNqxtskChHUoi"
      }
    ]
  }
  `
  );
});
