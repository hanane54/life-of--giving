import React from "react";
import SocialNetworks from "./SocialNetworks";
import styles from "./Footer.module.css";
import FooterQuote from "./FooterQuote";
import FooterButtons from "./FooterButtons";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.subfooter}>
        <SocialNetworks />
        <FooterQuote />
        <FooterButtons />
      </div>
    </div>
  );
}
export default Footer;
