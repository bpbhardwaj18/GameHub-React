
interface Props {
    items: { id: string, name: string }[]
    onAdd: () => void
    onUpdate: () => void
    onRemove: () => void
}

function UpdateArray(props: Props) {
    return (
        <>
            {/* {props.items.map(item => {
                console.log(item);
                return <p>{item}</p>;
            })} */}
            {props.items.map(item => (
                <p style={{ background: "Green", fontSize: 50 }}>{item.id} : {item.name}</p>
            ))}
            <button type="button" className="btn btn-primary" style={{ margin: 10 }} onClick={props.onAdd} >Add</button >
            <button type="button" className="btn btn-primary" style={{ margin: 10 }} onClick={props.onUpdate} >Update</button>
            <button type="button" className="btn btn-primary" style={{ margin: 10 }} onClick={props.onRemove}>Remove</button>
        </>
    );

}


export default UpdateArray;