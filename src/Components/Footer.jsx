import Dogs from "../Assets/dogs-footer.svg?react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>
        {" "}
        &copy; Dogs alguns direitos reservados{" "}
        <a target="_blannk" href="https://www.origamid.com">
          Origamid
        </a>{" "}
      </p>
      <p>
        developed by 🤎{" "}
        <a target="_blank" href="https://www.ofs.dev.br">
          Emmanuel Oliveira
        </a>
        <span> | OFS</span>
      </p>
    </footer>
  );
};

export default Footer;
