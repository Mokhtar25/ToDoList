import CreateGen from "./list.js"; 

const maker = CreateGen()
const listMaker = (project_name) =>{
    return maker(project_name) 
}


export default function ProjectGen(){
    let projcetNum = 1

    return function CreateProject(project_namea){
        const number = projcetNum;
        const project_name = project_namea;
        projcetNum++;
        const list = listMaker(project_namea)


        return {number, list, project_name}
    }
}

const Pmaker = ProjectGen()
const project1 = Pmaker('school')

project1.list.addItem(1,2,3,4)

console.dir(project1.list.getItems())
