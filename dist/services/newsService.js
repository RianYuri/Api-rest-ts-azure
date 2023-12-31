"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsRepository_1 = require("../repository/newsRepository");
class NewsService {
    get() {
        return newsRepository_1.default.find({});
    }
    getById(_id) {
        return newsRepository_1.default.findById(_id);
    }
}
exports.default = new NewsService;
