import styled from 'styled-components';

interface SliderProps {
  $isOn: boolean;
}

export const Switch = styled.div<SliderProps>`
  width: 40px;
  height: 20px;
  background-color: ${(props) => (props.$isOn ? '#fff' : '#ccc')};
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$isOn ? 'flex-end' : 'flex-start')};
  padding: 5px;
  box-sizing: border-box;
  transition: background-color 0.2s;
  > div {
    background-color: ${(props) => (props.$isOn ? '#000' : '#fff')};
  }
`;

export const Slider = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transition: transform 0.2s ease-in-out;
`;
