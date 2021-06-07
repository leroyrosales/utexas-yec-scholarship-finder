import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Scholarship({ scholarship }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Capitalize first letter of string
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return (
    <div className="ut-scholarship--card">
      <h3>{scholarship.title}</h3>
      {scholarship.amount ? (
        <p className="ut-scholarship--card-award-amt">Award amount: ${scholarship.amount}</p>
      ) : null}
      <Button variant="primary" onClick={handleShow}>
        See scholarship info
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
              {scholarship.deadline ? (
                <li>
                  <strong>Deadline:</strong><br/> {scholarship.deadline}
                </li>
              ) : null}
              {scholarship.website ? (
                <li>
                  <strong>Site:</strong>{" "}
                  <a
                    target="_blank"
                    href={ scholarship.website }
                    rel="noindex, nofollow"
                  ><br/>
                    {scholarship.website}
                  </a>
                </li>
              ) : null}
              {scholarship.application_online_or_paper ? (
                <li>
                  <strong>Application (online or paper):</strong><br/>
                  {capitalize(scholarship.application_online_or_paper)}
                </li>
              ) : null}
              {scholarship.essays ? (
                <li>
                  <strong>Essay required?:</strong><br/> {capitalize(scholarship.essays)}
                </li>
              ) : null}
              {scholarship.letters_of_recommendation ? (
                <li>
                  <strong>Letter of recommendation?:</strong><br/>
                  {capitalize(scholarship.letters_of_recommendation)}
                </li>
              ) : null}
              {scholarship.no_of_awards ? (
                <li>
                  <strong>Number of awards offered:</strong><br/>
                  {scholarship.no_of_awards}
                </li>
              ) : null}
              {scholarship.texas_resident ? (
                <li>
                  <strong>Requires Texas residency?:</strong><br/>
                  {capitalize(scholarship.texas_resident)}
                </li>
              ) : null}
              {scholarship.transcripts ? (
                <li>
                  <strong>Requires transcript?:</strong><br/>
                  {capitalize(scholarship.transcripts)}
                </li>
              ) : null}
              {scholarship.additional_info ? (
                <div
                  className="ut-scholarship--card-add-info"
                  dangerouslySetInnerHTML={{
                    __html: scholarship.additional_info,
                  }}
                ></div>
              ) : null}
            </ul>
            {/* { scholarship.year_in_school.map((year, index) => (
                                <div key={index}>{ cleanUpString(year) }</div>
                            )) } */}
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
