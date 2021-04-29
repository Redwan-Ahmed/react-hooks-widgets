import React, {useEffect, useState } from 'react';
import axios from 'axios';

// Google Translate API Docs: https://cloud.google.com/translate/docs/reference/rest/v2/translate
// API Key: AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const Convert = ({ langauge, text }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    //here we are delaying the requests sent to the Google API whilst the user is typing
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 1000);

        //Cleanup Function
        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    //The google API post request
    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: langauge.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                },
            });

            setTranslated(data.data.translations[0].translatedText);
        };

        doTranslation();
    }, [langauge, debouncedText]);

    return(
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default Convert;