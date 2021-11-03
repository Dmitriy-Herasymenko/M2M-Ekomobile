import React from "react";
import {useDispatch, useSelector} from "react-redux";



export const App = () => {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);


    const addCash = cash => dispatch({type: "ADD_CASH", payload: cash });
    const getCash = cash => dispatch({type: "GET_CASH", payload: cash });


  return (
      <div className="App">
        <div>{cash}</div>
          <div style={{display: 'flex'}}>
              <button onClick={() => addCash(Number(prompt()))}>ADD CASH</button>
              <button onClick={() => getCash(Number(prompt()))}>GET CASH</button>
          </div>
      </div>
  );
};
