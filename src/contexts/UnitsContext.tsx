import React, {createContext, useContext, useState} from 'react';

export type Units='metric' | 'imperial'

interface UnitsContextProviderProps{
    children:React.ReactNode
}

type UnitsContextType={
    units:Units,
    setUnits:React.Dispatch<React.SetStateAction<Units>>
}

export const UnitsContext=createContext<UnitsContextType | undefined>(undefined)

export const UnitsContextProvider=({children}:UnitsContextProviderProps)=>{
 const [units,setUnits]=useState<Units>('metric')
 return (
        <UnitsContext.Provider value={{units,setUnits}}>
            {children}
        </UnitsContext.Provider>
 )
}

export const useUnitsContext=()=>{
    const context=useContext(UnitsContext);
    if(!context){
        throw new Error('useUnitsContext must be used within a UnitsContextProvider');
    }
    return context;
}