import React from 'react';
import IssueNameComponent from './issuenamecomponent';
import IssueForm from './issueform';

class IssueListComponent extends React.Component {
    constructor () {
        super();
        this.state = {
            issues: [
                {name: 'Create React PoC', completed: false, productId: "1", productName: "Maruti", category: "Small", price: "200000"},
                {name: 'Another Issue', completed: true, productId: "2", productName: "Maruti", category: "Small", price: "200000"}
            ],
            currentIssue: {name: '', productId: '', productName: '', category: '', price: ''}
        };

        this.changeStatus = this.changeStatus.bind(this);
        this.updateCurrentIssue = this.updateCurrentIssue.bind(this);
        this.addIssue = this.addIssue.bind(this);
        this.deleteIssue = this.deleteIssue.bind(this);
        this.editIssue = this.editIssue.bind(this);
    }

    updateCurrentIssue (field, newValue) {
        let currentIssue = this.state.currentIssue
        currentIssue[field] = newValue;
        this.setState({currentIssue});
    }

    changeStatus (index) {
        let issues = this.state.issues;
        let issue = issues[index];
        issue.completed = !issue.completed;
        this.setState({issues});
    }

    deleteIssue (index) {
        let issues = this.state.issues;
        issues.splice(index, 1);
        this.setState({issues});
    }

    addIssue () {
        let newIssue = Object.assign({}, this.state.currentIssue);
        let issues = this.state.issues;
        let currentIssue = this.state.currentIssue;
        currentIssue = {name: '', productId: '', productName: '', category: '', price: ''};
        issues.push(newIssue);

        this.setState({ issues, currentIssue });
    }

    editIssue (index, productId, productName, category, price) {
        let issues = this.state.issues;
        let issue = this.state.issues[index];
        issue.productId = productId;
        issue.productName = productName
        issue.category = category;
        issue.price = price;
        this.setState({issues});
    }

    render () {
        return (
            <div>
                <IssueForm
                    currentIssue={this.state.currentIssue}
                    updateIssueHandler={this.updateCurrentIssue}
                    addIssueHandler={this.addIssue}/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Pro#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.issues.map((issue, index) => (
                            <IssueNameComponent 
                                key={issue.productId} 
                                issue={issue}
                                index={index}
                                clickHandler={this.changeStatus}
                                deleteIssue={this.deleteIssue}
                                editIssue={this.editIssue}/>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default IssueListComponent;