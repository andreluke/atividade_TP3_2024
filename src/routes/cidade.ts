import { Router } from "express";
import controller from "../controllers/CidadeController";
const router = Router();

router.get("/", controller.list);
router.post("/", controller.create);
router.delete("/", controller.delete);
router.put("/", controller.update);

export default router