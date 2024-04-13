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
dom.project_list[0].list.getItems()[0].done = true;

dom.addNoteManual(
  dom.project_list[0],
  "Make a to do list website",
  "do it well",
  "12-12-2024",
  true,
);
dom.runfirst();
