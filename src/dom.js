import ProjectGen from "./modules/project";


export default function DomHandel(){
    
    const makeproject = ProjectGen()
    const add_project_btn = document.querySelector('.add_project_btn');
    const close_project = document.querySelector('.exit_project_btn')
    let add_note_btn = document.querySelector('class');
    let sidemeanu = document.querySelector('.project_list');
    const project_list = []
    
    
    function addProject(project1){
        const project = makeproject(project1) 
        project_list.push(project)

        const new_div = document.createElement('div');
        new_div.classList.add('project_item');
        new_div.textContent = project.project_name
        new_div.value = project.number
        addlistner(new_div);
        sidemeanu.appendChild(new_div)
        

        function addlistner(div){
            div.addEventListener('click', ()=> displayMain(project.list))
        }
    }

    function addNoteManual(pname, title, notes, date, important){
        pname.list.addNote(title, notes, date, important)
    }


    function refresh(){
        
    add_note_btn = document.querySelector('class');
    sidemeanu = document.querySelector('.project_list');
    }

    function displayMain(list){
        
        const items = list.getItems()
        console.log(items)

    }









    function functionality(){


        const dialog = document.querySelector('#modal');
        const input = document.querySelector('.add_project input')
        const save_btn = document.querySelector('.submit_project')

        dialog.close()
    add_project_btn.addEventListener('click', ()=>{
        
        dialog.show()

        
    })
        close_project.addEventListener('click', ()=>{
            input.value = ""
            dialog.close()
        })

        save_btn.addEventListener('click',()=>{
            console.log(input.value, '123')
            if (input.value == ""){
                alertmessage("Please enter a Valid Project name")

            }
            else{
                addProject(input.value)
                dialog.close()
                input.value = ""
            }
        })


    }
    
    functionality()

    function alertmessage(mess){
        const alert = document.querySelector('.alert')
        alert.textContent = mess
        alert.classList.add('alert_show')
        setTimeout(()=> alert.classList.remove("alert_show"), 5000)
        
    }


    return {addProject, refresh, addNoteManual, displayMain, project_list}
}





