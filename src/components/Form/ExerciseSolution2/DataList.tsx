
interface Props {
    expences: { description: string, amount: number, category: string, id: number }[]
    onDelete: (data: number) => void
}
function DataList({ expences, onDelete }: Props) {
    return (
        <table className="table table-striped-columns">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {expences.map((item, index) => (
                    <tr key={index}>
                        <td>{item.description}</td>
                        <td>{item.amount}</td>
                        <td>{item.category}</td>
                        <td><button className="btn btn-danger" onClick={() => onDelete(item.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>

        </table>
    );
}

export default DataList;