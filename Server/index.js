const express = require("express");
const connect = require("./db/db");
const usersControler = require("./all_Routes/usersRoutes");
const productControler = require("./all_Routes/productRoutes");
const cartRoutes = require("./all_Routes/cartRoutes");
const config = require("./config/config");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const expressSession = require("express-session");
const passportSetup = require("./controlers/passport");
const authRoute = require("./all_Routes/auth");
const wishlistRoute = require("./all_Routes/wishlistRoute");
const app = express();
app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(express.json());
app.use(cors());
const session = require("express-session");
app.use(
  session({
    secret: "somethingsecretgoeshere",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use("/users", usersControler);
app.use("/products", productControler);
app.use("/cart", cartRoutes);
app.use("/wishlist", wishlistRoute);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use("/auth", authRoute);

app.listen(config.PORT, async (req, res) => {
  try {
    await connect();
    console.log(`Server Listening on port ${config.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
