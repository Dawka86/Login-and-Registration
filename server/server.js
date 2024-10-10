import express from "express";
import bodyParser from "body-parser";
import  {dirname}  from "path";
import  {join } from "path";
import { fileURLToPath } from "url";
import pg from "pg";
import env from "process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
env.config();

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: process.env.SECRET_DATABASE,
    password: process.env.SECRET_DATABASE_PASSWORD,
    port: 5432,
})

// Middleware do parsowania danych z formularza
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Statyczne pliki (z katalogu build)
app.use(express.static(join(__dirname, "../build")));

// Obsługa strony głównej
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../build/index.html"));
});

// Obsługa formularza POST
app.post("/submit", (req, res) => {
  console.log(req.body); 
  res.send("Formularz odebrany!");
});



// Start serwera
app.listen(port, () => {
  console.log(`Server working on port ${port}`);
});