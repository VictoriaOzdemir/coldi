import logo from '../../../assets/images/full-logo.svg';
import Container from '../../ui/Container/Container.jsx';
import { BrandLink, HeaderRoot } from './Header.styles.js';

export default function Header() {
  return (
    <HeaderRoot>
      <Container>
        <BrandLink href="/" aria-label="Coldi home" data-reveal="load">
          <img src={logo} alt="Coldi" />
        </BrandLink>
      </Container>
    </HeaderRoot>
  );
}
