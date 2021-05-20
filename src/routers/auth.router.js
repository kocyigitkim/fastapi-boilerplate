const {FastApiRouter} = require('fastapi-express');

module.exports = class AuthRouter extends FastApiRouter.FastApiRouter{
    constructor(){
        super("auth");
    }
    index(){
        return "Hello World :)";
    }
}
