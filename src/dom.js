import ProjectGen from './modules/project.js'


export default function DomHandel(){
    
    let add_project_btn = document.querySelector('class');
    let add_note_btn = document.querySelector('class');
    let sidemeanu = document.querySelector('.project_list');
    
    function addProject(project){

        const new_div = document.createElement('div');
        new_div.classList.add('project_item');
        new_div.textContent = project.project_name
        addlistner(new_div);
        sidemeanu.appendChild(new_div)
        

        function addlistner(div){
            div.addEventListener('click', ()=> displayMain(project.list))
        }
    }

    function refresh(){
        
    add_project_btn = document.querySelector('class');
    add_note_btn = document.querySelector('class');
    sidemeanu = document.querySelector('.project_list');
    }

    function displayMain(list){
        // add logic here
        alert(list.getItems()[0].note)
    }

    


    return {addProject, refresh, displayMain}
}



const dom = DomHandel()

const test = ProjectGen()
const pro = test("school")
pro.list.addItem("test project","notes is here","12-12-2000",2)
dom.addProject(pro)

