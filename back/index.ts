import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ test: "hello express" });
});

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
};

start();
