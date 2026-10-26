import path from 'path';
import { fileURLToPath } from 'url';
import { ensureCurriculumSeeded, getAllCurriculumData } from './queries.js';

const __filename = fileURLToPath(import.meta.url);

export async function runSeed() {
  await ensureCurriculumSeeded(true);
  const data = await getAllCurriculumData();
  return {
    courses: data.courses.length,
    lessons: data.lessons.length,
    quizzes: data.quizzes.length,
    coverage: data.syllabusCoverage,
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  runSeed()
    .then((summary) => {
      console.log(
        `Database seed completed: ${summary.courses} courses, ${summary.lessons} lessons, ${summary.quizzes} quizzes. ` +
          `Syllabus coverage: ${summary.coverage.completeTopics}/${summary.coverage.totalBlueprintTopics} (${summary.coverage.coveragePercent}%).`
      );
      process.exit(0);
    })
    .catch((err) => {
      console.error('Database seed failed:', err);
      process.exit(1);
    });
}
