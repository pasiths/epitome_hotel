import express from "express";

import { protectRoute } from "../middleware/protectRoute.js";
import { acceptOrder, deliveredOrder, getOrder, getOrderProduct, getOrders, sendOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/send/", protectRoute, sendOrder);
router.get("/", protectRoute, getOrders);
router.get("/:id", protectRoute, getOrder);
router.get("/product/:kitchen", protectRoute, getOrderProduct);
router.put("/accept/:id",protectRoute,acceptOrder)
router.put("/delivered/:id",protectRoute,deliveredOrder)

export default router;
