import { Text } from '../../ui/Typography/Typography.jsx';
import { StepBadge, StepCard, StepTitle } from './ProcessStepCard.styles.js';

export default function ProcessStepCard({ stackOrder, step }) {
  return (
    <StepCard $stackOrder={stackOrder}>
      <StepBadge aria-label={`Step ${step.number}`}>{step.number}</StepBadge>

      <StepTitle as="h3" $variant="process">
        {step.title}
      </StepTitle>

      <Text $size="lg">
        {step.copy}
      </Text>
    </StepCard>
  );
}
