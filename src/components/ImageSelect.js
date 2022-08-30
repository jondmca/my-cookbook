import React from "react";
import imageData from "../data/images";


function imageSelect({onImageSelect, image}){

    return (
        <div className="images">
        <img src={imageData[image].link} alt={imageData[image].alt}/>
            <div>
                <select name="select" onChange={onImageSelect}>
                    <option value="0">- Select Image -</option>
                    <option value="1">{imageData[1].name}</option>
                    <option value="2">{imageData[2].name}</option>
                    <option value="3">{imageData[3].name}</option>
                    <option value="4">{imageData[4].name}</option>
                    <option value="5">{imageData[5].name}</option>
                    <option value="6">{imageData[6].name}</option>
                </select>
            </div>
        </div>
    )
};

export default imageSelect;