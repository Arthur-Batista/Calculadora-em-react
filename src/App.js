import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('')

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber("0")
    setOperation('')
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev =>`${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setFirstNumber('0');
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setFirstNumber('0');
      setCurrentNumber(String(minus));
      setOperation('');
    }
  }
  const handleMultiplyNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*')
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setFirstNumber('0');
      setCurrentNumber(String(mult))
      setOperation('')
    }
  }
  const handleDivideNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    } else {
      const divide = Number(firstNumber) / Number(currentNumber);
      setFirstNumber('0');
      setCurrentNumber(String(divide))
      setOperation('')
    }
  }

  const handleEquals = () =>{
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        default:
          break;
      }
    } 
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
            <Button label = "X" onClick={handleMultiplyNumbers}></Button>
            <Button label = "/" onClick={handleDivideNumbers}></Button>
            <Button label = "C" onClick={handleOnClear}></Button>
        </Row>
        <Row>
            <Button label = "7" onClick={() => handleAddNumber('7')}></Button>
            <Button label = "8" onClick={() => handleAddNumber('8')}></Button>
            <Button label = "9" onClick={() => handleAddNumber('9')}></Button>
            <Button label = "-" onClick={handleMinusNumbers}></Button>
        </Row>
        <Row>
            <Button label = "4" onClick={() => handleAddNumber('4')}></Button>
            <Button label = "5" onClick={() => handleAddNumber('5')}></Button>
            <Button label = "6" onClick={() => handleAddNumber('6')}></Button>
            <Button label = "+" onClick={handleSumNumbers}></Button>
        </Row>
        <Row>
            <Button label = "1" onClick={() => handleAddNumber('1')}></Button>
            <Button label = "2" onClick={() => handleAddNumber('2')}></Button>
            <Button label = "3" onClick={() => handleAddNumber('3')}></Button>
            <Button label = "="  onClick={handleEquals}></Button>
            
        </Row>
        <Row>
          <Button label = "0" onClick={() => handleAddNumber('0')}></Button>
        </Row>
      </Content>
    </Container>
  );
}

export default App;