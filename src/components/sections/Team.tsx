import { PersonalLink, Section } from '@/components/common'

const Team = () => {
  return (
    <Section id="team" title="V. Meet the Team">
      <p className="text-lg">
        This research was conducted by a multidisciplinary team specializing in
        <strong className="bold-text"> Human-Computer Interaction (HCI), Natural Language Processing (NLP), and Psychology</strong>
        .
      </p>
      <p className="text-lg mt-4">
        The team members are (In alphabetical order):
      </p>

      <ul className="list-disc pl-6 text-lg mt-4">
        <li>
          <PersonalLink href="https://www.zla.app">
            Elara Liu
          </PersonalLink>
          {' '}
          - Master of Science in Computer Science
        </li>
        <li>
          <PersonalLink href="https://siren-wang.github.io/">
            Siren Wang
          </PersonalLink>
          {' '}
          - Master of Science in Computer Science
        </li>
        <li>
          <PersonalLink href="https://www.linkedin.com/in/talia-ben-naim/">
            Talia Ben-Naim
          </PersonalLink>
          {' '}
          - Master of Science in Computer Engineering
        </li>
        <li>
          <PersonalLink href="https://github.com/YilinZhang0101">
            Yilin Zhang
          </PersonalLink>
          {' '}
          - Master of Science in Computer Science
        </li>
      </ul>
    </Section>
  )
}

export default Team
