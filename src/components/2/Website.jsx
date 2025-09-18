import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

import Header from "./Header";
import SideBar from "./SideBar";
import ContentArea from "./ContentArea";
import Footer from "./Footer";
import './style.css';

export default function Website() {
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then(res => res.json())
            .then(data => {
                setRecipes(data.recipes);
                setCategories([...new Set(data.recipes.flatMap(({ mealType = [] }) => mealType))]);
            });
    }, []);

    const Page = () => {
        const { categoryName } = useParams();
        const selectedCategory = categoryName || null;

        return (
            <div className="app">
                <Header />
                <div className="main">
                    <SideBar categories={categories} selectedCategory={selectedCategory} />
                    <ContentArea recipes={recipes} selectedCategory={selectedCategory} />
                </div>
                <Footer />
            </div>
        );
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Page />} />
                <Route path="/category/:categoryName" element={<Page />} />
            </Routes>
        </Router>
    );
}
