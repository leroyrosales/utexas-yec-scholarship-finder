import React, { useState } from "react";

import Form from 'react-bootstrap/Form';
import './App.css';
import Scholarship from './components/Scholarship'
import YearInSchool from './components/YearInSchool'
import RequiresResidency from './components/RequiresResidency'
import RequiresEssay from './components/RequiresEssay'
import RequiresTranscript from './components/RequiresTranscript'

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

const TRANSCRIPT_MAP = {
  "All": () => true,
  "Yes": scholarship => scholarship.transcripts.includes( "yes" ),
  "No": scholarship => scholarship.transcripts.includes( "no" ),
}

// Get the 'keys' of our filter map object
// const YEAR_FILTERS = Object.keys(YEAR_IN_SCHOOL_MAP);
const RESIDENCE_FILTERS = Object.keys(RESIDENCE_MAP);
const ESSAY_FILTERS = Object.keys(ESSAY_MAP);
const TRANSCRIPT_FILTERS = Object.keys(TRANSCRIPT_MAP);


function App({ scholarships }) {

  // const [yearInSchoolFilter, setYearInSchoolFilter] = useState('All');
  const [texasReisdenceFilter, setTexasResidenceFilter] = useState('All');
  const [essayFilter, setEssayFilter] = useState('All');
  const [transcriptFilter, setTranscriptFilter] = useState('All');

  const scholarshipList = scholarships.filter( RESIDENCE_MAP[texasReisdenceFilter] ).filter( ESSAY_MAP[essayFilter] ).filter( TRANSCRIPT_MAP[transcriptFilter] ).map((scholarship, index) => <Scholarship key={index} scholarship={scholarship}/>)

  // const handleYearChange = (e) => {
  //   setYearInSchoolFilter(e.target.value)
  // }

  const handleResidenceChange = (e) => {
    setTexasResidenceFilter(e.target.value)
  }

  const handleEssayChange = (e) => {
    setEssayFilter(e.target.value)
  }

  const handleTranscriptChange = (e) => {
    setTranscriptFilter(e.target.value)
  }

  const resetAll = (e) => {
    e.preventDefault()
    setTranscriptFilter('All')
  }

  return (
    <>
      {/* <YearInSchool YEAR_FILTERS={YEAR_FILTERS} handleYearChange={handleYearChange} setYearInSchoolFilter={setYearInSchoolFilter}/> */}
      <section className="ut-scholarship--grid">
        <Form>
          <span style={{display: 'block'}}>FILTER BY</span>
          <RequiresResidency RESIDENCE_FILTERS={RESIDENCE_FILTERS} handleResidenceChange={handleResidenceChange} setTexasResidenceFilter={setTexasResidenceFilter}/>
          <RequiresEssay ESSAY_FILTERS={ESSAY_FILTERS} handleEssayChange={handleEssayChange} setEssayFilter={setEssayFilter}/>
          <RequiresTranscript TRANSCRIPT_FILTERS={TRANSCRIPT_FILTERS} handleTranscriptChange={handleTranscriptChange} setTranscriptFilter={setTranscriptFilter}/>
          <button onClick={resetAll}>Reset</button>
        </Form>
        {scholarshipList}
      </section>
    </>
  );
}

export default App;
