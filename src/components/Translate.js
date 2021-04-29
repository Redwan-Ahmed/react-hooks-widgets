import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Japanese',
        value: 'ja'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Albanian',
        value: 'sq'
    },
    {
        label: 'Bengali',
        value: 'bn'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Spanish',
        value: 'es'
    }
];

// Google Translate API Docs: https://cloud.google.com/translate/docs/reference/rest/v2/translate
// API Key: AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const Translate = () => {
    const [langauge, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}/>  
                </div>
            </div>
            <Dropdown
            label="Select a Language"
            selected={langauge}
            onSelectedChange={setLanguage}    
            options={options} 
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert langauge={langauge} text={text} />
        </div>
    );
}

export default Translate;