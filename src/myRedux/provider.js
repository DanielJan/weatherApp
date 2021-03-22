
import React from "react"

export const ReduxContext = React.createContext("redux")

export const Provider = ({ store, children }) => (
  <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
)