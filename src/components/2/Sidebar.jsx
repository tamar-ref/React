
export default function Sidebar({ categories, onSelectCategory }) {

    return (
        <>
            <aside className="sidebar">
                <h3>Categories</h3>
                <ul>
                    <li onClick={() => onSelectCategory(null)}>all</li>                    {categories.map(cat => (
                        <li key={cat} onClick={() => onSelectCategory(cat)}>
                            {cat}
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    )
}