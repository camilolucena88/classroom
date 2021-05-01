import React from "react";

type State = {
    options: OptionPayload[]
    selected: number | null
}

type OptionPayload = {
    id: number,
    option: string
    selected: boolean
}

type QuestionPayload = {
    question: string,
    options: OptionPayload[]
}

class WizardQuestion extends React.Component<QuestionPayload, State> {
    state: State = {
        options: this.props.options,
        selected: null
    };

    toggleOption = (optionId: number) => {
        this.setState(
            {
                options: {
                    ...this.state.options,
                    ...this.state.options.map(option =>
                        option.id === optionId ? {...option, selected: true} : option
                    )
                }
            }
        )
    }

    classOptionSelected = "text-white bg-pink-600 hover:bg-pink-500"

    classOptionUnselected = "bg-white"

    optionsArray = this.state.options.map((option) => {
        if (option.selected) {
            return <button id={"option_" + option.id} onClick={() => this.toggleOption(option.id)}
                           className={"m-10 p-10 answer-box " + this.classOptionSelected}>{option.option}</button>
        } else {
            return <button id={"option_" + option.id} onClick={() => this.toggleOption(option.id)}
                           className={"m-10 p-10 answer-box " + this.classOptionUnselected}>{option.option}</button>
        }
    })

    render() {
        return (
            <div className="grid sm:grid-cols-2">
                <div className="flex justify-center items-center full-width-container">
                    <div className="md:container md:mx-auto">
                        <div>
                            <p className="text-4xl text-white text-left p-3"> {this.props.question}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-light">
                    <div className="bg-dark flex justify-center items-center full-width-container">
                        <div className="md:container m-10">
                            {this.optionsArray}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WizardQuestion;