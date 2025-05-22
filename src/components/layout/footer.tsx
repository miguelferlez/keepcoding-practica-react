import "./footer.css";
import GithubIcon from "../icons/github-icon";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t-1 border-gray-200">
      <div className="footer-container">
        <span className="text-gray-500">{`© ${year} KeepCoding. All Rights Reserved.`}</span>
        <div>
          <a
            href="https://github.com/miguelferlez/keepcoding-practica-react"
            target="_blank"
          >
            <GithubIcon className="media-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
