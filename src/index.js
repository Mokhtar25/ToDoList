import DomHandel from "./dom";
import "./style/output.css";

const dom = DomHandel();

dom.addProject("My Tasks");

dom.addProject("Programming");
dom.project_list[1].list.addItem(
  "in programming",
  "do that",
  "12-12-2000",
  true,
);
dom.project_list[0].list.addItem(
  "Buy games",
  "form this store",
  "12-12-2001",
  true,
);

dom.addNoteManual(
  dom.project_list[0],
  "Make a to do list website",
  "do it well",
  "12-12-2024",
  true,
);
dom.runfirst();
