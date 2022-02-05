import * as express from "express";
import catsRouter from "./cats/cats.route";
const port: number = 8050;
//싱글톤 패턴 적용
//싱글톤 패턴이란 객체의 인스턴스가 오직 한개만 생성되도록 만드는것
//클래스가 있고 오직 딱 한개의 인스턴스만 찍어 내는 패턴이다
//싱글톤 패턴을 사용하는 이유는 한번의 new 연산자를 통해서
//한개의 인스턴스만 만들수있기 때문에 추후 접근을 할때
//메모리 단계에서 메모리 누수를 방지 할수있다
//다른 클래스간의 데이터 공유가 쉽다는 장점이 있습니다
//여기서는 app 다른 인스턴스들이 접근 하여 현재는 사용할수있다

class Server {
  public app: express.Application;
  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    //*logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      next();
    });

    //* json middleware => 이렇게 json을 읽을수있도록 저장을해야 post로 보낸 것을 읽을수가 있다
    this.app.use(express.json());

    this.setRoute();

    //*404 middleware
    this.app.use((req, res, next) => {
      console.log("this error middle");
      res.send({ error: "404 not found error" });
    });
  }
  public listen() {
    this.setMiddleware();
    this.app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
    
  }

}
function init() {
  const server = new Server();
  server.listen();
}
init();

