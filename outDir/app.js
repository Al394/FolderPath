"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.listen(3000, () => {
    console.log("CIAO");
});
app.use(express_1.default.static("public"));
// set the view engine to ejs
app.set("view engine", "ejs");
// use res.render to load up an ejs view file
// index page
app.get("/", function (req, res) {
    res.render("pages/advanced_paths", { data: data });
});
// advanced_paths page
var data = [
    { id: 1, path: "Machine" },
    { id: 2, path: "Order" },
    { id: 3, path: "Job" },
    { id: 4, path: "Editable" },
];
app.get("/index", function (req, res) {
    res.render("pages/index");
});
`app.set('view engine', 'ejs');`;
