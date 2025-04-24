import Image from "next/image"

export default function CommunicationSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="clay p-10 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-10 md:mb-0 md:mr-14 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-5 text-primary">Personalized Support</h2>
              <p className="text-gray-600 mb-8">
                Once your project is confirmed, you'll be assigned 1-to-1 support on WhatsApp or Email to ensure smooth
                delivery and clarity.
              </p>
              <div className="flex flex-col space-y-5">
                <div className="flex items-center">
                  <div className="clay p-3 rounded-full mr-4">
                    <i className="bi bi-person-check text-green-500 text-xl"></i>
                  </div>
                  <span className="font-medium">Dedicated project mentor</span>
                </div>
                <div className="flex items-center">
                  <div className="clay p-3 rounded-full mr-4">
                    <i className="bi bi-chat-dots text-primary text-xl"></i>
                  </div>
                  <span className="font-medium">Direct communication channel</span>
                </div>
                <div className="flex items-center">
                  <div className="clay p-3 rounded-full mr-4">
                    <i className="bi bi-lightning-charge text-purple-500 text-xl"></i>
                  </div>
                  <span className="font-medium">Quick doubt resolution</span>
                </div>
              </div>
            </div>
            <div className="clay p-5 rounded-xl flex-shrink-0 transform rotate-3 hover:rotate-0 transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Support image"
                width={256}
                height={256}
                className="rounded-lg w-64 h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
