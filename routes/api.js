const express = require('express');
const router = express.Router();
const Measurement = require('../models/Measurement');

// Отримати всі записи
router.get('/measurements', async (req, res) => {
    try {
        const data = await Measurement.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ errorMessage: 'Помилка на сервері' });
    }
});

// Створити новий запис
router.post('/measurements', async (req, res) => {
    const newRecord = new Measurement({
        city: req.body.city,
        stationId: req.body.stationId,
        value: req.body.value,
        type: req.body.type
    });

    try {
        const savedRecord = await newRecord.save();
        res.status(201).json(savedRecord);
    } catch (error) {
        res.status(400).json({ errorMessage: 'Неправильні дані' });
    }
});

// Оновити запис за ID (PUT)
router.put('/measurements/:id', async (req, res) => {
    try {
        const updatedRecord = await Measurement.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        
        if (!updatedRecord) {
            return res.status(404).json({ errorMessage: 'Запис не знайдено' });
        }
        
        res.json(updatedRecord);
    } catch (error) {
        res.status(400).json({ errorMessage: 'Помилка оновлення даних' });
    }
});

// Видалити запис за ID (DELETE)
router.delete('/measurements/:id', async (req, res) => {
    try {
        const deletedRecord = await Measurement.findByIdAndDelete(req.params.id);
        
        if (!deletedRecord) {
            return res.status(404).json({ errorMessage: 'Запис не знайдено' });
        }
        
        res.json({ successMessage: 'Запис успішно видалено' });
    } catch (error) {
        res.status(500).json({ errorMessage: 'Помилка видалення даних' });
    }
});

module.exports = router;