import React, {Component} from "react";

const Componente = props => <h2>{props.msg}</h2>;

/*function Componente(props){
    return <h2>{props.msg}</h2>;     
}

/*class Componente extends Component{
    render(){
    return <h2>{this.props.msg}</h2>;
}
}

/*class Componente extends Component{
render(){
    return <h2>Hola soy un Componente basado en Class</h2>
}
}*/

export default Componente;