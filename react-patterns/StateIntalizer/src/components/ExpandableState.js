import { createContext, useState, useCallback, useMemo } from 'react'

export const ExpandableContext = createContext()
const { Provider } = ExpandableContext

const ExpandableState = ({ children }) => {
  const [expanded, setExpanded] = useState("person2")
  const toggle = useCallback(
    (id) => setExpanded(id),
    []
  )
  const value = useMemo(
   () => ({ expanded, toggle }), 
   [expanded, toggle]
  )
  return (
    <Provider value={value}>
        {children}
    </Provider>
  )
}

export default ExpandableState