# rest-mood-tracker
Backend application based on NestJs for mood tracking.

### Prerequisites
Install docker to run postgres db container from [here](https://docs.docker.com/get-docker/)

### Steps to run:
Ensure that any previously running postgres docker container:
```sh
yarn db:stop
```

Trigger reinitialization of a new postgres docker container:
```sh
yarn db:start
```

Build the backend project and run the base typeorm migrations:
```sh
yarn workspace rest-mood-tracker db:run
```

Once the migrations are loaded, you can start the app in watch mode:
```sh
yarn workspace rest-mood-tracker start:dev
```

In case of modification of the entities, generate new migration using:
```sh
yw rest-mood-tracker db:generate <MigrationScriptName>
```
The migration will be generated in the `src/db/migrations` folder.

### Workspace Structure
The following sections explains the folder structure:

- `./`
    - `src`:
        - `[auth]`: The authentication module.
        - `[db]`:
          - `[entities]`: Folder containing the db entities.
          - `[fixtures]`: Folder containing fixture data.
          - `[migrations]`: Folder containing the generated migrations.
          - `[repositories]`: Folder containing the respository actions.
        - `[mood]`: The mood module.
        - `[user]`: The user module. This is for future improvement and not being used at the moment.
    - `eslint.js`: The rules configured for stylelint.
    - `package.json`: The node package definition, with packages links and hoisted devDependencies.
    - `tsconfig.json`: TypeScript config specific to `rest-mood-tracker`.


### Github Actions
- Workflows are specified in the `.github/workflows/rest-mood-tracker.yaml` file in the root directory.
