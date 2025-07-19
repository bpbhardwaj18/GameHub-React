import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
    categoryList: string[]
    onSubmit: (data: FormData) => void
}
interface FormData {
    id: number
    description: string
    amount: number;
    category: string
}
function DataEnrtyForm(props: Props) {

    const { register, handleSubmit, formState } = useForm<FormData>()

    return (
        <form className="col g-3" onSubmit={handleSubmit(props.onSubmit)}>
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
                    {props.categoryList.map(item => { return <option key={item}>{item}</option> })}
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
    );

}

export default DataEnrtyForm;
