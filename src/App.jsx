import React, {useState, Fragment}  from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';


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

  const [loading, setLoading] = useState(false);

  const {data, quotation} = summary;
  
  return (
    <Container>
      <Header title={"Insurance quote"}/>
      <FormContainer>
        <Form
          setSummary={setSummary}
          setLoading={setLoading}
        />
        {loading ? <Spinner/> : null}

        {!loading ? 
          (
            <Fragment>
              <Summary
                data={data}
              />
              <Result quotation={quotation} />
            </Fragment>
          )
          
          :null
        }
      </FormContainer>
    </Container>
  );
}

export default App;
