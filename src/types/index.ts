export type NavTab = 
  | 'home' 
  | 'explore' 
  | 'missions' 
  | 'games' 
  | 'assistant' 
  | 'creative' 
  | 'achievements' 
  | 'teacher';

export type QuestionLevel = 'Nhận biết' | 'Thông hiểu' | 'Vận dụng';

export interface QuizQuestion {
  id: string;
  missionId: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  level: QuestionLevel;
}

export interface ScenarioChoice {
  text: string;
  isSafe: boolean;
  feedback: string;
  points: number;
}

export interface Scenario {
  id: string;
  missionId: number;
  title: string;
  situation: string;
  context: string;
  choices: ScenarioChoice[];
  safeActionGuide: string;
}

export interface Mission {
  id: number;
  title: string;
  slogan: string;
  iconName: string;
  color: string;
  badgeName: string;
  estimatedMinutes: number;
  summary: string;
  learningGoals: string[];
  sections: {
    title: string;
    content: string[];
    tips?: string;
    warning?: string;
  }[];
  sortingActivity?: {
    instruction: string;
    categoryA: string;
    categoryB: string;
    items: {
      text: string;
      category: 'A' | 'B';
      explanation: string;
    }[];
  };
  scenario: Scenario;
}

export interface StudentProfile {
  id: string; // e.g., 'HS01'
  name: string; // Display name or code
  avatarIndex: number;
  completedMissions: number[];
  quizScores: Record<string, number>;
  gameHighScores: Record<string, number>;
  badgesEarned: string[];
  preTestScore?: number;
  postTestScore?: number;
  creativePoster?: {
    title: string;
    rules: string[];
    pledgeText: string;
    bgTheme: string;
    icon: string;
    createdDate: string;
  };
}

export interface LessonPlan {
  sessionNumber: number;
  title: string;
  durationMinutes: number;
  targetCompetencies: string[];
  equipmentNeeded: string[];
  mainActivities: {
    phase: string;
    timeMinutes: number;
    teacherActivity: string;
    studentActivity: string;
    assessment: string;
  }[];
  printableWorksheet: {
    title: string;
    sections: {
      heading: string;
      prompt: string;
      type: 'fill' | 'check' | 'dilemma' | 'pledge';
    }[];
  };
}
