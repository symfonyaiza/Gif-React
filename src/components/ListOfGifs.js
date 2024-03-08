import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getGifs from "../getGifs";
import Gif from "./Gif";

export default function ListOfGifs({params}) {
    const { keyword } = useParams();
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getGifs({ keyword })
        .then((gifs) => {
            setGifs(gifs);
            setLoading(false);
        });
    }, [keyword]);

    if (loading) return <div><span>Cargando ... ...</span></div>;

    return (
        <div>
        {gifs.map(({ id, title, url }) => (
            <Gif
            key={id}
            title={title}
            url={url}
            id={id}
            />
        ))}
        </div>
    );
}