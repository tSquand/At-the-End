import React, { useState } from 'react';
import './styles.css';

const StatusTracker = () => {
    const [isPressed, press] = useState({
        button1: false,
        button2: false,
        button3: false,
        button4: false
    });

    const handleButtonClick = (button) => {
        press((prevState) => ({ ...prevState, [button]: true}));
        
    }


    return(
        <div className="statusButtons">
            <div>
                <button className={isPressed.button1 ? 'burnPressed' : 'burn'} onClick={() => handleButtonClick('button1')}>Burn</button>
                <button className={isPressed.button2 ? 'regenPressed' : 'regen'} onClick={() => handleButtonClick('button2')}>Regenerate</button>
            </div>
            <div>
                <button className={isPressed.button3 ? 'staggerPressed' : 'stagger'} onClick={() => handleButtonClick('button3')}>Stagger</button>
                <button className={isPressed.button4 ? 'focusPressed' : 'focus'} onClick={() => handleButtonClick('button4')}>Focus</button>
            </div>
        </div>
    );
};

export default StatusTracker;