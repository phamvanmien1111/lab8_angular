import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import { ConnectDB } from "./config/db";
import { router } from "./routers/index.routes";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fullPath = path.join(__dirname, "/public/files");
console.log(fullPath);
const app = express();
app.use(express.json());
app.engine("hbs", engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "resources/views/layouts"),
    helpers: {
        json: (context) => JSON.stringify(context, null, 2),
    },
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
// app.use(express.static(path.join(__dirname, "src/public")));
app.use(express.static(path.join(process.cwd(), "src/public")));
app.set("views", path.join(__dirname, "resources/views"));
app.use(cors({ origin: "http://localhost:4200" }));
router(app);
ConnectDB();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server chạy tại: http://localhost:${port}`);
});
