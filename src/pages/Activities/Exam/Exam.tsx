import React from 'react';
import Layout from "../../../components/Layout/Layout";
import WizardHeader from "../../../components/Wizard/WizardHeader";
import WizardQuestion from "../../../components/Wizard/WizardQuestion";

type Props = {
    title: string,
    description: string;
    url: string
}

const Exam = ({title, description, url}: Props) => {
    
    const options = [
        {
            id: 1,
            option: "PHP",
            selected: false
        },
        {
            id: 2,
            option: "Ruby",
            selected: false
        },
        {
            id: 3,
            option: "Golang",
            selected: false
        },
        {
            id: 4,
            option: "Python",
            selected: false
        }
    ]
    
    return <div>
        <Layout>
            <WizardHeader title={title}/>
            <WizardQuestion question="Cual es su lenguaje preferido?" options={options}/>
        </Layout>
    </div>
}

export default Exam;