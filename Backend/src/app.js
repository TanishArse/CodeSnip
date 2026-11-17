import express from "express";
import snippetRoutes from "./routes/snippetRoutes.js"
// import cors from "cors";

const app = express();

// app.use(cors());
app.use(express.json());
app.use("/api/snippets",snippetRoutes);
export default app;