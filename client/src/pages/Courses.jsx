import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   fetch("/api/courses")
  //     .then((res) => res.json())
  //     .then((data) => setCourses(data))
  //     .catch((err) => console.error("Error fetching courses:", err));
  // }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card key={course._id} className="rounded-2xl shadow-md overflow-hidden">
          <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
          <CardContent className="p-4">
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex justify-between">
              <button >
                <Link to={`/courses/${course._id}`}>View Course</Link>
              </button>
              {course.quizAvailable && (
                <button asChild variant="secondary">
                  <Link to={`/courses/${course._id}/quiz`}>Attach Quiz</Link>
                </button>
              )}
            </div>
            {course.pdfLink && (
              <a href={course.pdfLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">
                View PDF Material
              </a>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Courses;
