import classes from './App.module.css';
import {Header} from "./components/Header";

function App() {
  return (
    <div className={classes.App}>
        <div className={classes.container}>
            <Header />
        </div>
    </div>
  );
}

export default App;
