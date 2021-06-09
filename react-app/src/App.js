import React, { useState } from "react";

import "./App.css";
import Scholarship from "./components/Scholarship";
import ScholarshipFilters from "./components/ScholarshipFilters";

function App({ scholarships }) {
  const [residency, setResidency] = useState();
  const [essay, setEssay] = useState();
  const [transcript, setTranscript] = useState();
  const [year, setYear] = useState();
  const [stem, setStem] = useState(null);
  const [searchquery, setSearchQuery] = useState("");

  const scholarshipList = scholarships
    .filter((scholarship) => (!stem ? scholarship : scholarship.stem === stem))
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
      !year ? scholarship : scholarship.year_in_school.includes(year.value)
    )
    .filter(
      (scholarship) =>
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
    if (e.target.checked === true) {
      setStem(true);
    } else {
      setStem(null);
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
    setSearchQuery("");
  };

  return (
    <>
      <section className="ut-scholarship--grid">
        <ScholarshipFilters
          searchquery={searchquery}
          setSearchQuery={setSearchQuery}
          stem={stem}
          year={year}
          transcript={transcript}
          essay={essay}
          residency={residency}
          handleResidenceChange={handleResidenceChange}
          handleEssayChange={handleEssayChange}
          handleTranscriptChange={handleTranscriptChange}
          handleYearChange={handleYearChange}
          handleStemChange={handleStemChange}
          resetAll={resetAll}
        />
        {scholarshipList}
      </section>
    </>
  );
}

export default App;
