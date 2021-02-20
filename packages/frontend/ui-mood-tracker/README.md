# ui-mood-tracker
Frontend app for mood tracking based on React.

### Scripts
- Starting the app in dev mode
```sh
yarn workspace ui-mood-tracker start:dev
```

- Running unit tests in coverage mode
```sh
yarn workspace ui-mood-tracker test:unit:cov
```
Coverage report is generated in `packages/frontend/ui-mood-tracker/coverage`.

- Building the app
```sh
yarn workspace ui-mood-tracker build
```

### Workspace Structure
This application follows a monorepo approach. The following sections explains the folder structure:

- `./`
    - `public`: Contains the basic application manifest files.
    - `src`:
      - `__tests__`: Folder containing all the test specs.
      - `components`: All the commonly shared React components.
      - `containers`: All the React containers composed of `components`.
    - `package.json`: The node package definition, with packages links and hoisted devDependencies.
    - `tsconfig.json`: TypeScript config specific to `ui-mood-tracker`.
    
### Github Actions
- Workflows are specified in the `.github/workflows/ui-mood-tracker.yaml` file in the root directory.
