export function Home() {
    return (
        <div style={{ display: "grid", gap: "0.75rem" }}>
            <h1>Home</h1>
            <p style={{ color: "#555", lineHeight: 1.6 }}>
                Welcome to the store demo built with React, TypeScript, and Vite. Use the
                navigation to browse the store, add items to your cart, and view your cart
                from the button in the top right.
            </p>
        </div>
    )
}