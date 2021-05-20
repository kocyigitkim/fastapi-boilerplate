const { FastApi } = require('fastapi-express');
const app = new FastApi();

async function initialize() {
    //Register Api
    app.registerRouter("./routers", __dirname);
    //You can use react ui easily. Uncomment the line for use this feature
    //app.registerReact("/", `${__dirname}/client`);
}

async function main() {
    //Initialize App
    await initialize();
    //Run App
    await app.run();
}
main();