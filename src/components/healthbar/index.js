import React from 'react';

const HealthBar = ({health}) => {
    const maxHealth = 40;
    const remainingHealth = Math.max(0, health); // Ensure the remaining health is not negative
    const healthPercentage = Math.max(remainingHealth / maxHealth) * 100;

    return (
        <div style={{backgroundColor: '#eee', height: '25px', width: '200px', border: "1px solid black", position: 'relative'}}>
            <div style={{backgroundColor: 'red', height: '100%', width: `${healthPercentage}%`}}>
                <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                >
                    <span style={{ color: "black", fontWeight: "bold" }}>
                        {remainingHealth} / {maxHealth} 
                        </span>                    
                </div>
            </div>
        </div>
    );
};

export default HealthBar;