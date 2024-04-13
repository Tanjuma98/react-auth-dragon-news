import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex mb-6">
            <button className="btn btn-secondary mr-6">Breaking News</button>
            <Marquee pauseOnHover={true} speed={150} className="mr-4">
                I can be a React component, multiple React components, or just some text.
            </Marquee>
            <Marquee pauseOnHover={true} speed={150} className="mr-4">
                I can be a React component, multiple React components, or just some text.
            </Marquee>
            <Marquee pauseOnHover={true} speed={150} className="mr-4">
                I can be a React component, multiple React components, or just some text.
            </Marquee>
            <Marquee pauseOnHover={true} speed={150} className="mr-4">
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;