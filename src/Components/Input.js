import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bill: '',
            service: '',
            name: '',
            data: [],
            TotalSum: 0,
            TotalCustomer: 0,

        }
    }

    handleBill = (evt) => {
        this.setState(
            {
                bill: evt.target.value
            })
    }

    handleName = (evt) => {
        this.setState(
            {
                name: evt.target.value
            })
    }

    handleService = (evt) => {
        this.setState(
            {
                service: evt.target.value
            })
    }

    genTip = (evt) => {
        var list = [...this.state.data]
        list.push({
            text: 'is offering a tip of',
            nname: (this.state.name),
            tbills: (this.state.bill * this.state.service),
        })

        this.setState(
            {
                data: list

            })
    }

    genGtotal = () => {


        var totalbill = 0

        for (var i = 0; i < this.state.data.length; i++) {

            if (i == 0) {

                totalbill = this.state.data[i].tbills
            }
            else {
                totalbill = parseInt(totalbill) + parseInt(this.state.data[i].tbills)

            }


        }
        this.setState({
            TotalSum: totalbill,
            TotalCustomer: this.state.data.length
        })

    }




    render() {

        return (
            <React.Fragment>

            <span style={{ textAlign: "center", }}>

                <div style={{ height: "200px", padding: "2px"}}>
                    <h4>Enter Your Bill Amount</h4>
                    <input type="number"
                            style={{
                            width: "25%", marginBottom: "20px", padding: "10px",
                            borderRadius: "20px", backgroundColor: "yellow", color: "brown",
                            textAlign:"center"}}
                        value={this.state.bill}
                        onChange={this.handleBill}
                        placeholder="Enter Bill">
                    </input><br />


                    <label style={{ paddingRight: "10px" }} >How was the service?</label>
                    <select style={{ padding: "10px", letterSpacing: "1px" }}
                        value={this.state.service}
                        onChange={this.handleService}>

                        <option label="Choose..." ></option>
                        <option label="20% Excellent" value="0.2"></option>
                        <option label="10% Average" value="0.1"></option>
                        <option label="5% Bad" value="0.05"></option>

                    </select>


                    <input placeholder="Customer Name"
                        value={this.state.name} onChange={this.handleName}
                        style={{ marginLeft: "25px", padding: "10px" }}>
                    </input>

                    <button
                        style={{ padding: "10px", backgroundColor: "blue", color: "white", border: "0", marginLeft: "25px", letterSpacing: "2px", }}
                        onClick={this.genTip}>Add Customer</button>
                </div>


                <div>
                    <h1>Customer List</h1>
                    <ul>
                        {this.state.data.map((element, index) =>
                            <li  style = {{fontSize: "25px"}}> {element.nname}&nbsp;{element.text}&nbsp; Rs.{element.tbills} </li>
                        )}
                    </ul>

                </div>


                <div>
                    <button
                        onClick={this.genGtotal}
                        style={{ backgroundColor: "blue", color: "white", padding: "8px", border: "0", letterSpacing: "2px" }}>
                        Calculate Tip and Customer
                    </button>
                </div>

                <div className="table">
                    <table style={{ border: "2px solid black", padding: "5px", alignContent:"center" }} >
                        <tr>
                            <th style={{ width: "50%",justifyContent:"center", padding:"10px" }}>Total Customer</th>
                            <th style={{ width: "50%",justifyContent:"center", padding:"10px" }}>Total Tip</th>
                        </tr>

                        <tr>

                            <th>{this.state.TotalCustomer}</th>
                            <th>{this.state.TotalSum}</th>


                        </tr>
                    </table>

                </div>

            </span>
            </React.Fragment>
        )
        
    }
   
}

export default Input;