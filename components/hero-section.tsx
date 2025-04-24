import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          Get Engineering Projects with Code, Report & Viva Support
        </h1>
        <p className="text-xl mb-8 text-gray-600">Transform your academic journey with our expert project solutions</p>
        <Link href="#custom" className="clay-button px-8 py-4 font-medium text-lg inline-block">
          Start Your Project Now
        </Link>
      </div>
    </section>
  )
}
