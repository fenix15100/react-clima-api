import React, { useState, Fragment, useEffect} from 'react';

const Form = ({timeQuery,setTimeQuery,isReadyForm,setIsReadyForm}) => {
    
    const initialCountries = []
    const [countries,setContries] = useState(initialCountries);
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(timeQuery.city===''||timeQuery.country==='') setIsReadyForm('nok')
        else setIsReadyForm('ok')
    };

    //Load inMountCycle countries from API 
    useEffect(()=>{

        const getCountries = async ()=>{
            try{
                
                let url = "https://restcountries.eu/rest/v2/all";
                let request = await fetch(url);
                let data = await request.json();
                data.map((value)=>(
                        setContries((prevState)=>[...prevState,{id:value.alpha2Code,name:value.name}])                
                ));

            }catch(error){
                console.error(error)
            }

           
        }
        getCountries();


    },[])

    return (
        <Fragment>
            <form onSubmit={handleSubmit}> 
                <div className="input-field col s12">
                    <label htmlFor="city">City:</label>
                    <input
                        onChange={(e)=>{setTimeQuery({
                            ...timeQuery,
                            [e.target.name]:e.target.value})}}
                        type="text"
                        name="city"
                        id="city"
                    />
                    
                </div>
                <div className="input-field col s12">
                    <select name="country" className="browser-default" 
                        onChange={(e)=>{setTimeQuery({
                            ...timeQuery,
                            [e.target.name]:e.target.value})}}
                    >
                        <option key ="-1"value="" >Seleciona un país</option>
                        {countries.map(value =>(
                            <option key={value.id} value={value.id}>{value.name}</option>             
                        ))     
                        }
                    </select>

                </div>  
                <div className="input-field col s12">
                    <input type="submit" 
                    className="waves-effect waves-ligth btn-large btn-block yellow accent-4"
                    value="Buscar Clima" 
                    />
                    {isReadyForm==='nok'
                    ? 
                    <div className="red error">Todos los campos son obligatorios</div>
                    : 
                    null}
                </div>
            </form>     
        </Fragment>
    
        
    );
}

export default Form;