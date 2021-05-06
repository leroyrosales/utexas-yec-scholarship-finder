import React from 'react'
import Form from 'react-bootstrap/Form';

export default function RequiresEssay({ handleEssayChange, ESSAY_FILTERS }) {

    return (
        <>
            <Form.Label>Requires essay?</Form.Label>
            <Form.Control as="select" onChange={handleEssayChange}>
                {ESSAY_FILTERS.map( essay =>
                    <option>
                    { essay }
                    </option>
                )}
            </Form.Control>
        </>
    )
}
