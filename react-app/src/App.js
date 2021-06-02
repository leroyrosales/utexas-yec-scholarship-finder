import React, { useState } from "react";

import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import './App.css';
import Scholarship from './components/Scholarship'
import YearInSchool from './components/YearInSchool'

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

const RESIDENCE_MAP = [
  // "All": () => true,
  // "Yes": scholarship => scholarship.texas_resident.includes( "yes" ),
  // "No": scholarship => scholarship.texas_resident.includes( "no" ),
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
]

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

const ESSAY_FILTERS = Object.keys(ESSAY_MAP);
const TRANSCRIPT_FILTERS = Object.keys(TRANSCRIPT_MAP);


function App({ scholarships }) {

  // const [yearInSchoolFilter, setYearInSchoolFilter] = useState('All');
  const [ residency, setResidency] = useState('');
  const [essayFilter, setEssayFilter] = useState('All');
  const [transcriptFilter, setTranscriptFilter] = useState('All');

  console.log(scholarships)

  const scholarshipList = scholarships.filter( scholarship => !residency ? scholarship : scholarship.texas_resident === residency.value ).filter( ESSAY_MAP[essayFilter] ).filter( TRANSCRIPT_MAP[transcriptFilter] ).map((scholarship, index) => <Scholarship key={index} scholarship={scholarship}/>)

  // const handleYearChange = (e) => {
  //   setYearInSchoolFilter(e.target.value)
  // }

  const handleResidenceChange = (value) => {
    console.log(value)
    // setTexasResidenceFilter(e.target.value)
    if(value != null) {
      setResidency(value)
    } else {
      setResidency(null)
    }
  }

  const handleEssayChange = (e) => {
    setEssayFilter(e.target.value)
  }

  const handleTranscriptChange = (e) => {
    setTranscriptFilter(e.target.value)
  }

  const resetAll = () => {
    setResidency(null)
    // setSearchQuery("")
  }

  return (
    <>
      {/* <YearInSchool YEAR_FILTERS={YEAR_FILTERS} handleYearChange={handleYearChange} setYearInSchoolFilter={setYearInSchoolFilter}/> */}
      <section className="ut-scholarship--grid">
        <Form>
          <span style={{display: 'block'}}>FILTER BY</span>
          {/* <RequiresResidency RESIDENCE_FILTERS={RESIDENCE_FILTERS} handleResidenceChange={handleResidenceChange} setTexasResidenceFilter={setTexasResidenceFilter}/> */}
          <Select
            options={RESIDENCE_MAP}
            isClearable={true}
            placeholder="Select residency status"
            onChange={value => handleResidenceChange(value)}
            value={residency}
            name="residency"
          />
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
