import React from "react";
import Select from "react-select";

const YEAR_IN_SCHOOL_MAP = [
  { value: "9th", label: "9th grade" },
  { value: "10th", label: "10th grade" },
  { value: "11th", label: "11th grade" },
  { value: "12th", label: "12th grade" },
];

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

export default function ScholarshipFilters({ searchquery, setSearchQuery, year, transcript, essay, residency, handleResidenceChange, handleEssayChange, handleTranscriptChange, handleYearChange, handleStemChange, resetAll }) {
  return (
    <>
      <form className="ut-scholarships--grid-form">
        <label htmlFor="searchquery">Search</label>
        <input
          type="text"
          id="searchquery"
          placeholder="Enter search term"
          value={searchquery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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
    </>
  );
}
