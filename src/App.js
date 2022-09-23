import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <Discrict name='Dhaka' specialty='Tradition'></Discrict>


    </div>
  );
}
function LoadPost() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])
  return (
    <div>
      <h1> Posts :{posts.length}</h1>
      <div className='container'>
        {
          posts.map(post => <Post post={post}></Post>)
        }
      </div>
    </div>
  )
}
function Post(props) {
  const { title, body } = props.post;
  return (
    <div style={{ backgroundColor: 'lightgray', margin: '20px', padding: '10px', borderRadius: '10px', border: '2px solid salmon' }}>
      <h2>Title: {title}</h2>
      <p>Body : {body}</p>
    </div>
  )
}
const driststyle = {
  backgroundColor: 'lightblue',
  margin: '20px',
  borderRadius: '20px',
  padding: '10px'
}
function Discrict(props) {
  const [power, setPower] = useState(1);

  const boostPower = () => setPower(power * 2)
  return (
    <div style={driststyle}>
      <h2>Name : {props.name}</h2>
      <p>Specialty: {props.specialty}</p>
      <h4>Power:{power}</h4>
      <button onClick={boostPower}>Boost power</button>
    </div>
  )
}

export default App;
