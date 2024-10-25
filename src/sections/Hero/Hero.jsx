import styles from "./HeroStyles.module.css";
import heroImage from "../../assets/nikhith-birru.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedInIcon = theme === "light" ? linkedInLight : linkedInDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImage}
          alt="Profile picture of Nikhith Birru"
        />
        <img
          onClick={toggleTheme}
          className={styles.colorMode}
          src={themeIcon}
          alt="Color theme icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Nikhith
          <br />
          Birru
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/bnikhith/" target="_blank">
            <img src={linkedInIcon} alt="LinkedIn" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern applications.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
