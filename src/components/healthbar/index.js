import React from 'react';

const HealthBar = ({health, maxHealth}) => {
    const remainingHealth = Math.max(0, health); 
    const healthPercentage = (remainingHealth / maxHealth) * 100;
    
    let displayText = `${remainingHealth} / ${maxHealth}`;
    if (remainingHealth === 0) {
        displayText = "You're dead";
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', height: '50px', width: '200px', border: "1px solid black", position: 'relative'}}>
            <div style={{backgroundColor: 'red', height: '100%', width: `${healthPercentage}%`, position: 'absolute', top: 0, left: 0 }}>
            </div>
            <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <span style={{ color: "black", fontWeight: "bold" }}>
                    {displayText} 
                </span>                    
            </div>
        </div>
    );
};

export default HealthBar;