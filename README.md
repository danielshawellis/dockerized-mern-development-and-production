# Docker Comopose MERN Environment for Development and Production

## Composing the Development Environment

To compose the development environment, run `docker-compose up -d --build`.

The front end will be accesible at http://localhost:3000.

The back end will be accessible at http://localhost:8080.

## Debugging the Development Environment

To debug issues with the Docker compose process, run `docker-compose logs`.

It may also help to remove the `--silent` flag for the npm installs in the client Dockerfile, as this sometimes surpresses errors.

## Tearing Down the Development Environment

To tear down the development environment and remove all volumes, run `docker-compose down --volumes --remove-orphans`
