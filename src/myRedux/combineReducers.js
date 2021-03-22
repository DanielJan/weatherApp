const getOnlyReducerFunctions = (reducersKeys, reducers) => reducersKeys.reduce((acc, reducerKey) => {
  return typeof reducers[reducerKey] === "function" ?
    {
      ...acc,
      [reducerKey]: reducers[reducerKey]
    }
    : acc
}, {})

export const combineReducers = reducers => {
  const reducersKeys = Object.keys(reducers);

  const reducerFunctions = getOnlyReducerFunctions(reducersKeys, reducers)
  const reducerFunctionsKeys = Object.keys(reducerFunctions);

  return (oldstate = {}, action) => {
    const newState = reducerFunctionsKeys.reduce((acc, reducerFuncKeys) => {
      const reducer = reducerFunctions[reducerFuncKeys]
     
      return typeof reducers[reducerFuncKeys] === "function" ?
        {
          ...acc,
          [reducerFuncKeys]: reducer(oldstate[reducerFuncKeys], action)
        }
        : acc
    },
      {})
    console.log(oldstate, newState, 'state, newState')
    console.log(newState)

    return newState
  }

}