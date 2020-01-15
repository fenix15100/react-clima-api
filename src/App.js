import React,{Fragment} from 'react';
import Header from './components/Header'
import Form from './components/Form'

function App() {
  const titulo = "Clima React"
  return (
    <Fragment>
      <Header titulo ={titulo}/>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form/>
            </div>
          </div>
        </div>
      </div>
      
    </Fragment>
  );
}

export default App;
