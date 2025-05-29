import Navbar from "./Navbar"

export default function HeroSection() {
    return (
        <div className="page1">
            <Navbar />
            <div className="main-section">
                <div className="left">
                    <h3>Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences
                        and
                        environments.</h3>
                </div>
                <div className="right">
                    <h1>SPACES <br />THAT <br />INSPIRE</h1>
                </div>
            </div>
            <div className="hero-shape">
                <div className="hero-1"></div>
                <div className="hero-2"></div>
            </div>
            <video loop muted autoPlay src="https://sundown-ivory.vercel.app/video.mp4"></video>
        </div>
    );
}