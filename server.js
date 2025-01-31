const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Указываем папку для статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Обработка корневого маршрута
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello World' });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
