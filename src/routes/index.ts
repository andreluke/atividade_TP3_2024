import { Router } from "express";
import aoi from "./aoi"
import estado from "./estado"
import user from "./user"
import cidade from "./cidade"

const router = Router()

router.use("/aoi", aoi)
router.use("/estado", estado)
router.use("/usuario", user)
router.use("/cidade", cidade)

export default router