import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

export default function Scholarship({ scholarship }) {

    const cleanUpString = (string) => {
        return string.replace("_"," ")
    }

    return (
        <div className="col-6 col-md-4" data-year-in-hs="{ scholarship.year_in_school }">
            <h3>{ scholarship.title }</h3>
            <hr/>
            { scholarship.amount ?
                <p className="mb-3">Award amount: ${ scholarship.amount }</p> : null
            }
            <Accordion>
                <>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        More Info
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <>
                            <div dangerouslySetInnerHTML={{ __html: scholarship.information }}></div>
                            <ul>
                            { scholarship.deadline ?
                                <li>Deadline: { scholarship.deadline }</li> : null
                            }
                            { scholarship.application_online_or_paper ?
                                <li>Application (online or paper): { scholarship.application_online_or_paper }</li> : null
                            }
                            { scholarship.essays ?
                                <li>Essay required?: { scholarship.essays }</li> : null
                            }
                            { scholarship.letters_of_recommendation ?
                                <li>Letter of recommendation?: { scholarship.letters_of_recommendation }</li> : null
                            }
                            { scholarship.no_of_awards ?
                                <li>Number of awards offered: { scholarship.no_of_awards }</li> : null
                            }
                            { scholarship.texas_resident ?
                                <li>Requires Texas residency?: { scholarship.texas_resident }</li> : null
                            }
                            { scholarship.transcripts ?
                                <li>Requires transcript?: { scholarship.transcripts }</li> : null
                            }
                            <li>Site: <a target="_blank" href="{ scholarship.website }" rel="noindex, nofollow">{ scholarship.website }</a></li>
                            </ul>
                            {/* { scholarship.year_in_school.map((year, index) => (
                                <div key={index}>{ cleanUpString(year) }</div>
                            )) } */}
                        </>
                    </Accordion.Collapse>
                </>
            </Accordion>
        </div>
    )
}
