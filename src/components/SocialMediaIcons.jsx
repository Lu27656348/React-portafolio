import facebookLogo from '../assets/facebook.png';
import linkedinLogo from '../assets/linkedin.png';
import twitterLogo from '../assets/twitter.png';
import instagramLogo from '../assets/instagram.png';

const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src={linkedinLogo} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twitter-link" src={twitterLogo} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src={facebookLogo}/>
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src={instagramLogo} />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;