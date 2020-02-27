    import React, { Component } from 'react';
    import './contador.css'
    import { Button } from 'reactstrap';

    class Contador extends Component{

        state = {
            numero:0
        }
        
        aumentar = () =>{
            //this.setState({ numero: this.state.numero + 1 });
        
            let novoNumero = this.state.numero;
            novoNumero++;
        
            this.setState({numero: novoNumero});
        
        
        }
        
        diminuir = () =>{
        
            let novoNumero = this.state.numero;
            
            if(novoNumero === 0){
            alert("Hoje não Faro");
            return false;
            
            }
            
            novoNumero--;
        
            this.setState({numero: novoNumero});
        
        }
        
        
            render(){
            return (
                <div>
                <h1 className="contador-titulo">
                {this.state.numero}
                </h1>

                <Button className='mr-3' color="success" outline onClick={this.aumentar}>
                    Aumentar

                </Button>

                <Button color="danger" outline onClick={this.diminuir}>
                    Diminuir

                </Button>
            
                </div>
            )
            }

    }


    export default Contador;