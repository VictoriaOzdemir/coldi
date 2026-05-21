import { FooterRoot } from './Footer.styles.js';

export default function Footer() {
  return (
    <FooterRoot>
      <small>&copy; {new Date().getFullYear()} Coldi. All rights reserved.</small>
    </FooterRoot>
  );
}
