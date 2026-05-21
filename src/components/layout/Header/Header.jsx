import logo from '../../../assets/images/full-logo.svg';
import { BrandLink, HeaderRoot, HeaderContainer } from './Header.styles.js';

export default function Header() {
  return (
    <HeaderRoot>
      <HeaderContainer>
        <BrandLink href="/" aria-label="Coldi home" data-reveal="load">
          <img src={logo} alt="Coldi" />
        </BrandLink>
      </HeaderContainer>
    </HeaderRoot>
  );
}
