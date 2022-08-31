import './app.css';
import Header from '../header/header';
import LeftMenu from '../left-menu/left-menu';
import ViewContent from '../view-content/view-content';

    function App () {
        return (
            <div className="app">
                <Header/>
                <ViewContent/>
                <LeftMenu/>                
            </div>
        )
    }

    export default App;

    