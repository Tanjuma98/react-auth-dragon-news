/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={news.image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{news.title}</h2>
                {
                    news.details.length > 200 ?
                        <p>{news.details.slice(0, 200)}... <Link to={`/news/${news._id}`} className="font-bold text-blue-600">Read more</Link></p>
                        :
                        <p>{news.details}</p>
                }
            </div>
        </div>
    );
};

export default NewsCard;