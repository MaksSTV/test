import { useEffect } from "react";

function getJSON(){
  fetch('https://testspringboot-production.up.railway.app/json')
  .then(response => response.json())
  .catch(e => console.log(e))
}

function App() {

  useEffect(()=>{
    getJSON()
  }, [])

 

  return (
    <div className="App">
      Hello!
    </div>
  );
}

export default App;
