import * as express from "express";
import { Cat, CatType } from "./app.module";
const app: express.Express = express();
const port: number = 8050;

//*logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  next();
});

//* json middleware => 이렇게 json을 읽을수있도록 저장을해야 post로 보낸 것을 읽을수가 있다
app.use(express.json());


//*READ 고양이 전체 데이터 다 조회
app.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error:any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//*READ 특정 고양이 데이터 조회
app.get("/cats/:id", (req, res) => {
  try {
    const { id } = req.params;
    const cats = Cat.find((cat)=> {
      return cat.id === id;
    });
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error:any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//*CREATE 새로운 고양이 추가 api
app.post("/cats",(req,res) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data);
    res.status(200).send({
      success:true,
      data: {}
    })
  } catch (error:any) {
    res.status(400).send({
      success:false,
      error:error.message
    })
  }
});

//*404 middleware
app.use((req, res, next) => {
  console.log("this error middle");
  res.send({ error: "404 not found error" });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
