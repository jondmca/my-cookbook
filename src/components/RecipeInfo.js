import React, { useState } from "react";
import Form from "./Form";


function RecipeInfo ({image}){
    console.log(image)
    const[recipeName, setRecipeName] = useState("");
    const[commentArea, setCommentArea] = useState("");

    function handleRecipeName(event){
        setRecipeName(event.target.value);
    };

    function handleCommentArea(event){
        setCommentArea(event.target.value);
    };

    function handleSubmit(event){
        event.preventDefault();
        console.log(recipeName);
        console.log(commentArea);
        setRecipeName("");
        setCommentArea("");

    };

   return (
    <div className="recipe">
        <h3>Recipe Name:</h3>
        <p>
            <input placeholder="Enter Name" onChange={handleRecipeName} value={recipeName}></input>
        </p>
        <div id="ingredients">
        <Form />
        </div>
        <p>
        </p>
        <h3>Comments:</h3>
        <textarea className="comment" placeholder="Type your comment here . . ." onChange={handleCommentArea} value={commentArea}></textarea>

        <button className="submit" onClick={handleSubmit}>Submit Recipe!</button>
    </div>

   ) 
};

export default RecipeInfo;

