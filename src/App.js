import React, {useState, useCallback, useEffect} from 'react';
import HealthBar from './components/healthbar';
import MadnessBar from './components/madness';
import StatusTracker from './components/status';
import './styles.css';

const App = () => {
  const [health, setHealth] = useState(40);
  const [maxHealth, setMaxHealth] = useState(40);
  const [madness, setMadness] = useState(0);
  const [maxMadness] = useState(10);

  // Don't believe useCallbacks are necessary if not being passed to a component
  const minusHealth = useCallback(() => {
    setHealth((prevHealth) => Math.max(prevHealth - 1, 0));
  }, [health, maxHealth]);

  const plusHealth = useCallback(() => {
    if (health < maxHealth) {
    setHealth((prevHealth) => Math.min(prevHealth + 1, maxHealth));
    }
  }, [health, maxHealth]);

  const plusMaxHealth = useCallback(() => {
    setMaxHealth((prevMaxHealth) => Math.max(prevMaxHealth + 1, 0));
  }, []);

  const minusMaxHealth = useCallback(() => {  
    setMaxHealth((prevMaxHealth) => Math.min(prevMaxHealth - 1, maxHealth)); 
  }, []);

  useEffect(() => { // if health is ever > max health will set health to the value of max health
    if(health > maxHealth) {
      setHealth(maxHealth);
    }
  }, [health, maxHealth]);

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
      <h1 className='centered'>At the End</h1>
      <div className='centered'>       
        <HealthBar health={health} maxHealth={maxHealth}/> 
        <div style ={{ display: 'flex', flexDirection: 'column' }}>
          <button onClick={plusHealth}>+</button>
          <button onClick={minusHealth}>-</button>
        </div>
        </div>
        <div className='centered'>
          <button onClick={minusMaxHealth}>-MAX HP</button>
          <button onClick={plusMaxHealth}>+MAX HP</button>           
      </div>
      <div className='centered' style={{ paddingTop: '10px' }}>       
        <MadnessBar madness={madness} maxMadness={maxMadness}/>
        <div style = {{ display: 'flex', flexDirection: 'column'}}>
          <button onClick={plusMadness}>+</button>
          <button onClick={minusMadness}>-</button>
        </div>
      </div>
      <div className='centered'>
        <StatusTracker/>
      </div>
    </div>
  );
};

export default App;
