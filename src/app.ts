import * as express from "express";
import { Cat, CatType } from "./app.module";
const app: express.Express = express();
const port: number = 5050;

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ cats: Cat });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
