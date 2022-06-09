import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from './components/navbar';

function App() {
    return (
        <div className="App">
            <ResponsiveAppBar />
        </div>
    );
}

export default App;
