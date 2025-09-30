export function About() {
    return (
        <div style={{ display: "grid", gap: "0.75rem" }}>
            <h1>About</h1>
            <p style={{ color: "#555", lineHeight: 1.6 }}>
                This project follows Web Dev Simplified's shopping cart tutorial, rewritten in
                TypeScript with context for cart state, reusable components, and localStorage
                for persistence. It's a simple foundation for experimenting with UI patterns
                and state management in React.
            </p>
        </div>
    )
}