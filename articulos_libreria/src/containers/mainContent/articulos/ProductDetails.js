import {useParams} from "react-router";
import { BreadCrumb } from 'primereact/breadcrumb';
import { Panel } from 'primereact/panel';
import products from "../../../resources/json/products.json"


const ProductDetails = () => {
    const id = useParams().id;
    const item = products.data.filter((item) => item.id === id)[0];
    console.log("item", item)
    const items = [
        { label: 'Artículos' },
        { label: `${item.category}`},
    ];



    const home = { icon: 'pi pi-home', url: 'http://localhost:3000/' }
    return (
        <div>
            <BreadCrumb model={items} home={home} className={"product-details-breadcrumb"}/>
            <div className={"product-details-container"}>
                <Panel header={"Descripción"}>
                    <div className={"product-details-panel-content-container"}>
                        <div><img src={`${item.image}`} alt={"Imagen del producto"}/> </div>
                        <div>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </Panel>
            </div>
        </div>
    )
}

export default ProductDetails;