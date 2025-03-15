import { BackToTop, Footer, Header, ScrollPositionBar, TOC } from '@/components/common/layout'
import Hero from '@/components/Hero'
import { Background, Conclusion, Findings, Methodology, Team } from '@/components/sections'

const App = () => {
  const TOCContents: TocItems[] = [
    { slug: 'background', title: 'I. Research Background', level: 2 },
    { slug: 'methodology', title: 'II. Research Methodology', level: 2 },
    { slug: 'findings', title: 'III. Research Findings', level: 2 },
    { slug: 'findings-quantitative', title: '3.1 Quantitative Findings (Survey Analysis)', level: 3 },
    { slug: 'findings-qualitative', title: '3.2 Qualitative Findings (Interview Analysis)', level: 3 },
    { slug: 'conclusion', title: 'IV. Conclusion', level: 2 },
    { slug: 'conclusion-key-findings', title: '4.1 Key Findings', level: 3 },
    { slug: 'conclusion-future-works', title: '4.2 Future Works', level: 3 },
    { slug: 'team', title: 'V. Meet the Team', level: 2 },
  ]

  return (
    <>
      <ScrollPositionBar />
      <BackToTop />
      <Header />
      <main>
        <Hero />
        <TOC items={TOCContents} />
        <Background />
        <Methodology />
        <Findings />
        <Conclusion />
        <Team />
      </main>
      <Footer />
    </>
  )
}

export default App
