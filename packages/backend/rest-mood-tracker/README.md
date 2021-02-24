# rest-mood-tracker
Backend application based on NestJs for mood tracking.

### Prerequisites
Install docker to run postgres db container from [here](https://docs.docker.com/get-docker/)

### Steps to run:
- Ensure that any previously running postgres docker container:
```sh
yarn db:stop
```

- Start a fresh postgres docker container:
```sh
yarn db:start
```

- Build the backend project and run the base typeorm migrations:
```sh
yarn workspace rest-mood-tracker db:run
```

- Once the migrations are loaded, you can start the app in watch mode:
```sh
yarn workspace rest-mood-tracker start:dev
```

### Github Actions
- Workflows are specified in the `.github/workflows/rest-mood-tracker.yaml` file in the root directory.
