import workcampUnited from "../assets/Courses/course_workcamp_united.jpg";

const coursesKeys = ["workcamp"];

const trainings = ["Workcamp United by Donkeys"];

const photos = [workcampUnited];

const years = [2023];

export const courses = coursesKeys.map((key, index) => ({
  course: trainings[index],
  photo: photos[index],
  year: years[index],
  location: `courses.${key}.location`,
}));
