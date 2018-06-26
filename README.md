# simple-react-starter

⚛️ An extremely slim boilerplate for a React/Express project.

## Including:

- React 16
- Express
- Webpack 4 (+ Dev Server, Hot Reload)
- Babel 7 (+ Plugins)
- ESLint (+ precommit hooks w/ Husky)
- Prettier
- Simple Dockerfile

## How To Use

- For development, use the following scripts:
  - Launch Nodemon with ESLint for the Backend: `npm run dev:backend`
  - Launch Webpack Dev Server for Frontend: `npm run dev:frontend`
  - Or, launch both concurrently with: `npm run dev`
- For production:
  - Lint and Build with `npm run build`
  - Serve the built files in `/dist` with `npm start`
  - Or, build the docker container
