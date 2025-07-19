import { useForm } from "react-hook-form";

interface FormData {
    name: string;
    address: string
}
function UseFormEx() {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>();


    return (
        <form action="" onSubmit={handleSubmit(data => {
            console.log(data);
            console.log(data.address);
        })}>
            <div className="  input-group  m-3">
                <span className="input-group-text" id="basic-addon1">Name</span>
                <input {...register('name', { required: true, minLength: 3 })} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />

            </div>
            <hr />
            {errors.name?.type === 'required' ? <p className="text-danger m-3">Value Required</p> : null}
            {errors.name?.type === 'minLength' ? <p className="text-danger m-3">Minimum lenght required 3</p> : null}
            <hr />
            <div className="input-group m-3">
                <label className="input-group-text" htmlFor="inputGroupFile01">Adress</label>
                <input {...register('address')} type="text" className="form-control" id="inputGroupFile01" />
            </div>
            <button disabled={!isValid} type="submit" className="btn btn-primary m-3">Submit</button>
        </form >
    );
}

export default UseFormEx;