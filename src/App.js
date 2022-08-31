import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';
import { Divider } from 'antd';

function App() {
  return (
    <div className="App">
      <AddFoodForm/>
      <Divider>Food List</Divider>
      {foods.map((currentFood) => {
        return (
          <FoodBox
            name = {currentFood.name}
            calories = {currentFood.calories}
            servings = {currentFood.servings}
            image = {currentFood.image}
          />
        )})}
    </div>
  );
}
export default App;
