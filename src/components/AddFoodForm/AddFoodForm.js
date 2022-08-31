import {useState} from "react"
import { Divider, Input } from 'antd';

function AddFoodForm(props) {
    const [form, setForm] = useState({
        name: "",
        image: "",
        calories: 0,
        servings: 0,
    })

    function handleChange(event) {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <form>
            <Divider>Add Food Entry</Divider>
            <label htmlFor="food-name">Name: </label>
            <Input id="food-name" type='text' onChange={handleChange} name="name"/>
            <label htmlFor="food-image">Image: </label>
            <Input id="food-image" placeholder="http://example.com/food-image.jpg" type='text' onChange={handleChange} name="image"/>
            <label htmlFor="food-calories">Calories: </label>
            <Input id="food-calories" type='number' onChange={handleChange} name="calories"/>
            <label htmlFor="food-servings">Servings: </label>
            <Input id="food-servings" type='number' onChange={handleChange} name="servings"/>
            <button type="submit">Create</button>
        </form>
    )
}

export default AddFoodForm;