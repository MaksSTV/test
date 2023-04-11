import { useEffect } from "react";

async function getJSON(){

  try{
    const response = await fetch('https://testspringboot-production.up.railway.app/json')
    console.log(response)
    const json = await response.json()
    console.log(json)
  }
  catch(e){
    console.log(e)
  }
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
