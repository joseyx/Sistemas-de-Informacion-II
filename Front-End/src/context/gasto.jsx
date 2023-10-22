import { createContext, useState } from 'react'

const GastoContext = createContext()

export const GastoProvider = ({ children }) => {
  const [gasto, setGasto] = useState({})
  const [gastoPlacaVehiculo, setGastoPlacaVehiculo] = useState('')
  const [gastoFecha, setGastoFecha] = useState('')
  const [gastoDescripcion, setGastoDescripcion] = useState('')
  const [gastoCosto, setGastoCosto] = useState('')
  return (
    <GastoContext.Provider
      value={{
        gasto,
        setGasto,
        gastoPlacaVehiculo,
        setGastoPlacaVehiculo,
        gastoFecha,
        setGastoFecha,
        gastoDescripcion,
        setGastoDescripcion,
        gastoCosto,
        setGastoCosto
      }}
    >
      {children}
    </GastoContext.Provider>
  )
}
