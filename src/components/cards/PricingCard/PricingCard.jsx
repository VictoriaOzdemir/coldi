import { Check } from 'lucide-react';
import leftDecoration from '../../../assets/images/hero-card-decoration-left.svg';
import rightDecoration from '../../../assets/images/hero-card-decoration-rigth.svg';
import leftDecorationSm from '../../../assets/images/hero-decor-sm-left.svg';
import rightDecorationSm from '../../../assets/images/hero-decor-sm-right.svg';
import bgSm from '../../../assets/images/bg-sm.png';
import PrimaryButton from '../../ui/Button/PrimaryButton.jsx';
import Reveal from '../../ui/Reveal/Reveal.jsx';
import { Text } from '../../ui/Typography/Typography.jsx';

import {
  AccentTile,
  CheckIcon,
  Eyebrow,
  FeatureItem,
  FeatureList,
  PlanArt,
  PlanCard,
  PlanContent,
  PlanHeader,
  PlanImage,
  PlanPrice,
  PlanTitle,
} from './PricingCard.styles.js';

const decorations = {
  light: {
    desktop: leftDecoration,
    mobile: leftDecorationSm,
  },
  dark: {
    desktop: rightDecoration,
    mobile: rightDecorationSm,
  },
};

export default function PricingCard({ plan, revealDelay = '0ms' }) {
  const decoration = decorations[plan.variant];

  return (
    <Reveal
      as={PlanCard}
      $variant={plan.variant}
      animation="scroll"
      delay={revealDelay}
    >
      <PlanArt $variant={plan.variant}>
        <source media="(min-width: 992px)" srcSet={decoration.desktop} />
        <PlanImage src={decoration.mobile} alt="" aria-hidden="true" />
      </PlanArt>

      <PlanContent>
        <PlanHeader $background={bgSm}>
          <AccentTile $accent={plan.accent} aria-hidden="true" />
          <Eyebrow >{plan.eyebrow}</Eyebrow>
        </PlanHeader>

        <PlanTitle as="h2" $variant="card">
          {plan.title}
        </PlanTitle>

        <Text $margin="0 0 20.8px">
          {plan.description}
        </Text>

        <PlanPrice>{plan.price}</PlanPrice>

        <FeatureList aria-label={`${plan.title} features`}>
          {plan.features.map((feature) => (
            <FeatureItem key={feature}>
              <CheckIcon aria-hidden="true">
                <Check size={14} strokeWidth={3} />
              </CheckIcon>
              <span>{feature}</span>
            </FeatureItem>
          ))}
        </FeatureList>

        <PrimaryButton href="/">
          Request Now
        </PrimaryButton>
      </PlanContent>
    </Reveal>
  );
}
