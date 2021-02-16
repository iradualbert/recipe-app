import React, { useState, useEffect } from "react";

const mealDetailApi = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";

const Recipe = (props) => {
    const id = props.match.mealId;
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchRecipe = async () => {
            const res = await fetch()
        };
    }, [])

    return (
        <div className="container">

        </div>
    )
};

const styles = {

};

export default Recipe;