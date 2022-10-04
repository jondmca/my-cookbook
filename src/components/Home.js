import React, { useState } from "react";
import ImageSelect from "./ImageSelect";
import RecipeCards from "./RecipeCards";
import RecipeInfo from "./RecipeInfo";

function Home(){
    const [imageId, setImageId] = useState(0);

    const handleImageSelect = e => {
      setImageId(e.target.value)
      console.log(e.target.value)
    }

    return(
      <div className="App">
        <header className="App-header">
            <h2>🌿 My Little Cookbook App 🌿</h2>
        </header>

        <div className="App-body">
          <div id="recipeInfo">
            <p className="recipePhoto">Choose a photo for your recipe category!</p>
            <ImageSelect onImageSelect={handleImageSelect} image={imageId}/>
            <RecipeInfo image={imageId}/>
          </div>
        </div>
        <div className="App-body">
          <RecipeCards />
        </div>
      </div>
    )
}


export default Home;