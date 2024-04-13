import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return (
        <div className="p-4 bg-base-200 rounded-md">
            <h2 className="text-semibold mb-6">All Categories</h2>
            {
                categories.map(c => <Link to={`/categories/${c.id}`} key={c.id}><p className="mb-4 text-center">{c.name}</p></Link>)
            }
            {
                news.map(c => <div key={c.category_id} className="p-4 border rounded-lg mb-3 space-y-3">
                    <img src={c.image_url} alt="" />
                    <p>{c.title}</p>
                    <p>{c.author.published_date}</p>
                </div>)
            }
        </div>
    );
};

export default LeftSideNav;