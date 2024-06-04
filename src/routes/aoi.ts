import { Router } from "express";
import controller from "../controllers/AoiController";
const router = Router();

router.get("/", controller.list);
router.post("/", controller.create);
router.delete("/", controller.delete);
router.put("/geom", controller.updategeom);
router.put("/area", controller.updatearea)

export default router