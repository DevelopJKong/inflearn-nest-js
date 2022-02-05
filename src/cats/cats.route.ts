import { Cat, CatType } from "./cats.module";
import {createCat, deleteCat, patchCat, putCat, readAllcat, readCat} from "./cats.service";
import * as express from "express"; // 왜 이렇게 사용하면 되는거지?
const catsRouter = express.Router(); // 왜 여기서 import express from "express" 해서 express.Router() 라고 하면 안되는거지?

//*READ 고양이 전체 데이터 다 조회
catsRouter.get("/cats",readAllcat);

//*READ 특정 고양이 데이터 조회
catsRouter.get("/cats/:id",readCat);

//*CREATE 새로운 고양이 추가 api
catsRouter.post("/cats",createCat);

//*UPDATE 고양이 데이터 업데이트 -> PUT
catsRouter.put("/cats/:id",putCat);

//*UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
catsRouter.patch("/cats/:id",patchCat);
//*DELETE 고양이 데이터 삭제 -> DELETE
catsRouter.delete("/cats/:id",deleteCat);
export default catsRouter;
