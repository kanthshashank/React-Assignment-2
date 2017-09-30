import React from 'react';

class IssueNameComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isEditing: false
        };

        this.renderForm = this.renderForm.bind(this);
        this.renderIssue = this.renderIssue.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.updateIssue = this.updateIssue.bind(this);
    }

    updateIssue (event) {
        event.preventDefault();

        this.props.editIssue(
            this.props.index,  
            this.idElement.value, 
            this.nameElement.value,
            this.categoryElement.value,
            this.priceElement.value);
        this.toggleState();
    }

    toggleState () {
        const isEditing = !this.state.isEditing;
        this.setState({isEditing});
    }

    renderForm () {
        return (
            <tr>
                <td>
                    <input type="text" defaultValue={this.props.issue.productId} ref={value => {this.idElement = value}}/>
                </td>
                <td>
                    <input type="text" defaultValue={this.props.issue.productName} ref={value => {this.nameElement = value}}/>
                </td>
                <td>
                    <input type="text" defaultValue={this.props.issue.category} ref={value => {this.categoryElement = value}}/>
                </td>
                <td>
                    <input type="text" defaultValue={this.props.issue.price} ref={value => {this.priceElement = value}}/>
                </td>
                <td><button onClick={this.updateIssue}>update</button></td>
            </tr>
        );
    }

    renderIssue () {
        return (
            <tr>
                <td>{this.props.issue.productId}</td>
                <td>{this.props.issue.productName}</td>
                <td>{this.props.issue.category}</td>
                <td>{this.props.issue.price}</td>
                <td>
                    <button
                        onClick={e => {
                            e.stopPropagation();
                            this.toggleState();
                        }}>Edit</button>
                    <button onClick={(e) => {
                            e.stopPropagation();
                            this.props.deleteIssue(this.props.index);
                        }}>Delete</button>
                </td>
            </tr>
        )
    }

    render () {
        const isEditing = this.state.isEditing;

        return isEditing ? this.renderForm() : this.renderIssue();
    }
}

export default IssueNameComponent;