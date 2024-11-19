
import './App.css';

const foods = ['hamburger', 'pizza', 'ramen', 'sushi', 'hotdog', 'ice cream'];

function App() {
  return (
    <div className="App">
      <h1>Our Menu!</h1>
      <ul>
        {
          foods.map((food) => {
            return <li>{food}</li>
          })
        }
      </ul>
    </div>
  )
}


export default App;