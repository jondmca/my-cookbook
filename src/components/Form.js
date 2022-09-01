import React, { useState } from "react";

function Form(){
    const [formData, setFormData] = useState({
        ingredient: "",
        quantity: "",
        measurement: "",
    });
    const [submittedData, setSubmittedData] = useState([]);
    const [errors, setErrors] = useState([]);

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        if (formData.ingredient.length > 0){
            const dataArray = [...submittedData, formData];
            setSubmittedData(dataArray);
            setFormData({
                ingredient: "",
                quantity: "",
                measurement: "",

            });
            setErrors([]);
            console.log(formData)
        } else {
            setErrors(["Ingredient name is required!"]);
        }
    }

    function handleDelete(event){
        const filteredArray = submittedData.filter(function(data){
            return data.ingredient !== event.target.className
        })
        setSubmittedData(filteredArray);
    }

    const listOfIngredients = submittedData.map((data) => {
        return(
            <li key={data.ingredient} className={data.ingredient}>
                {data.ingredient} x {data.quantity} {data.measurement}
                &nbsp;<button onClick={handleDelete} className={data.ingredient}>x</button>
            </li>
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
            <ul>
            {listOfIngredients}
            </ul>
            <form onSubmit={handleSubmit}>
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
    );

}

export default Form;