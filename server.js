const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
const ecoTaxRoutes = require('./routes/ecoTaxRoutes'); // Перевір, щоб ім'я файлу збігалося!

const app = express();
const PORT = 3000;

// Твій рядок підключення до бази
const MONGO_URL = "mongodb+srv://student:ST5AK0BaYjIAvHU8@cluster0.50x4qir.mongodb.net/ecologyDB?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL)
 .then(() => console.log('Підключення до MongoDB успішне'))
 .catch((err) => console.error('Помилка підключення:', err));

app.use(express.json());

// Дозвіл CORS (щоб фронтенд бачив бекенд)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', apiRoutes);
app.use('/api/ecotax', ecoTaxRoutes);

app.listen(PORT, () => {
 console.log(`Сервер запущено на http://localhost:${PORT}`);
});