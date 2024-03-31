import { Fragment } from "react";
import Greeting from "./Greeting";

function App() {
  function handleClick1(event) {
    event.target.textContent = "You clicked me!!!";
    console.log(event.target);
  }

  function handleClick2(firstName, lastName) {
    // console.log("You clicked button2 ");
    console.log(firstName, lastName);
  }

  function handleClick(e) {
    console.log("hello universe!!!");
  }
  // onClick HTML elements main kam karega
  // onClick ---> h1, div, h2, span, button
  // onClick apne banaye hue components pe kam nhi karta

  // onClick only works on HTML elements

  // wrapper function
  // function wrapperFunction(event) {
  //   // console.log(event);
  //   handleClick2("harshit", "vashisth");
  // }

  // Hum wrapper function alag se nhi banate.
  // Arrow function as a callback in onClick event listener function hamara wrapper function jese kam karta hain

  // Brower avi Arrow function call karta hain jiske undaar handleClick2 function to Arrow function call hone se wo function v call ho jata hain

  return (
    <Fragment>
      <h1>App</h1>
      <Greeting handleClick={handleClick} />

      <button onClick={handleClick1}>Button 1</button>
      <br />
      <br />
      <button
        onClick={(e) => {
          e.target.textContent = "You clicked Button 2!!!";
          handleClick2("harshit", "vashisth");
        }}
      >
        Button 2
      </button>
    </Fragment>
  );
}

export default App;
