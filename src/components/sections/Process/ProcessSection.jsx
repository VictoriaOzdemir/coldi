import { processSteps } from '../../../content/pricingPage.js';
import ProcessStepCard from '../../cards/ProcessStepCard/ProcessStepCard.jsx';
import {
  ProcessBand,
  ProcessList,
  ProcessRoot,
  ProcessStack,
  ProcessTitle,
  ProcessWave,
} from './ProcessSection.styles.js';
import Container from '../../ui/Container/Container.jsx';


export default function ProcessSection() {
  return (
    <ProcessRoot aria-labelledby="process-title">
      <ProcessTitle
        as="h2"
        id="process-title"
        $variant="section"
        $align="center"
        $color="var(--color-base)"
        data-reveal="scroll"
      >
        The Coldi Process: <br />
        How It Works
      </ProcessTitle>

      <ProcessStack>
        <ProcessWave
          viewBox="0 0 1920 339"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 339V166L1920 317.151V339H0Z"
            fill="var(--color-primary-soft)"
          />
          <path
            d="M1920 0L0 169L1920 332V0Z"
            fill="var(--color-primary)"
          />
        </ProcessWave>

        <ProcessBand>
          <Container>
            <ProcessList>
              {processSteps.map((step, index) => (
                <ProcessStepCard
                  key={step.number}
                  step={step}
                  stackOrder={index + 1}
                />
              ))}
            </ProcessList>
          </Container>
        </ProcessBand>

        <ProcessWave
          preserveAspectRatio="none" 
          width="1922" height="339" 
          viewBox="0 0 1922 339" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
        
          <path d="M1922 339V166L0 317.151V339H1922Z" fill="var(--color-surface)"/>
          <path d="M0 339V0H1922V168.5L0 339Z" fill="var(--color-primary-soft)"/>
        </ProcessWave>

      </ProcessStack>
    </ProcessRoot>
  );
}
