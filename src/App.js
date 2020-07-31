import React, {useState, useEffect} from "react";
import "./App.css";
import PicHolder from "./components/PictureHolder";
import axios from 'axios';

function App() {

  const [pictureData, SetPictureData] = useState();
 
  useEffect(()=>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=phBlwMAUOEbsVowbUOzfDlMgpwYThIcPvQoQDzht").then((resolve)=>{
      console.log(resolve.data);
      SetPictureData(resolve.data);
      return pictureData;
      
    }).catch(()=>{
      console.log("There was an error.");
  
    })  
  }, []); 

  if(!pictureData){
    return <h3>Loading...</h3>;
  }

  console.log(pictureData);
  
  
  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png"/>
      <PicHolder data = {pictureData.url}/>

      </div>
  );
}

export default App;
