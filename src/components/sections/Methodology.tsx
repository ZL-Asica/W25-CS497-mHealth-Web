import { Section } from '@/components/common'

const Methodology = () => {
  return (
    <Section id="methodology" title="II. Methodology">
      <p className="text-lg">
        This study employs a
        {' '}
        <strong className="bold-text">mixed-methods approach</strong>
        , combining
        <strong className="bold-text"> surveys (n=44) </strong>
        {' '}
        and
        <strong className="bold-text"> interviews (6 × 15 min)</strong>
        {' '}
        to explore cultural influences on stress relief.
      </p>
      <ul className="list-disc pl-6 text-lg">

        <li className="text-lg mt-4">
          Quantitative Analysis:
          {' '}
          <strong className="bold-text">ANOVA, Chi-Square, T-Tests</strong>
          {' '}
          used to identify correlations between cultural background and stress coping strategies.
        </li>
        <li className="text-lg mt-4">
          Qualitative Analysis:
          {' '}
          <strong className="bold-text">TF-IDF, LDA, SBERT</strong>
          {' '}
          applied to interview transcripts for thematic clustering. Word clouds and topic modeling highlight key stress relief patterns.
        </li>
      </ul>
      <p className="text-lg mt-4">
        Findings contribute to
        {' '}
        <strong className="bold-text">culturally adaptive stress interventions</strong>
        {' '}
        and inform data-driven mental health solutions.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6">
        <div className="flex flex-col items-center">
          <img src="/projects/data-1.webp" alt="Survey Data Overview 1 (of 1)" className="w-full shadow-lg rounded-lg" />
          <p className="text-center text-sm mt-2 text-foreground-dark">Survey Data Overview - Set 1 (of 2)</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/projects/data-2.webp" alt="Survey Data Overview 2 (of 2)" className="w-full shadow-lg rounded-lg" />
          <p className="text-center text-sm mt-2 text-foreground-dark">Survey Data Overview - Set 2 (of 2)</p>
        </div>
      </div>
    </Section>
  )
}

export default Methodology
