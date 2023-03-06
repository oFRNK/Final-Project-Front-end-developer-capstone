import HeroImage from "../../assets/food/food5.jpg";
import { Link } from "react-router-dom";
export default function Confirmation() {
  return (
    <header className="confirmation-header">
      <img
        className="confirmation-image"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <section className="reserve-header-text">
        <h1>Your reservation for the little lemon is Confirmed!</h1>
        <h4>A confirmation message will be sent shortly to your email.</h4>
        <h4>Thanks for dining with us!</h4>
      </section>

      <section className="redirect-buttons">
        <a
          className="redirect-button"
          href={require("../../assets/Italian-Flag-Themed-Restaurant-Menu-Template-788x788.webp")}
          target="_blank"
          rel="noreferrer"
        >
          Browse Menu
        </a>
        <Link className="redirect-button" to="/order">
          Order Online
        </Link>
        <Link className="redirect-button" to="/">
          Home Page
        </Link>
      </section>
    </header>
  );
}
