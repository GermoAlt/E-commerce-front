import CarouselPrincipal from "./CarouselPrincipal";
import Ofertas from "./Ofertas";

export default function HomePage() {
    return (
        <div className={"home-page"}>
            <CarouselPrincipal />
            <Ofertas />
        </div>
    );
}