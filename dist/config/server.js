"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = require("./router");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express = require('express');
class WebServer {
    static initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            const app = express();
            const port = process.env.PORT || 3000;
            app.use(body_parser_1.default.json());
            app.use(body_parser_1.default.urlencoded({ extended: true }));
            app.use('/', router_1.RouterController);
            app.listen(port, () => {
                console.log(`API running on port ${port}`);
            });
        });
    }
}
exports.default = WebServer;
//# sourceMappingURL=server.js.map