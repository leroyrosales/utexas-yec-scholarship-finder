import React from 'react'
import Form from 'react-bootstrap/Form';

export default function RequiresResidency({ handleResidenceChange, RESIDENCE_FILTERS }) {

    return (
        <>
            <Form.Label>Requires residency?</Form.Label>
            <Form.Control as="select" onChange={handleResidenceChange} className="mb-3">
                {RESIDENCE_FILTERS.map( residence =>
                    <option>
                    { residence }
                    </option>
                )}
            </Form.Control>
        </>
    )
}
