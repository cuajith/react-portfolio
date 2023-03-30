import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p>Made By Ajithkumar</p>
        <InstagramIcon
          onClick={() =>
            window.open("https://www.instagram.com/ajithkumar__u/")
          }
          className="social-btn"
        />
        {/* <TwitterIcon /> */}
        <FacebookIcon
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=100071751927285"
            )
          }
          className="social-btn"
        />
        <LinkedInIcon
          onClick={() =>
            window.open("https://www.linkedin.com/in/ajithkumar-u-76712b224")
          }
          className="social-btn"
        />
      </div>
    </div>
  );
}

export default Footer;
