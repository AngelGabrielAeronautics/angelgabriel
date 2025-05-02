import Link from 'next/link';

export default function StaticHome() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Your Journey to the Skies Begins Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Experience the thrill of flight with South Africa's premier flight school
          </p>
          <div className="space-x-4">
            <Link 
              href="/get-a-quote"
              className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Start Your Journey
            </Link>
            <Link 
              href="/courses"
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-blue-600"
            >
              View Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Why Choose Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Safety First",
                description: "Our top priority is your safety, with rigorous maintenance and training protocols."
              },
              {
                title: "Expert Instruction",
                description: "Learn from experienced instructors with thousands of flight hours."
              },
              {
                title: "Flexible Programs",
                description: "Customized training programs to fit your schedule and goals."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Take Flight?</h2>
          <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
            Book your discovery flight today and experience the freedom of flying
          </p>
          <Link 
            href="/get-a-quote"
            className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Book Discovery Flight
          </Link>
        </div>
      </section>
    </div>
  );
} 