import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.static('public'));

app.get('/inspect', (req, res) => {
    console.log(req.headers.origin);
    console.log(req.headers.cookie);

    res.setHeader("Set-Cookie", "session=sess_123; SameSite=None")
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.json({ "origin": req.headers.origin, "cookies": req.headers.cookie });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
