import styles from "./HeroStyles.module.css";
import heroImage from "../../assets/nikhith-birru.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import NikhithBirru from "../../assets/NikhithBirru.pdf";
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
        <h2>Senior Software Engineer @ Commvault</h2>
        <span>
          <a href="https://www.linkedin.com/in/bnikhith/" target="_blank">
            <img src={linkedInIcon} alt="LinkedIn" />
          </a>
        </span>
        <p className={styles.description}>
          Backend engineer with 5+ years of experience in developing and
          implementing solutions using a diverse range of technologies,
          including C/C++, C#, Python, Transact-SQL, Java, ReactJS, and
          JavaScript. Proficient with SQL Server and have orchestrated with
          cloud technologies such as Microsoft Azure and Amazon Web Services.
          Proficient in team collaboration across disciplines, effectively
          conveying technical ideas, and product development endeavors to the
          stakeholders.
        </p>
        <a href={NikhithBirru} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
