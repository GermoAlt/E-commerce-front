import React from "react";
import CarouselPrincipal from "./CarouselPrincipal";
import Featured from "./Featured";

export default function HomePage() {
    return (
        <div className={"home-page"}>
            <CarouselPrincipal />
            <Featured />

        </div>
    );
}