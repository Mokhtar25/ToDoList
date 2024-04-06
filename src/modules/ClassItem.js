
export default class Item{

    constructor(name){
        this.name = name;
        this.madeDate =  Date().toLocaleString()
    }

    setNotes(notes) {
        return this.note = notes
    }
    setDate(date1){
        let date = new Date(date1);
        if (date == "Invalid Date"){
            let date1 = new Date();
            return this.date = `${date1.getFullYear()}-${date1.getMonth()+1}-${date1.getDay()}`;
        }
        return this.date = date
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
    
    
}


