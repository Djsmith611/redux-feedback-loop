import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import reduxStore from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>
);

export {default as AppHeader} from './components/AppHeader/AppHeader.jsx';
export {default as Comments} from './components/Form/Comments.jsx';
export {default as Understanding} from './components/Form/Understanding.jsx';
export {default as Feeling} from './components/Form/Feeling.jsx';
export {default as Review} from './components/Form/Review.jsx';
export {default as Support} from './components/Form/Support.jsx';
export {default as ThankYou} from './components/Form/ThankYou.jsx';
