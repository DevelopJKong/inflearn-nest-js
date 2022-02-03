import * as express from "express";
import { Cat, CatType } from "./app.module";
const app: express.Express = express();
const port: number = 8090;

app.use((req,res,next) => {
  console.log(req.rawHeaders[1]);
  next();
});

app.get('/cats/som',(req,res,next) => {
  console.log('this is som middleware');
  next();
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.get("/cats/blue", (req, res, next: express.NextFunction) => {
  res.send({ blue: Cat[0] });
});
app.get("/cats/som", (req, res) => {
  res.send({ som: Cat[1] });
});

app.use((req,res,next) => {
  console.log('this error middle');
  res.send({error:'404 not found error'});
  
});



app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
