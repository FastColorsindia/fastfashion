import { useLocation, useNavigate } from 'react-router-dom';

export const useScrollToSection = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (sectionId: string) => {
        // Special handling for Gallery to navigate to the separate page
        if (sectionId.toLowerCase() === 'gallery') {
            if (location.pathname === '/gallery') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                navigate('/gallery');
            }
            return;
        }

        // Special handling for Home to navigate to top
        if (sectionId.toLowerCase() === 'home') {
            if (location.pathname !== '/') {
                navigate('/');
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            return;
        }

        // For other sections like 'blog', 'about'
        if (location.pathname !== '/') {
            navigate('/');
            // Delay scroll to allow navigation to complete
            setTimeout(() => {
                const element = document.getElementById(sectionId.toLowerCase());
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300); // Increased delay for better reliability on slower loads
        } else {
            const element = document.getElementById(sectionId.toLowerCase());
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return scrollToSection;
};
