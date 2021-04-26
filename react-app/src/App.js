import './App.css';
import Scholarship from './components/Scholarship'

function App({ scholarships }) {

  const scholarshipList = scholarships.map((scholarship) => <Scholarship scholarship={scholarship}/>)

  return (
    <div className="App">
      {scholarshipList}
    </div>
  );
}

export default App;
