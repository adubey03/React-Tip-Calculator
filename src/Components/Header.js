import React from 'react';
import ReactDOM from 'react-dom';


class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            head1: 'Tip Calculator',
            head2: 'Built Using React',
        
    }}


render(){
    return(
        <React.Fragment>
            <nav style={{backgroundColor: "blue", 
                        color: "white",
                        textAlign: "center",
                        }}>
                <h2>{this.state.head1}</h2>
                <h4>{this.state.head2}</h4>


            </nav>
        </React.Fragment>
)  }}

export default Header;