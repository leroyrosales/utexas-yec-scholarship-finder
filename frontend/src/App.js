import logo from './logo.svg';
import './App.css';

function App({ scholarships }) {

  const scholarshipList = scholarships.map((scholarship) => scholarship.title)

  return (
    <div className="App">
      {scholarshipList}
    </div>
  );
}

export default App;
