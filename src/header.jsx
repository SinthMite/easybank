import logo from './assets/images/logo.svg'
import './header.css'
import hamburger from './assets/images/icon-hamburger.svg'
export default function Header({onHamburgerClick}) {
    return(

        <nav className='headerNav'>
            <div><img src={logo} alt="logo"/></div>
            <div><img src={hamburger} alt="hamburger" id='hamburger' onClick={onHamburgerClick}/></div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Career</a></li>
            </ul>

            <div>
                <button>Request Invite</button>
            </div>
        </nav>

    )
}