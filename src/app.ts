import * as express from "express";
import catsRouter from "cats/cats.route";
const app: express.Express = express();
const port: number = 8050;

//*logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  next();
});

//* json middleware => 이렇게 json을 읽을수있도록 저장을해야 post로 보낸 것을 읽을수가 있다
app.use(express.json());

app.use(catsRouter);

//*404 middleware
app.use((req, res, next) => {
  console.log("this error middle");
  res.send({ error: "404 not found error" });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
