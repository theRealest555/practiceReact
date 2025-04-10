// import React, { Component } from "react";

// export class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   increment = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   };

//   decrement = () => {
//     this.setState((prevState) => ({ count: prevState.count - 1 }));
//   };


//   render() {
//     return (
//       <div>
//         <h1>Counter: {this.state.count}</h1>
//         <button
//           className="btn btn-sm btn-outline-secondary"
//           onClick={this.increment}
//         >
//           Increment
//         </button>
//         <button
//           className="btn btn-sm btn-outline-secondary"
//           onClick={this.decrement}
//         >
//           Decrement
//         </button>
//       </div>
//     );
//   }
// }

/*
import React, { useState, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const incrementRef = useRef(null);
  const decrementRef = useRef(null);

  const increment = () => {
    if (incrementRef.current) return; 

    let target = count + 100;
    incrementRef.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= target) {
          clearInterval(incrementRef.current);
          incrementRef.current = null;
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 1);
  };

  const decrement = () => {
    if (decrementRef.current) return; // Prevent overlapping intervals

    let target = count - 100;
    decrementRef.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= target) {
          clearInterval(decrementRef.current);
          decrementRef.current = null;
          return prevCount;
        }
        return prevCount - 1;
      });
    }, 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Compteur : {count}</h1>
      <button className="btn btn-sm btn-outline-secondary" onClick={increment} style={{ marginRight: "10px" }}>
        Incrémenter
      </button>
      <button className="btn btn-sm btn-outline-secondary" onClick={decrement}>Décrémenter</button>
    </div>
  );
}

export default Counter;
*/

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Compteur : {count}</h1>
      <button className="btn btn-sm btn-outline-secondary"  onClick={increment} style={{ marginRight: "10px" }}>
        Incrémenter
      </button>
      <button className="btn btn-sm btn-outline-secondary" onClick={decrement}>Décrémenter</button>
    </div>
  );
}

export default Counter;

