# ui-mood-tracker
Frontend app for mood tracking based on React.

### Scripts
Starting the app in dev mode
```sh
yarn workspace ui-mood-tracker start:dev
```

Running unit tests in coverage mode
```sh
yarn workspace ui-mood-tracker test:unit
```
Coverage report is generated in `packages/frontend/ui-mood-tracker/coverage`.

Running e2e cypress
```sh
yarn workspace ui-mood-tracker test:e2e
```

Building the app to generate the bundle
```sh
yarn workspace ui-mood-tracker build
```

### Workspace Structure
The following sections explains the folder structure:

- `./`
    - `cypress`: 
      - `integration`: Contains the e2e test.
    - `public`: Contains the basic application manifest files.
    - `src`:
      - `__tests__`: Folder containing all the unit test specs.
      - `api`: Api calls to the backend through axios.
      - `components`: All the commonly shared React components.
      - `containers`: All the React containers composed of `components`.
      - `scss`: Shared styles.
      - `store`: Store based on Redux Saga.
    - `i18n.ts`: Language loader.
    - `eslint.js`: The rules configured for stylelint.
    - `package.json`: The node package definition, with packages links and hoisted devDependencies.
    - `stylelint.js`: The rules configured for stylelint.  
    - `tsconfig.json`: TypeScript config specific to `ui-mood-tracker`.
    
### Github Actions
 Workflows are specified in the `.github/workflows/ui-mood-tracker.yaml` file in the root directory.

### Testing philosophy

#### Unit tests
The app is tested primarily through unit tests using [jest](https://jestjs.io/) and [enzyme](https://enzymejs.github.io/enzyme/)
Unit testing React components uses shallow approach making the testing pyramid large on the base. This helps in testing
components in a detached manner.

Sagas are tested through `redux-saga-test-plan`.

#### E2E tests
The app contains a test spec for e2e testing using [cypress](https://www.cypress.io/). It tests the basic flow
from login to navigating to the two screens, changing the language and logging the user out.

### Linting
- The app is tested through standard `eslint` packages with rules specified for React typescript.
- The styles are linted use `stylelint`.

### Future Improvements:
- Increase unit test coverage to 90%+ overall.
- Add more e2e tests with more assertions for different elements.
- Setup `stylelinter` package to enhance linters capabilities for styles. 

### Issues
- Console warning `findDOMNode is deprecated in StrictMode` related to Semantic UI to be tracked
  [here](https://github.com/Semantic-Org/Semantic-UI-React/issues/3819).
- Unit testing through jest and enzyme requires mocking of native react hooks in some places. The `useEffect`
  hook is not triggered by default on shallowMounting components as tracked here:
  https://github.com/enzymejs/enzyme/issues/2086 .
  


