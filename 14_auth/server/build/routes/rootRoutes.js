"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRouter = void 0;
const express_1 = require("express");
const rootRouter = (0, express_1.Router)();
exports.rootRouter = rootRouter;
rootRouter.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `);
    }
    else {
        res.send(`
      <div>
        <div>You are logged out</div>
        <a href="/login">Login</a>
      </div>
    `);
    }
});
rootRouter.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
