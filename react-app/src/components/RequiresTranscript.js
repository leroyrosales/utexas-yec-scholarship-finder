import React from 'react'
import Form from 'react-bootstrap/Form';

export default function RequiresTranscript({ handleTranscriptChange, TRANSCRIPT_FILTERS }) {

    return (
        <>
            <Form.Label>Requires a transcript?</Form.Label>
            <Form.Control as="select" onChange={handleTranscriptChange} className="mb-3">
                {TRANSCRIPT_FILTERS.map( transcript =>
                    <option>
                    { transcript }
                    </option>
                )}
            </Form.Control>
        </>
    )
}
