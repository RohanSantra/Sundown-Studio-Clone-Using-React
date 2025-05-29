// Showing image when hovered over featured products
export default function FixedImage({ image }) {
    return (
        <div
            id="fixed-image"
            style={{
                backgroundImage: image ? `url(${image})` : "none",
                display: image ? "block" : "none",
            }}
        ></div>
    );
}
