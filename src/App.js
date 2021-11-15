import './App.css';
import CardItem from './components/CardItem';
import Card from 'react-bootstrap/Card';

const data = {
  title: "Card title",
  text: "Some quick example text to build on the card title and make up the bulk of the card's content."
}

const data2 = {
  title: "Special title treatment",
  text: "With supporting text below as a natural lead-in to additional content."
}

function App() {
  return (
    <div className="App">
      <CardItem data={data}>
        <Card.Img variant="top" src="holder.js/100px180" />
      </CardItem>
    </div>
  );
}

export default App;
