let id_currnet = 0;

import { compareAsc, format, formatISO } from "date-fns";

export default class Item {
  constructor(name) {
    this.name = name;
    this.madeDate = Date().toLocaleString();
    this.id = id_currnet + 1;
    id_currnet++;
    this.done = false;
    this.date = false;
  }

  setNotes(notes) {
    return (this.note = notes);
  }
  setDate(date1) {
    let date = false;
    try {
      date = format(new Date(date1), "dd/MM/yyyy");
    } catch (error) {
      return 0;
    }
    return (this.date = date);
  }
  setPrior(num) {
    if (num < 0) {
      num = 0;
    }
    if (num > 3) {
      num = 3;
    }

    return (this.important = num);
  }
  setDone(kind) {
    if (kind === true) {
      return (this.done = true);
    }
    return (this.done = false);
  }
}
