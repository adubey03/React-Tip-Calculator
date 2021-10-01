import React, { Component } from 'react'
import './myStyle.css'

class Cal extends Component {
    constructor(props) {
        super(props)
        this.state = {

            total: '',
            service: '20',
            tip: '',
            name: '',
            totalTip: [],
            
        }


    }

    handleTotal = (evt) => {
        this.setState(
            {
                total: evt.target.value
            }
        )
    }

    handleService = (evt) => {
        this.setState(
            {
                service: evt.target.value
            }
        )
    }




    genTip = (evt) => {
        evt.preventDefault();
        let ttip = (this.state.total * this.state.service / 100).toFixed(2)
        this.setState(prevstate => ({
            totalTip: [...prevstate.totalTip, { ttip: ttip, name: this.state.name }]
        }))

    }


    handleCustomer = (evt) => {
        this.setState(
            {
                name: evt.target.value

            })
    }

    render() {
        return (
            <div className="body">
                <h1 className="primary" > Tip Calculator</h1>
                <form className="border" >
                    <label className="total"> <b> Enter Your Bill amount</b>
                        <br></br>
                        <input type="number" value={this.state.total} onChange={this.handleTotal}></input>
                    </label>
                    <hr></hr>
                    <br></br>
                    <label className="service"><b> Select Tip Amount in %</b>
                        <select value={this.state.service} onChange={this.handleService}>
                            <option value="20">Give 20 tip</option>
                            <option value="10">Give 10 tip</option>
                            <option value="5">Give 5 tip</option>

                        </select>
                    </label>

                    <label className="name"><b> Enter customer Name </b>
                        <input type="text" value={this.state.name} onChange={this.handleCustomer}>
                        </input>
                        <button onClick={this.genTip}>Add Customer</button>
                    </label>

                </form>
                < p className="list"><h4> Customer list </h4>

                    {this.state.totalTip.map(item => {
                        return <li>{`${item.name} Is offering tip of ${item.ttip}`}</li>
                    })} </p>

                <p className="len"><b>  Total Number of customer   {this.state.totalTip.length} </b> 
                 {/* total tip collected{this.state.totalTip.reduce((a,b) => a+b,0)}  */}
                </p>





                        
            </div>
        )
    }
}
export default Cal;
