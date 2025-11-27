const express = require('express');
const mongoose = require('mongoose');

const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000;

const MONGO_URL = "mongodb+srv://student:ST5AK0BaYjIAvHU8@cluster0.50x4qir.mongodb.net/ecologyDB?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL)
    .then(() => console.log('Підключення до MongoDB успішне'))
    .catch((err) => console.error('Помилка підключення:', err));

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});