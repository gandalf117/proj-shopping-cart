import React, { useState } from 'react';
import { Switch, Slider } from './styles';

interface ToggleSwitchProps {
  onChange: (isOn: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onChange }) => {
  const [isOn, setIsOn] = useState(false);
const testtt = { isOn };
  const toggleSwitch = () => {
    const newState = !isOn;
    setIsOn(newState);
    onChange(newState);
  };

  return (
    <Switch $isOn={isOn} onClick={toggleSwitch}>
      <Slider />
    </Switch>
  );
};

export default ToggleSwitch;
