const express = require("express");
const app = express();
const port = 4000;
require("./db/dbconnection");
const cors = require('cors')
const userSchema = require('./db/user')

app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  try {
    const { Username, email, password, confirmpassword } = req.body;
    // console.log(req.body);
    const user = new userSchema({ Username, email, password, confirmpassword });
    await user.save();
    res.json({ message: true });
  } catch (error) {
    console.log(error);
    res.json({ error: true });
  }
});

//Login
app.post("/login", async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await user.findOne({ email });
    if (!user) {
      return res.json({ error: "Invalid email" });
    }
    if (user.password !== password) {
      return res.json({ error: "Invalid password" });
    }
    res.json({ message: true });
  } catch (error) {
    res.json({ error: "Login failed" });
  }
});

//  connectDb();
app.listen(port, () => {
  console.log("server is listening on post 4000");
});

// app.listen(4000)
