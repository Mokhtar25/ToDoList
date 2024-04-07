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
            items.sort((a,b) => compareAsc(a, b));
        }









        return {addItem , removeItem, getItems,items,sortItems, number, itemDone, project}
    }


}

const gens = CreateGen();
const list = gens('project')
const list2 = gens('studying');
list2.addItem('assda', "adas", '8/8/2001', -1)
list2.itemDone('assda', true)
list.addItem(1,2,3,3)

list.addItem("this  the notestitle", " the notes as lor em or smth ", '12-12-2000', 3)
list.addItem("this the notes itle", "tnotes as lor em or smth ", '12-12-2009', 3)
list.addItem("this he notes title", "tis the notes em or smth ", '12-12-2011', 3)
console.dir(list.getItems()[0].setDone(true))
// console.dir(list
list.sortItems()
list2.sortItems()
console.log(list.getItems())
console.dir(list2.getItems())

