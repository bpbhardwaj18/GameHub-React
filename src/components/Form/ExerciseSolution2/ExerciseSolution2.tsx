import { useState } from "react";
import DataEnrtyForm from "./DataEnrtyForm";
import DataList from "./DataList";
import FilterCategory from "./FilterCategory";

function ExerciseSolution2() {
    const categoryList = ["Groceries", "Utilities", "Entertainment"]
    const [expences, setExpences] = useState<any[]>([]);
    const [filteredExpences, setFilteredExpenses] = useState<any[]>([]);
    const [filteredCategory, setFilteredCategory] = useState<string>("All Category");
    const deleteExpence = (id: number) => {
        setExpences(expences.filter(expense => expense.id !== id))
        setFilteredExpenses(filteredExpences.filter(filteredExpences => filteredExpences.id !== id))
    }
    const onFilterChange = (data: string) => {
        setFilteredCategory(data);
        setFilteredExpenses(expences.filter(expense => expense.category === data || data === "All Category"));
    }
    const [count, setCount] = useState(1)
    return (
        <>
            <DataEnrtyForm categoryList={categoryList} onSubmit={(data) => {
                setExpences([...expences, { ...data, id: count }])
                setFilteredExpenses([...expences.filter(expense => (expense.category === filteredCategory || filteredCategory === "All Category")), ...((data.category === filteredCategory || filteredCategory === "All Category") ? [{ ...data, id: count }] : [])])
                setCount(count + 1)
            }} />
            <FilterCategory categoryList={categoryList} onChange={onFilterChange} />
            <DataList expences={filteredExpences} onDelete={deleteExpence} />
        </>
    );
}

export default ExerciseSolution2;