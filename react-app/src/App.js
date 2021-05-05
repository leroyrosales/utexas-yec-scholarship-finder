import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import './App.css';
import Scholarship from './components/Scholarship'
import YearInSchool from './components/YearInSchool'
import TexasResidency from './components/TexasResidency'
import EssayRequirements from './components/EssayRequirements'

// const YEAR_IN_SCHOOL_MAP = {
//   "All": () => true,
//   "Incoming Freshman": scholarship => scholarship.year_in_school.includes( "incoming_freshman" ),
//   "Incoming Transfer": scholarship => scholarship.year_in_school.includes( "incoming_transfer" ),
//   "Entering Transfer": scholarship => scholarship.year_in_school.includes( "entering_transfer" ),
//   "Externally Selected": scholarship => scholarship.year_in_school.includes( "externally_selected" ),
//   "Continuing Students": scholarship => scholarship.year_in_school.includes( "continuing_students" ),
//   "Graduate Students": scholarship => scholarship.year_in_school.includes( "graduate_students" )
// }

const RESIDENCE_MAP = {
  "All": () => true,
  "Yes": scholarship => scholarship.texas_resident.includes( "yes" ),
  "No": scholarship => scholarship.texas_resident.includes( "no" ),
}

const ESSAY_MAP = {
  "All": () => true,
  "Yes": scholarship => scholarship.essays.includes( "yes" ),
  "No": scholarship => scholarship.essays.includes( "no" ),
}

// Get the 'keys' of our filter map object
// const YEAR_FILTERS = Object.keys(YEAR_IN_SCHOOL_MAP);
const RESIDENCE_FILTERS = Object.keys(RESIDENCE_MAP);
const ESSAY_FILTERS = Object.keys(ESSAY_MAP);

function App({ scholarships }) {

  // const [yearInSchoolFilter, setYearInSchoolFilter] = useState('All');
  const [texasReisdenceFilter, setTexasResidenceFilter] = useState('All');
  const [essayFilter, setEssayFilter] = useState('All');

  const scholarshipList = scholarships.filter( RESIDENCE_MAP[texasReisdenceFilter] ).filter( ESSAY_MAP[essayFilter] ).map((scholarship, index) => <Scholarship key={index} scholarship={scholarship}/>)

  // const handleYearChange = (e) => {
  //   setYearInSchoolFilter(e.target.value)
  // }

  const handleResidenceChange = (e) => {
    setTexasResidenceFilter(e.target.value)
  }

  const handleEssayChange = (e) => {
    setEssayFilter(e.target.value)
  }

  return (
    <div className="row">
      {/* <YearInSchool YEAR_FILTERS={YEAR_FILTERS} handleYearChange={handleYearChange} setYearInSchoolFilter={setYearInSchoolFilter}/> */}
      <div className="col-12 col-md-3">
        <Form>
          <TexasResidency RESIDENCE_FILTERS={RESIDENCE_FILTERS} handleResidenceChange={handleResidenceChange} setTexasResidenceFilter={setTexasResidenceFilter}/>
          <EssayRequirements ESSAY_FILTERS={ESSAY_FILTERS} handleEssayChange={handleEssayChange} setEssayFilter={setEssayFilter}/>
        </Form>
      </div>
      <div className="col-12 col-md">
        <div className="row">
          {scholarshipList}
        </div>
      </div>
    </div>
  );
}

export default App;
