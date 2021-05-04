import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Scholarship from './components/Scholarship'
import YearInSchool from './components/YearInSchool'
import TexasResidency from './components/TexasResidency'

import axios from 'axios';

const YEAR_IN_SCHOOL_MAP = {
  "All": () => true,
  "Incoming Freshman": scholarship => scholarship.year_in_school.includes( "incoming_freshman" ),
  "Incoming Transfer": scholarship => scholarship.year_in_school.includes( "incoming_transfer" ),
  "Entering Transfer": scholarship => scholarship.year_in_school.includes( "entering_transfer" ),
  "Externally Selected": scholarship => scholarship.year_in_school.includes( "externally_selected" ),
  "Continuing Students": scholarship => scholarship.year_in_school.includes( "continuing_students" ),
  "Graduate Students": scholarship => scholarship.year_in_school.includes( "graduate_students" )
}

const RESIDENCE_MAP = {
  "All": () => true,
  "Yes": scholarship => scholarship.texas_resident.includes( "yes" ),
  "No": scholarship => scholarship.texas_resident.includes( "no" ),
}

// Get the 'keys' of our filter map object
const YEAR_FILTERS = Object.keys(YEAR_IN_SCHOOL_MAP);
const RESIDENCE_FILTERS = Object.keys(RESIDENCE_MAP);

const DATA_URL = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DATA_URL : '';

function App({ scholarships }) {

  const [yearInSchoolFilter, setYearInSchoolFilter] = useState('All');
  const [texasReisdenceFilter, setTexasResidenceFilter] = useState('All');

  const scholarshipList = scholarships.filter( YEAR_IN_SCHOOL_MAP[yearInSchoolFilter] ).filter( RESIDENCE_MAP[texasReisdenceFilter] ).map((scholarship, index) => <Scholarship key={index} scholarship={scholarship}/>)

  const handleYearChange = (e) => {
    setYearInSchoolFilter(e.target.value)
  }

  const handleResidenceChange = (e) => {
    setTexasResidenceFilter(e.target.value)
  }

  useEffect(()=>{
    axios.get(`${DATA_URL}/data/data.json`)
      .then( res => console.log(res.data))
  },[])

  return (
    <>
      <YearInSchool YEAR_FILTERS={YEAR_FILTERS} handleYearChange={handleYearChange} setYearInSchoolFilter={setYearInSchoolFilter}/>
      <TexasResidency RESIDENCE_FILTERS={RESIDENCE_FILTERS} handleResidenceChange={handleResidenceChange} setTexasResidenceFilter={setTexasResidenceFilter}/>
      <div className="row">
        {scholarshipList}
      </div>
    </>
  );
}

export default App;
