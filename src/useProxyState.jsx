import { useReducer } from "react";

// state3


function reducer(state, action) {
  switch (action.type) {
    case "change":
      return { ...action.value };
    default:
      throw new Error();
  }
}

const useProxyState = (init) => {
  const [state, dispatch] = useReducer(reducer, init);

  const proxyState = new Proxy(init, {
    get(target, key) {
      if (state[key]) {
        return state[key];
      }
      // return init value
      return target[key];
    },
    set(target, key, value) {
        let newStore = {...state};
        newStore[key] = value;
        dispatch({ type: "change", value: newStore });
        target[key] = value;
        return true;
      }
  });

  return proxyState;
  
};

export default useProxyState;



