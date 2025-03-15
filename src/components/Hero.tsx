import { SmoothScrollLink } from '@/components/common'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center text-white px-6 py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animate-gradient-bg bg-gradient-to-r from-sakura-300 via-sora-300 to-sakura-300 bg-[length:400%_400%] opacity-80"></div>

      {/* Content Layer (Ensures text is readable) */}
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-md">
          Cultural Underpinnings of Stress Relief
        </h1>
        <p className="text-xl mt-4 max-w-3xl font-medium drop-shadow-sm">
          Exploring how cultural backgrounds shape stress management strategies
        </p>
        <p className="mt-6 mb-10 text-lg font-light opacity-90">
          Winter 2025 •
          {' '}
          <a
            href="https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/397-497-14.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-3 decoration-dotted transition-all duration-300 hover:text-sakura-500"
          >
            COMP_SCI 497 • mHealth
          </a>
          {' '}
          • Northwestern University
        </p>
        <SmoothScrollLink
          href="#background"
          className="bg-white text-sakura-600 px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-sakura-100 transition-all duration-300"
        >
          Learn More
        </SmoothScrollLink>
      </div>
    </section>
  )
}

export default Hero
