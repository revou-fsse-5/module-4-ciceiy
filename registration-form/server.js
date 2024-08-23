const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  const { username, password } = req.body;

  res.status(201).json({
    id: "c5a0",
    username,
    password,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
