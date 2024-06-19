# <h2>isEazy tech assignment</h2>

    This is a basic SPA based on openweathermap API to get informationa about some locations.

# <h3>Summary</h3>

    With this application, the user can check the available time for three cities to choose from: London, Toronto, and Singapore.
    For each city, the user will see the current weather in that city, a brief summary of some weather conditions such as wind, humidity, etc

# <h3>Tech Stack</h3>

    - React
    - Context api
    - Typescript
    - Axios
    - in18
    - Styled Components
    - Antd
    - Vitest

# <h3>Architecture App</h3>

- **Common**: Main common components to use around the app
- **config**: Basic configuration for manage translations of the app
- **context**: Contain the context to manage the main information with language selected by the user
- **i18n**: Contain all configuration about who to manage the translations of the app
- **lang**: Contain all files translations of the app
- **layouts**: In this folder we built a main and reusable basic layout as a template for the app
- **pages**: Contain all the main views of the app
- **services**: In this folder has been setting up the main services to get the data from the api
- **styles**: Contain global styles to use around the app
- **utils**: This folder has been created to host all the utilities functions to use around the app

# <h3>Notes</h3>

- To run the app and load the data from the api it is necessary add the api key in the .env file

# <h3>Launch App</h3>

- This project is created with vite, so to launch the app in development mode you must execute the following command:

### `npm run dev`

- To run the app in production mode run the command :

### `npm run build`

- To run all test in the app, run the command :

### `npm run test`
