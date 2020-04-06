import express from 'express';
import cors from 'cors';
import 'dotenv/config';

let db = {}

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    console.log(db.name)
    res.send(`Hello ${db.name}!`);
});

app.post('/', (req, res) => {
    db.name = req.headers.name;
    res.send(`Successfully stored name`)
})

app.listen(process.env.PORT, () =>
  console.log(`Cooking Cards server listening on port ${process.env.PORT}!`),
);
