import React from "react";

export default function HomeSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Learn. Grow. Succeed.
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Empower yourself with a vast collection of interactive courses,
              expert instructors, and personalized learning tools designed to
              help you excel in your career.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Get Started
              </a>
              <a
                href="#"
                className="px-8 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
              >
                Explore Courses
              </a>
            </div>
          </div>
          {/* Hero Illustration */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://elearningindustry.com/wp-content/uploads/2020/07/how-to-choose-an-lms-for-your-organization.jpg"
              alt="Learning Management System Illustration"
              className="w-full rounded shadow-lg"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Interactive Courses
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Engaging and dynamic course content tailored to your learning needs.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Expert Instructors
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Learn from industry professionals and experienced educators.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Track Your Progress
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Monitor your learning journey with insightful analytics and reports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
