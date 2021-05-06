import React, { useContext } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';


function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
      <Accordion.Toggle
        as={Card.Header}
        className={('defaultStyle', {'openedStyle': isCurrentEventKey})}
        onClick={decoratedOnClick}
      >
        {children}
      </Accordion.Toggle>
    );
}

export default function Scholarship({ scholarship  }) {

    const cleanUpString = (string) => {
        return string.replace("_"," ")
    }

    return (
        <div className="col-6 col-md-4" data-year-in-hs="{ scholarship.year_in_school }">
            <h3>{ scholarship.title }</h3>
            { scholarship.amount ?
                <p className="mb-3">Award amount: ${ scholarship.amount }</p> : null
            }
            <Accordion>
                <>
                    <ContextAwareToggle eventKey="0">
                        More Info
                    </ContextAwareToggle>
                    <Accordion.Collapse eventKey="0" className="p-3">
                        <>
                            <div dangerouslySetInnerHTML={{ __html: scholarship.information }}></div>
                            <ul>
                            { scholarship.deadline ?
                                <li><strong>Deadline:</strong> { scholarship.deadline }</li> : null
                            }
                            { scholarship.application_online_or_paper ?
                                <li><strong>Application (online or paper):</strong> { scholarship.application_online_or_paper }</li> : null
                            }
                            { scholarship.essays ?
                                <li><strong>Essay required?:</strong> { scholarship.essays }</li> : null
                            }
                            { scholarship.letters_of_recommendation ?
                                <li><strong>Letter of recommendation?:</strong> { scholarship.letters_of_recommendation }</li> : null
                            }
                            { scholarship.no_of_awards ?
                                <li><strong>Number of awards offered:</strong> { scholarship.no_of_awards }</li> : null
                            }
                            { scholarship.texas_resident ?
                                <li><strong>Requires Texas residency?:</strong> { scholarship.texas_resident }</li> : null
                            }
                            { scholarship.transcripts ?
                                <li><strong>Requires transcript?:</strong> { scholarship.transcripts }</li> : null
                            }
                            { scholarship.website ?
                                <li><strong>Site:</strong> <a target="_blank" href="{ scholarship.website }" rel="noindex, nofollow">{ scholarship.website }</a></li> : null
                            }
                            { scholarship.additional_info ?
                                <div className="mt-3" dangerouslySetInnerHTML={{ __html: scholarship.additional_info }}></div> : null
                            }

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
