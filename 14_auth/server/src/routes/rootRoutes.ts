import { Router, Request, Response } from 'express';

const rootRouter = Router();

rootRouter.get('/', (req: Request, res: Response) => {
  if(req.session && req.session.loggedIn) {
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

rootRouter.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
})

export { rootRouter };