import React, { useState, useEffect } from "react";
import ImageSelect from "./ImageSelect";
import RecipeCards from "./RecipeCards";
import RecipeInfo from "./RecipeInfo";

function Home(){
    const [imageId, setImageId] = useState(0);
    const [cards, setCards] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3001/cards")
        .then((response) => response.json())
        .then((data) => {
          setCards(data);
        });
      }, []);

    const handleImageSelect = e => {
      setImageId(e.target.value);
    };

    function handleAddCard(newCard) {
      setCards([...cards, newCard]);
    };

    function handleDeleteCard(deletedCard){
      const updatedCards = cards.filter((card)=> card.id !== deletedCard)
      setCards(updatedCards)
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
            <RecipeInfo image={imageId} onAddCard={handleAddCard} />
          </div>
        </div>
        <div className="App-body">
          <h1>Your Recipes</h1>
          <RecipeCards cards={cards} onDeletecard={handleDeleteCard} />
        </div>
      </div>
    )
};


export default Home;