import { index } from "../app/controllers/home.controller";
import { lienhe, postContact } from "../app/controllers/lienhe.controller";
import { getProjectById } from "../app/controllers/project.Controller";
import { showFile, downloadFile, renderView } from '../app/controllers/about.controller';
export function router(app) {
    app.get("/", (req, res) => {
        // res.send("Hello World!");
        res.redirect("/home");
    });
    app.get("/home", index);
    app.get("/lienhe", lienhe);
    app.post("/lienhe", postContact);
    app.get("/project/:id", getProjectById);
    app.get('/pdf/view', showFile);
    app.get('/pdf/download', downloadFile);
    app.get('/pdf', renderView);
}
