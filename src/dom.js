import ProjectGen from './modules/project.js'


export default function DomHandel(){
    
    const add_project_btn = document.querySelector('.add_project_btn');
    const close_project = document.querySelector('.exit_project_btn')
    let add_note_btn = document.querySelector('class');
    let sidemeanu = document.querySelector('.project_list');
    const makeproject = ProjectGen()
    
    
    function addProject(project1){
        const project = makeproject(project1) 

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
            console.log(input.value)
            if (input.value == ""){
                const alert = document.querySelector('.alert')
                alertmessage("Please enter a Valid Project name")
                

            }
            else{
                addProject(input.value)
                dialog.close()

            }
        })


    }
    
    functionality()

    function alertmessage(mess){
        const alert = document.querySelector('.alert')
        alert.textContent = mess
        alert.classList.remove('alert_hide')
        setTimeout(()=> alert.classList.add("alert_hide"), 5000)
        
    }


    return {addProject, refresh, displayMain}
}



const dom = DomHandel()

const test = ProjectGen()
const pro = test("school")
pro.list.addItem("test project","notes is here","12-12-2000",2)
dom.addProject(pro)

