const express = require('express');
// const cors = require('cors');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors);

require('./routes/routes')(app);

app.listen(8000, () => console.log("Now listening on port 8000"));