import { useRef } from "react";
import Button from "./Button";
import FixedImage from "./fixedImage";

export default function FeaturedProjects({ setHoveredImage }) {
    // Projects array
    const projects = [
        {
            idx: 1,
            image: './src/assets/Img/elem1.webp',
            name: 'Play New Kidvision',
            info: ['NIKE', 'environment']
        },
        {
            idx: 2,
            image: './src/assets/Img/elem2.webp',
            name: 'SOHO NYC',
            info: ["ARC'TERYX", 'environment']
        },
        {
            idx: 3,
            image: './src/assets/Img/elem3.webp',
            name: 'Makers Studio HOI',
            info: ['NIKE', 'Experencal']
        },
        {
            idx: 4,
            image: './src/assets/Img/elem4.webp',
            name: 'SOHO 2023',
            info: ['Converse', 'environment']
        },
        {
            idx: 5,
            image: './src/assets/Img/elem5.webp',
            name: 'NYFW Popup',
            info: ['Afterpay', 'Experencal']
        },
        {
            idx: 6,
            image: './src/assets/Img/elem6.webp',
            name: 'NYFW Popup',
            info: ['Air Force 1 2021', 'environment']
        },
        {
            idx: 7,
            image: './src/assets/Img/elem7.webp',
            name: '50th Anniversary',
            info: ['NIKE', 'environment']
        }
    ];

    return (
        <div className="page3">
            <div className="title">
                <div className="circ"></div>
                <h3>FEATURED PROJECTS</h3>
            </div>
            {projects.map((project) => (
                <div key={project.idx}
                    className="container"
                    onMouseEnter={() => setHoveredImage(project.image)}
                    onMouseLeave={() => setHoveredImage(null)}
                >
                    <img src={project.image} />
                    <h2>{project.name}</h2>
                    <div className="info-2">
                        <h5>{project.info[0]}</h5>
                        <h6>{project.info[1]}</h6>
                    </div>
                </div>
            ))
            }
            <Button text={"All Projects ->"} />
        </div >
    );
}