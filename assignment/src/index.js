import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css'
import IssueListComponent from './component/issuelistcomponent'

class EMICalculatorInput extends React.Component {
    constructor (props) {
        super(props);
        this.calculate = this.calculate.bind(this);
    }

    calculate () {
        let p = this.amountElement.value;
        let r = this.rateElement.value/100.0;
        let n = this.termElement.value;

        let emi = p*r*(Math.pow(1+r, n))/Math.pow(1+r, n);
        let interest = p*(Math.pow(1+r, n) - 1.0);
        this.props.handleResult(emi, interest);
    }
    
    render () {
        return (
            <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Amount</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" id="amount" defaultValue="1000"
                            ref={input => {this.amountElement = input}}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Interest Rate</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" id="rate" defaultValue="5"
                            ref={input => {this.rateElement = input}}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Loan Term</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" id="term" defaultValue="3"
                            ref={input => {this.termElement = input}}/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-primary" onClick={this.calculate}>Calculate</button>
                    </div>
                </div>
            </form>
        )
    }
}

class EMICalculatorResult extends React.Component {
    render () {
        return (
            <div>
                <div className="row">
                    <div className="col-3">Monthly EMI</div>
                    <div className="col-3">{this.props.emi}</div>
                </div>
                <div className="row">
                    <div className="col-3">Total Interest Payable</div>
                    <div className="col-3">{this.props.interest}</div>
                </div>
            </div>
        )
    }
}

class EMICalculator extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            emi: 0.00,
            interest: 0.00
        };

        this.updateResult = this.updateResult.bind(this);
    }

    updateResult (emi, interest) {
        this.setState({ emi, interest });
    }

    render () {
        return (
            <div>
                <EMICalculatorInput
                    amount={this.state.amount}
                    interestRate={this.state.interestRate}
                    term={this.state.term}
                    handleResult={this.updateResult}/>
                <EMICalculatorResult
                    emi={this.state.emi}
                    interest={this.state.interest}/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <EMICalculator />
        <IssueListComponent/>
    </div>, document.getElementById('root'));