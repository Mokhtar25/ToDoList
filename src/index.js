import DomHandel from "./dom"; 
import './style/output.css'

import ProjectGen from './modules/project.js'

const dom = DomHandel()

dom.addProject("school")
dom.project_list[0].list.addItem('hello', "aads", '12-12-2001', 2)
dom.addProject("Javascript")




