import React from "react";
import CarouselPrincipal from "./CarouselPrincipal";
import Ofertas from "../articulos/Ofertas";

export default function HomePage() {
    return (
        <div className={"home-page"}>
            <CarouselPrincipal />
            <Ofertas />
        </div>
    );
}