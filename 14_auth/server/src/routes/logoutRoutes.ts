import { Request, Response, Router } from "express";

const logoutRouter = Router();

logoutRouter.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
})

export { logoutRouter }