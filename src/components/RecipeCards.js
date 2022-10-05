import React, { useState, useEffect } from "react";
import imageData from "../data/images";
import { v4 as uuid } from 'uuid';

function RecipeCards(){
    const [cards, setCards] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3001/cards")
        .then((response) => response.json())
        .then((data) => {
          setCards(data);
        });
      }, []);

      function handleDelete(event){
        fetch(`http://localhost:3001/cards/${event.target.id}`, {
            method: "DELETE",
      })
      .then((r) => r.json())
      .then(() => console.log(`deleted ${event.target.id}!`))
      window.location.reload(false)
      }
    
      return(
        <div>
            {cards.length > 0 ? cards.map((card) => (
            <div key={uuid()} className="recipeCards">
                <img src={imageData[card.title[0].image].link} alt={imageData[card.title[0].image].alt} className="recipeImage" />
                <p className="recipeName">
                    {card.title[0].recipeName}
                </p>
                {card.ingredients.map((data, index) => (
                    <li key={index}>
                        {data.ingredient} x {data.quantity} {data.measurement}
                    </li>
                ))}
                <p>
                    {card.comments[0].body}
                </p>
                <button id={card.id} onClick={handleDelete}>Remove recipe</button>
            </div>
            
            )): null}
        </div>

      )
}

export default RecipeCards;