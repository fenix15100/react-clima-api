import React, { useEffect,useState } from 'react';

const Form = () => {
    const  [countries,setCountries] = useState([]);
    const [selectedCountry,setSelectedCountry] = useState("");
    
    useEffect( ()=>{
        const getCountries = async ()=>{
            try{
                
                let url = "https://restcountries.eu/rest/v2/all";
                let request = await fetch(url);
                let data = await request.json();
                data.map((value)=>(
                    
                    setCountries(
                        countries => [...countries,{id:value.alpha2Code,name:value.name}]
                    )        
                ));
            }catch(error){
                console.error(error)
            }
        }
        getCountries();      

    },[]);

    

    const handleChange = (e)=>{
        setSelectedCountry(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(selectedCountry);
        //TODO FIX FUCKING ASYNC SUBMIT


    }

    let paises = countries.map((element) => (
        <option key={element.id} value={element.id}>{element.name}</option>  
    ))
    return (
        <form onSubmit={handleSubmit}> 
            <div className="input-field col s12">
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    onChange={handleChange}
                />
                
            </div>

            <div className="input-field col s12">
                <select name="country" className="browser-default" onChange={handleChange}>
                    <option key ="-1"value="" >Seleciona un país</option>
                    {paises}
                </select>
                

            </div>

            <div className="input-field col s12">
                <input type="submit" 
                className="waves-effect waves-ligth btn-large btn-block yellow accent-4"
                value="Buscar Clima" />

            </div>
        </form>
    );
}

export default Form;