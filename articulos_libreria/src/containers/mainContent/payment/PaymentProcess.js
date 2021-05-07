import {Steps} from 'primereact/steps';

export default function PaymentProcess(props) {
    const items = [
        {label: 'Personal'},
        {label: 'Seat'},
        {label: 'Payment'},
        {label: 'Confirmation'}
    ];


    return (
        <div className={"payment-process"}>
            <Steps model={items} />
        </div>
    );
}