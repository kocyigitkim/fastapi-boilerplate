const { FastApi } = require('fastapi-express');
const app = new FastApi();

async function initialize() {
    //Register Api
    app.registerRouter("./routers", __dirname);
    //You can use react ui easily. Uncomment the line for use this feature
    //app.registerReact("/", "client");
}

(async function main() {
    app.oninit.addHandler(initialize);

    //Run App
    await app.run();
})();
