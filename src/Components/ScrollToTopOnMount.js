import { useEffect } from 'react';

function ScrollToTopOnMount() {
    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, []);

    return null;
}

export default ScrollToTopOnMount;
