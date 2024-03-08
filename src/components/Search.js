import React, { useState } from "react";
import './Search.css';

function Buscador({ onSearch }) {
    const [keyword, setKeyword] = useState('');

    const handleInputChange = (event) => {
        setKeyword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const params = { 
            "keyword" : keyword
        }

        // Llama a la función onSearch y pasa la keyword como argumento
        onSearch(params);
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
        <input className="search-input"
            type="text"
            placeholder="Escribe una palabra clave"
            value={keyword}
            onChange={handleInputChange}
        />
        <button className="search-button" type="submit">Buscar</button>
        </form>
    );
}

export default Buscador;
