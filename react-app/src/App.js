import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Scholarship from './components/Scholarship'
import YearInSchool from './components/YearInSchool'

const YEAR_IN_SCHOOL_MAP = {
  "All": () => true,
  "Incoming Freshman": scholarship => scholarship.year_in_school.includes( "incoming_freshman" ),
  "Incoming Transfer": scholarship => scholarship.year_in_school.includes( "incoming_transfer" ),
  "Entering Transfer": scholarship => scholarship.year_in_school.includes( "entering_transfer" ),
  "Externally Selected": scholarship => scholarship.year_in_school.includes( "externally_selected" ),
  "Continuing Students": scholarship => scholarship.year_in_school.includes( "continuing_students" ),
  "Graduate Students": scholarship => scholarship.year_in_school.includes( "graduate_students" )
}

// Get the 'keys' of our filter map object
const YEAR_FILTERS = Object.keys(YEAR_IN_SCHOOL_MAP);

function App({ scholarships }) {

  const [yearInSchoolFilter, setYearInSchoolFilter] = useState('All');

  const scholarshipList = scholarships.filter( YEAR_IN_SCHOOL_MAP[yearInSchoolFilter] ).map((scholarship, index) => <Scholarship key={index} scholarship={scholarship}/>)

  const handleChange = (e) => {
    setYearInSchoolFilter(e.target.value)
  }

  return (
    <>
      <YearInSchool YEAR_FILTERS={YEAR_FILTERS} handleChange={handleChange} setYearInSchoolFilter={setYearInSchoolFilter}/>
      <div className="row">
        {scholarshipList}
      </div>
    </>
  );
}

export default App;
