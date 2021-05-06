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
            <hr/>
            { scholarship.amount ?
                <p className="mb-3">Award amount: ${ scholarship.amount }</p> : null
            }
            <Accordion>
                <>
                    <ContextAwareToggle eventKey="0">
                        More Info
                    </ContextAwareToggle>
                    <Accordion.Collapse eventKey="0" className="mt-3">
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
