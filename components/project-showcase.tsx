export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 px-4 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center text-primary">Sample Projects</h2>
        <p className="text-center text-gray-600 mb-12">Browse our previous successful implementations</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="clay overflow-hidden group">
            <div className="h-40 bg-blue-200 flex items-center justify-center group-hover:opacity-90 transition-all duration-300">
              <i className="bi bi-camera-video text-5xl text-primary"></i>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-3">
                <span className="clay px-3 py-1.5 rounded-full text-sm font-medium text-primary">Python</span>
                <span className="text-gray-500 text-sm">Computer Science</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Attendance System</h3>
              <p className="text-gray-600 mb-5">Face recognition based attendance system using Python and OpenCV</p>
              <a
                href="https://wa.me/918591667687?text=I'm%20interested%20in%20the%20Smart%20Attendance%20System%20project"
                className="text-primary font-medium hover:underline flex items-center"
              >
                Contact for Details <i className="bi bi-arrow-right ml-1"></i>
              </a>
            </div>
          </div>
          <div className="clay overflow-hidden group">
            <div className="h-40 bg-green-100 flex items-center justify-center group-hover:opacity-90 transition-all duration-300">
              <i className="bi bi-moisture text-5xl text-green-500"></i>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-3">
                <span className="clay px-3 py-1.5 rounded-full text-sm font-medium text-green-600">Arduino</span>
                <span className="text-gray-500 text-sm">Electronics</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">IoT Weather Station</h3>
              <p className="text-gray-600 mb-5">Arduino-based weather monitoring with cloud integration</p>
              <a
                href="https://wa.me/918591667687?text=I'm%20interested%20in%20the%20IoT%20Weather%20Station%20project"
                className="text-primary font-medium hover:underline flex items-center"
              >
                Contact for Details <i className="bi bi-arrow-right ml-1"></i>
              </a>
            </div>
          </div>
          <div className="clay overflow-hidden group">
            <div className="h-40 bg-purple-100 flex items-center justify-center group-hover:opacity-90 transition-all duration-300">
              <i className="bi bi-robot text-5xl text-purple-500"></i>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-3">
                <span className="clay px-3 py-1.5 rounded-full text-sm font-medium text-purple-600">AI/ML</span>
                <span className="text-gray-500 text-sm">Information Technology</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Chatbot</h3>
              <p className="text-gray-600 mb-5">Python + NLP based intelligent chatbot with web interface</p>
              <a
                href="https://wa.me/918591667687?text=I'm%20interested%20in%20the%20AI%20Chatbot%20project"
                className="text-primary font-medium hover:underline flex items-center"
              >
                Contact for Details <i className="bi bi-arrow-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="https://wa.me/918591667687?text=I'd%20like%20to%20see%20all%20your%20projects"
            className="clay-button px-10 py-4 font-medium inline-block text-lg"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
