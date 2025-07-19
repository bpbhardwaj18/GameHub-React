import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {

}
interface FormData {
    description: string
    amount: number;
    category: string
}
function ExerciseSolution1() {

    const { register, handleSubmit, formState } = useForm<FormData>()

    const [expences, setExpenses] = useState<FormData[]>([]);
    const [filteredExpences, setFilteredExpenses] = useState<FormData[]>([]);
    const array = ["Groceries", "Utilities", "Entertainment"]
    return (
        <>
            <form className="col g-3" onSubmit={handleSubmit(data => {
                console.log(data)
                setExpenses([...expences, data]);
                setFilteredExpenses([...expences, data]);
            })}>
                <div className="col-10  m-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input {...register("description", { required: true, minLength: 5 })} type="text" className="form-control" id="description" placeholder="Enter the Description" />
                </div>
                <hr />
                {formState.errors.description?.type === "required" ? <p className="text-danger m-3">Description is required</p> : null}
                {formState.errors.description?.type === "minLength" ? <p className="text-danger m-3">Length Must be 5</p> : null}
                <hr />
                <div className="col-md-2 m-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input  {...register("amount", { required: true, min: 1 })} type="number" className="form-control" id="amount" />
                </div>
                <hr />
                {formState.errors.amount?.type === 'required' ? <p className="text-danger m-3">Amount is required</p> : null}
                {formState.errors.amount?.type === "min" ? <p className="text-danger m-3">Amount must be valid</p> : null}
                <hr />
                <div className="col-md-4  m-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select  {...register("category", { required: true, minLength: 5 })} id="category" className="form-select">
                        <option selected></option>
                        {array.map(item => { return <option key={item}>{item}</option> })}
                    </select>
                </div>
                <hr />
                {formState.errors.category?.type === 'required' ? <p className="text-danger m-3">Category is required</p> : null}
                {formState.errors.category?.type === "minlength" ? <p className="text-danger m-3">Category is required</p> : null}
                <hr />
                <div className="col-12  m-3">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form >
            <div className="col-md-4  m-3">
                <select id="filterCategory" className="form-select" onChange={(e) => {
                    var value = e.target.value;
                    if (value !== "All Category")
                        setFilteredExpenses(expences.filter((expense) => expense.category === value))
                    else
                        setFilteredExpenses(expences);
                }}>
                    <option selected>All Category</option>
                    {array.map(item => { return <option key={item}>{item}</option> })}
                </select>
            </div>
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
                    {filteredExpences.map((item, index) => (
                        <tr key={index}>
                            <td>{item.description}</td>
                            <td>{item.amount}</td>
                            <td>{item.category}</td>
                            <td><button className="btn btn-danger" onClick={() => {
                                setFilteredExpenses(filteredExpences.filter((expense, i) => i !== index))
                            }}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>

            </table>
            {console.log("filtered one " + filteredExpences)}
            {console.log("expensed " + expences)}
        </>
    );

}

export default ExerciseSolution1;
