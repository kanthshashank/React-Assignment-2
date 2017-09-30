import React from 'react';

const IssueForm = (props) => {
    return (
        <div>
        <form onSubmit={(e) => {
                props.addIssueHandler();
                e.preventDefault();
            }}>
            <div className="form-group row">
                <div className="col-sm-1">
                    <input className="form-control mb-2 mb-sm-1" type="text" value={props.currentIssue.productId} 
                        onChange={(newValue) => props.updateIssueHandler('productId', newValue.target.value)} placeholder="Id"/>
                </div>
                <div className="col-sm-2">
                    <input className="form-control mb-2 mb-sm-1" type="text" value={props.currentIssue.productName} 
                        onChange={(newValue) => props.updateIssueHandler('productName', newValue.target.value)} placeholder="ProductName"/>
                </div>
                <div className="col-sm-2">
                    <input className="form-control mb-2 mb-sm-1" type="text" value={props.currentIssue.category} 
                        onChange={(newValue) => props.updateIssueHandler('category', newValue.target.value)} placeholder="Category"/>
                </div>
                <div className="col-sm-1">
                    <input className="form-control mb-2 mb-sm-1" type="text" value={props.currentIssue.price} 
                        onChange={(newValue) => props.updateIssueHandler('price', newValue.target.value)} placeholder="Price"/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col">
                    <button>{props.type ? props.type : 'ADD'}</button>
                </div>
            </div>
        </form>
    </div>
    );    
};

export default IssueForm;