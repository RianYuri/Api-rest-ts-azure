"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startUp_1 = require("./startUp");
let port = '3000';
startUp_1.default.app.listen(port, function () {
    console.log(`servidor escutando na porta ${port}`);
});
