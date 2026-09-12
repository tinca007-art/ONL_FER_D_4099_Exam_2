import React from "react";
import { createRoot } from "react-dom/client";


function App() {
    return (
        <div>
            <h1>Ahoj světe!</h1>
            <span>React Rules!</span>
        </div>
    );
}


/**
 * Do not modify the code below!
 */
 const container = document.getElementById("app");
 const root = createRoot(container);
 root.render(<App />);