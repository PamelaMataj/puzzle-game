import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/puzzleImage">
        <button className="play-btn">
          <h3> Play </h3>
        </button>
      </Link>
    </div>
  );
};

export default Footer;
