import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {firstCapitalLetter} from '../helper';

const SummaryContainer = styled.div`
    padding:1rem;
    text-align:center;
    background-color: #00838F;
    margin-top: 1rem;
    color:white;
`;

export default function Summary({data}) {
    const {brand, year, plan} = data;

    if(brand === '' || year === '' || plan === '') return null;

    return (
        <SummaryContainer>
            <h2>Summary of quotation</h2>
            <ul>
                <li>Brand: {firstCapitalLetter(brand)}</li>
                <li>Year of car: {year}</li>
                <li>Plan: {firstCapitalLetter(plan)}</li>
            </ul>
        </SummaryContainer>
    )
}

Summary.propTypes = {
    data: PropTypes.object.isRequired,
}


