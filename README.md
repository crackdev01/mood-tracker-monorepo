# Mood Tracker WebApp
Web application to track mood based on React and NestJS.

## Pipeline status:
[![rest-mood-tracker](https://github.com/Akash-M/mood-tracker-monorepo/actions/workflows/rest-mood-tracker.yaml/badge.svg)](https://github.com/Akash-M/mood-tracker-monorepo/actions/workflows/rest-mood-tracker.yaml)

## Prerequisites

### Package Manager
This repo is based on Yarn2. Ensure that you have a global installation of
[Yarn2](https://yarnpkg.com/getting-started/install#global-install).

You can test if yarn is installed correctly by using:
```sh
yarn --version
```

### Scripts
- Installing the dependencies
```sh
yarn
```

### Workspace Structure
This application follows a monorepo approach. The following sections explains the folder structure:

- `./.github/`: PR templates and Github Action definitions.
- `./.yarn/`: Dependencies installed from yarn2.
- `./packages/`: TypeScript applications defined as independent modules.
    - [`frontend/`](packages/frontend/rest-mood-tracker/README.md): folder containing the frontend application.
    - [`backend/`](packages/backend/ui-mood-tracker/README.md): folder containing the backend application.
- `./`
    - `.eslintrc.js`: ESLint rules.
    - `.gitignore`: File and folder globs to be ignored by git.
    - `.yarnrc.yml`: Config file for yarn2.
    - `package.json`: The node package definition, with packages links and and scripts.
    - `yarn.lock`: Auto generated lock file from yarn.
