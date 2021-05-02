import CarouselPrincipal from "./carouselPrincipal";
import Ofertas from "./ofertas";

export default function HomePage() {
    return (
        <div className={"home-page"}>
            <CarouselPrincipal />
            <Ofertas />
        </div>
    );
}