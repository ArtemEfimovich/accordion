import React, {useState} from "react";



type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed,setCollapsed] = useState(false)



    return (
        <div>
            <div>
                <AccordionTitle title={props.titleValue}/><button onClick={()=>{setCollapsed(!collapsed)}}>Toggle</button>
                {!collapsed && <AccordionBody/>}

            </div>
        </div>
    )


}

type  AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>

    )
}

function AccordionBody(props: any) {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>

    )
}


export default UncontrolledAccordion;