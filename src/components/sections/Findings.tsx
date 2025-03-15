import { ImageCarousel, Section } from '@/components/common'

const KeyFindings = () => {
  return (
    <Section id="findings" title="III. Key Findings">
      {/* Quantitative Findings */}
      <div className="mb-12">
        <h3
          id="findings-quantitative"
          className="text-2xl font-semibold"
        >
          Quantitative Findings (Survey Analysis)
        </h3>
        <p className="text-lg mt-4">
          Statistical tests reveal key differences in stress relief strategies across cultural backgrounds and gender.
        </p>

        <ul className="list-disc pl-6 text-lg mt-4">
          <li>
            <strong className="bold-text">ANOVA:</strong>
            Examined gender & cultural background differences in the perceived effectiveness of five stress relief methods (Likert scale 1-5).
          </li>
          <li>
            <strong className="bold-text">Chi-Square Tests:</strong>
            Identified significant relationships between categorical variables such as stress coping methods, decision factors, and cultural openness.
          </li>
          <li>
            <strong className="bold-text">T-Tests:</strong>
            Binary comparisons confirming ANOVA results, highlighting cultural influences on stress relief preferences.
          </li>
        </ul>

        <ImageCarousel
          images={['/projects/annova.webp', '/projects/chi-square.webp', '/projects/t-test.webp']}
          classNames="mt-6 grid grid-cols-1 gap-6 md:m-3"
        />
      </div>

      {/* Qualitative Findings */}
      <div>
        <h3
          id="findings-qualitative"
          className="text-2xl font-semibold"
        >
          Qualitative Findings (Interview Analysis)
        </h3>
        <p className="text-lg mt-4">
          Thematic analysis of interviews reveals two distinct approaches to stress management based on cultural background.
        </p>

        <ul className="list-disc pl-6 text-lg mt-4">
          <li>
            <strong className="bold-text">Word Cloud (TF-IDF): </strong>
            Highlights the most frequently used terms related to stress coping strategies.
          </li>
          <li>
            <strong className="bold-text">LDA Topic Modeling: </strong>
            Identifies two dominant stress coping themes across six interviewees.
          </li>
          <li>
            <strong className="bold-text">SBERT Analysis: </strong>
            Reveals similarity patterns and clusters interviews based on semantic content.
          </li>
        </ul>

        {/* Interview Data Visualizations */}
        <div className="flex flex-col items-center max-w-3xl mx-auto mt-6">
          <img src="/projects/word-cloud.webp" alt="Word Cloud" className="w-full mx-auto shadow-lg rounded-lg" />
          <p className="text-center text-sm mt-2 text-foreground-dark">Word Cloud: Key Terms in Stress Relief Narratives</p>
        </div>

        {/* LDA Topic Modeling */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col items-center">
            <img src="/projects/lda-1.webp" alt="LDA Topic 1" className="w-full max-w-lg h-auto shadow-lg rounded-lg" />
            <p className="text-center text-sm mt-2 text-foreground-dark flex-1">LDA: Topic 1 - Cultural Influence on Stress Management</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/projects/lda-2.webp" alt="LDA Topic 2" className="w-full max-w-lg h-auto shadow-lg rounded-lg md:mt-15" />
            <p className="text-center text-sm mt-2 text-foreground-dark flex-1">LDA: Topic 2 - Behavioral Patterns in Stress Relief</p>
          </div>
        </div>

        {/* SBERT Analysis - Heatmap & Clustering */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
            <img src="/projects/sbert-heatmap.webp" alt="SBERT Heatmap" className="w-full max-w-lg shadow-lg rounded-lg" />
            <p className="text-center text-sm mt-2 text-foreground-dark">SBERT Heatmap: Semantic Similarity Between Interviews</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/projects/sbert-clustering.webp" alt="SBERT Clustering" className="w-full max-w-lg shadow-lg rounded-lg md:mt-15" />
            <p className="text-center text-sm mt-2 text-foreground-dark">SBERT Clustering: Interview Themes & Topic Grouping</p>
          </div>
        </div>

        {/* Summary of Findings */}
        <h4 className="text-xl font-semibold mt-8">Thematic Analysis of Cultural Influence on Stress Relief</h4>
        <ul className="list-disc pl-6 text-lg mt-4">
          <li>
            <strong className="bold-text">Two Distinct Stress Coping Strategies:</strong>
            Cultural background shapes how individuals recognize, express, and manage stress.
          </li>
          <li>
            <strong className="bold-text">Eastern vs. Western Coping Styles:</strong>
            <li className="ml-6">
              Eastern participants tend to internalize stress, using solitary methods (e.g., media, meditation).
            </li>
            <li className="ml-6">
              Western participants openly discuss stress and favor social or physical activities.
            </li>
          </li>
          <li>
            <strong className="bold-text">Key Behavioral Differences:</strong>
            <li className="ml-6">
              Emotional Expression: Eastern participants avoid burdening others, while Western participants normalize discussing stress.
            </li>
            <li className="ml-6">
              Coping Strategies: Western participants use exercise & consumer-driven relaxation, while Eastern participants prefer individual, immersive activities.
            </li>
            <li className="ml-6">
              Social vs. Individual Coping: Western participants seek external support, whereas Eastern participants rely on self-managed stress relief.
            </li>
          </li>
        </ul>
      </div>
    </Section>
  )
}

export default KeyFindings
