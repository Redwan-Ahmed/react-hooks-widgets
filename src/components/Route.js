import { useEffect, useState } from 'react';

const Route = ( { path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        // check if location has changed
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        // this is the popstate event we have sent from the Link component to tell route to update the component.
        window.addEventListener('popstate', onLocationChange);
        // clean up - removing the event listener
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return currentPath === path ? children : null;
};

export default Route;