import './App.scss';
import {Alert} from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
            ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    This is a {variant} alert—check it out!
                </Alert>
            ))}  </div>
    );
}

export default App;
