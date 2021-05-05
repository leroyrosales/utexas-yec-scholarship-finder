import React from 'react'

export default function YearInSchool({ handleResidenceChange, setTexasResidenceFilter, RESIDENCE_FILTERS }) {

    return (
        <>
            <select onChange={handleResidenceChange}>
                {RESIDENCE_FILTERS.map( residence =>
                    <option>
                    { residence }
                    </option>
                )}
            </select>
        </>
    )
}
