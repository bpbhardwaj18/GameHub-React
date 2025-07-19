
interface Props {
    categoryList: string[]
    onChange: (data: string) => void;
}
function FilterCategory(props: Props) {
    return (
        <div className="col-md-4  m-3">
            <select id="filterCategory" className="form-select" onChange={(e) => {
                var value = e.target.value;
                props.onChange(value)
            }}>
                <option selected>All Category</option>
                {props.categoryList.map(item => { return <option key={item}>{item}</option> })}
            </select>
        </div>
    );
}


export default FilterCategory;