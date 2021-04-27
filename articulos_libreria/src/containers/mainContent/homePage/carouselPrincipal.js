import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button'
import { products } from '../../../resources/json/products.js'

const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '600px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '480px',
        numVisible: 1,
        numScroll: 1
    }
];

const productTemplate = (product) => {
    console.log("product", product)
    console.log("product")
    console.log("product")
    return (
        <div className="product-item">
            <div className="product-item-content">
                <div className="p-mb-3">
                </div>
                <div>
                    <div className="car-buttons p-mt-5">
                        <Button icon="pi pi-search" className="p-button p-button-rounded p-mr-2" />
                        <Button icon="pi pi-star" className="p-button-success p-button-rounded p-mr-2" />
                        <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default function CarouselPrincipal() {
    return (
        <div className={"carouselPrincipal"}>
            <Carousel value={products} itemTemplate={productTemplate} numVisible={3} numScroll={1} header={<h1>Ofertas header</h1>} footer={<h1>Ofertas footer</h1>} responsiveOptions={responsiveOptions}/>
        </div>
    );
}