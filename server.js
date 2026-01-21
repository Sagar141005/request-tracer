import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/inspect', (req, res) => {
    console.log(req.method);
    console.log(req.headers);
    console.log(req.url);

    res.json({ "ok": true });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
