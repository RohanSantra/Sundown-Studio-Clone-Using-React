function MarqueEL() {
    return (
        <div className="container">
            <h1>environments </h1>
            <div className="orange"></div>
            <h1>experiences</h1>
            <div className="orange"></div>
            <h1>Content</h1>
            <div className="orange"></div>
        </div>
    );
}


export default function Marque() {
    return (
        <div className="marquee">
            <MarqueEL />
            <MarqueEL />
            <MarqueEL />
        </div>
    );
}