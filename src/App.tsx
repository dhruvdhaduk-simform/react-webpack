import { useState } from 'react';
import reactIcon from '@assets/react.svg';
import webpackIcon from '@assets/webpack.svg';
import '@/index.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="app">
                <div className="app-image">
                    <img src={reactIcon} alt="" className="react-icon" />
                    <span>+</span>
                    <img src={webpackIcon} alt="" />
                </div>
                <div>
                    <p>React + Webpack</p>
                </div>
                <button onClick={() => setCount((prev) => prev + 1)}>
                    Click {count}
                </button>
            </div>
        </>
    );
}

export default App;
