import React, { useState, useEffect, useRef, useContext } from 'react';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import articulosJson from '../../../resources/json/products.json';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const ProductPanel = () => {

    let articuloVacio = {
        id: null,
        name: '',
        image: null,
        description: '',
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };

    const [products, setProducts] = useState(articulosJson.data);

    const [productDialog, setMensajeArticulo] = useState(false);
    const [deleteProductDialog, setMensajeDeleteArticulo] = useState(false);
    const [deleteProductsDialog, setMensajeDeleteArticulos] = useState(false);
    const [product, setProduct] = useState(articuloVacio);
    const [articulosSeleccionados, agregarArticulosSeleccionados] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);




    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const nuevo = () => {
        setProduct(articuloVacio);
        setSubmitted(false);
        setMensajeArticulo(true);
    }

    const hideDialogo = () => {
        setSubmitted(false);
        setMensajeArticulo(false);
    }

    const ocultarMensajeDeleteArticulo = () => {
        setMensajeDeleteArticulo(false);
    }

    const ocultarMensajeDeleteArticulos = () => {
        setMensajeDeleteArticulos(false);
    }

    const guardarProducto = () => {
        setSubmitted(true);

        if (product.name.trim()) {
            let productos = [...products];
            let producto = { ...product };
            if (product.id) {
                const index = findIndexById(product.id);

                productos[index] = producto;
                toast.current.show({ severity: 'success', summary: 'Perfecto', detail: 'Artículo modificado', life: 3000 });
            }
            else {
                producto.id = crearId();
                producto.image = 'product-placeholder.svg';
                productos.push(producto);
                toast.current.show({ severity: 'success', summary: 'Perfecto', detail: 'Artículo creado', life: 3000 });
            }

            setProducts(productos);
            setMensajeArticulo(false);
            setProduct(articuloVacio);
        }
    }

    const editarArticulo = (product) => {
        setProduct({ ...product });
        setMensajeArticulo(true);
    }

    const confirmarDeleteArticulo = (product) => {
        setProduct(product);
        setMensajeDeleteArticulo(true);
    }

    const deleteProduct = () => {
        let _products = products.filter(val => val.id !== product.id);
        setProducts(_products);
        setMensajeDeleteArticulo(false);
        setProduct(articuloVacio);
        toast.current.show({ severity: 'success', summary: 'Perfecto', detail: 'Artículo eliminado', life: 3000 });
    }

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    const crearId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }


    const confirmarDeleteSeleccionado = () => {
        setMensajeDeleteArticulos(true);
    }

    const eliminarArticuloSeleccionado = () => {
        let _products = products.filter(val => !articulosSeleccionados.includes(val));
        setProducts(_products);
        setMensajeDeleteArticulos(false);
        agregarArticulosSeleccionados(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    }

    const onCategoryChange = (e) => {
        let producto = { ...product };
        producto['category'] = e.value;
        setProduct(producto);
    }

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let producto = { ...product };
        producto[`${name}`] = val;

        setProduct(producto);
    }

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let producto = { ...product };
        producto[`${name}`] = val;

        setProduct(producto);
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="Nuevo" icon="pi pi-plus" className="p-button-success p-mr-2" onClick={nuevo} />
                <Button label="Vaciar todos" icon="pi pi-trash" className="p-button-danger" onClick={confirmarDeleteSeleccionado} disabled={!articulosSeleccionados || !articulosSeleccionados.length} />
            </React.Fragment>
        )
    }



    const codeBodyTemplate = (rowData) => {
        return (
            <div>
                <span className="p-column-title"></span>
                {rowData.code}
            </div>
        );
    }

    const nameBodyTemplate = (rowData) => {
        return (
            <div>
                <span className="p-column-title"></span>
                {rowData.name}
            </div>
        );
    }

    const imageBodyTemplate = (rowData) => {
        return (
            <div>
                <span className="p-column-title"></span>
                <img src={`assets/demo/images/product/${rowData.image}`} alt={rowData.image} className="product-image" />
            </div>
        )
    }

    const priceBodyTemplate = (rowData) => {
        return (
            <div>
                <span className="p-column-title"></span>
                {formatCurrency(rowData.price)}
            </div>
        );
    }

    const categoryBodyTemplate = (rowData) => {
        return (
            <div>
                <span className="p-column-title"></span>
                {rowData.category}
            </div>
        );
    }

    const ratingBodyTemplate = (rowData) => {
        return (
            <div>
                <span className="p-column-title"></span>
                <Rating value={rowData.rating} readonly cancel={false} />
            </div>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return (
            <div>
                <span className="p-column-title"></span>
                <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>
            </div>
        )
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="actions">
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => editarArticulo(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => confirmarDeleteArticulo(rowData)} />
            </div>
        );
    }

    const header = (
        <div className="table-header">
            <h5 className="p-m-0">Buscar artículos</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Buscar..." />
            </span>
        </div>
    );

    const productDialogFooter = (
        <div>
            <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={hideDialogo} />
            <Button label="Guardar" icon="pi pi-check" className="p-button-text" onClick={guardarProducto} />
        </div>
    );
    const deleteProductDialogFooter = (
        <div>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={ocultarMensajeDeleteArticulo} />
            <Button label="Si" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </div>
    );
    const deleteProductsDialogFooter = (
        <div>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={ocultarMensajeDeleteArticulos} />
            <Button label="Si" icon="pi pi-check" className="p-button-text" onClick={eliminarArticuloSeleccionado} />
        </div>
    );

    return (
        <div className="p-grid crud-demo">
            <div className="p-col-12">
                <div className="card">
                    <Toast ref={toast} />
                    <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>

                    <DataTable ref={dt} value={products} selection={articulosSeleccionados} onSelectionChange={(e) => agregarArticulosSeleccionados(e.value)}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter} emptyMessage="No se encontraron artículos" header={header}>
                        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                        <Column field="code" header="Code" sortable body={codeBodyTemplate}></Column>
                        <Column field="name" header="Name" sortable body={nameBodyTemplate}></Column>
                        <Column header="Image" body={imageBodyTemplate}></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                        <Column field="category" header="Category" sortable body={categoryBodyTemplate}></Column>
                        <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable></Column>
                        <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable></Column>
                        <Column body={actionBodyTemplate}></Column>
                    </DataTable>

                    <Dialog visible={productDialog} style={{ width: '450px' }} header="Detalles del artículo" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialogo}>
                        {product.image && <img src={`assets/demo/images/product/${product.image}`} alt={product.image} className="product-image" />}
                        <div className="p-field">
                            <label htmlFor="name">Name</label>
                            <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name })} />
                            {submitted && !product.name && <small className="p-invalid">El nombre es obligatorio</small>}
                        </div>
                        <div className="p-field">
                            <label htmlFor="description">Description</label>
                            <InputTextarea id="description" value={product.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                        </div>

                        <div className="p-field">
                            <label className="p-mb-3">Category</label>
                            <div className="p-formgrid p-grid">
                                <div className="p-field-radiobutton p-col-6">
                                    <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={product.category === 'Accessories'} />
                                    <label htmlFor="category1">Accessories</label>
                                </div>
                                <div className="p-field-radiobutton p-col-6">
                                    <RadioButton inputId="category2" name="category" value="Clothing" onChange={onCategoryChange} checked={product.category === 'Clothing'} />
                                    <label htmlFor="category2">Clothing</label>
                                </div>
                                <div className="p-field-radiobutton p-col-6">
                                    <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={product.category === 'Electronics'} />
                                    <label htmlFor="category3">Electronics</label>
                                </div>
                                <div className="p-field-radiobutton p-col-6">
                                    <RadioButton inputId="category4" name="category" value="Fitness" onChange={onCategoryChange} checked={product.category === 'Fitness'} />
                                    <label htmlFor="category4">Fitness</label>
                                </div>
                            </div>
                        </div>

                        <div className="p-formgrid p-grid">
                            <div className="p-field p-col">
                                <label htmlFor="price">Price</label>
                                <InputNumber id="price" value={product.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                            </div>
                            <div className="p-field p-col">
                                <label htmlFor="quantity">Quantity</label>
                                <InputNumber id="quantity" value={product.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} integeronly />
                            </div>
                        </div>
                    </Dialog>

                    <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={ocultarMensajeDeleteArticulo}>
                        <div className="confirmation-content">
                            <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                            {product && <span>¿Está seguro de eliminar el artículo <b>{product.name}</b>?</span>}
                        </div>
                    </Dialog>

                    <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={ocultarMensajeDeleteArticulos}>
                        <div className="confirmation-content">
                            <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                            {product && <span>¿Está seguro de eliminar los artículos?</span>}
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}

export default ProductPanel;