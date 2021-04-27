import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import imageNotFound from '../../../resources/images/notFound.svg'

const header = <img alt="Card" src={imageNotFound} className={"cardImage"}/>;
const footer = <span>
    <Button label="Save" icon="pi pi-check" style={{marginRight: '.25em'}}/>
    <Button label="Cancel" icon="pi pi-times" className="p-button-secondary"/>
</span>;

export default function Ofertas() {
    return (
        <div className={"ofertas"}>
            <Card footer={footer} header={header} title={"nombre de articulo"} subTitle={"precio?"}>
                Contenido de descripcion del producto
            </Card>
            <Card footer={footer} header={header} title={"nombre de articulo"} subTitle={"precio?"}>
                Contenido de descripcion del producto
            </Card>
            <Card footer={footer} header={header} title={"nombre de articulo"} subTitle={"precio?"}>
                Contenido de descripcion del producto
            </Card>

        </div>

    );
}