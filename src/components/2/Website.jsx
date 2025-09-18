import { useState, useEffect } from "react"

import Header from "./Header"
import Sidebar from "./Sidebar"
import ContentArea from "./ContentArea"
import Footer from "./Footer"
import './style.css'

export default function Website() {

    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then(res => res.json())
            .then(data => {
                setRecipes(data.recipes);
                const allCategories = data.recipes.flatMap(r => r.mealType || []);
                const uniqueCategories = Array.from(new Set(allCategories));
                setCategories(uniqueCategories);
            });
    }, []);

    return (
        <>
            <div className="app">
                <Header />
                <div className="main">
                    <Sidebar
                        categories={categories}
                        onSelectCategory={setSelectedCategory}
                        selectedCategory={selectedCategory} />
                    <ContentArea
                        recipes={recipes}
                        selectedCategory={selectedCategory} />
                </div>
                <Footer />
            </div>
        </>
    )
}