
import express from "express";

import { getAllSnippets ,getSingleSnippet,createSnippet,updateSnippet,deleteSnippet} from "../controllers/snippetController.js";
const router= express.Router();

router.get("/",getAllSnippets);
router.get("/:id",getSingleSnippet);
router.post("/",createSnippet);
router.put("/:id", updateSnippet);
router.delete("/:id",deleteSnippet)
export default router;

