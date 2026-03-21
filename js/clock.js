// clock-no-jsx.js - РЕКОМЕНДУЕМАЯ ВЕРСИЯ
const { useState, useEffect } = React;

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        return `${hours}:${minutes}:${seconds}`;
    };

    return React.createElement(
        'div',
        { 
            className: 'clock-display',
            style: {
                animation: 'pulse 2s infinite'
            }
        },
        formatTime(time)
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Clock));