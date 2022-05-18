import Application from "./app";

const application = new Application();
const port = process.env.PORT ? Number(process.env.PORT) : 8080;
const portLocal = 8080;

application.init();
application.dev(port);