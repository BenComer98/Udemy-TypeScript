import { Router, Response } from 'express';
import { RequestWithBody } from '../typeOverrides/RequestWithBody';

const loginRouter = Router();

loginRouter.get('/login', (req: RequestWithBody, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});

loginRouter.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  
  if (email && password) {
    if (email === 'hi@hi.com' && password === 'password') {
      // Express Sessions
      req.session = { loggedIn: true };
      
      res.redirect('/');
    }
    else {
      res.send('Invalid email or password.');
    }
  }
  else {
    res.send('Must provide an email and password.')
  }
});

export { loginRouter };