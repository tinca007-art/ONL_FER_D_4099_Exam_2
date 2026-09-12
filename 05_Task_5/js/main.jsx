import React from "react";
import { createRoot } from "react-dom/client";


function UserDetails({ name, surname, address, postcode, city }) {
    return (
        <div className="card">
            <div>
                <h5>{name} {surname}</h5>
                <div>{address}</div>
                <div>{postcode} {city}</div>
            </div>
        </div>
    );
}

function App() {
    return (
        <UserDetails
            name="Jan"
            surname="Novák"
            address="Hlavní 123"
            postcode="11000"
            city="Praha"
        />
    );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
