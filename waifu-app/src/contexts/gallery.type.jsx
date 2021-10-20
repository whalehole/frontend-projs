import { createContext, useContext, useState } from "react";

const TypeContext = createContext();

const useTypeState = () => {
    const [type, setType] = useState("sfw");

    return {type, setType};
}

export const GalleryTypeProvider = ({children}) => {
    const type = useTypeState();

    return <TypeContext.Provider value={type}>{children}</TypeContext.Provider>
}

export const useType = () => {
    const type = useContext(TypeContext);
    
    return type;
}