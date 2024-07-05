import { Hono } from "hono";
import { getAllDestinations, getTopDestinations, searchDestinations } from "../controllers/DestinationController";

const router = new Hono();

router.get("/top", (c) => getTopDestinations(c));
router.get("/all", (c) => getAllDestinations(c));
router.post("/search", (c) => searchDestinations(c));

export const Routes = router;