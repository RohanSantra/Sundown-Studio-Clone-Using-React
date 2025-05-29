import { useEffect, useRef } from "react";

export default function Loader() {

    // Passinng the reference to add styling
    const loaderRef = useRef(null)

    // To change the styling
    useEffect(() => {
        setTimeout(() => {
            loaderRef.current.style.animation = 'moveup 1s linear';
            loaderRef.current.style.top = '-100%';
            setTimeout(() => loaderRef.current.style.display = 'none', 1000)
        }, 3200)
    }, [])

    return (
        <div id="loader" ref={loaderRef}>
            <h1>ENVIRONMENTS</h1>
            <h1>EXPERIENCES</h1>
            <h1>CONTENT</h1>
        </div>
    );
}