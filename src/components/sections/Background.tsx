import { Section } from '@/components/common'

const Background = () => {
  return (
    <Section id="background" title="I. Research Background">
      <p className="text-lg">
        Stress management varies across cultures, yet its cultural influences remain underexplored. This study examines
        <strong className="bold-text"> how cultural background shapes stress relief choices</strong>
        , focusing on differences in coping strategies and openness to cross-cultural methods.
      </p>
      <p className="text-lg mt-4">
        Using a
        {' '}
        <strong className="bold-text">mixed-methods approach</strong>
        , we combine
        <strong className="bold-text"> quantitative surveys</strong>
        {' '}
        and
        <strong className="bold-text"> qualitative interviews</strong>
        {' '}
        to analyze coping behaviors.
        <strong className="bold-text"> NLP techniques (SBERT, clustering)</strong>
        {' '}
        and
        <strong className="bold-text"> statistical analysis (ANOVA, chi-square)</strong>
        {' '}
        uncover cultural patterns in stress management.
      </p>
      <p className="text-lg mt-4">
        Findings will inform
        {' '}
        <strong className="bold-text">culturally adaptive mental health interventions</strong>
        {' '}
        and
        <strong className="bold-text"> technology-driven stress management solutions</strong>
        .
      </p>
    </Section>
  )
}

export default Background
