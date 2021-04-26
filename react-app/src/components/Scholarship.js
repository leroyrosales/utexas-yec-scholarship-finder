import React from 'react'

export default function Scholarship({ scholarship }) {
    console.log(scholarship)
    return (
        <div>
            <ul style={{marginBottom: 12 + 'em'}}>
                <li><strong>{ scholarship.title }</strong></li>
                <li>{ scholarship.information }</li>
                <li>{ scholarship.deadline }</li>
                <li>{ scholarship.amount }</li>
                <li>{ scholarship.application_online_or_paper }</li>
                <li>{ scholarship.essays }</li>
                <li>{ scholarship.letters_of_recommendation }</li>
                <li>{ scholarship.no_of_awards }</li>
                <li>{ scholarship.texas_resident }</li>
                <li>{ scholarship.transcripts }</li>
                <li>{ scholarship.website }</li>
                <li>{ scholarship.year_in_school }</li>
            </ul>
        </div>
    )
}
