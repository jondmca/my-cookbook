import React, { useState } from "react";

function Form(){

    const [ingredientName, setIngredientName] = useState("");
    const [ingredientQuantity, setQuantity] = useState("")
    const [measurement, setMeasurement] = useState("");
    const [submittedData, setSubmittedData] = useState([]);
    const [errors, setErrors] = useState([]);

    function handleIngredient(event){
        setIngredientName(event.target.value);
    };

    function handleQuantity(event){
        setQuantity(event.target.value);
    };

    function handleMeasurement(event){
        setMeasurement(event.target.value);
    };

    function handleSubmit(event){
        event.preventDefault();
        if (ingredientName.length > 0){
            const formData = {ingredient: ingredientName, quantity: ingredientQuantity, measurement: measurement};
            const dataArray = [...submittedData, formData];
            setSubmittedData(dataArray);
            setIngredientName("");
            setQuantity("");
            setMeasurement("");
            setErrors([]);
            console.log(formData)
        } else {
            setErrors(["Ingredient name is required!"]);
        }
        console.log(submittedData)
    }

    const listOfIngredients = submittedData.map((data, index) => {
        return(
            <div key={index}>
                {data.ingredient} x {data.quantity} {data.measurement}
                &nbsp;<button>x</button>
            </div>
        )
    })

    return(
        <div>
            <h3>Ingredients:</h3>
            {errors.length > 0 ? errors.map((error, index) => (
                <p key={index} style={{ color: "red"}}>
                    {error}
                </p>
            ))
            : null}
            {listOfIngredients}
            <form onSubmit={handleSubmit}>
                <input type="text" name="ingredient" placeholder="Ingredient Name" onChange={handleIngredient} value={ingredientName}></input> x 
                &nbsp;<input type="number" name="quantity" placeholder="Quantity" onChange={handleQuantity} value={ingredientQuantity}></input> 
                &nbsp;<select name="measurement" onChange={handleMeasurement} value={measurement}>
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
    );

}

export default Form;