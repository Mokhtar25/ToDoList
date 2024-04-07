import Item from "./ClassItem.js";

import { compareAsc, format, formatISO } from "date-fns"

function CreateGen(){
    let listnum = 0

    return function Createlist(pro){
        listnum++
        const number = listnum;
        const project = pro;
        let items = [];

        function addItem(title, notes, date, important){
            const newItem = new Item(title);
            newItem.setDate(date);
            newItem.setNotes(notes);
            newItem.setPrior(important) 

            this.items.push(newItem) 
        }
        function getItems(){
            return items
        }

        function removeItem(name){

            let result = items.findIndex(item => item.name === name);

            if (result === -1){
                return 1
            }
            items.splice(result, 1)
            
        }
        
        function itemDone(name, done){
            let result = items.findIndex(item => item.name === name)
            if (result === -1){
                return 1
            }
            items[result].setDone(done);
        }

        function sortItems(){

            // logic is here 
        }









        return {addItem , removeItem, getItems,items, number, itemDone, project}
    }


}

const gens = CreateGen();
const list = gens('project')
const list2 = gens('studying');
list2.addItem('assda', "adas", '8/8/2001', -1)
list2.itemDone('assda', true)
list.addItem(1,2,3,3)
list.addItem("this is the notes title", "this is the notes as lor em or smth ", '12-12-2009', 3)
console.dir(list.getItems()[0].setDone(true))
// console.dir(list)
console.log(list.getItems())
console.dir(list2.getItems())

