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
      return
    }else{
      const getTime = async ()=>{
        try{
          let url = `http://api.openweathermap.org/data/2.5/weather?q=${timeQuery.city},${timeQuery.country}&APPID=${process.env.REACT_APP_TOKEN_CLIMA}`
          let request = await fetch(url);
          let data = await request.json();
          console.log(data);


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
