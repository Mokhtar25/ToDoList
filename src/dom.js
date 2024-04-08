import ProjectGen from './modules/project.js'


export default function DomHandel(){
    
    const add_project_btn = document.querySelector('.add_project_btn');
    const close_project = document.querySelector('.exit_project_btn')
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
        
    add_note_btn = document.querySelector('class');
    sidemeanu = document.querySelector('.project_list');
    }

    function displayMain(list){
        // add logic here
        alert(list.getItems()[0].note)
    }









    function functionality(){

        const dialog = document.querySelector('#modal');
        dialog.close()
    add_project_btn.addEventListener('click', ()=>{
        
        dialog.show()

        
    })
        close_project.addEventListener('click', ()=>{
            const input = document.querySelector('.add_project input')
            input.value = ""
            dialog.close()
        })



    }
    
    functionality()


    return {addProject, refresh, displayMain}
}



const dom = DomHandel()

const test = ProjectGen()
const pro = test("school")
pro.list.addItem("test project","notes is here","12-12-2000",2)
dom.addProject(pro)

