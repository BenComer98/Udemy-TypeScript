"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const loginRoutes_1 = require("./routes/loginRoutes");
const rootRoutes_1 = require("./routes/rootRoutes");
const logoutRoutes_1 = require("./routes/logoutRoutes");
const protectedRoutes_1 = require("./routes/protectedRoutes");
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ['laskdjf'] }));
app.use(loginRoutes_1.loginRouter);
app.use(rootRoutes_1.rootRouter);
app.use(logoutRoutes_1.logoutRouter);
app.use(protectedRoutes_1.protectedRouter);
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
