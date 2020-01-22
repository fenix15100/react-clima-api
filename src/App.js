import React,{Fragment,useState, useEffect} from 'react';
import Header from './components/Header'
import Form from './components/Form'

function App() {
  const titulo = "Clima React"

  //STATE HOOKS
  const initialTimequery = {city:'',country:''}
  const initialIsReadyForm = ''
  const initialTimeData = {}

  const [timeQuery,setTimeQuery] = useState(initialTimequery)
  const [isReadyForm,setIsReadyForm] = useState(initialIsReadyForm)
  const [timeData,setTimeData] = useState(initialTimeData)
  ////


  //HOOK for retrieve from API data and store them in state timeData
  useEffect(()=>{
    if(isReadyForm===''||isReadyForm==='nok'){
      console.log("NO ESTOY READY")
    }else{
      console.log("READY")
      setIsReadyForm(initialIsReadyForm)
    }

  },[isReadyForm])
  return (
    <Fragment>
      <Header titulo ={titulo}/>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form timeQuery={timeQuery} 
                    setTimeQuery={setTimeQuery}
                    isReadyForm={isReadyForm}
                    setIsReadyForm={setIsReadyForm} />  
            </div>
          </div>
        </div>
      </div>
      
    </Fragment>
  );
}

export default App;
