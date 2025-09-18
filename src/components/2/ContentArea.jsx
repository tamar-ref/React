export default function ContentArea({ recipes, selectedCategory }) {

    const filteredRecipes = selectedCategory
        ? recipes.filter(r => r.mealType?.includes(selectedCategory))
        : recipes;

    return (
        <>
            <main className="content-area">
                <div className="recipes-grid">
                    {filteredRecipes.map((recipe) => (
                        <div key={recipe.id} className="recipe-card">
                            <img src={recipe.image} alt={recipe.name} />
                            <h4>{recipe.name}</h4>
                            <p><strong>prepTimeMinutes:</strong> {recipe.prepTimeMinutes}</p>
                            <p><strong>cookTimeMinutes:</strong> {recipe.cookTimeMinutes}</p>
                            <p><strong>difficulty:</strong> {recipe.difficulty}</p>
                            <p><strong>rating:</strong> {recipe.rating}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}