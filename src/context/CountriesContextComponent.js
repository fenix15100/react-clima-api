import React, { Component } from 'react';

export const CountriesContext = React.createContext();
const CountriesProvider = CountriesContext.Provider

class CountriesContextComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            countries : []
         };
    }

    componentDidMount(){
        this.getCountries()

    }

    getCountries = async ()=>{
        try{
            
            let url = "https://restcountries.eu/rest/v2/all";
            let request = await fetch(url);
            let data = await request.json();
            data.map((value)=>(

                this.setState({
                    countries : [...this.state.countries,{id:value.alpha2Code,name:value.name}]
                })
                        
            ));
        }catch(error){
            console.error(error)
        }
    }

    render() {
        return (
            <CountriesProvider
                value={{
                    countries : this.state.countries
                }}
            >
                {this.props.children}

            </CountriesProvider>
            
        );
    }
}

export default CountriesContextComponent;