
interface AlertProps {
    children: string; // or ReactNode 
    onClick?: () => void;

}
function Alert(props: AlertProps) {
    const text = props.children;
    return <div className="alert alert-primary alert-dismissible">{text}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={props.onClick}></button>

    </div>;
}
export default Alert;