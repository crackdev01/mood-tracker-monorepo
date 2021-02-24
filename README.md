# Mood Tracker WebApp
Web application to track mood based on React and NestJS.

## Pipeline status:
[![rest-mood-tracker](https://github.com/Akash-M/mood-tracker-monorepo/actions/workflows/rest-mood-tracker.yaml/badge.svg)](https://github.com/Akash-M/mood-tracker-monorepo/actions/workflows/rest-mood-tracker.yaml)
[![ui-mood-tracker](https://github.com/Akash-M/mood-tracker-monorepo/actions/workflows/ui-mood-tracker.yaml/badge.svg)](https://github.com/Akash-M/mood-tracker-monorepo/actions/workflows/ui-mood-tracker.yaml)

## Prerequisites

### Package Manager
This repo is based on Yarn2. Ensure that you have a global installation of
[Yarn2](https://yarnpkg.com/getting-started/install#global-install).
Note: `nodeLinker` is set to `node-modules` as migrating to pnp is out of scope for now.

You can test if yarn is installed correctly by using:
```sh
yarn --version
```

Install docker to run postgres db container from [here](https://docs.docker.com/get-docker/)

## Quick starter on running the app
Installing all the dependencies
```sh
yarn
```
Start the backend
```sh
yarn start:backend
```
Start the frontend
```sh
yarn start:frontend
```

Please find the documentation specific to the apps inside the app ReadMe linked in the following section:
Note: **Ensure docker is up and running otherwise the backend will fail.**

Start the backend
```sh
yarn start:backend
```

Start the frontend
```sh
yarn start:frontend
```

Please find the documentation specific to the apps inside the app ReadMe linked in the following section:

### Workspace Structure
This application follows a monorepo approach. The following sections explains the folder structure:

- `./.github/`: PR templates and Github Action definitions.
- `./.yarn/`: Dependencies installed from yarn2.
- `./packages/`: TypeScript applications defined as independent modules.
    - [`frontend/`](packages/frontend/rest-mood-tracker/README.md): Folder containing the frontend application.
    - [`backend/`](packages/backend/ui-mood-tracker/README.md): Folder containing the backend application.
- `./`
    - [`screenshots`]: Folder containing screenshots of the app for desktop, tablet and mobile.
    - `.eslintrc.js`: ESLint rules.
    - `.gitignore`: File and folder globs to be ignored by git.
    - `.yarnrc.yml`: Config file for yarn2.
    - `package.json`: The node package definition, with packages links and and scripts.
    - `yarn.lock`: Auto generated lock file from yarn.
