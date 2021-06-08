import React, { useState } from "react";

import Select from "react-select";
import "./App.css";
import Scholarship from "./components/Scholarship";

const YEAR_IN_SCHOOL_MAP = [
  { value: "9th", label: "9th grade" },
  { value: "10th", label: "10th grade" },
  { value: "11th", label: "11th grade" },
  { value: "12th", label: "12th grade" },
]

const RESIDENCE_MAP = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const ESSAY_MAP = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const TRANSCRIPT_MAP = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

function App({ scholarships }) {

  const [residency, setResidency] = useState();
  const [essay, setEssay] = useState();
  const [transcript, setTranscript] = useState();
  const [year, setYear] = useState();
  const [stem, setStem] = useState(null);
  const [searchquery, setSearchQuery] = useState("");

  const scholarshipList = scholarships
    .filter( (scholarship) =>
      !stem ?  scholarship : scholarship.stem === stem
    )
    .filter((scholarship) =>
      !residency ? scholarship : scholarship.texas_resident === residency.value
    )
    .filter((scholarship) =>
      !essay ? scholarship : scholarship.essays === essay.value
    )
    .filter((scholarship) =>
      !transcript ? scholarship : scholarship.transcripts === transcript.value
    )
    .filter((scholarship) =>
      !year ? scholarship : scholarship.year_in_school.includes( year.value )
    )
    .filter( (scholarship) =>
      scholarship.keywords.toLowerCase().indexOf(searchquery) > -1
    )
    .map((scholarship, index) => (
      <Scholarship key={index} scholarship={scholarship} />
    ));

  const handleResidenceChange = (value) => {
    if (value != null) {
      setResidency(value);
    } else {
      setResidency(null);
    }
  };

  const handleEssayChange = (value) => {
    if (value != null) {
      setEssay(value);
    } else {
      setEssay(null);
    }
  };

  const handleTranscriptChange = (value) => {
    if (value != null) {
      setTranscript(value);
    } else {
      setTranscript(null);
    }
  };

  const handleYearChange = (value) => {
    if (value != null) {
      setYear(value);
    } else {
      setYear(null);
    }
  };

  const handleStemChange = (e) => {
    if(e.target.checked === true){
      setStem(true)
    } else {
      setStem(null)
    }
  };

  const resetAll = (e) => {
    e.preventDefault();
    setResidency(null);
    setEssay(null);
    setTranscript(null);
    setYear(null);
    setStem(null);
    document.getElementById("stem").checked = false;
    setSearchQuery("")
  };

  return (
    <>
      <section className="ut-scholarship--grid">
        <form className="ut-scholarships--grid-form">
        <label htmlFor="searchquery">Search</label>
        <input type="text" id="searchquery" placeholder="Enter search term" value={searchquery} onChange={(e) => setSearchQuery(e.target.value)}/>
          <label htmlFor="residency">Residency</label>
          <Select
            options={RESIDENCE_MAP}
            isClearable={true}
            placeholder="Select residency status"
            onChange={(value) => handleResidenceChange(value)}
            value={residency}
            name="residency"
          />
          <label htmlFor="essay">Essay</label>
          <Select
            options={ESSAY_MAP}
            isClearable={true}
            placeholder="Is an essay required?"
            onChange={(value) => handleEssayChange(value)}
            value={essay}
            name="essay"
          />
          <label htmlFor="transcript">Transript</label>
          <Select
            options={TRANSCRIPT_MAP}
            isClearable={true}
            placeholder="Transcript required?"
            onChange={(value) => handleTranscriptChange(value)}
            value={transcript}
            name="transcript"
          />
          <label htmlFor="year">Year in School</label>
          <Select
            options={YEAR_IN_SCHOOL_MAP}
            isClearable={true}
            placeholder="Select year in school"
            onChange={(value) => handleYearChange(value)}
            value={year}
            name="year"
          />
          <label htmlFor="stem">Stem scholarship</label>
          <input
            type="checkbox"
            id="stem"
            value="stem"
            onClick={handleStemChange}
          />
          <button onClick={resetAll}>Reset</button>
        </form>
        {scholarshipList}
      </section>
    </>
  );
}

export default App;
