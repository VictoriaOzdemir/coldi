import logo from '../../../assets/images/full-logo.svg';
import { BrandLink, HeaderRoot, HeaderContainer, HeaderLogoRevealItem } from './Header.styles.js';

export default function Header() {
  return (
    <HeaderRoot>
      <HeaderContainer>
        <BrandLink href="/" aria-label="Coldi home" data-reveal="load">
          <img src={logo} alt="Coldi logo" />
          <HeaderLogoRevealItem aria-hidden="true" className="reveal-item"/>
        </BrandLink>
      </HeaderContainer>
    </HeaderRoot>
  );
}
