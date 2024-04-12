import DomHandel from "./dom";
import "./style/output.css";

import ProjectGen from "./modules/project.js";

const dom = DomHandel();

dom.addProject("My Tasks");
dom.project_list[0].list.addItem(
  "Buy games",
  "form this store",
  "12-12-2001",
  true,
);

dom.displayMain(dom.project_list[0].list);
// dom.project_list[0].list.addItem("hello", "aads", "12-12-2001", 2);
// dom.project_list[0].list.addItem("hello", "aads", "12-12-2001", 2);
// dom.project_list[0].list.addItem("hello", "aads", "12-12-2001", 2);
// dom.addProject("Javascript");
// dom.project_list[1].list.addItem("hello", "aads", "12-12-2001", 2);
// dom.project_list[1].list.addItem("hello", "aads", "12-12-2001", 2);
