import React from 'react'

export default function Scholarship({ scholarship }) {
    console.log(scholarship)
    return (
        <div className="col-6 col-md-4" data-year-in-hs="{ scholarship.year_in_school }">
            <h3>{ scholarship.title }</h3>
            <hr/>
            Award amount: { scholarship.amount }
            <div dangerouslySetInnerHTML={{ __html: scholarship.information }}></div>
            <ul>
                <li>Deadline: { scholarship.deadline }</li>
                <li>Application (online or paper): { scholarship.application_online_or_paper }</li>
                <li>Essay required?: { scholarship.essays }</li>
                <li>Letter of recommendation?: { scholarship.letters_of_recommendation }</li>
                <li>Number of awards offered: { scholarship.no_of_awards }</li>
                <li>Requires Texas residency?: { scholarship.texas_resident }</li>
                <li>Requires transcript?: { scholarship.transcripts }</li>
                <li><a target="_blank" href="{ scholarship.website }" rel="noindex, nofollow">{ scholarship.website }</a></li>
            </ul>
        </div>
    )
}
