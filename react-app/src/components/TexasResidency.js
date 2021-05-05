import React from 'react'
import Form from 'react-bootstrap/Form';

export default function YearInSchool({ handleResidenceChange, RESIDENCE_FILTERS }) {

    return (
        <>
            <Form>
                <Form.Label>Requires residency?</Form.Label>
                <Form.Control as="select" onChange={handleResidenceChange}>
                    {RESIDENCE_FILTERS.map( residence =>
                        <option>
                        { residence }
                        </option>
                    )}
                </Form.Control>
            </Form>
        </>
    )
}
