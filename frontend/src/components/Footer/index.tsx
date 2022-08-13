import "./FooterStyles.css";
const githubIcon = require("../../images/githubIcon.png");

const Footer = () => {
	return (
		<footer>
			<div className="footer-wrapper">
				<div>
					<a href="https://github.com/dfthan">
						<img src={githubIcon} alt="GitHub icon" />
					</a>
				</div>
				<p>Made by Hannu</p>
			</div>
		</footer>
	);
};

export default Footer;
