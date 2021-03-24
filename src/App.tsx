import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div className="App">
            <PageTitle title={"This is App component"}/>
            Article 1
            <Rating value={3}/>
            <OnOff/>
            <UncontrolledAccordion titleValue={"menu"}/>
            <UncontrolledRating/>
            {/* <Accordion titleValue={"music"} collapsed={true}  />
            <OnOff />
            <Accordion titleValue={"films"} collapsed={false} />
            Article 2
            <Rating value={4}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}


export default App;

