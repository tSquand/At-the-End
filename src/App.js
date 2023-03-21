import React, {useState, useCallback} from 'react';
import HealthBar from './components/healthbar';

const App = () => {
  const [health, setHealth] = useState(40);

  const handleClick = useCallback(() => {
    setHealth((prevHealth) => Math.max(prevHealth - 5, 0));
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '300px', margin: '0 auto' }}>
      <HealthBar health={health} />
      <button onClick={handleClick}>Take Damage</button>     
    </div>
  );
};

export default App;
