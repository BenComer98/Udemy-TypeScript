"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutRouter = void 0;
const express_1 = require("express");
const logoutRouter = (0, express_1.Router)();
exports.logoutRouter = logoutRouter;
logoutRouter.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
