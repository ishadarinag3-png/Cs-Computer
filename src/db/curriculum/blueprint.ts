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
