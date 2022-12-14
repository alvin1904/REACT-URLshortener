import logo from '../logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import insta from '../images/icon-instagram.svg'

function Links(){


return <div className='link-containers bg-800'>
    <div className='link-container one'>
        <button className='navbtn'><img src={logo} alt='Shortly'></img></button>
    </div>
    <div className='link-container two'>
        <div>
            <h4>Features</h4>
            <h5>Link Shortening</h5>
            <h5>Branded Links</h5>
            <h5>Analytics</h5>
        </div>
        <div>
            <h4>Resources</h4>
            <h5>Blog</h5>
            <h5>Developers</h5>
            <h5>Support</h5>
        </div>
        <div>
            <h4>Company</h4>
            <h5>About</h5>
            <h5>Our Team</h5>
            <h5>Careers</h5>
            <h5>Contact</h5>
        </div>
    </div>  
    <div className='link-container three'>
        <button className='social-icon'><img src={facebook} alt = 'facebook-logo'></img></button>
        <button className='social-icon'><img src={twitter} alt = 'twitter-logo'></img></button>
        <button className='social-icon'><img src={pinterest} alt = 'pinterest-logo'></img></button>
        <button className='social-icon'><img src={insta} alt = 'insta-logo'></img></button>
    </div>  
</div>;
}

export default Links;