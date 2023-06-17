import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import 'reactjs-popup/dist/index.css'
import {MainContainer} from './styledComponents'
import './index.css'

const Header = () => (
  <MainContainer>
    <Link to="/">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button type="button" data-testid="hamburgerIconButton">
          <GiHamburgerMenu className="hamburger-menu" />
        </button>
      }
      className="popup-trigger"
    >
      {close => (
        <div className="popped-container">
          <ul className="content-container">
            <Link to="/">
              <li className="rowed">
                <AiFillHome className="i-con-home" />
                <h1>HOME</h1>
              </li>
            </Link>
            <Link to="/about">
              <li className="rowed">
                <BsInfoCircleFill className="i-con-home" />
                <h1>ABOUT</h1>
              </li>
            </Link>
          </ul>
          <div className="close-button">
            <button
              onClick={() => close()}
              type="button"
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
    </Popup>
  </MainContainer>
)

export default Header
