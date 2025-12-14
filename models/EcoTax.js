const mongoose = require('mongoose');

const EcoTaxSchema = new mongoose.Schema({
    pollutant: { type: String, required: true },
    mass: Number,     // Маса викиду
    rate: Number,     // Ставка податку
    kTime: Number,    // Коефіцієнт часу
    kRegion: Number,  // Коефіцієнт регіону
    kBenefit: Number, // Коефіцієнт пільги
    taxAmount: Number, // Результат (сума податку)
    date: { type: Date, default: Date.now }
});

// Найважливіший рядок, якого скоріш за все не вистачало:
module.exports = mongoose.model('EcoTax', EcoTaxSchema);