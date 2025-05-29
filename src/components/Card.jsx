import { useState } from "react";

export default function Card() {
    const cardInfo = [
        {
            idx: 0,
            image: './src/assets/Img/page4-1.webp',
            name: 'Design',
            description: 'Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to - end design solutions from concept, design, and architectural drawings to 3D renderings.'
        },
        {
            idx: 1,
            image: './src/assets/Img/page4-2.webp',
            name: 'Project',
            description: 'Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.'
        },
        {
            idx: 2,
            image: './src/assets/Img/page4-3.webp',
            name: 'Execution',
            description: 'We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.'
        }
    ]

    // To change card styling with default value being 0
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="page4">
            <div className="container">
                <div className="left-side">
                    <div className="headline">
                        {
                            cardInfo.map((card) => (
                                <h2 key={card.idx}
                                    onClick={() => setActiveIndex(card.idx)}
                                    style={{
                                        color: card.idx === activeIndex ? 'white' : 'gray',
                                        paddingLeft: card.idx === activeIndex ? "0" : "20px",
                                        borderLeft: `5px solid ${card.idx === activeIndex ? "#FE330A" : "grey"}`
                                    }}>
                                    {card.name}
                                </h2>
                            ))
                        }
                    </div>
                    <div className="description">
                        {cardInfo.map((card) => (
                            <p
                                key={card.idx}
                                style={{
                                    display: card.idx === activeIndex ? "initial" : "none"
                                }}>
                                {card.description}
                            </p>
                        ))}
                    </div>

                </div>
                <div className="right-side"
                    style={{
                        backgroundImage: `url(${cardInfo[activeIndex].image})`
                    }}>
                </div>
            </div>
        </div>
    );
}