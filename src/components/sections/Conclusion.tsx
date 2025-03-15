import { Section } from '@/components/common'

const Conclusion = () => {
  return (
    <Section id="conclusion" title="IV. Conclusion & Future Work">
      <h3
        id="conclusion-key-findings"
        className="text-2xl font-semibold"
      >
        Key Findings
      </h3>
      <ul className="list-disc pl-6 text-lg mt-4">
        <li>
          <strong className="bold-text">Cultural Influence: </strong>
          Stress relief methods differ significantly across cultural backgrounds, shaping individual coping behaviors.
        </li>
        <li>
          <strong className="bold-text">Self-Reported Data Limitations: </strong>
          Findings rely on self-reported preferences, which may not fully reflect actual behavior.
        </li>
        <li>
          <strong className="bold-text">Contextual Factors: </strong>
          Socioeconomic status, education, and environmental influences were not explicitly examined.
        </li>
      </ul>

      <h3
        id="conclusion-future-work"
        className="text-2xl font-semibold mt-8"
      >
        Future Work
      </h3>
      <ul className="list-disc pl-6 text-lg mt-4">
        <li>
          <strong className="bold-text">Broader Cultural Scope: </strong>
          Expand the study beyond East Asian and Western participants to include South Asian, Middle Eastern, and other backgrounds.
        </li>
        <li>
          <strong className="bold-text">Longitudinal Studies: </strong>
          Track participants over time to understand evolving stress management behaviors.
        </li>
        <li>
          <strong className="bold-text">Behavioral & Physiological Data: </strong>
          Integrate objective measures like heart rate variability (HRV) for deeper validation of stress relief effectiveness.
        </li>
      </ul>
    </Section>
  )
}

export default Conclusion
