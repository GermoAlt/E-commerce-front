import CarouselPrincipal from "./carouselPrincipal";
import Ofertas from "./ofertas";

export default function HomePage() {
    return (
        <div className={"homePage"}>
            <CarouselPrincipal />
            <Ofertas />
        </div>
    );
}