export interface QuizQuestionSeed {
  questionType: string;
  topicTag: string;
  promptEn: string;
  promptPa: string;
  optionsJson: string[];
  correctAnswer: string;
  explanationEn: string;
  explanationPa: string;
}

export interface QuizSeed {
  titleEn: string;
  titlePa: string;
  timeLimitSeconds: number;
  passingScorePercent: number;
  questions: QuizQuestionSeed[];
}

export interface TerminologySeed {
  term: string;
  punjabi: string;
  meaningEn: string;
  meaningPa: string;
}

export interface MisconceptionSeed {
  myth: string;
  truthEn: string;
  truthPa: string;
}

export interface LessonSeed {
  slug: string;
  orderIndex: number;
  titleEn: string;
  titlePa: string;
  objectivesJson: string[];
  prerequisitesJson: string[];
  childAnalogyEn: string;
  childAnalogyPa: string;
  technicalExplanationEn: string;
  technicalExplanationPa: string;
  practicalExampleEn: string;
  practicalExamplePa: string;
  codeDemo: string;
  misconceptionsJson: MisconceptionSeed[];
  terminologyJson: TerminologySeed[];
  interactiveLabId: string;
  exercisePromptEn: string;
  exercisePromptPa: string;
  summaryEn: string;
  summaryPa: string;
  furtherReadingJson: string[];
  quiz: QuizSeed;
}

export interface ModuleSeed {
  orderIndex: number;
  titleEn: string;
  titlePa: string;
  summaryEn: string;
  summaryPa: string;
  lessons: LessonSeed[];
}

export interface SeedCourse {
  slug: string;
  levelNumber: number;
  titleEn: string;
  titlePa: string;
  descriptionEn: string;
  descriptionPa: string;
  category: string;
  estimatedHours: number;
  modules: ModuleSeed[];
}

export interface SyllabusLevelBlueprint {
  level: number;
  titleEn: string;
  titlePa: string;
  topics: string[];
}
