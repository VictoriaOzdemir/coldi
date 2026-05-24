import PrimaryButton from '../../ui/Button/PrimaryButton.jsx';
import PricingBadge from '../../ui/Badge/Badge.jsx';
import Reveal from '../../ui/Reveal/Reveal.jsx';
import {
  ServiceAction,
  ServiceCardRoot,
  ServiceContent,
  ServiceContentInner,
  ServiceCopy,
  ServiceImage,
  ServiceOverlay,
  ServiceTitle,
} from './ServiceCard.styles.js';

export default function ServiceCard({ service, revealDelay = '0ms' }) {
  
  return (
    <Reveal
      as={ServiceCardRoot}
      $borderColor={service.borderColor}
      delay={revealDelay}
    >
      <ServiceImage src={service.image} alt="" aria-hidden="true" />
      <ServiceOverlay aria-hidden="true" />

      <ServiceContent>
        <PricingBadge
          quote={service.quote}
          bagdeColor={service.borderColor}
        />
        <ServiceContentInner>
          <ServiceTitle as="h3" $variant="service">
            {service.title}
          </ServiceTitle>
        
          <ServiceCopy
            $margin="0 0 40px"
            $size="lg"
            $lineHeight="1.45"
          >
            {service.copy}
          </ServiceCopy>

          <ServiceAction>
            <PrimaryButton href={service.quoteHref}>
              Get Pricing Quote
            </PrimaryButton>
          </ServiceAction>
        </ServiceContentInner>

      </ServiceContent>
    </Reveal>
  );
}
