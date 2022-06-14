import { createContext } from "react";
import FProduct from "./FProduct";

export const AppContext = createContext(AppProvider)

export const AppProvider = () =>{
    const [hover,setHover] = useState(false);

    const onHover = () => {
        setHover(true);
      };
    
      const onLeave = () => {
        setHover(false);
      };

    return(
        <AppContext.Provider value={{onHover,onLeave}}>
            <FProduct/>
        </AppContext.Provider>
    )
}
