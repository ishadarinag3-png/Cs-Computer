import { SyllabusLevelBlueprint } from './types.ts';

export const COMPLETE_SYLLABUS_BLUEPRINT: SyllabusLevelBlueprint[] = [
  {
    level: 0,
    titleEn: 'Level 0 — Mathematics and Physics for Electronics',
    titlePa: 'ਲੈਵਲ 0 — ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਲਈ ਗਣਿਤ ਅਤੇ ਭੌਤਿਕ ਵਿਗਿਆਨ',
    topics: [
      '1. Arithmetic, fractions, decimals, ratios, and percentages',
      '2. Algebra, equations, powers, roots, scientific and engineering notation',
      '3. SI units, prefixes, unit conversions, and graphs',
      '4. Geometry, trigonometry, and logarithms (dB)',
      '5. Complex numbers and phasors',
      '6. Derivatives, integrals, differential equations, and vectors',
      '7. Electric charge, electric fields, potential, and voltage',
      '8. Magnetic fields, flux, and electromagnetic induction',
      '9. Energy, power, waves, frequency, and phase',
    ],
  },
  {
    level: 1,
    titleEn: 'Level 1 — Electrical Fundamentals',
    titlePa: 'ਲੈਵਲ 1 — ਬਿਜਲਈ ਬੁਨਿਆਦਾਂ',
    topics: [
      '1. Voltage, current, resistance, and conductance',
      '2. Ohm’s law, electrical power, and energy',
      '3. Series and parallel circuits, equivalent resistance',
      '4. Kirchhoff’s laws (KCL and KVL)',
      '5. Voltage and current dividers',
      '6. Independent and dependent sources, ground, and reference nodes',
      '7. Open circuits and short circuits',
      '8. Direct current (DC), alternating current (AC), frequency, and period',
      '9. Peak, average, and RMS values',
      '10. Measurement uncertainty and electrical safety standards',
    ],
  },
  {
    level: 2,
    titleEn: 'Level 2 — Passive Components',
    titlePa: 'ਲੈਵਲ 2 — ਪੈਸਿਵ ਕੰਪੋਨੈਂਟਸ',
    topics: [
      '1. Fixed resistors, potentiometers, rheostats, tolerance, and power ratings',
      '2. Temperature coefficients and resistor colour codes',
      '3. Ceramic, electrolytic, film, and tantalum capacitors',
      '4. Capacitance, ESR, dielectric leakage, and RC time constants',
      '5. Capacitive filters and ripple smoothing',
      '6. Inductors, magnetic flux, inductive reactance, and RL circuits',
      '7. LC and RLC circuits, resonance, and Q factor',
      '8. Transformer fundamentals and magnetic coupling',
      '9. Relays, switches, fuses, and connectors',
      '10. Thermistors (NTC/PTC) and light dependent resistors (LDRs)',
    ],
  },
  {
    level: 3,
    titleEn: 'Level 3 — Semiconductor Devices',
    titlePa: 'ਲੈਵਲ 3 — ਸੈਮੀਕੰਡਕਟਰ ਯੰਤਰ',
    topics: [
      '1. Semiconductor physics, intrinsic and extrinsic semiconductors, and doping',
      '2. PN junctions and diode IV characteristics',
      '3. Rectifier, Schottky, Zener, and TVS diodes',
      '4. LEDs, photodiodes, and bridge rectifiers',
      '5. NPN and PNP bipolar junction transistors (BJTs) and biasing',
      '6. MOSFETs: enhancement and depletion modes, N-channel and P-channel',
      '7. JFETs, IGBTs, thyristors (SCR), TRIACs, and DIACs',
      '8. Optocouplers, optoisolators, and phototransistors',
      '9. Transient protection devices and datasheet interpretation',
      '10. Semiconductor component failure modes',
    ],
  },
  {
    level: 4,
    titleEn: 'Level 4 — Analog Electronics',
    titlePa: 'ਲੈਵਲ 4 — ਐਨਾਲਾਗ ਇਲੈਕਟ੍ਰਾਨਿਕਸ',
    topics: [
      '1. Diode circuits and transistor biasing networks',
      '2. Common-emitter, common-base, and common-collector amplifiers',
      '3. MOSFET amplifiers and small-signal analysis',
      '4. Differential amplifiers and operational amplifier architecture',
      '5. Inverting and non-inverting operational amplifiers, voltage followers',
      '6. Summing amplifiers, difference amplifiers, integrators, and differentiators',
      '7. Comparators, hysteresis, and Schmitt triggers',
      '8. Instrumentation amplifiers and active filter topologies (Sallen-Key)',
      '9. Oscillators (Wien bridge, Colpitts, crystal) and negative feedback theory',
      '10. Gain, bandwidth, stability, slew rate, offset voltage, noise, CMRR, and PSRR',
    ],
  },
  {
    level: 5,
    titleEn: 'Level 5 — Digital Electronics',
    titlePa: 'ਲੈਵਲ 5 — ਡਿਜੀਟਲ ਇਲੈਕਟ੍ਰਾਨਿਕਸ',
    topics: [
      '1. Binary, decimal, octal, and hexadecimal number systems',
      '2. Binary arithmetic, signed numbers, and two’s complement',
      '3. Boolean algebra, logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR), and truth tables',
      '4. De Morgan’s laws and Karnaugh maps (K-maps)',
      '5. Combinational circuits: multiplexers, demultiplexers, encoders, and decoders',
      '6. Half adders, full adders, and subtractors',
      '7. Latches and flip-flops (SR, D, JK, T)',
      '8. Counters (synchronous, asynchronous) and shift registers',
      '9. Clock signals, timing diagrams, setup time, and hold time',
      '10. Finite-state machines (FSM), memory ICs, CMOS/TTL logic families, tri-state, and metastability',
    ],
  },
  {
    level: 6,
    titleEn: 'Level 6 — Power Supplies and Power Electronics',
    titlePa: 'ਲੈਵਲ 6 — ਪਾਵਰ ਸਪਲਾਈ ਅਤੇ ਪਾਵਰ ਇਲੈਕਟ੍ਰਾਨਿਕਸ',
    topics: [
      '1. Unregulated power supplies, transformer rectification, and smoothing',
      '2. Linear regulators (78xx, 79xx, LM317) and Low-Dropout (LDO) regulators',
      '3. Thermal dissipation, heatsink sizing, and thermal resistance',
      '4. Switch-mode power supplies (SMPS) fundamentals',
      '5. Buck, Boost, and Buck-Boost converter topologies',
      '6. Isolated converters: Flyback and Forward converter topologies',
      '7. PWM control, conversion efficiency, and output ripple analysis',
      '8. Battery chemistries: Lead-Acid, Li-ion, and LiFePO4',
      '9. Battery management systems (BMS), CC/CV charging profiles, and cell protection',
      '10. Inverters, uninterruptible power supplies (UPS), and power distribution architectures',
    ],
  },
  {
    level: 7,
    titleEn: 'Level 7 — Measurements and Instrumentation',
    titlePa: 'ਲੈਵਲ 7 — ਮਾਪ ਅਤੇ ਇੰਸਟ੍ਰੂਮੈਂਟੇਸ਼ਨ',
    topics: [
      '1. Digital multimeters (DMM), voltage, current, resistance, and continuity measurements',
      '2. True RMS measurement principles and crest factor',
      '3. Meter input impedance and circuit loading effects',
      '4. Diode, transistor, capacitor, and inductor in-circuit testing',
      '5. Four-wire Kelvin resistance measurements for low impedance',
      '6. Digital storage oscilloscopes (DSO): bandwidth, sample rate, and memory depth',
      '7. Oscilloscope triggering modes (Edge, Pulse, Video) and math channels',
      '8. Probes: 1X, 10X passive probe compensation, active probes, and differential probes',
      '9. Logic analyzers, protocol decoders (I2C, SPI, UART, CAN), and spectrum analyzers',
      '10. Instrument calibration, LCR meters, and measurement safety categories (CAT I - CAT IV)',
    ],
  },
  {
    level: 8,
    titleEn: 'Level 8 — Microcontrollers and Embedded Systems',
    titlePa: 'ਲੈਵਲ 8 — ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਅਤੇ ਇੰਬੈੱਡਡ ਸਿਸਟਮ',
    topics: [
      '1. Microcontroller architecture: Harvard vs Von Neumann, ALU, and registers',
      '2. Clock sources, crystal oscillators, PLLs, and reset circuitry',
      '3. Brown-out detection (BOD) and watchdog timers (WDT)',
      '4. General-Purpose Input/Output (GPIO), pull-up/pull-down, and software debouncing',
      '5. Interrupts: hardware ISRs, interrupt vector tables, and priority',
      '6. Hardware timers, counters, input capture, and Pulse Width Modulation (PWM)',
      '7. Analog-to-Digital Converters (SAR ADC), resolution, sampling rate, and DACs',
      '8. Serial communications: UART, SPI, and I2C protocols',
      '9. Industrial CAN bus and USB device fundamentals',
      '10. Memory mapping, Flash, SRAM, EEPROM, bootloaders, and SWD/JTAG debugging',
    ],
  },
  {
    level: 9,
    titleEn: 'Level 9 — PCB Design & Engineering Workflow',
    titlePa: 'ਲੈਵਲ 9 — PCB ਡਿਜ਼ਾਈਨ ਅਤੇ ਇੰਜੀਨੀਅਰਿੰਗ ਵਰਕਫਲੋ',
    topics: [
      '1. Schematic capture, component symbols, reference designators, and netlists',
      '2. Footprint creation, IPC land patterns, and 3D mechanical clearance',
      '3. Component placement strategy, power flow, and critical signal paths',
      '4. Trace width, clearance, and current-carrying capacity per IPC-2152',
      '5. Layer stackup: 2-layer vs 4-layer, continuous ground planes, and power planes',
      '6. Decoupling capacitor placement and power distribution network (PDN)',
      '7. High-speed signal integrity, controlled impedance microstrips, and differential pairs',
      '8. Design for Manufacturing (DFM) and Design for Assembly (DFA) rules',
      '9. Fabrication outputs: Gerber RS-274X, Excellon drill files, BOM, and Pick-and-Place (CPL)',
      '10. PCB manufacturing, SMT stencil reflow, through-hole wave soldering, and AOI inspection',
    ],
  },
  {
    level: 10,
    titleEn: 'Level 10 — Communications and Signal Processing',
    titlePa: 'ਲੈਵਲ 10 — ਸੰਚਾਰ ਅਤੇ ਸਿਗਨਲ ਪ੍ਰੋਸੈਸਿੰਗ',
    topics: [
      '1. Analog modulation schemes: Amplitude Modulation (AM), FM, and Phase Modulation (PM)',
      '2. Digital modulation schemes: ASK, FSK, BPSK, and Quadrature Amplitude Modulation (QAM)',
      '3. Bandwidth, Signal-to-Noise Ratio (SNR), and Shannon-Hartley channel capacity',
      '4. Transmission lines, characteristic impedance (Z0), reflections, and termination',
      '5. RF fundamentals, quarter-wave antennas, radiation patterns, and free-space path loss',
      '6. Electromagnetic Interference (EMI), EMC compliance, shielding, and ferrite suppression',
      '7. Industrial wired protocols: RS-232, differential RS-485, and Ethernet PHY',
      '8. Wireless IoT protocols: Wi-Fi, Bluetooth Low Energy (BLE), Zigbee, and LoRa chirp spread spectrum',
      '9. Digital Signal Processing (DSP): Nyquist-Shannon sampling theorem and anti-aliasing filters',
      '10. Discrete Fourier Transform (DFT), Fast Fourier Transform (FFT), and digital FIR/IIR filtering',
    ],
  },
  {
    level: 11,
    titleEn: 'Level 11 — Advanced Engineering',
    titlePa: 'ਲੈਵਲ 11 — ਐਡਵਾਂਸਡ ਇੰਜੀਨੀਅਰਿੰਗ',
    topics: [
      '1. Open-loop vs closed-loop dynamical systems and error feedback',
      '2. Proportional-Integral-Derivative (PID) control algorithm and discrete implementation',
      '3. Anti-windup clamping, derivative filtering, and PID tuning techniques',
      '4. Sensors and transducers: RTD PT100, thermocouples, strain gauges, and 6-axis IMUs',
      '5. Actuators and motors: Brushed DC, Brushless DC (BLDC), stepper, and servo motors',
      '6. Motor drivers, full H-bridge MOSFET stages, and shoot-through dead-time protection',
      '7. Stepper microstepping current control and BLDC electronic commutation',
      '8. Safety-critical systems: Triple Modular Redundancy (TMR) and dual-core lockstep CPUs',
      '9. Reliability engineering: Mean Time Between Failures (MTBF) and failure rates (lambda)',
      '10. Failure Mode and Effects Analysis (FMEA), environmental stress screening, and CE/FCC/RoHS regulatory compliance',
    ],
  },
  {
    level: 12,
    titleEn: 'Level 12 — Practical Repair and Troubleshooting',
    titlePa: 'ਲੈਵਲ 12 — ਵਿਹਾਰਕ ਮੁਰੰਮਤ ਅਤੇ ਟ੍ਰਬਲਸ਼ੂਟਿੰਗ',
    topics: [
      '1. Systematic fault-finding methodology and electrical safety procedures',
      '2. Macroscopic and stereoscopic visual inspection for defective solder and corrosion',
      '3. Cold-state DC impedance screening across power rails to ground',
      '4. Short-circuit localization: 4-wire Kelvin microvolt delta mapping',
      '5. Thermal imaging and current-clamped voltage injection for short detection',
      '6. Power rail sequencing capture and reset/clock verification via multi-channel DSO',
      '7. Signal tracing and synthetic signal injection for stage-by-stage isolation',
      '8. Solder metallurgy (Sn63/Pb37 vs SAC305), preheating, and BGA rework',
      '9. IPC-7721 pad and trace restoration using micro-jumpers and UV dielectric mask',
      '10. Root Cause Analysis (RCA) classification (EOS, ESD, Tin Whiskers, Thermal Fatigue, ECM)',
    ],
  },
];

export const LEVEL_LESSON_TOPIC_MAPPING: Record<number, { lessonSlugs: string[]; cutoffTopicIndex: number }> = {
  0: {
    lessonSlugs: ['math-foundations-si-algebra-trig', 'calculus-vectors-electromagnetic-physics'],
    cutoffTopicIndex: 5,
  },
  1: {
    lessonSlugs: ['electrical-fundamentals-ohms-kirchhoff', 'ac-fundamentals-rms-safety-grounding'],
    cutoffTopicIndex: 5,
  },
  2: {
    lessonSlugs: ['resistors-potentiometers-colour-codes-thermistors', 'capacitors-inductors-rlc-resonance-transformers'],
    cutoffTopicIndex: 5,
  },
  3: {
    lessonSlugs: ['semiconductor-physics-diodes-rectifiers-optocouplers', 'transistors-bjts-mosfets-igbts-thyristors'],
    cutoffTopicIndex: 5,
  },
  4: {
    lessonSlugs: ['transistor-amplifiers-opamps-negative-feedback', 'opamp-circuits-comparators-active-filters'],
    cutoffTopicIndex: 5,
  },
  5: {
    lessonSlugs: ['digital-logic-binary-karnaugh-combinational', 'sequential-logic-flipflops-counters-fsm'],
    cutoffTopicIndex: 5,
  },
  6: {
    lessonSlugs: ['linear-power-supplies-ldo-thermal', 'smps-buck-boost-bms-inverters'],
    cutoffTopicIndex: 5,
  },
  7: {
    lessonSlugs: ['multimeters-true-rms-impedance-measurement', 'oscilloscopes-bandwidth-probes-logic-analyzers'],
    cutoffTopicIndex: 5,
  },
  8: {
    lessonSlugs: ['mcu-architecture-memory-gpio-interrupts', 'mcu-timers-pwm-adc-serial-protocols'],
    cutoffTopicIndex: 5,
  },
  9: {
    lessonSlugs: ['pcb-schematic-layout-stackup-decoupling', 'pcb-dfm-gerbers-soldering-rework'],
    cutoffTopicIndex: 5,
  },
  10: {
    lessonSlugs: ['modulation-am-fm-qam-wired-protocols', 'wireless-rf-antennas-osi-dsp-fft'],
    cutoffTopicIndex: 5,
  },
  11: {
    lessonSlugs: ['control-systems-pid-sensors-actuators', 'robotics-reliability-mtbf-fmea-compliance'],
    cutoffTopicIndex: 5,
  },
  12: {
    lessonSlugs: ['systematic-fault-finding-power-rail-diagnostics', 'component-rework-micro-soldering-root-cause-analysis'],
    cutoffTopicIndex: 5,
  },
};

import { LEVEL_0_COURSE } from './level0.ts';
import { LEVEL_1_COURSE } from './level1.ts';
import { LEVEL_2_COURSE } from './level2.ts';
import { LEVEL_3_COURSE } from './level3.ts';
import { LEVEL_4_COURSE } from './level4.ts';
import { LEVEL_5_COURSE } from './level5.ts';
import { LEVEL_6_COURSE } from './level6.ts';
import { LEVEL_7_COURSE } from './level7.ts';
import { LEVEL_8_COURSE } from './level8.ts';
import { LEVEL_9_COURSE } from './level9.ts';
import { LEVEL_10_COURSE } from './level10.ts';
import { LEVEL_11_COURSE } from './level11.ts';
import { LEVEL_12_COURSE } from './level12.ts';

const ALL_SEED_COURSES = [
  LEVEL_0_COURSE,
  LEVEL_1_COURSE,
  LEVEL_2_COURSE,
  LEVEL_3_COURSE,
  LEVEL_4_COURSE,
  LEVEL_5_COURSE,
  LEVEL_6_COURSE,
  LEVEL_7_COURSE,
  LEVEL_8_COURSE,
  LEVEL_9_COURSE,
  LEVEL_10_COURSE,
  LEVEL_11_COURSE,
  LEVEL_12_COURSE,
];

export const VALID_CURRICULUM_LAB_IDS = new Set([
  'hardware-explorer',
  'cpu-cycle',
  'cpu-simulator',
  'ram-storage',
  'binary-converter',
  'number-converter',
  'logic-gates',
  'binary-logic',
  'network-sim',
  'algorithm-math-lab',
  'sorting-visualizer',
  'discrete-math',
  'resistor-calc',
  'transistor-switch',
  'multimeter-lab',
  'lab-power-rail-short-finder',
  'lab-pad-trace-repair-simulator',
]);

export type SubtopicAuditStatus =
  | 'NOT_STARTED'
  | 'MAPPED_ONLY'
  | 'SKELETON_ONLY'
  | 'PARTIAL_BILINGUAL'
  | 'SUBSTANTIVE_DRAFT'
  | 'EXERCISES_ADDED'
  | 'QUIZ_ADDED'
  | 'FULLY_VERIFIED';

export interface AuditableLessonRecord {
  slug: string;
  titleEn?: string;
  titlePa?: string;
  objectivesJson?: string[];
  prerequisitesJson?: string[];
  childAnalogyEn?: string;
  childAnalogyPa?: string;
  technicalExplanationEn?: string;
  technicalExplanationPa?: string;
  practicalExampleEn?: string;
  practicalExamplePa?: string;
  codeDemo?: string;
  misconceptionsJson?: Array<{ myth: string; truthEn: string; truthPa: string }>;
  terminologyJson?: Array<{ term: string; punjabi: string; meaningEn: string; meaningPa: string }>;
  interactiveLabId?: string;
  exercisePromptEn?: string;
  exercisePromptPa?: string;
  summaryEn?: string;
  summaryPa?: string;
  furtherReadingJson?: string[];
  questionCount?: number;
  quiz?: {
    questions?: Array<{
      promptEn: string;
      promptPa: string;
      optionsJson: string[];
      correctAnswer: string;
      explanationEn: string;
      explanationPa: string;
    }>;
  };
}

const GURMUKHI_SCRIPT_REGEX = /[\u0A00-\u0A7F]/;

function buildSeedLessonLookup(): Map<string, AuditableLessonRecord> {
  const map = new Map<string, AuditableLessonRecord>();
  for (const c of ALL_SEED_COURSES) {
    for (const m of c.modules) {
      for (const l of m.lessons) {
        map.set(l.slug, {
          ...l,
          questionCount: l.quiz?.questions?.length ?? 0,
        });
      }
    }
  }
  return map;
}

export function auditLessonContentQuality(lesson: AuditableLessonRecord | undefined) {
  if (!lesson) {
    return {
      auditStatus: 'NOT_STARTED' as SubtopicAuditStatus,
      legacyStatus: 'missing' as const,
      checks: {
        mapped: false,
        bilingualGurmukhi: false,
        englishDepth: false,
        mathAndWorkedExample: false,
        codeAndSimulation: false,
        exercisesPresent: false,
        quizVerified: false,
        labResolved: false,
      },
    };
  }

  const techEn = (lesson.technicalExplanationEn || '').trim();
  const techPa = (lesson.technicalExplanationPa || '').trim();
  const analogyEn = (lesson.childAnalogyEn || '').trim();
  const analogyPa = (lesson.childAnalogyPa || '').trim();
  const pracEn = (lesson.practicalExampleEn || '').trim();
  const pracPa = (lesson.practicalExamplePa || '').trim();
  const code = (lesson.codeDemo || '').trim();
  const exEn = (lesson.exercisePromptEn || '').trim();
  const exPa = (lesson.exercisePromptPa || '').trim();
  const qCount = lesson.questionCount ?? lesson.quiz?.questions?.length ?? 0;

  const englishDepth = techEn.length >= 120 && analogyEn.length >= 30;
  const bilingualGurmukhi =
    techPa.length >= 80 &&
    analogyPa.length >= 25 &&
    GURMUKHI_SCRIPT_REGEX.test(techPa) &&
    GURMUKHI_SCRIPT_REGEX.test(analogyPa);

  const mathAndWorkedExample =
    pracEn.length >= 40 &&
    pracPa.length >= 25 &&
    GURMUKHI_SCRIPT_REGEX.test(pracPa) &&
    /[=*/+\-^0-9]/.test(`${techEn} ${pracEn} ${code}`);

  const codeAndSimulation = code.length >= 30;
  const exercisesPresent =
    exEn.length >= 20 && exPa.length >= 15 && GURMUKHI_SCRIPT_REGEX.test(exPa);
  const quizVerified = qCount >= 10;
  const labResolved = VALID_CURRICULUM_LAB_IDS.has(lesson.interactiveLabId || '');
  const termsAndMyths =
    (lesson.terminologyJson?.length ?? 0) >= 2 &&
    (lesson.misconceptionsJson?.length ?? 0) >= 2;

  let auditStatus: SubtopicAuditStatus = 'MAPPED_ONLY';
  if (!englishDepth && !bilingualGurmukhi) {
    auditStatus = 'SKELETON_ONLY';
  } else if (englishDepth && !bilingualGurmukhi) {
    auditStatus = 'PARTIAL_BILINGUAL';
  } else if (englishDepth && bilingualGurmukhi && (!mathAndWorkedExample || !termsAndMyths)) {
    auditStatus = 'SUBSTANTIVE_DRAFT';
  } else if (englishDepth && bilingualGurmukhi && mathAndWorkedExample && exercisesPresent && !quizVerified) {
    auditStatus = 'EXERCISES_ADDED';
  } else if (englishDepth && bilingualGurmukhi && mathAndWorkedExample && exercisesPresent && quizVerified && !labResolved) {
    auditStatus = 'QUIZ_ADDED';
  } else if (
    englishDepth &&
    bilingualGurmukhi &&
    mathAndWorkedExample &&
    codeAndSimulation &&
    exercisesPresent &&
    quizVerified &&
    labResolved &&
    termsAndMyths
  ) {
    auditStatus = 'FULLY_VERIFIED';
  } else {
    auditStatus = 'SUBSTANTIVE_DRAFT';
  }

  const legacyStatus =
    auditStatus === 'FULLY_VERIFIED' ? ('complete' as const) : ('partial' as const);

  return {
    auditStatus,
    legacyStatus,
    checks: {
      mapped: true,
      bilingualGurmukhi,
      englishDepth,
      mathAndWorkedExample,
      codeAndSimulation,
      exercisesPresent,
      quizVerified,
      labResolved,
    },
  };
}

export function computeSyllabusCoverageReport(
  activeLessonsInput: Array<string | AuditableLessonRecord>
) {
  const seedLookup = buildSeedLessonLookup();
  const lessonMap = new Map<string, AuditableLessonRecord>();

  for (const item of activeLessonsInput) {
    if (typeof item === 'string') {
      const seedLesson = seedLookup.get(item);
      if (seedLesson) {
        lessonMap.set(item, seedLesson);
      } else {
        lessonMap.set(item, { slug: item });
      }
    } else if (item && typeof item === 'object' && item.slug) {
      const seedFallback = seedLookup.get(item.slug);
      lessonMap.set(item.slug, {
        ...seedFallback,
        ...item,
        questionCount:
          item.questionCount ??
          item.quiz?.questions?.length ??
          seedFallback?.questionCount ??
          0,
      });
    }
  }

  let totalTopics = 0;
  let coveredTopics = 0;
  let partialTopics = 0;

  const levels = COMPLETE_SYLLABUS_BLUEPRINT.map((lvl) => {
    const mapping = LEVEL_LESSON_TOPIC_MAPPING[lvl.level];
    const topicsReport = lvl.topics.map((topic, idx) => {
      totalTopics++;
      const assignedSlug =
        idx < (mapping?.cutoffTopicIndex ?? 5)
          ? mapping?.lessonSlugs[0]
          : mapping?.lessonSlugs[1] || mapping?.lessonSlugs[0];

      const lessonObj = assignedSlug ? lessonMap.get(assignedSlug) : undefined;
      const quality = auditLessonContentQuality(lessonObj);

      if (quality.legacyStatus === 'complete') {
        coveredTopics++;
      } else if (quality.legacyStatus === 'partial') {
        partialTopics++;
      }

      return {
        topic,
        lessonSlug: assignedSlug || null,
        status: quality.legacyStatus,
        auditStatus: quality.auditStatus,
        checks: quality.checks,
      };
    });

    const levelCoveredCount = topicsReport.filter((t) => t.status === 'complete').length;
    const authoredLessonCount = (mapping?.lessonSlugs || []).filter((s) => lessonMap.has(s)).length;
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
          : levelCoveredCount > 0 || topicsReport.some((t) => t.status === 'partial')
          ? ('partial' as const)
          : ('missing' as const),
      topics: topicsReport,
    };
  });

  return {
    totalLevels: COMPLETE_SYLLABUS_BLUEPRINT.length,
    totalTopics,
    coveredTopics,
    partialTopics,
    totalBlueprintTopics: totalTopics,
    completeTopics: coveredTopics,
    uncoveredTopics: totalTopics - coveredTopics,
    coveragePercent: totalTopics > 0 ? Math.round((coveredTopics / totalTopics) * 100) : 0,
    levels,
  };
}

export interface EnrichedGlossaryMeta {
  symbol: string;
  siUnit: string;
  formula: string;
  relatedComponents: string[];
}

export function enrichGlossaryTermMetadata(term: string, meaningEn: string): EnrichedGlossaryMeta {
  const lower = `${term} ${meaningEn}`.toLowerCase();
  if (lower.includes('ohm') || lower.includes('resistance') || lower.includes('resistor')) {
    return {
      symbol: 'R',
      siUnit: 'Ohm (Ω)',
      formula: 'R = V / I',
      relatedComponents: ['Fixed Film Resistor', 'Potentiometer', 'NTC Thermistor', 'Kelvin Shunt'],
    };
  }
  if (lower.includes('capacitance') || lower.includes('capacitor') || lower.includes('esr') || lower.includes('time constant')) {
    return {
      symbol: 'C / τ',
      siUnit: 'Farad (F) / Second (s)',
      formula: 'I = C · (dV/dt), τ = R · C',
      relatedComponents: ['MLCC Ceramic Capacitor', 'Aluminum Electrolytic', 'RC Filter Network'],
    };
  }
  if (lower.includes('induct') || lower.includes('flux') || lower.includes('transformer') || lower.includes('resonan')) {
    return {
      symbol: 'L / f₀',
      siUnit: 'Henry (H) / Hertz (Hz)',
      formula: 'V = L · (dI/dt), f₀ = 1 / (2π√(LC))',
      relatedComponents: ['Toroidal Inductor', 'Buck Power Inductor', 'Step-Down Transformer'],
    };
  }
  if (lower.includes('decibel') || lower.includes('gain') || lower.includes('cmrr') || lower.includes('snr')) {
    return {
      symbol: 'A_v / dB',
      siUnit: 'Decibel (dB, dimensionless ratio)',
      formula: 'A_p(dB) = 10·log₁₀(P_out/P_in), A_v(dB) = 20·log₁₀(V_out/V_in)',
      relatedComponents: ['Operational Amplifier', 'BJT Gain Stage', 'Attenuator Network'],
    };
  }
  if (lower.includes('voltage') || lower.includes('potential') || lower.includes('rms') || lower.includes('kvl')) {
    return {
      symbol: 'V',
      siUnit: 'Volt (V = J/C)',
      formula: 'V_rms = V_pk / √2, ∑V_loop = 0',
      relatedComponents: ['DC Bench Supply', 'Voltage Divider', 'LDO Regulator', 'DMM Voltmeter'],
    };
  }
  if (lower.includes('current') || lower.includes('kcl') || lower.includes('ampere')) {
    return {
      symbol: 'I',
      siUnit: 'Ampere (A = C/s)',
      formula: 'I = dQ/dt, ∑I_in = ∑I_out',
      relatedComponents: ['Current Sense Shunt', 'Hall-Effect Sensor', 'Series Fuse'],
    };
  }
  if (lower.includes('diode') || lower.includes('rectifier') || lower.includes('zener') || lower.includes('pn junction')) {
    return {
      symbol: 'I_D / V_F',
      siUnit: 'Ampere (A) / Volt (V)',
      formula: 'I_D = I_S · (e^(V_D / nV_T) - 1)',
      relatedComponents: ['1N4148 Silicon Diode', 'SS34 Schottky Diode', 'Zener Clamp', 'TVS Diode'],
    };
  }
  if (lower.includes('mosfet') || lower.includes('bjt') || lower.includes('transistor') || lower.includes('igbt')) {
    return {
      symbol: 'I_C / I_D / R_DS(on)',
      siUnit: 'Ampere (A) / Milliohm (mΩ)',
      formula: 'I_C = β·I_B, P_cond = I_D² · R_DS(on)',
      relatedComponents: ['NPN 2N2222 BJT', 'Logic-Level N-MOSFET', 'Half-Bridge Gate Driver'],
    };
  }
  if (lower.includes('binary') || lower.includes('boolean') || lower.includes('karnaugh') || lower.includes('flip-flop') || lower.includes('setup') || lower.includes('clock')) {
    return {
      symbol: 'Q / f_clk',
      siUnit: 'Logic State (0/1) / Hertz (Hz)',
      formula: 'T_clk ≥ t_cq + t_logic + t_setup',
      relatedComponents: ['74HC00 NAND Gate', 'D Flip-Flop Register', 'ALU Adder'],
    };
  }
  if (lower.includes('buck') || lower.includes('boost') || lower.includes('smps') || lower.includes('ldo') || lower.includes('thermal')) {
    return {
      symbol: 'η / D / T_J',
      siUnit: 'Percent (%) / °C/W',
      formula: 'V_out = D · V_in (Buck), T_J = T_A + P_D · θ_JA',
      relatedComponents: ['Synchronous Buck IC', 'LDO Voltage Regulator', 'Extruded Heatsink'],
    };
  }
  if (lower.includes('pcb') || lower.includes('trace') || lower.includes('impedance') || lower.includes('solder') || lower.includes('kelvin')) {
    return {
      symbol: 'Z₀ / R_trace',
      siUnit: 'Ohm (Ω) / Milliohm (mΩ)',
      formula: 'R = ρ · L / (W · t), Z₀ ≈ 87/√(ε_r+1.41) · ln(5.98H/(0.8W+T))',
      relatedComponents: ['4-Layer FR-4 Stackup', '0402 Decoupling MLCC', '4-Wire Kelvin Probe'],
    };
  }
  return {
    symbol: 'λ / H(s)',
    siUnit: 'SI Standard Engineering Unit',
    formula: 'y(t) = H{x(t)}',
    relatedComponents: ['Embedded Microcontroller', 'Precision Instrumentation Stage'],
  };
}
