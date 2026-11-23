
import express from "express";

import { getAllSnippets ,getSingleSnippet,createSnippet,updateSnippet,deleteSnippet} from "../controllers/snippetController.js";
const router= express.Router();

router.get("/",getAllSnippets);

router.post("/",createSnippet);

router.put("/:id", updateSnippet);
router.delete("/:id",deleteSnippet);
router.get("/:id",getSingleSnippet);
export default router;

