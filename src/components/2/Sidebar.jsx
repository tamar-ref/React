
export default function Sidebar({ categories, onSelectCategory, selectedCategory }) {

    return (
        <>
            <aside className="sidebar">
                <h3>Categories</h3>
                <ul>
                    <li
                        className={selectedCategory === null ? "active" : ""}
                        onClick={() => onSelectCategory(null)}
                    >
                        all
                    </li>
                    {categories.map(category => (
                        <li
                            key={category}
                            className={selectedCategory === category ? "active" : ""}
                            onClick={() => onSelectCategory(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    )
}