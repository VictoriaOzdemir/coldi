import { services } from '../../../content/pricingPage.js';
import ServiceCard from '../../cards/ServiceCard/ServiceCard.jsx';
import Container from '../../ui/Container/Container.jsx';

import {
  ServicesList,
  ServicesRoot,
  ServicesTitle,
} from './ServicesSection.styles.js';

export default function ServicesSection() {
  return (
    <ServicesRoot aria-labelledby="services-title">
      <Container>
        <ServicesTitle
          as="h2"
          id="services-title"
          $variant="section"
          $align="center"
          $color="var(--color-base)"
          data-reveal="scroll"
        >
          Specialized Services
        </ServicesTitle>

        <ServicesList>
          {services.map((service, index) => (
            <ServiceCard
              key={`${service.title}-${service.borderColor}`}
              service={service}
              revealDelay={`${index * 110}ms`}
            />
          ))}
        </ServicesList>
      </Container>
    </ServicesRoot>
  );
}
