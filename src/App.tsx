import { useEffect,useRef, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub,SubsResponseFromApi } from "./types";
import axios from "axios";






interface AppState{
  subs:Array<Sub>
  newSubsNumber:number
}



function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);

  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);

const divRef=useRef<HTMLDivElement>(null)

  useEffect(()=>{

const fetchsubs=():Promise<SubsResponseFromApi>=>{
  return   axios.get("http://localhost:3000/subs").then(response=>response.data)
}

const mapFRomApiSubs=(apiRewsponse:SubsResponseFromApi):
Array<Sub>=>{
  return apiRewsponse.map((subFromAPi)=>{
    const {
      nick,
      months:subMonths,
      profileUrl:avatar,
      description
    }=subFromAPi


    return {
      nick,
      description,
      avatar,
      subMonths
    }
  })
}

fetchsubs()
.then(mapFRomApiSubs)
  .then(setSubs)
},[])


const handleNewSub=(newSub:Sub):void=>{
  setSubs(subs=>[...subs,newSub])
  setNewSubsNumber(n=>n+1)
}


  return (
    <div className="App" ref={divRef}>
      <h1>midu subs</h1>
  <List subs={subs}></List>
  <p>new subs:{newSubsNumber}</p> 
  <Form onNewSub={handleNewSub}></Form>
    </div>
  );
}

export default App;
