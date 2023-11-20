import express, { Request, Response } from 'express';
import bodyParser, { urlencoded } from 'body-parser';
import cookieSession from 'cookie-session';
import { loginRouter } from './routes/loginRoutes';
import { rootRouter } from './routes/rootRoutes';
import { logoutRouter } from './routes/logoutRoutes';
import { protectedRouter } from './routes/protectedRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['laskdjf'] }));
app.use(loginRouter);
app.use(rootRouter);
app.use(logoutRouter);
app.use(protectedRouter);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});