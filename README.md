# Bons AI Landing

## Настройка отправки заявок в Telegram

1. Создайте файл `.env.local` в корне проекта.
2. Добавьте в него переменные:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`

Можно взять за основу `.env.local.example`.

3. Установите зависимости:
```bash
npm install
```

4. Запустите проект:
```bash
npm run dev
```

5. Проверьте форму локально:
- откройте лендинг,
- заполните форму демо-запроса,
- отправьте заявку,
- убедитесь, что сообщение пришло в Telegram.

API endpoint для формы: `POST /api/demo-request`.
