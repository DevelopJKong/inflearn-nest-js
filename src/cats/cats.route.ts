import { Cat, CatType } from "./cats.module";
import express from "express";
const catsRouter = express.Router();

//*READ 고양이 전체 데이터 다 조회
catsRouter.get("/cats", (req, res) => {
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
  catsRouter.get("/cats/:id", (req, res) => {
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
  catsRouter.post("/cats",(req,res) => {
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
  

  export default catsRouter;