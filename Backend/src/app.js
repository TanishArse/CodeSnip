import express from "express";
import snippetRoutes from "./routes/snippetRoutes.js"
import cors from "cors";

const app = express();

app.use(cors({origin:"http://localhost:5173"}));
app.use(express.json());

app.use((req, res, next) => {
    console.log("Content-Type:", req.headers["content-type"]);
    console.log("Parsed body:", req.body);
    next();
});

app.use("/api/snippets",snippetRoutes);
export default app;