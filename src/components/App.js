import React, { useState } from "react";
import '../App.css';
import Header from "./Header";
import ImageSelect from "./ImageSelect";
import RecipeInfo from "./RecipeInfo";


function App() {
  const [imageId, setImageId] = useState(0)

  const handleImageSelect = e => {
    setImageId(e.target.value)
    console.log(e.target.value)
  }


  return (
    <div className="App">
      <Header />
      
      <div className="App-body">
       <div id="recipeInfo">
          <p className="recipePhoto">Choose a photo for your recipe category!</p>
          <ImageSelect onImageSelect={handleImageSelect} image={imageId}/>
          <RecipeInfo image={imageId}/>
       </div>
       
      </div>
        <p>Hopefully this is where the cards will appear!</p>
    </div>
  );
}
    
export default App;
      
        
        
