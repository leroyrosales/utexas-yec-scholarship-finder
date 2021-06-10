import React from 'react'

export default function Pagination({ perPage, totalScholarships, paginate }) {

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalScholarships / perPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="ut-pagination">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="!#">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
