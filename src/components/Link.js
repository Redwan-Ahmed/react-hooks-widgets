import React from 'react';

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        // allow useres to open new tab with command click/ctrl click
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        // prevent refresh
        event.preventDefault();
        // push the window url with the href which is passed through
        window.history.pushState({}, '', href);
        // communicates to route component that data has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };


    return (
    <a onClick={onClick} className={className} href={href}>
        {children}
    </a>
    );
};

export default Link;