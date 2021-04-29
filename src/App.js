/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a Front End JS Framework'
    },
    {
        title: 'I am Learning React',
        content: 'Most my projects are found on my GitHub!'
    },
    {
        title: 'How do I use React?',
        content: 'I use React by creating components'
    }
];

const options = [
    {
        label: 'The Colour Red',
        value: 'red'
    },
    {
        label: 'The Colour Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];


export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div style={{marginLeft: '10px', marginRight: '10px'}}>
            <div>
                <h1 style={{textAlign: 'center', margin: '10px'}} className="ui header">Widgets Application</h1>
            </div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <button onClick={() => setShowDropdown(!showDropdown)} className="ui button">Toggle Dropdown</button>
                { showDropdown ?
                <Dropdown 
                label = "Select a Colour"
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
                /> : null
                }
            </Route>
            <Route path="/translate">
            <Translate />
            </Route>
            <div>
                <hr />
                <h4 style={{textAlign: 'center', margin: '10px', fontStyle: 'italic'}} className="ui header">This application is made by using React hooks</h4>
            </div>
        </div>
    );
};