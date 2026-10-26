export interface SeedCourse {
  slug: string;
  levelNumber: number;
  titleEn: string;
  titlePa: string;
  descriptionEn: string;
  descriptionPa: string;
  category: string;
  estimatedHours: number;
  modules: Array<{
    orderIndex: number;
    titleEn: string;
    titlePa: string;
    summaryEn: string;
    summaryPa: string;
    lessons: Array<{
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
      misconceptionsJson: Array<{ myth: string; truthEn: string; truthPa: string }>;
      terminologyJson: Array<{ term: string; punjabi: string; meaningEn: string; meaningPa: string }>;
      interactiveLabId: string;
      exercisePromptEn: string;
      exercisePromptPa: string;
      summaryEn: string;
      summaryPa: string;
      furtherReadingJson: string[];
      quiz: {
        titleEn: string;
        titlePa: string;
        timeLimitSeconds: number;
        passingScorePercent: number;
        questions: Array<{
          questionType: string;
          topicTag: string;
          promptEn: string;
          promptPa: string;
          optionsJson: string[];
          correctAnswer: string;
          explanationEn: string;
          explanationPa: string;
        }>;
      };
    }>;
  }>;
}

export const INITIAL_ACHIEVEMENTS = [
  {
    code: 'FIRST_STEP',
    titleEn: 'First Binary Spark',
    titlePa: 'ਪਹਿਲੀ ਬਾਈਨਰੀ ਚੰਗਿਆੜੀ (First Binary Spark)',
    descriptionEn: 'Completed your very first Computer Science lesson.',
    descriptionPa: 'ਤੁਸੀਂ ਆਪਣਾ ਪਹਿਲਾ ਕੰਪਿਊਟਰ ਸਾਇੰਸ ਪਾਠ ਪੂਰਾ ਕੀਤਾ।',
    xpReward: 100,
    iconName: 'Zap',
  },
  {
    code: 'BINARY_MASTER',
    titleEn: 'Architect of 0s and 1s',
    titlePa: '0 ਅਤੇ 1 ਦਾ ਮਾਹਿਰ (Binary Architect)',
    descriptionEn: 'Mastered binary numbers, logic gates, and assembly basics.',
    descriptionPa: 'ਬਾਈਨਰੀ ਨੰਬਰਾਂ, ਲੌਜਿਕ ਗੇਟਾਂ ਅਤੇ ਅਸੈਂਬਲੀ ਭਾਸ਼ਾ ਵਿੱਚ ਮੁਹਾਰਤ ਹਾਸਲ ਕੀਤੀ।',
    xpReward: 250,
    iconName: 'Cpu',
  },
  {
    code: 'QUIZ_ACE',
    titleEn: 'Perfect Logic Score',
    titlePa: 'ਪੂਰੇ ਅੰਕਾਂ ਵਾਲਾ ਵਿਦਿਆਰਥੀ (Quiz Ace)',
    descriptionEn: 'Scored 80% or higher on a technical assessment quiz.',
    descriptionPa: 'ਕਿਸੇ ਇਮਤਿਹਾਨ ਜਾਂ ਕੁਇਜ਼ ਵਿੱਚ 80% ਜਾਂ ਵੱਧ ਅੰਕ ਪ੍ਰਾਪਤ ਕੀਤੇ।',
    xpReward: 200,
    iconName: 'Award',
  },
  {
    code: 'TASK_DISCIPLINE',
    titleEn: 'Consistent Scholar',
    titlePa: 'ਨਿਯਮਤ ਵਿਦਿਆਰਥੀ (Consistent Scholar)',
    descriptionEn: 'Completed study tasks in your personal learning planner.',
    descriptionPa: 'ਆਪਣੇ ਸਟੱਡੀ ਪਲੈਨਰ ਵਿੱਚ ਪੜ੍ਹਾਈ ਦੇ ਟਾਸਕ ਪੂਰੇ ਕੀਤੇ।',
    xpReward: 150,
    iconName: 'CheckCircle2',
  },
  {
    code: 'CURRICULUM_EXPLORER',
    titleEn: 'Full-Stack Foundation',
    titlePa: 'ਕੰਪਿਊਟਰ ਵਿਗਿਆਨ ਖੋਜੀ (Curriculum Explorer)',
    descriptionEn: 'Completed 3 or more lessons across hardware, math, and algorithms.',
    descriptionPa: 'ਹਾਰਡਵੇਅਰ, ਗਣਿਤ ਅਤੇ ਐਲਗੋਰਿਦਮ ਦੇ 3 ਜਾਂ ਵੱਧ ਪਾਠ ਪੂਰੇ ਕੀਤੇ।',
    xpReward: 350,
    iconName: 'Trophy',
  },
];

export const SEED_COURSES: SeedCourse[] = [
  {
    slug: 'level-1-computer-introduction',
    levelNumber: 1,
    titleEn: 'Level 1: Computer Introduction & IPO-S Model',
    titlePa: 'ਲੈਵਲ 1: ਕੰਪਿਊਟਰ ਦੀ ਜਾਣ-ਪਛਾਣ (Computer Introduction)',
    descriptionEn:
      'What a computer actually is, history & generations, Analog vs Digital systems, Hardware vs Software, and the Input-Process-Output-Storage pipeline.',
    descriptionPa:
      'ਕੰਪਿਊਟਰ ਅਸਲ ਵਿੱਚ ਕੀ ਹੈ, ਇਸਦਾ ਇਤਿਹਾਸ, Hardware ਅਤੇ Software ਦਾ ਫ਼ਰਕ, ਅਤੇ Input-Process-Output-Storage (IPO-S) ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ।',
    category: 'core-cs',
    estimatedHours: 5,
    modules: [
      {
        orderIndex: 1,
        titleEn: 'Foundations of Computing Machines',
        titlePa: 'ਕੰਪਿਊਟਿੰਗ ਮਸ਼ੀਨਾਂ ਦੀਆਂ ਬੁਨਿਆਦਾਂ',
        summaryEn: 'Understand how deterministic electronic machines transform raw data into meaningful information.',
        summaryPa: 'ਸਮਝੋ ਕਿ ਇੱਕ ਇਲੈਕਟ੍ਰਾਨਿਕ ਮਸ਼ੀਨ ਕੱਚੇ ਡਾਟੇ (Raw Data) ਨੂੰ ਕੰਮ ਦੀ ਜਾਣਕਾਰੀ (Information) ਵਿੱਚ ਕਿਵੇਂ ਬਦਲਦੀ ਹੈ।',
        lessons: [
          {
            slug: 'what-is-a-computer-ipos',
            orderIndex: 1,
            titleEn: '1.1 What is a Computer? Input, Process, Output & Storage',
            titlePa: '1.1 ਕੰਪਿਊਟਰ ਕੀ ਹੈ? (Input, Process, Output & Storage)',
            objectivesJson: [
              'Define a computer using the Input-Process-Output-Storage (IPO-S) model',
              'Distinguish between raw Data and processed Information',
              'Compare Analog, Digital, and Hybrid computers with real-world examples',
              'Understand the 5 Generations of Computers from Vacuum Tubes to ULSI',
            ],
            prerequisitesJson: ['No prior background required — absolute beginner friendly'],
            childAnalogyEn:
              'Imagine a Sugarcane Juice Machine (ਗੰਨੇ ਦੇ ਰਸ ਵਾਲੀ ਮਸ਼ੀਨ) in your village! First, you put raw sugarcane sticks inside — that is INPUT. Inside, the heavy rollers crush and filter the cane — that is PROCESSING. Fresh sweet juice pours into a glass — that is OUTPUT. And if you keep extra juice in a cold thermos for the evening — that is STORAGE! A computer does the exact same thing, except instead of sugarcane, it takes clicks, numbers, and words!',
            childAnalogyPa:
              'ਕਲਪਨਾ ਕਰੋ ਤੁਹਾਡੇ ਪਿੰਡ ਵਿੱਚ ਗੰਨੇ ਦੇ ਰਸ ਵਾਲੀ ਮਸ਼ੀਨ ਲੱਗੀ ਹੈ! ਜਦੋਂ ਤੁਸੀਂ ਉਸ ਵਿੱਚ ਸਾਬਤ ਗੰਨਾ ਪਾਉਂਦੇ ਹੋ — ਉਸਨੂੰ INPUT ਕਹਿੰਦੇ ਹਨ। ਮਸ਼ੀਨ ਦੇ ਅੰਦਰ ਰੋਲਰ ਗੰਨੇ ਨੂੰ ਪੀੜਦੇ ਹਨ — ਉਸਨੂੰ PROCESSING ਕਹਿੰਦੇ ਹਨ। ਜਦੋਂ ਠੰਢਾ ਮਿੱਠਾ ਰਸ ਗਿਲਾਸ ਵਿੱਚ ਬਾਹਰ ਆਉਂਦਾ ਹੈ — ਉਹ OUTPUT ਹੈ। ਅਤੇ ਜੇਕਰ ਤੁਸੀਂ ਉਹ ਰਸ ਫਰਿੱਜ ਜਾਂ ਬੋਤਲ ਵਿੱਚ ਬਾਅਦ ਲਈ ਸੰਭਾਲ ਕੇ ਰੱਖ ਲੈਂਦੇ ਹੋ — ਤਾਂ ਉਹ STORAGE (Memory) ਹੈ! ਕੰਪਿਊਟਰ ਵੀ ਬਿਲਕੁਲ ਇਸੇ ਤਰ੍ਹਾਂ Data ਲੈਂਦਾ ਹੈ, CPU ਨਾਲ Process ਕਰਦਾ ਹੈ ਅਤੇ Screen ਉੱਤੇ Output ਦਿੰਦਾ ਹੈ।',
            technicalExplanationEn:
              'A Computer is a programmable electronic device that accepts raw data (Input), manipulates it according to a stored sequence of instructions called a program (Processing via the CPU), produces human-readable or machine-actionable results (Output), and retains data for future retrieval (Storage).\n\n1. History & 5 Generations:\n• 1st Gen (1940–1956): Vacuum Tubes (ENIAC) — massive heat, machine language.\n• 2nd Gen (1956–1963): Transistors — smaller, faster, Assembly language.\n• 3rd Gen (1964–1971): Integrated Circuits (ICs) — silicon chips, multiprogramming.\n• 4th Gen (1971–Present): Microprocessors (VLSI) — entire CPU on one chip.\n• 5th Gen (Present & Beyond): ULSI, Parallel Processing, and Neural Accelerators.',
            technicalExplanationPa:
              'ਕੰਪਿਊਟਰ ਇੱਕ Programmable ਇਲੈਕਟ੍ਰਾਨਿਕ ਮਸ਼ੀਨ ਹੈ ਜੋ ਕੱਚੇ ਡਾਟੇ (Raw Data) ਨੂੰ Input ਵਜੋਂ ਸਵੀਕਾਰ ਕਰਦੀ ਹੈ, Memory ਵਿੱਚ ਸਟੋਰ ਕੀਤੀਆਂ ਹਦਾਇਤਾਂ (Instructions / Program) ਅਨੁਸਾਰ CPU ਰਾਹੀਂ ਉਸਨੂੰ Process ਕਰਦੀ ਹੈ, ਅਤੇ ਸਾਨੂੰ ਨਤੀਜਾ (Output) ਦਿੰਦੀ ਹੈ।\n\nਕੰਪਿਊਟਰ ਦੀਆਂ 5 ਪੀੜ੍ਹੀਆਂ (5 Generations):\n1. ਪਹਿਲੀ ਪੀੜ੍ਹੀ: Vacuum Tubes (ਬਹੁਤ ਵੱਡੇ ਆਕਾਰ ਦੇ ਕੰਪਿਊਟਰ ਜਿਵੇਂ ENIAC)।\n2. ਦੂਜੀ ਪੀੜ੍ਹੀ: Transistors (ਛੋਟੇ ਅਤੇ ਤੇਜ਼, Assembly ਭਾਸ਼ਾ ਦੀ ਵਰਤੋਂ)।\n3. ਤੀਜੀ ਪੀੜ੍ਹੀ: Integrated Circuits (IC) — ਸਿਲੀਕਾਨ ਚਿੱਪ ਉੱਤੇ ਸਰਕਟ।\n4. ਚੌਥੀ ਪੀੜ੍ਹੀ: Microprocessors (VLSI) — ਇੱਕੋ ਚਿੱਪ ਉੱਤੇ ਪੂਰਾ CPU।\n5. ਪੰਜਵੀਂ ਪੀੜ੍ਹੀ: ULSI, Multicore Processors ਅਤੇ AI Hardware।',
            practicalExampleEn:
              'When you withdraw ₹500 from an ATM: Entering your PIN and amount on the keypad is INPUT. The bank server checking your balance and subtracting ₹500 is PROCESSING. The cash dispenser giving you the ₹500 note and printed receipt is OUTPUT. Updating your passbook balance permanently in the bank database is STORAGE.',
            practicalExamplePa:
              'ਜਦੋਂ ਤੁਸੀਂ ATM ਤੋਂ ₹500 ਕਢਵਾਉਂਦੇ ਹੋ: ਬਟਨਾਂ ਨਾਲ ਆਪਣਾ PIN ਅਤੇ ਰਕਮ ਭਰਨਾ INPUT ਹੈ। ਕੰਪਿਊਟਰ ਵੱਲੋਂ ਤੁਹਾਡਾ ਖਾਤਾ ਚੈੱਕ ਕਰਕੇ ₹500 ਘਟਾਉਣਾ PROCESSING ਹੈ। ਮਸ਼ੀਨ ਵਿੱਚੋਂ ₹500 ਦਾ ਨੋਟ ਅਤੇ ਪਰਚੀ ਬਾਹਰ ਆਉਣਾ OUTPUT ਹੈ। ਅਤੇ ਬੈਂਕ ਦੇ Database ਵਿੱਚ ਨਵਾਂ ਬੈਲੇਂਸ ਪੱਕੇ ਤੌਰ ਤੇ ਸੇਵ ਹੋਣਾ STORAGE ਹੈ।',
            codeDemo: `// IPO-S Pipeline Demonstration in TypeScript / Pseudocode
function sugarcaneComputerPipeline(rawInputNumbers: number[]): string {
  // 1. INPUT: Receive raw numbers from keyboard/sensor
  const data = rawInputNumbers;

  // 2. PROCESS: CPU Arithmetic Logic Unit (ALU) calculates sum & average
  let total = 0;
  for (const num of data) {
    total = total + num;
  }
  const average = total / data.length;

  // 3. STORAGE: Save result in Memory Register
  const storedRecord = { count: data.length, sum: total, avg: average };

  // 4. OUTPUT: Format information for the user screen
  return \`Processed \${storedRecord.count} items -> Average = \${storedRecord.avg}\`;
}`,
            misconceptionsJson: [
              {
                myth: 'The monitor screen is the computer.',
                truthEn: 'The monitor is only an Output peripheral. The actual computing happens on the Motherboard inside the system unit.',
                truthPa: 'ਮੌਨੀਟਰ ਸਿਰਫ਼ ਇੱਕ Output ਡਿਵਾਈਸ ਹੈ। ਅਸਲ ਕੰਪਿਊਟਿੰਗ ਸਿਸਟਮ ਦੇ ਅੰਦਰ Motherboard ਅਤੇ CPU ਵਿੱਚ ਹੁੰਦੀ ਹੈ।',
              },
              {
                myth: 'Computers have natural intelligence and can think on their own.',
                truthEn: 'Computers have zero common sense (GIGO: Garbage In, Garbage Out). They strictly execute deterministic binary instructions.',
                truthPa: 'ਕੰਪਿਊਟਰ ਕੋਲ ਆਪਣੀ ਕੋਈ ਅਕਲ ਨਹੀਂ ਹੁੰਦੀ। ਇਹ ਸਿਰਫ਼ ਸਾਡੇ ਦਿੱਤੇ ਹੁਕਮਾਂ (Instructions) ਦੀ ਪਾਲਣਾ ਕਰਦਾ ਹੈ (Garbage In, Garbage Out)।',
              },
            ],
            terminologyJson: [
              {
                term: 'Hardware',
                punjabi: 'ਹਾਰਡਵੇਅਰ',
                meaningEn: 'Physical electronic and mechanical parts you can touch (CPU, RAM, Keyboard).',
                meaningPa: 'ਕੰਪਿਊਟਰ ਦੇ ਉਹ ਭੌਤਿਕ ਹਿੱਸੇ ਜਿਨ੍ਹਾਂ ਨੂੰ ਅਸੀਂ ਹੱਥ ਲਗਾ ਕੇ ਛੂਹ ਸਕਦੇ ਹਾਂ।',
              },
              {
                term: 'Software',
                punjabi: 'ਸੌਫਟਵੇਅਰ',
                meaningEn: 'Intangible set of instructions/programs that tell the hardware what to do.',
                meaningPa: 'ਹਦਾਇਤਾਂ ਅਤੇ ਪ੍ਰੋਗਰਾਮਾਂ ਦਾ ਸਮੂਹ ਜੋ ਹਾਰਡਵੇਅਰ ਨੂੰ ਦੱਸਦਾ ਹੈ ਕਿ ਕੀ ਕੰਮ ਕਰਨਾ ਹੈ।',
              },
              {
                term: 'Data vs Information',
                punjabi: 'ਡਾਟਾ ਅਤੇ ਜਾਣਕਾਰੀ',
                meaningEn: 'Data is unorganized raw facts (e.g., "98, 102"); Information is processed data with context ("Patient fever is 102°F").',
                meaningPa: 'Data ਕੱਚੇ ਅੰਕੜੇ ਹੁੰਦੇ ਹਨ, ਜਦਕਿ Process ਹੋਣ ਤੋਂ ਬਾਅਦ ਬਣੀ ਸਾਰਥਕ ਚੀਜ਼ ਨੂੰ Information ਕਹਿੰਦੇ ਹਨ।',
              },
            ],
            interactiveLabId: 'hardware-explorer',
            exercisePromptEn:
              'Open the Hardware Explorer Lab and click on the CPU, RAM, and SSD to trace how Input travels through RAM into the CPU and gets saved to Storage.',
            exercisePromptPa:
              'Hardware Explorer Lab ਖੋਲ੍ਹੋ ਅਤੇ CPU, RAM ਅਤੇ SSD ਉੱਤੇ ਕਲਿੱਕ ਕਰਕੇ ਦੇਖੋ ਕਿ ਡਾਟਾ ਇੱਕ ਹਿੱਸੇ ਤੋਂ ਦੂਜੇ ਹਿੱਸੇ ਤੱਕ ਕਿਵੇਂ ਜਾਂਦਾ ਹੈ।',
            summaryEn:
              'Every computer—from a smartwatch to a cloud supercomputer—operates on the IPO-S cycle: Input -> Process -> Output -> Storage.',
            summaryPa:
              'ਦੁਨੀਆ ਦਾ ਹਰ ਕੰਪਿਊਟਰ—ਭਾਵੇਂ ਘੜੀ ਹੋਵੇ ਜਾਂ ਸੁਪਰਕੰਪਿਊਟਰ—IPO-S (Input, Process, Output, Storage) ਦੇ ਸਿਧਾਂਤ ਉੱਤੇ ਹੀ ਕੰਮ ਕਰਦਾ ਹੈ।',
            furtherReadingJson: [
              'Von Neumann Architecture (1945 First Draft of a Report on the EDVAC)',
              'Charles Babbage Analytical Engine & Ada Lovelace Notes',
            ],
            quiz: {
              titleEn: 'Level 1 Assessment: Computer Fundamentals & IPO-S',
              titlePa: 'ਲੈਵਲ 1 ਟੈਸਟ: ਕੰਪਿਊਟਰ ਦੀਆਂ ਬੁਨਿਆਦਾਂ',
              timeLimitSeconds: 300,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'IPO-S Model',
                  promptEn: 'In the IPO-S model, what stage occurs when the CPU adds two numbers together?',
                  promptPa: 'IPO-S ਮਾਡਲ ਵਿੱਚ, ਜਦੋਂ CPU ਦੋ ਨੰਬਰਾਂ ਨੂੰ ਜੋੜਦਾ ਹੈ ਤਾਂ ਉਸ ਪੜਾਅ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?',
                  optionsJson: ['Input', 'Processing', 'Output', 'Secondary Storage'],
                  correctAnswer: 'Processing',
                  explanationEn: 'Arithmetic and logical operations inside the CPU represent the Processing stage.',
                  explanationPa: 'CPU ਦੇ ਅੰਦਰ ਗਣਿਤ ਜਾਂ ਤਰਕ (Logic) ਦਾ ਕੰਮ ਹੋਣ ਨੂੰ Processing ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Generations',
                  promptEn: 'Which electronic component replaced Vacuum Tubes in the Second Generation of computers?',
                  promptPa: 'ਦੂਜੀ ਪੀੜ੍ਹੀ (2nd Generation) ਦੇ ਕੰਪਿਊਟਰਾਂ ਵਿੱਚ Vacuum Tubes ਦੀ ਥਾਂ ਕਿਸ ਤਕਨੀਕ ਨੇ ਲਈ?',
                  optionsJson: ['Transistors', 'ULSI Microprocessors', 'Vacuum Valves', 'Quantum Qubits'],
                  correctAnswer: 'Transistors',
                  explanationEn: 'Invented at Bell Labs in 1947, Transistors powered 2nd-generation computers, making them smaller and more reliable.',
                  explanationPa: 'Transistors ਨੇ ਦੂਜੀ ਪੀੜ੍ਹੀ ਦੇ ਕੰਪਿਊਟਰਾਂ ਨੂੰ ਛੋਟਾ, ਤੇਜ਼ ਅਤੇ ਘੱਟ ਗਰਮ ਹੋਣ ਵਾਲਾ ਬਣਾਇਆ।',
                },
                {
                  questionType: 'true_false',
                  topicTag: 'Hardware vs Software',
                  promptEn: 'True or False: Operating System (like Linux or Windows) is an example of Computer Hardware.',
                  promptPa: 'ਸਹੀ ਜਾਂ ਗਲਤ: Operating System (ਜਿਵੇਂ Linux ਜਾਂ Windows) ਕੰਪਿਊਟਰ Hardware ਦੀ ਉਦਾਹਰਣ ਹੈ।',
                  optionsJson: ['True', 'False'],
                  correctAnswer: 'False',
                  explanationEn: 'An Operating System is System Software—a collection of instructions, not a physical touchable component.',
                  explanationPa: 'Operating System ਇੱਕ System Software ਹੈ, ਨਾ ਕਿ ਹੱਥ ਨਾਲ ਛੂਹਿਆ ਜਾਣ ਵਾਲਾ Hardware।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Data vs Information',
                  promptEn: 'What does the acronym GIGO stand for in Computer Science?',
                  promptPa: 'ਕੰਪਿਊਟਰ ਸਾਇੰਸ ਵਿੱਚ GIGO ਦਾ ਪੂਰਾ ਨਾਮ ਕੀ ਹੈ?',
                  optionsJson: [
                    'Garbage In, Garbage Out',
                    'Gigabyte Input, Gigabyte Output',
                    'General Instruction Gate Operation',
                    'Global Internet Gateway Object',
                  ],
                  correctAnswer: 'Garbage In, Garbage Out',
                  explanationEn: 'GIGO means that if invalid or flawed data is input into a deterministic system, the output will also be flawed.',
                  explanationPa: 'GIGO ਦਾ ਮਤਲਬ ਹੈ ਕਿ ਜੇਕਰ ਤੁਸੀਂ ਕੰਪਿਊਟਰ ਨੂੰ ਗਲਤ Input ਦੇਵੋਗੇ, ਤਾਂ ਨਤੀਜਾ (Output) ਵੀ ਗਲਤ ਹੀ ਆਵੇਗਾ।',
                },
                {
                  questionType: 'fill_blank',
                  topicTag: 'Computer Types',
                  promptEn: 'A computer that measures continuous physical quantities like voltage or temperature is called an ________ computer. (Type: Analog or Digital)',
                  promptPa: 'ਉਹ ਕੰਪਿਊਟਰ ਜੋ ਲਗਾਤਾਰ ਬਦਲਣ ਵਾਲੀਆਂ ਭੌਤਿਕ ਮਾਤਰਾਵਾਂ (ਜਿਵੇਂ ਤਾਪਮਾਨ ਜਾਂ ਵੋਲਟੇਜ) ਨੂੰ ਮਾਪਦਾ ਹੈ, ਉਸਨੂੰ ________ ਕੰਪਿਊਟਰ ਕਹਿੰਦੇ ਹਨ। (Analog ਜਾਂ Digital)',
                  optionsJson: ['Analog', 'Digital'],
                  correctAnswer: 'Analog',
                  explanationEn: 'Analog computers work with continuous physical signals, whereas Digital computers work with discrete binary digits (0 and 1).',
                  explanationPa: 'Analog ਕੰਪਿਊਟਰ ਲਗਾਤਾਰ ਸਿਗਨਲਾਂ ਉੱਤੇ ਕੰਮ ਕਰਦੇ ਹਨ, ਜਦਕਿ Digital ਕੰਪਿਊਟਰ 0 ਅਤੇ 1 ਉੱਤੇ ਕੰਮ ਕਰਦੇ ਹਨ।',
                },
              ],
            },
          },
          {
            slug: 'computer-characteristics-hardware-software-terminology',
            orderIndex: 2,
            titleEn: '1.2 Computer Types, Characteristics, Applications & Hardware vs Software',
            titlePa: '1.2 ਕੰਪਿਊਟਰ ਦੀਆਂ ਕਿਸਮਾਂ, ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ, ਵਰਤੋਂ ਅਤੇ Hardware ਬਨਾਮ Software',
            objectivesJson: [
              'Classify Supercomputers, Mainframes, Minicomputers, and Microcomputers',
              'Explain key computer characteristics: Speed, Accuracy, Diligence, Versatility, and Automation',
              'Contrast System Software, Application Software, and Firmware across real domains',
              'Master essential computer terminology (Bit, Byte, Bus, Peripheral, Clock Speed)',
            ],
            prerequisitesJson: ['1.1 What is a Computer? Input, Process, Output & Storage'],
            childAnalogyEn:
              'Think of Vehicles on the Road (ਗੱਡੀਆਂ ਦੀਆਂ ਕਿਸਮਾਂ):\n• A Microcomputer (your iPhone or Laptop) is like a personal Scooter or Car—built for one person at a time.\n• A Mainframe Computer is like a 20-coach Indian Railways Train—carrying thousands of bank transactions at the exact same second without stopping!\n• A Supercomputer is like a supersonic Rocket—solving massive weather and space equations billions of times per second!\nAnd what about Diligence (ਅਣਥੱਕ ਮਿਹਨਤ)? If a child writes multiplication tables 1,000 times, their hand gets tired by page 5. A computer can calculate the 10-millionth sum with the exact same speed and accuracy as the very first sum!',
            childAnalogyPa:
              'ਕੰਪਿਊਟਰ ਦੀਆਂ ਕਿਸਮਾਂ ਨੂੰ ਆਵਾਜਾਈ ਦੇ ਸਾਧਨਾਂ ਵਾਂਗ ਸਮਝੋ:\n• Microcomputer (ਤੁਹਾਡਾ ਫ਼ੋਨ ਜਾਂ ਲੈਪਟਾਪ): ਇਹ ਇੱਕ ਨਿੱਜੀ ਕਾਰ ਜਾਂ ਮੋਟਰਸਾਈਕਲ ਵਾਂਗ ਹੈ ਜੋ ਇੱਕ ਵਿਅਕਤੀ ਦੇ ਰੋਜ਼ਾਨਾ ਕੰਮ ਆਉਂਦਾ ਹੈ।\n• Mainframe Computer: ਇਹ ਇੱਕ ਲੰਬੀ ਰੇਲਗੱਡੀ ਵਾਂਗ ਹੈ ਜਿਸ ਵਿੱਚ ਹਜ਼ਾਰਾਂ ਯਾਤਰੀ (ਜਿਵੇਂ ਬੈਂਕ ਅਤੇ ਰੇਲਵੇ ਦੀਆਂ ਟਿਕਟਾਂ ਦਾ ਡਾਟਾ) ਇੱਕੋ ਵੇਲੇ ਸਫ਼ਰ ਕਰਦੇ ਹਨ।\n• Supercomputer: ਇਹ ਪੁਲਾੜ ਵਿੱਚ ਜਾਣ ਵਾਲੇ ਰਾਕੇਟ ਵਾਂਗ ਹੈ ਜੋ ਮੌਸਮ ਦੀ ਭਵਿੱਖਬਾਣੀ ਅਤੇ ਵਿਗਿਆਨਕ ਖੋਜਾਂ ਲਈ ਖਰਬਾਂ ਗਣਨਾਵਾਂ ਇੱਕ ਸਕਿੰਟ ਵਿੱਚ ਕਰਦਾ ਹੈ!\n• Diligence (ਅਣਥੱਕਤਾ): ਇਨਸਾਨ 2 ਘੰਟੇ ਹਿਸਾਬ ਕਰਕੇ ਥੱਕ ਜਾਂਦਾ ਹੈ, ਪਰ ਕੰਪਿਊਟਰ ਬਿਨਾਂ ਥੱਕੇ ਅਤੇ ਬਿਨਾਂ ਬੋਰ ਹੋਏ ਕਰੋੜਾਂ ਵਾਰ ਬਿਲਕੁਲ ਸਹੀ ਹਿਸਾਬ ਕਰਦਾ ਹੈ!',
            technicalExplanationEn:
              '1. Classification by Scale & Architecture:\n• Supercomputers (e.g., Frontier, PARAM Siddhi): Measure performance in PetaFLOPS/ExaFLOPS using thousands of parallel CPU/GPU nodes.\n• Mainframe Computers (e.g., IBM zSystems): Engineered for 99.999% reliability (RAS), redundant I/O channels, and high-volume transaction processing.\n• Minicomputers / Midrange Servers: Multi-user departmental systems.\n• Microcomputers: Desktops, laptops, smartphones, and tablets built around a single microprocessor SoC.\n\n2. Core Characteristics:\n• Speed (GHz / Nanoseconds), Accuracy (deterministic IEEE-754 math), Diligence (zero fatigue), Versatility (multi-domain execution), and Storage Permanence.\n\n3. Hardware vs Software vs Firmware:\n• Hardware: Physical silicon, PCBs, and peripherals.\n• Software: System software (OS, drivers) and Application software (browsers, databases).\n• Firmware: Low-level control software embedded in non-volatile ROM/Flash.',
            technicalExplanationPa:
              '1. ਆਕਾਰ ਅਤੇ ਤਾਕਤ ਅਨੁਸਾਰ ਕੰਪਿਊਟਰ ਦੀਆਂ ਕਿਸਮਾਂ:\n• Supercomputer: ਮੌਸਮ ਵਿਗਿਆਨ, ਪ੍ਰਮਾਣੂ ਖੋਜ ਅਤੇ AI ਲਈ ਵਰਤੇ ਜਾਣ ਵਾਲੇ ਸਭ ਤੋਂ ਤੇਜ਼ ਕੰਪਿਊਟਰ (ਜਿਵੇਂ ਭਾਰਤ ਦਾ PARAM)।\n• Mainframe: ਬੈਂਕਾਂ, ਬੀਮਾ ਕੰਪਨੀਆਂ ਅਤੇ ਰੇਲਵੇ ਵਿੱਚ ਲੱਖਾਂ ਲੋਕਾਂ ਦਾ ਡਾਟਾ ਇੱਕੋ ਸਮੇਂ ਸੰਭਾਲਣ ਵਾਲੇ ਕੰਪਿਊਟਰ।\n• Microcomputer: ਸਾਡੇ ਘਰਾਂ ਅਤੇ ਦਫ਼ਤਰਾਂ ਵਿੱਚ ਵਰਤੇ ਜਾਣ ਵਾਲੇ ਲੈਪਟਾਪ, ਡੈਸਕਟਾਪ ਅਤੇ ਸਮਾਰਟਫ਼ੋਨ।\n\n2. ਕੰਪਿਊਟਰ ਦੀਆਂ ਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ (Characteristics):\n• Speed (ਤੇਜ਼ ਰਫ਼ਤਾਰ), Accuracy (ਸ਼ੁੱਧਤਾ), Diligence (ਬਿਨਾਂ ਥੱਕੇ ਲਗਾਤਾਰ ਕੰਮ ਕਰਨਾ), ਅਤੇ Versatility (ਇੱਕੋ ਸਮੇਂ ਕਈ ਤਰ੍ਹਾਂ ਦੇ ਕੰਮ ਕਰਨ ਦੀ ਸਮਰੱਥਾ)।',
            practicalExampleEn:
              'When India’s meteorological department predicts a monsoon cyclone 5 days in advance, a Supercomputer crunches satellite pressure and wind matrices. Meanwhile, when you check that weather alert on your iPhone app, you are using a Microcomputer!',
            practicalExamplePa:
              'ਜਦੋਂ ਮੌਸਮ ਵਿਭਾਗ 5 ਦਿਨ ਪਹਿਲਾਂ ਮੀਂਹ ਅਤੇ ਤੂਫ਼ਾਨ ਦਾ ਅੰਦਾਜ਼ਾ ਲਗਾਉਂਦਾ ਹੈ ਤਾਂ ਉਹ Supercomputer ਵਰਤਦਾ ਹੈ, ਅਤੇ ਜਦੋਂ ਤੁਸੀਂ ਆਪਣੇ ਫ਼ੋਨ ਉੱਤੇ ਮੌਸਮ ਦੇਖਦੇ ਹੋ ਤਾਂ ਤੁਸੀਂ Microcomputer ਵਰਤ ਰਹੇ ਹੁੰਦੇ ਹੋ!',
            codeDemo: `// Demonstrating Diligence, Speed & Classification Metrics
interface ComputerSystemProfile {
  category: 'Supercomputer' | 'Mainframe' | 'Minicomputer' | 'Microcomputer';
  clockSpeedGHz: number;
  parallelCores: number;
  primaryUseCase: string;
}

const systems: ComputerSystemProfile[] = [
  { category: 'Supercomputer', clockSpeedGHz: 3.8, parallelCores: 8_000_000, primaryUseCase: 'Climate & Molecular Simulation' },
  { category: 'Mainframe', clockSpeedGHz: 5.2, parallelCores: 200, primaryUseCase: 'Global Banking & Airline Reservations' },
  { category: 'Microcomputer', clockSpeedGHz: 3.78, parallelCores: 6, primaryUseCase: 'Personal Mobile & Desktop Computing' },
];`,
            misconceptionsJson: [
              {
                myth: 'A Supercomputer is just a gaming PC with a better graphics card.',
                truthEn: 'Supercomputers are massive clusters of thousands of interconnected server nodes linked via ultra-low-latency fiber interconnects (InfiniBand) sharing distributed memory.',
                truthPa: 'ਸੁਪਰਕੰਪਿਊਟਰ ਕੋਈ ਆਮ ਇਕੱਲਾ PC ਨਹੀਂ ਹੁੰਦਾ, ਸਗੋਂ ਹਜ਼ਾਰਾਂ ਸਰਵਰਾਂ ਨੂੰ ਤੇਜ਼ ਫਾਈਬਰ ਨੈੱਟਵਰਕ ਨਾਲ ਜੋੜ ਕੇ ਬਣਾਇਆ ਗਿਆ ਵਿਸ਼ਾਲ ਸਿਸਟਮ ਹੁੰਦਾ ਹੈ।',
              },
            ],
            terminologyJson: [
              {
                term: 'Diligence',
                punjabi: 'ਅਣਥੱਕਤਾ (Diligence)',
                meaningEn: 'The ability of a computer to perform millions of repetitive calculations without fatigue or loss of concentration.',
                meaningPa: 'ਬਿਨਾਂ ਥੱਕੇ ਅਤੇ ਬਿਨਾਂ ਗਲਤੀ ਕੀਤੇ ਲਗਾਤਾਰ ਲੱਖਾਂ ਗਣਨਾਵਾਂ ਕਰਨ ਦੀ ਸਮਰੱਥਾ।',
              },
              {
                term: 'FLOPS',
                punjabi: 'ਫਲੌਪਸ (Floating Point Operations Per Second)',
                meaningEn: 'Metric used to measure the numerical computing performance of supercomputers and GPUs.',
                meaningPa: 'ਸੁਪਰਕੰਪਿਊਟਰ ਦੀ ਗਣਿਤ ਹੱਲ ਕਰਨ ਦੀ ਰਫ਼ਤਾਰ ਮਾਪਣ ਦੀ ਇਕਾਈ।',
              },
              {
                term: 'Peripheral Device',
                punjabi: 'ਪੈਰੀਫੇਰਲ ਡਿਵਾਈਸ (ਬਾਹਰੀ ਯੰਤਰ)',
                meaningEn: 'Any auxiliary input, output, or storage device connected to the computer (Keyboard, Mouse, Printer).',
                meaningPa: 'ਕੰਪਿਊਟਰ ਨਾਲ ਬਾਹਰੋਂ ਜੁੜਨ ਵਾਲੇ Input/Output ਯੰਤਰ ਜਿਵੇਂ ਕੀਬੋਰਡ, ਮਾਊਸ ਅਤੇ ਪ੍ਰਿੰਟਰ।',
              },
            ],
            interactiveLabId: 'hardware-explorer',
            exercisePromptEn:
              'Inspect all 6 motherboard subsystems in the Hardware Explorer Lab and identify which components handle Processing, Memory, Power, and Cooling.',
            exercisePromptPa:
              'Hardware Explorer Lab ਵਿੱਚ ਮਦਰਬੋਰਡ ਦੇ ਸਾਰੇ 6 ਹਿੱਸਿਆਂ ਉੱਤੇ ਕਲਿੱਕ ਕਰੋ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਕੰਮ ਸਮਝੋ।',
            summaryEn:
              'Computers range from personal Microcomputers to PetaFLOP Supercomputers, all sharing core traits of speed, accuracy, diligence, and hardware-software synergy.',
            summaryPa:
              'ਮਾਈਕ੍ਰੋ-ਕੰਪਿਊਟਰ ਤੋਂ ਲੈ ਕੇ ਸੁਪਰਕੰਪਿਊਟਰ ਤੱਕ ਸਾਰੇ ਸਿਸਟਮ ਤੇਜ਼ ਰਫ਼ਤਾਰ, ਸ਼ੁੱਧਤਾ ਅਤੇ Hardware-Software ਦੇ ਤਾਲਮੇਲ ਨਾਲ ਕੰਮ ਕਰਦੇ ਹਨ।',
            furtherReadingJson: [
              'TOP500 Supercomputer Architecture Reports',
              'IBM Redbooks — Introduction to the New Mainframe',
            ],
            quiz: {
              titleEn: 'Level 1.2 Assessment: Computer Types, Characteristics & Terminology',
              titlePa: 'ਲੈਵਲ 1.2 ਟੈਸਟ: ਕੰਪਿਊਟਰ ਦੀਆਂ ਕਿਸਮਾਂ ਅਤੇ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ',
              timeLimitSeconds: 240,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'Characteristics',
                  promptEn: 'Which characteristic describes a computer’s ability to perform millions of tasks repeatedly without getting tired or losing accuracy?',
                  promptPa: 'ਕੰਪਿਊਟਰ ਦੇ ਬਿਨਾਂ ਥੱਕੇ ਲਗਾਤਾਰ ਕਰੋੜਾਂ ਕੰਮ ਇੱਕੋ ਜਿਹੀ ਸ਼ੁੱਧਤਾ ਨਾਲ ਕਰਨ ਦੇ ਗੁਣ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?',
                  optionsJson: ['Diligence', 'Volatility', 'Latency', 'Fragmentation'],
                  correctAnswer: 'Diligence',
                  explanationEn: 'Diligence means freedom from tiredness, fatigue, or lack of concentration during repetitive operations.',
                  explanationPa: 'Diligence (ਅਣਥੱਕਤਾ) ਦਾ ਮਤਲਬ ਹੈ ਬਿਨਾਂ ਥੱਕੇ ਲਗਾਤਾਰ ਸਹੀ ਕੰਮ ਕਰਨਾ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Computer Types',
                  promptEn: 'Which class of computer is specifically designed for scientific simulations like climate modeling and nuclear research?',
                  promptPa: 'ਮੌਸਮ ਦੀ ਭਵਿੱਖਬਾਣੀ ਅਤੇ ਪੁਲਾੜ ਵਿਗਿਆਨ ਵਰਗੀਆਂ ਵੱਡੀਆਂ ਖੋਜਾਂ ਲਈ ਕਿਹੜਾ ਕੰਪਿਊਟਰ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
                  optionsJson: ['Supercomputer', 'Microcomputer', 'Analog Watch', 'Pocket Calculator'],
                  correctAnswer: 'Supercomputer',
                  explanationEn: 'Supercomputers aggregate thousands of parallel processors to achieve PetaFLOPS/ExaFLOPS for scientific modeling.',
                  explanationPa: 'Supercomputer ਵਿਗਿਆਨਕ ਖੋਜਾਂ ਅਤੇ ਮੌਸਮ ਦੇ ਗੁੰਝਲਦਾਰ ਹਿਸਾਬ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
                },
                {
                  questionType: 'true_false',
                  topicTag: 'Terminology',
                  promptEn: 'True or False: A laptop and an iPhone are both examples of Microcomputers.',
                  promptPa: 'ਸਹੀ ਜਾਂ ਗਲਤ: ਲੈਪਟਾਪ ਅਤੇ iPhone ਦੋਵੇਂ Microcomputer ਦੀਆਂ ਉਦਾਹਰਣਾਂ ਹਨ।',
                  optionsJson: ['True', 'False'],
                  correctAnswer: 'True',
                  explanationEn: 'Both laptops and smartphones use a microprocessor as their central CPU and are designed for individual users, making them microcomputers.',
                  explanationPa: 'ਹਾਂ, ਲੈਪਟਾਪ ਅਤੇ ਸਮਾਰਟਫ਼ੋਨ ਦੋਵੇਂ Microcomputer ਸ਼੍ਰੇਣੀ ਵਿੱਚ ਆਉਂਦੇ ਹਨ।',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'level-2-computer-hardware',
    levelNumber: 2,
    titleEn: 'Level 2: Computer Hardware, CPU Architecture & Memory Hierarchy',
    titlePa: 'ਲੈਵਲ 2: ਕੰਪਿਊਟਰ ਹਾਰਡਵੇਅਰ ਅਤੇ CPU ਬਣਤਰ (Computer Hardware)',
    descriptionEn:
      'Deep dive into Motherboards, CPU internals (ALU, Control Unit, Registers), L1/L2/L3 Cache, RAM vs ROM, NVMe SSDs, PCIe lanes, and BIOS/UEFI.',
    descriptionPa:
      'Motherboard, CPU ਦੇ ਅੰਦਰੂਨੀ ਹਿੱਸੇ (ALU, Control Unit, Registers), Cache, RAM, ROM, NVMe SSD ਅਤੇ BIOS/UEFI ਦੀ ਪੂਰੀ ਜਾਣਕਾਰੀ।',
    category: 'core-cs',
    estimatedHours: 8,
    modules: [
      {
        orderIndex: 1,
        titleEn: 'Inside the Processor & Memory Subsystems',
        titlePa: 'ਪ੍ਰੋਸੈਸਰ ਅਤੇ ਮੈਮੋਰੀ ਸਿਸਟਮ ਦੇ ਅੰਦਰ',
        summaryEn: 'Explore how the ALU, Control Unit, Registers, Cache, and RAM coordinate every nanosecond.',
        summaryPa: 'ਦੇਖੋ ਕਿਵੇਂ ALU, Control Unit, Registers, Cache ਅਤੇ RAM ਮਿਲ ਕੇ ਇੱਕ ਸਕਿੰਟ ਦੇ ਕਰੋੜਵੇਂ ਹਿੱਸੇ ਵਿੱਚ ਕੰਮ ਕਰਦੇ ਹਨ।',
        lessons: [
          {
            slug: 'cpu-alu-registers-memory-hierarchy',
            orderIndex: 1,
            titleEn: '2.1 CPU Architecture (ALU, CU, Registers) & RAM vs Storage',
            titlePa: '2.1 CPU ਬਣਤਰ (ALU, Control Unit, Registers) ਅਤੇ RAM ਬਨਾਮ SSD',
            objectivesJson: [
              'Identify the exact roles of the Control Unit (CU), Arithmetic Logic Unit (ALU), and CPU Registers',
              'Explain the Fetch-Decode-Execute-Writeback instruction cycle',
              'Compare Volatility and Latency across Registers, Cache, RAM, NVMe SSD, and HDD',
              'Diagnose common hardware bottlenecks and thermal/power issues',
            ],
            prerequisitesJson: ['1.1 What is a Computer? Input, Process, Output & Storage'],
            childAnalogyEn:
              'Think of the computer like a Master Carpenter’s Workshop (ਤਰਖਾਣ ਦੀ ਦੁਕਾਨ):\n• The Carpenter Himself is the CPU.\n• His Brain reading the blueprint is the Control Unit (CU).\n• His Hands cutting and joining wood are the ALU (Arithmetic Logic Unit).\n• What he holds right now in his two hands are CPU Registers (fastest, tiny capacity).\n• His tool-belt around his waist is L1/L2 Cache.\n• His big Workbench Table is RAM (fast to reach, cleared out when he goes home at night = Volatile!).\n• His locked Warehouse Room at the back is the SSD/Hard Drive (takes longer to walk there, but keeps wood safe forever even when the lights are off = Non-Volatile!).',
            childAnalogyPa:
              'ਕੰਪਿਊਟਰ ਨੂੰ ਇੱਕ ਤਰਖਾਣ (Carpenter) ਦੀ ਵਰਕਸ਼ਾਪ ਵਾਂਗ ਸਮਝੋ:\n• ਤਰਖਾਣ ਖੁਦ CPU ਹੈ।\n• ਨਕਸ਼ਾ ਪੜ੍ਹ ਕੇ ਹੁਕਮ ਦੇਣ ਵਾਲਾ ਉਸਦਾ ਦਿਮਾਗ Control Unit (CU) ਹੈ।\n• ਲੱਕੜ ਕੱਟਣ ਅਤੇ ਜੋੜਨ ਵਾਲੇ ਉਸਦੇ ਹੱਥ ALU (Arithmetic Logic Unit) ਹਨ।\n• ਜਿਹੜੇ ਔਜ਼ਾਰ ਉਸਨੇ ਇਸ ਵੇਲੇ ਆਪਣੇ ਹੱਥ ਵਿੱਚ ਫੜੇ ਹਨ, ਉਹ Registers ਹਨ (ਸਭ ਤੋਂ ਤੇਜ਼ ਪਰ ਬਹੁਤ ਛੋਟੇ)।\n• ਉਸਦੇ ਲੱਕ ਨਾਲ ਬੰਨ੍ਹੀ ਔਜ਼ਾਰਾਂ ਵਾਲੀ ਬੈਲਟ Cache Memory ਹੈ।\n• ਉਸਦੇ ਸਾਹਮਣੇ ਪਿਆ ਵੱਡਾ ਮੇਜ਼ RAM ਹੈ (ਜਿੱਥੇ ਸਮਾਨ ਰੱਖ ਕੇ ਉਹ ਤੇਜ਼ੀ ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ, ਪਰ ਸ਼ਾਮ ਨੂੰ ਦੁਕਾਨ ਬੰਦ ਹੋਣ ਤੇ ਮੇਜ਼ ਖਾਲੀ ਹੋ ਜਾਂਦਾ ਹੈ — ਇਸੇ ਨੂੰ Volatile ਕਹਿੰਦੇ ਹਨ)।\n• ਪਿੱਛੇ ਬਣਿਆ ਵੱਡਾ ਗੋਦਾਮ SSD / Hard Disk ਹੈ (ਜਿੱਥੇ ਸਮਾਨ ਪੱਕੇ ਤੌਰ ਤੇ ਸੁਰੱਖਿਅਤ ਰਹਿੰਦਾ ਹੈ ਭਾਵੇਂ ਬਿਜਲੀ ਬੰਦ ਹੋ ਜਾਵੇ — Non-Volatile)।',
            technicalExplanationEn:
              'Inside the Central Processing Unit (CPU):\n1. Control Unit (CU): Directs data flow using control signals, fetches instructions pointed to by the Program Counter (PC), and decodes opcodes.\n2. Arithmetic Logic Unit (ALU): Executes binary addition, subtraction, bitwise shifts, and logical comparisons (AND, OR, XOR).\n3. Registers: Ultra-fast flip-flop storage inside the CPU core (PC, IR, ACC, General Purpose R0-R15) operating at sub-nanosecond latency (< 0.5 ns).\n4. Memory Hierarchy:\n• L1/L2/L3 SRAM Cache: 1–10 ns latency.\n• DRAM (Main Memory / RAM): 50–80 ns latency, Volatile.\n• NVMe PCIe SSD (NAND Flash): ~50,000 ns (50 µs), Non-Volatile.\n• Magnetic HDD: ~5,000,000 ns (5 ms), mechanical platters.',
            technicalExplanationPa:
              'CPU (Central Processing Unit) ਦੇ ਮੁੱਖ 3 ਹਿੱਸੇ ਹੁੰਦੇ ਹਨ:\n1. Control Unit (CU): ਇਹ ਪੂਰੇ ਕੰਪਿਊਟਰ ਦਾ ਮੈਨੇਜਰ ਹੈ। ਇਹ RAM ਤੋਂ ਹਦਾਇਤ (Instruction) ਮੰਗਵਾਉਂਦਾ ਹੈ ਅਤੇ ਉਸਨੂੰ Decode ਕਰਦਾ ਹੈ।\n2. Arithmetic Logic Unit (ALU): ਇਹ ਸਾਰੇ ਗਣਿਤ (+, -) ਅਤੇ ਤੁਲਨਾ (>, <, ==) ਦੇ ਕੰਮ ਕਰਦਾ ਹੈ।\n3. Registers: ਇਹ CPU ਦੇ ਬਿਲਕੁਲ ਅੰਦਰ ਬਣੀਆਂ ਸਭ ਤੋਂ ਤੇਜ਼ ਮੈਮੋਰੀ ਯੂਨਿਟਾਂ ਹਨ, ਜਿਵੇਂ Program Counter (PC) ਜੋ ਅਗਲੀ ਹਦਾਇਤ ਦਾ ਪਤਾ ਰੱਖਦਾ ਹੈ, ਅਤੇ Accumulator (ACC)।\n\nਮੈਮੋਰੀ ਦੀ ਰਫ਼ਤਾਰ (Memory Hierarchy):\n• Registers (< 0.5 ns) -> Cache (1-10 ns) -> RAM (60 ns, ਬਿਜਲੀ ਜਾਣ ਤੇ ਡਾਟਾ ਮਿਟ ਜਾਂਦਾ ਹੈ) -> NVMe SSD (Non-volatile, ਪੱਕੀ ਸਟੋਰੇਜ)।',
            practicalExampleEn:
              'When you open a heavy mobile game on your iPhone: Initially you see a loading bar for 4 seconds because assets are being copied from the slower Non-Volatile Flash Storage (SSD) into the super-fast Volatile RAM. Once in RAM, gameplay runs at 60 frames per second!',
            practicalExamplePa:
              'ਜਦੋਂ ਤੁਸੀਂ ਆਪਣੇ iPhone ਉੱਤੇ ਕੋਈ ਵੱਡੀ ਗੇਮ ਖੋਲ੍ਹਦੇ ਹੋ: ਸ਼ੁਰੂ ਵਿੱਚ 3-4 ਸਕਿੰਟ Loading ਹੁੰਦੀ ਹੈ ਕਿਉਂਕਿ ਗੇਮ ਦੀਆਂ ਫਾਈਲਾਂ SSD (Storage) ਤੋਂ ਉੱਠ ਕੇ ਤੇਜ਼ RAM ਵਿੱਚ ਆ ਰਹੀਆਂ ਹੁੰਦੀਆਂ ਹਨ। ਇੱਕ ਵਾਰ RAM ਵਿੱਚ ਆਉਣ ਤੋਂ ਬਾਅਦ ਗੇਮ ਬਿਨਾਂ ਰੁਕੇ ਚੱਲਦੀ ਹੈ!',
            codeDemo: `; Educational Assembly Trace Inside CPU Cycle
; Goal: Compute 12 + 8 and store at Memory Address [100]

0x01: LOAD  R1, #12     ; [Fetch -> Decode -> Execute] Put 12 into Register R1
0x02: LOAD  R2, #8      ; Put 8 into Register R2
0x03: ADD   ACC, R1, R2 ; ALU adds R1 + R2 -> Accumulator (ACC = 20)
0x04: STORE ACC, [100]  ; Write 20 from CPU Register back to RAM address 100`,
            misconceptionsJson: [
              {
                myth: 'Adding a 2TB Hard Drive makes the computer run programs faster.',
                truthEn: 'Storage capacity only determines how many files you can save. Active program speed depends on CPU clock/IPC, Cache, and RAM bandwidth.',
                truthPa: 'ਵੱਡੀ Hard Disk ਲਗਾਉਣ ਨਾਲ ਸਿਰਫ਼ ਫਾਈਲਾਂ ਰੱਖਣ ਦੀ ਜਗ੍ਹਾ ਵਧਦੀ ਹੈ; ਕੰਪਿਊਟਰ ਦੀ ਅਸਲ ਰਫ਼ਤਾਰ CPU, Cache ਅਤੇ RAM ਉੱਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ।',
              },
            ],
            terminologyJson: [
              {
                term: 'Volatile Memory',
                punjabi: 'ਅਸਥਾਈ ਮੈਮੋਰੀ (RAM)',
                meaningEn: 'Memory that loses its stored data immediately when electrical power is turned off.',
                meaningPa: 'ਉਹ ਮੈਮੋਰੀ ਜਿਸ ਵਿੱਚੋਂ ਬਿਜਲੀ ਬੰਦ ਹੁੰਦੇ ਸਾਰ ਹੀ ਡਾਟਾ ਮਿਟ ਜਾਂਦਾ ਹੈ (ਜਿਵੇਂ RAM)।',
              },
              {
                term: 'Program Counter (PC)',
                punjabi: 'ਪ੍ਰੋਗਰਾਮ ਕਾਊਂਟਰ ਰਜਿਸਟਰ',
                meaningEn: 'Special CPU register that holds the memory address of the next instruction to be fetched.',
                meaningPa: 'CPU ਦਾ ਉਹ ਖਾਸ Register ਜੋ ਅਗਲੀ ਚੱਲਣ ਵਾਲੀ ਹਦਾਇਤ (Instruction) ਦਾ ਮੈਮੋਰੀ ਪਤਾ ਯਾਦ ਰੱਖਦਾ ਹੈ।',
              },
              {
                term: 'BIOS / UEFI',
                punjabi: 'ਬਾਇਓਸ / ਯੂ.ਈ.ਐਫ.ਆਈ',
                meaningEn: 'Firmware stored on a Non-Volatile ROM chip on the motherboard that initializes hardware during boot.',
                meaningPa: 'Motherboard ਉੱਤੇ ਲੱਗੀ ROM ਚਿੱਪ ਵਿੱਚ ਸਟੋਰ ਪ੍ਰੋਗਰਾਮ ਜੋ ਕੰਪਿਊਟਰ ਆਨ ਹੋਣ ਵੇਲੇ ਹਾਰਡਵੇਅਰ ਨੂੰ ਚੈੱਕ ਕਰਕੇ OS ਚਲਾਉਂਦਾ ਹੈ।',
              },
            ],
            interactiveLabId: 'cpu-cycle',
            exercisePromptEn:
              'Launch the CPU Instruction Cycle Lab and step through Fetch -> Decode -> Execute -> Write-Back to watch the Program Counter (PC) and Accumulator update in real time.',
            exercisePromptPa:
              'CPU Instruction Cycle Lab ਖੋਲ੍ਹੋ ਅਤੇ Fetch -> Decode -> Execute ਬਟਨ ਦਬਾ ਕੇ ਦੇਖੋ ਕਿ Program Counter ਅਤੇ ALU ਕਿਵੇਂ ਕੰਮ ਕਰਦੇ ਹਨ।',
            summaryEn:
              'The CPU executes instructions via the Fetch-Decode-Execute cycle while relying on a tiered memory hierarchy (Registers -> Cache -> RAM -> SSD) to bridge speed and capacity.',
            summaryPa:
              'CPU ਹਰੇਕ ਕੰਮ Fetch-Decode-Execute ਚੱਕਰ ਰਾਹੀਂ ਕਰਦਾ ਹੈ ਅਤੇ ਰਫ਼ਤਾਰ ਬਣਾਈ ਰੱਖਣ ਲਈ Registers, Cache ਅਤੇ RAM ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ।',
            furtherReadingJson: [
              'Patterson & Hennessy — Computer Organization and Design',
              'PCIe 5.0 and NVMe Queue Pair Architecture',
            ],
            quiz: {
              titleEn: 'Level 2 Assessment: Hardware, CPU & Memory Hierarchy',
              titlePa: 'ਲੈਵਲ 2 ਟੈਸਟ: ਹਾਰਡਵੇਅਰ, CPU ਅਤੇ ਮੈਮੋਰੀ',
              timeLimitSeconds: 300,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'CPU Internals',
                  promptEn: 'Which CPU register holds the memory address of the NEXT instruction to be executed?',
                  promptPa: 'CPU ਦਾ ਕਿਹੜਾ ਰਜਿਸਟਰ ਅਗਲੀ ਚੱਲਣ ਵਾਲੀ Instruction ਦਾ ਮੈਮੋਰੀ ਪਤਾ (Address) ਰੱਖਦਾ ਹੈ?',
                  optionsJson: ['Program Counter (PC)', 'Instruction Register (IR)', 'Accumulator (ACC)', 'Status Flag'],
                  correctAnswer: 'Program Counter (PC)',
                  explanationEn: 'The Program Counter (PC) always points to the address of the next instruction to fetch from RAM.',
                  explanationPa: 'Program Counter (PC) ਹਮੇਸ਼ਾ ਅਗਲੀ ਹਦਾਇਤ ਦਾ ਮੈਮੋਰੀ ਪਤਾ ਸੰਭਾਲਦਾ ਹੈ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Memory Hierarchy',
                  promptEn: 'Which of the following memory types is the FASTEST for the CPU to access?',
                  promptPa: 'ਹੇਠਾਂ ਦਿੱਤੀਆਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਮੈਮੋਰੀ CPU ਲਈ ਸਭ ਤੋਂ ਤੇਜ਼ (Fastest) ਹੁੰਦੀ ਹੈ?',
                  optionsJson: ['CPU Registers', 'L3 Cache', 'DDR5 RAM', 'NVMe M.2 SSD'],
                  correctAnswer: 'CPU Registers',
                  explanationEn: 'CPU Registers sit directly inside the processor core and operate at single-clock-cycle speeds (< 0.5 ns).',
                  explanationPa: 'CPU Registers ਪ੍ਰੋਸੈਸਰ ਦੇ ਬਿਲਕੁਲ ਅੰਦਰ ਹੁੰਦੇ ਹਨ, ਇਸ ਲਈ ਇਹ ਸਭ ਤੋਂ ਤੇਜ਼ ਹੁੰਦੇ ਹਨ।',
                },
                {
                  questionType: 'true_false',
                  topicTag: 'Volatility',
                  promptEn: 'True or False: RAM (Random Access Memory) is non-volatile and keeps your open files even if the battery dies completely.',
                  promptPa: 'ਸਹੀ ਜਾਂ ਗਲਤ: RAM ਇੱਕ Non-Volatile ਮੈਮੋਰੀ ਹੈ ਅਤੇ ਬਿਜਲੀ ਬੰਦ ਹੋਣ ਤੋਂ ਬਾਅਦ ਵੀ ਡਾਟਾ ਸਾਂਭ ਕੇ ਰੱਖਦੀ ਹੈ।',
                  optionsJson: ['True', 'False'],
                  correctAnswer: 'False',
                  explanationEn: 'RAM is volatile DRAM—when power is lost, its capacitors discharge and all unsaved data vanishes.',
                  explanationPa: 'RAM ਇੱਕ Volatile ਮੈਮੋਰੀ ਹੈ, ਬਿਜਲੀ ਬੰਦ ਹੁੰਦੇ ਹੀ ਇਸ ਵਿਚਲਾ ਡਾਟਾ ਮਿਟ ਜਾਂਦਾ ਹੈ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'CPU Cycle',
                  promptEn: 'What is the correct sequence of the CPU Instruction Cycle?',
                  promptPa: 'CPU Instruction Cycle ਦਾ ਸਹੀ ਕ੍ਰਮ ਕਿਹੜਾ ਹੈ?',
                  optionsJson: [
                    'Fetch -> Decode -> Execute -> Write-Back',
                    'Execute -> Fetch -> Decode -> Store',
                    'Decode -> Fetch -> Write-Back -> Execute',
                    'Fetch -> Execute -> Boot -> Decode',
                  ],
                  correctAnswer: 'Fetch -> Decode -> Execute -> Write-Back',
                  explanationEn: 'The CPU first Fetches the instruction from RAM, Decodes its opcode, Executes it in the ALU, and Writes back the result.',
                  explanationPa: 'CPU ਪਹਿਲਾਂ ਹਦਾਇਤ ਨੂੰ Fetch ਕਰਦਾ ਹੈ, ਫਿਰ Decode ਕਰਦਾ ਹੈ, ਫਿਰ ALU ਵਿੱਚ Execute ਕਰਕੇ ਨਤੀਜਾ Write-Back ਕਰਦਾ ਹੈ।',
                },
                {
                  questionType: 'fill_blank',
                  topicTag: 'Firmware',
                  promptEn: 'The modern motherboard firmware interface that replaced legacy BIOS is called ________. (Type: UEFI)',
                  promptPa: 'Motherboard ਉੱਤੇ ਪੁਰਾਣੇ BIOS ਦੀ ਥਾਂ ਲੈਣ ਵਾਲੇ ਨਵੇਂ ਫਰਮਵੇਅਰ ਸਿਸਟਮ ਨੂੰ ________ ਕਹਿੰਦੇ ਹਨ। (UEFI)',
                  optionsJson: ['UEFI', 'CMOS'],
                  correctAnswer: 'UEFI',
                  explanationEn: 'UEFI (Unified Extensible Firmware Interface) replaced legacy BIOS with faster boot times, >2TB drive support, and Secure Boot.',
                  explanationPa: 'UEFI ਆਧੁਨਿਕ ਮਦਰਬੋਰਡਾਂ ਵਿੱਚ ਵਰਤਿਆ ਜਾਣ ਵਾਲਾ ਫਰਮਵੇਅਰ ਹੈ ਜੋ Secure Boot ਅਤੇ ਤੇਜ਼ ਸਟਾਰਟਅੱਪ ਦਿੰਦਾ ਹੈ।',
                },
              ],
            },
          },
          {
            slug: 'gpu-psu-bios-uefi-pcie-cooling-troubleshooting',
            orderIndex: 2,
            titleEn: '2.2 GPUs, ROM/BIOS/UEFI, CMOS, PCIe Lanes, PSU & Hardware Troubleshooting',
            titlePa: '2.2 GPU, ROM, BIOS/UEFI, PCIe ਸਲੌਟ, ਪਾਵਰ ਸਪਲਾਈ ਅਤੇ ਹਾਰਡਵੇਅਰ ਟ੍ਰਬਲਸ਼ੂਟਿੰਗ',
            objectivesJson: [
              'Differentiate ROM types (PROM, EPROM, EEPROM) and CMOS/RTC battery functions',
              'Explain GPU parallel SIMD architecture vs CPU serial low-latency cores',
              'Understand PCIe lanes (x1, x4, x16), USB interfaces,PSU DC voltage rails, and thermal cooling',
              'Apply systematic POST beep/LED hardware troubleshooting steps',
            ],
            prerequisitesJson: ['2.1 CPU Architecture (ALU, CU, Registers) & RAM vs Storage'],
            childAnalogyEn:
              '1. CPU vs GPU (1 Professor vs 1,000 School Children):\nA CPU is like 8 PhD Math Professors—each professor can solve super complex tax problems one by one.\nA GPU (Graphics Card) is like 4,000 primary school students sitting together—each student only knows simple addition, but if you ask them to color 4,000 pixels on a screen at the exact same second, the 4,000 kids finish in a blink!\n\n2. PCIe Lanes (Highway Lanes):\nPCI Express (PCIe) is the multi-lane highway on the motherboard. A Wi-Fi card only needs a 1-lane road (PCIe x1), an NVMe SSD takes a 4-lane expressway (PCIe x4), and a heavy Graphics Card uses a 16-lane superhighway (PCIe x16)!',
            childAnalogyPa:
              '1. CPU ਬਨਾਮ GPU (8 ਪ੍ਰੋਫੈਸਰ ਬਨਾਮ 4,000 ਬੱਚੇ):\n• CPU ਵਿੱਚ 8 ਤੋਂ 16 ਵੱਡੇ ਕੋਰ ਹੁੰਦੇ ਹਨ ਜੋ ਬਹੁਤ ਔਖੇ ਸਵਾਲ ਲੜੀਵਾਰ ਹੱਲ ਕਰਦੇ ਹਨ।\n• GPU (Graphics Card) ਵਿੱਚ ਹਜ਼ਾਰਾਂ ਛੋਟੇ ਕੋਰ ਹੁੰਦੇ ਹਨ ਜੋ ਸਕ੍ਰੀਨ ਦੇ ਲੱਖਾਂ ਬਿੰਦੂਆਂ (Pixels) ਵਿੱਚ ਇੱਕੋ ਸਕਿੰਟ ਵਿੱਚ ਰੰਗ ਭਰ ਦਿੰਦੇ ਹਨ ਅਤੇ AI ਦਾ ਗਣਿਤ ਚਲਾਉਂਦੇ ਹਨ!\n\n2. CMOS Battery ਅਤੇ RTC:\nਤੁਹਾਡਾ ਕੰਪਿਊਟਰ ਬੰਦ ਹੋਣ ਤੋਂ ਬਾਅਦ ਵੀ ਸਹੀ ਸਮਾਂ ਅਤੇ ਤਾਰੀਖ਼ ਕਿਵੇਂ ਯਾਦ ਰੱਖਦਾ ਹੈ? ਕਿਉਂਕਿ Motherboard ਉੱਤੇ ਘੜੀ ਦੇ ਸੈੱਲ ਵਰਗੀ ਇੱਕ ਛੋਟੀ CMOS ਬੈਟਰੀ (CR2032) ਲੱਗੀ ਹੁੰਦੀ ਹੈ ਜੋ Real-Time Clock (RTC) ਨੂੰ ਚੱਲਦਾ ਰੱਖਦੀ ਹੈ!',
            technicalExplanationEn:
              '1. Non-Volatile Firmware & ROM Variants:\n• Mask ROM: Factory-wired.\n• PROM: Programmable once via fuses.\n• EPROM: Erasable via UV light.\n• EEPROM / Flash: Electrically erasable; stores modern UEFI firmware.\n• CMOS & RTC: Quartz crystal Real-Time Clock powered by a CR2032 coin cell.\n\n2. Expansion Buses & Peripherals:\n• PCI Express (PCIe): High-speed serial point-to-point lanes (x1, x4, x8, x16). PCIe 4.0 provides ~2 GB/s per lane.\n• USB-C / Thunderbolt: Multiplexed data, DisplayPort, and USB Power Delivery.\n\n3. Power Supply (PSU) & Thermal Dissipation:\n• PSU converts 110V–240V AC to regulated +12V (CPU/GPU VRMs), +5V, and +3.3V DC rails.\n• Cooling: Heatpipes transfer thermal energy from the CPU IHS to aluminum fins.',
            technicalExplanationPa:
              '1. ROM ਦੀਆਂ ਕਿਸਮਾਂ: PROM (ਇੱਕ ਵਾਰ ਲਿਖਣਯੋਗ), EPROM (UV ਰੌਸ਼ਨੀ ਨਾਲ ਮਿਟਾਉਣਯੋਗ), ਅਤੇ EEPROM / Flash (ਬਿਜਲੀ ਦੇ ਸਿਗਨਲ ਨਾਲ ਅਪਡੇਟ ਹੋਣ ਵਾਲੀ ਚਿੱਪ ਜਿਸ ਵਿੱਚ BIOS/UEFI ਰਹਿੰਦਾ ਹੈ)।\n2. PCIe Lanes: ਮਦਰਬੋਰਡ ਉੱਤੇ ਗ੍ਰਾਫਿਕਸ ਕਾਰਡ (PCIe x16) ਅਤੇ NVMe SSD (PCIe x4) ਨੂੰ CPU ਨਾਲ ਸਿੱਧਾ ਜੋੜਨ ਵਾਲੇ ਤੇਜ਼ ਰਸਤੇ।\n3. PSU (Power Supply Unit): ਕੰਧ ਦੀ 230V AC ਬਿਜਲੀ ਨੂੰ ਕੰਪਿਊਟਰ ਲਈ ਸੁਰੱਖਿਅਤ +12V, +5V ਅਤੇ +3.3V DC ਵਿੱਚ ਬਦਲਦਾ ਹੈ।\n4. Hardware Troubleshooting: ਜੇ ਕੰਪਿਊਟਰ ਆਨ ਨਾ ਹੋਵੇ (No POST), ਤਾਂ ਸਭ ਤੋਂ ਪਹਿਲਾਂ PSU ਕੇਬਲ, RAM ਸਲੌਟ (Reseating DIMMs) ਅਤੇ CPU ਕੂਲਿੰਗ ਫੈਨ ਚੈੱਕ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।',
            practicalExampleEn:
              'If a desktop PC powers on for 2 seconds and fans spin, but the monitor stays black and the motherboard shows an orange DRAM diagnostic LED: reseating the DDR5 RAM stick firmly until the latches click resolves 80% of No-POST cases!',
            practicalExamplePa:
              'ਜੇਕਰ ਕੰਪਿਊਟਰ ਦਾ ਪੱਖਾ ਚੱਲਦਾ ਹੈ ਪਰ ਸਕ੍ਰੀਨ ਕਾਲੀ ਰਹਿੰਦੀ ਹੈ ਅਤੇ ਮਦਰਬੋਰਡ ਉੱਤੇ DRAM ਦੀ ਲਾਈਟ ਜਗਦੀ ਹੈ, ਤਾਂ RAM ਨੂੰ ਕੱਢ ਕੇ ਦੁਬਾਰਾ ਸਾਫ਼ ਕਰਕੇ ਲਗਾਉਣ ਨਾਲ ਸਮੱਸਿਆ ਹੱਲ ਹੋ ਜਾਂਦੀ ਹੈ।',
            codeDemo: `# Hardware Diagnostic & Sensor Inspection Commands (Linux)
lspci -vv                 # Inspect PCIe lanes (x4 NVMe, x16 GPU)
lsusb                     # List connected USB buses and peripheral devices
sensors                   # Read CPU core temperatures (°C) and fan RPM
sudo dmidecode -t bios    # Read UEFI Firmware version and motherboard vendor`,
            misconceptionsJson: [
              {
                myth: 'Thermal paste should be applied as a thick 5mm layer like cake icing.',
                truthEn: 'Thermal paste is only meant to fill microscopic air gaps between the CPU heatspreader and cooler plate; excess paste acts as an insulator.',
                truthPa: 'ਥਰਮਲ ਪੇਸਟ ਸਿਰਫ਼ CPU ਅਤੇ ਕੂਲਰ ਦੇ ਵਿਚਕਾਰ ਸੂਖਮ ਖਾਲੀ ਥਾਵਾਂ ਭਰਨ ਲਈ ਮਟਰ ਦੇ ਦਾਣੇ ਜਿੰਨੀ ਲਗਾਈ ਜਾਂਦੀ ਹੈ।',
              },
            ],
            terminologyJson: [
              {
                term: 'EEPROM',
                punjabi: 'ਈ.ਈ.ਪੀ.ਰੋਮ (Electrically Erasable PROM)',
                meaningEn: 'Non-volatile ROM chip that can be erased and reflashed using electrical voltage (used for UEFI BIOS chips).',
                meaningPa: 'ਉਹ ROM ਚਿੱਪ ਜਿਸਨੂੰ ਬਿਜਲੀ ਦੇ ਸਿਗਨਲ ਨਾਲ ਮਿਟਾ ਕੇ ਨਵਾਂ ਫਰਮਵੇਅਰ ਅਪਡੇਟ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।',
              },
              {
                term: 'PCI Express (PCIe)',
                punjabi: 'ਪੀ.ਸੀ.ਆਈ ਐਕਸਪ੍ਰੈਸ',
                meaningEn: 'High-speed serial expansion bus standard for connecting GPUs and NVMe SSDs to the CPU.',
                meaningPa: 'ਗ੍ਰਾਫਿਕਸ ਕਾਰਡ ਅਤੇ ਤੇਜ਼ SSD ਨੂੰ ਮਦਰਬੋਰਡ ਨਾਲ ਜੋੜਨ ਵਾਲਾ ਹਾਈ-ਸਪੀਡ ਸਲੌਟ।',
              },
              {
                term: 'CMOS / RTC',
                punjabi: 'ਸੀ.ਮੌਸ ਅਤੇ ਰੀਅਲ-ਟਾਈਮ ਕਲੌਕ',
                meaningEn: 'Battery-backed real-time clock circuit that tracks system time when the computer is unplugged.',
                meaningPa: 'ਮਦਰਬੋਰਡ ਉੱਤੇ ਲੱਗਿਆ ਛੋਟਾ ਸੈੱਲ ਅਤੇ ਘੜੀ ਜੋ ਕੰਪਿਊਟਰ ਬੰਦ ਹੋਣ ਤੇ ਵੀ ਸਮਾਂ ਸਹੀ ਰੱਖਦੀ ਹੈ।',
              },
            ],
            interactiveLabId: 'hardware-explorer',
            exercisePromptEn:
              'Click on GPU, PSU, and Cooling inside the Hardware Explorer Lab to inspect their specifications and troubleshooting procedures.',
            exercisePromptPa:
              'Hardware Explorer Lab ਵਿੱਚ GPU, PSU ਅਤੇ Cooling ਉੱਤੇ ਕਲਿੱਕ ਕਰਕੇ ਉਨ੍ਹਾਂ ਦੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਅਤੇ ਖਰਾਬੀ ਲੱਭਣ ਦੇ ਤਰੀਕੇ ਪੜ੍ਹੋ।',
            summaryEn:
              'GPUs accelerate parallel workloads via thousands of SIMD cores, EEPROM stores UEFI firmware, PCIe lanes provide high-bandwidth I/O, and PSUs deliver regulated DC power.',
            summaryPa:
              'GPU ਸਮਾਨਾਂਤਰ ਗਣਿਤ ਕਰਦਾ ਹੈ, EEPROM ਵਿੱਚ UEFI ਰਹਿੰਦਾ ਹੈ, PCIe ਤੇਜ਼ ਰਸਤਾ ਦਿੰਦਾ ਹੈ ਅਤੇ PSU ਸੁਰੱਖਿਅਤ DC ਬਿਜਲੀ ਦਿੰਦਾ ਹੈ।',
            furtherReadingJson: [
              'CompTIA A+ Core 1 (220-1101) Hardware Architecture & Troubleshooting Guide',
            ],
            quiz: {
              titleEn: 'Level 2.2 Assessment: GPUs, ROM, PCIe & Troubleshooting',
              titlePa: 'ਲੈਵਲ 2.2 ਟੈਸਟ: GPU, ROM, PCIe ਅਤੇ ਹਾਰਡਵੇਅਰ ਸੰਭਾਲ',
              timeLimitSeconds: 240,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'GPU vs CPU',
                  promptEn: 'Why is a GPU much faster than a CPU at 3D graphics rendering and AI matrix multiplication?',
                  promptPa: '3D ਗ੍ਰਾਫਿਕਸ ਅਤੇ AI ਦੇ ਗਣਿਤ ਵਿੱਚ GPU ਇੱਕ CPU ਨਾਲੋਂ ਕਿਤੇ ਜ਼ਿਆਦਾ ਤੇਜ਼ ਕਿਉਂ ਹੁੰਦਾ ਹੈ?',
                  optionsJson: [
                    'It contains thousands of parallel ALU cores operating simultaneously (SIMD)',
                    'It has no transistors inside',
                    'It stores files permanently like a hard drive',
                    'It converts AC wall power to DC',
                  ],
                  correctAnswer: 'It contains thousands of parallel ALU cores operating simultaneously (SIMD)',
                  explanationEn: 'GPUs are architected with thousands of smaller parallel cores designed to process massive arrays of pixels and matrices simultaneously.',
                  explanationPa: 'GPU ਵਿੱਚ ਹਜ਼ਾਰਾਂ ਛੋਟੇ ਕੋਰ ਹੁੰਦੇ ਹਨ ਜੋ ਇੱਕੋ ਸਮੇਂ ਹਜ਼ਾਰਾਂ ਗਣਨਾਵਾਂ ਇਕੱਠੀਆਂ ਕਰ ਸਕਦੇ ਹਨ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'ROM & Firmware',
                  promptEn: 'Which type of ROM chip allows modern motherboards to update (flash) their UEFI firmware electrically without removing the chip?',
                  promptPa: 'ਕਿਹੜੀ ROM ਚਿੱਪ ਨੂੰ ਬਿਨਾਂ ਬਾਹਰ ਕੱਢੇ ਬਿਜਲੀ ਦੇ ਸਿਗਨਲ ਰਾਹੀਂ ਅਪਡੇਟ (Flash) ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ?',
                  optionsJson: ['EEPROM / Flash ROM', 'Volatile DRAM', 'Magnetic Tape', 'Paper Punch Card'],
                  correctAnswer: 'EEPROM / Flash ROM',
                  explanationEn: 'EEPROM (Electrically Erasable Programmable Read-Only Memory) and NOR Flash allow in-system firmware updates.',
                  explanationPa: 'EEPROM (Flash ROM) ਨੂੰ ਬਿਜਲੀ ਦੇ ਸਿਗਨਲ ਨਾਲ ਮਿਟਾ ਕੇ ਨਵਾਂ BIOS/UEFI ਭਰਿਆ ਜਾ ਸਕਦਾ ਹੈ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Power Supply',
                  promptEn: 'What is the primary electrical function of the Power Supply Unit (PSU)?',
                  promptPa: 'ਕੰਪਿਊਟਰ ਵਿੱਚ Power Supply Unit (PSU) ਦਾ ਮੁੱਖ ਕੰਮ ਕੀ ਹੁੰਦਾ ਹੈ?',
                  optionsJson: [
                    'Convert high-voltage AC wall power into regulated low-voltage DC (+12V, +5V, +3.3V)',
                    'Increase internet Wi-Fi speed',
                    'Compile Python programs into Assembly',
                    'Cool down the monitor screen',
                  ],
                  correctAnswer:
                    'Convert high-voltage AC wall power into regulated low-voltage DC (+12V, +5V, +3.3V)',
                  explanationEn: 'Computer electronics operate on low-voltage DC; the PSU rectifies and steps down 110–240V AC into stable +12V, +5V, and +3.3V DC rails.',
                  explanationPa: 'PSU ਕੰਧ ਦੀ 230V AC ਬਿਜਲੀ ਨੂੰ ਕੰਪਿਊਟਰ ਦੇ ਪੁਰਜ਼ਿਆਂ ਲਈ ਸੁਰੱਖਿਅਤ +12V, +5V ਅਤੇ +3.3V DC ਵਿੱਚ ਬਦਲਦਾ ਹੈ।',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'level-3-digital-fundamentals-binary-assembly',
    levelNumber: 3,
    titleEn: 'Level 3: Binary Language, Number Systems, Logic Gates & Assembly',
    titlePa: 'ਲੈਵਲ 3: ਬਾਈਨਰੀ ਭਾਸ਼ਾ, ਲੌਜਿਕ ਗੇਟ ਅਤੇ ਅਸੈਂਬਲੀ (Binary & Logic Gates)',
    descriptionEn:
      'Why computers only understand 0 and 1, converting Binary/Decimal/Hexadecimal, Boolean Algebra, Logic Gates (AND, OR, XOR, NAND), and Assembly instructions.',
    descriptionPa:
      'ਕੰਪਿਊਟਰ ਸਿਰਫ਼ 0 ਅਤੇ 1 ਦੀ ਬਾਈਨਰੀ ਭਾਸ਼ਾ ਕਿਉਂ ਸਮਝਦਾ ਹੈ, Binary ਤੋਂ Decimal ਬਦਲਣਾ, Logic Gates (AND, OR, NOT, XOR) ਅਤੇ Assembly Language।',
    category: 'core-cs',
    estimatedHours: 10,
    modules: [
      {
        orderIndex: 1,
        titleEn: 'Binary Number Systems & Transistor Switching',
        titlePa: 'ਬਾਈਨਰੀ ਨੰਬਰ ਸਿਸਟਮ ਅਤੇ ਟ੍ਰਾਂਜ਼ਿਸਟਰ ਸਵਿੱਚ',
        summaryEn: 'Understand how microscopic silicon switches represent numbers, letters, colors, and machine instructions.',
        summaryPa: 'ਸਿੱਖੋ ਕਿਵੇਂ ਕਰੋੜਾਂ ਛੋਟੇ ਇਲੈਕਟ੍ਰਾਨਿਕ ਬਟਨ (Transistors) 0 ਅਤੇ 1 ਰਾਹੀਂ ਹਰ ਅੱਖਰ, ਨੰਬਰ ਅਤੇ ਫੋਟੋ ਬਣਾਉਂਦੇ ਹਨ।',
        lessons: [
          {
            slug: 'how-binary-and-logic-gates-work',
            orderIndex: 1,
            titleEn: '3.1 How Binary (0 & 1), Number Conversions & Logic Gates Work',
            titlePa: '3.1 ਬਾਈਨਰੀ ਭਾਸ਼ਾ (0 ਅਤੇ 1) ਅਤੇ Logic Gates ਕਿਵੇਂ ਕੰਮ ਕਰਦੇ ਹਨ?',
            objectivesJson: [
              'Explain physically why computers use Base-2 (Binary) instead of Base-10 (Decimal)',
              'Convert numbers accurately between Binary, Decimal, Octal, and Hexadecimal',
              'Construct Truth Tables for AND, OR, NOT, NAND, NOR, and XOR logic gates',
              'Understand how Half-Adders combine XOR and AND gates to add binary numbers in hardware',
            ],
            prerequisitesJson: ['2.1 CPU Architecture (ALU, CU, Registers) & RAM vs Storage'],
            childAnalogyEn:
              'Why does a computer only speak 0 and 1? Imagine trying to signal your friend across a dark field at night using a torch (ਬੈਟਰੀ/ਟੌਰਚ)!\nIf you try to show 10 different brightness levels (10%, 20%, 30%...), mist or distance will confuse your friend—was that 40% or 50%?\nInstead, what if you only use TWO states: Torch OFF = 0, Torch ON = 1! Even in thick fog, anyone can tell whether the light is ON or OFF!\nNow imagine 8 friends standing in a row with torches. Each friend holds a double-value card from right to left: 1, 2, 4, 8, 16, 32, 64, 128. To show the number 13, only the friends holding 8, 4, and 1 turn their torches ON (8 + 4 + 1 = 13 -> 00001101)! That is exactly how Binary works inside silicon transistors!',
            childAnalogyPa:
              'ਕੰਪਿਊਟਰ ਸਿਰਫ਼ 0 ਅਤੇ 1 (Binary) ਕਿਉਂ ਸਮਝਦਾ ਹੈ? ਆਓ ਬੱਚਿਆਂ ਵਾਂਗ ਸਮਝੀਏ!\nਮੰਨ ਲਓ ਰਾਤ ਦੇ ਹਨੇਰੇ ਵਿੱਚ ਤੁਸੀਂ ਖੇਤ ਦੇ ਦੂਜੇ ਪਾਸੇ ਖੜ੍ਹੇ ਆਪਣੇ ਦੋਸਤ ਨੂੰ ਬੈਟਰੀ (Torch) ਨਾਲ ਇਸ਼ਾਰਾ ਕਰਨਾ ਹੈ। ਜੇ ਤੁਸੀਂ ਬੈਟਰੀ ਦੀ ਰੌਸ਼ਨੀ ਨੂੰ 10 ਅਲੱਗ-ਅਲੱਗ ਲੈਵਲਾਂ (ਥੋੜ੍ਹੀ ਮੱਧਮ, ਹੋਰ ਮੱਧਮ...) ਤੇ ਰੱਖੋਗੇ, ਤਾਂ ਧੁੰਦ ਵਿੱਚ ਤੁਹਾਡਾ ਦੋਸਤ ਭੁਲੇਖਾ ਖਾ ਜਾਵੇਗਾ।\nਪਰ ਜੇ ਤੁਸੀਂ ਸਿਰਫ਼ 2 ਹੀ ਨਿਯਮ ਰੱਖੋ: ਬੈਟਰੀ ਬੰਦ (OFF) = 0, ਅਤੇ ਬੈਟਰੀ ਜਗਦੀ (ON) = 1 — ਤਾਂ ਕਦੇ ਵੀ ਗਲਤੀ ਨਹੀਂ ਹੋਵੇਗੀ!\nਹੁਣ ਸੋਚੋ 4 ਦੋਸਤ ਲਾਈਨ ਵਿੱਚ ਬੈਟਰੀਆਂ ਲੈ ਕੇ ਖੜ੍ਹੇ ਹਨ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਪੈਰਾਂ ਹੇਠਾਂ ਸੱਜੇ ਤੋਂ ਖੱਬੇ ਇਹ ਨੰਬਰ ਲਿਖੇ ਹਨ: 8, 4, 2, 1.\nਜੇ ਤੁਸੀਂ ਨੰਬਰ 5 ਬਣਾਉਣਾ ਹੈ, ਤਾਂ ਸਿਰਫ਼ 4 ਵਾਲਾ ਅਤੇ 1 ਵਾਲਾ ਦੋਸਤ ਆਪਣੀ ਬੈਟਰੀ ON (1) ਕਰੇਗਾ (4 + 1 = 5), ਅਤੇ 8 ਤੇ 2 ਵਾਲੇ ਬੰਦ (0) ਰੱਖਣਗੇ। ਇਸ ਤਰ੍ਹਾਂ 5 ਦੀ ਬਾਈਨਰੀ ਬਣ ਗਈ: 0101!',
            technicalExplanationEn:
              '1. Positional Number Systems:\n• Decimal (Base-10): Uses powers of 10 (10⁰=1, 10¹=10, 10²=100).\n• Binary (Base-2): Uses powers of 2 from right to left: 2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128.\n• Hexadecimal (Base-16): Uses digits 0–9 and A–F (where A=10, B=11, C=12, D=13, E=14, F=15). Every 1 Hex digit maps cleanly to 4 Binary bits (a nibble).\n\n2. Boolean Logic Gates:\nTransistors are wired into Logic Gates:\n• AND Gate (A · B): Output is 1 ONLY if both inputs A=1 AND B=1.\n• OR Gate (A + B): Output is 1 if AT LEAST ONE input is 1.\n• NOT Gate (¬A): Inverts 0 to 1, and 1 to 0.\n• XOR Gate (A ⊕ B): Output is 1 when inputs are DIFFERENT (used as the Sum bit in binary addition!).',
            technicalExplanationPa:
              '1. ਬਾਈਨਰੀ ਤੋਂ ਡੈਸੀਮਲ (Binary to Decimal Conversion):\nਬਾਈਨਰੀ ਵਿੱਚ ਹਰ Bit ਦੀ ਕੀਮਤ ਸੱਜੇ ਤੋਂ ਖੱਬੇ 2 ਦੀ ਪਾਵਰ (1, 2, 4, 8, 16, 32, 64, 128) ਅਨੁਸਾਰ ਦੁੱਗਣੀ ਹੁੰਦੀ ਜਾਂਦੀ ਹੈ।\nਉਦਾਹਰਣ ਵਜੋਂ Binary `1101` ਨੂੰ Decimal ਵਿੱਚ ਬਦਲਣ ਲਈ:\n(1 × 8) + (1 × 4) + (0 × 2) + (1 × 1) = 8 + 4 + 0 + 1 = 13.\n\n2. Logic Gates (ਲੌਜਿਕ ਗੇਟ):\n• AND Gate: ਜਦੋਂ ਦੋਵੇਂ Input (A ਅਤੇ B) 1 ਹੋਣ, ਤਾਂ ਹੀ Output 1 ਆਉਂਦਾ ਹੈ।\n• OR Gate: ਜੇਕਰ ਦੋਵਾਂ ਵਿੱਚੋਂ ਕੋਈ ਇੱਕ ਵੀ Input 1 ਹੋਵੇ, ਤਾਂ Output 1 ਆਉਂਦਾ ਹੈ।\n• NOT Gate: ਇਹ ਉਲਟਾ ਕਰਦਾ ਹੈ (0 ਨੂੰ 1 ਅਤੇ 1 ਨੂੰ 0)।\n• XOR Gate: ਜਦੋਂ ਦੋਵੇਂ Input ਇੱਕ-ਦੂਜੇ ਤੋਂ ਵੱਖਰੇ ਹੋਣ (ਜਿਵੇਂ 0,1 ਜਾਂ 1,0) ਤਾਂ Output 1 ਹੁੰਦਾ ਹੈ। ਇਹ ਕੰਪਿਊਟਰ ਦੇ ALU ਵਿੱਚ ਜੋੜ (Addition) ਕਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ!',
            practicalExampleEn:
              'How does your computer add 1 + 1 in binary? Using a Half-Adder circuit made of just TWO gates: an XOR gate for the Sum bit, and an AND gate for the Carry bit! When A=1 and B=1: AND(1,1) = 1 (Carry) and XOR(1,1) = 0 (Sum), producing binary `10` (which equals 2 in decimal!).',
            practicalExamplePa:
              'ਕੰਪਿਊਟਰ ਦੇ ਅੰਦਰ 1 + 1 ਦਾ ਜੋੜ ਕਿਵੇਂ ਹੁੰਦਾ ਹੈ? ਸਿਰਫ਼ ਦੋ Logic Gates (ਇੱਕ XOR ਅਤੇ ਇੱਕ AND) ਨੂੰ ਜੋੜ ਕੇ Half-Adder ਸਰਕਟ ਬਣਦਾ ਹੈ! ਜਦੋਂ A=1 ਅਤੇ B=1 ਹੁੰਦਾ ਹੈ, ਤਾਂ AND ਗੇਟ Carry = 1 ਦਿੰਦਾ ਹੈ ਅਤੇ XOR ਗੇਟ Sum = 0 ਦਿੰਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਬਾਈਨਰੀ `10` (ਯਾਨੀ Decimal ਵਿੱਚ 2) ਬਣ ਜਾਂਦਾ ਹੈ!',
            codeDemo: `// Step-by-Step Binary Conversion & Half-Adder Logic in TypeScript
function decimalTo8BitBinary(decimalNumber: number): string {
  const weights = [128, 64, 32, 16, 8, 4, 2, 1];
  let remaining = decimalNumber;
  let bits = '';

  for (const w of weights) {
    if (remaining >= w) {
      bits += '1'; // Turn Torch ON
      remaining -= w;
    } else {
      bits += '0'; // Keep Torch OFF
    }
  }
  return bits;
}

// Hardware Half-Adder using pure Boolean Logic Gates
function halfAdder(bitA: 0 | 1, bitB: 0 | 1) {
  const sum = (bitA ^ bitB) as 0 | 1;   // XOR Gate
  const carry = (bitA & bitB) as 0 | 1; // AND Gate
  return { carry, sum }; // For 1 + 1 => { carry: 1, sum: 0 } -> Binary "10" (2)
}`,
            misconceptionsJson: [
              {
                myth: '10 in binary means the number ten.',
                truthEn: 'In binary (Base-2), `10` means (1 × 2¹) + (0 × 2⁰) = 2 in decimal! As the classic CS joke goes: "There are 10 types of people: those who understand binary, and those who don’t."',
                truthPa: 'ਬਾਈਨਰੀ ਵਿੱਚ `10` ਦਾ ਮਤਲਬ ਦਸ ਨਹੀਂ, ਸਗੋਂ Decimal ਦਾ `2` ਹੁੰਦਾ ਹੈ (ਕਿਉਂਕਿ ਖੱਬੇ ਪਾਸੇ ਵਾਲੇ 1 ਦੀ ਕੀਮਤ 2 ਹੈ ਅਤੇ ਸੱਜੇ ਪਾਸੇ 0 ਹੈ)।',
              },
            ],
            terminologyJson: [
              {
                term: 'Bit & Byte',
                punjabi: 'ਬਿੱਟ ਅਤੇ ਬਾਈਟ',
                meaningEn: 'A Bit is a single binary digit (0 or 1). 8 Bits grouped together form 1 Byte (capable of storing values 0 to 255).',
                meaningPa: 'Bit ਸਭ ਤੋਂ ਛੋਟੀ ਇਕਾਈ ਹੈ (0 ਜਾਂ 1)। 8 Bits ਮਿਲ ਕੇ 1 Byte ਬਣਾਉਂਦੇ ਹਨ (ਜੋ 0 ਤੋਂ 255 ਤੱਕ ਨੰਬਰ ਸਟੋਰ ਕਰ ਸਕਦਾ ਹੈ)।',
              },
              {
                term: 'Hexadecimal (Base-16)',
                punjabi: 'ਹੈਕਸਾਡੈਸੀਮਲ (Base-16)',
                meaningEn: 'Compact number system using 0-9 and A-F used for memory addresses and RGB color codes (e.g., #FF5733).',
                meaningPa: '16 ਅੰਕਾਂ ਵਾਲਾ ਸਿਸਟਮ (0-9 ਅਤੇ A-F) ਜੋ ਲੰਬੇ ਬਾਈਨਰੀ ਨੰਬਰਾਂ ਨੂੰ ਛੋਟਾ ਕਰਕੇ ਲਿਖਣ ਅਤੇ ਰੰਗਾਂ ਦੇ ਕੋਡਾਂ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
              },
              {
                term: 'Truth Table',
                punjabi: 'ਟਰੁੱਥ ਟੇਬਲ (ਸੱਚਾਈ ਸਾਰਣੀ)',
                meaningEn: 'Mathematical table listing all possible binary input combinations and the resulting output of a logic gate.',
                meaningPa: 'ਉਹ ਸਾਰਣੀ ਜੋ ਦਿਖਾਉਂਦੀ ਹੈ ਕਿ ਵੱਖ-ਵੱਖ 0 ਅਤੇ 1 ਦੇ Input ਦੇਣ ਨਾਲ Logic Gate ਦਾ Output ਕੀ ਹੋਵੇਗਾ।',
              },
            ],
            interactiveLabId: 'binary-converter',
            exercisePromptEn:
              'Use the Binary Converter & Logic Gate Labs to toggle the 8-bit switches to form Decimal 42, then test the XOR and NAND gates.',
            exercisePromptPa:
              'Binary Converter Lab ਵਿੱਚ 8-bit ਸਵਿੱਚਾਂ ਨੂੰ ਆਨ/ਆਫ ਕਰਕੇ 42 ਨੰਬਰ ਬਣਾਓ, ਅਤੇ ਫਿਰ Logic Gate Lab ਵਿੱਚ XOR ਗੇਟ ਟੈਸਟ ਕਰੋ।',
            summaryEn:
              'Binary (0 and 1) provides noise-immune physical reliability in transistors. Logic gates combine binary signals to execute all mathematical and logical operations.',
            summaryPa:
              'ਬਾਈਨਰੀ (0 ਅਤੇ 1) ਟ੍ਰਾਂਜ਼ਿਸਟਰਾਂ ਵਿੱਚ ਬਿਨਾਂ ਗਲਤੀ ਤੋਂ ਕੰਮ ਕਰਦੀ ਹੈ, ਅਤੇ Logic Gates ਇਨ੍ਹਾਂ ਸਿਗਨਲਾਂ ਨਾਲ ਸਾਰਾ ਗਣਿਤ ਹੱਲ ਕਰਦੇ ਹਨ।',
            furtherReadingJson: [
              'Charles Petzold — Code: The Hidden Language of Computer Hardware and Software',
              'Claude Shannon (1937) — A Symbolic Analysis of Relay and Switching Circuits',
            ],
            quiz: {
              titleEn: 'Level 3 Assessment: Binary, Hexadecimal & Logic Gates',
              titlePa: 'ਲੈਵਲ 3 ਟੈਸਟ: ਬਾਈਨਰੀ ਭਾਸ਼ਾ ਅਤੇ ਲੌਜਿਕ ਗੇਟ',
              timeLimitSeconds: 300,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'Binary Conversion',
                  promptEn: 'What is the Decimal value of the 4-bit binary number 1101?',
                  promptPa: '4-bit ਬਾਈਨਰੀ ਨੰਬਰ 1101 ਦੀ Decimal (ਦਸ਼ਮਲਵ) ਕੀਮਤ ਕੀ ਹੈ?',
                  optionsJson: ['13', '11', '14', '9'],
                  correctAnswer: '13',
                  explanationEn: 'Using weights 8, 4, 2, 1: (1×8) + (1×4) + (0×2) + (1×1) = 8 + 4 + 0 + 1 = 13.',
                  explanationPa: '8, 4, 2, 1 ਦੇ ਨਿਯਮ ਅਨੁਸਾਰ: 8 + 4 + 0 + 1 = 13 ਬਣਦਾ ਹੈ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Logic Gates',
                  promptEn: 'Which Logic Gate outputs 1 ONLY when its two inputs are DIFFERENT (one is 1 and the other is 0)?',
                  promptPa: 'ਕਿਹੜਾ Logic Gate ਸਿਰਫ਼ ਉਦੋਂ 1 ਦਿੰਦਾ ਹੈ ਜਦੋਂ ਦੋਵੇਂ Input ਇੱਕ-ਦੂਜੇ ਤੋਂ ਵੱਖਰੇ (ਇੱਕ 0 ਅਤੇ ਦੂਜਾ 1) ਹੋਣ?',
                  optionsJson: ['XOR', 'AND', 'OR', 'NOR'],
                  correctAnswer: 'XOR',
                  explanationEn: 'The Exclusive-OR (XOR) gate outputs 1 when inputs differ: (0,1)->1 and (1,0)->1, while (1,1)->0.',
                  explanationPa: 'XOR (Exclusive OR) ਗੇਟ ਉਦੋਂ 1 ਦਿੰਦਾ ਹੈ ਜਦੋਂ ਦੋਵੇਂ ਇਨਪੁੱਟ ਵੱਖ-ਵੱਖ ਹੋਣ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Bits & Bytes',
                  promptEn: 'How many bits make up 1 Byte, and what is the maximum unsigned decimal number 1 Byte can store?',
                  promptPa: '1 Byte ਵਿੱਚ ਕਿੰਨੇ Bits ਹੁੰਦੇ ਹਨ ਅਤੇ ਇਸ ਵਿੱਚ ਵੱਧ ਤੋਂ ਵੱਧ ਕਿੰਨਾ ਨੰਬਰ ਸਟੋਰ ਹੋ ਸਕਦਾ ਹੈ?',
                  optionsJson: [
                    '8 bits (max value 255)',
                    '4 bits (max value 15)',
                    '16 bits (max value 1024)',
                    '8 bits (max value 100)',
                  ],
                  correctAnswer: '8 bits (max value 255)',
                  explanationEn: '1 Byte = 8 bits. With all 8 bits set to 1 (11111111), the sum is 128+64+32+16+8+4+2+1 = 255 (256 total states including 0).',
                  explanationPa: '1 Byte ਵਿੱਚ 8 ਬਿੱਟ ਹੁੰਦੇ ਹਨ (11111111 = 128+64+32+16+8+4+2+1 = 255)।',
                },
                {
                  questionType: 'true_false',
                  topicTag: 'Logic Gates',
                  promptEn: 'True or False: A NAND gate is the inverted output of an AND gate, meaning NAND(1, 1) outputs 0.',
                  promptPa: 'ਸਹੀ ਜਾਂ ਗਲਤ: NAND ਗੇਟ AND ਗੇਟ ਦਾ ਉਲਟ ਹੁੰਦਾ ਹੈ, ਯਾਨੀ ਜਦੋਂ ਦੋਵੇਂ Input 1 ਹੋਣ ਤਾਂ NAND(1,1) ਦਾ Output 0 ਹੁੰਦਾ ਹੈ।',
                  optionsJson: ['True', 'False'],
                  correctAnswer: 'True',
                  explanationEn: 'AND(1,1) = 1, and passing that through NOT gives NAND(1,1) = 0.',
                  explanationPa: 'ਬਿਲਕੁਲ ਸਹੀ! AND(1,1) = 1 ਹੁੰਦਾ ਹੈ ਅਤੇ ਉਸਦਾ ਉਲਟ NAND(1,1) = 0 ਹੁੰਦਾ ਹੈ।',
                },
                {
                  questionType: 'fill_blank',
                  topicTag: 'Hexadecimal',
                  promptEn: 'In the Hexadecimal (Base-16) system, the decimal number 15 is represented by the single letter ____. (Type: F)',
                  promptPa: 'Hexadecimal (Base-16) ਸਿਸਟਮ ਵਿੱਚ ਨੰਬਰ 15 ਨੂੰ ਅੰਗਰੇਜ਼ੀ ਦੇ ਕਿਸ ਅੱਖਰ ਨਾਲ ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ? (F)',
                  optionsJson: ['F', 'A', 'E'],
                  correctAnswer: 'F',
                  explanationEn: 'In Hexadecimal, 10=A, 11=B, 12=C, 13=D, 14=E, and 15=F (binary 1111).',
                  explanationPa: 'Hexadecimal ਵਿੱਚ 10 ਤੋਂ 15 ਲਈ A, B, C, D, E, F ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ, ਇਸ ਲਈ 15 = F ਹੈ।',
                },
              ],
            },
          },
          {
            slug: 'combinational-sequential-flipflops-assembly-opcodes',
            orderIndex: 2,
            titleEn: '3.2 Two’s Complement, Combinational vs Sequential Circuits, Flip-Flops & Assembly Opcodes',
            titlePa: '3.2 Two’s Complement, Flip-Flops (Memory Circuits) ਅਤੇ Assembly ਭਾਸ਼ਾ',
            objectivesJson: [
              'Represent negative numbers in binary using Two’s Complement arithmetic',
              'Distinguish Combinational Logic (Adders, Multiplexers) from Sequential Logic (Flip-Flops, Latches)',
              'Explain how SR, D, and JK Flip-Flops store 1 bit of memory using clock pulses',
              'Trace how Registers, Counters, and Assembly Opcodes (LOAD, ADD, STORE) operate on binary words',
            ],
            prerequisitesJson: ['3.1 How Binary (0 & 1), Number Conversions & Logic Gates Work'],
            childAnalogyEn:
              '1. Combinational vs Sequential Logic (Calculator vs Light Switch with Memory):\n• Combinational Logic (like an AND gate or Adder) has NO memory—as soon as you take your finger off the button, the output disappears!\n• Sequential Logic (a Flip-Flop) is like a bedroom wall switch that clicks and STAYS in position even after you walk away! One Flip-Flop remembers 1 bit (0 or 1). Group 64 Flip-Flops together, and you have a 64-bit CPU Register!\n\n2. Two’s Complement (Car Odometer Rolling Backwards):\nIf a bicycle counter is at `0000` and you roll it backwards by 1 step, it shows `9999` (or in binary `1111` = -1)! That allows the CPU to subtract numbers using the exact same Adder circuit!',
            childAnalogyPa:
              '1. Flip-Flop ਕੀ ਹੁੰਦਾ ਹੈ? (ਯਾਦਦਾਸ਼ਤ ਵਾਲਾ ਸਵਿੱਚ):\nਸਾਧਾਰਨ Logic Gate ਕੋਲ ਕੋਈ ਯਾਦਦਾਸ਼ਤ (Memory) ਨਹੀਂ ਹੁੰਦੀ—ਜਦੋਂ ਤੱਕ Input ਦੱਬੀ ਰੱਖੋ ਉਦੋਂ ਤੱਕ ਹੀ Output ਆਉਂਦਾ ਹੈ।\nਪਰ Flip-Flop ਕੰਧ ਉੱਤੇ ਲੱਗੇ ਉਸ ਬਟਨ ਵਾਂਗ ਹੈ ਜਿਸਨੂੰ ਇੱਕ ਵਾਰ ਦੱਬ ਕੇ ਛੱਡ ਦਿਓ ਤਾਂ ਉਹ ਆਪਣੀ ਸਥਿਤੀ (0 ਜਾਂ 1) ਯਾਦ ਰੱਖਦਾ ਹੈ! ਇੱਕ Flip-Flop 1 Bit ਸਟੋਰ ਕਰਦਾ ਹੈ, ਅਤੇ 64 Flip-Flops ਮਿਲ ਕੇ CPU ਦਾ 64-bit Register ਬਣਾਉਂਦੇ ਹਨ!\n\n2. Two’s Complement (ਮਾਈਨਸ ਵਾਲੇ ਨੰਬਰ):\nਕੰਪਿਊਟਰ ਵਿੱਚ `-5` ਕਿਵੇਂ ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ? ਪਹਿਲਾਂ `+5` ਦੀ ਬਾਈਨਰੀ ਲਿਖੋ (`0101`), ਫਿਰ ਸਾਰੇ ਬਿੱਟ ਉਲਟਾ ਦਿਓ (`1010`), ਅਤੇ ਉਸ ਵਿੱਚ `1` ਜੋੜ ਦਿਓ (`1011` = -5)! ਇਸ ਨਾਲ CPU ਜੋੜ ਕਰਨ ਵਾਲੇ ਸਰਕਟ ਨਾਲ ਹੀ ਘਟਾਓ (Subtraction) ਵੀ ਕਰ ਲੈਂਦਾ ਹੈ!',
            technicalExplanationEn:
              '1. Two’s Complement Signed Arithmetic:\nTo negate a binary integer: invert all bits (One’s complement) and add 1. In 4-bit Two’s Complement, `0101` is +5, invert -> `1010`, add 1 -> `1011` (-5). Adding `0101 + 1011 = 0000` cleanly.\n\n2. Combinational vs Sequential Logic:\n• Combinational: Output depends purely on current inputs (Half Adder, Full Adder, Multiplexer/MUX, Decoder).\n• Sequential: Output depends on current inputs AND past state stored in feedback latches synchronized by a Clock signal (SR Latch, D Flip-Flop, JK Flip-Flop).\n\n3. Registers, Counters & Assembly Opcodes:\n• Parallel D Flip-Flops form CPU Registers.\n• T/JK Flip-Flops chained together form Binary Counters (like the Program Counter).\n• Assembly instructions (`LOAD R1, #14`) map 1-to-1 to binary machine opcodes.',
            technicalExplanationPa:
              '1. Combinational Circuits: ਜਿਨ੍ਹਾਂ ਦਾ ਨਤੀਜਾ ਸਿਰਫ਼ ਮੌਜੂਦਾ Input ਉੱਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ — ਜਿਵੇਂ Half Adder, Full Adder ਅਤੇ Multiplexer (ਜੋ ਕਈ ਸਿਗਨਲਾਂ ਵਿੱਚੋਂ ਇੱਕ ਚੁਣਦਾ ਹੈ)।\n2. Sequential Circuits: ਜਿਨ੍ਹਾਂ ਵਿੱਚ Clock ਸਿਗਨਲ ਦੇ ਨਾਲ ਪੁਰਾਣਾ ਡਾਟਾ ਯਾਦ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ — ਜਿਵੇਂ SR, D ਅਤੇ JK Flip-Flops।\n3. Assembly Opcodes: ਮਸ਼ੀਨੀ ਬਾਈਨਰੀ ਕੋਡ (`10110000`) ਨੂੰ ਇਨਸਾਨਾਂ ਲਈ ਪੜ੍ਹਨਾ ਔਖਾ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ ਅਸੀਂ `LOAD`, `ADD`, `STORE` ਵਰਗੇ ਛੋਟੇ ਅੰਗਰੇਜ਼ੀ ਸ਼ਬਦ (Mnemonics) ਵਰਤਦੇ ਹਾਂ ਜਿਨ੍ਹਾਂ ਨੂੰ Assembly Language ਕਹਿੰਦੇ ਹਨ।',
            practicalExampleEn:
              'Every single bit inside your CPU’s Program Counter (PC) and Accumulator (ACC) is physically built out of D Flip-Flop circuits that latch new binary values on the rising edge of the CPU clock!',
            practicalExamplePa:
              'ਤੁਹਾਡੇ CPU ਦੇ ਅੰਦਰ ਮੌਜੂਦ ਹਰ Register ਅਸਲ ਵਿੱਚ D Flip-Flop ਸਰਕਟਾਂ ਤੋਂ ਬਣਿਆ ਹੁੰਦਾ ਹੈ ਜੋ Clock ਦੀ ਹਰ ਟਿੱਕ ਉੱਤੇ 0 ਅਤੇ 1 ਨੂੰ ਸਟੋਰ ਕਰਦਾ ਹੈ।',
            codeDemo: `// Two's Complement & D Flip-Flop Simulation in TypeScript
function to8BitTwosComplement(negativeNum: number): string {
  const absBits = Math.abs(negativeNum).toString(2).padStart(8, '0');
  // Step 1: Invert all bits (0->1, 1->0)
  const onesComplement = absBits
    .split('')
    .map((b) => (b === '0' ? '1' : '0'))
    .join('');
  // Step 2: Add 1
  const twosVal = (parseInt(onesComplement, 2) + 1) & 0xff;
  return twosVal.toString(2).padStart(8, '0');
}
// Example: -5 in 8-bit Two's Complement => "11111011"`,
            misconceptionsJson: [
              {
                myth: 'A CPU has separate hardware circuits for addition and subtraction.',
                truthEn: 'Thanks to Two’s Complement representation, the ALU performs subtraction `A - B` using the exact same Adder circuit by computing `A + (~B + 1)`!',
                truthPa: 'Two’s Complement ਦੀ ਮਦਦ ਨਾਲ CPU ਦਾ ALU ਘਟਾਓ ਕਰਨ ਲਈ ਵੱਖਰਾ ਸਰਕਟ ਨਹੀਂ ਵਰਤਦਾ, ਸਗੋਂ ਜੋੜ (Adder) ਵਾਲੇ ਸਰਕਟ ਨਾਲ ਹੀ ਘਟਾਓ ਕਰ ਲੈਂਦਾ ਹੈ!',
              },
            ],
            terminologyJson: [
              {
                term: 'Two’s Complement',
                punjabi: 'ਟੂਜ਼ ਕੰਪਲੀਮੈਂਟ',
                meaningEn: 'Standard binary representation for signed (positive and negative) integers achieved by inverting bits and adding 1.',
                meaningPa: 'ਬਾਈਨਰੀ ਵਿੱਚ ਮਾਈਨਸ (Negative) ਨੰਬਰ ਲਿਖਣ ਦਾ ਤਰੀਕਾ: ਬਿੱਟ ਉਲਟਾ ਕੇ 1 ਜੋੜਨਾ।',
              },
              {
                term: 'D Flip-Flop',
                punjabi: 'ਡੀ ਫਲਿੱਪ-ਫਲੌਪ',
                meaningEn: 'Clocked sequential circuit that captures and stores a single binary bit (0 or 1) until the next clock edge.',
                meaningPa: 'ਉਹ ਇਲੈਕਟ੍ਰਾਨਿਕ ਸਰਕਟ ਜੋ 1 ਬਿੱਟ (0 ਜਾਂ 1) ਨੂੰ ਮੈਮੋਰੀ ਵਜੋਂ ਸਟੋਰ ਕਰਕੇ ਰੱਖਦਾ ਹੈ।',
              },
              {
                term: 'Multiplexer (MUX)',
                punjabi: 'ਮਲਟੀਪਲੈਕਸਰ',
                meaningEn: 'Combinational circuit that selects one of several input signals and forwards it to a single output line.',
                meaningPa: 'ਉਹ ਸਰਕਟ ਜੋ ਕਈ Input ਲਾਈਨਾਂ ਵਿੱਚੋਂ ਇੱਕ ਨੂੰ ਚੁਣ ਕੇ ਅੱਗੇ ਭੇਜਦਾ ਹੈ।',
              },
            ],
            interactiveLabId: 'cpu-cycle',
            exercisePromptEn:
              'Step through all 4 assembly instructions in the CPU Cycle Lab and observe how each stage updates registers on clock transitions.',
            exercisePromptPa:
              'CPU Cycle Lab ਵਿੱਚ ਚਾਰੇ Assembly ਹਦਾਇਤਾਂ ਨੂੰ ਇੱਕ-ਇੱਕ ਸਟੇਜ ਕਰਕੇ ਚਲਾਓ ਅਤੇ ਰਜਿਸਟਰਾਂ ਵਿੱਚ ਬਦਲਾਅ ਦੇਖੋ।',
            summaryEn:
              'Two’s complement unifies addition and subtraction, Combinational circuits compute immediate logic, Sequential Flip-Flops store state in registers, and Assembly mnemonics control the CPU.',
            summaryPa:
              'Two’s complement ਨਾਲ ਘਟਾਓ ਹੁੰਦਾ ਹੈ, Flip-Flops ਨਾਲ ਮੈਮੋਰੀ ਰਜਿਸਟਰ ਬਣਦੇ ਹਨ ਅਤੇ Assembly ਕੋਡ ਨਾਲ CPU ਚੱਲਦਾ ਹੈ।',
            furtherReadingJson: [
              'M. Morris Mano — Digital Design: With an Introduction to the Verilog HDL',
            ],
            quiz: {
              titleEn: 'Level 3.2 Assessment: Two’s Complement, Flip-Flops & Assembly',
              titlePa: 'ਲੈਵਲ 3.2 ਟੈਸਟ: Flip-Flops, Two’s Complement ਅਤੇ ਅਸੈਂਬਲੀ',
              timeLimitSeconds: 240,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'Sequential Logic',
                  promptEn: 'Which sequential circuit element is capable of storing 1 bit of binary state and serves as the building block of CPU Registers?',
                  promptPa: 'ਕਿਹੜਾ ਸਰਕਟ 1 ਬਿੱਟ (0 ਜਾਂ 1) ਨੂੰ ਯਾਦ ਰੱਖ ਸਕਦਾ ਹੈ ਅਤੇ CPU Registers ਬਣਾਉਣ ਦੇ ਕੰਮ ਆਉਂਦਾ ਹੈ?',
                  optionsJson: ['Flip-Flop (e.g., D Flip-Flop)', 'Simple Wire', 'Passive Resistor', 'Heatsink'],
                  correctAnswer: 'Flip-Flop (e.g., D Flip-Flop)',
                  explanationEn: 'Flip-Flops are bistable sequential circuits that store 1 bit of data across clock cycles.',
                  explanationPa: 'Flip-Flop 1 ਬਿੱਟ ਡਾਟਾ ਸਟੋਰ ਕਰਦਾ ਹੈ ਅਤੇ ਇਸੇ ਤੋਂ CPU ਦੇ Registers ਬਣਦੇ ਹਨ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Two’s Complement',
                  promptEn: 'How do you compute the Two’s Complement of a binary number?',
                  promptPa: 'ਕਿਸੇ ਬਾਈਨਰੀ ਨੰਬਰ ਦਾ Two’s Complement ਕਿਵੇਂ ਕੱਢਿਆ ਜਾਂਦਾ ਹੈ?',
                  optionsJson: [
                    'Invert all bits (0↔1) and add 1',
                    'Multiply the number by 10',
                    'Delete all 1s',
                    'Add 8 zeros to the left',
                  ],
                  correctAnswer: 'Invert all bits (0↔1) and add 1',
                  explanationEn: 'Two’s complement is formed by taking the One’s complement (inverting every bit) and adding 1 to the least significant bit.',
                  explanationPa: 'ਸਾਰੇ ਬਿੱਟਾਂ ਨੂੰ ਉਲਟਾ ਕਰਕੇ (0 ਨੂੰ 1 ਅਤੇ 1 ਨੂੰ 0) ਉਸ ਵਿੱਚ 1 ਜੋੜਨ ਨਾਲ Two’s Complement ਬਣਦਾ ਹੈ।',
                },
                {
                  questionType: 'true_false',
                  topicTag: 'Combinational vs Sequential',
                  promptEn: 'True or False: Combinational logic circuits (like a basic AND gate) have built-in memory of past inputs.',
                  promptPa: 'ਸਹੀ ਜਾਂ ਗਲਤ: Combinational ਸਰਕਟਾਂ ਕੋਲ ਪੁਰਾਣੇ ਇਨਪੁੱਟ ਯਾਦ ਰੱਖਣ ਲਈ ਮੈਮੋਰੀ ਹੁੰਦੀ ਹੈ।',
                  optionsJson: ['True', 'False'],
                  correctAnswer: 'False',
                  explanationEn: 'Combinational circuits are memoryless; their output depends solely on present inputs. Only Sequential circuits have memory.',
                  explanationPa: 'ਗਲਤ! ਸਿਰਫ਼ Sequential ਸਰਕਟਾਂ (Flip-Flops) ਕੋਲ ਮੈਮੋਰੀ ਹੁੰਦੀ ਹੈ।',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'level-4-operating-systems',
    levelNumber: 4,
    titleEn: 'Level 4: Operating Systems, Kernel, Processes & Memory Management',
    titlePa: 'ਲੈਵਲ 4: ਓਪਰੇਟਿੰਗ ਸਿਸਟਮ ਅਤੇ ਕਰਨਲ (Operating Systems)',
    descriptionEn:
      'OS Kernel architecture, Windows vs Linux, Processes and Threads, Virtual Memory & Paging, File Systems, Boot Sequence, and CLI permissions.',
    descriptionPa:
      'Operating System ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ, Kernel, Processes ਅਤੇ Threads, Virtual Memory, Linux File System ਅਤੇ Boot Sequence।',
    category: 'core-cs',
    estimatedHours: 7,
    modules: [
      {
        orderIndex: 1,
        titleEn: 'OS Kernel, Processes & Virtual Memory',
        titlePa: 'OS ਕਰਨਲ, ਪ੍ਰੋਸੈਸ ਅਤੇ ਵਰਚੁਅਲ ਮੈਮੋਰੀ',
        summaryEn: 'Learn how the Operating System acts as a resource manager and referee between apps and hardware.',
        summaryPa: 'ਸਮਝੋ ਕਿਵੇਂ Operating System ਐਪਸ ਅਤੇ ਹਾਰਡਵੇਅਰ ਦੇ ਵਿਚਕਾਰ ਇੱਕ ਇਮਾਨਦਾਰ ਰੈਫਰੀ ਵਾਂਗ ਕੰਮ ਕਰਦਾ ਹੈ।',
        lessons: [
          {
            slug: 'os-kernel-processes-threads',
            orderIndex: 1,
            titleEn: '4.1 OS Kernel, Processes vs Threads & Virtual Memory',
            titlePa: '4.1 ਓਪਰੇਟਿੰਗ ਸਿਸਟਮ (Kernel, Processes, Threads & Virtual Memory)',
            objectivesJson: [
              'Explain the role of the OS Kernel and User Mode vs Kernel Mode rings',
              'Distinguish between a Process (isolated memory space) and a Thread (shared memory execution unit)',
              'Understand CPU Scheduling, Context Switching, and Virtual Memory Paging',
              'Trace the complete Boot Sequence from Power-On Self-Test (POST) to OS login',
            ],
            prerequisitesJson: ['2.1 CPU Architecture (ALU, CU, Registers) & RAM vs Storage'],
            childAnalogyEn:
              'Imagine a busy School Principal (ਸਕੂਲ ਦਾ ਪ੍ਰਿੰਸੀਪਲ) managing classrooms:\nWithout the Principal, 50 teachers and students would fight over the same chalkboard and projector at the same time!\nThe Operating System (OS) Kernel is that strict but fair Principal. Each running app (like Safari or Spotify) is given its own separate classroom called a PROCESS, so if one classroom makes a mess, the other classrooms stay safe!\nInside one classroom, 3 teachers working together on the same chalkboard are THREADS—they share the same room (RAM space) to finish the job faster!',
            childAnalogyPa:
              'Operating System (OS) ਨੂੰ ਇੱਕ ਸਕੂਲ ਦੇ ਪ੍ਰਿੰਸੀਪਲ ਜਾਂ ਟ੍ਰੈਫਿਕ ਪੁਲਿਸ ਅਫ਼ਸਰ ਵਾਂਗ ਸਮਝੋ!\nਜੇਕਰ ਚੌਰਾਹੇ ਉੱਤੇ ਟ੍ਰੈਫਿਕ ਪੁਲਿਸ ਨਾ ਹੋਵੇ, ਤਾਂ ਸਾਰੀਆਂ ਗੱਡੀਆਂ (Apps) ਆਪਸ ਵਿੱਚ ਟਕਰਾ ਜਾਣਗੀਆਂ ਕਿ ਪਹਿਲਾਂ CPU ਅਤੇ RAM ਕੌਣ ਵਰਤੇਗਾ।\n• Kernel ਉਹ ਮੁੱਖ ਅਫ਼ਸਰ ਹੈ ਜੋ ਹਰ ਐਪ ਨੂੰ ਵਾਰੀ-ਵਾਰੀ ਸਮਾਂ (Time Slice) ਦਿੰਦਾ ਹੈ।\n• Process: ਜਦੋਂ ਕੋਈ ਪ੍ਰੋਗਰਾਮ ਚੱਲਦਾ ਹੈ, ਤਾਂ OS ਉਸਨੂੰ ਆਪਣਾ ਵੱਖਰਾ ਕਮਰਾ (Isolated Memory) ਦਿੰਦਾ ਹੈ ਜਿਸਨੂੰ Process ਕਹਿੰਦੇ ਹਨ।\n• Thread: ਇੱਕੋ ਕਮਰੇ (Process) ਦੇ ਅੰਦਰ ਮਿਲ ਕੇ ਕੰਮ ਕਰਨ ਵਾਲੇ ਕਾਮਿਆਂ ਨੂੰ Threads ਕਹਿੰਦੇ ਹਨ—ਜਿਵੇਂ ਵੀਡੀਓ ਪਲੇਅਰ ਵਿੱਚ ਇੱਕ Thread ਆਵਾਜ਼ ਚਲਾਉਂਦਾ ਹੈ ਅਤੇ ਦੂਜਾ Thread ਤਸਵੀਰ ਦਿਖਾਉਂਦਾ ਹੈ!',
            technicalExplanationEn:
              '1. Kernel vs User Space:\nModern CPUs enforce privilege rings. Applications run in unprivileged User Mode and must issue System Calls (`syscall`) to ask the Kernel to read files, allocate RAM, or send network packets.\n\n2. Processes vs Threads:\n• Process: An executing instance of a program with its own Process Control Block (PCB), virtual address space, and file descriptors.\n• Thread: The smallest unit of CPU scheduling within a process. Threads share heap memory but maintain their own stack and registers.\n\n3. Virtual Memory:\nThe OS and MMU (Memory Management Unit) translate virtual addresses into physical RAM page frames (typically 4 KB pages), allowing safe isolation and demand paging.',
            technicalExplanationPa:
              '1. Kernel (ਕਰਨਲ): ਇਹ Operating System ਦਾ ਦਿਲ ਹੁੰਦਾ ਹੈ। ਕੋਈ ਵੀ ਐਪ ਸਿੱਧੇ ਤੌਰ ਤੇ ਹਾਰਡਵੇਅਰ ਨੂੰ ਹੱਥ ਨਹੀਂ ਲਗਾ ਸਕਦੀ; ਉਸਨੂੰ Kernel ਨੂੰ System Call ਰਾਹੀਂ ਬੇਨਤੀ ਕਰਨੀ ਪੈਂਦੀ ਹੈ।\n2. Process ਬਨਾਮ Thread: ਹਰੇਕ Process ਦੀ ਆਪਣੀ ਵੱਖਰੀ ਮੈਮੋਰੀ ਹੁੰਦੀ ਹੈ (ਤਾਂ ਜੋ ਇੱਕ ਐਪ ਕ੍ਰੈਸ਼ ਹੋਣ ਤੇ ਦੂਜੀ ਬੰਦ ਨਾ ਹੋਵੇ), ਜਦਕਿ ਇੱਕ Process ਦੇ ਅੰਦਰ ਕਈ Threads ਇੱਕੋ ਮੈਮੋਰੀ ਸਾਂਝੀ ਕਰਕੇ ਤੇਜ਼ੀ ਨਾਲ ਕੰਮ ਕਰਦੇ ਹਨ।\n3. Boot Sequence: ਪਾਵਰ ਬਟਨ ਦੱਬਣ ਤੇ ਪਹਿਲਾਂ POST (Power-On Self-Test) -> UEFI/BIOS -> Bootloader (GRUB/Windows Boot Manager) -> OS Kernel RAM ਵਿੱਚ ਲੋਡ ਹੁੰਦਾ ਹੈ।',
            practicalExampleEn:
              'On your iPhone (iOS / Darwin XNU Kernel), if a game freezes or crashes, iOS immediately terminates just that game’s Process without crashing your phone call or alarm clock, thanks to Virtual Memory process isolation.',
            practicalExamplePa:
              'ਜਦੋਂ ਤੁਹਾਡੇ iPhone ਉੱਤੇ ਕੋਈ ਇੱਕ ਐਪ ਅਚਾਨਕ ਬੰਦ (Crash) ਹੋ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਤੁਹਾਡਾ ਪੂਰਾ ਫ਼ੋਨ ਬੰਦ ਨਹੀਂ ਹੁੰਦਾ ਕਿਉਂਕਿ iOS ਦਾ Kernel ਹਰੇਕ ਐਪ ਨੂੰ ਵੱਖਰੇ Process ਵਜੋਂ ਚਲਾਉਂਦਾ ਹੈ।',
            codeDemo: `# Essential Linux / macOS System Administration & Process Commands
ps aux | grep node        # View running Processes and PIDs
top                       # Real-time CPU & RAM utilization per Process
chmod 755 script.sh       # Permissions: Owner(rwx=7), Group(r-x=5), Others(r-x=5)
df -h                     # Check mounted File System disk space`,
            misconceptionsJson: [
              {
                myth: 'A single-core CPU can never run more than one program.',
                truthEn: 'Through preemptive multitasking and rapid Context Switching (hundreds of times per second), a single core interleaves many processes smoothly.',
                truthPa: 'ਇੱਕ ਸਿੰਗਲ-ਕੋਰ CPU ਵੀ ਇੱਕੋ ਸਕਿੰਟ ਵਿੱਚ ਸੈਂਕੜੇ ਵਾਰ ਵਾਰੀ ਬਦਲ ਕੇ (Context Switching ਰਾਹੀਂ) ਕਈ ਪ੍ਰੋਗਰਾਮ ਇਕੱਠੇ ਚਲਾ ਸਕਦਾ ਹੈ।',
              },
            ],
            terminologyJson: [
              {
                term: 'Kernel',
                punjabi: 'ਕਰਨਲ',
                meaningEn: 'Core component of the OS that manages CPU scheduling, memory allocation, and hardware device drivers.',
                meaningPa: 'ਓਪਰੇਟਿੰਗ ਸਿਸਟਮ ਦਾ ਮੁੱਖ ਹਿੱਸਾ ਜੋ ਸਿੱਧਾ CPU, RAM ਅਤੇ ਡਿਵਾਈਸਾਂ ਨੂੰ ਕੰਟਰੋਲ ਕਰਦਾ ਹੈ।',
              },
              {
                term: 'Context Switch',
                punjabi: 'ਕੰਟੈਕਸਟ ਸਵਿੱਚ',
                meaningEn: 'Saving the CPU register state of one process and loading the state of another process to share CPU time.',
                meaningPa: 'CPU ਵੱਲੋਂ ਇੱਕ ਪ੍ਰੋਗਰਾਮ ਦੀ ਮੌਜੂਦਾ ਸਥਿਤੀ ਸੇਵ ਕਰਕੇ ਦੂਜੇ ਪ੍ਰੋਗਰਾਮ ਨੂੰ ਚਲਾਉਣ ਦੀ ਪ੍ਰਕਿਰਿਆ।',
              },
            ],
            interactiveLabId: 'ram-storage',
            exercisePromptEn:
              'Open the Memory Hierarchy Lab to compare how the OS moves pages between NVMe Storage, DRAM, and CPU Cache.',
            exercisePromptPa:
              'Memory Hierarchy Lab ਖੋਲ੍ਹੋ ਅਤੇ ਦੇਖੋ ਕਿ OS ਕਿਵੇਂ ਫਾਈਲਾਂ ਨੂੰ SSD ਤੋਂ RAM ਅਤੇ Cache ਵਿੱਚ ਲਿਆਉਂਦਾ ਹੈ।',
            summaryEn:
              'The Operating System abstracts hardware complexity, isolates processes via virtual memory, and schedules threads fairly across CPU cores.',
            summaryPa:
              'Operating System ਹਾਰਡਵੇਅਰ ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ, ਹਰੇਕ ਐਪ ਨੂੰ ਸੁਰੱਖਿਅਤ ਮੈਮੋਰੀ ਦਿੰਦਾ ਹੈ ਅਤੇ CPU ਦਾ ਸਮਾਂ ਬਰਾਬਰ ਵੰਡਦਾ ਹੈ।',
            furtherReadingJson: [
              'Remzi & Andrea Arpaci-Dusseau — Operating Systems: Three Easy Pieces (OSTEP)',
            ],
            quiz: {
              titleEn: 'Level 4 Assessment: Operating Systems & Processes',
              titlePa: 'ਲੈਵਲ 4 ਟੈਸਟ: ਓਪਰੇਟਿੰਗ ਸਿਸਟਮ ਅਤੇ ਪ੍ਰੋਸੈਸ',
              timeLimitSeconds: 240,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'OS Architecture',
                  promptEn: 'Which core part of the Operating System stays in RAM at all times and directly manages hardware resources?',
                  promptPa: 'ਓਪਰੇਟਿੰਗ ਸਿਸਟਮ ਦਾ ਕਿਹੜਾ ਮੁੱਖ ਹਿੱਸਾ ਹਮੇਸ਼ਾ RAM ਵਿੱਚ ਰਹਿੰਦਾ ਹੈ ਅਤੇ ਹਾਰਡਵੇਅਰ ਨੂੰ ਸਿੱਧਾ ਕੰਟਰੋਲ ਕਰਦਾ ਹੈ?',
                  optionsJson: ['Kernel', 'Web Browser', 'Text Editor', 'Compiler'],
                  correctAnswer: 'Kernel',
                  explanationEn: 'The Kernel is the privileged core of the OS responsible for memory, process scheduling, and device drivers.',
                  explanationPa: 'Kernel ਓਪਰੇਟਿੰਗ ਸਿਸਟਮ ਦਾ ਸਭ ਤੋਂ ਮੁੱਖ ਹਿੱਸਾ ਹੈ ਜੋ ਹਾਰਡਵੇਅਰ ਅਤੇ ਮੈਮੋਰੀ ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Processes vs Threads',
                  promptEn: 'What is the key difference between a Process and a Thread?',
                  promptPa: 'ਇੱਕ Process ਅਤੇ Thread ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਡਾ ਫ਼ਰਕ ਕੀ ਹੁੰਦਾ ਹੈ?',
                  optionsJson: [
                    'Threads within the same process share memory space, whereas separate processes have isolated memory',
                    'Processes cannot use the CPU, only threads have hard drives',
                    'Threads only exist on Windows, not Linux',
                    'Processes are physical hardware cables',
                  ],
                  correctAnswer:
                    'Threads within the same process share memory space, whereas separate processes have isolated memory',
                  explanationEn: 'Processes are isolated by virtual memory, while threads inside the same process share the same address space.',
                  explanationPa: 'ਵੱਖ-ਵੱਖ Processes ਦੀ ਮੈਮੋਰੀ ਵੱਖਰੀ ਹੁੰਦੀ ਹੈ, ਪਰ ਇੱਕੋ Process ਦੇ Threads ਆਪਸ ਵਿੱਚ ਮੈਮੋਰੀ ਸਾਂਝੀ ਕਰਦੇ ਹਨ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Linux Permissions',
                  promptEn: 'In Linux permissions, what does numeric permission 7 (rwx) grant to the file owner?',
                  promptPa: 'Linux ਵਿੱਚ Permission ਨੰਬਰ 7 (rwx) ਫਾਈਲ ਦੇ ਮਾਲਕ ਨੂੰ ਕੀ ਅਧਿਕਾਰ ਦਿੰਦਾ ਹੈ?',
                  optionsJson: [
                    'Read (4) + Write (2) + Execute (1) = Full access',
                    'Read only access',
                    'Delete hard drive only',
                    'No permissions at all',
                  ],
                  correctAnswer: 'Read (4) + Write (2) + Execute (1) = Full access',
                  explanationEn: 'In octal notation, Read=4, Write=2, Execute=1. Their sum 4+2+1 = 7 grants full read, write, and execute rights.',
                  explanationPa: 'Read(4) + Write(2) + Execute(1) = 7 ਦਾ ਮਤਲਬ ਪੜ੍ਹਨ, ਲਿਖਣ ਅਤੇ ਚਲਾਉਣ ਦੇ ਪੂਰੇ ਅਧਿਕਾਰ ਹਨ।',
                },
              ],
            },
          },
          {
            slug: 'os-drivers-boot-cli-permissions-virtualization',
            orderIndex: 2,
            titleEn: '4.2 File Systems (ext4/NTFS), Device Drivers, Boot Sequence & Virtualization',
            titlePa: '4.2 ਫਾਈਲ ਸਿਸਟਮ, ਡਿਵਾਈਸ ਡਰਾਈਵਰ, Boot Sequence ਅਤੇ Virtualization',
            objectivesJson: [
              'Compare Linux ext4 inode structures with Windows NT/NTFS architecture',
              'Explain how Device Drivers act as translators between the OS Kernel and hardware controllers',
              'Trace the 4-stage Boot Sequence: POST -> UEFI/BIOS -> Bootloader -> Kernel Init',
              'Understand Virtualization (Hypervisors/VMs) vs OS Containers (Docker/cgroups)',
            ],
            prerequisitesJson: ['4.1 OS Kernel, Processes vs Threads & Virtual Memory'],
            childAnalogyEn:
              '1. What is a Device Driver? (ਦੁਭਾਸ਼ੀਆ / Translator):\nSuppose a Punjabi-speaking Principal (OS Kernel) hires a new Japanese Art Teacher (a new Canon Printer). They don’t speak the same language! When you install a "Printer Driver", you hand the Principal a translation dictionary so the OS knows exactly how to tell that specific printer to print a page!\n\n2. Virtual Machines vs Containers:\n• A Virtual Machine (VM) is like building a whole separate Guest House with its own plumbing, kitchen, and electricity meter (full guest OS kernel).\n• A Container (like Docker) is like giving a guest a private locked room inside the main house—sharing the same main plumbing and electricity (sharing the host Linux Kernel) so it starts in 1 second!',
            childAnalogyPa:
              '1. Device Driver ਕੀ ਹੁੰਦਾ ਹੈ? (ਭਾਸ਼ਾ ਸਮਝਾਉਣ ਵਾਲਾ ਦੁਭਾਸ਼ੀਆ):\nਜਦੋਂ ਤੁਸੀਂ ਕੰਪਿਊਟਰ ਨਾਲ ਨਵਾਂ Printer ਜਾਂ Graphics Card ਜੋੜਦੇ ਹੋ, ਤਾਂ Operating System ਨੂੰ ਉਸ ਨਵੀਂ ਮਸ਼ੀਨ ਦੀ ਅੰਦਰੂਨੀ ਭਾਸ਼ਾ ਨਹੀਂ ਪਤਾ ਹੁੰਦੀ। Device Driver ਇੱਕ ਅਨੁਵਾਦਕ (Translator) ਵਾਂਗ ਕੰਮ ਕਰਦਾ ਹੈ ਜੋ OS ਦੇ ਹੁਕਮਾਂ ਨੂੰ ਉਸ ਹਾਰਡਵੇਅਰ ਤੱਕ ਪਹੁੰਚਾਉਂਦਾ ਹੈ!\n\n2. Boot Sequence (ਕੰਪਿਊਟਰ ਸਵੇਰੇ ਕਿਵੇਂ ਜਾਗਦਾ ਹੈ?):\nਜਦੋਂ ਤੁਸੀਂ ਪਾਵਰ ਬਟਨ ਦੱਬਦੇ ਹੋ:\n• ਕਦਮ 1 (POST): ਮਦਰਬੋਰਡ ਚੈੱਕ ਕਰਦਾ ਹੈ ਕਿ CPU, RAM ਅਤੇ ਕੀਬੋਰਡ ਠੀਕ ਲੱਗੇ ਹਨ ਜਾਂ ਨਹੀਂ।\n• ਕਦਮ 2 (UEFI/BIOS): ROM ਚਿੱਪ ਜਾਗਦੀ ਹੈ ਅਤੇ SSD ਲੱਭਦੀ ਹੈ।\n• ਕਦਮ 3 (Bootloader): GRUB ਜਾਂ Windows Boot Manager ਚੱਲਦਾ ਹੈ।\n• ਕਦਮ 4 (Kernel Load): Operating System ਦਾ Kernel SSD ਤੋਂ ਉੱਠ ਕੇ RAM ਵਿੱਚ ਆ ਜਾਂਦਾ ਹੈ ਅਤੇ Login ਸਕ੍ਰੀਨ ਖੁੱਲ੍ਹ ਜਾਂਦੀ ਹੈ!',
            technicalExplanationEn:
              '1. File Systems & Inodes:\n• Linux (`ext4` / `XFS`): Uses Inodes (index nodes) storing file metadata, permissions, and pointers to disk blocks. Everything in Linux is represented under a single root hierarchy `/`.\n• Windows NT (`NTFS`): Uses the Master File Table (MFT), Access Control Lists (ACLs), and drive letters (`C:\\`).\n\n2. Virtualization vs Containers:\n• Hypervisor (KVM, VMware): Emulates virtual hardware; each VM runs its own full guest kernel.\n• Containers (Linux Namespaces + cgroups): Isolate process trees and resource quotas while sharing the host OS kernel.',
            technicalExplanationPa:
              '1. File Systems: Linux ਵਿੱਚ `ext4` ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ ਜਿੱਥੇ ਸਾਰੀਆਂ ਫਾਈਲਾਂ `/` (Root) ਦੇ ਹੇਠਾਂ ਹੁੰਦੀਆਂ ਹਨ, ਜਦਕਿ Windows ਵਿੱਚ `NTFS` ਅਤੇ `C:\\` ਡਰਾਈਵ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।\n2. Virtualization ਅਤੇ Cloud: ਇੱਕ ਵੱਡੇ ਸਰਵਰ ਦੇ ਅੰਦਰ ਕਈ ਛੋਟੇ ਕੰਪਿਊਟਰ (Virtual Machines ਜਾਂ Containers) ਚਲਾਉਣ ਨੂੰ Virtualization ਕਹਿੰਦੇ ਹਨ।',
            practicalExampleEn:
              'This very Computer Fundamentals Academy server runs inside a Linux Container on Google Cloud Run—using Linux cgroups and namespaces to isolate its Node.js process and start in milliseconds!',
            practicalExamplePa:
              'ਇਹ Computer Fundamentals Academy ਐਪ ਖੁਦ ਕਲਾਊਡ ਉੱਤੇ ਇੱਕ Linux Container ਦੇ ਅੰਦਰ ਚੱਲ ਰਹੀ ਹੈ!',
            codeDemo: `# Inspecting Linux Boot, File Systems, Inodes & Containers
ls -li /etc/passwd        # View Inode number, rwx permissions, and owner
uname -r                  # Display active Linux Kernel version
systemd-analyze           # Measure exact Boot Sequence duration (Firmware + Loader + Kernel)
ps -ef                    # List all system daemons and user processes`,
            misconceptionsJson: [
              {
                myth: 'Deleting a file immediately wipes its 0s and 1s from the SSD or hard drive.',
                truthEn: 'Deleting a file usually just removes its directory pointer/inode entry and marks the blocks as "free to overwrite" until new data replaces it or TRIM runs.',
                truthPa: 'ਫਾਈਲ ਡਿਲੀਟ ਕਰਨ ਤੇ ਡਾਟਾ ਤੁਰੰਤ ਡਿਸਕ ਤੋਂ ਸਾਫ਼ ਨਹੀਂ ਹੁੰਦਾ, ਸਗੋਂ ਫਾਈਲ ਸਿਸਟਮ ਦੀ ਸੂਚੀ ਵਿੱਚੋਂ ਉਸਦਾ ਪਤਾ ਹਟਾ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।',
              },
            ],
            terminologyJson: [
              {
                term: 'Device Driver',
                punjabi: 'ਡਿਵਾਈਸ ਡਰਾਈਵਰ',
                meaningEn: 'Kernel-mode or user-mode software module that enables the OS to communicate with a specific hardware device.',
                meaningPa: 'ਉਹ ਸੌਫਟਵੇਅਰ ਜੋ Operating System ਨੂੰ ਕਿਸੇ ਹਾਰਡਵੇਅਰ (ਜਿਵੇਂ ਪ੍ਰਿੰਟਰ ਜਾਂ GPU) ਨਾਲ ਗੱਲ ਕਰਨ ਦੇ ਯੋਗ ਬਣਾਉਂਦਾ ਹੈ।',
              },
              {
                term: 'POST (Power-On Self-Test)',
                punjabi: 'ਪਾਵਰ-ਆਨ ਸੈਲਫ-ਟੈਸਟ',
                meaningEn: 'Diagnostic test run by UEFI/BIOS firmware immediately at power-up to verify RAM, CPU, and video hardware before booting.',
                meaningPa: 'ਕੰਪਿਊਟਰ ਆਨ ਕਰਦੇ ਸਾਰ ਫਰਮਵੇਅਰ ਵੱਲੋਂ ਹਾਰਡਵੇਅਰ ਦੀ ਜਾਂਚ ਕਰਨ ਦੀ ਪ੍ਰਕਿਰਿਆ।',
              },
              {
                term: 'Inode',
                punjabi: 'ਆਈ-ਨੋਡ (Index Node)',
                meaningEn: 'Data structure in Unix/Linux file systems that stores file size, owner UID, permissions, and disk block locations.',
                meaningPa: 'Linux ਫਾਈਲ ਸਿਸਟਮ ਦਾ ਉਹ ਰਿਕਾਰਡ ਜੋ ਫਾਈਲ ਦਾ ਆਕਾਰ, ਮਾਲਕ ਅਤੇ ਡਿਸਕ ਉੱਤੇ ਉਸਦੀ ਜਗ੍ਹਾ ਦਾ ਪਤਾ ਰੱਖਦਾ ਹੈ।',
              },
            ],
            interactiveLabId: 'ram-storage',
            exercisePromptEn:
              'Use the RAM vs Storage Lab to simulate a reboot (Power OFF -> Power ON) and observe how the OS boots fresh from Non-Volatile SSD into empty RAM.',
            exercisePromptPa:
              'RAM vs Storage Lab ਵਿੱਚ Power OFF ਕਰਕੇ ਦੁਬਾਰਾ ON ਕਰੋ ਅਤੇ ਦੇਖੋ ਕਿ ਬੂਟ ਹੋਣ ਵੇਲੇ SSD ਸੁਰੱਖਿਅਤ ਰਹਿੰਦੀ ਹੈ ਅਤੇ RAM ਨਵੇਂ ਸਿਰੇ ਤੋਂ ਤਿਆਰ ਹੁੰਦੀ ਹੈ।',
            summaryEn:
              'File systems organize persistent storage, device drivers bridge kernel and hardware, the boot sequence loads the OS from ROM to RAM, and containers isolate workloads efficiently.',
            summaryPa:
              'File System ਫਾਈਲਾਂ ਸਾਂਭਦਾ ਹੈ, Driver ਹਾਰਡਵੇਅਰ ਜੋੜਦਾ ਹੈ, Boot Sequence OS ਨੂੰ RAM ਵਿੱਚ ਲਿਆਉਂਦਾ ਹੈ ਅਤੇ Containers ਕਲਾਊਡ ਚਲਾਉਂਦੇ ਹਨ।',
            furtherReadingJson: [
              'Linux Kernel Documentation — Virtual Filesystem (VFS) & cgroups',
            ],
            quiz: {
              titleEn: 'Level 4.2 Assessment: Boot Sequence, Drivers & File Systems',
              titlePa: 'ਲੈਵਲ 4.2 ਟੈਸਟ: ਬੂਟ ਪ੍ਰਕਿਰਿਆ, ਡਰਾਈਵਰ ਅਤੇ ਫਾਈਲ ਸਿਸਟਮ',
              timeLimitSeconds: 240,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'Boot Sequence',
                  promptEn: 'What is the correct chronological order of the computer Boot Sequence?',
                  promptPa: 'ਕੰਪਿਊਟਰ ਦੇ ਚਾਲੂ ਹੋਣ (Boot Sequence) ਦਾ ਸਹੀ ਕ੍ਰਮ ਕਿਹੜਾ ਹੈ?',
                  optionsJson: [
                    'POST -> UEFI/BIOS -> Bootloader -> OS Kernel',
                    'Web Browser -> OS Kernel -> POST -> BIOS',
                    'Bootloader -> POST -> Power Supply -> Login',
                    'OS Kernel -> POST -> RAM -> Mouse',
                  ],
                  correctAnswer: 'POST -> UEFI/BIOS -> Bootloader -> OS Kernel',
                  explanationEn: 'Power triggers POST diagnostics in UEFI/BIOS, which invokes the Bootloader (GRUB/Windows Boot Manager) to load the OS Kernel into RAM.',
                  explanationPa: 'ਸਭ ਤੋਂ ਪਹਿਲਾਂ POST ਚੱਲਦਾ ਹੈ, ਫਿਰ UEFI/BIOS ਬੂਟਲੋਡਰ ਨੂੰ ਚਲਾਉਂਦਾ ਹੈ, ਜੋ OS Kernel ਨੂੰ RAM ਵਿੱਚ ਲੋਡ ਕਰਦਾ ਹੈ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Device Drivers',
                  promptEn: 'What is the purpose of a Device Driver in an Operating System?',
                  promptPa: 'Operating System ਵਿੱਚ Device Driver ਦਾ ਕੀ ਕੰਮ ਹੁੰਦਾ ਹੈ?',
                  optionsJson: [
                    'Translate generic OS system calls into hardware-specific commands for a device controller',
                    'Physically cool down the CPU fan',
                    'Replace the motherboard battery',
                    'Provide Wi-Fi electricity',
                  ],
                  correctAnswer:
                    'Translate generic OS system calls into hardware-specific commands for a device controller',
                  explanationEn: 'Device drivers provide the standard interface allowing the OS kernel to control specific hardware peripherals.',
                  explanationPa: 'Device Driver ਓਪਰੇਟਿੰਗ ਸਿਸਟਮ ਅਤੇ ਹਾਰਡਵੇਅਰ ਡਿਵਾਈਸ ਦੇ ਵਿਚਕਾਰ ਅਨੁਵਾਦਕ ਦਾ ਕੰਮ ਕਰਦਾ ਹੈ।',
                },
                {
                  questionType: 'true_false',
                  topicTag: 'Containers',
                  promptEn: 'True or False: Linux Containers (like Docker) share the host Operating System Kernel rather than booting a separate full OS kernel per container.',
                  promptPa: 'ਸਹੀ ਜਾਂ ਗਲਤ: Linux Containers ਹੋਸਟ ਕੰਪਿਊਟਰ ਦੇ OS Kernel ਨੂੰ ਹੀ ਸਾਂਝਾ ਕਰਦੇ ਹਨ, ਜਿਸ ਨਾਲ ਉਹ ਬਹੁਤ ਹਲਕੇ ਅਤੇ ਤੇਜ਼ ਹੁੰਦੇ ਹਨ।',
                  optionsJson: ['True', 'False'],
                  correctAnswer: 'True',
                  explanationEn: 'Containers use Linux namespaces and cgroups on top of the shared host kernel, avoiding full hypervisor guest OS overhead.',
                  explanationPa: 'ਬਿਲਕੁਲ ਸਹੀ! Containers ਹੋਸਟ Kernel ਸਾਂਝਾ ਕਰਦੇ ਹਨ ਜਿਸ ਨਾਲ ਉਹ ਸਕਿੰਟਾਂ ਵਿੱਚ ਚੱਲ ਪੈਂਦੇ ਹਨ।',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'level-5-software-algorithms-data-structures',
    levelNumber: 5,
    titleEn: 'Level 5: Software, Compilers, Algorithms & Step-by-Step Code Visuals',
    titlePa: 'ਲੈਵਲ 5: ਸੌਫਟਵੇਅਰ, ਕੰਪਾਈਲਰ ਅਤੇ ਐਲਗੋਰਿਦਮ (Algorithms & Code)',
    descriptionEn:
      'Compilers vs Interpreters vs Assemblers, Step-by-Step Sorting & Binary Search Algorithms, Big-O Time Complexity, Data Structures, and APIs.',
    descriptionPa:
      'Compiler ਅਤੇ Interpreter ਦਾ ਫ਼ਰਕ, Binary Search ਅਤੇ Sorting Algorithms ਦੀ ਸਟੈੱਪ-ਬਾਏ-ਸਟੈੱਪ ਵਿਆਖਿਆ, Big-O ਅਤੇ Data Structures।',
    category: 'algorithms',
    estimatedHours: 9,
    modules: [
      {
        orderIndex: 1,
        titleEn: 'Algorithms, Searching, Sorting & Language Translators',
        titlePa: 'ਐਲਗੋਰਿਦਮ, ਸਰਚਿੰਗ, ਸੌਰਟਿੰਗ ਅਤੇ ਭਾਸ਼ਾ ਟ੍ਰਾਂਸਲੇਟਰ',
        summaryEn: 'Master step-by-step algorithmic thinking, Binary Search vs Linear Search, and how high-level code compiles to machine binary.',
        summaryPa: 'ਸਿੱਖੋ ਕਿ ਐਲਗੋਰਿਦਮ ਕਿਵੇਂ ਬਣਦੇ ਹਨ, Binary Search ਕਿੰਨੀ ਤੇਜ਼ੀ ਨਾਲ ਕੰਮ ਕਰਦੀ ਹੈ ਅਤੇ ਕੋਡ ਮਸ਼ੀਨੀ ਭਾਸ਼ਾ ਵਿੱਚ ਕਿਵੇਂ ਬਦਲਦਾ ਹੈ।',
        lessons: [
          {
            slug: 'algorithms-binary-search-compilers',
            orderIndex: 1,
            titleEn: '5.1 Algorithms, Binary Search, Sorting & Compilers vs Interpreters',
            titlePa: '5.1 ਐਲਗੋਰਿਦਮ (Binary Search, Sorting) ਅਤੇ Compiler ਬਨਾਮ Interpreter',
            objectivesJson: [
              'Define an Algorithm as a finite, deterministic step-by-step recipe to solve a problem',
              'Compare Linear Search O(n) vs Binary Search O(log₂ n) with visual step execution',
              'Trace Bubble Sort step by step as adjacent elements swap into sorted order',
              'Contrast Compilers, Interpreters, and Assemblers',
            ],
            prerequisitesJson: ['3.1 How Binary (0 & 1), Number Conversions & Logic Gates Work'],
            childAnalogyEn:
              '1. What is Binary Search? Imagine I hide a word on page 340 of a 1,000-page Punjabi Dictionary (ਡਿਕਸ਼ਨਰੀ)!\n• Linear Search (ਬੱਚਿਆਂ ਵਾਲਾ ਹੌਲੀ ਤਰੀਕਾ): Starting at Page 1, then Page 2, Page 3... It takes 340 page flips!\n• Binary Search (ਸਿਆਣਾ ਤਰੀਕਾ): Open the dictionary right in the MIDDLE at Page 500! Since 340 is smaller than 500, you tear/ignore the entire right half (500–1000) in ONE second! Next, check the middle of 1–500 (Page 250). In just 10 flips maximum, you can find ANY page among 1,000 pages!\n\n2. Compiler vs Interpreter:\nSuppose a friend sends you a storybook written in French:\n• A COMPILER translates the ENTIRE book into Punjabi once and prints a fast Punjabi book you can read anytime.\n• An INTERPRETER sits next to you and translates sentence-by-sentence out loud every time you read it!',
            childAnalogyPa:
              '1. Binary Search ਕੀ ਹੈ? ਆਓ ਬੱਚਿਆਂ ਵਾਂਗ ਖੇਡ ਨਾਲ ਸਮਝੀਏ!\nਮੰਨ ਲਓ ਤੁਹਾਡੇ ਕੋਲ 1000 ਪੰਨਿਆਂ ਦੀ ਡਿਕਸ਼ਨਰੀ ਹੈ ਅਤੇ ਤੁਸੀਂ ਪੰਨਾ ਨੰਬਰ 340 ਲੱਭਣਾ ਹੈ:\n• Linear Search: ਜੇ ਤੁਸੀਂ ਪੰਨਾ 1, 2, 3, 4... ਕਰਕੇ ਇੱਕ-ਇੱਕ ਪੰਨਾ ਪਲਟੋਗੇ ਤਾਂ 340 ਵਾਰ ਪੰਨਾ ਪਲਟਣਾ ਪਵੇਗਾ।\n• Binary Search: ਤੁਸੀਂ ਡਿਕਸ਼ਨਰੀ ਨੂੰ ਸਿੱਧਾ ਵਿਚਕਾਰੋਂ (ਪੰਨਾ 500 ਤੋਂ) ਖੋਲ੍ਹਦੇ ਹੋ! ਤੁਹਾਨੂੰ ਪਤਾ ਲੱਗਦਾ ਹੈ ਕਿ 340 ਤਾਂ 500 ਤੋਂ ਛੋਟਾ ਹੈ—ਇਸ ਲਈ 500 ਤੋਂ 1000 ਵਾਲੇ ਅੱਧੇ ਪੰਨੇ ਇੱਕੋ ਵਾਰ ਵਿੱਚ ਰੱਦ ਹੋ ਗਏ! ਫਿਰ ਤੁਸੀਂ 1 ਤੋਂ 500 ਦੇ ਬਿਲਕੁਲ ਵਿਚਕਾਰ (250) ਦੇਖਦੇ ਹੋ। ਇਸ ਤਰ੍ਹਾਂ 1000 ਪੰਨਿਆਂ ਵਿੱਚੋਂ ਕੋਈ ਵੀ ਪੰਨਾ ਵੱਧ ਤੋਂ ਵੱਧ 10 ਕਦਮਾਂ (log₂ 1000 ≈ 10) ਵਿੱਚ ਲੱਭ ਜਾਂਦਾ ਹੈ!\n\n2. Compiler ਬਨਾਮ Interpreter:\n• Compiler: ਪੂਰੀ ਕਿਤਾਬ (ਪੂਰੇ ਕੋਡ) ਨੂੰ ਇੱਕੋ ਵਾਰ ਪੜ੍ਹ ਕੇ ਸਿੱਧਾ Machine Binary ਵਿੱਚ ਬਦਲ ਦਿੰਦਾ ਹੈ (ਜਿਵੇਂ C, C++, Rust)।\n• Interpreter: ਕੋਡ ਦੀ ਇੱਕ-ਇੱਕ ਲਾਈਨ ਪੜ੍ਹ ਕੇ ਨਾਲੋ-ਨਾਲ ਚਲਾਉਂਦਾ ਹੈ (ਜਿਵੇਂ Python, JavaScript)।',
            technicalExplanationEn:
              '1. Algorithmic Complexity (Big-O Notation):\n• O(1) Constant Time: Array index lookup `arr[4]`.\n• O(log n) Logarithmic Time: Binary Search on a sorted array — halves the search space each iteration.\n• O(n) Linear Time: Scanning an unsorted list.\n• O(n²) Quadratic Time: Bubble Sort comparing nested pairs.\n\n2. Language Translation Pipeline:\nHigh-Level Source Code (`sum = a + b`) -> Compiler -> Assembly Code (`ADD R1, R2`) -> Assembler -> Machine Binary (`00010110`) -> CPU Execution.',
            technicalExplanationPa:
              '1. Big-O Notation (ਰਫ਼ਤਾਰ ਮਾਪਣ ਦਾ ਗਣਿਤ):\n• O(1): ਹਮੇਸ਼ਾ ਇੱਕੋ ਜਿਹਾ ਸਮਾਂ ਲੱਗਦਾ ਹੈ।\n• O(log n): Binary Search — ਹਰ ਕਦਮ ਤੇ ਡਾਟਾ ਅੱਧਾ ਰਹਿ ਜਾਂਦਾ ਹੈ। ਜੇ 10 ਲੱਖ (1,000,000) ਨੰਬਰ ਵੀ ਹੋਣ, ਤਾਂ Binary Search ਸਿਰਫ਼ 20 ਕਦਮਾਂ ਵਿੱਚ ਜਵਾਬ ਲੱਭ ਲੈਂਦੀ ਹੈ!\n• O(n): ਜਿੰਨਾ ਡਾਟਾ ਵਧੇਗਾ, ਓਨਾ ਸਮਾਂ ਵਧੇਗਾ।\n• O(n²): Bubble Sort — ਜਿਸ ਵਿੱਚ ਗੁਆਂਢੀ ਨੰਬਰਾਂ ਦੀ ਤੁਲਨਾ ਕਰਕੇ ਵੱਡੇ ਨੰਬਰ ਨੂੰ ਸੱਜੇ ਪਾਸੇ ਭੇਜਿਆ ਜਾਂਦਾ ਹੈ।',
            practicalExampleEn:
              'When you search for a contact name in your iPhone Contacts list of 2,000 people, the phone does not check all 2,000 names one by one. Because contacts are sorted alphabetically, it uses Binary Search / B-Tree indexing to jump straight to the target in ~11 comparisons!',
            practicalExamplePa:
              'ਜਦੋਂ ਤੁਸੀਂ ਫ਼ੋਨ ਦੀ Contact List ਵਿੱਚੋਂ ਕਿਸੇ ਦਾ ਨਾਮ ਲੱਭਦੇ ਹੋ, ਤਾਂ ਫ਼ੋਨ ਸਾਰੇ ਨਾਮ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਨਹੀਂ ਪੜ੍ਹਦਾ, ਸਗੋਂ ਅੱਖਰਾਂ ਦੇ ਕ੍ਰਮ (Sorted Order) ਕਾਰਨ Binary Search ਵਰਤ ਕੇ ਪਲਕ ਝਪਕਦੇ ਹੀ ਨੰਬਰ ਲੱਭ ਦਿੰਦਾ ਹੈ!',
            codeDemo: `// Step-by-Step Binary Search Implementation (O(log n))
function binarySearchSteps(sortedArr: number[], target: number) {
  let low = 0;
  let high = sortedArr.length - 1;
  let step = 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = sortedArr[mid];
    console.log(\`Step \${step}: low=\${low}, high=\${high}, mid=\${mid} (value=\${guess})\`);

    if (guess === target) {
      return mid; // Found target!
    } else if (guess < target) {
      low = mid + 1; // Discard left half
    } else {
      high = mid - 1; // Discard right half
    }
    step++;
  }
  return -1;
}`,
            misconceptionsJson: [
              {
                myth: 'Binary Search can be used on any random, unsorted list of numbers.',
                truthEn: 'Binary Search STRICTLY requires the array to be sorted first! If pages in a dictionary were shuffled randomly, opening the middle page wouldn’t tell you whether to look left or right.',
                truthPa: 'Binary Search ਸਿਰਫ਼ ਉਦੋਂ ਹੀ ਕੰਮ ਕਰਦੀ ਹੈ ਜਦੋਂ ਡਾਟਾ ਪਹਿਲਾਂ ਤੋਂ ਕ੍ਰਮਵਾਰ (Sorted) ਲੱਗਿਆ ਹੋਵੇ!',
              },
            ],
            terminologyJson: [
              {
                term: 'Algorithm',
                punjabi: 'ਐਲਗੋਰਿਦਮ',
                meaningEn: 'A precise, step-by-step procedure for solving a problem or performing a computation in finite time.',
                meaningPa: 'ਕਿਸੇ ਸਮੱਸਿਆ ਨੂੰ ਹੱਲ ਕਰਨ ਲਈ ਬਣਾਏ ਗਏ ਸਪੱਸ਼ਟ ਅਤੇ ਕ੍ਰਮਵਾਰ ਕਦਮਾਂ ਦੀ ਸੂਚੀ।',
              },
              {
                term: 'Assembler',
                punjabi: 'ਅਸੈਂਬਲਰ',
                meaningEn: 'Program that translates human-readable Assembly mnemonics (LOAD, ADD) directly into binary machine opcodes.',
                meaningPa: 'ਉਹ ਪ੍ਰੋਗਰਾਮ ਜੋ Assembly ਭਾਸ਼ਾ (ਜਿਵੇਂ ADD, LOAD) ਨੂੰ ਸਿੱਧਾ 0 ਅਤੇ 1 ਦੇ ਮਸ਼ੀਨ ਕੋਡ ਵਿੱਚ ਬਦਲਦਾ ਹੈ।',
              },
            ],
            interactiveLabId: 'algorithm-math-lab',
            exercisePromptEn:
              'Open the Algorithm & CS Math Visualizer Lab and step through Binary Search and Bubble Sort to watch pointers (Low, Mid, High) move live!',
            exercisePromptPa:
              'Algorithm & Math Visualizer Lab ਖੋਲ੍ਹੋ ਅਤੇ Binary Search ਤੇ Bubble Sort ਨੂੰ ਇੱਕ-ਇੱਕ ਕਦਮ ਚਲਾ ਕੇ ਦੇਖੋ।',
            summaryEn:
              'Algorithms determine how efficiently software scales. Binary Search reduces O(n) scans to O(log n) by halving sorted datasets at each step.',
            summaryPa:
              'ਚੰਗੇ ਐਲਗੋਰਿਦਮ ਕੰਪਿਊਟਰ ਦੀ ਰਫ਼ਤਾਰ ਨੂੰ ਹਜ਼ਾਰਾਂ ਗੁਣਾ ਵਧਾ ਦਿੰਦੇ ਹਨ, ਜਿਵੇਂ Binary Search ਹਰ ਕਦਮ ਤੇ ਖੋਜ ਨੂੰ ਅੱਧਾ ਕਰ ਦਿੰਦੀ ਹੈ।',
            furtherReadingJson: [
              'Aditya Bhargava — Grokking Algorithms: An Illustrated Guide',
              'Thomas H. Cormen et al. — Introduction to Algorithms (CLRS)',
            ],
            quiz: {
              titleEn: 'Level 5 Assessment: Algorithms, Binary Search & Translators',
              titlePa: 'ਲੈਵਲ 5 ਟੈਸਟ: ਐਲਗੋਰਿਦਮ ਅਤੇ ਕੰਪਾਈਲਰ',
              timeLimitSeconds: 300,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'Binary Search',
                  promptEn: 'What is the mandatory prerequisite before you can run Binary Search on an array?',
                  promptPa: 'ਕਿਸੇ ਲਿਸਟ (Array) ਉੱਤੇ Binary Search ਚਲਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ ਸ਼ਰਤ ਕੀ ਹੈ?',
                  optionsJson: [
                    'The array must be sorted in ascending or descending order',
                    'The array must have fewer than 5 items',
                    'All numbers must be negative',
                    'The computer must be disconnected from RAM',
                  ],
                  correctAnswer: 'The array must be sorted in ascending or descending order',
                  explanationEn: 'Binary Search relies on ordering to eliminate half of the remaining elements after each middle comparison.',
                  explanationPa: 'Binary Search ਲਈ ਡਾਟਾ ਦਾ ਪਹਿਲਾਂ ਤੋਂ ਕ੍ਰਮਵਾਰ (Sorted) ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Translators',
                  promptEn: 'Which tool translates Assembly language mnemonics (like MOV, ADD, SUB) into binary machine code?',
                  promptPa: 'ਕਿਹੜਾ ਟੂਲ Assembly ਭਾਸ਼ਾ ਦੇ ਸ਼ਬਦਾਂ (MOV, ADD, SUB) ਨੂੰ ਬਾਈਨਰੀ ਮਸ਼ੀਨ ਕੋਡ ਵਿੱਚ ਬਦਲਦਾ ਹੈ?',
                  optionsJson: ['Assembler', 'Web Browser', 'DHCP Server', 'Spreadsheet'],
                  correctAnswer: 'Assembler',
                  explanationEn: 'An Assembler converts low-level assembly mnemonics into machine-executable binary instructions.',
                  explanationPa: 'Assembler ਅਸੈਂਬਲੀ ਕੋਡ ਨੂੰ ਮਸ਼ੀਨੀ ਬਾਈਨਰੀ ਵਿੱਚ ਬਦਲਦਾ ਹੈ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Complexity',
                  promptEn: 'At most how many comparisons does Binary Search need to find a number in a sorted list of 1,024 elements?',
                  promptPa: '1,024 ਕ੍ਰਮਵਾਰ ਨੰਬਰਾਂ ਦੀ ਲਿਸਟ ਵਿੱਚੋਂ Binary Search ਨੂੰ ਕੋਈ ਨੰਬਰ ਲੱਭਣ ਲਈ ਵੱਧ ਤੋਂ ਵੱਧ ਕਿੰਨੇ ਕਦਮ ਲੱਗਣਗੇ?',
                  optionsJson: ['10 (since 2¹⁰ = 1024)', '1,024', '512', '100'],
                  correctAnswer: '10 (since 2¹⁰ = 1024)',
                  explanationEn: 'Since log₂(1024) = 10, halving 1,024 ten times reduces the search space to 1 element.',
                  explanationPa: 'ਕਿਉਂਕਿ 2¹⁰ = 1024 ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ ਵੱਧ ਤੋਂ ਵੱਧ 10 ਕਦਮਾਂ ਵਿੱਚ ਨੰਬਰ ਮਿਲ ਜਾਵੇਗਾ।',
                },
              ],
            },
          },
          {
            slug: 'data-structures-databases-sql-apis-sdlc',
            orderIndex: 2,
            titleEn: '5.2 Data Structures (Arrays, Stacks, Queues, Trees), SQL Databases, REST APIs & SDLC',
            titlePa: '5.2 ਡਾਟਾ ਸਟ੍ਰਕਚਰ (Stack, Queue, Tree), SQL ਡਾਟਾਬੇਸ, API ਅਤੇ SDLC',
            objectivesJson: [
              'Contrast Arrays, Stacks (LIFO), Queues (FIFO), Hash Maps, and Trees',
              'Understand Relational Databases (PostgreSQL tables, Primary/Foreign Keys, ACID transactions)',
              'Explain how Frontend and Backend communicate via HTTP REST APIs and JSON',
              'Outline the Software Development Lifecycle (SDLC): Planning, Design, Coding, Testing, Deployment',
            ],
            prerequisitesJson: ['5.1 Algorithms, Binary Search, Sorting & Compilers vs Interpreters'],
            childAnalogyEn:
              '1. Stack vs Queue (ਰੋਟੀਆਂ ਵਾਲਾ ਛਾਬਾ ਬਨਾਮ ਬੈਂਕ ਦੀ ਲਾਈਨ):\n• A STACK is like a stack of hot Rotis in a kitchen basket (ਛਾਬਾ): the last Roti placed on top is the FIRST one picked up to eat! That is LIFO (Last-In, First-Out)—used for your browser’s "Back" button and Undo (`Ctrl+Z`)!\n• A QUEUE is like a polite line at a ticket counter: the first person in line gets served first! That is FIFO (First-In, First-Out)—used for printer jobs!\n\n2. What is an API? (ਰੈਸਟੋਰੈਂਟ ਦਾ ਵੇਟਰ):\nYou (the Frontend iPhone screen) sit at a table reading the menu. The Kitchen (the Backend PostgreSQL Database) has the food. You cannot walk into the hot kitchen yourself! The Waiter (the API) takes your order to the kitchen and brings back your dish (JSON data)!',
            childAnalogyPa:
              '1. Stack ਬਨਾਮ Queue (ਰੋਟੀਆਂ ਵਾਲਾ ਛਾਬਾ ਬਨਾਮ ਟਿਕਟ ਵਾਲੀ ਲਾਈਨ):\n• Stack (LIFO — Last In, First Out): ਰਸੋਈ ਵਿੱਚ ਰੱਖੀਆਂ ਗਰਮ ਰੋਟੀਆਂ ਦੇ ਛਾਬੇ ਵਾਂਗ — ਜਿਹੜੀ ਰੋਟੀ ਸਭ ਤੋਂ ਅਖੀਰ ਵਿੱਚ ਉੱਪਰ ਰੱਖੀ ਜਾਂਦੀ ਹੈ, ਉਹ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਚੁੱਕੀ ਜਾਂਦੀ ਹੈ! ਕੰਪਿਊਟਰ ਵਿੱਚ Undo (`Ctrl+Z`) ਇਸੇ ਤਰ੍ਹਾਂ ਕੰਮ ਕਰਦਾ ਹੈ।\n• Queue (FIFO — First In, First Out): ਬੈਂਕ ਜਾਂ ਰੇਲਵੇ ਟਿਕਟ ਦੀ ਲਾਈਨ ਵਾਂਗ — ਜੋ ਪਹਿਲਾਂ ਲਾਈਨ ਵਿੱਚ ਲੱਗੇਗਾ, ਉਸਦੀ ਵਾਰੀ ਪਹਿਲਾਂ ਆਵੇਗੀ!\n\n2. API ਕੀ ਹੁੰਦੀ ਹੈ? (ਢਾਬੇ ਦਾ ਵੇਟਰ):\nਤੁਹਾਡੇ ਫ਼ੋਨ ਦੀ ਸਕ੍ਰੀਨ (Frontend) ਗਾਹਕ ਹੈ ਅਤੇ ਪਿੱਛੇ ਪਿਆ ਸਰਵਰ/ਡਾਟਾਬੇਸ (Backend) ਰਸੋਈ ਹੈ। API ਉਹ ਵੇਟਰ ਹੈ ਜੋ ਤੁਹਾਡਾ ਹੁਕਮ ਰਸੋਈ ਤੱਕ ਲੈ ਕੇ ਜਾਂਦਾ ਹੈ ਅਤੇ ਉੱਥੋਂ JSON ਦੇ ਰੂਪ ਵਿੱਚ ਜਵਾਬ ਵਾਪਸ ਲਿਆਉਂਦਾ ਹੈ!',
            technicalExplanationEn:
              '1. Fundamental Data Structures:\n• Array: Contiguous memory block with O(1) index access.\n• Stack (LIFO): `push()` and `pop()` at top; powers function call stacks.\n• Queue (FIFO): `enqueue()` at tail, `dequeue()` at head; powers task schedulers.\n• Binary Search Tree / B-Tree: Hierarchical nodes enabling O(log n) database indexing.\n\n2. Relational Databases & SQL:\nData is normalized into tables with Primary Keys (`id`) and Foreign Keys (`user_uid REFERENCES users(uid)`).\n\n3. REST APIs & SDLC:\nHTTP verbs (`GET`, `POST`, `PATCH`, `DELETE`) exchange JSON payloads across the Software Development Lifecycle (Requirements -> Architecture -> Implementation -> QA Testing -> CI/CD Deployment).',
            technicalExplanationPa:
              '1. Data Structures: ਡਾਟੇ ਨੂੰ ਮੈਮੋਰੀ ਵਿੱਚ ਸਹੀ ਤਰੀਕੇ ਨਾਲ ਸਜਾਉਣ ਦੇ ਤਰੀਕੇ — Array, Stack (LIFO), Queue (FIFO) ਅਤੇ Tree।\n2. SQL Database: ਜਿੱਥੇ ਡਾਟਾ ਟੇਬਲਾਂ (Rows & Columns) ਵਿੱਚ Primary Key ਅਤੇ Foreign Key ਦੀ ਮਦਦ ਨਾਲ ਪੱਕੇ ਤੌਰ ਤੇ ਸੁਰੱਖਿਅਤ ਰਹਿੰਦਾ ਹੈ।\n3. SDLC (Software Development Lifecycle): ਸੌਫਟਵੇਅਰ ਬਣਾਉਣ ਦੇ ਕ੍ਰਮਵਾਰ ਪੜਾਅ — Planning, Design, Coding, Testing ਅਤੇ Deployment।',
            practicalExampleEn:
              'When you press "Complete Lesson" in this Academy app: your browser sends a `POST /api/lessons/:id/progress` REST API request (the Waiter) to our Express server, which executes an SQL `INSERT INTO lesson_progress` inside Cloud SQL PostgreSQL!',
            practicalExamplePa:
              'ਜਦੋਂ ਤੁਸੀਂ ਇਸ ਐਪ ਵਿੱਚ ਕੋਈ ਟਾਸਕ ਸੇਵ ਕਰਦੇ ਹੋ, ਤਾਂ API ਰਾਹੀਂ ਤੁਹਾਡਾ ਡਾਟਾ ਸਿੱਧਾ Cloud SQL PostgreSQL ਡਾਟਾਬੇਸ ਦੇ ਟੇਬਲ ਵਿੱਚ ਜਾ ਕੇ ਸੇਵ ਹੁੰਦਾ ਹੈ!',
            codeDemo: `// Stack (LIFO) vs Queue (FIFO) & SQL Query Demonstration
class UndoStack<T> {
  private items: T[] = [];
  push(action: T) { this.items.push(action); }
  pop(): T | undefined { return this.items.pop(); } // Last-In, First-Out
}

// Relational SQL Query with Foreign Key Join
const sqlQuery = \`
  SELECT u.display_name, COUNT(lp.id) AS completed_lessons
  FROM users u
  JOIN lesson_progress lp ON lp.user_uid = u.uid
  WHERE lp.completed = TRUE
  GROUP BY u.display_name;
\`;`,
            misconceptionsJson: [
              {
                myth: 'An API is a database.',
                truthEn: 'An API (Application Programming Interface) is the communication contract/messenger; the Database (like PostgreSQL) is the persistent storage engine behind the server.',
                truthPa: 'API ਡਾਟਾਬੇਸ ਨਹੀਂ ਹੁੰਦੀ; API ਸਿਰਫ਼ Frontend ਅਤੇ Backend ਦੇ ਵਿਚਕਾਰ ਸੁਨੇਹਾ ਲਿਆਉਣ-ਲਿਜਾਣ ਵਾਲਾ ਰਸਤਾ ਹੈ।',
              },
            ],
            terminologyJson: [
              {
                term: 'Stack (LIFO)',
                punjabi: 'ਸਟੈਕ (Last-In, First-Out)',
                meaningEn: 'Linear data structure where elements are added and removed from the same top end.',
                meaningPa: 'ਉਹ ਡਾਟਾ ਸਟ੍ਰਕਚਰ ਜਿੱਥੇ ਸਭ ਤੋਂ ਅਖੀਰ ਵਿੱਚ ਰੱਖੀ ਚੀਜ਼ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਬਾਹਰ ਆਉਂਦੀ ਹੈ।',
              },
              {
                term: 'Primary & Foreign Key',
                punjabi: 'ਪ੍ਰਾਇਮਰੀ ਅਤੇ ਫੌਰਨ ਕੀ',
                meaningEn: 'A Primary Key uniquely identifies a row in a table; a Foreign Key links that row to another table.',
                meaningPa: 'Primary Key ਟੇਬਲ ਦੀ ਹਰ ਲਾਈਨ ਦੀ ਵਿਲੱਖਣ ਪਛਾਣ ਹੈ ਅਤੇ Foreign Key ਦੋ ਟੇਬਲਾਂ ਨੂੰ ਆਪਸ ਵਿੱਚ ਜੋੜਦੀ ਹੈ।',
              },
              {
                term: 'REST API',
                punjabi: 'ਰੈਸਟ ਏ.ਪੀ.ਆਈ',
                meaningEn: 'Architectural style for networked applications using stateless HTTP requests (GET, POST, PATCH, DELETE) and JSON.',
                meaningPa: 'HTTP ਰਾਹੀਂ ਦੋ ਸੌਫਟਵੇਅਰਾਂ ਦੇ ਆਪਸ ਵਿੱਚ ਗੱਲ ਕਰਨ ਦਾ ਮਿਆਰੀ ਤਰੀਕਾ।',
              },
            ],
            interactiveLabId: 'algorithm-math-lab',
            exercisePromptEn:
              'Explore the Algorithm & CS Math Lab to see how indexed arrays and Set operations power SQL database queries.',
            exercisePromptPa:
              'Algorithm & CS Math Lab ਖੋਲ੍ਹੋ ਅਤੇ ਦੇਖੋ ਕਿਵੇਂ Sorted Arrays ਅਤੇ Sets ਡਾਟਾਬੇਸ ਦੀ ਰਫ਼ਤਾਰ ਵਧਾਉਂਦੇ ਹਨ।',
            summaryEn:
              'Data structures organize in-memory state, SQL databases enforce relational integrity, REST APIs connect clients to servers, and SDLC governs software quality.',
            summaryPa:
              'Data Structures ਮੈਮੋਰੀ ਸੰਭਾਲਦੇ ਹਨ, SQL ਡਾਟਾਬੇਸ ਪੱਕਾ ਰਿਕਾਰਡ ਰੱਖਦਾ ਹੈ ਅਤੇ API ਐਪ ਨੂੰ ਸਰਵਰ ਨਾਲ ਜੋੜਦੀ ਹੈ।',
            furtherReadingJson: [
              'Martin Kleppmann — Designing Data-Intensive Applications',
            ],
            quiz: {
              titleEn: 'Level 5.2 Assessment: Data Structures, SQL & APIs',
              titlePa: 'ਲੈਵਲ 5.2 ਟੈਸਟ: ਡਾਟਾ ਸਟ੍ਰਕਚਰ, ਡਾਟਾਬੇਸ ਅਤੇ API',
              timeLimitSeconds: 240,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'Data Structures',
                  promptEn: 'Which data structure follows the LIFO (Last-In, First-Out) principle, like a stack of plates or the Undo (Ctrl+Z) history?',
                  promptPa: 'ਕਿਹੜਾ ਡਾਟਾ ਸਟ੍ਰਕਚਰ LIFO (Last-In, First-Out — ਅਖੀਰ ਵਿੱਚ ਆਇਆ, ਪਹਿਲਾਂ ਗਿਆ) ਨਿਯਮ ਉੱਤੇ ਕੰਮ ਕਰਦਾ ਹੈ?',
                  optionsJson: ['Stack', 'Queue', 'FIFO Pipe', 'Ethernet Cable'],
                  correctAnswer: 'Stack',
                  explanationEn: 'A Stack pushes and pops elements from the top according to Last-In, First-Out (LIFO).',
                  explanationPa: 'Stack ਵਿੱਚ ਸਭ ਤੋਂ ਅਖੀਰ ਵਿੱਚ ਰੱਖਿਆ ਡਾਟਾ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਬਾਹਰ ਨਿਕਲਦਾ ਹੈ (LIFO)।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Databases',
                  promptEn: 'In a relational SQL database, which key is used in a child table to reference the Primary Key of a parent table?',
                  promptPa: 'SQL ਡਾਟਾਬੇਸ ਵਿੱਚ ਇੱਕ ਟੇਬਲ ਨੂੰ ਦੂਜੇ ਟੇਬਲ ਦੀ Primary Key ਨਾਲ ਜੋੜਨ ਵਾਲੇ ਕਾਲਮ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?',
                  optionsJson: ['Foreign Key', 'Spacebar Key', 'Shift Key', 'Cache Key'],
                  correctAnswer: 'Foreign Key',
                  explanationEn: 'A Foreign Key enforces referential integrity between related tables in a relational database.',
                  explanationPa: 'Foreign Key ਦੋ ਟੇਬਲਾਂ ਦੇ ਰਿਕਾਰਡਾਂ ਨੂੰ ਆਪਸ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਜੋੜਦੀ ਹੈ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'APIs',
                  promptEn: 'Which HTTP method is typically used in a REST API to retrieve (read) data without modifying server state?',
                  promptPa: 'REST API ਵਿੱਚ ਸਰਵਰ ਤੋਂ ਡਾਟਾ ਪੜ੍ਹਨ (Read ਕਰਨ) ਲਈ ਕਿਹੜਾ HTTP ਮੈਥਡ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
                  optionsJson: ['GET', 'DELETE', 'DROP', 'FORMAT'],
                  correctAnswer: 'GET',
                  explanationEn: 'HTTP GET requests retrieve resource representations without side effects.',
                  explanationPa: 'GET ਦੀ ਵਰਤੋਂ ਸਰਵਰ ਤੋਂ ਡਾਟਾ ਮੰਗਵਾਉਣ (ਪੜ੍ਹਨ) ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'level-6-7-8-networks-security-advanced',
    levelNumber: 6,
    titleEn: 'Level 6: Computer Networking, TCP/IP, DNS & Internet Infrastructure',
    titlePa: 'ਲੈਵਲ 6: ਕੰਪਿਊਟਰ ਨੈੱਟਵਰਕਿੰਗ ਅਤੇ ਇੰਟਰਨੈੱਟ (Networking & Internet)',
    descriptionEn:
      'LAN/MAN/WAN, Network Topologies, Routers & Switches, IPv4 vs IPv6, DNS, DHCP, TCP/IP & 7-Layer OSI Model, HTTP/HTTPS, Wi-Fi/Ethernet, and Firewalls.',
    descriptionPa:
      'ਇੰਟਰਨੈੱਟ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ: LAN/WAN, Topologies, Router ਤੇ Switch, IPv4/IPv6, DNS, DHCP, OSI Model ਅਤੇ Firewalls।',
    category: 'core-cs',
    estimatedHours: 10,
    modules: [
      {
        orderIndex: 1,
        titleEn: 'Packet Switching, DNS Resolution & Internet Protocols',
        titlePa: 'ਪੈਕਟ ਸਵਿਚਿੰਗ, DNS ਅਤੇ ਇੰਟਰਨੈੱਟ ਪ੍ਰੋਟੋਕੋਲ',
        summaryEn: 'Understand how packets travel across LAN switches, DNS resolvers, and WAN routers.',
        summaryPa: 'ਸਮਝੋ ਕਿ ਇੰਟਰਨੈੱਟ ਉੱਤੇ ਡਾਟਾ ਪੈਕਟ DNS, Switch ਅਤੇ Router ਰਾਹੀਂ ਕਿਵੇਂ ਸਫ਼ਰ ਕਰਦੇ ਹਨ।',
        lessons: [
          {
            slug: 'networking-dns-security-pipelining',
            orderIndex: 1,
            titleEn: '6.1 LAN/WAN, Switches vs Routers, IPv4/IPv6, DNS & DHCP',
            titlePa: '6.1 ਇੰਟਰਨੈੱਟ ਪੈਕਟ: LAN/WAN, Switch, Router, IP Address, DNS ਅਤੇ DHCP',
            objectivesJson: [
              'Distinguish LAN, MAN, and WAN networks and physical topologies (Star, Mesh, Bus, Ring)',
              'Contrast Layer-2 Switches (MAC addresses) with Layer-3 Routers (IP addresses)',
              'Explain how DHCP assigns IP addresses automatically and how DNS resolves domain names prior to HTTP connections',
              'Compare IPv4 (32-bit) and IPv6 (128-bit) addressing',
            ],
            prerequisitesJson: ['4.1 OS Kernel, Processes vs Threads & Virtual Memory'],
            childAnalogyEn:
              'How the Internet Works (Postal Service Analogy):\n• IP Address (192.168.1.15): Your exact House Number and PIN Code!\n• DHCP: When a new family moves into a hotel room, the Reception Desk automatically hands them a room number—that is DHCP giving your phone a temporary IP address when you join Wi-Fi!\n• DNS (Domain Name System): Remembering numbers like `93.184.216.34` is hard, so DNS is your phone’s Contact Book—BEFORE your browser can send a letter to `academy.edu`, it FIRST asks DNS for the numeric IP address!\n• Network Switch: The Postman inside your own street/colony (LAN) connecting neighbors via MAC addresses.\n• Router: The Main Highway Post Office that directs packets between different cities and countries (WAN/Internet)!',
            childAnalogyPa:
              'ਇੰਟਰਨੈੱਟ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ? (ਡਾਕਖਾਨੇ ਦੀ ਉਦਾਹਰਣ):\n• IP Address: ਇਹ ਤੁਹਾਡੇ ਘਰ ਦਾ ਪੱਕਾ ਮਕਾਨ ਨੰਬਰ ਅਤੇ ਪਿੰਨ ਕੋਡ ਹੈ।\n• DHCP: ਜਦੋਂ ਤੁਸੀਂ Wi-Fi ਨਾਲ ਜੁੜਦੇ ਹੋ, ਤਾਂ Router ਦਾ DHCP ਸਿਸਟਮ ਤੁਹਾਡੇ ਫ਼ੋਨ ਨੂੰ ਆਪਣੇ-ਆਪ ਇੱਕ IP Address ਦੇ ਦਿੰਦਾ ਹੈ।\n• DNS (Domain Name System): ਇਨਸਾਨਾਂ ਲਈ `93.184.216.34` ਵਰਗੇ ਨੰਬਰ ਯਾਦ ਰੱਖਣੇ ਔਖੇ ਹਨ। ਜਦੋਂ ਤੁਸੀਂ `academy.edu` ਲਿਖਦੇ ਹੋ, ਤਾਂ ਬ੍ਰਾਊਜ਼ਰ ਸਰਵਰ ਨਾਲ ਜੁੜਨ ਤੋਂ ਪਹਿਲਾਂ DNS ਕੋਲੋਂ ਉਸਦਾ IP Address ਪੁੱਛਦਾ ਹੈ!\n• Switch: ਤੁਹਾਡੇ ਇੱਕੋ ਦਫ਼ਤਰ ਜਾਂ ਘਰ (LAN) ਦੇ ਕੰਪਿਊਟਰਾਂ ਨੂੰ MAC Address ਰਾਹੀਂ ਜੋੜਨ ਵਾਲਾ ਡਾਕੀਆ।\n• Router: ਵੱਖ-ਵੱਖ ਸ਼ਹਿਰਾਂ ਅਤੇ ਦੇਸ਼ਾਂ ਦੇ ਨੈੱਟਵਰਕਾਂ (WAN/Internet) ਦੇ ਵਿਚਕਾਰ ਰਸਤਾ ਦਿਖਾਉਣ ਵਾਲਾ ਮੁੱਖ ਚੌਰਾਹਾ!',
            technicalExplanationEn:
              '1. Network Scopes & Topologies:\n• LAN (Local Area Network): Home/office Ethernet & Wi-Fi.\n• MAN (Metropolitan) & WAN (Wide Area Network — the global Internet).\n• Topologies: Star (all nodes wired to a central Switch), Mesh (redundant interconnects), Bus, and Ring.\n\n2. IPv4 vs IPv6:\n• IPv4 uses 32 bits (4 octets like `192.168.1.1`, ~4.3 billion addresses).\n• IPv6 uses 128 bits (8 hexadecimal groups like `2001:0db8::1`) solving address exhaustion.\n\n3. DNS Resolution Before TCP Connection:\nBefore a client can send an HTTP request to `academy.edu`, it MUST first query a DNS Resolver (UDP port 53) to resolve `academy.edu -> 93.184.216.34`. Only after receiving the IP does the client initiate the TCP 3-way handshake (`SYN`, `SYN-ACK`, `ACK`) to the server!',
            technicalExplanationPa:
              '1. LAN, MAN ਅਤੇ WAN: ਘਰ ਜਾਂ ਦਫ਼ਤਰ ਦਾ ਨੈੱਟਵਰਕ LAN ਹੈ, ਸ਼ਹਿਰ ਪੱਧਰ ਦਾ MAN ਹੈ, ਅਤੇ ਪੂਰੀ ਦੁਨੀਆ ਦਾ ਇੰਟਰਨੈੱਟ WAN ਹੈ।\n2. IPv4 ਬਨਾਮ IPv6: IPv4 ਵਿੱਚ 32-bit ਪਤੇ ਹੁੰਦੇ ਹਨ (ਜਿਵੇਂ `192.168.1.1`), ਜਦਕਿ ਨਵੇਂ IPv6 ਵਿੱਚ 128-bit ਪਤੇ ਹੁੰਦੇ ਹਨ ਤਾਂ ਜੋ ਦੁਨੀਆ ਦੇ ਹਰ ਸਮਾਰਟ ਡਿਵਾਈਸ ਨੂੰ ਵੱਖਰਾ ਪਤਾ ਮਿਲ ਸਕੇ।\n3. DNS ਦਾ ਸਹੀ ਕ੍ਰਮ: ਵੈੱਬਸਾਈਟ ਖੋਲ੍ਹਣ ਵੇਲੇ ਫ਼ੋਨ ਪਹਿਲਾਂ DNS ਸਰਵਰ ਤੋਂ IP Address ਪਤਾ ਕਰਦਾ ਹੈ, ਅਤੇ ਉਸ ਤੋਂ ਬਾਅਦ ਹੀ ਅਸਲ Web Server ਵੱਲ ਪੈਕਟ ਭੇਜਦਾ ਹੈ।',
            practicalExampleEn:
              'When your iPhone joins home Wi-Fi, DHCP leases it `192.168.1.15`. When you open a website, DNS resolves the domain name first, and your home Router uses NAT (Network Address Translation) to forward packets to fiber-optic subsea cables.',
            practicalExamplePa:
              'ਜਦੋਂ ਤੁਸੀਂ Wi-Fi ਆਨ ਕਰਦੇ ਹੋ ਤਾਂ DHCP ਤੁਹਾਡੇ ਫ਼ੋਨ ਨੂੰ ਲੋਕਲ IP ਦਿੰਦਾ ਹੈ, ਅਤੇ DNS ਵੈੱਬਸਾਈਟ ਦਾ ਨਾਮ IP ਵਿੱਚ ਬਦਲ ਕੇ ਸਰਵਰ ਨਾਲ ਜੋੜਦਾ ਹੈ।',
            codeDemo: `# Networking & DNS Diagnostic Commands
ip addr show              # Inspect local IPv4, IPv6, and MAC hardware addresses
nslookup academy.edu      # Step 1: Query DNS server to resolve Domain -> IP
ping -c 4 93.184.216.34   # Step 2: Test ICMP packet round-trip latency
traceroute 93.184.216.34  # Step 3: Inspect every Router hop along the WAN path`,
            misconceptionsJson: [
              {
                myth: 'Wi-Fi and the Internet are the exact same thing.',
                truthEn: 'Wi-Fi is merely a wireless local link (LAN) between your phone and your home router. Your router still requires a fiber/broadband ISP link to reach the Internet (WAN).',
                truthPa: 'Wi-Fi ਸਿਰਫ਼ ਤੁਹਾਡੇ ਫ਼ੋਨ ਨੂੰ ਘਰ ਦੇ Router ਨਾਲ ਬਿਨਾਂ ਤਾਰ ਤੋਂ ਜੋੜਦਾ ਹੈ (LAN); ਅਸਲ ਇੰਟਰਨੈੱਟ (WAN) ਪਿੱਛੇ ਫਾਈਬਰ ਤਾਰ ਰਾਹੀਂ ਆਉਂਦਾ ਹੈ।',
              },
            ],
            terminologyJson: [
              {
                term: 'DNS (Domain Name System)',
                punjabi: 'ਡੀ.ਐਨ.ਐਸ',
                meaningEn: 'Distributed directory that translates human-friendly domain names into numeric IP addresses before a connection begins.',
                meaningPa: 'ਉਹ ਸਿਸਟਮ ਜੋ ਵੈੱਬਸਾਈਟ ਦੇ ਨਾਮ (ਜਿਵੇਂ google.com) ਨੂੰ IP Address ਵਿੱਚ ਬਦਲਦਾ ਹੈ।',
              },
              {
                term: 'DHCP',
                punjabi: 'ਡੀ.ਐਚ.ਸੀ.ਪੀ',
                meaningEn: 'Dynamic Host Configuration Protocol — automatically assigns an IP address, subnet mask, and gateway to devices joining a network.',
                meaningPa: 'ਨੈੱਟਵਰਕ ਨਾਲ ਜੁੜਨ ਵਾਲੇ ਹਰ ਡਿਵਾਈਸ ਨੂੰ ਆਪਣੇ-ਆਪ IP Address ਦੇਣ ਵਾਲਾ ਪ੍ਰੋਟੋਕੋਲ।',
              },
              {
                term: 'MAC vs IP Address',
                punjabi: 'ਮੈਕ ਬਨਾਮ ਆਈ.ਪੀ ਐਡਰੈੱਸ',
                meaningEn: 'MAC is a permanent hardware identifier used by Layer-2 Switches; IP is a logical location address used by Layer-3 Routers.',
                meaningPa: 'MAC ਕਾਰਡ ਦਾ ਪੱਕਾ ਹਾਰਡਵੇਅਰ ਨੰਬਰ ਹੈ (Switch ਲਈ), ਜਦਕਿ IP ਨੈੱਟਵਰਕ ਦਾ ਪਤਾ ਹੈ (Router ਲਈ)।',
              },
            ],
            interactiveLabId: 'network-sim',
            exercisePromptEn:
              'Open the Network Packet Simulator Lab and step through the DNS lookup phase followed by the routed TCP/HTTPS connection to the Web Server.',
            exercisePromptPa:
              'Network Simulator Lab ਖੋਲ੍ਹੋ ਅਤੇ ਦੇਖੋ ਕਿਵੇਂ ਪਹਿਲਾਂ DNS ਤੋਂ IP ਪਤਾ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਅਤੇ ਫਿਰ Router ਰਾਹੀਂ Server ਨਾਲ ਸੰਪਰਕ ਹੁੰਦਾ ਹੈ।',
            summaryEn:
              'DHCP configures local hosts, DNS resolves domain names to IPs, Switches forward Ethernet frames within LANs, and Routers route IP packets across WANs.',
            summaryPa:
              'DHCP ਪਤਾ ਦਿੰਦਾ ਹੈ, DNS ਨਾਮ ਨੂੰ IP ਵਿੱਚ ਬਦਲਦਾ ਹੈ, Switch ਲੋਕਲ ਡਿਵਾਈਸ ਜੋੜਦਾ ਹੈ ਅਤੇ Router ਇੰਟਰਨੈੱਟ ਚਲਾਉਂਦਾ ਹੈ।',
            furtherReadingJson: [
              'Kurose & Ross — Computer Networking: A Top-Down Approach',
            ],
            quiz: {
              titleEn: 'Level 6.1 Assessment: LAN/WAN, DNS, DHCP & Routing',
              titlePa: 'ਲੈਵਲ 6.1 ਟੈਸਟ: ਨੈੱਟਵਰਕਿੰਗ, DNS ਅਤੇ ਰਾਊਟਰ',
              timeLimitSeconds: 240,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'DNS Resolution',
                  promptEn: 'Which network service translates a domain name like "academy.edu" into an IP address like "93.184.216.34" BEFORE the browser can connect to the web server?',
                  promptPa: 'ਵੈੱਬ ਸਰਵਰ ਨਾਲ ਜੁੜਨ ਤੋਂ ਪਹਿਲਾਂ ਕਿਹੜਾ ਸਿਸਟਮ ਵੈੱਬਸਾਈਟ ਦੇ ਨਾਮ (ਜਿਵੇਂ academy.edu) ਨੂੰ IP Address ਵਿੱਚ ਬਦਲਦਾ ਹੈ?',
                  optionsJson: ['DNS (Domain Name System)', 'ALU', 'BIOS', 'PSU'],
                  correctAnswer: 'DNS (Domain Name System)',
                  explanationEn: 'DNS resolves human-readable domain names into numerical IPv4/IPv6 addresses so TCP/IP packets know their destination.',
                  explanationPa: 'DNS ਵੈੱਬਸਾਈਟ ਦੇ ਨਾਮ ਨੂੰ ਕੰਪਿਊਟਰ ਦੇ IP Address ਵਿੱਚ ਬਦਲਣ ਦਾ ਕੰਮ ਕਰਦਾ ਹੈ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'DHCP',
                  promptEn: 'Which protocol automatically assigns an IP address to your smartphone when you connect to a Wi-Fi network?',
                  promptPa: 'ਜਦੋਂ ਤੁਸੀਂ Wi-Fi ਨਾਲ ਜੁੜਦੇ ਹੋ ਤਾਂ ਕਿਹੜਾ ਪ੍ਰੋਟੋਕੋਲ ਤੁਹਾਡੇ ਫ਼ੋਨ ਨੂੰ ਆਪਣੇ-ਆਪ IP Address ਦਿੰਦਾ ਹੈ?',
                  optionsJson: ['DHCP', 'HTML', 'JPEG', 'ASCII'],
                  correctAnswer: 'DHCP',
                  explanationEn: 'DHCP (Dynamic Host Configuration Protocol) dynamically leases IP addresses and default gateway settings to client devices.',
                  explanationPa: 'DHCP ਨੈੱਟਵਰਕ ਉੱਤੇ ਆਉਣ ਵਾਲੇ ਡਿਵਾਈਸਾਂ ਨੂੰ ਆਪਣੇ-ਆਪ IP Address ਵੰਡਦਾ ਹੈ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'IPv4 vs IPv6',
                  promptEn: 'How many bits are in an IPv4 address compared to an IPv6 address?',
                  promptPa: 'IPv4 ਅਤੇ IPv6 ਐਡਰੈੱਸ ਵਿੱਚ ਕਿੰਨੇ-ਕਿੰਨੇ Bits ਹੁੰਦੇ ਹਨ?',
                  optionsJson: [
                    'IPv4 has 32 bits; IPv6 has 128 bits',
                    'IPv4 has 8 bits; IPv6 has 16 bits',
                    'Both have 4 bits',
                    'IPv4 has 1000 bits; IPv6 has 2 bits',
                  ],
                  correctAnswer: 'IPv4 has 32 bits; IPv6 has 128 bits',
                  explanationEn: 'IPv4 uses 32-bit addresses (~4.3 billion total), while IPv6 expands to 128-bit addresses (~3.4 × 10³⁸ addresses).',
                  explanationPa: 'IPv4 ਵਿੱਚ 32 ਬਿੱਟ ਹੁੰਦੇ ਹਨ ਅਤੇ IPv6 ਵਿੱਚ 128 ਬਿੱਟ ਹੁੰਦੇ ਹਨ।',
                },
              ],
            },
          },
          {
            slug: 'network-topologies-osi-dhcp-firewalls-troubleshooting',
            orderIndex: 2,
            titleEn: '6.2 OSI 7-Layer Model, TCP vs UDP, HTTP/HTTPS, Firewalls & Network Troubleshooting',
            titlePa: '6.2 OSI 7-Layer ਮਾਡਲ, TCP/IP, HTTP ਬਨਾਮ HTTPS ਅਤੇ Firewalls',
            objectivesJson: [
              'Master the 7 layers of the OSI Model (Physical, Data Link, Network, Transport, Session, Presentation, Application)',
              'Compare reliable connection-oriented TCP with low-latency connectionless UDP',
              'Contrast plaintext HTTP (Port 80) with TLS-encrypted HTTPS (Port 443)',
              'Explain how Firewalls filter network traffic and how to troubleshoot connectivity',
            ],
            prerequisitesJson: ['6.1 LAN/WAN, Switches vs Routers, IPv4/IPv6, DNS & DHCP'],
            childAnalogyEn:
              '1. TCP vs UDP (ਰਜਿਸਟਰਡ ਡਾਕ ਬਨਾਮ ਲਾਈਵ ਰੇਡੀਓ):\n• TCP is like sending a Registered Parcel where the receiver MUST sign a receipt for every box. If Box #3 gets lost on the road, TCP automatically sends Box #3 again! Used for web pages and banking.\n• UDP is like a Live Cricket Commentary on a loudspeaker—it blasts words super fast without waiting for receipts. If one word is missed, it keeps going live! Used for video calls and gaming!\n\n2. Firewall (ਕਿਲ੍ਹੇ ਦਾ ਚੌਕੀਦਾਰ):\nA Firewall is the security guard at your house gate holding a rulebook: "Allow packages from port 443 (HTTPS), block suspicious strangers trying to sneak in through back windows!"',
            childAnalogyPa:
              '1. TCP ਬਨਾਮ UDP (ਰਸੀਦ ਵਾਲੀ ਡਾਕ ਬਨਾਮ ਲਾਈਵ ਕੁਮੈਂਟਰੀ):\n• TCP: ਇਹ ਰਜਿਸਟਰਡ ਚਿੱਠੀ ਵਾਂਗ ਹੈ — ਜੇ ਰਸਤੇ ਵਿੱਚ ਇੱਕ ਵੀ ਪੈਕਟ ਗੁੰਮ ਹੋ ਜਾਵੇ, ਤਾਂ TCP ਉਸਨੂੰ ਦੁਬਾਰਾ ਮੰਗਵਾਉਂਦਾ ਹੈ ਤਾਂ ਜੋ ਤੁਹਾਡੀ ਫਾਈਲ ਜਾਂ ਬੈਂਕ ਟ੍ਰਾਂਜ਼ੈਕਸ਼ਨ ਬਿਲਕੁਲ ਪੂਰੀ ਪਹੁੰਚੇ।\n• UDP: ਇਹ ਲਾਈਵ ਵੀਡੀਓ ਕਾਲ ਜਾਂ ਗੇਮਿੰਗ ਵਾਂਗ ਹੈ — ਜਿੱਥੇ ਰਫ਼ਤਾਰ ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ ਹੁੰਦੀ ਹੈ!\n\n2. OSI 7 Layers (7 ਮੰਜ਼ਿਲਾਂ ਵਾਲਾ ਡਾਕ ਸਿਸਟਮ):\nPhysical (ਤਾਰ/Wi-Fi) -> Data Link (MAC/Switch) -> Network (IP/Router) -> Transport (TCP/UDP) -> Session -> Presentation -> Application (HTTP/Browser)।',
            technicalExplanationEn:
              '1. The OSI 7-Layer Reference Model:\n• Layer 7 Application: HTTP, HTTPS, DNS.\n• Layer 6 Presentation: TLS encryption, compression.\n• Layer 5 Session: Connection lifecycle.\n• Layer 4 Transport: TCP (reliable, ordered, congestion-controlled) & UDP (connectionless, minimal header).\n• Layer 3 Network: IP addressing & routing (Routers).\n• Layer 2 Data Link: Ethernet MAC framing (Switches).\n• Layer 1 Physical: Fiber optics, copper Cat6, Wi-Fi radio waves.\n\n2. Firewalls & Subsea Infrastructure:\nStateful firewalls inspect packet headers, ports, and connection states. Over 95% of intercontinental internet traffic travels through undersea fiber-optic cables.',
            technicalExplanationPa:
              '1. OSI ਦੇ 7 ਪੱਧਰ: Layer 1 (ਤਾਰਾਂ ਅਤੇ ਰੇਡੀਓ ਤਰੰਗਾਂ), Layer 2 (Switch / MAC), Layer 3 (Router / IP), Layer 4 (TCP / UDP), ਅਤੇ Layer 7 (Browser / HTTPS)।\n2. HTTP ਬਨਾਮ HTTPS: HTTP ਵਿੱਚ ਡਾਟਾ ਖੁੱਲ੍ਹਾ ਜਾਂਦਾ ਹੈ, ਜਦਕਿ HTTPS (Port 443) ਵਿੱਚ TLS Encryption ਰਾਹੀਂ ਡਾਟਾ ਨੂੰ ਗੁਪਤ ਤਾਲਾ ਲਗਾ ਕੇ ਭੇਜਿਆ ਜਾਂਦਾ ਹੈ।\n3. Firewall: ਨੈੱਟਵਰਕ ਦੇ ਦਰਵਾਜ਼ੇ ਉੱਤੇ ਲੱਗੀ ਸੁਰੱਖਿਆ ਦੀਵਾਰ ਜੋ ਅਣचाਹੇ ਪੈਕਟਾਂ ਨੂੰ ਰੋਕਦੀ ਹੈ।',
            practicalExampleEn:
              'When a website fails to load, engineers troubleshoot bottom-up across the OSI layers: 1) Check Wi-Fi/cable (Layer 1), 2) Check local IP via `ip addr` (Layer 3), 3) `ping 8.8.8.8` (Layer 3 WAN reachability), 4) `nslookup` (Layer 7 DNS).',
            practicalExamplePa:
              'ਜਦੋਂ ਇੰਟਰਨੈੱਟ ਨਾ ਚੱਲੇ ਤਾਂ ਅਸੀਂ ਪਹਿਲਾਂ Wi-Fi ਸਿਗਨਲ ਚੈੱਕ ਕਰਦੇ ਹਾਂ, ਫਿਰ Router ਨੂੰ `ping` ਕਰਦੇ ਹਾਂ ਅਤੇ ਫਿਰ DNS ਚੈੱਕ ਕਰਦੇ ਹਾਂ।',
            codeDemo: `# Inspecting Ports, HTTPS TLS Handshake & Firewall Rules
curl -I https://example.com   # Inspect HTTP/2 200 OK headers over TLS (Port 443)
ss -tuln                      # View active TCP and UDP listening sockets/ports
sudo ufw status               # Check Linux Firewall rules (Allow 443/tcp)`,
            misconceptionsJson: [
              {
                myth: 'Global internet data mostly travels through space satellites.',
                truthEn: 'Over 98% of international internet data travels at the speed of light in glass through subsea fiber-optic cables laid on the ocean floor!',
                truthPa: 'ਦੁਨੀਆ ਦਾ 98% ਤੋਂ ਵੱਧ ਇੰਟਰਨੈੱਟ ਡਾਟਾ ਪੁਲਾੜ ਦੇ ਸੈਟੇਲਾਈਟਾਂ ਰਾਹੀਂ ਨਹੀਂ, ਸਗੋਂ ਸਮੁੰਦਰ ਦੇ ਹੇਠਾਂ ਵਿਛੀਆਂ ਫਾਈਬਰ-ਆਪਟਿਕ ਤਾਰਾਂ ਰਾਹੀਂ ਜਾਂਦਾ ਹੈ!',
              },
            ],
            terminologyJson: [
              {
                term: 'OSI Model',
                punjabi: 'ਓ.ਐਸ.ਆਈ 7-ਲੇਅਰ ਮਾਡਲ',
                meaningEn: '7-layer conceptual framework standardizing network functions from Physical cables (L1) to Applications (L7).',
                meaningPa: 'ਨੈੱਟਵਰਕ ਦੇ ਕੰਮ ਨੂੰ 7 ਪੱਧਰਾਂ (Physical ਤੋਂ Application ਤੱਕ) ਵਿੱਚ ਸਮਝਾਉਣ ਵਾਲਾ ਮਾਡਲ।',
              },
              {
                term: 'TCP vs UDP',
                punjabi: 'ਟੀ.ਸੀ.ਪੀ ਬਨਾਮ ਯੂ.ਡੀ.ਪੀ',
                meaningEn: 'TCP guarantees delivery and order via acknowledgments; UDP sends datagrams with minimal latency and no retransmission.',
                meaningPa: 'TCP ਪੱਕੀ ਡਿਲੀਵਰੀ ਦੀ ਗਰੰਟੀ ਦਿੰਦਾ ਹੈ, ਜਦਕਿ UDP ਬਿਨਾਂ ਰੁਕੇ ਤੇਜ਼ ਰਫ਼ਤਾਰ ਨਾਲ ਡਾਟਾ ਭੇਜਦਾ ਹੈ।',
              },
              {
                term: 'Firewall',
                punjabi: 'ਫਾਇਰਵਾਲ (ਸੁਰੱਖਿਆ ਕੰਧ)',
                meaningEn: 'Network security system that monitors and filters incoming and outgoing traffic based on security rules.',
                meaningPa: 'ਉਹ ਸੁਰੱਖਿਆ ਸਿਸਟਮ ਜੋ ਨੈੱਟਵਰਕ ਵਿੱਚ ਆਉਣ-ਜਾਣ ਵਾਲੇ ਪੈਕਟਾਂ ਦੀ ਜਾਂਚ ਕਰਕੇ ਖਤਰਨਾਕ ਟ੍ਰੈਫਿਕ ਨੂੰ ਰੋਕਦਾ ਹੈ।',
              },
            ],
            interactiveLabId: 'network-sim',
            exercisePromptEn:
              'Trace how Layer 2 (MAC), Layer 3 (IP), Layer 4 (TCP Port 443), and Layer 7 (HTTPS) headers appear in the Network Packet Simulator Lab.',
            exercisePromptPa:
              'Network Simulator Lab ਵਿੱਚ ਹਰੇਕ ਪੜਾਅ ਉੱਤੇ ਬਦਲਦੇ MAC, IP ਅਤੇ HTTPS ਹੈਡਰਾਂ ਨੂੰ ਧਿਆਨ ਨਾਲ ਦੇਖੋ।',
            summaryEn:
              'The OSI model layers networking from physical media to application protocols, TCP ensures reliable transport, HTTPS encrypts web traffic, and Firewalls enforce perimeter rules.',
            summaryPa:
              'OSI ਮਾਡਲ ਨੈੱਟਵਰਕ ਨੂੰ 7 ਹਿੱਸਿਆਂ ਵਿੱਚ ਵੰਡਦਾ ਹੈ, TCP ਭਰੋਸੇਯੋਗ ਡਿਲੀਵਰੀ ਕਰਦਾ ਹੈ ਅਤੇ HTTPS ਤੇ Firewall ਸੁਰੱਖਿਆ ਦਿੰਦੇ ਹਨ।',
            furtherReadingJson: [
              'RFC 793 (TCP) & RFC 8446 (TLS 1.3)',
            ],
            quiz: {
              titleEn: 'Level 6.2 Assessment: OSI Model, TCP/UDP & Firewalls',
              titlePa: 'ਲੈਵਲ 6.2 ਟੈਸਟ: OSI ਮਾਡਲ, TCP/UDP ਅਤੇ ਫਾਇਰਵਾਲ',
              timeLimitSeconds: 240,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'OSI Model',
                  promptEn: 'At which layer of the OSI model do IP Addresses and Routers operate?',
                  promptPa: 'OSI ਮਾਡਲ ਦੀ ਕਿਹੜੀ Layer ਉੱਤੇ IP Address ਅਤੇ Routers ਕੰਮ ਕਰਦੇ ਹਨ?',
                  optionsJson: [
                    'Layer 3 — Network Layer',
                    'Layer 1 — Physical Cables',
                    'Layer 7 — Web Browser UI',
                    'Layer 0 — Power Cord',
                  ],
                  correctAnswer: 'Layer 3 — Network Layer',
                  explanationEn: 'Logical IP addressing and packet routing occur at Layer 3 ( the Network Layer) of the OSI model.',
                  explanationPa: 'IP Address ਅਤੇ Router ਹਮੇਸ਼ਾ Layer 3 (Network Layer) ਉੱਤੇ ਕੰਮ ਕਰਦੇ ਹਨ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'TCP vs UDP',
                  promptEn: 'Which transport protocol guarantees that all packets arrive in order and automatically retransmits any lost packet?',
                  promptPa: 'ਕਿਹੜਾ ਪ੍ਰੋਟੋਕੋਲ ਇਹ ਪੱਕਾ ਕਰਦਾ ਹੈ ਕਿ ਡਾਟਾ ਦਾ ਕੋਈ ਵੀ ਟੁਕੜਾ ਰਸਤੇ ਵਿੱਚ ਗੁੰਮ ਨਾ ਹੋਵੇ ਅਤੇ ਕ੍ਰਮਵਾਰ ਪਹੁੰਚੇ?',
                  optionsJson: ['TCP (Transmission Control Protocol)', 'UDP', 'ICMP Ping', 'ARP'],
                  correctAnswer: 'TCP (Transmission Control Protocol)',
                  explanationEn: 'TCP uses sequence numbers, ACKs, and retransmissions to guarantee reliable, ordered delivery.',
                  explanationPa: 'TCP ਹਰੇਕ ਪੈਕਟ ਦੀ ਪਹੁੰਚ ਰਸੀਦ (ACK) ਲੈਂਦਾ ਹੈ ਅਤੇ ਗੁੰਮ ਹੋਇਆ ਪੈਕਟ ਦੁਬਾਰਾ ਭੇਜਦਾ ਹੈ।',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'level-7-cybersecurity-fundamentals',
    levelNumber: 7,
    titleEn: 'Level 7: Cybersecurity Fundamentals, Cryptography & Defensive Security',
    titlePa: 'ਲੈਵਲ 7: ਸਾਈਬਰ ਸੁਰੱਖਿਆ ਦੀਆਂ ਬੁਨਿਆਦਾਂ (Cybersecurity & Encryption)',
    descriptionEn:
      'CIA Triad, Malware/Ransomware/Viruses/Worms, Phishing, Multi-Factor Authentication (MFA), Password Hashing, Symmetric & Asymmetric Encryption, Backups, and Defensive Security.',
    descriptionPa:
      'ਸਾਈਬਰ ਸੁਰੱਖਿਆ: CIA Triad, Malware, Ransomware, Phishing ਤੋਂ ਬਚਾਅ, MFA, Password Hashing, Encryption (AES/RSA) ਅਤੇ 3-2-1 Backups।',
    category: 'core-cs',
    estimatedHours: 8,
    modules: [
      {
        orderIndex: 1,
        titleEn: 'Threat Landscape, Authentication & Applied Cryptography',
        titlePa: 'ਸਾਈਬਰ ਖਤਰੇ, ਪ੍ਰਮਾਣਿਕਤਾ ਅਤੇ ਕ੍ਰਿਪਟੋਗ੍ਰਾਫੀ (Encryption)',
        summaryEn: 'Learn how attackers target systems and how cryptography, hashing, and defense-in-depth protect data.',
        summaryPa: 'ਸਿੱਖੋ ਕਿ ਸਾਈਬਰ ਹਮਲੇ ਕਿਵੇਂ ਹੁੰਦੇ ਹਨ ਅਤੇ Hashing, Encryption ਤੇ MFA ਸਾਡੇ ਡਾਟੇ ਦੀ ਰੱਖਿਆ ਕਿਵੇਂ ਕਰਦੇ ਹਨ।',
        lessons: [
          {
            slug: 'cybersecurity-cia-malware-phishing-auth',
            orderIndex: 1,
            titleEn: '7.1 The CIA Triad, Malware (Viruses, Worms, Ransomware), Phishing & MFA',
            titlePa: '7.1 CIA Triad, ਮਾਲਵੇਅਰ, Phishing ਅਤੇ ਮਲਟੀ-ਫੈਕਟਰ ਸੁਰੱਖਿਆ (MFA)',
            objectivesJson: [
              'Define the CIA Triad: Confidentiality, Integrity, and Availability',
              'Distinguish Viruses, Worms, Trojans, and Ransomware',
              'Recognize Phishing and Social Engineering attacks',
              'Explain Multi-Factor Authentication (MFA) and Cryptographic Password Hashing (Salted bcrypt/SHA-256)',
            ],
            prerequisitesJson: ['6.1 LAN/WAN, Switches vs Routers, IPv4/IPv6, DNS & DHCP'],
            childAnalogyEn:
              '1. The CIA Triad (ਤੁਹਾਡੀ ਸਕੂਲ ਦੀ ਡਾਇਰੀ ਦੇ 3 ਨਿਯਮ):\n• Confidentiality (ਗੁਪਤਤਾ): Only YOU can read your secret diary—nobody else is allowed to peek!\n• Integrity (ਸੱਚਾਈ): Nobody can sneak in with an eraser and change your "100/100" math marks to "10/100"!\n• Availability (ਉਪਲਬਧਤਾ): Whenever you need your diary for homework, it is right there in your bag—not locked away!\n\n2. Hashing vs Encryption (ਆਲੂਆਂ ਤੋਂ ਸਮੋਸਾ ਬਣਾਉਣਾ):\n• Encryption is putting a gold ring inside a locked box—if you have the key, you can unlock the box and get the exact ring back.\n• Hashing is turning potatoes and flour into a crispy Samosa! You can easily verify it’s a real Samosa, but you can NEVER un-fry a Samosa back into a raw potato! That is how servers store passwords!',
            childAnalogyPa:
              '1. CIA Triad ਦੇ 3 ਥੰਮ੍ਹ:\n• Confidentiality (ਗੁਪਤਤਾ): ਤੁਹਾਡਾ ਪ੍ਰਾਈਵੇਟ ਡਾਟਾ ਸਿਰਫ਼ ਉਹੀ ਦੇਖ ਸਕੇ ਜਿਸਨੂੰ ਇਜਾਜ਼ਤ ਹੈ।\n• Integrity (ਸ਼ੁੱਧਤਾ): ਰਸਤੇ ਵਿੱਚ ਕੋਈ ਹੈਕਰ ਤੁਹਾਡੇ ਭੇਜੇ ₹500 ਨੂੰ ਬਦਲ ਕੇ ₹50,000 ਨਾ ਕਰ ਸਕੇ।\n• Availability (ਉਪਲਬਧਤਾ): ਜਦੋਂ ਵੀ ਤੁਹਾਨੂੰ ਲੋੜ ਹੋਵੇ, ਵੈੱਬਸਾਈਟ ਅਤੇ ਡਾਟਾ ਚੱਲਦਾ ਮਿਲੇ।\n\n2. Malware ਦੀਆਂ ਕਿਸਮਾਂ:\n• Virus: ਕਿਸੇ ਫਾਈਲ ਨਾਲ ਚਿਪਕ ਕੇ ਫੈਲਦਾ ਹੈ ਜਦੋਂ ਤੁਸੀਂ ਉਸ ਫਾਈਲ ਨੂੰ ਖੋਲ੍ਹਦੇ ਹੋ।\n• Worm: ਬਿਨਾਂ ਕਿਸੇ ਇਨਸਾਨੀ ਕਲਿੱਕ ਦੇ ਨੈੱਟਵਰਕ ਰਾਹੀਂ ਆਪਣੇ-ਆਪ ਇੱਕ ਕੰਪਿਊਟਰ ਤੋਂ ਦੂਜੇ ਵਿੱਚ ਫੈਲ ਜਾਂਦਾ ਹੈ।\n• Ransomware: ਤੁਹਾਡੀਆਂ ਸਾਰੀਆਂ ਫੋਟੋਆਂ ਅਤੇ ਫਾਈਲਾਂ ਨੂੰ ਗੁਪਤ ਤਾਲਾ (Encrypt) ਲਗਾ ਦਿੰਦਾ ਹੈ ਅਤੇ ਖੋਲ੍ਹਣ ਬਦਲੇ ਪੈਸੇ (ਫਿਰੌਤੀ) ਮੰਗਦਾ ਹੈ!\n• Phishing: ਬੈਂਕ ਜਾਂ ਲਾਟਰੀ ਦੇ ਨਾਮ ਤੇ ਝੂਠਾ ਮੈਸੇਜ/ਲਿੰਕ ਭੇਜ ਕੇ ਤੁਹਾਡਾ OTP ਜਾਂ ਪਾਸਵਰਡ ਚੋਰੀ ਕਰਨਾ।',
            technicalExplanationEn:
              '1. Threat Taxonomy:\n• Virus: Requires host program execution to replicate.\n• Worm: Self-propagates across network vulnerabilities.\n• Ransomware: Encrypts victim files and demands extortion.\n• Phishing: Social engineering via spoofed domains/messages.\n\n2. Authentication & MFA:\nCombines Something You Know (password), Something You Have (authenticator device/hardware key), and Something You Are (FaceID/biometrics).\n\n3. Password Security & Salted Hashing:\nServers never store plaintext passwords. They compute `Hash(password + random_salt)` using slow key-derivation functions (`bcrypt`, `Argon2id`) so database leaks cannot be reversed via rainbow tables.',
            technicalExplanationPa:
              '1. MFA (Multi-Factor Authentication): ਸਿਰਫ਼ ਪਾਸਵਰਡ ਕਾਫ਼ੀ ਨਹੀਂ ਹੁੰਦਾ; ਪਾਸਵਰਡ ਦੇ ਨਾਲ ਫ਼ੋਨ ਦਾ ਕੋਡ ਜਾਂ FaceID ਲਗਾਉਣ ਨਾਲ ਖਾਤਾ 99% ਸੁਰੱਖਿਅਤ ਹੋ ਜਾਂਦਾ ਹੈ।\n2. Cryptographic Hashing: ਚੰਗੀਆਂ ਵੈੱਬਸਾਈਟਾਂ ਤੁਹਾਡਾ ਅਸਲ ਪਾਸਵਰਡ ਕਦੇ ਸੇਵ ਨਹੀਂ ਕਰਦੀਆਂ, ਸਗੋਂ ਉਸਦਾ One-Way Hash (ਜਿਵੇਂ `Argon2` ਜਾਂ `bcrypt`) ਬਣਾ ਕੇ ਰੱਖਦੀਆਂ ਹਨ ਜਿਸਨੂੰ ਉਲਟਾ ਕੇ ਵਾਪਸ ਪਾਸਵਰਡ ਨਹੀਂ ਬਣਾਇਆ ਜਾ ਸਕਦਾ।',
            practicalExampleEn:
              'If you receive an SMS saying "Your bank account will be blocked in 10 minutes, click http://sbi-verify-login.xyz", inspecting the domain suffix `.xyz` reveals a classic Phishing attack trying to harvest your password and OTP.',
            practicalExamplePa:
              'ਜੇਕਰ ਤੁਹਾਨੂੰ ਕੋਈ ਮੈਸੇਜ ਆਵੇ ਕਿ "ਤੁਹਾਡਾ ਬੈਂਕ ਖਾਤਾ ਬੰਦ ਹੋਣ ਵਾਲਾ ਹੈ, ਇਸ ਲਿੰਕ ਤੇ ਕਲਿੱਕ ਕਰੋ", ਤਾਂ ਉਹ Phishing ਹਮਲਾ ਹੁੰਦਾ ਹੈ। ਬੈਂਕ ਕਦੇ ਵੀ ਲਿੰਕ ਭੇਜ ਕੇ ਪਾਸਵਰਡ ਜਾਂ OTP ਨਹੀਂ ਮੰਗਦਾ!',
            codeDemo: `// Demonstrating One-Way Salted Password Verification (Node.js Crypto)
import crypto from 'crypto';

function hashPasswordWithSalt(password: string, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return { salt, hash }; // Stored in database instead of plaintext password!
}`,
            misconceptionsJson: [
              {
                myth: 'When you click "Forgot Password", the website looks up your old password and emails it to you.',
                truthEn: 'Because passwords are stored as irreversible cryptographic hashes, the server itself does NOT know your password—it can only let you reset a brand-new one!',
                truthPa: 'ਵੈੱਬਸਾਈਟ ਨੂੰ ਖੁਦ ਵੀ ਤੁਹਾਡਾ ਪੁਰਾਣਾ ਪਾਸਵਰਡ ਨਹੀਂ ਪਤਾ ਹੁੰਦਾ ਕਿਉਂਕਿ ਉਹ Hash ਦੇ ਰੂਪ ਵਿੱਚ ਹੁੰਦਾ ਹੈ; ਇਸੇ ਲਈ ਹਮੇਸ਼ਾ ਨਵਾਂ ਪਾਸਵਰਡ Reset ਕਰਵਾਇਆ ਜਾਂਦਾ ਹੈ!',
              },
            ],
            terminologyJson: [
              {
                term: 'CIA Triad',
                punjabi: 'ਸੀ.ਆਈ.ਏ ਟ੍ਰਾਇਡ',
                meaningEn: 'Core model of information security: Confidentiality, Integrity, and Availability.',
                meaningPa: 'ਸਾਈਬਰ ਸੁਰੱਖਿਆ ਦੇ ਤਿੰਨ ਮੁੱਖ ਸਿਧਾਂਤ: ਗੁਪਤਤਾ, ਸ਼ੁੱਧਤਾ ਅਤੇ ਉਪਲਬਧਤਾ।',
              },
              {
                term: 'Phishing',
                punjabi: 'ਫਿਸ਼ਿੰਗ (ਧੋਖਾਧੜੀ)',
                meaningEn: 'Social engineering attack where attackers impersonate a trusted organization to steal credentials.',
                meaningPa: 'ਕਿਸੇ ਭਰੋਸੇਯੋਗ ਸੰਸਥਾ (ਜਿਵੇਂ ਬੈਂਕ) ਦਾ ਭੇਸ ਧਾਰ ਕੇ ਪਾਸਵਰਡ ਚੋਰੀ ਕਰਨ ਦੀ ਚਾਲ।',
              },
              {
                term: 'Cryptographic Hash',
                punjabi: 'ਕ੍ਰਿਪਟੋਗ੍ਰਾਫਿਕ ਹੈਸ਼',
                meaningEn: 'One-way mathematical function that converts input data into a fixed-length fingerprint that cannot be reversed.',
                meaningPa: 'ਇੱਕ-ਤਰਫ਼ਾ ਗਣਿਤ ਫਾਰਮੂਲਾ ਜੋ ਪਾਸਵਰਡ ਨੂੰ ਅਜਿਹੇ ਕੋਡ ਵਿੱਚ ਬਦਲਦਾ ਹੈ ਜਿਸਨੂੰ ਵਾਪਸ ਨਹੀਂ ਪੜ੍ਹਿਆ ਜਾ ਸਕਦਾ।',
              },
            ],
            interactiveLabId: 'network-sim',
            exercisePromptEn:
              'Review how TLS 1.3 protects packet confidentiality and integrity in the Network Simulator Lab.',
            exercisePromptPa:
              'Network Simulator Lab ਵਿੱਚ ਦੇਖੋ ਕਿਵੇਂ TLS 1.3 ਤੁਹਾਡੇ ਡਾਟੇ ਨੂੰ ਗੁਪਤ ਅਤੇ ਸੁਰੱਖਿਅਤ ਰੱਖਦਾ ਹੈ।',
            summaryEn:
              'The CIA Triad guides security design, MFA blocks credential theft, Phishing awareness stops social engineering, and salted hashing protects stored passwords.',
            summaryPa:
              'CIA Triad ਸੁਰੱਖਿਆ ਦਾ ਆਧਾਰ ਹੈ, MFA ਅਤੇ Hashing ਖਾਤਿਆਂ ਨੂੰ ਬਚਾਉਂਦੇ ਹਨ ਅਤੇ Phishing ਦੀ ਪਛਾਣ ਧੋਖਾਧੜੀ ਰੋਕਦੀ ਹੈ।',
            furtherReadingJson: [
              'NIST Special Publication 800-63B — Digital Identity Guidelines',
            ],
            quiz: {
              titleEn: 'Level 7.1 Assessment: CIA Triad, Malware, Phishing & MFA',
              titlePa: 'ਲੈਵਲ 7.1 ਟੈਸਟ: ਸਾਈਬਰ ਸੁਰੱਖਿਆ, Phishing ਅਤੇ MFA',
              timeLimitSeconds: 240,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'Cybersecurity',
                  promptEn: 'What do we call a fraudulent email or message that pretends to be from your bank to trick you into revealing your password?',
                  promptPa: 'ਉਸ ਧੋਖਾਧੜੀ ਵਾਲੇ ਮੈਸੇਜ ਜਾਂ ਈਮੇਲ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ ਜੋ ਬੈਂਕ ਦੇ ਨਾਮ ਤੇ ਤੁਹਾਡਾ ਪਾਸਵਰਡ ਚੋਰੀ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦਾ ਹੈ?',
                  optionsJson: ['Phishing', 'Pipelining', 'Defragmentation', 'Overclocking'],
                  correctAnswer: 'Phishing',
                  explanationEn: 'Phishing is a social engineering attack designed to deceive users into handing over credentials.',
                  explanationPa: 'ਅਜਿਹੇ ਧੋਖੇ ਵਾਲੇ ਸੁਨੇਹਿਆਂ ਨੂੰ Phishing ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Password Security',
                  promptEn: 'How should a secure backend server store user passwords in its database?',
                  promptPa: 'ਇੱਕ ਸੁਰੱਖਿਅਤ ਸਰਵਰ ਨੂੰ ਡਾਟਾਬੇਸ ਵਿੱਚ ਵਰਤੋਂਕਾਰਾਂ ਦੇ ਪਾਸਵਰਡ ਕਿਵੇਂ ਸੇਵ ਕਰਨੇ ਚਾਹੀਦੇ ਹਨ?',
                  optionsJson: [
                    'As a one-way salted cryptographic hash (e.g., bcrypt / Argon2)',
                    'In a public plaintext notepad file',
                    'Inside browser cookies visible to everyone',
                    'In the HTML page title',
                  ],
                  correctAnswer: 'As a one-way salted cryptographic hash (e.g., bcrypt / Argon2)',
                  explanationEn: 'Salted cryptographic hashing ensures that even if the database is read, plaintext passwords cannot be recovered.',
                  explanationPa: 'ਪਾਸਵਰਡ ਨੂੰ ਹਮੇਸ਼ਾ Salted Hash ਬਣਾ ਕੇ ਸੇਵ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਤਾਂ ਜੋ ਕੋਈ ਉਸਨੂੰ ਪੜ੍ਹ ਨਾ ਸਕੇ।',
                },
              ],
            },
          },
          {
            slug: 'encryption-aes-rsa-backups-defensive-security',
            orderIndex: 2,
            titleEn: '7.2 Symmetric vs Asymmetric Encryption, 3-2-1 Backups, Patching & Defensive Security',
            titlePa: '7.2 ਇਨਕ੍ਰਿਪਸ਼ਨ (Symmetric vs Asymmetric), 3-2-1 ਬੈਕਅੱਪ ਅਤੇ ਬਚਾਅ ਦੇ ਨਿਯਮ',
            objectivesJson: [
              'Contrast Symmetric Encryption (AES — single shared key) with Asymmetric Public-Key Cryptography (RSA/ECC — Public + Private key pair)',
              'Apply the 3-2-1 Backup Rule to survive hardware failure and ransomware',
              'Understand software patch management, zero-day vulnerabilities, and least-privilege access control',
            ],
            prerequisitesJson: ['7.1 The CIA Triad, Malware (Viruses, Worms, Ransomware), Phishing & MFA'],
            childAnalogyEn:
              '1. Symmetric vs Asymmetric Encryption (ਘਰ ਦਾ ਤਾਲਾ ਬਨਾਮ ਡਾਕਖਾਨੇ ਦਾ ਲੈਟਰ-ਬਕਸ):\n• Symmetric Encryption (AES) is like a regular house padlock: the exact SAME key locks the door and unlocks the door. Fast, but how do you safely mail that key to a friend far away?\n• Asymmetric Encryption (RSA / Public-Key) is like a Street Postbox with a mail slot:\nAnyone in the public has the "Public Key" (the open slot) to drop a secret letter INSIDE the box. But ONLY the Postmaster holds the "Private Key" to open the heavy iron door and read the letters!',
            childAnalogyPa:
              '1. Symmetric ਬਨਾਮ Asymmetric Encryption:\n• Symmetric (AES): ਜਿਸ ਵਿੱਚ ਤਾਲਾ ਲਗਾਉਣ (Encrypt) ਅਤੇ ਤਾਲਾ ਖੋਲ੍ਹਣ (Decrypt) ਲਈ ਇੱਕੋ ਚਾਬੀ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।\n• Asymmetric (Public & Private Key): ਇਸ ਵਿੱਚ 2 ਚਾਬੀਆਂ ਹੁੰਦੀਆਂ ਹਨ! "Public Key" ਇੱਕ ਖੁੱਲ੍ਹੇ ਤਾਲੇ ਜਾਂ ਲੈਟਰ-ਬਕਸ ਵਾਂਗ ਹੈ ਜੋ ਤੁਸੀਂ ਦੁਨੀਆ ਵਿੱਚ ਕਿਸੇ ਨੂੰ ਵੀ ਦੇ ਸਕਦੇ ਹੋ ਤਾਂ ਜੋ ਉਹ ਤੁਹਾਨੂੰ ਗੁਪਤ ਸੁਨੇਹਾ ਬੰਦ ਕਰਕੇ ਭੇਜ ਸਕੇ। ਪਰ ਉਸ ਤਾਲੇ ਨੂੰ ਖੋਲ੍ਹਣ ਵਾਲੀ "Private Key" ਸਿਰਫ਼ ਤੁਹਾਡੀ ਆਪਣੀ ਜੇਬ ਵਿੱਚ ਰਹਿੰਦੀ ਹੈ!\n\n2. 3-2-1 Backup ਨਿਯਮ:\nਆਪਣੇ ਜ਼ਰੂਰੀ ਡਾਟੇ ਦੀਆਂ 3 ਕਾਪੀਆਂ ਰੱਖੋ, 2 ਵੱਖ-ਵੱਖ ਡਿਵਾਈਸਾਂ ਉੱਤੇ ਰੱਖੋ, ਅਤੇ 1 ਕਾਪੀ ਘਰ/ਦਫ਼ਤਰ ਤੋਂ ਬਾਹਰ (Cloud ਜਾਂ ਵੱਖਰੀ ਥਾਂ) ਰੱਖੋ!',
            technicalExplanationEn:
              '1. Hybrid Cryptography in HTTPS (TLS):\n• Asymmetric Cryptography (RSA / Elliptic Curve Diffie-Hellman) is used during the initial handshake to authenticate the server certificate and securely exchange a session key.\n• Symmetric Cryptography (AES-256-GCM) then encrypts the bulk data stream at high speed using hardware AES-NI instructions.\n\n2. Defensive Security & 3-2-1 Backups:\n• 3 copies of data, on 2 different storage media, with 1 copy offline/offsite.\n• Principle of Least Privilege (RBAC): Users and services receive only the minimum permissions required.',
            technicalExplanationPa:
              '1. HTTPS ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ? ਸ਼ੁਰੂ ਵਿੱਚ ਚਾਬੀ ਸਾਂਝੀ ਕਰਨ ਲਈ Asymmetric Encryption ਵਰਤੀ ਜਾਂਦੀ ਹੈ, ਅਤੇ ਫਿਰ ਤੇਜ਼ ਰਫ਼ਤਾਰ ਨਾਲ ਡਾਟਾ ਭੇਜਣ ਲਈ Symmetric (AES) ਵਰਤੀ ਜਾਂਦੀ ਹੈ।\n2. Least Privilege (RBAC): ਹਰੇਕ ਵਰਤੋਂਕਾਰ ਨੂੰ ਸਿਰਫ਼ ਓਨਾ ਹੀ ਅਧਿਕਾਰ ਦੇਣਾ ਜਿੰਨਾ ਉਸਦੇ ਕੰਮ ਲਈ ਜ਼ਰੂਰੀ ਹੈ (ਜਿਵੇਂ ਇਸ ਐਪ ਵਿੱਚ ਸਿਰਫ਼ Admin ਹੀ ਪਾਠਕ੍ਰਮ ਬਦਲ ਸਕਦਾ ਹੈ)।',
            practicalExampleEn:
              'In Phase 1 of our Academy security architecture, we enforce Role-Based Access Control (`requireAdmin`) on `/api/admin/lessons` so regular student accounts cannot modify curriculum lessons.',
            practicalExamplePa:
              'ਜਿਵੇਂ ਸਾਡੀ ਇਸੇ ਐਪ ਵਿੱਚ Role-Based Access Control (RBAC) ਲੱਗਿਆ ਹੈ ਤਾਂ ਜੋ ਕੋਈ ਆਮ ਵਿਦਿਆਰਥੀ ਸਰਵਰ ਦੇ ਮੁੱਖ ਪਾਠਾਂ ਨੂੰ ਡਿਲੀਟ ਜਾਂ ਬਦਲ ਨਾ ਸਕੇ।',
            codeDemo: `// Principle of Least Privilege & Role-Based Authorization Check
function authorizeAdminAction(userRole: 'student' | 'instructor' | 'admin'): boolean {
  if (userRole !== 'admin') {
    throw new Error('403 Forbidden: Administrator role required');
  }
  return true;
}`,
            misconceptionsJson: [
              {
                myth: 'Keeping a copy of your files in a second folder on the same laptop counts as a backup.',
                truthEn: 'If that laptop’s SSD fails or is stolen, both folders are lost! A true backup must reside on separate physical media and offsite (3-2-1 rule).',
                truthPa: 'ਇੱਕੋ ਲੈਪਟਾਪ ਦੇ ਦੂਜੇ ਫੋਲਡਰ ਵਿੱਚ ਫਾਈਲ ਰੱਖਣਾ ਬੈਕਅੱਪ ਨਹੀਂ ਹੁੰਦਾ; ਬੈਕਅੱਪ ਹਮੇਸ਼ਾ ਵੱਖਰੀ ਡਰਾਈਵ ਜਾਂ ਕਲਾਊਡ ਉੱਤੇ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।',
              },
            ],
            terminologyJson: [
              {
                term: 'Asymmetric Encryption',
                punjabi: 'ਅਸਮਿੱਟ੍ਰਿਕ ਇਨਕ੍ਰਿਪਸ਼ਨ (Public/Private Key)',
                meaningEn: 'Cryptographic system using a public key to encrypt data and a mathematically paired private key to decrypt it.',
                meaningPa: 'ਉਹ ਤਕਨੀਕ ਜਿਸ ਵਿੱਚ ਤਾਲਾ ਲਗਾਉਣ ਲਈ Public Key ਅਤੇ ਖੋਲ੍ਹਣ ਲਈ ਗੁਪਤ Private Key ਵਰਤੀ ਜਾਂਦੀ ਹੈ।',
              },
              {
                term: '3-2-1 Backup Rule',
                punjabi: '3-2-1 ਬੈਕਅੱਪ ਨਿਯਮ',
                meaningEn: 'Maintain 3 copies of data on 2 different media types with 1 copy stored offsite/offline.',
                meaningPa: 'ਡਾਟੇ ਦੀਆਂ 3 ਕਾਪੀਆਂ, 2 ਵੱਖਰੇ ਮਾਧਿਅਮਾਂ ਉੱਤੇ ਅਤੇ 1 ਕਾਪੀ ਵੱਖਰੀ ਸੁਰੱਖਿਅਤ ਥਾਂ ਤੇ ਰੱਖਣ ਦਾ ਨਿਯਮ।',
              },
              {
                term: 'Least Privilege (RBAC)',
                punjabi: 'ਘੱਟੋ-ਘੱਟ ਲੋੜੀਂਦਾ ਅਧਿਕਾਰ',
                meaningEn: 'Security principle granting users only the permissions essential to perform their authorized role.',
                meaningPa: 'ਹਰੇਕ ਵਰਤੋਂਕਾਰ ਨੂੰ ਸਿਰਫ਼ ਉਸਦੇ ਰੋਲ ਮੁਤਾਬਕ ਲੋੜੀਂਦੇ ਅਧਿਕਾਰ ਦੇਣ ਦਾ ਸੁਰੱਖਿਆ ਨਿਯਮ।',
              },
            ],
            interactiveLabId: 'logic-gates',
            exercisePromptEn:
              'Open the Logic Gate Lab and test the XOR gate—notice how `(Message XOR Key) XOR Key` gives back the original `Message`, which is the foundation of stream ciphers!',
            exercisePromptPa:
              'Logic Gate Lab ਵਿੱਚ XOR ਗੇਟ ਚਲਾ ਕੇ ਦੇਖੋ — ਇਹੀ XOR ਗੇਟ ਇਨਕ੍ਰਿਪਸ਼ਨ ਵਿੱਚ ਡਾਟਾ ਲੁਕਾਉਣ ਅਤੇ ਵਾਪਸ ਖੋਲ੍ਹਣ ਦਾ ਮੁੱਢਲਾ ਸਿਧਾਂਤ ਹੈ!',
            summaryEn:
              'Asymmetric keys bootstrap trust, AES symmetric encryption protects data in transit and at rest, 3-2-1 backups ensure resilience, and RBAC enforces least privilege.',
            summaryPa:
              'Public/Private Key ਅਤੇ AES ਡਾਟਾ ਗੁਪਤ ਰੱਖਦੇ ਹਨ, 3-2-1 ਬੈਕਅੱਪ ਡਾਟਾ ਗੁੰਮ ਹੋਣ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ ਅਤੇ RBAC ਸਿਸਟਮ ਸੁਰੱਖਿਅਤ ਰੱਖਦਾ ਹੈ।',
            furtherReadingJson: [
              'Bruce Schneier — Applied Cryptography',
            ],
            quiz: {
              titleEn: 'Level 7.2 Assessment: Encryption, Backups & Defensive Security',
              titlePa: 'ਲੈਵਲ 7.2 ਟੈਸਟ: ਇਨਕ੍ਰਿਪਸ਼ਨ ਅਤੇ ਬੈਕਅੱਪ ਸੁਰੱਖਿਆ',
              timeLimitSeconds: 240,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'Cryptography',
                  promptEn: 'In Asymmetric (Public-Key) Encryption, which key is kept strictly secret by the owner to decrypt incoming messages?',
                  promptPa: 'Asymmetric Encryption ਵਿੱਚ ਕਿਹੜੀ ਚਾਬੀ (Key) ਮਾਲਕ ਵੱਲੋਂ ਬਿਲਕੁਲ ਗੁਪਤ ਰੱਖੀ ਜਾਂਦੀ ਹੈ?',
                  optionsJson: ['Private Key', 'Public Key', 'Domain Name', 'MAC Address'],
                  correctAnswer: 'Private Key',
                  explanationEn: 'The Public Key is shared openly so others can encrypt messages or verify signatures, while the Private Key is never shared.',
                  explanationPa: 'Private Key ਹਮੇਸ਼ਾ ਗੁਪਤ ਰੱਖੀ ਜਾਂਦੀ ਹੈ, ਜਦਕਿ Public Key ਸਭ ਨਾਲ ਸਾਂਝੀ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Backups',
                  promptEn: 'What does the "3-2-1 Backup Rule" recommend?',
                  promptPa: 'ਡਾਟਾ ਸੁਰੱਖਿਆ ਵਿੱਚ "3-2-1 Backup Rule" ਦਾ ਕੀ ਮਤਲਬ ਹੈ?',
                  optionsJson: [
                    '3 copies of data, on 2 different media types, with 1 copy offsite/offline',
                    'Delete 3 files every 2 hours on 1 computer',
                    'Use a 3-character password on 2 websites',
                    'Restart the router 3 times',
                  ],
                  correctAnswer:
                    '3 copies of data, on 2 different media types, with 1 copy offsite/offline',
                  explanationEn: 'The 3-2-1 strategy prevents single points of failure against drive crashes, theft, or ransomware.',
                  explanationPa: '3 ਕਾਪੀਆਂ, 2 ਵੱਖਰੇ ਸਾਧਨਾਂ ਉੱਤੇ ਅਤੇ 1 ਕਾਪੀ ਬਾਹਰੀ ਸੁਰੱਖਿਅਤ ਥਾਂ ਉੱਤੇ ਰੱਖਣਾ।',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'level-8-advanced-computer-concepts',
    levelNumber: 8,
    titleEn: 'Level 8: Advanced Processor Architecture, Pipelining, Cloud, AI & Semiconductors',
    titlePa: 'ਲੈਵਲ 8: ਐਡਵਾਂਸਡ ਕੰਪਿਊਟਰ ਸੰਕਲਪ (RISC/CISC, Pipelining, Cloud & AI)',
    descriptionEn:
      'ISA (Instruction Set Architecture), RISC vs CISC, Instruction Pipelining, Multicore Parallelism, TLB, System Buses, Interrupts, Embedded Systems, Cloud, AI, Amdahl’s Law, and Semiconductors.',
    descriptionPa:
      'ਐਡਵਾਂਸਡ CPU: RISC ਬਨਾਮ CISC, Instruction Pipelining, Multicore Parallelism, Buses, Interrupts, Embedded Systems, Cloud, AI ਅਤੇ Semiconductors।',
    category: 'core-cs',
    estimatedHours: 10,
    modules: [
      {
        orderIndex: 1,
        titleEn: 'Modern Microarchitecture, Parallelism & Silicon Engineering',
        titlePa: 'ਆਧੁਨਿਕ ਪ੍ਰੋਸੈਸਰ ਆਰਕੀਟੈਕਚਰ, ਪੈਰਲਲਿਜ਼ਮ ਅਤੇ ਸਿਲੀਕਾਨ ਤਕਨੀਕ',
        summaryEn: 'Master how modern Apple Silicon, ARM, and x86 processors achieve billions of instructions per second.',
        summaryPa: 'ਸਮਝੋ ਕਿ ਆਧੁਨਿਕ iPhone (ARM) ਅਤੇ ਸੁਪਰਕੰਪਿਊਟਰ ਪ੍ਰੋਸੈਸਰ ਇੱਕ ਸਕਿੰਟ ਵਿੱਚ ਅਰਬਾਂ ਹਦਾਇਤਾਂ ਕਿਵੇਂ ਚਲਾਉਂਦੇ ਹਨ।',
        lessons: [
          {
            slug: 'isa-risc-cisc-pipelining-multicore-buses',
            orderIndex: 1,
            titleEn: '8.1 ISA (RISC vs CISC), Instruction Pipelining, Multicore, Buses & Interrupts',
            titlePa: '8.1 RISC ਬਨਾਮ CISC, CPU Pipelining, ਮਲਟੀਕੋਰ, System Buses ਅਤੇ Interrupts',
            objectivesJson: [
              'Contrast RISC (ARM / Apple Silicon / RISC-V) and CISC (x86-64) Instruction Set Architectures (ISA)',
              'Explain CPU Instruction Pipelining and pipeline hazards',
              'Trace Address Bus, Data Bus, and Control Bus signals alongside Hardware/Software Interrupts',
              'Understand Virtual Memory Translation Lookaside Buffers (TLB) and Multicore cache coherence',
            ],
            prerequisitesJson: ['2.1 CPU Architecture (ALU, CU, Registers) & RAM vs Storage'],
            childAnalogyEn:
              '1. CPU Pipelining (ਕੱਪੜੇ ਧੋਣ ਦੀ ਲਾਈਨ — Laundry Analogy):\nSuppose you have 4 baskets of laundry and 4 stages: Wash (30m) -> Dry (30m) -> Iron (30m) -> Fold (30m).\n• Unpipelined: Wait 2 full hours for Basket 1 to finish all 4 steps before putting Basket 2 in the washer (takes 8 hours!).\n• Pipelined CPU: As soon as Basket 1 moves from Washer to Dryer, immediately put Basket 2 into the Washer! All 4 stages work simultaneously on different instructions!\n\n2. Hardware Interrupts (ਦਰਵਾਜ਼ੇ ਦੀ ਘੰਟੀ — Doorbell):\nInstead of the CPU walking to the front door every 2 seconds to check if a guest arrived (Polling), the CPU keeps working until your keyboard presses a button and rings the "Doorbell" (an Interrupt Request — IRQ)!',
            childAnalogyPa:
              '1. CPU Pipelining (ਲੰਗਰ ਦੀ ਪੰਗਤ ਜਾਂ ਕੱਪੜੇ ਧੋਣ ਦੀ ਉਦਾਹਰਣ):\nCPU ਵਿੱਚ ਹਦਾਇਤ ਦੇ 4 ਪੜਾਅ ਹੁੰਦੇ ਹਨ: Fetch -> Decode -> Execute -> Writeback।\nਪਹਿਲਾਂ CPU ਇੱਕ ਹਦਾਇਤ ਦੇ ਚਾਰੇ ਪੜਾਅ ਪੂਰੇ ਹੋਣ ਦੀ ਉਡੀਕ ਕਰਦਾ ਸੀ। ਪਰ Pipelining ਵਿੱਚ ਜਿਵੇਂ ਹੀ ਪਹਿਲੀ ਹਦਾਇਤ Decode ਵਿੱਚ ਜਾਂਦੀ ਹੈ, ਉਸੇ ਵੇਲੇ ਦੂਜੀ ਹਦਾਇਤ Fetch ਹੋ ਜਾਂਦੀ ਹੈ! ਇਸ ਨਾਲ CPU ਦੀ ਰਫ਼ਤਾਰ ਕਈ ਗੁਣਾ ਵਧ ਜਾਂਦੀ ਹੈ।\n\n2. Interrupt (ਦਰਵਾਜ਼ੇ ਦੀ ਘੰਟੀ):\nCPU ਵਾਰ-ਵਾਰ ਕੀਬੋਰਡ ਨੂੰ ਨਹੀਂ ਪੁੱਛਦਾ ਕਿ ਕੋਈ ਬਟਨ ਦੱਬਿਆ ਗਿਆ ਹੈ ਜਾਂ ਨਹੀਂ। ਜਦੋਂ ਤੁਸੀਂ ਕੀਬੋਰਡ ਦਾ ਬਟਨ ਦੱਬਦੇ ਹੋ, ਤਾਂ ਕੀਬੋਰਡ CPU ਨੂੰ ਇੱਕ ਸਿਗਨਲ ਭੇਜਦਾ ਹੈ ਜਿਸਨੂੰ Hardware Interrupt ਕਹਿੰਦੇ ਹਨ!',
            technicalExplanationEn:
              '1. ISA: RISC vs CISC:\n• RISC (Reduced Instruction Set Computer — ARM64, RISC-V): Fixed-width instructions, load/store architecture, large register file, ideal for deep pipelining and mobile power efficiency.\n• CISC (Complex Instruction Set Computer — x86-64): Variable-length instructions capable of direct memory-to-register arithmetic.\n\n2. System Buses & Interrupts:\n• Address Bus (unidirectional: specifies memory location), Data Bus (bidirectional: carries payload), Control Bus (Read/Write/Clock/IRQ lines).\n• TLB (Translation Lookaside Buffer): Hardware cache inside the MMU storing recent virtual-to-physical page translations.',
            technicalExplanationPa:
              '1. RISC ਬਨਾਮ CISC: ਤੁਹਾਡੇ iPhone 15 Pro ਵਿੱਚ A17 Pro (ARM RISC) ਚਿੱਪ ਲੱਗੀ ਹੈ ਜੋ ਛੋਟੀਆਂ ਅਤੇ ਇੱਕੋ ਆਕਾਰ ਦੀਆਂ ਹਦਾਇਤਾਂ ਵਰਤਦੀ ਹੈ, ਜਿਸ ਨਾਲ ਬੈਟਰੀ ਘੱਟ ਖਰਚ ਹੁੰਦੀ ਹੈ।\n2. Computer Buses: Motherboard ਉੱਤੇ 3 ਮੁੱਖ ਰਸਤੇ ਹੁੰਦੇ ਹਨ — Address Bus (ਪਤਾ ਦੱਸਣ ਲਈ), Data Bus (ਡਾਟਾ ਲਿਜਾਣ ਲਈ) ਅਤੇ Control Bus (ਹੁਕਮ ਦੇਣ ਲਈ)।',
            practicalExampleEn:
              'Apple’s M-series and A17 Pro chips use wide superscalar RISC pipelines on 3-nanometer silicon, executing multiple instructions per clock cycle while running cool without a fan in an iPhone.',
            practicalExamplePa:
              'iPhone ਦਾ ਪ੍ਰੋਸੈਸਰ RISC ਅਤੇ Pipelining ਤਕਨੀਕ ਕਾਰਨ ਬਿਨਾਂ ਪੱਖੇ ਤੋਂ ਵੀ ਲੈਪਟਾਪ ਜਿੰਨੀ ਤੇਜ਼ ਰਫ਼ਤਾਰ ਦਿੰਦਾ ਹੈ।',
            codeDemo: `; Pipelined Execution Timeline (4 Instructions Overlapped)
; Cycle 1: [Instr 1: FETCH ]
; Cycle 2: [Instr 2: FETCH ] -> [Instr 1: DECODE ]
; Cycle 3: [Instr 3: FETCH ] -> [Instr 2: DECODE ] -> [Instr 1: EXECUTE  ]
; Cycle 4: [Instr 4: FETCH ] -> [Instr 3: DECODE ] -> [Instr 2: EXECUTE  ] -> [Instr 1: WRITEBACK]`,
            misconceptionsJson: [
              {
                myth: 'A 4 GHz CPU is always faster than a 3.5 GHz CPU.',
                truthEn: 'Total CPU performance equals `Clock Rate × IPC (Instructions Per Cycle)`. A wider pipelined architecture at 3.5 GHz with higher IPC easily outperforms a narrower 4 GHz chip.',
                truthPa: 'ਸਿਰਫ਼ GHz ਦੇਖ ਕੇ CPU ਦੀ ਸਪੀਡ ਨਹੀਂ ਮਾਪੀ ਜਾਂਦੀ; ਇੱਕ ਚੱਕਰ ਵਿੱਚ ਕਿੰਨੀਆਂ ਹਦਾਇਤਾਂ (IPC) ਚੱਲਦੀਆਂ ਹਨ, ਉਹ ਵੀ ਓਨਾ ਹੀ ਜ਼ਰੂਰੀ ਹੈ।',
              },
            ],
            terminologyJson: [
              {
                term: 'Instruction Pipelining',
                punjabi: 'ਇੰਸਟ੍ਰਕਸ਼ਨ ਪਾਈਪਲਾਈਨਿੰਗ',
                meaningEn: 'Overlapping the Fetch, Decode, Execute, and Writeback stages of multiple instructions simultaneously.',
                meaningPa: 'ਇੱਕੋ ਸਮੇਂ ਕਈ ਹਦਾਇਤਾਂ ਦੇ ਵੱਖ-ਵੱਖ ਪੜਾਵਾਂ ਨੂੰ ਲੜੀਵਾਰ ਇਕੱਠੇ ਚਲਾਉਣ ਦੀ ਤਕਨੀਕ।',
              },
              {
                term: 'RISC vs CISC',
                punjabi: 'ਰਿਸਕ ਬਨਾਮ ਸਿਸਕ',
                meaningEn: 'Reduced Instruction Set Computer (simple fixed-length ops) vs Complex Instruction Set Computer (multi-step ops).',
                meaningPa: 'RISC ਸਧਾਰਨ ਅਤੇ ਤੇਜ਼ ਹਦਾਇਤਾਂ ਵਰਤਦਾ ਹੈ (ਜਿਵੇਂ ARM), ਜਦਕਿ CISC ਗੁੰਝਲਦਾਰ ਹਦਾਇਤਾਂ ਵਰਤਦਾ ਹੈ (ਜਿਵੇਂ x86)।',
              },
              {
                term: 'Hardware Interrupt (IRQ)',
                punjabi: 'ਹਾਰਡਵੇਅਰ ਇੰਟਰੱਪਟ',
                meaningEn: 'Asynchronous signal from a device (like a keyboard or network card) alerting the CPU that immediate attention is needed.',
                meaningPa: 'ਬਾਹਰੀ ਡਿਵਾਈਸ ਵੱਲੋਂ CPU ਦਾ ਧਿਆਨ ਖਿੱਚਣ ਲਈ ਭੇਜਿਆ ਗਿਆ ਤੁਰੰਤ ਸਿਗਨਲ।',
              },
            ],
            interactiveLabId: 'cpu-cycle',
            exercisePromptEn:
              'Run the CPU Instruction Cycle Lab in Auto-Play mode to observe the 4-stage pipeline progression.',
            exercisePromptPa:
              'CPU Cycle Lab ਨੂੰ Auto-Play ਉੱਤੇ ਚਲਾਓ ਅਤੇ ਚਾਰੇ ਸਟੇਜਾਂ (Fetch, Decode, Execute, Writeback) ਦਾ ਤਾਲਮੇਲ ਦੇਖੋ।',
            summaryEn:
              'RISC architectures streamline instruction decoding, pipelining overlaps execution stages, buses transport addresses and data, and interrupts enable responsive I/O.',
            summaryPa:
              'RISC ਅਤੇ Pipelining ਪ੍ਰੋਸੈਸਰ ਦੀ ਸਮਰੱਥਾ ਵਧਾਉਂਦੇ ਹਨ, Buses ਡਾਟਾ ਲਿਜਾਂਦੀਆਂ ਹਨ ਅਤੇ Interrupts ਤੇਜ਼ ਜਵਾਬ ਦਿੰਦੇ ਹਨ।',
            furtherReadingJson: [
              'Hennessy & Patterson — Computer Architecture: A Quantitative Approach',
            ],
            quiz: {
              titleEn: 'Level 8.1 Assessment: RISC/CISC, Pipelining & Interrupts',
              titlePa: 'ਲੈਵਲ 8.1 ਟੈਸਟ: RISC/CISC, ਪਾਈਪਲਾਈਨਿੰਗ ਅਤੇ ਇੰਟਰੱਪਟ',
              timeLimitSeconds: 240,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'Advanced CPU',
                  promptEn: 'Why do smartphones like the iPhone use ARM (RISC) processor architecture?',
                  promptPa: 'iPhone ਵਰਗੇ ਸਮਾਰਟਫ਼ੋਨਾਂ ਵਿੱਚ ARM (RISC) ਪ੍ਰੋਸੈਸਰ ਕਿਉਂ ਵਰਤੇ ਜਾਂਦੇ ਹਨ?',
                  optionsJson: [
                    'Simple fixed-length instructions enable high energy efficiency and low heat',
                    'They use vacuum tubes instead of silicon',
                    'They do not need RAM to operate',
                    'They only work when plugged into a wall socket',
                  ],
                  correctAnswer:
                    'Simple fixed-length instructions enable high energy efficiency and low heat',
                  explanationEn: 'RISC processors use streamlined instruction sets that pipeline efficiently while consuming minimal battery power.',
                  explanationPa: 'RISC ਪ੍ਰੋਸੈਸਰ ਸਧਾਰਨ ਅਤੇ ਤੇਜ਼ ਹਦਾਇਤਾਂ ਵਰਤਦੇ ਹਨ ਜਿਸ ਨਾਲ ਬੈਟਰੀ ਬਹੁਤ ਘੱਟ ਖਰਚ ਹੁੰਦੀ ਹੈ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'System Buses',
                  promptEn: 'Which system bus carries the memory location (where data should be read from or written to) from the CPU to RAM?',
                  promptPa: 'ਕਿਹੜੀ Bus CPU ਤੋਂ RAM ਤੱਕ ਮੈਮੋਰੀ ਦਾ ਪਤਾ (Address) ਲੈ ਕੇ ਜਾਂਦੀ ਹੈ?',
                  optionsJson: ['Address Bus', 'Power Supply Fan', 'Audio Jack', 'HDMI Cable'],
                  correctAnswer: 'Address Bus',
                  explanationEn: 'The Address Bus is a unidirectional bus used by the CPU to specify the target physical memory address.',
                  explanationPa: 'Address Bus ਮੈਮੋਰੀ ਦੇ ਸਹੀ ਪਤੇ ਦੀ ਚੋਣ ਕਰਨ ਦਾ ਕੰਮ ਕਰਦੀ ਹੈ।',
                },
              ],
            },
          },
          {
            slug: 'embedded-microcontrollers-cloud-ai-amdahl-semiconductors',
            orderIndex: 2,
            titleEn: '8.2 Embedded Systems, Microcontrollers, Cloud, AI, Amdahl’s Law & Semiconductors',
            titlePa: '8.2 Embedded Systems, ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ, Cloud, AI, Amdahl’s Law ਅਤੇ Semiconductors',
            objectivesJson: [
              'Distinguish Embedded Systems and Microcontrollers (Arduino/ESP32) from general-purpose computers',
              'Understand Cloud Computing models (IaaS, PaaS, SaaS) and AI Neural Network hardware acceleration',
              'Apply Amdahl’s Law to calculate maximum parallel speedup limits',
              'Explain Semiconductor silicon doping (N-type/P-type), MOSFET transistors, and nanometer EUV lithography',
            ],
            prerequisitesJson: ['8.1 ISA (RISC vs CISC), Instruction Pipelining, Multicore, Buses & Interrupts'],
            childAnalogyEn:
              '1. Amdahl’s Law (ਰੋਟੀ ਪਕਾਉਣ ਵਿੱਚ ਸਾਂਝਾ ਕੰਮ):\nSuppose 10 cooks chop vegetables together in 1 minute (Parallel work), BUT there is only 1 Tandoor oven that takes 10 minutes to bake the bread (Serial bottleneck). Even if you hire 1,000 cooks to chop vegetables in 0.01 seconds, dinner STILL takes at least 10 minutes because of the single Tandoor! That is Amdahl’s Law—a program can never be faster than its non-parallelizable sequential part!\n\n2. Embedded Microcontroller (ਵਾਸ਼ਿੰਗ ਮਸ਼ੀਨ ਦਾ ਛੋਟਾ ਦਿਮਾਗ):\nYour laptop can run 100 different apps. The tiny chip inside a Microwave Oven or Car Airbag (an Embedded Microcontroller) has CPU + small RAM + Flash on a single ₹100 chip dedicated to doing ONE job reliably for 15 years!',
            childAnalogyPa:
              '1. Amdahl’s Law (ਪੈਰਲਲ ਕੰਮ ਦੀ ਸੀਮਾ):\nਮੰਨ ਲਓ ਘਰ ਬਣਾਉਣ ਵਿੱਚ 100 ਮਜ਼ਦੂਰ ਇੱਟਾਂ ਤਾਂ 1 ਘੰਟੇ ਵਿੱਚ ਲਗਾ ਦਿੰਦੇ ਹਨ, ਪਰ ਸੀਮਿੰਟ ਸੁੱਕਣ ਨੂੰ 24 ਘੰਟੇ ਲੱਗਣੇ ਹੀ ਹਨ! ਭਾਵੇਂ ਤੁਸੀਂ 10,000 ਮਜ਼ਦੂਰ ਲਗਾ ਲਓ, ਸੀਮਿੰਟ 1 ਮਿੰਟ ਵਿੱਚ ਨਹੀਂ ਸੁੱਕ ਸਕਦਾ। ਇਸੇ ਨੂੰ Amdahl’s Law ਕਹਿੰਦੇ ਹਨ — ਕਿਸੇ ਪ੍ਰੋਗਰਾਮ ਦੀ ਰਫ਼ਤਾਰ ਉਸ ਹਿੱਸੇ ਤੋਂ ਤੇਜ਼ ਨਹੀਂ ਹੋ ਸਕਦੀ ਜੋ ਸਿਰਫ਼ ਲੜੀਵਾਰ (Sequential) ਹੀ ਚੱਲ ਸਕਦਾ ਹੈ!\n\n2. Semiconductor (ਰੇਤ ਤੋਂ ਕੰਪਿਊਟਰ ਚਿੱਪ ਤੱਕ):\nਰੇਤ ਵਿੱਚੋਂ Silicon ਕੱਢ ਕੇ ਉਸਨੂੰ ਸ਼ੁੱਧ ਕੀਤਾ ਜਾਂਦਾ ਹੈ (Semiconductor — ਜੋ ਨਾ ਪੂਰਾ ਕਰੰਟ ਰੋਕਦਾ ਹੈ ਤੇ ਨਾ ਪੂਰਾ ਲੰਘਣ ਦਿੰਦਾ ਹੈ, ਸਗੋਂ ਬਟਨ ਵਾਂਗ ਕੰਟਰੋਲ ਹੁੰਦਾ ਹੈ)। ਇੱਕ ਨਹੁੰ ਜਿੰਨੀ ਚਿੱਪ ਉੱਤੇ ਅਰਬਾਂ MOSFET ਟ੍ਰਾਂਜ਼ਿਸਟਰ ਉੱਕਰੇ ਜਾਂਦੇ ਹਨ!',
            technicalExplanationEn:
              '1. Embedded Systems & Microcontrollers (MCUs):\nAn MCU integrates CPU core, SRAM, Flash ROM, and GPIO/ADC pins on a single chip for real-time control (automotive ECUs, IoT sensors, medical pacemakers).\n\n2. Cloud Computing & AI Fundamentals:\n• Cloud: On-demand elastic compute/storage (IaaS, PaaS, SaaS).\n• AI / Machine Learning: Neural networks compute weighted matrix dot products (`Y = W·X + B`) trained via gradient descent on GPUs/TPUs.\n\n3. Amdahl’s Law & Semiconductors:\n• Amdahl’s Speedup Formula: `S = 1 / ((1 - P) + (P / N))`, where `P` is the parallel fraction and `N` is core count.\n• Semiconductors: Silicon doped with Phosphorus (N-type) and Boron (P-type) forms CMOS logic gates etched via Extreme Ultraviolet (EUV) photolithography at 3nm scale.',
            technicalExplanationPa:
              '1. Microcontroller: ਇੱਕੋ ਛੋਟੀ ਚਿੱਪ ਉੱਤੇ CPU, RAM ਅਤੇ ROM ਜੋ ਵਾਸ਼ਿੰਗ ਮਸ਼ੀਨ, ਕਾਰ ਦੇ ਇੰਜਣ ਅਤੇ ਰੋਬੋਟਾਂ ਨੂੰ ਚਲਾਉਂਦੀ ਹੈ।\n2. Cloud Computing: ਆਪਣੇ ਘਰ ਸਰਵਰ ਰੱਖਣ ਦੀ ਬਜਾਏ ਇੰਟਰਨੈੱਟ ਰਾਹੀਂ ਵੱਡੇ ਡਾਟਾ ਸੈਂਟਰਾਂ ਦੇ ਕੰਪਿਊਟਰ ਅਤੇ ਡਾਟਾਬੇਸ ਵਰਤਣਾ।\n3. Semiconductors: ਸਿਲੀਕਾਨ ਤੋਂ ਬਣੇ CMOS ਟ੍ਰਾਂਜ਼ਿਸਟਰ ਜੋ 3-nanometer (ਵਾਲ਼ ਤੋਂ ਹਜ਼ਾਰਾਂ ਗੁਣਾ ਬਾਰੀਕ) ਆਕਾਰ ਵਿੱਚ ਬਣਾਏ ਜਾਂਦੇ ਹਨ।',
            practicalExampleEn:
              'If 50% of a program is strictly sequential (`1 - P = 0.5`), Amdahl’s Law proves that even with an infinite number of CPU cores (`N -> ∞`), the maximum possible speedup is `1 / 0.5 = 2x`!',
            practicalExamplePa:
              'ਜੇਕਰ ਕਿਸੇ ਪ੍ਰੋਗਰਾਮ ਦਾ ਅੱਧਾ ਹਿੱਸਾ (50%) ਇੱਕੋ ਲਾਈਨ ਵਿੱਚ ਹੀ ਚੱਲ ਸਕਦਾ ਹੈ, ਤਾਂ Amdahl’s Law ਅਨੁਸਾਰ ਭਾਵੇਂ ਤੁਸੀਂ 1000 ਕੋਰ ਲਗਾ ਲਓ, ਸਪੀਡ ਵੱਧ ਤੋਂ ਵੱਧ 2 ਗੁਣਾ ਹੀ ਵਧ ਸਕਦੀ ਹੈ!',
            codeDemo: `// Amdahl's Law Parallel Speedup Calculator
function calculateAmdahlSpeedup(parallelFractionP: number, numCoresN: number): number {
  const sequentialFraction = 1 - parallelFractionP;
  const speedup = 1 / (sequentialFraction + parallelFractionP / numCoresN);
  return Number(speedup.toFixed(2));
}
// If 80% is parallelizable (P=0.8) across 8 cores => 3.33x speedup`,
            misconceptionsJson: [
              {
                myth: 'An 8-core CPU makes every single program run 8 times faster.',
                truthEn: 'By Amdahl’s Law, only workloads that are split into independent parallel threads benefit from extra cores; sequential code still runs on a single core.',
                truthPa: '8 ਕੋਰ ਹੋਣ ਦਾ ਮਤਲਬ ਇਹ ਨਹੀਂ ਕਿ ਹਰ ਐਪ 8 ਗੁਣਾ ਤੇਜ਼ ਚੱਲੇਗੀ; ਇਹ ਇਸ ਗੱਲ ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ ਕਿ ਪ੍ਰੋਗਰਾਮ ਦਾ ਕਿੰਨਾ ਹਿੱਸਾ ਵੰਡਿਆ (Parallel) ਜਾ ਸਕਦਾ ਹੈ।',
              },
            ],
            terminologyJson: [
              {
                term: 'Amdahl’s Law',
                punjabi: 'ਐਮਡਾਲ ਦਾ ਨਿਯਮ',
                meaningEn: 'Formula stating that the speedup of a parallel program is limited by its sequential (non-parallelizable) fraction.',
                meaningPa: 'ਉਹ ਨਿਯਮ ਜੋ ਦੱਸਦਾ ਹੈ ਕਿ ਮਲਟੀਕੋਰ ਪ੍ਰੋਸੈਸਰ ਦੀ ਵੱਧ ਤੋਂ ਵੱਧ ਰਫ਼ਤਾਰ ਪ੍ਰੋਗਰਾਮ ਦੇ ਲੜੀਵਾਰ (Sequential) ਹਿੱਸੇ ਦੁਆਰਾ ਸੀਮਤ ਹੁੰਦੀ ਹੈ।',
              },
              {
                term: 'Microcontroller (MCU)',
                punjabi: 'ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ',
                meaningEn: 'Compact integrated circuit containing a processor core, memory, and programmable I/O peripherals for embedded systems.',
                meaningPa: 'ਇੱਕੋ ਚਿੱਪ ਉੱਤੇ ਬਣਿਆ ਛੋਟਾ ਕੰਪਿਊਟਰ ਜੋ ਘਰੇਲੂ ਮਸ਼ੀਨਾਂ, ਗੱਡੀਆਂ ਅਤੇ ਸੈਂਸਰਾਂ ਨੂੰ ਕੰਟਰੋਲ ਕਰਦਾ ਹੈ।',
              },
              {
                term: 'Semiconductor (Silicon)',
                punjabi: 'ਸੈਮੀਕੰਡਕਟਰ (ਅਰਧ-ਚਾਲਕ)',
                meaningEn: 'Crystalline material (like doped Silicon) whose electrical conductivity can be switched between insulator (0) and conductor (1).',
                meaningPa: 'ਸਿਲੀਕਾਨ ਵਰਗਾ ਪਦਾਰਥ ਜਿਸ ਵਿੱਚੋਂ ਬਿਜਲੀ ਦੇ ਵਹਾਅ ਨੂੰ ਸਵਿੱਚ ਵਾਂਗ ਆਨ (1) ਜਾਂ ਆਫ (0) ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।',
              },
            ],
            interactiveLabId: 'hardware-explorer',
            exercisePromptEn:
              'Compare CPU vs GPU parallel architectures in the Hardware Explorer Lab and test how parallel cores impact throughput.',
            exercisePromptPa:
              'Hardware Explorer Lab ਵਿੱਚ CPU ਅਤੇ GPU ਦੀ ਤੁਲਨਾ ਕਰੋ ਅਤੇ ਦੇਖੋ ਕਿ ਪੈਰਲਲ ਕੋਰ ਕਿਵੇਂ ਕੰਮ ਵੰਡਦੇ ਹਨ।',
            summaryEn:
              'Embedded microcontrollers power physical devices, Cloud and AI scale modern software, Amdahl’s Law bounds parallel speedup, and silicon semiconductors make digital logic physically possible.',
            summaryPa:
              'ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਮਸ਼ੀਨਾਂ ਚਲਾਉਂਦੇ ਹਨ, Cloud ਤੇ AI ਆਧੁਨਿਕ ਸੌਫਟਵੇਅਰ ਚਲਾਉਂਦੇ ਹਨ ਅਤੇ ਸਿਲੀਕਾਨ ਸੈਮੀਕੰਡਕਟਰ ਹਰ ਚਿੱਪ ਦੀ ਬੁਨਿਆਦ ਹਨ।',
            furtherReadingJson: [
              'Gene M. Amdahl (1967) — Validity of the Single Processor Approach to Achieving Large Scale Computing Capabilities',
            ],
            quiz: {
              titleEn: 'Level 8.2 Assessment: Embedded Systems, Amdahl’s Law & Semiconductors',
              titlePa: 'ਲੈਵਲ 8.2 ਟੈਸਟ: ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ, Amdahl’s Law ਅਤੇ ਸੈਮੀਕੰਡਕਟਰ',
              timeLimitSeconds: 240,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'Amdahl’s Law',
                  promptEn: 'According to Amdahl’s Law, what limits the maximum speedup of a program running on a multicore processor?',
                  promptPa: 'Amdahl’s Law ਅਨੁਸਾਰ ਮਲਟੀਕੋਰ ਪ੍ਰੋਸੈਸਰ ਉੱਤੇ ਕਿਸੇ ਪ੍ਰੋਗਰਾਮ ਦੀ ਵੱਧ ਤੋਂ ਵੱਧ ਰਫ਼ਤਾਰ ਨੂੰ ਕੌਣ ਸੀਮਤ ਕਰਦਾ ਹੈ?',
                  optionsJson: [
                    'The sequential (non-parallelizable) portion of the program',
                    'The color of the computer case',
                    'The size of the mouse pad',
                    'The keyboard font style',
                  ],
                  correctAnswer: 'The sequential (non-parallelizable) portion of the program',
                  explanationEn: 'Amdahl’s Law demonstrates that the fraction of work that must be executed sequentially caps total parallel speedup.',
                  explanationPa: 'ਪ੍ਰੋਗਰਾਮ ਦਾ ਉਹ ਹਿੱਸਾ ਜਿਸਨੂੰ ਵੰਡਿਆ ਨਹੀਂ ਜਾ ਸਕਦਾ (Sequential ਹਿੱਸਾ) ਕੁੱਲ ਰਫ਼ਤਾਰ ਦੀ ਸੀਮਾ ਤੈਅ ਕਰਦਾ ਹੈ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Semiconductors',
                  promptEn: 'Which chemical element is the primary semiconductor material used to manufacture modern computer microchips and transistors?',
                  promptPa: 'ਆਧੁਨਿਕ ਕੰਪਿਊਟਰ ਚਿੱਪਾਂ ਅਤੇ ਟ੍ਰਾਂਜ਼ਿਸਟਰ ਬਣਾਉਣ ਲਈ ਮੁੱਖ ਤੌਰ ਤੇ ਕਿਹੜਾ Semiconductor ਤੱਤ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
                  optionsJson: ['Silicon (Si)', 'Wood', 'Rubber', 'Paper'],
                  correctAnswer: 'Silicon (Si)',
                  explanationEn: 'Doped crystalline Silicon forms the semiconductor wafers on which billions of CMOS transistors are fabricated.',
                  explanationPa: 'Silicon (ਸਿਲੀਕਾਨ) ਤੋਂ ਹੀ ਦੁਨੀਆ ਦੀਆਂ ਲਗਭਗ ਸਾਰੀਆਂ ਕੰਪਿਊਟਰ ਚਿੱਪਾਂ ਬਣਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ।',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'level-9-math-for-computer-science',
    levelNumber: 9,
    titleEn: 'Level 9: Mathematics for Computer Science (Logic, Discrete Math & Statistics)',
    titlePa: 'ਲੈਵਲ 9: ਕੰਪਿਊਟਰ ਸਾਇੰਸ ਲਈ ਗਣਿਤ (Logic, Discrete Math & Statistics)',
    descriptionEn:
      'Propositional Logic, Truth Tables, Sets, Graph Theory, Combinatorics, Probability & Statistics explained with child-friendly practical illustrations.',
    descriptionPa:
      'ਕੰਪਿਊਟਰ ਸਾਇੰਸ ਦਾ ਗਣਿਤ: Propositional Logic, Discrete Mathematics (Sets, Graphs) ਅਤੇ Statistics — ਬੱਚਿਆਂ ਵਾਂਗ ਸੌਖੀਆਂ ਉਦਾਹਰਣਾਂ ਨਾਲ।',
    category: 'cs-math',
    estimatedHours: 12,
    modules: [
      {
        orderIndex: 1,
        titleEn: 'Propositional Logic, Discrete Structures & Probability',
        titlePa: 'ਤਰਕ ਸ਼ਾਸਤਰ (Logic), ਡਿਸਕ੍ਰੀਟ ਮੈਥ ਅਤੇ ਸੰਭਾਵਨਾ (Probability)',
        summaryEn: 'Master the mathematical backbone of programming, databases, routing algorithms, and machine learning.',
        summaryPa: 'ਪ੍ਰੋਗਰਾਮਿੰਗ, ਡਾਟਾਬੇਸ ਅਤੇ AI ਦੇ ਪਿੱਛੇ ਕੰਮ ਕਰਨ ਵਾਲੇ ਗਣਿਤ ਨੂੰ ਬਿਲਕੁਲ ਮੁੱਢ ਤੋਂ ਸਮਝੋ।',
        lessons: [
          {
            slug: 'cs-math-logic-discrete-statistics',
            orderIndex: 1,
            titleEn: '9.1 Propositional Logic, Discrete Math (Sets & Graphs) & Statistics',
            titlePa: '9.1 ਕੰਪਿਊਟਰ ਗਣਿਤ: Logic, Discrete Math (Sets & Graphs) ਅਤੇ Statistics',
            objectivesJson: [
              'Evaluate Propositional Logic statements (Implication P -> Q, De Morgan’s Laws) used in code `if/else` conditions',
              'Apply Set Theory (Union, Intersection, Difference) directly to Database SQL queries',
              'Understand Graph Theory (Vertices & Edges) used in Google Maps shortest-path routing',
              'Calculate Expected Value, Mean, Median, and Conditional Probability for data analysis and AI',
            ],
            prerequisitesJson: ['3.1 How Binary (0 & 1), Number Conversions & Logic Gates Work'],
            childAnalogyEn:
              'Why do we need Math in Computer Science? Let’s look at 3 everyday stories:\n\n1. Propositional Logic (ਮਾਂ ਦਾ ਵਾਅਦਾ — If/Then Promise):\nYour mother says: "IF you finish your homework (P), THEN I will give you Kheer (Q)" (`P → Q`).\nWhen did she break her promise? ONLY if you finished your homework (P = True) AND she did NOT give you Kheer (Q = False)! In all other cases, her promise stands true!\n\n2. Discrete Math — Graph Theory (ਪਿੰਡਾਂ ਦੇ ਰਸਤੇ):\nDraw dots for 5 villages (Vertices/Nodes) and draw lines for roads connecting them with kilometer numbers (Weighted Edges). Finding the fastest road from Amritsar to Ludhiana is Graph Theory (Dijkstra’s Algorithm)!\n\n3. Statistics & Probability (ਕ੍ਰਿਕਟ ਮੈਚ ਅਤੇ ਮੀਂਹ ਦਾ ਅੰਦਾਜ਼ਾ):\nIf a batsman scores [10, 20, 30, 40, 200], the Average (Mean) is 60, but the middle score (Median) is 30—showing he usually scores around 30 with one huge century! Spam filters use Probability (Bayes’ Rule) to ask: "Given this email contains the word FREE LOTTERY, what is the chance it is spam?"',
            childAnalogyPa:
              'ਕੰਪਿਊਟਰ ਸਾਇੰਸ ਵਿੱਚ ਗਣਿਤ ਕਿਉਂ ਜ਼ਰੂਰੀ ਹੈ? ਆਓ 3 ਬਿਲਕੁਲ ਸੌਖੀਆਂ ਘਰੇਲੂ ਉਦਾਹਰਣਾਂ ਨਾਲ ਸਮਝੀਏ:\n\n1. Logic (ਤਰਕ — ਮਾਂ ਦਾ ਵਾਅਦਾ `If P Then Q`):\nਮੰਨ ਲਓ ਮੰਮੀ ਨੇ ਕਿਹਾ: "ਜੇਕਰ (IF) ਤੂੰ ਹੋਮਵਰਕ ਪੂਰਾ ਕਰੇਂਗਾ (P), ਤਾਂ (THEN) ਮੈਂ ਤੈਨੂੰ ਖੀਰ ਦੇਵਾਂਗੀ (Q)!"\nਸੋਚੋ ਮੰਮੀ ਦਾ ਵਾਅਦਾ ਕਦੋਂ ਟੁੱਟਿਆ ਮੰਨਿਆ ਜਾਵੇਗਾ? ਸਿਰਫ਼ ਉਦੋਂ ਜਦੋਂ ਤੁਸੀਂ ਹੋਮਵਰਕ ਪੂਰਾ ਕੀਤਾ (P = True) ਪਰ ਖੀਰ ਨਹੀਂ ਮਿਲੀ (Q = False)! ਇਹੀ ਨਿਯਮ ਪ੍ਰੋਗਰਾਮਿੰਗ ਦੀਆਂ ਸਾਰੀਆਂ `if-else` ਸ਼ਰਤਾਂ ਚਲਾਉਂਦਾ ਹੈ!\n\n2. Discrete Math — Sets ਅਤੇ Graph Theory (ਪਿੰਡਾਂ ਦਾ ਨਕਸ਼ਾ):\n• Sets (ਸਮੂਹ): ਮੰਨ ਲਓ ਟੋਕਰੀ A ਵਿੱਚ {ਸੇਬ, ਅੰਬ} ਹਨ ਅਤੇ ਟੋਕਰੀ B ਵਿੱਚ {ਅੰਬ, ਕੇਲਾ} ਹਨ। ਦੋਵਾਂ ਵਿੱਚ ਸਾਂਝਾ ਫਲ ਕਿਹੜਾ ਹੈ? {ਅੰਬ} — ਇਸਨੂੰ Intersection (A ∩ B) ਕਹਿੰਦੇ ਹਨ! ਡਾਟਾਬੇਸ (SQL) ਬਿਲਕੁਲ ਇਸੇ ਤਰ੍ਹਾਂ ਕੰਮ ਕਰਦਾ ਹੈ।\n• Graphs: ਨਕਸ਼ੇ ਉੱਤੇ ਸ਼ਹਿਰਾਂ ਨੂੰ ਬਿੰਦੂ (Nodes/Vertices) ਅਤੇ ਸੜਕਾਂ ਨੂੰ ਲਾਈਨਾਂ (Edges) ਮੰਨ ਲਓ। Google Maps ਸਭ ਤੋਂ ਛੋਟਾ ਰਸਤਾ ਲੱਭਣ ਲਈ ਇਹੀ Graph Theory ਵਰਤਦਾ ਹੈ!\n\n3. Statistics & Probability (ਅੰਕੜਾ ਵਿਗਿਆਨ ਅਤੇ ਸੰਭਾਵਨਾ):\nਜਦੋਂ ਅਸੀਂ ਸਿੱਕਾ ਉਛਾਲਦੇ ਹਾਂ ਤਾਂ Head ਆਉਣ ਦੀ ਸੰਭਾਵਨਾ (Probability) 1/2 (50%) ਹੁੰਦੀ ਹੈ। ਤੁਹਾਡੇ ਫ਼ੋਨ ਦਾ Keyboard ਅਗਲਾ ਸ਼ਬਦ ਸੁਝਾਉਣ ਲਈ ਅਤੇ Spam Filter ਫਰਜ਼ੀ ਈਮੇਲ ਫੜਨ ਲਈ ਇਹੀ Probability ਵਰਤਦਾ ਹੈ!',
            technicalExplanationEn:
              '1. Propositional Logic & De Morgan’s Laws:\n• Negating a conjunction: `!(A && B)` is logically equivalent to `!A || !B`.\n• Negating a disjunction: `!(A || B)` is logically equivalent to `!A && !B`.\n\n2. Discrete Mathematics:\n• Sets: Union (`A ∪ B`), Intersection (`A ∩ B`), Difference (`A \\ B`).\n• Combinatorics: With `n` binary bits, there are `2ⁿ` distinct states.\n• Graph `G = (V, E)`: A set of vertices `V` connected by edges `E`.\n\n3. Probability & Descriptive Statistics:\n• Mean (`μ`): Sum of values divided by count `N`.\n• Median: Middle value of a sorted dataset (resistant to outliers).\n• Conditional Probability (Bayes’ Theorem): `P(A|B) = [P(B|A) · P(A)] / P(B)`.',
            technicalExplanationPa:
              '1. De Morgan’s Laws (ਪ੍ਰੋਗਰਾਮਿੰਗ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਵਰਤਿਆ ਜਾਣ ਵਾਲਾ ਨਿਯਮ):\n• `!(A && B)` ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ `!A || !B` ਦੇ।\n• `!(A || B)` ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ `!A && !B` ਦੇ।\n\n2. Discrete Math:\n"Discrete" ਦਾ ਮਤਲਬ ਹੈ ਵੱਖ-ਵੱਖ ਗਿਣਨਯੋਗ ਚੀਜ਼ਾਂ (ਜਿਵੇਂ 0, 1, 2, 3...) ਕਿਉਂਕਿ ਕੰਪਿਊਟਰ ਵਿੱਚ ਹਰ ਚੀਜ਼ ਬਿੱਟਾਂ ਵਿੱਚ ਗਿਣੀ ਜਾਂਦੀ ਹੈ।\n• ਜੇ ਸਾਡੇ ਕੋਲ `n` ਬਿੱਟ ਹਨ, ਤਾਂ ਕੁੱਲ `2ⁿ` ਪੈਟਰਨ ਬਣ ਸਕਦੇ ਹਨ (ਜਿਵੇਂ 3 ਬਿੱਟ = 2³ = 8 ਪੈਟਰਨ)।\n\n3. Statistics (Mean vs Median):\n• Mean (ਔਸਤ): ਸਾਰੇ ਨੰਬਰਾਂ ਦਾ ਜੋੜ ÷ ਕੁੱਲ ਗਿਣਤੀ।\n• Median (ਮੱਧਮਾਨ): ਨੰਬਰਾਂ ਨੂੰ ਛੋਟੇ ਤੋਂ ਵੱਡੇ ਕ੍ਰਮ ਵਿੱਚ ਲਗਾ ਕੇ ਬਿਲਕੁਲ ਵਿਚਕਾਰ ਵਾਲਾ ਨੰਬਰ (ਇਹ ਸਰਵਰ ਦੀ Latency ਮਾਪਣ ਜਿਵੇਂ P50/P99 ਲਈ ਬਹੁਤ ਜ਼ਰੂਰੀ ਹੈ)।',
            practicalExampleEn:
              'In Backend Engineering, we never measure server speed using only the Average (Mean), because if 99 users wait 10ms and 1 user waits 10,000ms, the mean looks slow. Instead, engineers use Percentiles and Median (P50, P95, P99) from Statistics!',
            practicalExamplePa:
              'ਜਦੋਂ ਅਸੀਂ ਕਿਸੇ ਵੈੱਬਸਾਈਟ ਦੀ ਸਪੀਡ ਚੈੱਕ ਕਰਦੇ ਹਾਂ, ਤਾਂ ਇੰਜੀਨੀਅਰ ਸਿਰਫ਼ Mean (ਔਸਤ) ਨਹੀਂ ਦੇਖਦੇ, ਸਗੋਂ Statistics ਦਾ Median (P50) ਅਤੇ P99 ਦੇਖਦੇ ਹਨ ਤਾਂ ਜੋ ਪਤਾ ਲੱਗੇ ਕਿ ਅਸਲ ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਐਪ ਕਿੰਨੀ ਤੇਜ਼ ਹੈ।',
            codeDemo: `// Discrete Math Set Operations & Statistics in TypeScript
const setA = new Set(['Apple', 'Mango', 'Guava']);
const setB = new Set(['Mango', 'Banana', 'Orange']);

// 1. Intersection (A ∩ B): Items present in BOTH sets
const intersection = [...setA].filter((item) => setB.has(item)); // ['Mango']

// 2. Union (A ∪ B): All unique items across both sets
const union = [...new Set([...setA, ...setB])];

// 3. De Morgan's Law in Code: !(isLoggedIn && isAdmin) === (!isLoggedIn || !isAdmin)
function checkAccess(isLoggedIn: boolean, isAdmin: boolean): boolean {
  return !isLoggedIn || !isAdmin;
}`,
            misconceptionsJson: [
              {
                myth: 'You need advanced calculus to understand everyday computer science and programming.',
                truthEn: 'Core computer science relies primarily on Discrete Mathematics—Logic, Sets, Graphs, Combinatorics, and Base-2 Arithmetic—rather than continuous calculus!',
                truthPa: 'ਕੰਪਿਊਟਰ ਸਾਇੰਸ ਲਈ ਕੈਲਕੂਲਸ ਨਾਲੋਂ Discrete Math (Logic, Sets, Graphs ਅਤੇ Probability) ਕਿਤੇ ਜ਼ਿਆਦਾ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ!',
              },
            ],
            terminologyJson: [
              {
                term: 'De Morgan’s Laws',
                punjabi: 'ਡੀ ਮੌਰਗਨ ਦੇ ਨਿਯਮ',
                meaningEn: 'Rules relating logical AND and OR under negation: NOT(A AND B) = (NOT A) OR (NOT B).',
                meaningPa: 'ਤਰਕ ਦਾ ਨਿਯਮ ਜੋ ਦੱਸਦਾ ਹੈ ਕਿ NOT(A AND B) ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ (NOT A) OR (NOT B) ਦੇ।',
              },
              {
                term: 'Graph (Vertices & Edges)',
                punjabi: 'ਗ੍ਰਾਫ਼ (ਬਿੰਦੂ ਅਤੇ ਰੇਖਾਵਾਂ)',
                meaningEn: 'Mathematical structure modeling pairwise relations between objects (nodes/vertices connected by links/edges).',
                meaningPa: 'ਬਿੰਦੂਆਂ (Vertices) ਅਤੇ ਉਨ੍ਹਾਂ ਨੂੰ ਜੋੜਨ ਵਾਲੀਆਂ ਲਾਈਨਾਂ (Edges) ਦਾ ਮਾਡਲ ਜਿਸ ਨਾਲ ਨੈੱਟਵਰਕ ਅਤੇ ਨਕਸ਼ੇ ਬਣਦੇ ਹਨ।',
              },
              {
                term: 'Median vs Mean',
                punjabi: 'ਮੱਧਮਾਨ ਬਨਾਮ ਔਸਤ',
                meaningEn: 'Mean is the arithmetic average; Median is the middle value when data is sorted.',
                meaningPa: 'Mean ਸਾਰੇ ਅੰਕਾਂ ਦੀ ਔਸਤ ਹੈ, ਜਦਕਿ Median ਕ੍ਰਮਵਾਰ ਲਗਾਏ ਅੰਕਾਂ ਦੇ ਬਿਲਕੁਲ ਵਿਚਕਾਰਲਾ ਅੰਕ ਹੁੰਦਾ ਹੈ।',
              },
            ],
            interactiveLabId: 'algorithm-math-lab',
            exercisePromptEn:
              'Open the Algorithm & CS Math Lab and switch to the Discrete Math & Statistics tab to test Set intersections, Truth Tables, and Live Statistical distributions!',
            exercisePromptPa:
              'Algorithm & CS Math Lab ਖੋਲ੍ਹੋ ਅਤੇ Discrete Math ਤੇ Statistics ਟੈਬ ਵਿੱਚ ਜਾ ਕੇ Set Operations ਅਤੇ Mean/Median ਦਾ ਤਜਰਬਾ ਕਰੋ।',
            summaryEn:
              'Propositional Logic powers conditional code, Set Theory powers relational databases, Graph Theory powers routing, and Statistics powers data science.',
            summaryPa:
              'Logic ਨਾਲ ਕੋਡ ਦੀਆਂ ਸ਼ਰਤਾਂ ਚੱਲਦੀਆਂ ਹਨ, Sets ਨਾਲ Database ਚੱਲਦੇ ਹਨ, Graphs ਨਾਲ ਨਕਸ਼ੇ ਚੱਲਦੇ ਹਨ ਅਤੇ Statistics ਨਾਲ AI ਕੰਮ ਕਰਦਾ ਹੈ।',
            furtherReadingJson: [
              'Eric Lehman, F. Thomson Leighton, Albert R. Meyer — Mathematics for Computer Science (MIT 6.042J)',
            ],
            quiz: {
              titleEn: 'Level 9 Assessment: Logic, Discrete Math & Statistics',
              titlePa: 'ਲੈਵਲ 9 ਟੈਸਟ: ਕੰਪਿਊਟਰ ਸਾਇੰਸ ਲਈ ਗਣਿਤ',
              timeLimitSeconds: 300,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'Discrete Math',
                  promptEn: 'If Set A = {1, 2, 3, 4} and Set B = {3, 4, 5, 6}, what is the Intersection (A ∩ B)?',
                  promptPa: 'ਜੇਕਰ Set A = {1, 2, 3, 4} ਅਤੇ Set B = {3, 4, 5, 6} ਹੈ, ਤਾਂ ਦੋਵਾਂ ਦਾ Intersection (A ∩ B — ਸਾਂਝੇ ਅੰਕ) ਕੀ ਹੋਵੇਗਾ?',
                  optionsJson: ['{3, 4}', '{1, 2, 3, 4, 5, 6}', '{1, 2}', '{}'],
                  correctAnswer: '{3, 4}',
                  explanationEn: 'The Intersection (A ∩ B) contains only elements that belong to BOTH Set A and Set B, which are 3 and 4.',
                  explanationPa: 'Intersection (A ∩ B) ਵਿੱਚ ਸਿਰਫ਼ ਉਹ ਅੰਕ ਆਉਂਦੇ ਹਨ ਜੋ ਦੋਵਾਂ ਸੈੱਟਾਂ ਵਿੱਚ ਮੌਜੂਦ ਹੋਣ, ਯਾਨੀ {3, 4}।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Propositional Logic',
                  promptEn: 'By De Morgan’s Law, what is the logical equivalent of !(A && B)?',
                  promptPa: 'De Morgan ਦੇ ਨਿਯਮ ਅਨੁਸਾਰ !(A && B) ਕਿਸ ਦੇ ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ?',
                  optionsJson: ['!A || !B', 'A && B', '!A && !B', 'A || B'],
                  correctAnswer: '!A || !B',
                  explanationEn: 'De Morgan’s Law states that negating a conjunction (AND) flips the operator to disjunction (OR) with negated terms: !A || !B.',
                  explanationPa: 'De Morgan ਦੇ ਨਿਯਮ ਅਨੁਸਾਰ ਬਰੈਕਟ ਖੋਲ੍ਹਣ ਤੇ AND (&&) ਬਦਲ ਕੇ OR (||) ਹੋ ਜਾਂਦਾ ਹੈ: !A || !B।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Combinatorics',
                  promptEn: 'How many distinct binary patterns can be represented using 5 bits?',
                  promptPa: '5 ਬਿੱਟਾਂ (5 bits) ਨਾਲ ਕੁੱਲ ਕਿੰਨੇ ਵੱਖ-ਵੱਖ ਬਾਈਨਰੀ ਪੈਟਰਨ ਬਣਾਏ ਜਾ ਸਕਦੇ ਹਨ?',
                  optionsJson: ['32 (since 2⁵ = 32)', '10', '25', '64'],
                  correctAnswer: '32 (since 2⁵ = 32)',
                  explanationEn: 'Each bit has 2 choices (0 or 1), so 5 bits yield 2 × 2 × 2 × 2 × 2 = 2⁵ = 32 combinations.',
                  explanationPa: 'ਹਰੇਕ ਬਿੱਟ ਦੀਆਂ 2 ਸੰਭਾਵਨਾਵਾਂ ਹਨ, ਇਸ ਲਈ 2⁵ = 32 ਵੱਖ-ਵੱਖ ਪੈਟਰਨ ਬਣਦੇ ਹਨ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Statistics',
                  promptEn: 'What is the MEDIAN of the sorted latency dataset [10ms, 15ms, 20ms, 25ms, 500ms]?',
                  promptPa: 'ਕ੍ਰਮਵਾਰ ਡਾਟਾ [10ms, 15ms, 20ms, 25ms, 500ms] ਦਾ MEDIAN (ਮੱਧਮਾਨ) ਕੀ ਹੈ?',
                  optionsJson: ['20ms', '114ms', '500ms', '10ms'],
                  correctAnswer: '20ms',
                  explanationEn: 'The Median is the middle number of a sorted list (the 3rd of 5 items = 20ms), which is unaffected by the extreme 500ms outlier.',
                  explanationPa: '5 ਕ੍ਰਮਵਾਰ ਅੰਕਾਂ ਦੇ ਬਿਲਕੁਲ ਵਿਚਕਾਰ (3ਵੇਂ ਨੰਬਰ ਤੇ) 20ms ਹੈ, ਇਸ ਲਈ Median 20ms ਹੋਵੇਗਾ।',
                },
                {
                  questionType: 'fill_blank',
                  topicTag: 'Graph Theory',
                  promptEn: 'In Graph Theory, the points/nodes are called Vertices and the lines connecting them are called ________. (Type: Edges)',
                  promptPa: 'Graph Theory ਵਿੱਚ ਬਿੰਦੂਆਂ ਨੂੰ Vertices ਕਹਿੰਦੇ ਹਨ ਅਤੇ ਉਨ੍ਹਾਂ ਨੂੰ ਜੋੜਨ ਵਾਲੀਆਂ ਰੇਖਾਵਾਂ ਨੂੰ ________ ਕਹਿੰਦੇ ਹਨ। (Edges)',
                  optionsJson: ['Edges', 'Pixels'],
                  correctAnswer: 'Edges',
                  explanationEn: 'A graph G = (V, E) consists of Vertices (nodes) and Edges (connecting links).',
                  explanationPa: 'ਬਿੰਦੂਆਂ ਨੂੰ ਜੋੜਨ ਵਾਲੀਆਂ ਲਾਈਨਾਂ ਨੂੰ Edges ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
                },
              ],
            },
          },
          {
            slug: 'combinatorics-graph-theory-modular-probability-statistics',
            orderIndex: 2,
            titleEn: '9.2 Mathematical Induction, Combinatorics, Graph Shortest Paths, Modular Arithmetic & Bayes’ Probability',
            titlePa: '9.2 ਕੰਪਿਊਟਰ ਗਣਿਤ ਭਾਗ 2: Induction, Combinatorics, Modular Arithmetic ਅਤੇ Probability',
            objectivesJson: [
              'Understand Mathematical Induction (Base Case + Inductive Step) as a domino chain of proofs',
              'Apply the Pigeonhole Principle, Permutations, and Combinations to hashing and password entropy',
              'Compute Modular Arithmetic (`a mod n`) used in clock wrap-around, ring buffers, and RSA cryptography',
              'Calculate Variance, Standard Deviation, Percentiles (P95/P99), and Bayes’ Conditional Probability',
            ],
            prerequisitesJson: ['9.1 Propositional Logic, Discrete Math (Sets & Graphs) & Statistics'],
            childAnalogyEn:
              '1. Mathematical Induction (ਡੋਮੀਨੋ ਦੀਆਂ ਇੱਟਾਂ ਦੀ ਲਾਈਨ):\nHow do you prove that a row of 1,000 standing Domino tiles will ALL fall down?\nYou only need two tiny facts:\n• Base Case: You push the 1st domino (`n = 1`) and it falls.\n• Inductive Step: Whenever ANY domino `k` falls, it is close enough to knock down the very next domino `k + 1`!\nOnce both are true, all 1,000 dominoes are guaranteed to fall! That is how we prove recursive algorithms work!\n\n2. Pigeonhole Principle (ਕਬੂਤਰਾਂ ਦੇ ਖੁੱਡੇ):\nIf 10 pigeons fly into 9 pigeonholes, at least ONE hole MUST contain 2 or more pigeons! In Computer Science, this proves why Hash Tables occasionally have "Collisions"!\n\n3. Modular Arithmetic (ਘੜੀ ਦਾ ਗਣਿਤ — Clock Math):\nIf it is 10 o’clock right now and you add 5 hours, the clock doesn’t say 15 o’clock—it wraps around 12 and says `3 o’clock` (`(10 + 5) mod 12 = 3`)!',
            childAnalogyPa:
              '1. Mathematical Induction (ਇੱਟਾਂ ਦੀ ਲਾਈਨ):\nਮੰਨ ਲਓ ਕਤਾਰ ਵਿੱਚ 1000 ਇੱਟਾਂ ਖੜ੍ਹੀਆਂ ਹਨ। ਇਹ ਸਾਬਤ ਕਰਨ ਲਈ ਕਿ ਸਾਰੀਆਂ ਇੱਟਾਂ ਡਿੱਗਣਗੀਆਂ, ਸਾਨੂੰ ਸਿਰਫ਼ 2 ਗੱਲਾਂ ਚਾਹੀਦੀਆਂ ਹਨ:\n• Base Case: ਪਹਿਲੀ ਇੱਟ ਨੂੰ ਧੱਕਾ ਮਾਰਿਆ ਗਿਆ।\n• Inductive Step: ਹਰ ਡਿੱਗਣ ਵਾਲੀ ਇੱਟ ਆਪਣੀ ਅਗਲੀ ਇੱਟ ਨੂੰ ਡੇਗ ਦਿੰਦੀ ਹੈ!\n\n2. Pigeonhole Principle (ਕਬੂਤਰ ਅਤੇ ਖੁੱਡੇ):\nਜੇਕਰ 10 ਕਬੂਤਰ ਹਨ ਅਤੇ ਰਹਿਣ ਲਈ ਸਿਰਫ਼ 9 ਖੁੱਡੇ (Boxes) ਹਨ, ਤਾਂ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਖੁੱਡੇ ਵਿੱਚ 2 ਕਬੂਤਰ ਜ਼ਰੂਰ ਹੋਣਗੇ! ਇਹ ਨਿਯਮ ਦੱਸਦਾ ਹੈ ਕਿ Hash Table ਵਿੱਚ ਕਈ ਵਾਰ ਦੋ ਚੀਜ਼ਾਂ ਇੱਕੋ ਥਾਂ ਕਿਉਂ ਟਕਰਾਉਂਦੀਆਂ ਹਨ।\n\n3. Modular Arithmetic (`%` — ਘੜੀ ਵਾਲਾ ਗਣਿਤ):\nਘੜੀ ਉੱਤੇ 12 ਵੱਜਣ ਤੋਂ ਬਾਅਦ ਦੁਬਾਰਾ 1 ਵੱਜਦਾ ਹੈ। ਜੇ ਹੁਣ 10 ਵੱਜੇ ਹਨ ਤਾਂ 5 ਘੰਟੇ ਬਾਅਦ `(10 + 5) % 12 = 3` ਵੱਜਣਗੇ! ਇਹੀ `mod` ਗਣਿਤ Cryptography (RSA) ਦੀ ਰੀੜ੍ਹ ਦੀ ਹੱਡੀ ਹੈ!',
            technicalExplanationEn:
              '1. Mathematical Induction:\nTo prove `P(n)` for all `n ≥ 1`: prove `P(1)` holds (Base Case), and prove `P(k) → P(k+1)` (Inductive Hypothesis). For example, `1 + 2 + ... + n = n(n+1)/2`.\n\n2. Combinatorics & Pigeonhole Principle:\n• Permutations (order matters): `P(n, r) = n! / (n - r)!`.\n• Combinations (order does not matter): `C(n, r) = n! / (r!(n - r)!)`.\n• Pigeonhole Principle: Mapping `N` keys into `M` buckets where `N > M` guarantees at least one hash collision.\n\n3. Modular Arithmetic & Cryptography:\n`a ≡ b (mod n)` means `(a - b)` is divisible by `n`. Used in circular array queues `(index + 1) % capacity` and RSA public-key encryption (`c = m^e mod N`).',
            technicalExplanationPa:
              '1. Combinatorics: ਪਾਸਵਰਡ ਕਿੰਨਾ ਮਜ਼ਬੂਤ ਹੈ, ਇਹ Permutations ਨਾਲ ਗਿਣਿਆ ਜਾਂਦਾ ਹੈ।\n2. Modular Arithmetic (`a % n`): ਜਦੋਂ ਕਿਸੇ ਨੰਬਰ ਨੂੰ `n` ਨਾਲ ਭਾਗ ਕਰਕੇ ਬਾਕੀ (Remainder) ਬਚਦਾ ਹੈ, ਉਸਨੂੰ Modulo ਕਹਿੰਦੇ ਹਨ — ਜਿਵੇਂ `17 % 5 = 2`।\n3. Bayes’ Theorem & Variance: ਡਾਟਾ ਕਿੰਨਾ ਖਿੰਡਿਆ ਹੋਇਆ ਹੈ ਉਸਨੂੰ Variance/Standard Deviation ਕਹਿੰਦੇ ਹਨ, ਅਤੇ ਨਵੀਂ ਜਾਣਕਾਰੀ ਮਿਲਣ ਤੇ ਸੰਭਾਵਨਾ (Probability) ਅਪਡੇਟ ਕਰਨ ਨੂੰ Bayes’ Theorem ਕਹਿੰਦੇ ਹਨ।',
            practicalExampleEn:
              'When implementing a Ring Buffer (Circular Queue) of size 8 in audio streaming or OS network drivers, advancing the write pointer uses Modular Arithmetic: `nextIndex = (currentIndex + 1) % 8` so index 7 wraps cleanly back to index 0!',
            practicalExamplePa:
              'ਪ੍ਰੋਗਰਾਮਿੰਗ ਵਿੱਚ ਜਦੋਂ ਅਸੀਂ Circular Queue ਬਣਾਉਂਦੇ ਹਾਂ ਜਾਂ ਇਹ ਚੈੱਕ ਕਰਦੇ ਹਾਂ ਕਿ ਨੰਬਰ ਜਿਸਤ (Even: `n % 2 === 0`) ਹੈ ਜਾਂ ਟਾਂਕ (Odd: `n % 2 === 1`), ਤਾਂ ਅਸੀਂ Modular Arithmetic ਹੀ ਵਰਤਦੇ ਹਾਂ!',
            codeDemo: `// Modular Arithmetic, Combinations & Bayes' Probability in TypeScript
function modExp(base: number, exp: number, mod: number): number {
  let result = 1;
  let b = base % mod;
  let e = exp;
  while (e > 0) {
    if (e % 2 === 1) result = (result * b) % mod;
    e = Math.floor(e / 2);
    b = (b * b) % mod;
  }
  return result; // Fast Modular Exponentiation used in RSA Cryptography!
}`,
            misconceptionsJson: [
              {
                myth: 'The modulo operator (%) only checks if a number is even or odd.',
                truthEn: 'Modulo arithmetic forms finite fields (Galois fields) that underpin all modern public-key cryptography (RSA, Diffie-Hellman), hash table indexing, and circular buffers.',
                truthPa: 'Modulo (%) ਸਿਰਫ਼ Even/Odd ਚੈੱਕ ਕਰਨ ਲਈ ਨਹੀਂ, ਸਗੋਂ ਬੈਂਕਾਂ ਦੀ ਇਨਕ੍ਰਿਪਸ਼ਨ (RSA) ਅਤੇ Hash Tables ਚਲਾਉਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
              },
            ],
            terminologyJson: [
              {
                term: 'Mathematical Induction',
                punjabi: 'ਮੈਥੇਮੈਟੀਕਲ ਇੰਡਕਸ਼ਨ',
                meaningEn: 'Proof technique establishing a base case P(1) and an inductive step P(k) => P(k+1) for all natural numbers.',
                meaningPa: 'ਗਣਿਤ ਵਿੱਚ ਕਿਸੇ ਫਾਰਮੂਲੇ ਨੂੰ ਹਰ ਨੰਬਰ ਲਈ ਸੱਚ ਸਾਬਤ ਕਰਨ ਦਾ ਕਦਮ-ਦਰ-ਕਦਮ ਤਰੀਕਾ।',
              },
              {
                term: 'Pigeonhole Principle',
                punjabi: 'ਪਿਜਨਹੋਲ ਸਿਧਾਂਤ',
                meaningEn: 'If N+1 items are placed into N containers, at least one container must hold more than one item.',
                meaningPa: 'ਜੇ ਚੀਜ਼ਾਂ ਜ਼ਿਆਦਾ ਹੋਣ ਅਤੇ ਬਕਸੇ ਘੱਟ ਹੋਣ, ਤਾਂ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਬਕਸੇ ਵਿੱਚ ਇੱਕ ਤੋਂ ਵੱਧ ਚੀਜ਼ਾਂ ਜ਼ਰੂਰ ਆਉਣਗੀਆਂ।',
              },
              {
                term: 'Modular Arithmetic (mod)',
                punjabi: 'ਮੌਡਿਊਲਰ ਗਣਿਤ (ਬਾਕੀ ਬਚਣ ਵਾਲਾ ਗਣਿਤ)',
                meaningEn: 'System of arithmetic for integers where numbers wrap around upon reaching a fixed modulus n.',
                meaningPa: 'ਉਹ ਗਣਿਤ ਜਿੱਥੇ ਇੱਕ ਖਾਸ ਨੰਬਰ (Modulus) ਤੋਂ ਬਾਅਦ ਗਿਣਤੀ ਘੜੀ ਵਾਂਗ ਦੁਬਾਰਾ 0 ਤੋਂ ਸ਼ੁਰੂ ਹੋ ਜਾਂਦੀ ਹੈ।',
              },
            ],
            interactiveLabId: 'algorithm-math-lab',
            exercisePromptEn:
              'Test outliers and statistical distributions in the Algorithm & CS Math Lab.',
            exercisePromptPa:
              'Algorithm & CS Math Lab ਵਿੱਚ ਅੰਕੜਿਆਂ ਨੂੰ ਬਦਲ ਕੇ Mean ਅਤੇ Median ਦਾ ਫ਼ਰਕ ਪਰਖੋ।',
            summaryEn:
              'Mathematical Induction proves recursive correctness, the Pigeonhole Principle explains hash collisions, Modular Arithmetic secures cryptography, and Bayes’ Theorem powers probabilistic AI.',
            summaryPa:
              'Induction ਨਾਲ ਐਲਗੋਰਿਦਮ ਸਾਬਤ ਹੁੰਦੇ ਹਨ, Pigeonhole ਨਾਲ Hashing ਸਮਝ ਆਉਂਦੀ ਹੈ ਅਤੇ Modular ਗਣਿਤ ਨਾਲ ਇਨਕ੍ਰਿਪਸ਼ਨ ਚੱਲਦੀ ਹੈ।',
            furtherReadingJson: [
              'Ronald Graham, Donald Knuth, Oren Patashnik — Concrete Mathematics',
            ],
            quiz: {
              titleEn: 'Level 9.2 Assessment: Induction, Combinatorics & Modular Math',
              titlePa: 'ਲੈਵਲ 9.2 ਟੈਸਟ: ਇੰਡਕਸ਼ਨ, ਮੌਡਿਊਲਰ ਗਣਿਤ ਅਤੇ ਸੰਭਾਵਨਾ',
              timeLimitSeconds: 240,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'Modular Arithmetic',
                  promptEn: 'What is the value of 17 mod 5 (written as 17 % 5 in code)?',
                  promptPa: '17 mod 5 (ਯਾਨੀ 17 ਨੂੰ 5 ਨਾਲ ਭਾਗ ਕਰਨ ਤੇ ਬਾਕੀ Remainder) ਕੀ ਹੋਵੇਗਾ?',
                  optionsJson: ['2', '3', '0', '17'],
                  correctAnswer: '2',
                  explanationEn: '17 divided by 5 is 3 with a remainder of 2 (since 5 × 3 = 15, and 17 - 15 = 2).',
                  explanationPa: '17 ਨੂੰ 5 ਨਾਲ ਭਾਗ ਕਰਨ ਤੇ 5 × 3 = 15 ਹੁੰਦਾ ਹੈ ਅਤੇ ਬਾਕੀ (Remainder) 2 ਬਚਦਾ ਹੈ।',
                },
                {
                  questionType: 'mcq',
                  topicTag: 'Pigeonhole Principle',
                  promptEn: 'If a Hash Table has 10 buckets and you insert 11 distinct keys, what does the Pigeonhole Principle guarantee?',
                  promptPa: 'ਜੇਕਰ ਇੱਕ Hash Table ਵਿੱਚ 10 ਖਾਨੇ (Buckets) ਹਨ ਅਤੇ ਤੁਸੀਂ 11 ਵੱਖ-ਵੱਖ ਚਾਬੀਆਂ ਪਾਉਂਦੇ ਹੋ, ਤਾਂ Pigeonhole Principle ਕੀ ਗਰੰਟੀ ਦਿੰਦਾ ਹੈ?',
                  optionsJson: [
                    'At least one bucket will contain 2 or more keys (a hash collision)',
                    'The computer will turn off',
                    'All buckets will remain empty',
                    '11 is smaller than 10',
                  ],
                  correctAnswer:
                    'At least one bucket will contain 2 or more keys (a hash collision)',
                  explanationEn: 'Placing 11 items into 10 buckets guarantees at least one collision by the Pigeonhole Principle.',
                  explanationPa: '10 ਖਾਨਿਆਂ ਵਿੱਚ 11 ਚੀਜ਼ਾਂ ਰੱਖਣ ਨਾਲ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਖਾਨੇ ਵਿੱਚ 2 ਚੀਜ਼ਾਂ ਜ਼ਰੂਰ ਆਉਣਗੀਆਂ (Hash Collision)।',
                },
              ],
            },
          },
        ],
      },
    ],
  },
];

export const COMPLETE_SYLLABUS_BLUEPRINT = [
  {
    level: 1,
    titleEn: 'Level 1 — Computer Introduction',
    titlePa: 'ਲੈਵਲ 1 — ਕੰਪਿਊਟਰ ਦੀ ਜਾਣ-ਪਛਾਣ',
    topics: [
      '1. What is a computer?',
      '2. History of computers',
      '3. Generations of computers (1st to 5th)',
      '4. Types of computers (Super, Mainframe, Mini, Micro)',
      '5. Analog, digital, and hybrid computers',
      '6. Characteristics of computers (Speed, Accuracy, Diligence)',
      '7. Applications of computers',
      '8. Hardware and software',
      '9. Input, processing, output, and storage (IPO-S)',
      '10. Basic computer terminology',
    ],
  },
  {
    level: 2,
    titleEn: 'Level 2 — Computer Hardware',
    titlePa: 'ਲੈਵਲ 2 — ਕੰਪਿਊਟਰ ਹਾਰਡਵੇਅਰ',
    topics: [
      '1. Motherboard',
      '2. CPU architecture',
      '3. ALU and control unit',
      '4. Registers (PC, IR, ACC, MAR, MDR)',
      '5. Cache memory (L1, L2, L3)',
      '6. RAM (DRAM, DDR4/DDR5)',
      '7. ROM (PROM, EPROM, EEPROM)',
      '8. HDD and SSD',
      '9. NVMe storage',
      '10. GPU (Parallel processing)',
      '11. Power supply unit (PSU)',
      '12. BIOS and UEFI',
      '13. CMOS and RTC',
      '14. Expansion slots',
      '15. PCI Express (PCIe lanes)',
      '16. USB and peripheral interfaces',
      '17. Cooling systems',
      '18. Hardware troubleshooting',
    ],
  },
  {
    level: 3,
    titleEn: 'Level 3 — Digital Fundamentals & Assembly',
    titlePa: 'ਲੈਵਲ 3 — ਡਿਜੀਟਲ ਬੁਨਿਆਦਾਂ, ਬਾਈਨਰੀ ਅਤੇ ਅਸੈਂਬਲੀ',
    topics: [
      '1. Binary number system (Base-2)',
      '2. Decimal number system (Base-10)',
      '3. Octal number system (Base-8)',
      '4. Hexadecimal number system (Base-16)',
      '5. Number system conversions',
      '6. Bits, nibbles, and bytes',
      '7. Binary arithmetic & Two’s complement',
      '8. Boolean algebra',
      '9. Logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR)',
      '10. Truth tables',
      '11. Combinational logic (Half/Full Adders, Multiplexers)',
      '12. Sequential logic',
      '13. Flip-flops (SR, D, JK)',
      '14. Registers and counters',
      '15. Basic computer architecture & Assembly opcodes',
    ],
  },
  {
    level: 4,
    titleEn: 'Level 4 — Operating Systems',
    titlePa: 'ਲੈਵਲ 4 — ਓਪਰੇਟਿੰਗ ਸਿਸਟਮ',
    topics: [
      '1. Operating system fundamentals & Kernel',
      '2. Windows NT architecture',
      '3. Linux fundamentals',
      '4. Linux file systems (ext4, inode tree)',
      '5. Processes and threads',
      '6. Memory management & Paging',
      '7. File management',
      '8. Device drivers',
      '9. Boot sequence (POST -> UEFI -> Bootloader -> Kernel)',
      '10. Command line fundamentals (Bash/PowerShell)',
      '11. Permissions (rwx / octal)',
      '12. System administration basics',
      '13. Virtualization & Containers',
      '14. Troubleshooting operating systems',
    ],
  },
  {
    level: 5,
    titleEn: 'Level 5 — Software & Algorithms',
    titlePa: 'ਲੈਵਲ 5 — ਸੌਫਟਵੇਅਰ ਅਤੇ ਐਲਗੋਰਿਦਮ',
    topics: [
      '1. System software',
      '2. Application software',
      '3. Programming languages (Low-level vs High-level)',
      '4. Compilers',
      '5. Interpreters',
      '6. Assemblers',
      '7. Algorithms (Searching, Sorting, Big-O)',
      '8. Flowcharts',
      '9. Data structures introduction (Arrays, Stacks, Queues, Trees)',
      '10. Databases introduction (SQL & Relational Models)',
      '11. APIs (REST & JSON)',
      '12. Software development lifecycle (SDLC)',
    ],
  },
  {
    level: 6,
    titleEn: 'Level 6 — Networking and Internet',
    titlePa: 'ਲੈਵਲ 6 — ਨੈੱਟਵਰਕਿੰਗ ਅਤੇ ਇੰਟਰਨੈੱਟ',
    topics: [
      '1. Computer networks',
      '2. LAN, MAN, and WAN',
      '3. Network topologies (Star, Mesh, Bus, Ring)',
      '4. Routers and switches',
      '5. IP addresses',
      '6. IPv4 and IPv6',
      '7. DNS (Domain Name System)',
      '8. DHCP',
      '9. TCP/IP suite',
      '10. OSI 7-Layer model',
      '11. HTTP and HTTPS',
      '12. Wi-Fi and Ethernet',
      '13. Firewalls',
      '14. Internet infrastructure (Subsea cables, IXPs)',
      '15. Basic network troubleshooting',
    ],
  },
  {
    level: 7,
    titleEn: 'Level 7 — Cybersecurity Fundamentals',
    titlePa: 'ਲੈਵਲ 7 — ਸਾਈਬਰ ਸੁਰੱਖਿਆ ਦੀਆਂ ਬੁਨਿਆਦਾਂ',
    topics: [
      '1. Cybersecurity concepts (CIA Triad)',
      '2. Malware & Ransomware',
      '3. Viruses and worms',
      '4. Phishing & Social engineering',
      '5. Authentication & MFA',
      '6. Password security & Cryptographic hashing',
      '7. Encryption (Symmetric AES & Asymmetric RSA/ECC)',
      '8. Backups (3-2-1 Rule)',
      '9. Secure browsing',
      '10. System updates & Patch management',
      '11. Privacy and data protection',
      '12. Defensive security practices',
    ],
  },
  {
    level: 8,
    titleEn: 'Level 8 — Advanced Computer Concepts',
    titlePa: 'ਲੈਵਲ 8 — ਐਡਵਾਂਸਡ ਕੰਪਿਊਟਰ ਸੰਕਲਪ',
    topics: [
      '1. CPU instruction execution',
      '2. Instruction sets (ISA)',
      '3. RISC and CISC',
      '4. Instruction pipelining & Hazard mitigation',
      '5. Multicore processors & Parallelism',
      '6. Memory hierarchy',
      '7. Virtual memory & TLB',
      '8. Computer buses (Address, Data, Control)',
      '9. Hardware and software interrupts',
      '10. Embedded systems',
      '11. Microcontrollers',
      '12. Cloud computing',
      '13. Artificial intelligence fundamentals',
      '14. Computer performance analysis (Amdahl’s Law)',
      '15. Introduction to semiconductor technology',
    ],
  },
  {
    level: 9,
    titleEn: 'Level 9 — Mathematics for Computer Science',
    titlePa: 'ਲੈਵਲ 9 — ਕੰਪਿਊਟਰ ਸਾਇੰਸ ਲਈ ਗਣਿਤ',
    topics: [
      '1. Propositional Logic & Truth Tables',
      '2. De Morgan’s Laws & Logical Equivalence',
      '3. Mathematical Induction & Proofs',
      '4. Set Theory (Union, Intersection, Relations)',
      '5. Combinatorics, Permutations & Pigeonhole Principle',
      '6. Graph Theory (Trees, DAGs, Shortest Paths)',
      '7. Modular Arithmetic (Cryptography foundation)',
      '8. Probability Rules & Conditional Probability (Bayes’ Theorem)',
      '9. Descriptive Statistics (Mean, Median, Variance, Percentiles)',
    ],
  },
];

export const LEVEL_LESSON_TOPIC_MAPPING: Record<number, { lessonSlugs: string[]; cutoffTopicIndex: number }> = {
  1: {
    lessonSlugs: ['what-is-a-computer-ipos', 'computer-characteristics-hardware-software-terminology'],
    cutoffTopicIndex: 5,
  },
  2: {
    lessonSlugs: ['cpu-alu-registers-memory-hierarchy', 'gpu-psu-bios-uefi-pcie-cooling-troubleshooting'],
    cutoffTopicIndex: 9,
  },
  3: {
    lessonSlugs: ['how-binary-and-logic-gates-work', 'combinational-sequential-flipflops-assembly-opcodes'],
    cutoffTopicIndex: 10,
  },
  4: {
    lessonSlugs: ['os-kernel-processes-threads', 'os-drivers-boot-cli-permissions-virtualization'],
    cutoffTopicIndex: 7,
  },
  5: {
    lessonSlugs: ['algorithms-binary-search-compilers', 'data-structures-databases-sql-apis-sdlc'],
    cutoffTopicIndex: 8,
  },
  6: {
    lessonSlugs: ['networking-dns-security-pipelining', 'network-topologies-osi-dhcp-firewalls-troubleshooting'],
    cutoffTopicIndex: 8,
  },
  7: {
    lessonSlugs: ['cybersecurity-cia-malware-phishing-auth', 'encryption-aes-rsa-backups-defensive-security'],
    cutoffTopicIndex: 6,
  },
  8: {
    lessonSlugs: ['isa-risc-cisc-pipelining-multicore-buses', 'embedded-microcontrollers-cloud-ai-amdahl-semiconductors'],
    cutoffTopicIndex: 9,
  },
  9: {
    lessonSlugs: ['cs-math-logic-discrete-statistics', 'combinatorics-graph-theory-modular-probability-statistics'],
    cutoffTopicIndex: 4,
  },
};

export function computeSyllabusCoverageReport(activeLessonSlugs: string[]) {
  const slugSet = new Set(activeLessonSlugs);
  let totalTopics = 0;
  let coveredTopics = 0;

  const levels = COMPLETE_SYLLABUS_BLUEPRINT.map((lvl) => {
    const mapping = LEVEL_LESSON_TOPIC_MAPPING[lvl.level];
    const topicsReport = lvl.topics.map((topic, idx) => {
      totalTopics++;
      const assignedSlug =
        idx < (mapping?.cutoffTopicIndex ?? 5)
          ? mapping?.lessonSlugs[0]
          : mapping?.lessonSlugs[1] || mapping?.lessonSlugs[0];
      const isCovered = Boolean(assignedSlug && slugSet.has(assignedSlug));
      if (isCovered) coveredTopics++;
      return {
        topic,
        lessonSlug: assignedSlug || null,
        status: isCovered ? ('complete' as const) : ('missing' as const),
      };
    });

    const levelCoveredCount = topicsReport.filter((t) => t.status === 'complete').length;
    const authoredLessonCount = (mapping?.lessonSlugs || []).filter((s) => slugSet.has(s)).length;
    return {
      level: lvl.level,
      titleEn: lvl.titleEn,
      titlePa: lvl.titlePa,
      totalTopics: lvl.topics.length,
      coveredTopics: levelCoveredCount,
      coveredTopicsCount: levelCoveredCount,
      authoredLessonCount,
      status:
        levelCoveredCount === lvl.topics.length
          ? ('complete' as const)
          : levelCoveredCount > 0
          ? ('partial' as const)
          : ('missing' as const),
      topics: topicsReport,
    };
  });

  return {
    totalLevels: COMPLETE_SYLLABUS_BLUEPRINT.length,
    totalTopics,
    coveredTopics,
    totalBlueprintTopics: totalTopics,
    completeTopics: coveredTopics,
    uncoveredTopics: totalTopics - coveredTopics,
    coveragePercent: totalTopics > 0 ? Math.round((coveredTopics / totalTopics) * 100) : 0,
    levels,
  };
}

