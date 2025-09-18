
import { Link } from "react-router-dom";

export default function SideBar({ categories, selectedCategory }) {

    return (
        <>
            <aside className="sideBar">
                <h3>Categories</h3>
                <ul>
                    <li>
                        <Link
                            to="/"
                            className={selectedCategory === null ? "active" : ""}
                        >
                            all
                        </Link>
                    </li>
                    {categories.map(category => (
                        <li key={category}>
                            <Link
                                to={`/category/${category}`}
                                className={selectedCategory === category ? "active" : ""}
                            >
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    )
}