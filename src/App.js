import logo from './logo.svg';
import './App.css';
import Card from './Componets/Card';
const shivangi={"image":"/logo192.png",
   "name":"Shivangi Kumari",
   "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
}

function App() {
  
  return (
      <div>
         <Card Data={shivangi}/>
    </div>
  );
}

export default App;
