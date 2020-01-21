import React, { useContext, useState, Fragment} from 'react';
import {CountriesContext} from './../context/CountriesContextComponent'
import AlertError from './AlertError'

//https://stackoverflow.com/questions/49809884/access-react-context-outside-of-render-function
const Form = () => {
    const contextCountry = useContext(CountriesContext);
    const  [timeQuery,setTimeQuery] = useState({city:'',country:''})
    const  [errorForm,setErrorForm] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(timeQuery.city===''||timeQuery.country==='') setErrorForm('nok')
        else setErrorForm('ok')
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit}> 
                <div className="input-field col s12">
                    <label htmlFor="city">City:</label>
                    <input
                        onChange={e=>{setTimeQuery({
                            ...timeQuery,
                            [e.target.name]:e.target.value})}}
                        type="text"
                        name="city"
                        id="city"
                    />
                    
                </div>
                <div className="input-field col s12">
                    <select name="country" className="browser-default" 
                        onChange={e=>{setTimeQuery({
                            ...timeQuery,
                            [e.target.name]:e.target.value})}}
                    >
                        <option key ="-1"value="" >Seleciona un país</option>
                        {contextCountry.countries.map(value =>(
                            <option key={value.id} value={value.id}>{value.name}</option>             
                        ))     
                        }
                    </select>
                </div>  
                <div className="input-field col s12">
                    <input type="submit" 
                    className="waves-effect waves-ligth btn-large btn-block yellow accent-4"
                    value="Buscar Clima" />

                </div>
            </form>
            
            {errorForm==='nok' 
            ? 
            <AlertError errors={['Los dos campos son requeridos']}/> 
            : 
            null}
            
        </Fragment>
    
        
    );
}

export default Form;