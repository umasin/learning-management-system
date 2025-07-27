const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Our LMS</h2>
        <p className="text-lg text-gray-600 mb-6">
          Our Learning Management System (LMS) is designed to provide a seamless and interactive learning experience. Whether you're a student or an instructor, our platform offers a wide range of features to make learning effective, engaging, and accessible from anywhere.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Course Management</h3>
            <p className="text-gray-600">Admins can add courses, videos, and quizzes effortlessly, ensuring structured learning paths for students.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Learning</h3>
            <p className="text-gray-600">Engage with videos, quizzes, and downloadable PDFs to enhance your knowledge.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Progress Tracking</h3>
            <p className="text-gray-600">Students can track their course progress, and instructors can monitor engagement analytics.</p>
          </div>
        </div>

        <div className="mt-10">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;