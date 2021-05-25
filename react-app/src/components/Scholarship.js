import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Scholarship({ scholarship }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                  <strong>Deadline:</strong> {scholarship.deadline}
                </li>
              ) : null}
              {scholarship.website ? (
                <li>
                  <strong>Site:</strong>{" "}
                  <a
                    target="_blank"
                    href="{ scholarship.website }"
                    rel="noindex, nofollow"
                  >
                    {scholarship.website}
                  </a>
                </li>
              ) : null}
              {scholarship.application_online_or_paper ? (
                <li>
                  <strong>Application (online or paper):</strong>{" "}
                  {scholarship.application_online_or_paper}
                </li>
              ) : null}
              {scholarship.essays ? (
                <li>
                  <strong>Essay required?:</strong> {scholarship.essays}
                </li>
              ) : null}
              {scholarship.letters_of_recommendation ? (
                <li>
                  <strong>Letter of recommendation?:</strong>{" "}
                  {scholarship.letters_of_recommendation}
                </li>
              ) : null}
              {scholarship.no_of_awards ? (
                <li>
                  <strong>Number of awards offered:</strong>{" "}
                  {scholarship.no_of_awards}
                </li>
              ) : null}
              {scholarship.texas_resident ? (
                <li>
                  <strong>Requires Texas residency?:</strong>{" "}
                  {scholarship.texas_resident}
                </li>
              ) : null}
              {scholarship.transcripts ? (
                <li>
                  <strong>Requires transcript?:</strong>{" "}
                  {scholarship.transcripts}
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
