import React, { useState } from "react";

import "./App.css";
import Scholarship from "./components/Scholarship";
import ScholarshipFilters from "./components/ScholarshipFilters";
import Pagination from "./components/Pagination";

function App({ scholarships }) {
  const [residency, setResidency] = useState();
  const [essay, setEssay] = useState();
  const [transcript, setTranscript] = useState();
  const [year, setYear] = useState();
  const [stem, setStem] = useState(null);
  const [searchquery, setSearchQuery] = useState("");

  // Pagination
  const [currentpage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  const indexOfLast = currentpage * perPage;
  const indexOfFirst = indexOfLast - perPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const scholarshipList = scholarships
    .slice(indexOfFirst, indexOfLast)
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
        <div>
          {scholarshipList.length > 0 ? (
            <>
              <div className="ut-scholarship--grid-results">
                {scholarshipList}
              </div>
              <Pagination
                perPage={perPage}
                totalScholarships={scholarships.length}
                paginate={paginate}
              />
            </>
          ) : (
            <h2>Sorry, no results match that search</h2>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
