import React from 'react'

export default class DataView extends React.Component {
    render() {
        if(!this.props.selectedQuestion || !this.props.selectedGroup) {
            return null;
        }
        return (
            <div className="DataView">
                <h5>{this.props.header}</h5>
                <div id = {this.props.elementId}></div>
            </div>
        )
    }
    componentDidMount() {
        this.componentDidUpdate();
    }

    componentDidUpdate() {
        let selectedGroup = this.props.selectedGroup;
        let selectedQuestion = this.props.selectedQuestion; 
        let renderFunction = this.props.renderFunction;
        if (selectedGroup && selectedQuestion && this.props.data) {
            let data = this.props.data.filter(x => x[selectedGroup.id] && x[selectedQuestion.id] && true)
            renderFunction(this.props.elementId, selectedGroup, selectedQuestion, data);
        }
    }
}