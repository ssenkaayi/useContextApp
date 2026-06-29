import { Component } from "react";
import { createContext } from "react";

export const ThemContext = createContext();

class ThemContextProvider extends Component{

    state = {
        name:'Chalz'

    }

    render(){
        return(
            <ThemContext.Provider value = {{...this.state}}>
                {this.props.children}
            </ThemContext.Provider>
        )
    }
}

export default ThemContextProvider