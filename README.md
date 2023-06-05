Задание 2: 01.03.2023
Реализовать раздел навигации Вход / Регистрация
Развернуть на фронте стор менеджер (redux)
Реализовать редюсер, который будет вызывать редюсер для получения пользователя и произовить регистрацию пользователя (в данном случае соединять массив) let users = [ {...}, newUser ]
Хранить шаблонные данные пользователя в локальной переменной, которую вернет редюсер
--------------
Структура переменной / коллекции пользователя

{ id: 1, name: '....', login: '...', password: '...' }
--------------
Задача со звездочкой

Развернуть сервер на express.js. Создать роутинги по аналогии с роутингом posts
При нажатии на кнопку Вход / Зарегистрироваться передавать заполненные данные на сервер, в соответствующий роутинг (GET , POST)
Если действие является "Вход" - выполнить вызов метода Users.findOne({login: login, password: password}), полученный ответ передать в реакт (фронт), иначе вывести положительный ответ с текстом "Пользователь отсутствует".
Если действие является "Регистрация" заносить в базу данных в коллекцию (таблицу) users данные, введенные пользователем. после чего перенаправлять на роутинг получения пользователя ( res.redirect(/user/${id}) ) и вернуть полученного пользователя в реакт (фронт).
Полученного пользователя хранить в сторе (redux) на фронте (react). Если в сторе пользователь присутствует, то в навигации скрыть кнопки "Вход / Регистрация" и выводить имя пользователя + кнопку "Выход" которая будет очищать стор и эмулировать выход из аккаунта, после чего появятся изначальные кнопки.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
