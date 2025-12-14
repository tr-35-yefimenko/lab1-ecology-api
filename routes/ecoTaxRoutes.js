const express = require('express');
const router = express.Router();
const EcoTax = require('../models/EcoTax');

// Розрахувати та зберегти
router.post('/calculate', async (req, res) => {
    try {
        const { pollutant, mass, rate, kTime, kRegion, kBenefit } = req.body;

        // Формула розрахунку
        const result = mass * rate * kTime * kRegion * kBenefit;

        const newRecord = new EcoTax({
            pollutant,
            mass, 
            rate, 
            kTime, 
            kRegion, 
            kBenefit,
            taxAmount: result
        });

        await newRecord.save();
        res.json(newRecord);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Помилка сервера' });
    }
});

// Отримати історію
router.get('/', async (req, res) => {
    try {
        const history = await EcoTax.find().sort({ date: -1 });
        res.json(history);
    } catch (error) {
        res.status(500).json({ error: 'Помилка отримання історії' });
    }
});

module.exports = router;