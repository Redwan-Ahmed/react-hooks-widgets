import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);  
        };
        document.body.addEventListener('click', onBodyClick, { capture: true });

        //Cleanup Function
        return () => {
            document.body.removeEventListener('click', onBodyClick, { capture: true });
        };

    }, []);

    const renderedOptions = options.map((option) => {
        // filter the options so the selected colour does not show on the dropdown
        if(option.value === selected.value) {
            return null;
        }

        return (
            <div 
            key={option.value} 
            className="item"
            onClick={() => onSelectedChange(option)}
            >{option.label}</div>
        );
    });

    //only render this inside the dropdown 
    const textColour = () => {
        if (window.location.pathname === '/dropdown') {
        return (
            <div style={{color: `${selected.value}`}} className="label">This text is {selected.value}!</div>
        );
        }
    };

    return(
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)} 
                className={`ui selection dropdown ${ open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${ open ? 'visible transition': ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
            <div>{textColour()}</div>
        </div>
    );
};

export default Dropdown;