# Инструкция по развёртыванию приложения
## Необходимые компоненты
- [Node.js](https://nodejs.org/en/)
- [Vue CLI](https://cli.vuejs.org/ru/guide/installation.html)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
## Настройка среды
1. Установить [Node.js](https://nodejs.org/en/).
2. Выполнить следующие команды:
    1. ```npm install -g @vue/cli```
    2. ```npm install```
    3. ```npm install --global yarn```
3. Запустить сервер командой ```npm run serve```
## Настройка API
В качестве тестового сервера был использован [json-server](https://github.com/typicode/json-server). Чтобы настроить, его необходимо выполнить:
1. ```npm init```
2. ```npm install --save json-server```
3. Сконфигурировать файл `package.json` следующим образом:
```
{
  "name": "jsonserver",
  "version": "1.0.0",
  "description": "test jsonserver",
  "main": "index.js",
  "scripts": {
    "json:server": "json-server --watch db.json"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "json-server": "^0.17.0"
  }
}
```
4. Создать файл `db.json`
5. Запустить json-server командой ```npm run json:server```

Если используется другой сервер, необходимо сменить ```Axios.defaults.baseURL``` [в файле конфигурации API-сервисов](https://github.com/Donnicool/InfoTech_test/blob/master/infotech_test/src/services/TodoAPI.js).
