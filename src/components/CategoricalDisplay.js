import React from 'react'
import CrossTabView from './CrossTabView'
import ChartView from './ChartView'

export default class CategoricalDisplay extends React.Component {
    render() {
        return (
            <div className = "CategoricalDisplay">
                <div className = "row">
                    <ChartView
                        survey = { this.props.survey } 
                        data = { this.props.data }
                        selectedGroup = { this.props.group }
                        selectedQuestion = { this.props.question }
                        headerText = { "Each bar in the chart shows, for each group list on the left, the share of responses to the question." }
                    />
                </div>
                <div className = "row">
                    <CrossTabView
                        survey = { this.props.survey } 
                        data = { this.props.data }
                        selectedGroup = { this.props.group }
                        selectedQuestion = { this.props.question }
                    />
                </div>
            </div>
        )
    }

    cleanData(data) {
        return data; 
    }
}