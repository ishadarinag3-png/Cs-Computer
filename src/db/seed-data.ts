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
        ],
      },
    ],
  },
  {
    slug: 'level-6-7-8-networks-security-advanced',
    levelNumber: 6,
    titleEn: 'Levels 6–8: Networking, Cybersecurity & Advanced CPU Pipelining',
    titlePa: 'ਲੈਵਲ 6–8: ਨੈੱਟਵਰਕਿੰਗ, ਸਾਈਬਰ ਸੁਰੱਖਿਆ ਅਤੇ ਐਡਵਾਂਸਡ CPU',
    descriptionEn:
      'TCP/IP & OSI Model, Routers, Switches, DNS, HTTPS Encryption, Firewalls, RISC vs CISC, Instruction Pipelining, and Semiconductor basics.',
    descriptionPa:
      'ਇੰਟਰਨੈੱਟ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ (IP, DNS, Router, Switch), ਸਾਈਬਰ ਸੁਰੱਖਿਆ (Encryption, Phishing) ਅਤੇ ਐਡਵਾਂਸਡ CPU Pipelining।',
    category: 'core-cs',
    estimatedHours: 10,
    modules: [
      {
        orderIndex: 1,
        titleEn: 'Packet Switching, Cryptography & Modern Processor Design',
        titlePa: 'ਪੈਕਟ ਸਵਿਚਿੰਗ, ਇਨਕ੍ਰਿਪਸ਼ਨ ਅਤੇ ਆਧੁਨਿਕ ਪ੍ਰੋਸੈਸਰ',
        summaryEn: 'Understand how packets travel across the internet securely and how modern multicore CPUs pipeline instructions.',
        summaryPa: 'ਸਮਝੋ ਕਿ ਇੰਟਰਨੈੱਟ ਉੱਤੇ ਡਾਟਾ ਪੈਕਟ ਕਿਵੇਂ ਸਫ਼ਰ ਕਰਦੇ ਹਨ ਅਤੇ ਆਧੁਨਿਕ ਪ੍ਰੋਸੈਸਰ ਕਿਵੇਂ ਕੰਮ ਕਰਦੇ ਹਨ।',
        lessons: [
          {
            slug: 'networking-dns-security-pipelining',
            orderIndex: 1,
            titleEn: '6.1 Internet Packets (IP, DNS, Routers), Encryption & CPU Pipelining',
            titlePa: '6.1 ਇੰਟਰਨੈੱਟ ਪੈਕਟ (IP, DNS, Router), ਸੁਰੱਖਿਆ ਅਤੇ CPU Pipelining',
            objectivesJson: [
              'Trace how a message is split into IP packets and routed across Switches and Routers',
              'Explain DNS as the phonebook of the internet translating domain names to IP addresses',
              'Understand Symmetric vs Asymmetric Encryption and HTTPS security',
              'Explain CPU Instruction Pipelining and RISC vs CISC architectures',
            ],
            prerequisitesJson: ['4.1 OS Kernel, Processes vs Threads & Virtual Memory'],
            childAnalogyEn:
              '1. How the Internet Works (Postal Service Analogy):\n• IP Address (192.168.1.1): This is your exact House Number and PIN Code!\n• DNS (Domain Name System): Remembering numbers like `142.250.190.46` is hard, so DNS is like your phone’s Contact Book—you type `google.com`, and DNS looks up the numeric house address!\n• Network Switch: The Postman inside your own street/colony (LAN) connecting neighbors.\n• Router: The Main Highway Post Office that directs letters between different cities and countries (WAN/Internet)!\n\n2. CPU Pipelining (Washing Laundry Analogy):\nInstead of waiting for Load 1 to finish Washer -> Dryer -> Folding before starting Load 2, you put Load 2 in the Washer as soon as Load 1 moves to the Dryer!',
            childAnalogyPa:
              '1. ਇੰਟਰਨੈੱਟ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ? (ਡਾਕਖਾਨੇ ਦੀ ਉਦਾਹਰਣ):\n• IP Address: ਇਹ ਤੁਹਾਡੇ ਘਰ ਦਾ ਪੱਕਾ ਮਕਾਨ ਨੰਬਰ ਅਤੇ ਪਿੰਨ ਕੋਡ ਹੈ।\n• DNS (Domain Name System): ਇਨਸਾਨਾਂ ਲਈ `142.250.190.46` ਵਰਗੇ ਨੰਬਰ ਯਾਦ ਰੱਖਣੇ ਔਖੇ ਹਨ, ਇਸ ਲਈ DNS ਇੱਕ ਫ਼ੋਨ ਡਾਇਰੀ ਵਾਂਗ ਹੈ—ਤੁਸੀਂ `google.com` ਲਿਖਦੇ ਹੋ ਅਤੇ DNS ਉਸਦਾ IP Address ਲੱਭ ਦਿੰਦਾ ਹੈ!\n• Switch: ਤੁਹਾਡੇ ਇੱਕੋ ਮੁਹੱਲੇ ਜਾਂ ਦਫ਼ਤਰ (LAN) ਦੇ ਕੰਪਿਊਟਰਾਂ ਨੂੰ ਆਪਸ ਵਿੱਚ ਜੋੜਨ ਵਾਲਾ ਡਾਕੀਆ।\n• Router: ਦੋ ਵੱਖ-ਵੱਖ ਸ਼ਹਿਰਾਂ ਜਾਂ ਨੈੱਟਵਰਕਾਂ (Internet) ਦੇ ਵਿਚਕਾਰ ਰਸਤਾ ਦਿਖਾਉਣ ਵਾਲਾ ਮੁੱਖ ਚੌਰਾਹਾ!\n• Encryption: ਚਿੱਠੀ ਨੂੰ ਅਜਿਹੇ ਗੁਪਤ ਤਾਲੇ ਵਾਲੇ ਬਕਸੇ ਵਿੱਚ ਬੰਦ ਕਰਕੇ ਭੇਜਣਾ ਜਿਸਦੀ ਚਾਬੀ ਸਿਰਫ਼ ਭੇਜਣ ਵਾਲੇ ਅਤੇ ਪ੍ਰਾਪਤ ਕਰਨ ਵਾਲੇ ਕੋਲ ਹੋਵੇ (HTTPS)।',
            technicalExplanationEn:
              '1. TCP/IP & Packet Switching:\nData is segmented into TCP segments, encapsulated into IP packets (with Source IP and Destination IP headers), and framed with Ethernet MAC addresses.\n\n2. Cybersecurity Fundamentals:\n• Phishing: Social engineering attacks impersonating trusted entities.\n• Hashing (SHA-256 / bcrypt): One-way mathematical transformation used to store passwords safely.\n• Encryption (TLS/AES): Reversible transformation using cryptographic keys.\n\n3. Advanced CPU Concepts:\n• RISC (ARM / Apple Silicon): Simple, fixed-length instructions optimized for pipelining and energy efficiency.\n• CISC (x86-64): Complex multi-operation instructions.',
            technicalExplanationPa:
              '1. TCP/IP ਮਾਡਲ: TCP ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਡਾਟਾ ਦਾ ਕੋਈ ਵੀ ਟੁਕੜਾ (Packet) ਰਸਤੇ ਵਿੱਚ ਗੁੰਮ ਨਾ ਹੋਵੇ, ਅਤੇ IP ਉਸਨੂੰ ਸਹੀ ਪਤੇ ਉੱਤੇ ਪਹੁੰਚਾਉਂਦਾ ਹੈ।\n2. Cybersecurity: ਪਾਸਵਰਡ ਨੂੰ ਕਦੇ ਵੀ ਸਾਦੇ ਅੱਖਰਾਂ (Plaintext) ਵਿੱਚ ਸੇਵ ਨਹੀਂ ਕੀਤਾ ਜਾਂਦਾ, ਸਗੋਂ Cryptographic Hashing ਨਾਲ ਸੁਰੱਖਿਅਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।\n3. RISC ਬਨਾਮ CISC: ਤੁਹਾਡੇ iPhone ਵਿੱਚ ARM (RISC) ਪ੍ਰੋਸੈਸਰ ਲੱਗਿਆ ਹੁੰਦਾ ਹੈ ਜੋ ਛੋਟੀਆਂ ਅਤੇ ਤੇਜ਼ ਹਦਾਇਤਾਂ ਕਾਰਨ ਘੱਟ ਬੈਟਰੀ ਖਰਚ ਕਰਦਾ ਹੈ।',
            practicalExampleEn:
              'When you visit a banking site with `https://`, TLS encryption scrambles your data before it leaves your iPhone Wi-Fi antenna, so even someone on the same public coffee-shop Wi-Fi cannot read your password.',
            practicalExamplePa:
              'ਜਦੋਂ ਵੈੱਬਸਾਈਟ ਦੇ ਅੱਗੇ `https://` ਅਤੇ ਤਾਲੇ ਦਾ ਨਿਸ਼ਾਨ ਹੁੰਦਾ ਹੈ, ਤਾਂ ਤੁਹਾਡਾ ਡਾਟਾ Encrypted ਹੋ ਕੇ ਜਾਂਦਾ ਹੈ ਜਿਸਨੂੰ ਰਸਤੇ ਵਿੱਚ ਕੋਈ ਹੈਕਰ ਪੜ੍ਹ ਨਹੀਂ ਸਕਦਾ।',
            codeDemo: `# Networking & Security Diagnostic Commands
ping 8.8.8.8              # Test ICMP packet round-trip latency
nslookup example.com      # Query DNS server to resolve Domain -> IP Address
traceroute example.com    # Inspect every Router hop along the internet path`,
            misconceptionsJson: [
              {
                myth: 'Wi-Fi and the Internet are the exact same thing.',
                truthEn: 'Wi-Fi is merely a wireless local cable replacement (LAN) between your phone and your home router. Your router still needs an ISP fiber/cable link to reach the global Internet (WAN).',
                truthPa: 'Wi-Fi ਸਿਰਫ਼ ਤੁਹਾਡੇ ਫ਼ੋਨ ਨੂੰ ਘਰ ਦੇ Router ਨਾਲ ਬਿਨਾਂ ਤਾਰ ਤੋਂ ਜੋੜਦਾ ਹੈ (LAN); ਅਸਲ ਇੰਟਰਨੈੱਟ (WAN) ਪਿੱਛੇ ਫਾਈਬਰ ਤਾਰ ਰਾਹੀਂ ਆਉਂਦਾ ਹੈ।',
              },
            ],
            terminologyJson: [
              {
                term: 'DNS (Domain Name System)',
                punjabi: 'ਡੀ.ਐਨ.ਐਸ',
                meaningEn: 'Distributed directory that translates human-friendly domain names into numeric IP addresses.',
                meaningPa: 'ਉਹ ਸਿਸਟਮ ਜੋ ਵੈੱਬਸਾਈਟ ਦੇ ਨਾਮ (ਜਿਵੇਂ google.com) ਨੂੰ IP Address ਵਿੱਚ ਬਦਲਦਾ ਹੈ।',
              },
              {
                term: 'Encryption',
                punjabi: 'ਇਨਕ੍ਰਿਪਸ਼ਨ (ਗੁਪਤ ਕੋਡਿੰਗ)',
                meaningEn: 'Encoding plaintext into ciphertext using an algorithm and key so only authorized parties can read it.',
                meaningPa: 'ਡਾਟੇ ਨੂੰ ਗੁਪਤ ਕੋਡ ਵਿੱਚ ਬਦਲਣਾ ਤਾਂ ਜੋ ਬਿਨਾਂ ਚਾਬੀ (Key) ਤੋਂ ਕੋਈ ਹੋਰ ਉਸਨੂੰ ਨਾ ਪੜ੍ਹ ਸਕੇ।',
              },
            ],
            interactiveLabId: 'network-sim',
            exercisePromptEn:
              'Open the Network Packet Simulator Lab and transmit a packet from Client -> Switch -> Router -> Server to inspect each hop.',
            exercisePromptPa:
              'Network Simulator Lab ਖੋਲ੍ਹੋ ਅਤੇ Client ਤੋਂ Server ਤੱਕ Packet ਭੇਜ ਕੇ ਦੇਖੋ ਕਿ Switch ਅਤੇ Router ਕਿਵੇਂ ਕੰਮ ਕਰਦੇ ਹਨ।',
            summaryEn:
              'Routers forward IP packets across networks, DNS resolves domain names, Encryption protects confidentiality, and RISC pipelining maximizes CPU throughput.',
            summaryPa:
              'Routers ਅਤੇ DNS ਇੰਟਰਨੈੱਟ ਚਲਾਉਂਦੇ ਹਨ, Encryption ਡਾਟਾ ਸੁਰੱਖਿਅਤ ਰੱਖਦੀ ਹੈ ਅਤੇ Pipelining CPU ਦੀ ਰਫ਼ਤਾਰ ਵਧਾਉਂਦੀ ਹੈ।',
            furtherReadingJson: [
              'Kurose & Ross — Computer Networking: A Top-Down Approach',
            ],
            quiz: {
              titleEn: 'Levels 6–8 Assessment: Networking, Security & Pipelining',
              titlePa: 'ਲੈਵਲ 6–8 ਟੈਸਟ: ਨੈੱਟਵਰਕਿੰਗ ਅਤੇ ਸਾਈਬਰ ਸੁਰੱਖਿਆ',
              timeLimitSeconds: 240,
              passingScorePercent: 70,
              questions: [
                {
                  questionType: 'mcq',
                  topicTag: 'Networking',
                  promptEn: 'Which network service translates a domain name like "academy.edu" into an IP address like "93.184.216.34"?',
                  promptPa: 'ਕਿਹੜਾ ਸਿਸਟਮ ਵੈੱਬਸਾਈਟ ਦੇ ਨਾਮ (ਜਿਵੇਂ academy.edu) ਨੂੰ IP Address ਵਿੱਚ ਬਦਲਦਾ ਹੈ?',
                  optionsJson: ['DNS (Domain Name System)', 'ALU', 'BIOS', 'PSU'],
                  correctAnswer: 'DNS (Domain Name System)',
                  explanationEn: 'DNS resolves human-readable domain names into numerical IPv4/IPv6 addresses.',
                  explanationPa: 'DNS ਵੈੱਬਸਾਈਟ ਦੇ ਨਾਮ ਨੂੰ ਕੰਪਿਊਟਰ ਦੇ IP Address ਵਿੱਚ ਬਦਲਣ ਦਾ ਕੰਮ ਕਰਦਾ ਹੈ।',
                },
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
