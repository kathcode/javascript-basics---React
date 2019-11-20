import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const CardItem = styled(Card)`
  padding: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  background-color:  ${props => props.active ? '#ebebeb' : '#ffffff'};

  &:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
`;