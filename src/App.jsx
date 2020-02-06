import React, {useState}  from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';

const Container = styled.div`
  max-width:600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color:#FFF;
  padding:3rem;
`;

function App() {

  const [summary, setSummary] = useState({
    quotation: 0,
    data:{
      brand:'',
      year:'',
      plan:''
    }
  }); 

  const {data, quotation} = summary;
  
  return (
    <Container>
      <Header title={"Insurance quote"}/>
      <FormContainer>
        <Form
          setSummary={setSummary}
        />
        <Summary
          data={data}
        />
        <Result quotation={quotation} />
      </FormContainer>
    </Container>
  );
}

export default App;
