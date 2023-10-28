import ButtonEmail from "../ButtonEmail";
import ButtonLinkedin from "../ButtonLinkedin";
import styles from "./style.module.css";

const BodyBg = () => {
  return (
    <div className={styles.bodyBg}>
      <div className={styles.bodyHeadCont}>
        <div className={styles.bodyHead}>
          <h2>Laura Smith</h2>
          <h5>Frontend Developer</h5>
          <span>laurasmith.website</span>
        </div>

        <div className={styles.bodyButton}>
          <ButtonEmail />
          <ButtonLinkedin />
        </div>
      </div>

      <div className={styles.bodyHeadText}>
        <div className={styles.textItem}>
          <h4>About</h4>
          <p>I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep
            up with security and best practices, and am always looking
            for new things to learn.
          </p>
        </div>
        <div className={styles.textItem}>
          <h4>Interests</h4>
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BodyBg;