import React from 'react'

export default function YearInSchool({ handleChange, setYearInSchoolFilter, YEAR_FILTERS }) {

    return (
        <>
            <select onChange={handleChange}>
                {YEAR_FILTERS.map( year =>
                    <option>
                    {year}
                    </option>
                )}
            </select>
        </>
    )
}
