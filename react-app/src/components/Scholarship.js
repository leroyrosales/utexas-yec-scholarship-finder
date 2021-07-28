import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Scholarship({ scholarship }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Capitalize first letter of string
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="ut-scholarship--card">
      <h3>{scholarship.title}</h3>
      {scholarship.amount ? (
        <p className="ut-scholarship--card-award-amt">
          Award amount: {scholarship.amount}
        </p>
      ) : null}
              {scholarship.deadline_string ? (
                <p className="ut-scholarship--card-award-deadline">
                  <strong>Deadline:</strong> {scholarship.deadline_string }
                </p>
              ) : null}
      <Button variant="primary" onClick={handleShow}>
        Read scholarship info
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{scholarship.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div
              dangerouslySetInnerHTML={{ __html: scholarship.information }}
            ></div>
            <ul>
              {scholarship.website[0] ? (
                <li>
                  <strong>Site:</strong>{" "}
                  <a
                    target="_blank"
                    href={scholarship.website[0]}
                    rel="noindex, nofollow, noreferrer"
                  >
                    <br />
                    {scholarship.website[0]}
                  </a>
                </li>
              ) : null}
              {scholarship.application_online_or_paper[0] ? (
                <li>
                  <strong>Application (online or paper):</strong>
                  <br />
                  {capitalize(scholarship.application_online_or_paper[0])}
                </li>
              ) : null}
              {scholarship.essays[0] ? (
                <li>
                  <strong>Essay required?:</strong>
                  <br /> {capitalize(scholarship.essays[0])}
                </li>
              ) : null}
              {scholarship.letters_of_recommendation[0] ? (
                <li>
                  <strong>Letter of recommendation?:</strong>
                  <br />
                  {capitalize(scholarship.letters_of_recommendation[0])}
                </li>
              ) : null}
              {scholarship.no_of_awards[0] ? (
                <li>
                  <strong>Number of awards offered:</strong>
                  <br />
                  {scholarship.no_of_awards[0]}
                </li>
              ) : null}
              {scholarship.texas_resident[0] ? (
                <li>
                  <strong>Requires Texas residency?:</strong>
                  <br />
                  {capitalize(scholarship.texas_resident[0])}
                </li>
              ) : null}
              {scholarship.transcripts[0] ? (
                <li>
                  <strong>Requires transcript?:</strong>
                  <br />
                  {capitalize(scholarship.transcripts[0])}
                </li>
              ) : null}
              {scholarship.additional_info[0] ? (
                <div
                  className="ut-scholarship--card-add-info"
                  dangerouslySetInnerHTML={{
                    __html: scholarship.additional_info[0],
                  }}
                ></div>
              ) : null}
            </ul>
            {/* { scholarship.year_in_school.map((year, index) => (
              <div key={index}>{ year }</div>
              ))
            } */}
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
