import ProjectGen from "./modules/project";

export default function DomHandel() {
  const makeproject = ProjectGen();
  const add_project_btn = document.querySelector(".add_project_btn");
  const close_project = document.querySelector(".exit_project_btn");
  let sidemeanu = document.querySelector(".project_list");
  let current_project;
  const project_list = [];

  function addProject(project1) {
    const project = makeproject(project1);
    project_list.push(project);

    const new_div = document.createElement("div");
    new_div.classList.add("project_item");
    new_div.textContent = project.project_name;
    new_div.value = project.number;
    addlistner(new_div);
    sidemeanu.appendChild(new_div);

    function addlistner(div) {
      div.addEventListener("click", () => displayMain(project.list));
      current_project = project;
    }
  }

  function addNoteManual(pname, title, notes, date, important) {
    pname.list.addNote(title, notes, date, important);
  }

  function refresh() {
    add_note_btn = document.querySelector("class");
    sidemeanu = document.querySelector(".project_list");
  }

  function displayMain(list) {
    const items = list.getItems();

    const container = document.querySelector(".notes_wrap");
    container.innerHTML = "";
    items.forEach((element) => {
      const frag = document.createDocumentFragment();

      const wraper = document.createElement("div");
      wraper.classList.add("notewrap");

      const note = document.createElement("div");
      note.classList.add("note");
      note.textContent = element.note;

      wraper.appendChild(note);
      frag.appendChild(wraper);
      container.appendChild(frag);
    });
  }

  function addprojectbtn() {
    const dialog = document.querySelector("#modal");
    const input = document.querySelector(".add_project input");
    const save_btn = document.querySelector(".submit_project");

    dialog.close();
    add_project_btn.addEventListener("click", () => {
      dialog.show();
    });
    close_project.addEventListener("click", () => {
      input.value = "";
      dialog.close();
    });

    save_btn.addEventListener("click", () => {
      if (input.value == "") {
        alertmessage("Please enter a Valid Project name");
      } else if (input.value.length > 50) {
        alertmessage("Project Name cannot be more than 50 charchter");
      } else {
        addProject(input.value);
        dialog.close();
        input.value = "";
      }
    });

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        save_btn.click();
      }
    });
  }

  addprojectbtn();

  function addnote() {
    const dialog = document.querySelector(".add_note_dialog");
    const add_note_btn = document.querySelector(".add_note");
    const save_btn = document.querySelector(".add_note_dialog submit_note");
    add_note_btn.addEventListener("click", () => {
      dialog.show();
    });
    save_btn.addEventListener("click", () => {
      dialog.close();
      current_project.list.addItem("1", 3, 4, 6);
    });
  }

  function alertmessage(mess) {
    const alert = document.querySelector(".alert");
    alert.textContent = mess;
    alert.classList.add("alert_show");
    setTimeout(() => alert.classList.remove("alert_show"), 5000);
  }

  return { addProject, refresh, addNoteManual, displayMain, project_list };
}
