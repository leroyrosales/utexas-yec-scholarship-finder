import React, { useState } from "react";

import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import './App.css';
import Scholarship from './components/Scholarship'

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
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
]

const ESSAY_MAP = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
]

const TRANSCRIPT_MAP = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
]


function App({ scholarships }) {

  // const [yearInSchoolFilter, setYearInSchoolFilter] = useState('All');
  const [ residency, setResidency] = useState();
  const [ essay, setEssay ] = useState();
  const [ transcript, setTranscript ] = useState();

  const scholarshipList = scholarships.filter( scholarship => !residency ? scholarship : scholarship.texas_resident === residency.value ).filter( scholarship => !essay ? scholarship : scholarship.essays === essay.value ).filter( scholarship => !transcript ? scholarship : scholarship.transcripts === transcript.value ).map((scholarship, index) => <Scholarship key={index} scholarship={scholarship}/>)

  // const handleYearChange = (e) => {
  //   setYearInSchoolFilter(e.target.value)
  // }

  const handleResidenceChange = (value) => {
    if(value != null) {
      setResidency(value)
    } else {
      setResidency(null)
    }
  }

  const handleEssayChange = (value) => {
    if(value != null) {
      setEssay(value)
    } else {
      setEssay(null)
    }
  }

  const handleTranscriptChange = (value) => {
    if(value != null) {
      setTranscript(value)
    } else {
      setTranscript(null)
    }
  }

  const resetAll = (e) => {
    e.preventDefault()
    setResidency(null)
    setEssay(null)
    setTranscript(null)
    // setSearchQuery("")
  }

  return (
    <>
      {/* <YearInSchool YEAR_FILTERS={YEAR_FILTERS} handleYearChange={handleYearChange} setYearInSchoolFilter={setYearInSchoolFilter}/> */}
      <section className="ut-scholarship--grid">
        <Form>
          <span style={{display: 'block'}}>FILTER BY</span>
          <label htmlFor="residency">Residency status</label>
          <Select
            options={RESIDENCE_MAP}
            isClearable={true}
            placeholder="Select residency status"
            onChange={value => handleResidenceChange(value)}
            value={residency}
            name="residency"
          />
          <label htmlFor="essay">essay status</label>
          <Select
            options={ESSAY_MAP}
            isClearable={true}
            placeholder="Is an essay required?"
            onChange={value => handleEssayChange(value)}
            value={essay}
            name="essay"
          />
          <label htmlFor="transcript">transcript status</label>
          <Select
            options={TRANSCRIPT_MAP}
            isClearable={true}
            placeholder="Transcript required?"
            onChange={value => handleTranscriptChange(value)}
            value={transcript}
            name="transcript"
          />
          <button onClick={resetAll}>Reset</button>
        </Form>
        {scholarshipList}
      </section>
    </>
  );
}

export default App;
