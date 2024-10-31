import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
const context = createContext({ log: false, setLog: ()=>{} })

export default function LoginProvider({children}) {

    const [log, setLog] = useState(false)
    useEffect(()=>{
        const tokenStr = localStorage.getItem("token");
        if (tokenStr) {
          setLog(true);
        }
    })
  return (
   <context.Provider value={ {log, setLog} }>
    {children}
   </context.Provider>

  )
}
export const useLogin = ()=>{
    const loginContext = useContext(context)
    return loginContext
}
