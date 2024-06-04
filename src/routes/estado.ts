import { Router } from "express";
import controller from "../controllers/EstadoController";
const router = Router();

router.get("/", controller.list);
router.post("/", controller.create);
router.delete("/", controller.delete);
router.put("/nome", controller.updatenome);
router.put("/sigla", controller.updatesigla);

export default router