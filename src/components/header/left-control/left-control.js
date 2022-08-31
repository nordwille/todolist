import './left-control.css';
import SearchPanel from './search-panel/search-panel'

const LeftControl = () => {
    return (
            <div className="left-control">
                <nav className='menu'>
                    <i class="fa-solid fa-bars"></i>
                </nav>

                <nav className='home'>
                    <i class="fa-solid fa-house"></i>
                </nav>
                <SearchPanel/>               
            </div>
    )
}

export default LeftControl;