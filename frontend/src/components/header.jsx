import {Link} from 'react-router'
import home from '../pages/home'
const header = () => {
    return (
        <div>
            <header>
                <h1>Abhijeet Nagar</h1>
                <nav>
                    <ul>
                        <Link to='/' ><li>Home</li></Link>
                        <Link to='/project'><li>Projects</li></Link>
                        <Link to='/about'><li>About</li></Link>
                    </ul>
                </nav>
                <div class="search-login">
                    <form action="#" method="GET">
                        <input type="text" placeholder="Type..." name="search" />
                            <button type="submit">Go</button>
                    </form>
                    
                </div>
            </header>
        </div>
    )
}

export default header