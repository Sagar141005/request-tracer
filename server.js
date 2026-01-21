import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/inspect', (req, res) => {
    console.log(req.headers.origin);
    console.log(req.headers.cookie);

    res.json({ "origin": req.headers.origin, "cookies": req.headers.cookie });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
