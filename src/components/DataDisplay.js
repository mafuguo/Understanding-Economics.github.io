import React from 'react'
import '../css/DataDisplay.css'
import DataType from '../DataType'
import CategoricalDisplay from './CategoricalDisplay'
import NumericDisplay from './NumericDisplay'

export default class DataDisplay extends React.Component {
    render() {
        let question = this.props.selectedQuestion;
        console.log(question);
        let specificDisplay = null;
        if(!question) {
            return null;
        }
        switch(question.type) {
            case DataType.CATEGORICAL:
                specificDisplay = <CategoricalDisplay 
                    survey = { this.props.survey }
                    data = { this.props.data }
                    group = { this.props.selectedGroup }
                    question = { this.props.selectedQuestion }
                />
                break;
            case DataType.NUMERIC:
                specificDisplay = <NumericDisplay
                    survey = { this.props.survey }
                    data = { this.props.data }
                    group = { this.props.selectedGroup }
                    question = { this.props.selectedQuestion }
                />
                break;
            default: 
                throw new Error(`Invalid data type for ${ this.props.selectedQuestion.id}`)

        }
        return (
            <div className = "DataDisplay">
                { specificDisplay }
            </div>
        )
    }
     
}