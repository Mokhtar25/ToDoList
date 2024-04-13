import Item from "./modules/ClassItem";
import ProjectGen from "./modules/project";

export default function DomHandel() {
  const makeproject = ProjectGen();
  const add_project_btn = document.querySelector(".add_project_btn");
  const close_project = document.querySelector(".exit_project_btn");
  let sidemeanu = document.querySelector(".project_list");
  const project_list = [];
  let current_project = false;

  function addProject(project1) {
    const project = makeproject(project1);
    project_list.push(project);

    const new_div = document.createElement("div");
    new_div.classList.add("project_item");
    new_div.textContent = project.project_name;
    new_div.value = project.number;
    addlistner(new_div);
    sidemeanu.appendChild(new_div);
    current_project = project;
    displayMain(project.list);
    function addlistner(div) {
      div.addEventListener("click", () => {
        current_project = project;
        displayMain(project.list);
      });
    }
  }

  function runfirst() {
    current_project = project_list[0];
    displayMain(current_project.list);
  }
  function addNoteManual(pname, title, notes, date, important) {
    pname.list.addItem(title, notes, date, important);
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
      note.textContent = element.name;
      note.value = element.id;

      const list = document.createElement("ul");
      list.classList.add("list");
      const box = document.createElement("li");
      box.classList.add("done");
      const input_box = document.createElement("input");
      input_box.type = "checkbox";
      input_box.checked = element.done;
      box.appendChild(input_box);
      list.appendChild(box);
      const trash = document.createElement("li");
      trash.classList.add("trash");
      list.appendChild(trash);

      if (element.done === true) {
        wraper.classList.add("done_note");
      }

      addfunctoitem(wraper, input_box, trash, element);
      wraper.appendChild(note);
      wraper.appendChild(list);
      frag.appendChild(wraper);
      container.appendChild(frag);
    });
  }
  function addfunctoitem(wrap, checkbox, trash, note) {
    checkbox.addEventListener("click", () => {
      note.done = checkbox.checked;
      if (note.done === true) {
        wrap.classList.add("done_note");
      } else {
        wrap.classList.remove("done_note");
      }
    });
    trash.addEventListener("click", () => {
      current_project.list.removeItem(note.id);
      project_list[0].list.removeItem(note.id);

      displayMain(current_project.list);
    });
  }

  function addprojectbtn() {
    const dialog = document.querySelector("#modal");
    const input = document.querySelector(".add_project input");
    const save_btn = document.querySelector(".submit_project");

    dialog.close();
    add_project_btn.addEventListener("click", () => {
      dialog.showModal();
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
    const dialog = document.querySelector("#noted");
    const add_note_btn = document.querySelector(".add_note");
    const save_btn = document.querySelector(".submit_note");
    const title = document.querySelector("#noted .title");
    const note = document.querySelector("#noted .note");
    const date = document.querySelector("#noted .date");
    const important = document.querySelector("#noted .range");

    dialog.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        save_btn.click();
      }
    });
    function clear() {
      date.value = "";
      title.value = "";
      important.checked = false;
      note.value = "";
    }
    dialog.addEventListener("close", () => clear());
    add_note_btn.addEventListener("click", () => {
      dialog.showModal();
    });
    save_btn.addEventListener("click", () => {
      if (title.value === "") {
        alertmessage("Must enter a to do name");
        return false;
      }
      if (date.value == "") {
        alertmessage("must enter a due date");
        return false;
      }

      current_project.list.addItem(
        title.value,
        note.value,
        date.value,
        important.checked,
      );

      if (current_project !== project_list[0]) {
        project_list[0].list.addItem(
          title.value,
          note.value,
          date.value,
          important.checked,
        );
      }
      dialog.close();
      displayMain(current_project.list);
      clear();
    });
  }
  addnote();

  function alertmessage(mess) {
    const alert = document.querySelector(".alert");
    alert.textContent = mess;
    alert.classList.add("alert_show");
    setTimeout(() => alert.classList.remove("alert_show"), 5000);
  }

  return {
    addProject,
    displayMain,
    refresh,
    addNoteManual,
    current_project,
    displayMain,
    project_list,
    runfirst,
  };
}
