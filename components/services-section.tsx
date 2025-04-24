export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center text-primary">Our Services</h2>
        <p className="text-center text-gray-600 mb-12">Comprehensive academic project solutions for your success</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 clay flex flex-col items-center text-center">
            <i className="bi bi-laptop text-5xl mb-6 text-primary"></i>
            <h3 className="text-xl font-semibold mb-4">Final Year Projects</h3>
            <p className="text-gray-600">Complete solutions with code, documentation, and implementation support</p>
          </div>
          <div className="p-8 clay flex flex-col items-center text-center">
            <i className="bi bi-file-earmark-code text-5xl mb-6 text-primary"></i>
            <h3 className="text-xl font-semibold mb-4">Documentation & PPT</h3>
            <p className="text-gray-600">Professional documentation and presentation preparation</p>
          </div>
          <div className="p-8 clay flex flex-col items-center text-center">
            <i className="bi bi-mortarboard text-5xl mb-6 text-primary"></i>
            <h3 className="text-xl font-semibold mb-4">Viva Preparation</h3>
            <p className="text-gray-600">Comprehensive viva guidance and support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
