import React from 'react'

export default function YearInSchool({ handleYearChange, setYearInSchoolFilter, YEAR_FILTERS }) {

    return (
        <>
            <select onChange={handleYearChange}>
                {YEAR_FILTERS.map( year =>
                    <option>
                    {year}
                    </option>
                )}
            </select>
        </>
    )
}
