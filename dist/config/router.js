"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterController = void 0;
const express_1 = require("express");
const router_api_1 = require("./router.api");
const router = express_1.Router();
router.get('/', (request, response) => {
    response.send('It works mtf!');
});
router.use('/api', router_api_1.RouterApiController);
exports.RouterController = router;
//# sourceMappingURL=router.js.map