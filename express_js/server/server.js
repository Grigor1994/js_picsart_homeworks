const express = require('express');
const app = express();
const routes = require('./routes');

const port = process.env.PORT || 3000;
const BASE_URL = '/api/v1';

app.use(BASE_URL, routes)
app.use(express.json())


app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
});