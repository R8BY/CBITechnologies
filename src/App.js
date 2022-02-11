import classes from './App.module.css';
import {Header} from "./components/Header";
import {useState} from "react";
import {ClearPage} from "./Pages/ClearPage";

function App() {
    const [query, setQuery] = useState('');

    return (
    <div className={classes.App}>
        <div className={classes.container}>
            <Header setQuery={setQuery}/>
            <ClearPage query={query}/>
        </div>
    </div>
  );
}

export default App;
