"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class startUp {
    constructor() {
        this.app = express();
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
    }
}
exports.default = new startUp();
