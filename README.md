# Docker Comopose MERN Environment for Development and Production

## Development Environment

### Composing the Development Environment

To compose the development environment, run `docker-compose -f docker-compose.dev.yml up -d --build`.

* The front end will be accesible at http://localhost:3000. 
    * To set this to a different port, change `DEV_CLIENT_PORT` in the .env file.

* The back end will be accessible at http://localhost:8080. 
    * To set this to a different port, change `DEV_SERVER_PORT` in the .env file.

### Debugging the Development Environment

To debug issues with the Docker compose process, run `docker-compose logs`.

It may also help to remove the `--silent` flag for the npm installs in the client Dockerfile, as this sometimes surpresses errors.

To continually see errors thrown in the Node container, attach your terminal to it by running `docker attach [NAME_OF_NODE_CONTAINER_HERE]`.

To see the names of your running containers, run `docker ps` and look under the "NAMES" column.

### Entering the Development Containers

It is often useful to enter the containers during development. This will allow you to run commands within them.

To see the names of your running containers, run `docker ps` and look under the "NAMES" column.

* To enter the Node container, run `docker exec -it [NAME_OF_NODE_CONTAINER_HERE] bash`.

* To enter the React container, you'll need to install bash on it. [This guide](https://www.cyberciti.biz/faq/alpine-linux-install-bash-using-apk-command/) may be helpful. To run commands against the container, use `docker exec -it [NAME_OF_REACT_CONTAINER_HERE] [COMMAND]`.

To exit either container, run `exit`.

### Note On Hot Reloads

If any new modules are added, the project will need to be torn down and composed again.

### Tearing Down the Development Environment

To tear down the development environment and remove all volumes, run `docker-compose -f docker-compose.dev.yml down --volumes --remove-orphans`

## Production Environment

## Other Notes

### Connecting to an External Database

These instructions apply to both the development and production environments. Make changes to the `docker-compose.dev.yml` file or the `docker-compose.prod.yml` depending on your configuration. Also make changes to the `DEV_DB_URI` or `PROD_DB_URI` variables in the .env files depending on your desired configuration.

1. Comment out everything under the `mongo` service in the relevant docker-compose file.

2. Comment out the `node` service's `depends_on` entry for `mongo` in the relevant docker-compose file.

3. Update either the `DEV_DB_URI` or the `PROD_DB_URI` in the .env file depending on your desired configuration.

## Resources

This project was created using a number of resources, all of which may be helpful for future development.

* [Dockerizing a React App](https://mherman.org/blog/dockerizing-a-react-app/)
    * Includes information on creating a multistage production build
    * Explains how to configure React Router alongside NGINX in production 
* [Stack Overflow On React Scripts Exiting In Cotainers](https://stackoverflow.com/questions/60790696/react-scripts-start-exiting-in-docker-foreground-cmd)
    * Explains the use of `stdin_open: true` within docker-compose files
