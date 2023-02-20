import "./App.css";
import title from "./power.png";
import useProxyState from "./useProxyState";


// export default function App() {
 
//   return (
//     <div className="App">
//       <img src={title}/>
//     </div>
//   );
// }

export default function App() {
 let myState = useProxyState({ parentCounter: 1, childCounter: 1 });

  const addCounter = () => {
    // proxy set is called
    ++myState.parentCounter;
  };

  return (
    <div className="App">
      <img src={title}/>
      <h2> The Proxy Magic!🪄</h2>
      {myState.parentCounter}
      <br />
      <button onClick={addCounter}>add </button>
      <SecondCounter stateObj={myState} />
    </div>
  );
}

const SecondCounter = ({ stateObj }) => {
  return (
    <div className="second App">
      <h2> 🧒 child component 🧒🏻 </h2>
      {stateObj.childCounter}
      <br />
      <button onClick={() => ++stateObj.childCounter}>add </button>
      <br />
      <button onClick={() => ++stateObj.parentCounter}>add to up </button>
    </div>
  );
};