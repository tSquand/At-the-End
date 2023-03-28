import React from 'react';

const MadnessBar = ({madness, maxMadness}) => {
    const remainingMadness = Math.max(0, madness);
    const madnessPercentage = (remainingMadness / maxMadness) * 100;

    return (<div>
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'black', height: '25px', width: '200px', border: "1px solid black", position: 'relative'}}>
            <div style={{backgroundColor: 'purple', height: '100%', width: `${madnessPercentage}%`, position: 'absolute', top: 0, left: 0 }}>
            </div>
            <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <span style={{ color: "white", fontWeight: "bold" }}>
                    {remainingMadness} / {maxMadness} 
                </span>                    
            </div>
        </div>

    </div>
    );
};

export default MadnessBar;