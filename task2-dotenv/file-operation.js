const fs = require('fs');
const dotenv = require('dotenv');

// Загружаем переменные из .env в process.env
dotenv.config();

const fileName = process.env.FILENAME;

if (!fileName) {
  console.error('Переменная FILENAME не задана в .env');
  process.exit(1);
}

const text = 'Привет! Этот файл создан с помощью fs и dotenv.';

// 1. Создаём файл и записываем в него текст
fs.writeFile(fileName, text, 'utf8', (err) => {
  if (err) {
    console.error('Ошибка записи файла:', err.message);
    return;
  }
  console.log(`Файл ${fileName} создан`);

  // 2. Читаем содержимое файла (только после того, как запись завершилась)
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err.message);
      return;
    }
    console.log('Содержимое файла:', data);
  });
});
