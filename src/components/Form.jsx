import React, {useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { getDiferenceYears, calculateBrand, calculatePlan } from '../helper';

const Field = styled.div`
    display:flex;
    margin-bottom:1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display:block;
    width:100%;
    padding:1rem;
    border:1px solid #e1e1e1;
    -webkit-appearance:none;
`;
const InputRadio = styled.input`
    margin:0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size:16px;
    width:100%;
    padding:1rem;
    color:#fff;
    text-transform: bold;
    font-weight:bold;
    border:none;
    transition: background-color .3s ease;
    margin-top:2rem;
    &:hover{
        background-color: #26C6DA;
        cursor: pointer;
    }
`;
const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width:100%;
    text-align:center;
    margin-bottom:2rem;
`;
const Form = ({setSummary, setLoading}) => {
    const [data, setData] = useState({
        brand:'',
        year:'',
        plan:''
    });
    const [error, setError] = useState(false);

    const { brand, year, plan } = data;

    //Reading data of form
    const getData = e => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
    //Submit
    const quoteInsurance = e =>{
        e.preventDefault();
        if(brand.trim() === '' || year.trim() === '' || plan.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        //insurance of base
        let result = 2000;//dollars

        //get the diference in years
        const diferenceYears = getDiferenceYears(year);
        
        //for each year subtract 3% of the value
        result -= ((diferenceYears * 3 ) * result)/100;
        
        //current value increase
        
        //American 15%
        //Asian 5%
        //European 30%
        result = calculateBrand(brand) * result ;
        
        //basic plan increase 20%
        //Full plan increase 50%
        result = parseFloat(calculatePlan(plan) * result).toFixed(2);
        //Total

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSummary({
                quotation : result,
                data
            })
        },3000)


    }

    return (
        <form onSubmit={quoteInsurance}>
            {error ? <Error>All fields are required</Error> : null}
            <Field>
                <Label htmlFor="brand">Brand</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={getData}
                >
                    <option value="">Select</option>
                    <option value="American">American</option>
                    <option value="European">European</option>
                    <option value="Asian">Asian</option>
                </Select>
            </Field>
            <Field>
                <Label htmlFor="year">Year</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getData}
                >
                    <option value="">Select</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label htmlFor="plan">Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basic"
                    checked={plan === "basic"}
                    onChange={getData}
                />Basic
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="full"
                    checked={plan === "full"}
                    onChange={getData}
                />Full
            </Field>
            <Button type="submit">Quote</Button>
        </form>
    );
};

Form.propTypes = {
    setSummary : PropTypes.func.isRequired,
    setLoading : PropTypes.func.isRequired
}

export default Form;