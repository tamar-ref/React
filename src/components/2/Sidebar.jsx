
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
                    {categories.map(cat => (
                        <li
                            key={cat}
                            className={selectedCategory === cat ? "active" : ""}
                            onClick={() => onSelectCategory(cat)}
                        >
                            {cat}
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    )
}