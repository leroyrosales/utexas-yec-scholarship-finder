import './App.css';
import Scholarship from './components/Scholarship'
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ scholarships }) {

  const scholarshipList = scholarships.map((scholarship) => <Scholarship scholarship={scholarship}/>)

  return (
    <div className="row">
      {scholarshipList}
    </div>
  );
}

export default App;
