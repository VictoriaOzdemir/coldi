import heroDecor from '../../../assets/images/hero-decor.png';
import wave from '../../../assets/images/Wave.svg';
import PricingCard from '../../cards/PricingCard/PricingCard.jsx';
import Container from '../../ui/Container/Container.jsx';
import { GradientHeading, Text } from '../../ui/Typography/Typography.jsx';
import { heroContent, pricingPlans } from '../../../content/pricingPage.js';
import {
  HeroCircle,
  HeroCopy,
  HeroRoot,
  HeroWave,
  PricingList,
} from './HeroSection.styles.js';

export default function HeroSection() {
  return (
    <HeroRoot aria-labelledby="hero-title" $background={heroDecor}>
      <Container position="relative" layer="raised">
        <HeroCopy>
          <GradientHeading
            as="h1"
            id="hero-title"
            $variant="hero"
            data-reveal="load"
          >
            {heroContent.title[0]} <br /> {heroContent.title[1]}
          </GradientHeading>

          <Text
            $size="sm"
            $margin="24px 0 0"
            $tracking="0.05em"
            data-reveal="load"
            $hero="hero"
          >
            {heroContent.description[0]} <br />
            {heroContent.description[1]}
          </Text>
          <HeroCircle $placement="start" aria-hidden="true" />
        </HeroCopy>
      </Container>

      

      <Container>
        <HeroCircle $placement="end" aria-hidden="true" />
        <PricingList aria-label="Pricing plans" id="pricing-quote">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.title}
              plan={plan}
              revealDelay={`${180 + index * 130}ms`}
            />
          ))}
        </PricingList>
      </Container>

      <HeroWave aria-hidden="true" src={wave} alt="" />
    </HeroRoot>
  );
}
