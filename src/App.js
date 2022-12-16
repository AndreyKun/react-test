import './App.css';
import Header from './header/Header';
import TestFunctional from './TestFunctional';
import TestOOPStyle from "./TestOOPStyle";
import Goods from './goods/Goods';

const funcData = {
  test_text: 'Test component functional style'
};

const goods = [
  {'title': 'apple', 'cost': 330, 'image': 'https://cdn0.iconfinder.com/data/icons/expenses-vs-income/30/__food_apple_grocery_gastronomy-512.png'},
  {'title': 'pear', 'cost': 230, 'image': 'https://cdn3.iconfinder.com/data/icons/fruits-8/512/pear-512.png'}
];

function App() {
  return (
    <div className="App">
      <Header />
      <TestFunctional data={funcData}/>
      <TestOOPStyle />
      <Goods />
    </div>
  );
}

export default App;
