import express from "express";
import bodyParser from "body-parser";
import  {dirname}  from "path";
import  {join } from "path";
import { fileURLToPath } from "url";
import pg from "pg";
import env from "dotenv";


const app = express();
const port = 3000;
env.config();
const __dirname = dirname(fileURLToPath(import.meta.url));


const db = new pg.Client({
    user: `${process.env.SECRET_USER}`,
    host: `${process.env.SECRET_HOST}`,
    database: `${process.env.SECRET_DATABASE}`,
    password: `${process.env.SECRET_DATABASE_PASSWORD}`,
    port: `${process.env.SECRET_PORT}`,
});
db.connect();

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
app.post("/submit", async(req, res) => {
  const email = req.body.email;
  const password = req.body.password; 

  const results = await db.query(
    "INSERT INTO users (email, password) VALUES ($1, $2)  RETURNING id",
    [email, password]
  );
  console.log(`Emaile added on new ID :`, results.rows[0].id);
  res.send("Formularz odebrany!");
});



// Start serwera
app.listen(port, () => {
  console.log(`Server working on port ${port}`);
});