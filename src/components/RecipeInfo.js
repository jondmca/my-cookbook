import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function RecipeInfo ({image, onAddCard}){
    const[recipeName, setRecipeName] = useState("");
    const[commentArea, setCommentArea] = useState("");
    const [formData, setFormData] = useState({
        id: uuid(),
        ingredient: "",
        quantity: "",
        measurement: "",
    });
    const [submittedData, setSubmittedData] = useState([]);
    const [errors, setErrors] = useState([]);
    const [recipeError, setRecipeError] = useState([]);

    function handleRecipeName(event){
        setRecipeName(event.target.value);
    };
    
    function handleCommentArea(event){
        setCommentArea(event.target.value);
    };
    
    function handleSubmit(){
        if((recipeName.length && image && submittedData.length) === 0) {
            if(recipeName.length === 0) {
                setRecipeError(["Missing Recipe Name!"])
            }
            else if (image <= 0){
                setRecipeError(["Missing Recipe Photo!"])
            }
            else {
                setErrors(["Please add at least ONE ingredient!"])
                setRecipeError([])
            }
        }
        else { 
            const recipeData = {
                id: uuid(),
                title: [
                    { id: 1, image: image, recipeName: recipeName}
                ],
                ingredients: submittedData,
                comments: [
                    { id: 1, body: commentArea}
                ]
            };

            fetch("http://localhost:3001/cards",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(recipeData)
            })
            .then ((r) => r.json())
            .then((newCard) => onAddCard(newCard))
            
            setRecipeName("");
            setCommentArea("");
            setSubmittedData([])
            setRecipeError([]);
            setErrors([]);
        };
    };
    
    function handleChange(event){
    const name = event.target.name;
        const value = event.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    function handleClick(event){
        event.preventDefault();
        if((formData.ingredient && formData.quantity) === '') {
            if (formData.ingredient === ''){
                setErrors(["Please add Ingredient Name!"])
            } 
            else if (formData.quantity === '') {
                setErrors(["Please add valid Quantity!"])
            }
        }

        else{
            const dataArray = [...submittedData, formData];
            setSubmittedData(dataArray);
            setFormData({
                id: uuid(),
                ingredient: "",
                quantity: "",
                measurement: "",

            });
            setErrors([]);
        }
    };

    function handleDelete(event){
        const filteredArray = submittedData.filter(function(data){
            return data.id !== event.target.className
        })
        setSubmittedData(filteredArray);
    };

    const listOfIngredients = submittedData.map((data) => {
        return(
            <li key={data.id} className={data.id}>
                {data.ingredient} x {data.quantity} {data.measurement}
                &nbsp;<button onClick={handleDelete} className={data.id}>x</button>
            </li>
        )
    });

   return (
    <div className="recipe">
         {recipeError.length > 0 ? recipeError.map((error, index) => (
                <p key={index} style={{ color: "red"}}>
                    {error}
                </p>
            ))
            : null}
        <h3>Recipe Name:</h3>
        <p>
            <input placeholder="Enter Name" onChange={handleRecipeName} value={recipeName}></input>
        </p>
        <div id="ingredients">
        <div>
            <h3>Ingredients:</h3>
            {errors.length > 0 ? errors.map((error, index) => (
                <p key={index} style={{ color: "red"}}>
                    {error}
                </p>
            ))
            : null}
            <ul>
            {listOfIngredients}
            </ul>
            <form onSubmit={handleClick}>
                <input type="text" name="ingredient" placeholder="Ingredient Name" onChange={handleChange} value={formData.ingredient}></input> x 
                &nbsp;<input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} value={formData.quantity}></input> 
                &nbsp;<select name="measurement" onChange={handleChange} value={formData.measurement}>
                    <option>--</option>
                    <option>cup(s)</option>
                    <option>g</option>
                    <option>kg</option>
                    <option>L</option>
                    <option>mL</option>
                    <option>lb</option>
                    <option>oz</option>
                    <option>pt</option>
                    <option>tsp</option>
                    <option>Tbsp</option>
                    <option>pinch</option>
                    <option>dash</option>
                </select>
                &nbsp;<button type="submit" className="ingredient"> Add Ingredient </button>

            </form>
        </div>
        </div>
        <p>
        </p>
        <h3>Comments:</h3>
        <textarea className="comment" placeholder="Type your comment here . . . (optional)" onChange={handleCommentArea} value={commentArea}></textarea>

        <button className="submit" onClick={handleSubmit}>Submit Recipe!</button>
    </div>

   ) 
};

export default RecipeInfo;

