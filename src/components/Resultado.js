import React, { Component } from 'react';
import Imagen from './imagen';
import Paginas from './Paginas';

class Resultado extends Component {
      mostrarImagenes = () => {
            
          const imagenes = this.props.imagenes;

          if(imagenes.length === 0) return null;

          return (
              <React.Fragment>
                   <div className="col-12 p-5 row">
                       {imagenes.map(imagen => (
                           <Imagen
                               key={imagen.id}
                               imagen={imagen}
                           
                           />

                       ))}

                   </div>
                 <Paginas
                    paginaAnterior={this.props.paginaAnterior}
                    paginaSiguiente={this.props.paginaSiguiente}
                 />
              </React.Fragment>
          )
      }

    render() {
        return (
          <React.Fragment>
              { this.mostrarImagenes() }
          </React.Fragment>
        );
    }
}

export default Resultado;