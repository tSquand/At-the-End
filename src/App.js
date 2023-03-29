import React, {useState, useCallback} from 'react';
import HealthBar from './components/healthbar';
import MadnessBar from './components/madness';
import StatusTracker from './components/status';

const App = () => {
  const [health, setHealth] = useState(40);
  const [maxHealth, setMaxHealth] = useState(40);
  const [madness, setMadness] = useState(0);
  const [maxMadness] = useState(10);

  const minusHealth = useCallback(() => {
    setHealth((prevHealth) => Math.max(prevHealth - 1, 0));
  }, []);

  const plusHealth = useCallback(() => {
    if (health < maxHealth) {
    setHealth((prevHealth) => Math.min(prevHealth + 1, maxHealth));
    }
  }, [health, maxHealth]);

  const plusMaxHealth = useCallback(() => {
    setMaxHealth((prevMaxHealth) => Math.max(prevMaxHealth + 1, 0));
  }, []);

  const minusMadness = useCallback(() => {
    setMadness((prevMadness) => Math.max(prevMadness -1, 0));
  }, []);

  const plusMadness = useCallback(() => {
    if (madness < maxMadness) {
      setMadness((prevMadness) => Math.min(prevMadness + 1, maxMadness));
    }
  }, [madness, maxMadness]);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', width: '300px', margin: '0 auto' }}>
        <HealthBar health={health} maxHealth={maxHealth}/>
        <button onClick={minusHealth}>-</button> 
        <button onClick={plusHealth}>+</button> 
        <button onClick={plusMaxHealth}>+MAX</button> 
      </div>
      <div style={{ display: 'flex', alignItems: 'center', width: '300px', margin: '0 auto' }}>
        <MadnessBar madness={madness} maxMadness={maxMadness}/>
        <button onClick={minusMadness}>-</button>
        <button onClick={plusMadness}>+</button>
      </div>
      <div>
        <StatusTracker/>
      </div>
    </div>
  );
};

export default App;
