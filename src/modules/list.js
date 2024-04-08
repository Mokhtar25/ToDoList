import Item from "./ClassItem";

import { compareAsc, format, formatISO } from "date-fns"

export default function CreateGen(){
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
            sortItems()
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

            items.sort((a,b) => compareAsc(a.date, b.date));
        }



        return {addItem , removeItem, getItems,items,sortItems, number, itemDone, project}
    }


}


