import Item from "./ClassItem";


function CreateGen(){
    let listnum = 0

    return function Createlist(project){
        listnum++
        const number = listnum;
        const project = project;
        let items = [];

        function additem(title, notes, date, important){
            const newItem = new Item(title);
            newItem.setDate(date);
            newItem.setNotes(notes);
            newItem.setPrior(important) 

            this.items.push(newItem) 
        }












    }


    
}

const gens = CreateGen();
const list = gens('project')
list.additem(1,2,2,3)
console.dir(list)



