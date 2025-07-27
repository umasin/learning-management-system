import Course from '../models/course.model.js'
export const addCourse = async (req, res) => {
    const { title, description, thumbnail, quizAvailable, pdfLink } = req.body;
    if (!title || !description || !thumbnail || !quizAvailable || !pdfLink) {
      return res.status(400).json({ error: "Missing required fields." });
    }
    try {
      const newCourse = new Course({
        title,
        description,
        thumbnail,
        quizAvailable,
        pdfLink,
      });
      const savedCourse = await newCourse.save();
      res.status(201).json(savedCourse);
    } catch (error) {
      console.error("Error saving course:", error);
      res.status(500).json({ error: "Server error." });
    }
  };

  export const updateCourse = async(req,res) => {
    const { id } = req.params;
  const { title, description, thumbnail, quizAvailable, pdfLink } = req.body;

  if (!title || !description || !thumbnail || !quizAvailable || !pdfLink) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    // Find the course by id and update it with the new data.
    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      { title, description, thumbnail, quizAvailable, pdfLink },
      { new: true, runValidators: true } // Return the updated document and enforce schema validators.
    );

    if (!updatedCourse) {
      return res.status(404).json({ error: "Course not found." });
    }

    res.status(200).json(updatedCourse);
  } catch (error) {
    console.error("Error updating course:", error);
    res.status(500).json({ error: "Server error." });
  }
}