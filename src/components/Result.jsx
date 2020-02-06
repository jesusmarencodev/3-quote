import React from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';


const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding:1rem;
    text-align:center;
`;
const ResultCotization = styled.div`
    text-align:center;
    padding:.5rem;
    border:1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;

`;

const TextQuotation = styled.p`
    color:#00838f;
    padding:1rem;
    text-transform: uppercase;
    font-weight:bold;
    margin:0;
`;

export default function Result({quotation}) {
    return (
        (quotation === 0) 
            ? <Message>Select brand, year and Type of insurance </Message> 
            : (
                <ResultCotization>
                    <TextQuotation>The total is: $ {quotation}</TextQuotation>
                </ResultCotization>
            )
    )
}

Result.propTypes = {
    quotation : PropTypes.number.isRequired,
}

