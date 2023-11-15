import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-10">
        Hairy Potter Problem?
      </h1>
      <h4 className="text-center md:text-left text-lg mt-4 md:pl-8">
        OUR GOAL: Solve some hairy problems and ensuring we fail faster and cheaper for the rest.
      </h4>
    </section>
  )
}

export default Intro
