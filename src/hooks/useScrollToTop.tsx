import {useEffect} from 'react';
import {useLocation} from 'react-router';


export const useScrollToTop = (
    behavior: ScrollBehavior = 'auto',
    top: number = 0,
    left: number = 0
) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top,
            left,
            behavior
        });
    }, [location.pathname, behavior, top, left]);
};

export default useScrollToTop;