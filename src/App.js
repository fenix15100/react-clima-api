import React, { Fragment, useEffect, useState } from 'react';
import Clima from './components/Clima';
import Form from './components/Form';
import Header from './components/Header';
import logo from './components/assets/clima.webp';


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


  //HOOK retrieve from API Timedata and store them in state timeData
  useEffect(()=>{
    if(isReadyForm===''||isReadyForm==='nok'){
      return
    }else{
      const getTime = async ()=>{
        try{
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${timeQuery.city},${timeQuery.country}&APPID=${process.env.REACT_APP_TOKEN_CLIMA}`
          let request = await fetch(url);
          let data = await request.json();
          setTimeData(data)

        }catch(error){
          console.error(error);
        }
  
      }

      getTime();
      setIsReadyForm(initialIsReadyForm);
    }

  },[isReadyForm,timeQuery])

  return (
    <Fragment>
      <Header titulo ={titulo}/>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m12">
              
              <Form timeQuery={timeQuery} 
                    setTimeQuery={setTimeQuery}
                    isReadyForm={isReadyForm}
                    setIsReadyForm={setIsReadyForm}                  
                    />
                <Clima 
                    timeData={timeData}
                  />
              
            </div>
          </div>
        </div>
      </div>
      
    </Fragment>
  );
}

export default App;
