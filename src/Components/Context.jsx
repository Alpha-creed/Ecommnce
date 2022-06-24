import React, { useContext, useState } from 'react'

export const AppContext = React.createContext()
export default function Context() {
    const[badge,updateBadge] = useState()

  return (
    <AppContext.Provider
        value ={{
            updateBadge,
            badge
        }}
    />
  )
}

export const useGlobal = () => {
    return useContext(AppContext)
  }
