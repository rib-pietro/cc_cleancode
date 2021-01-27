"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterApiController = void 0;
const express_1 = require("express");
const hateoasLinker = require('express-hateoas-links');
const routerApi = express_1.Router();
const data = {
    _id: '123',
    name: 'Pietro',
};
routerApi.use(hateoasLinker);
routerApi.get('/', (req, res) => {
    const schema = {
        "name": "User",
        "description": "API User",
        "properties": {
            "_id": {
                "title": "Id",
            }
        }
    };
    res.json(schema, [
        { rel: 'self', method: 'GET', 'href': 'http://localhost:3000' }
    ]);
});
exports.RouterApiController = routerApi;
//# sourceMappingURL=router.api.js.map