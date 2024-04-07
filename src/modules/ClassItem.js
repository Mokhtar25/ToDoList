
let id_currnet = 0;


export default class Item{

    constructor(name){
        this.name = name;
        this.madeDate =  Date().toLocaleString()
        this.id = id_currnet + 1
        id_currnet++
        this.done = false
    }

    setNotes(notes) {
        return this.note = notes
    }
    setDate(date1){
        let date = new Date(date1);
        if (date == "Invalid Date" || date.getFullYear() == 1970){
            let date1 = new Date();
            return this.date = `${date1.getFullYear()}-${date1.getMonth()+1}-${date1.getDay()}`;
        }
        return this.date = date.toLocaleString()
    }
    setPrior(num){
        if (num < 0){
            num = 0
        }
        if (num > 3){
            num =  3
        }

        return this.important = num
    }
    setDone(kind){
        if (kind === true){
            return this.done = true
        }
        return this.done = false
    }
    
    
}


