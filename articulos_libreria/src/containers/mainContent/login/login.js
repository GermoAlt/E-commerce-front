import { Dialog } from 'primereact/dialog';

export default function login() {
    return (
        <div className={"login"}>
            <Dialog visible={displayBasic} style={{ width: '50vw' }} onHide={() => onHide('displayBasic')}>

            </Dialog>
        </div>
    );
}