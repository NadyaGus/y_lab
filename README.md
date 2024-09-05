# y_lab

Установить проект:

```js
cd homework_1
npm install
npm run dev
```

Из-за того, что проект находится не в корневой папке репозитория, VSCode может показывать ошибку линтера.
Чтобы решить эту проблему можно просто открыть в VSCode нужную папку сразу или исправить конфиг VSCode, добавить в setting.json:

```js
  "eslint.workingDirectories": [
    {
      "mode": "auto"
    }
  ]
```

Данные для аутентификации:

```js
{
    "email": "ylab@example.com",
    "password": "test"
}
```
