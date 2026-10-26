import { SeedCourse } from './types.ts';

export const LEVEL_9_COURSE: SeedCourse = {
  slug: 'level-9-pcb-design-and-engineering-workflow',
  levelNumber: 9,
  titleEn: 'Level 9: PCB Design & Engineering Workflow',
  titlePa: 'ਲੈਵਲ 9: PCB ਡਿਜ਼ਾਈਨ ਅਤੇ ਇੰਜੀਨੀਅਰਿੰਗ ਕਾਰਜਪ੍ਰਣਾਲੀ (PCB Design)',
  descriptionEn:
    'Schematic capture, PCB layout, IPC-2152 trace sizing, layer stackups, unbroken ground planes, 50Ω impedance matching, DFM/DFA, Gerber RS-274X, SMT reflow profiles, and BGA inspection.',
  descriptionPa:
    'ਸਕੀਮੈਟਿਕ ਡਿਜ਼ਾਈਨ, PCB ਲੇਆਉਟ, ਟਰੇਸ ਮੋਟਾਈ, ਗਰਾਊਂਡ ਪਲੇਨ, 50Ω ਇੰਪੀਡੈਂਸ, ਡੀਕਪਲਿੰਗ ਕੈਪਸੀਟਰ, DFM ਨਿਯਮ, ਗਰਬਰ ਫਾਈਲਾਂ (Gerbers), SMT ਸੋਲਡਰਿੰਗ ਅਤੇ ਰੀਵਰਕ।',
  category: 'core-electronics',
  estimatedHours: 20,
  modules: [
    {
      orderIndex: 1,
      titleEn: 'Schematic Capture, High-Speed Layout, Stackups & Signal Integrity',
      titlePa: 'ਸਕੀਮੈਟਿਕ, ਹਾਈ-ਸਪੀਡ ਲੇਆਉਟ, ਸਟੈਕਅੱਪ ਅਤੇ ਸਿਗਨਲ ਇੰਟੈਗ੍ਰਿਟੀ',
      summaryEn:
        'Schematic best practices, IPC-2152 trace width calculations, 4-layer stackups (SIG-GND-PWR-SIG), continuous ground return paths, decoupling loop inductance, and 50Ω transmission line routing.',
      summaryPa:
        'ਸਕੀਮੈਟਿਕ ਨਿਯਮ, ਕਰੰਟ ਅਨੁਸਾਰ ਟਰੇਸ ਦੀ ਚੌੜਾਈ, 4-ਲੇਅਰ ਸਟੈਕਅੱਪ, ਗਰਾਊਂਡ ਪਲੇਨ ਦੀ ਨਿਰੰਤਰਤਾ, ਡੀਕਪਲਿੰਗ ਲੂਪ, ਅਤੇ 50 ਓਹਮ ਇੰਪੀਡੈਂਸ ਕੰਟਰੋਲ।',
      lessons: [
        {
          slug: 'pcb-schematic-layout-stackup-decoupling',
          orderIndex: 1,
          titleEn: '9.1 Schematics, Trace Widths, 4-Layer Stackups, Ground Planes & Decoupling',
          titlePa: '9.1 ਸਕੀਮੈਟਿਕ, ਟਰੇਸ ਮੋਟਾਈ, 4-ਲੇਅਰ ਸਟੈਕਅੱਪ, ਗਰਾਊਂਡ ਪਲੇਨ ਅਤੇ ਡੀਕਪਲਿੰਗ',
          objectivesJson: [
            'Create standardized schematics with net labels, hierarchical blocks, and clear power-ground decoupled topologies',
            'Calculate trace width for DC and high-current traces using IPC-2152 standards for given allowable temperature rises',
            'Design multi-layer PCB stackups with solid unbroken ground reference planes to minimize electromagnetic radiation (EMI)',
            'Place and route high-frequency decoupling capacitors with minimal loop inductance directly adjacent to IC power pins',
            'Calculate microstrip trace dimensions for controlled 50 Ω single-ended and 100 Ω differential impedance',
          ],
          prerequisitesJson: ['Level 0: Mathematics and Physics for Electronics (Electromagnetic fields and wave propagation)'],
          childAnalogyEn:
            'Think of building a multi-lane highway in Punjab! The schematic is the architect’s blueprint plan. The PCB layout is the physical road paved with copper asphalt. If you pave a narrow 1-lane village path for 50 heavy sugarcane trucks, the road will buckle and melt under heat (trace burning)! The solid Ground Plane is like the earth foundation under the road: every car driving forward needs the earth beneath it to support its return trip!',
          childAnalogyPa:
            'ਜੀ.ਟੀ. ਰੋਡ ਹਾਈਵੇ ਬਣਾਉਣ ਦੀ ਕਲਪਨਾ ਕਰੋ! ਸਕੀਮੈਟਿਕ ਨਕਸ਼ਾ ਹੈ ਅਤੇ PCB ਅਸਲ ਸੜਕ ਹੈ ਜੋ ਤਾਂਬੇ (Copper) ਨਾਲ ਬਣੀ ਹੈ। ਜੇਕਰ 10 ਵੱਡੇ ਟਰੱਕਾਂ ਵਾਲੇ ਕਰੰਟ ਲਈ ਤੁਸੀਂ ਪਤਲੀ ਪਗਡੰਡੀ ਵਰਗੀ ਤਾਰ ਪਾਓਗੇ, ਤਾਂ ਉਹ ਗਰਮੀ ਨਾਲ ਸੜ ਕੇ ਉੱਡ ਜਾਵੇਗੀ (ਟਰੇਸ ਬਰਨ)! ਹੇਠਲਾ ਗਰਾਊਂਡ ਪਲੇਨ (Ground Plane) ਧਰਤੀ ਦੀ ਪੱਕੀ ਨੀਂਹ ਵਾਂਗ ਹੈ: ਜਿੰਨੀ ਸੜਕ ਉੱਪਰੋਂ ਗੱਡੀ ਜਾਂਦੀ ਹੈ, ਓਨੀ ਹੀ ਮਜ਼ਬੂਤ ਨੀਂਹ ਹੇਠਾਂ ਵਾਪਸੀ ਦੇ ਰਸਤੇ ਲਈ ਚਾਹੀਦੀ ਹੈ!',
          technicalExplanationEn:
            'Printed Circuit Board engineering transforms abstract electronic schematics into manufacturable, high-yield physical hardware:\n\n1. IPC-2152 Trace Width Calculation:\nTrace cross-sectional area A depends on current I and allowable temperature rise ΔT:\n• Internal Traces: A = (I / [0.024 * ΔT^0.44])^(1 / 0.725) (in mil^2)\n• External Traces (better air convection cooling): A = (I / [0.048 * ΔT^0.44])^(1 / 0.725)\n• For 1 oz copper (thickness t = 1.37 mils = 35 µm), Width W = Area / t.\n\n2. PCB Layer Stackups & Unbroken Ground Planes:\n• Poor 2-Layer Board: Traces routed haphazardly on both sides cut the ground return path into disconnected islands, causing massive loop antenna radiation (failing EMC compliance).\n• Professional 4-Layer Stackup (Top-to-Bottom):\n  - Layer 1 (Top): High-speed signals, component pads\n  - Layer 2 (Inner 1): Solid, continuous GROUND Plane (zero slots or splits)\n  - Layer 3 (Inner 2): Power planes and secondary non-critical routing\n  - Layer 4 (Bottom): General routing and ground pour\n• High-frequency return current flows directly underneath the signal trace on the reference plane (path of least inductance), not least resistance.\n\n3. Decoupling Capacitor Placement & Loop Inductance:\n• Fast switching logic demands nanosecond current surges (di/dt up to 10^9 A/s).\n• Parasitic loop inductance L_loop produces dangerous rail collapse voltage drops: ΔV = L * (di / dt).\n• Rule: Place 100 nF ceramic capacitors directly at the IC VDD/GND pin pair with wide, short traces and vias placed directly to ground planes (minimizing enclosed loop area).\n\n4. Controlled Impedance (50 Ω Microstrip):\n• Z_0 ≈ [87 / √(ε_r + 1.41)] * ln[5.98 * h / (0.8 * w + t)]\n• On standard FR-4 (ε_r ≈ 4.3) with dielectric height h = 0.2 mm to ground, a 50 Ω trace width w is typically ~0.35 mm.',
          technicalExplanationPa:
            'PCB ਡਿਜ਼ਾਈਨ ਦਾ ਵਿਗਿਆਨ ਅਤੇ ਸਿਗਨਲ ਨਿਯਮ:\n\n1. ਟਰੇਸ ਚੌੜਾਈ (Trace Width):\nਤਾਂਬੇ ਦੀ ਮੋਟਾਈ ਆਮ ਤੌਰ ਤੇ 1 oz (35 ਮਾਈਕ੍ਰੋਮੀਟਰ) ਹੁੰਦੀ ਹੈ। 1 ਐਂਪੀਅਰ ਕਰੰਟ ਲਈ ਬਾਹਰੀ ਪਰਤ ਉੱਤੇ ਘੱਟੋ-ਘੱਟ 0.3 ਮਿਲੀਮੀਟਰ ਚੌੜੀ ਤਾਰ ਚਾਹੀਦੀ ਹੈ। 3 ਐਂਪੀਅਰ ਲਈ ਘੱਟੋ-ਘੱਟ 1.2 ਮਿਲੀਮੀਟਰ ਚੌੜੀ ਤਾਰ ਜ਼ਰੂਰੀ ਹੈ ਤਾਂ ਜੋ ਤਾਰ ਗਰਮ ਨਾ ਹੋਵੇ।\n\n2. ਗਰਾਊਂਡ ਪਲੇਨ (Ground Plane):\n4-ਲੇਅਰ ਬੋਰਡ ਵਿੱਚ ਦੂਜੀ ਪਰਤ ਪੂਰੀ ਤਰ੍ਹਾਂ ਤਾਂਬੇ ਦੀ ਜ਼ਮੀਨ (Solid Ground) ਹੁੰਦੀ ਹੈ। ਹਾਈ ਸਪੀਡ ਕਰੰਟ ਹਮੇਸ਼ਾ ਤਾਰ ਦੇ ਬਿਲਕੁਲ ਹੇਠਾਂ ਗਰਾਊਂਡ ਵਿੱਚੋਂ ਵਾਪਸ ਮੁੜਦਾ ਹੈ (ਘੱਟੋ-ਘੱਟ ਇੰਡਕਟੈਂਸ ਦਾ ਰਸਤਾ)। ਇਸ ਵਿੱਚ ਕੋਈ ਕੱਟ ਨਹੀਂ ਹੋਣਾ ਚਾਹੀਦਾ!\n\n3. ਡੀਕਪਲਿੰਗ ਕੈਪਸੀਟਰ (Decoupling):\n100 nF ਦੇ ਕੈਪਸੀਟਰ ਨੂੰ ਹਮੇਸ਼ਾ ਚਿੱਪ ਦੀ ਪਾਵਰ ਪਿੰਨ ਦੇ ਬਿਲਕੁਲ ਕੋਲ (1-2 ਮਿਲੀਮੀਟਰ ਦੀ ਦੂਰੀ ਤੇ) ਲਗਾਉਣਾ ਪੈਂਦਾ ਹੈ ਤਾਂ ਜੋ ਵੋਲਟੇਜ ਡਿੱਗੇ ਨਾ।\n\n4. 50 ਓਹਮ ਇੰਪੀਡੈਂਸ:\nਵਾਈ-ਫਾਈ ਐਂਟੀਨਾ ਅਤੇ USB ਤਾਰਾਂ ਨੂੰ ਠੀਕ 50 Ω ਦੀ ਮਿਲੀਮੀਟਰ ਮਿਣੀ ਹੋਈ ਚੌੜਾਈ ਨਾਲ ਰੂਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਤਾਂ ਜੋ ਰੇਡੀਓ ਸਿਗਨਲ ਰਿਫਲੈਕਟ ਨਾ ਹੋਵੇ।',
          practicalExampleEn:
            'Routing a 2.4 GHz Wi-Fi antenna trace from an ESP32 to an SMA connector on a 4-layer FR-4 board (dielectric height h = 0.2 mm over solid ground): If the engineer routes a random thin trace of 0.15 mm width, its impedance will be ~75 Ω. The resulting 25 Ω impedance mismatch causes 30% of the RF power to bounce backward, drastically reducing Wi-Fi range. Calculating the exact microstrip width of 0.36 mm creates a matched 50.0 Ω transmission line, maximizing broadcast range.',
          practicalExamplePa:
            'ESP32 ਤੋਂ ਵਾਈ-ਫਾਈ ਐਂਟੀਨਾ ਦੀ ਤਾਰ ਕੱਢਣਾ: ਜੇਕਰ ਕੋਈ ਅੰਦਾਜ਼ੇ ਨਾਲ ਪਤਲੀ ਤਾਰ (0.15 mm) ਪਾ ਦੇਵੇ, ਤਾਂ ਉਸਦੀ ਰੁਕਾਵਟ 75 ਓਹਮ ਹੋ ਜਾਵੇਗੀ। 50 ਓਹਮ ਦੇ ਐਂਟੀਨਾ ਨਾਲ ਮੇਲ ਨਾ ਖਾਣ ਕਾਰਨ 30% ਸਿਗਨਲ ਵਾਪਸ ਮੁੜ ਜਾਵੇਗਾ ਅਤੇ ਵਾਈ-ਫਾਈ ਦੀ ਰੇਂਜ ਅੱਧੀ ਰਹਿ ਜਾਵੇਗੀ। ਜਦੋਂ ਸਟੀਕ 0.36 mm ਚੌੜੀ ਟਰੇਸ ਪਾਈ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਪੂਰੀ 50 Ω ਇੰਪੀਡੈਂਸ ਮਿਲਦੀ ਹੈ ਅਤੇ ਵਾਈ-ਫਾਈ ਪੂਰੇ ਘਰ ਵਿੱਚ ਤੇਜ਼ ਚਲਦਾ ਹੈ।',
          codeDemo: `// TypeScript: IPC-2152 Trace Width & Microstrip 50-Ohm Calculator
export function calcIpcExternalTraceWidthMils(currentAmps: number, tempRiseCelsius = 10, copperOz = 1) {
  // IPC-2152 external conductor approximation
  const copperThicknessMils = copperOz * 1.378; // 1 oz = 1.378 mils = 35 um
  const areaMilsSq = Math.pow(currentAmps / (0.048 * Math.pow(tempRiseCelsius, 0.44)), 1 / 0.725);
  const widthMils = areaMilsSq / copperThicknessMils;
  const widthMm = widthMils * 0.0254;

  return { areaMilsSq, widthMils, widthMm };
}

export function calcMicrostripImpedance(traceWidthMm: number, dielectricHeightMm: number, traceThicknessMm = 0.035, er = 4.3) {
  const w = traceWidthMm;
  const h = dielectricHeightMm;
  const t = traceThicknessMm;

  // Standard IPC-2141 microstrip impedance formula
  const z0 = (87 / Math.sqrt(er + 1.41)) * Math.log((5.98 * h) / (0.8 * w + t));
  return { characteristicImpedanceOhms: z0 };
}

// Verification: 3A current with 10C rise on 1 oz copper:
const trace = calcIpcExternalTraceWidthMils(3.0, 10, 1.0);
console.log('Required Trace Width:', trace.widthMm.toFixed(2), 'mm'); // ~1.15 mm
const rf = calcMicrostripImpedance(0.36, 0.20, 0.035, 4.3);
console.log('Microstrip Impedance:', rf.characteristicImpedanceOhms.toFixed(1), 'Ω'); // ~50.2 Ω`,
          misconceptionsJson: [
            {
              myth: 'High-frequency return current takes the shortest geometrical straight-line path back to the battery ground.',
              truthEn:
                'At DC, current follows the path of least resistance. However, at frequencies above a few hundred kilohertz, return current strictly follows the path of LEAST INDUCTANCE, which is directly underneath the signal trace on the reference plane.',
              truthPa:
                'ਹਾਈ ਸਪੀਡ AC ਕਰੰਟ ਸਿੱਧਾ ਛੋਟਾ ਰਸਤਾ ਨਹੀਂ ਲੈਂਦਾ, ਸਗੋਂ ਗਰਾਊਂਡ ਪਲੇਨ ਵਿੱਚ ਤਾਰ ਦੇ ਬਿਲਕੁਲ ਹੇਠਾਂ-ਹੇਠਾਂ ਵਾਪਸ ਜਾਂਦਾ ਹੈ ਤਾਂ ਜੋ ਚੁੰਬਕੀ ਲੂਪ ਘੱਟੋ-ਘੱਟ ਰਹੇ।',
            },
            {
              myth: 'Splitting the ground plane into separate analog and digital islands with narrow bridges is always best for mixed-signal boards.',
              truthEn:
                'Split ground planes are a relic of low-speed audio design. In modern mixed-signal boards, traces accidentally crossing over a ground split radiate massive EMI and destroy signal integrity. Modern high-speed design mandates a single, continuous, unbroken ground plane with components partitioned spatially.',
              truthPa:
                'ਗਰਾਊਂਡ ਵਿੱਚ ਕੱਟ ਲਗਾਉਣਾ ਖ਼ਤਰਨਾਕ ਹੁੰਦਾ ਹੈ। ਜੇਕਰ ਕੋਈ ਤਾਰ ਕੱਟ ਦੇ ਉੱਪਰੋਂ ਲੰਘ ਗਈ ਤਾਂ ਉਹ ਐਂਟੀਨਾ ਵਾਂਗ ਬਹੁਤ ਸ਼ੋਰ ਫੈਲਾਵੇਗੀ। ਹਮੇਸ਼ਾ ਇੱਕੋ ਪੱਕਾ ਅਣਵੰਡਿਆ ਗਰਾਊਂਡ ਪਲੇਨ ਰੱਖਣਾ ਚਾਹੀਦਾ ਹੈ।',
            },
            {
              myth: 'Right-angle (90-degree) trace corners cause reflections that ruin signals at ordinary speeds like 50 MHz.',
              truthEn:
                'The parasitic capacitance of a 90° corner is only ~0.01 pF, which is negligible below 10 GHz. However, 45-degree mitered corners or curves are universally used to prevent acid-trap etching defects during PCB fabrication and improve routing density.',
              truthPa:
                '90 ਡਿਗਰੀ ਦੇ ਮੋੜ ਨਾਲ 50 MHz ਉੱਤੇ ਕੋਈ ਸਿਗਨਲ ਖ਼ਰਾਬ ਨਹੀਂ ਹੁੰਦਾ, ਪਰ ਬੋਰਡ ਬਣਾਉਂਦੇ ਸਮੇਂ ਐਸਿਡ ਫਸਣ ਦੇ ਖ਼ਤਰੇ ਕਾਰਨ ਹਮੇਸ਼ਾ 45 ਡਿਗਰੀ ਦੇ ਮੋੜ ਵਰਤੇ ਜਾਂਦੇ ਹਨ।',
            },
          ],
          terminologyJson: [
            {
              term: 'Stackup',
              punjabi: 'ਸਟੈਕਅੱਪ (Stackup)',
              meaningEn: 'Layer arrangement of copper conductors and insulating dielectric prepreg/core inside a multi-layer PCB.',
              meaningPa: 'ਮਲਟੀਲੇਅਰ ਸਰਕਟ ਬੋਰਡ ਵਿੱਚ ਤਾਂਬੇ ਅਤੇ ਇਨਸੂਲੇਸ਼ਨ ਦੀਆਂ ਪਰਤਾਂ ਦੀ ਵਿਉਂਤ।',
            },
            {
              term: 'Microstrip',
              punjabi: 'ਮਾਈਕ੍ਰੋਸਟ੍ਰਿਪ ਟਰੇਸ',
              meaningEn: 'Transmission line conductor fabricated on an outer layer separated from a ground reference plane by a dielectric.',
              meaningPa: 'ਬਾਹਰੀ ਪਰਤ ਉੱਤੇ ਬਣੀ 50 ਓਹਮ ਕੰਟਰੋਲਡ ਇੰਪੀਡੈਂਸ ਵਾਲੀ ਹਾਈ-ਸਪੀਡ ਤਾਰ।',
            },
            {
              term: 'Characteristic Impedance (Z0)',
              punjabi: 'ਵਿਸ਼ੇਸ਼ ਇੰਪੀਡੈਂਸ (Z0)',
              meaningEn: 'Uniform ratio of voltage to current for a high-frequency wave traveling along an infinite transmission line (typically 50 Ω).',
              meaningPa: 'ਹਾਈ-ਫ੍ਰੀਕੁਐਂਸੀ ਤਾਰ ਵਿੱਚੋਂ ਲੰਘਦੇ ਸਿਗਨਲ ਵੱਲੋਂ ਮਹਿਸੂਸ ਕੀਤੀ ਜਾਣ ਵਾਲੀ ਸਥਿਰ ਰੁਕਾਵਟ (50 Ω)।',
            },
            {
              term: 'Decoupling Capacitor',
              punjabi: 'ਡੀਕਪਲਿੰਗ ਕੈਪਸੀਟਰ',
              meaningEn: 'Capacitor placed close to an IC power pin to provide localized instantaneous charge and bypass high-frequency rail noise.',
              meaningPa: 'ਚਿੱਪ ਦੀ ਪਾਵਰ ਪਿੰਨ ਕੋਲ ਲੱਗਾ ਕੈਪਸੀਟਰ ਜੋ ਵੋਲਟੇਜ ਨੂੰ ਸਥਿਰ ਰੱਖਦਾ ਹੈ ਅਤੇ ਸ਼ੋਰ ਰੋਕਦਾ ਹੈ।',
            },
            {
              term: 'Return Path',
              punjabi: 'ਵਾਪਸੀ ਦਾ ਰਸਤਾ (Return Path)',
              meaningEn: 'Continuous physical conductor or plane through which signal return current travels back to its source.',
              meaningPa: 'ਗਰਾਊਂਡ ਵਿੱਚੋਂ ਕਰੰਟ ਦੇ ਆਪਣੇ ਸੋਮੇ ਵੱਲ ਵਾਪਸ ਮੁੜਨ ਦਾ ਰਸਤਾ।',
            },
            {
              term: 'Vias',
              punjabi: 'ਵਾਇਆ (Via Hole)',
              meaningEn: 'Plated through-holes connecting electrical traces between different copper layers of a PCB.',
              meaningPa: 'ਬੋਰਡ ਵਿੱਚ ਤਾਂਬੇ ਨਾਲ ਪਲੇਟ ਕੀਤਾ ਛੋਟਾ ਮੋਰੀ ਜੋ ਇੱਕ ਪਰਤ ਨੂੰ ਦੂਜੀ ਪਰਤ ਨਾਲ ਜੋੜਦੀ ਹੈ।',
            },
          ],
          interactiveLabId: 'hardware-explorer',
          exercisePromptEn:
            'PCB Engineering Calculation: (1) An industrial stepper motor driver PCB carries 4.0 Amperes of DC current on an external 1 oz copper layer. Using IPC-2152 rules with a maximum allowable temperature rise of 15 °C, calculate the required trace width in millimeters. (2) Explain why routing a high-speed clock trace over a slot/hole in a ground plane causes severe electromagnetic interference.',
          exercisePromptPa:
            'PCB ਗਣਨਾ: (1) 4 ਐਂਪੀਅਰ ਮੋਟਰ ਕਰੰਟ ਲਈ 1 oz ਤਾਂਬੇ ਉੱਤੇ 15°C ਤਾਪਮਾਨ ਵਾਧੇ ਲਈ ਤਾਰ ਦੀ ਚੌੜਾਈ (ਮਿਲੀਮੀਟਰ) ਕੱਢੋ। (2) ਸਮਝਾਓ ਕਿ ਜੇਕਰ ਹਾਈ-ਸਪੀਡ ਕਲਾਕ ਤਾਰ ਗਰਾਊਂਡ ਪਲੇਨ ਦੇ ਕੱਟ/ਸਲਾਟ ਦੇ ਉੱਪਰੋਂ ਲੰਘੇ ਤਾਂ ਭਾਰੀ ਇਲੈਕਟ੍ਰੋਮੈਗਨੈਟਿਕ ਸ਼ੋਰ (EMI) ਕਿਉਂ ਪੈਦਾ ਹੁੰਦਾ ਹੈ।',
          summaryEn:
            'High-speed PCB layout is applied electromagnetic physics: unbroken ground planes provide low-inductance return paths, controlled 50 Ω microstrips eliminate reflections, and low-inductance decoupling capacitors maintain rock-solid power rails.',
          summaryPa:
            'ਹਾਈ-ਸਪੀਡ PCB ਲੇਆਉਟ ਅਸਲ ਵਿੱਚ ਭੌਤਿਕ ਵਿਗਿਆਨ ਹੈ: ਪੱਕਾ ਗਰਾਊਂਡ ਪਲੇਨ ਵਾਪਸੀ ਦਾ ਰਸਤਾ ਦਿੰਦਾ ਹੈ, 50 ਓਹਮ ਤਾਰਾਂ ਰਿਫਲੈਕਸ਼ਨ ਰੋਕਦੀਆਂ ਹਨ, ਅਤੇ ਡੀਕਪਲਿੰਗ ਕੈਪਸੀਟਰ ਪਾਵਰ ਸਪਲਾਈ ਨੂੰ ਬਿਲਕੁਲ ਸਾਫ਼ ਰੱਖਦੇ ਹਨ।',
          furtherReadingJson: [
            'High-Speed Digital Design: A Handbook of Black Magic by Howard Johnson & Martin Graham',
            'Right the First Time: A Practical Guide on High Speed PCB and System Design by Lee W. Ritchey',
            'Signal and Power Integrity - Simplified by Eric Bogatin',
          ],
          quiz: {
            titleEn: 'Level 9 Assessment: Schematics, Layout, Stackups & Signal Integrity',
            titlePa: 'ਲੈਵਲ 9 ਟੈਸਟ: ਸਕੀਮੈਟਿਕ, ਲੇਆਉਟ, ਸਟੈਕਅੱਪ ਅਤੇ ਸਿਗਨਲ ਇੰਟੈਗ੍ਰਿਟੀ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'High-Frequency Return Path',
                promptEn: 'In a multi-layer PCB, where does high-frequency signal return current flow on the reference ground plane?',
                promptPa: 'ਮਲਟੀਲੇਅਰ PCB ਵਿੱਚ ਹਾਈ-ਫ੍ਰੀਕੁਐਂਸੀ ਕਰੰਟ ਗਰਾਊਂਡ ਪਲੇਨ ਵਿੱਚੋਂ ਕਿੱਥੋਂ ਵਾਪਸ ਮੁੜਦਾ ਹੈ?',
                optionsJson: [
                  'Directly underneath the signal trace, following the path of minimum loop inductance',
                  'Along the shortest straight-line geometrical path of minimum DC resistance',
                  'Along the outer edge of the PCB perimeter',
                  'Through the mounting chassis screws',
                ],
                correctAnswer: 'Directly underneath the signal trace, following the path of minimum loop inductance',
                explanationEn:
                  'Above ~100 kHz, return current clusters directly beneath the signal trace to minimize the loop area and magnetic inductance.',
                explanationPa:
                  'ਤਾਰ ਦੇ ਬਿਲਕੁਲ ਹੇਠਾਂ, ਤਾਂ ਜੋ ਲੂਪ ਖੇਤਰਫਲ ਅਤੇ ਇੰਡਕਟੈਂਸ ਘੱਟੋ-ਘੱਟ ਰਹੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: '4-Layer Stackup',
                promptEn: 'What is the industry-standard layer order for a professional 4-layer PCB stackup to achieve maximum noise immunity?',
                promptPa: 'ਸਭ ਤੋਂ ਵਧੀਆ 4-ਲੇਅਰ PCB ਸਟੈਕਅੱਪ ਦੀਆਂ ਪਰਤਾਂ ਦਾ ਸਹੀ ਕ੍ਰਮ ਕੀ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'Layer 1: Signal, Layer 2: Ground, Layer 3: Power, Layer 4: Signal',
                  'Layer 1: Ground, Layer 2: Signal, Layer 3: Signal, Layer 4: Ground',
                  'Layer 1: Power, Layer 2: Ground, Layer 3: Ground, Layer 4: Power',
                  'Layer 1: Signal, Layer 2: Signal, Layer 3: Signal, Layer 4: Signal',
                ],
                correctAnswer: 'Layer 1: Signal, Layer 2: Ground, Layer 3: Power, Layer 4: Signal',
                explanationEn:
                  'SIG-GND-PWR-SIG places a continuous ground reference plane directly beneath Top layer high-speed signals, minimizing loop inductance and EMI.',
                explanationPa:
                  'ਸਿਗਨਲ - ਗਰਾਊਂਡ - ਪਾਵਰ - ਸਿਗਨਲ (ਸਿਗਨਲ ਦੇ ਬਿਲਕੁਲ ਹੇਠਾਂ ਗਰਾਊਂਡ ਹੋਣਾ ਸਭ ਤੋਂ ਵਧੀਆ ਹੈ)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Copper Thickness',
                promptEn: 'What is the physical thickness in micrometers (µm) of standard "1 oz" copper weight on a PCB?',
                promptPa: 'ਸਟੈਂਡਰਡ "1 oz" ਤਾਂਬੇ ਦੀ ਮੋਟਾਈ ਕਿੰਨੇ ਮਾਈਕ੍ਰੋਮੀਟਰ (µm) ਹੁੰਦੀ ਹੈ?',
                optionsJson: ['Approximately 35 µm (1.37 mils)', '70 µm', '18 µm', '100 µm'],
                correctAnswer: 'Approximately 35 µm (1.37 mils)',
                explanationEn:
                  '1 ounce of copper rolled over one square foot has a thickness of approximately 34.8 µm (typically specified as 35 µm or 1.37 mils).',
                explanationPa:
                  '1 oz ਤਾਂਬਾ ਲਗਭਗ 35 ਮਾਈਕ੍ਰੋਮੀਟਰ (35 µm) ਮੋਟਾ ਹੁੰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Decoupling Placement',
                promptEn: 'Where should decoupling capacitors be placed during PCB layout for maximum effectiveness?',
                promptPa: 'ਵੱਧ ਤੋਂ ਵੱਧ ਅਸਰ ਲਈ ਡੀਕਪਲਿੰਗ ਕੈਪਸੀਟਰਾਂ ਨੂੰ ਬੋਰਡ ਉੱਤੇ ਕਿੱਥੇ ਲਗਾਉਣਾ ਚਾਹੀਦਾ ਹੈ?',
                optionsJson: [
                  'As close as physically possible to the IC power and ground pins, with short wide traces to minimize loop inductance',
                  'Near the main battery connector across the board',
                  'Underneath the mounting holes',
                  'Near the crystal oscillator',
                ],
                correctAnswer: 'As close as physically possible to the IC power and ground pins, with short wide traces to minimize loop inductance',
                explanationEn:
                  'Long traces add parasitic inductance (1 nH/mm) which limits high-frequency transient current delivery. Proximity is critical.',
                explanationPa:
                  'ਚਿੱਪ ਦੀਆਂ ਪਾਵਰ ਪਿੰਨਾਂ ਦੇ ਬਿਲਕੁਲ ਕੋਲ (1-2 ਮਿਲੀਮੀਟਰ ਦੀ ਦੂਰੀ ਤੇ) ਤਾਂ ਜੋ ਤਾਰ ਦੀ ਇੰਡਕਟੈਂਸ ਘੱਟ ਰਹੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Controlled Impedance',
                promptEn: 'What standard characteristic impedance is used for single-ended RF antenna traces and high-speed transmission lines?',
                promptPa: 'ਸਿੰਗਲ-ਐਂਡਡ RF ਐਂਟੀਨਾ ਅਤੇ ਹਾਈ-ਸਪੀਡ ਤਾਰਾਂ ਲਈ ਵਿਸ਼ਵਵਿਆਪੀ ਇੰਪੀਡੈਂਸ ਕਿੰਨੀ ਹੁੰਦੀ ਹੈ?',
                optionsJson: ['50 Ω', '75 Ω', '100 Ω', '10 Ω'],
                correctAnswer: '50 Ω',
                explanationEn:
                  '50 Ω is the international compromise between maximum RF power handling and minimum signal attenuation in coaxial and PCB transmission lines.',
                explanationPa:
                  '50 ਓਹਮ (50 Ω) ਅੰਤਰਰਾਸ਼ਟਰੀ ਮਿਆਰੀ ਇੰਪੀਡੈਂਸ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Ground Split Penalty',
                promptEn: 'What serious problem occurs when a high-speed digital trace crosses directly over a cut or split in a ground reference plane?',
                promptPa: 'ਜਦੋਂ ਹਾਈ-ਸਪੀਡ ਤਾਰ ਗਰਾਊਂਡ ਵਿੱਚ ਪਾਏ ਗਏ ਕੱਟ ਦੇ ਉੱਪਰੋਂ ਲੰਘਦੀ ਹੈ ਤਾਂ ਕੀ ਨੁਕਸਾਨ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'The return current must detour around the slot, creating a massive current loop that radiates intense EMI and causes signal distortion',
                  'The trace resistance drops to zero',
                  'The PCB immediately catches fire',
                  'The clock speed doubles',
                ],
                correctAnswer: 'The return current must detour around the slot, creating a massive current loop that radiates intense EMI and causes signal distortion',
                explanationEn:
                  'A return current cannot jump across an air slot in the copper. It detours around the gap, creating a large magnetic dipole loop antenna that radiates noise and fails EMC tests.',
                explanationPa:
                  'ਕਰੰਟ ਨੂੰ ਕੱਟ ਦੇ ਦੁਆਲੇ ਘੁੰਮ ਕੇ ਜਾਣਾ ਪੈਂਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਵੱਡਾ ਲੂਪ ਬਣ ਜਾਂਦਾ ਹੈ ਅਤੇ ਬੋਰਡ ਐਂਟੀਨਾ ਵਾਂਗ ਸ਼ੋਰ ਫੈਲਾਉਣ ਲੱਗ ਪੈਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Mitered Corners',
                promptEn: 'Why are 45-degree mitered corners or curved corners preferred over 90-degree sharp corners in PCB routing?',
                promptPa: 'PCB ਵਿੱਚ 90 ਡਿਗਰੀ ਦੇ ਤਿੱਖੇ ਮੋੜ ਦੀ ਥਾਂ 45 ਡਿਗਰੀ ਦੇ ਮੋੜ ਕਿਉਂ ਪਾਏ ਜਾਂਦੇ ਹਨ?',
                optionsJson: [
                  'To prevent etching chemicals from becoming trapped in sharp inside corners ("acid traps") and maintain uniform trace impedance',
                  'Because 90-degree corners cannot conduct DC current',
                  'To reduce the weight of the PCB',
                  'It is required by the computer monitor',
                ],
                correctAnswer: 'To prevent etching chemicals from becoming trapped in sharp inside corners ("acid traps") and maintain uniform trace impedance',
                explanationEn:
                  'Sharp 90° corners can trap etching acid during manufacturing, over-etching the copper, and cause a slight localized increase in trace width/capacitance.',
                explanationPa:
                  'ਕੈਮੀਕਲ ਫਸਣ (Acid Traps) ਤੋਂ ਬਚਣ ਲਈ ਅਤੇ ਤਾਰ ਦੀ ਮੋਟਾਈ ਨੂੰ ਇੱਕਸਾਰ ਰੱਖਣ ਲਈ 45 ਡਿਗਰੀ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Differential Pairs',
                promptEn: 'What is the target differential characteristic impedance for high-speed USB 2.0 (D+ / D-) differential pairs?',
                promptPa: 'USB 2.0 (D+ ਅਤੇ D-) ਡਿਫਰੈਂਸ਼ੀਅਲ ਜੋੜੇ ਦੀ ਟਾਰਗਿਟ ਇੰਪੀਡੈਂਸ ਕਿੰਨੀ ਹੁੰਦੀ ਹੈ?',
                optionsJson: ['90 Ω differential (±10%)', '50 Ω differential', '120 Ω differential', '300 Ω differential'],
                correctAnswer: '90 Ω differential (±10%)',
                explanationEn:
                  'USB 2.0 specifies a 90 Ω differential impedance (45 Ω single-ended per line). Ethernet specifies 100 Ω, and CAN specifies 120 Ω.',
                explanationPa:
                  'USB 2.0 ਲਈ 90 ਓਹਮ ਡਿਫਰੈਂਸ਼ੀਅਲ ਇੰਪੀਡੈਂਸ ਹੁੰਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Thermal Relief',
                promptEn: 'Why are component through-hole pins connecting to large ground or power copper planes routed with "Thermal Relief" spokes (wagon-wheel pattern)?',
                promptPa: 'ਵੱਡੇ ਤਾਂਬੇ ਦੇ ਗਰਾਊਂਡ ਪਲੇਨ ਨਾਲ ਜੁੜਨ ਵਾਲੇ ਪਿੰਨਾਂ ਉੱਤੇ "Thermal Relief" (ਪਹੀਏ ਵਰਗਾ ਕੱਟ) ਕਿਉਂ ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ?',
                optionsJson: [
                  'To prevent the massive copper plane from sinking away soldering heat, allowing reliable solder flow without cold joints',
                  'To cool the component down during operation',
                  'To limit the current carrying capacity',
                  'To make the PCB flexible',
                ],
                correctAnswer: 'To prevent the massive copper plane from sinking away soldering heat, allowing reliable solder flow without cold joints',
                explanationEn:
                  'A solid copper plane conducts heat away so fast that soldering irons cannot melt the solder properly. Thin thermal relief spokes restrict heat conduction during assembly.',
                explanationPa:
                  'ਵੱਡਾ ਤਾਂਬਾ ਕਾਵੀਏ (Soldering Iron) ਦੀ ਸਾਰੀ ਗਰਮੀ ਚੂਸ ਲੈਂਦਾ ਹੈ। ਥਰਮਲ ਰਿਲੀਫ ਨਾਲ ਸੋਲਡਰਿੰਗ ਆਸਾਨੀ ਨਾਲ ਪਿਘਲ ਜਾਂਦੀ ਹੈ ਅਤੇ ਜੋੜ ਕੱਚਾ ਨਹੀਂ ਰਹਿੰਦਾ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Trace Current IPC',
                promptEn: 'According to IPC-2152, if an external trace must carry 2 Amperes with a maximum 10°C temperature rise on 1 oz copper, approximately what trace width is needed?',
                promptPa: '1 oz ਤਾਂਬੇ ਉੱਤੇ 2 ਐਂਪੀਅਰ ਕਰੰਟ ਲਈ ਲਗਭਗ ਕਿੰਨੀ ਚੌੜੀ ਤਾਰ (Trace Width) ਚਾਹੀਦੀ ਹੈ?',
                optionsJson: ['0.7 mm to 0.8 mm (≈ 30 mils)', '0.1 mm (4 mils)', '5.0 mm (200 mils)', '0.01 mm'],
                correctAnswer: '0.7 mm to 0.8 mm (≈ 30 mils)',
                explanationEn:
                  'For 2 Amperes on external 1 oz copper with a 10°C rise, IPC-2152 requires roughly 30 mils (~0.76 mm) trace width.',
                explanationPa:
                  '2 ਐਂਪੀਅਰ ਲਈ ਲਗਭਗ 0.75 mm (30 mils) ਚੌੜੀ ਤਾਰ ਚਾਹੀਦੀ ਹੈ।',
              },
            ],
          },
        },
        {
          slug: 'pcb-dfm-gerbers-soldering-rework',
          orderIndex: 2,
          titleEn: '9.2 DFM/DFA, Gerber RS-274X, SMT Reflow Profiles & BGA Inspection',
          titlePa: '9.2 DFM/DFA, ਗਰਬਰ ਫਾਈਲਾਂ (Gerbers), SMT ਸੋਲਡਰਿੰਗ ਅਤੇ BGA ਰੀਵਰਕ',
          objectivesJson: [
            'Apply Design for Manufacturing (DFM) rules: annular rings, solder mask slivers, drill aspect ratios, and copper clearance to board edge',
            'Generate manufacturing packages: Gerber RS-274X layer files, Excellon NC Drill files, Pick-and-Place (CPL), and Bill of Materials (BOM)',
            'Analyze SMT lead-free SAC305 reflow soldering temperature profiles: Preheat, Soak, Reflow Peak (245°C), and Time Above Liquidus (TAL)',
            'Identify soldering defects (tombstoning, bridging, cold joints, voiding) and inspect hidden BGA solder balls via X-Ray inspection',
            'Master SMD component rework using hot-air rework stations, flux chemistry, and desoldering wick without damaging delicate PCB pads',
          ],
          prerequisitesJson: ['9.1 Schematics, Trace Widths, 4-Layer Stackups, Ground Planes & Decoupling'],
          childAnalogyEn:
            'Think of baking cookies in a bakery! The Gerber files are the cookie-cutter shapes sent to the kitchen. The solder stencil is like dusting powdered sugar through a brass mesh screen directly onto each cookie center! The reflow oven is a commercial conveyor oven: the cookies preheat gently, bake at peak heat for 45 seconds, and cool down crispy! If you heat them too fast, they puff up on one side like a tombstone!',
          childAnalogyPa:
            'ਬਿਸਕੁਟਾਂ ਦੀ ਬੇਕਰੀ ਦੀ ਕਲਪਨਾ ਕਰੋ! ਗਰਬਰ ਫਾਈਲਾਂ ਬਿਸਕੁਟ ਕੱਟਣ ਵਾਲੇ ਸਾਂਚੇ (Dye) ਹਨ। ਸੋਲਡਰ ਸਟੈਂਸਿਲ ਤਾਂਬੇ ਦੀਆਂ ਪਿੰਨਾਂ ਉੱਤੇ ਸੋਲਡਰ ਪੇਸਟ ਛਾਪਣ ਵਾਲੀ ਜਾਲੀ ਹੈ! ਰੀਫਲੋ ਓਵਨ ਕਨਵੇਅਰ ਬੈਲਟ ਵਾਲੀ ਵੱਡੀ ਭੱਠੀ ਹੈ: ਬੋਰਡ ਹੌਲੀ-ਹੌਲੀ ਗਰਮ ਹੁੰਦਾ ਹੈ, 45 ਸਕਿੰਟਾਂ ਲਈ 245°C ਉੱਤੇ ਸੋਲਡਰ ਪਿਘਲਦਾ ਹੈ ਅਤੇ ਠੰਢਾ ਹੋ ਕੇ ਪੱਕਾ ਜੁੜ ਜਾਂਦਾ ਹੈ! ਜੇਕਰ ਇੱਕ ਪਾਸਾ ਪਹਿਲਾਂ ਪਿਘਲ ਜਾਵੇ, ਤਾਂ ਰਜਿਸਟਰ ਕਬਰ ਦੇ ਪੱਥਰ ਵਾਂਗ ਖੜ੍ਹਾ ਹੋ ਜਾਂਦਾ ਹੈ (Tombstoning)!',
          technicalExplanationEn:
            'PCB production transitions design artwork into physical assemblies through standardized industrial manufacturing steps:\n\n1. Design for Manufacturing (DFM) Guidelines:\n• Minimum Trace / Space: Standard low-cost fab is 6/6 mils (0.15 mm); advanced fab is 3/3 mils (0.075 mm).\n• Annular Ring: Minimum copper ring remaining around a drilled hole: Annular Ring = (Pad Diameter - Drill Diameter) / 2 ≥ 0.125 mm (5 mils). Violations cause breakout cracks.\n• Aspect Ratio: Ratio of board thickness to smallest drill diameter: Aspect Ratio = Thickness / Drill_dia ≤ 8:1 (or 10:1) to ensure reliable chemical copper plating inside vias.\n• Solder Mask Dam / Sliver: Minimum green solder mask bridge between adjacent SMD pads (≥ 0.1 mm) to prevent solder bridging shorts.\n\n2. Fabrication & Assembly File Formats:\n• Gerber RS-274X: Vector format defining copper layers, solder mask, silkscreen text, and solder paste apertures.\n• Excellon Drill File: NC coordinates and tool sizes for all plated and non-plated drill holes.\n• Centroid / Pick-and-Place (CPL): X-Y coordinates, rotation angle (0°-360°), and board side (Top/Bottom) for automated robotic chip placement.\n• Bill of Materials (BOM): Exact Manufacturer Part Numbers (MPN), descriptions, references, and footprints.\n\n3. SMT Lead-Free Reflow Soldering Profile (SAC305: 96.5% Sn, 3.0% Ag, 0.5% Cu):\n• Zone 1: Preheat (Ramp 1-3 °C/s up to 150°C) – Evaporates solvents without thermal shock.\n• Zone 2: Soak (150°C to 200°C for 60-120s) – Activates chemical flux to strip surface oxides and equalizes board thermal mass.\n• Zone 3: Reflow Peak (235°C to 245°C) – Solder melts (liquidus at 217°C). Time Above Liquidus (TAL) = 45 to 75 seconds. Forms intermetallic compound (IMC: Cu6Sn5) bond layer.\n• Zone 4: Cooling (Controlled ramp < 4 °C/s) – Freezes solder into fine, strong crystalline grain structure.\n\n4. Common Assembly Defects & Inspection:\n• Tombstoning: Unbalanced thermal mass or paste volume causes surface tension to pull a small 0402 chip vertically upright.\n• Solder Bridging: Excess paste or inadequate mask dam shorts adjacent fine-pitch pins.\n• BGA Inspection: Ball Grid Array joints hide beneath the chip body; inspected via 2D/3D X-Ray to detect voids, bridging, or head-in-pillow defects.',
          technicalExplanationPa:
            'PCB ਫੈਬ੍ਰੀਕੇਸ਼ਨ ਅਤੇ ਅਸੈਂਬਲੀ ਦੇ ਅਸੂਲ:\n\n1. DFM (ਮੈਨੂਫੈਕਚਰਿੰਗ ਨਿਯਮ):\n• ਐਨੂਲਰ ਰਿੰਗ (Annular Ring): ਕਾਂਪਰ ਪੈਡ ਅਤੇ ਮੋਰੀ ਦੇ ਵਿਚਕਾਰ ਘੱਟੋ-ਘੱਟ 0.15 mm ਤਾਂਬਾ ਬਚਣਾ ਚਾਹੀਦਾ ਹੈ ਤਾਂ ਜੋ ਡ੍ਰਿੱਲ ਹਿੱਲਣ ਤੇ ਤਾਰ ਨਾ ਟੁੱਟੇ।\n• ਸੋਲਡਰ ਮਾਸਕ ਸਲਿਵਰ: ਦੋ ਪਿੰਨਾਂ ਵਿਚਕਾਰ ਹਰੇ ਰੰਗ ਦਾ ਪਰਦਾ ਘੱਟੋ-ਘੱਟ 0.1 mm ਚਾਹੀਦਾ ਹੈ ਤਾਂ ਜੋ ਟਾਂਕੇ ਆਪਸ ਵਿੱਚ ਜੁੜ ਕੇ ਸ਼ਾਰਟ ਨਾ ਹੋਣ।\n\n2. ਫੈਕਟਰੀ ਫਾਈਲਾਂ:\n• Gerber ਫਾਈਲਾਂ: ਤਾਂਬੇ, ਹਰੇ ਮਾਸਕ ਅਤੇ ਚਿੱਟੀ ਲਿਖਾਈ ਦੀਆਂ ਵੱਖ-ਵੱਖ ਫਾਈਲਾਂ।\n• Excellon Drill: ਮੋਰੀਆਂ ਦੇ ਨਾਪ ਅਤੇ ਥਾਂ।\n• CPL (Pick and Place): ਰੋਬੋਟ ਲਈ ਕੰਪੋਨੈਂਟਾਂ ਦੀ X, Y ਲੋਕੇਸ਼ਨ।\n• BOM: ਪੁਰਜ਼ਿਆਂ ਦੇ ਅਸਲ ਮਾਡਲ ਨੰਬਰਾਂ ਦੀ ਲਿਸਟ।\n\n3. ਰੀਫਲੋ ਸੋਲਡਰਿੰਗ (SAC305 Lead-Free):\n• ਪਹਿਲਾਂ ਬੋਰਡ 150°C ਤੱਕ ਗਰਮ ਹੁੰਦਾ ਹੈ (ਫਲੈਕਸ ਸਾਫ਼ ਕਰਦਾ ਹੈ)।\n• ਫਿਰ 45 ਸਕਿੰਟਾਂ ਲਈ 245°C ਪੀਕ ਤਾਪਮਾਨ ਤੇ ਸੋਲਡਰ ਪਿਘਲ ਕੇ ਪੱਕਾ ਜੁੜਦਾ ਹੈ।\n• ਅਖੀਰ ਵਿੱਚ ਕੰਟਰੋਲਡ ਕੂਲਿੰਗ ਹੁੰਦੀ ਹੈ।\n\n4. ਖ਼ਰਾਬੀਆਂ:\n• Tombstoning: ਪੁਰਜ਼ੇ ਦਾ ਇੱਕ ਪਾਸਾ ਖੜ੍ਹਾ ਹੋ ਜਾਣਾ।\n• X-Ray ਮਸ਼ੀਨ: BGA ਚਿਪਸ ਦੇ ਹੇਠਾਂ ਲੁਕੇ ਛੋਟੇ ਸੋਲਡਰ ਗੋਲਿਆਂ ਦੀ ਜਾਂਚ ਕਰਨ ਲਈ।',
          practicalExampleEn:
            'Fixing a shorted 0.5mm pitch 64-pin QFN microcontroller during prototype bring-up: Solder bridge occurred across pins 14 and 15 under the microscope. The engineer applies liquid rosin flux across the pins, sets a temperature-controlled soldering station chisel tip to 350°C, and uses copper desoldering braid (wick) placed gently over the bridge. Capillary action draws the excess solder cleanly into the copper braid in 2 seconds without overheating or lifting the fragile PCB copper pads.',
          practicalExamplePa:
            'ਬਰੀਕ 0.5mm ਪਿੰਨਾਂ ਵਾਲੀ QFN ਚਿੱਪ ਦੇ ਸ਼ਾਰਟ ਹੋਏ ਟਾਂਕੇ ਠੀਕ ਕਰਨਾ: ਪਿੰਨ 14 ਅਤੇ 15 ਆਪਸ ਵਿੱਚ ਜੁੜ ਗਏ ਹਨ। ਇੰਜੀਨੀਅਰ ਉੱਤੇ ਲਿਕਵਿਡ ਫਲੈਕਸ (Flux) ਲਗਾਉਂਦਾ ਹੈ, 350°C ਤੇ ਕਾਵੀਆ ਗਰਮ ਕਰਦਾ ਹੈ ਅਤੇ ਤਾਂਬੇ ਦੀ ਡੀ-ਸੋਲਡਰਿੰਗ ਜਾਲੀ (Desoldering Wick) ਰੱਖ ਕੇ ਹਲਕਾ ਜਿਹਾ ਛੁਹਾਉਂਦਾ ਹੈ। ਸਾਰਾ ਵਾਧੂ ਸੋਲਡਰ 2 ਸਕਿੰਟ ਵਿੱਚ ਜਾਲੀ ਅੰਦਰ ਚਲਾ ਜਾਂਦਾ ਹੈ ਅਤੇ ਪਿੰਨਾਂ ਬਿਲਕੁਲ ਸਾਫ਼ ਹੋ ਜਾਂਦੀਆਂ ਹਨ।',
          codeDemo: `// TypeScript: PCB DFM Validator & SAC305 Reflow Profile Checker
export function validateDfmRules(minTraceMm: number, minSpaceMm: number, padDiaMm: number, drillDiaMm: number, maskDamMm: number) {
  const annularRingMm = (padDiaMm - drillDiaMm) / 2;
  const isAnnularRingOk = annularRingMm >= 0.125; // 5 mils standard
  const isTraceSpaceOk = minTraceMm >= 0.127 && minSpaceMm >= 0.127; // 5/5 mils
  const isMaskDamOk = maskDamMm >= 0.100;

  return {
    annularRingMm,
    isAnnularRingOk,
    isTraceSpaceOk,
    isMaskDamOk,
    isDfmPass: isAnnularRingOk && isTraceSpaceOk && isMaskDamOk,
  };
}

export function checkReflowProfile(peakTempCelsius: number, timeAboveLiquidusSec: number) {
  // SAC305 Lead-Free standard limits
  const isPeakSafe = peakTempCelsius >= 235 && peakTempCelsius <= 250;
  const isTalSafe = timeAboveLiquidusSec >= 45 && timeAboveLiquidusSec <= 75;

  return {
    isPeakSafe,
    isTalSafe,
    profileStatus: isPeakSafe && isTalSafe ? 'PASSED_IPC_CLASS_2' : 'DEFECT_RISK',
  };
}

// Verification: Standard 0.6mm pad with 0.3mm drill:
const dfm = validateDfmRules(0.15, 0.15, 0.60, 0.30, 0.12);
console.log('Annular Ring:', dfm.annularRingMm.toFixed(3), 'mm'); // 0.150 mm (Pass!)
console.log('DFM Pass:', dfm.isDfmPass); // true`,
          misconceptionsJson: [
            {
              myth: 'Exporting CAD project files directly (like .kicad_pcb or .PcbDoc) to a board house is standard practice.',
              truthEn:
                'Fab houses do not reliably run every version of proprietary CAD tools. Standard production strictly mandates exporting universal, tool-agnostic Gerber RS-274X (or ODB++) and Excellon NC drill files to eliminate font and layout translation errors.',
              truthPa:
                'ਫੈਕਟਰੀ ਨੂੰ ਕਦੇ ਵੀ ਸਾਫਟਵੇਅਰ ਦਾ ਆਪਣਾ ਕੱਚਾ ਪ੍ਰੋਜੈਕਟ ਨਹੀਂ ਭੇਜਿਆ ਜਾਂਦਾ। ਉੱਥੇ ਸਿਰਫ਼ ਅੰਤਰਰਾਸ਼ਟਰੀ Gerber RS-274X ਅਤੇ Excellon Drill ਫਾਈਲਾਂ ਹੀ ਭੇਜੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।',
            },
            {
              myth: 'Lead-free soldering iron tips can be cleaned by scraping them against a dry razor or hard file.',
              truthEn:
                'Soldering iron tips are copper cores plated with an ultra-thin layer of iron and chrome. Filing or scratching punctures the iron plating, allowing molten solder to dissolve the underlying copper in hours, completely destroying the tip. Tips must only be cleaned with brass wool or damp cellulose sponges.',
              truthPa:
                'ਕਾਵੀਏ ਦੀ ਬਿੱਟ ਨੂੰ ਰੇਗਮਾਰ ਜਾਂ ਬਲੇਡ ਨਾਲ ਨਹੀਂ ਰਗੜਨਾ ਚਾਹੀਦਾ! ਇਸ ਨਾਲ ਉੱਪਰਲੀ ਲੋਹੇ ਦੀ ਪਰਤ ਉੱਤਰ ਜਾਂਦੀ ਹੈ ਅਤੇ ਅੰਦਰਲਾ ਤਾਂਬਾ ਪਿਘਲ ਕੇ ਬਿੱਟ ਵਿੱਚ ਟੋਆ ਪੈ ਜਾਂਦਾ ਹੈ। ਸਿਰਫ਼ ਪਿੱਤਲ ਦੀ ਜਾਲੀ (Brass Wool) ਹੀ ਵਰਤਣੀ ਚਾਹੀਦੀ ਹੈ।',
            },
            {
              myth: 'You can inspect solder joints underneath a Ball Grid Array (BGA) package with a high-power optical microscope.',
              truthEn:
                'BGA solder balls are arranged in a dense grid completely hidden underneath the opaque plastic or ceramic chip body. Visual inspection is physically impossible; non-destructive inspection requires specialized industrial 2D/3D X-Ray imaging.',
              truthPa:
                'BGA ਚਿਪਸ ਦੇ ਟਾਂਕੇ ਚਿੱਪ ਦੇ ਹੇਠਾਂ ਲੁਕੇ ਹੁੰਦੇ ਹਨ, ਇਸ ਲਈ ਆਮ ਮਾਈਕ੍ਰੋਸਕੋਪ ਨਾਲ ਨਹੀਂ ਦਿਸ ਸਕਦੇ। ਇਹਨਾਂ ਦੀ ਜਾਂਚ ਲਈ ਐਕਸ-ਰੇ (X-Ray) ਮਸ਼ੀਨ ਜ਼ਰੂਰੀ ਹੁੰਦੀ ਹੈ।',
            },
          ],
          terminologyJson: [
            {
              term: 'Gerber RS-274X',
              punjabi: 'ਗਰਬਰ ਫਾਈਲਾਂ (Gerber RS-274X)',
              meaningEn: 'Standard open vector format representing 2D binary images of PCB copper, mask, drill, and silkscreen layers.',
              meaningPa: 'PCB ਫੈਕਟਰੀਆਂ ਲਈ ਸਰਕਟ ਦੀਆਂ ਸਾਰੀਆਂ ਪਰਤਾਂ ਦਾ ਅੰਤਰਰਾਸ਼ਟਰੀ ਵੈਕਟਰ ਫਾਰਮੈਟ।',
            },
            {
              term: 'Annular Ring',
              punjabi: 'ਐਨੂਲਰ ਰਿੰਗ',
              meaningEn: 'Width of copper pad surrounding a finished drilled through-hole: (Pad_Dia - Hole_Dia) / 2.',
              meaningPa: 'ਮੋਰੀ ਦੇ ਦੁਆਲੇ ਬਚਿਆ ਹੋਇਆ ਤਾਂਬੇ ਦਾ ਗੋਲ ਘੇਰਾ।',
            },
            {
              term: 'Reflow Soldering',
              punjabi: 'ਰੀਫਲੋ ਸੋਲਡਰਿੰਗ (Reflow Soldering)',
              meaningEn: 'Process where solder paste is melted in a multi-zone thermal oven to form permanent electrical joints.',
              meaningPa: 'ਕੰਟਰੋਲਡ ਭੱਠੀ ਵਿੱਚ ਸੋਲਡਰ ਪੇਸਟ ਨੂੰ ਪਿਘਲਾ ਕੇ ਸਾਰੇ ਪੁਰਜ਼ੇ ਇਕੱਠੇ ਜੋੜਨ ਦਾ ਉਦਯੋਗਿਕ ਤਰੀਕਾ।',
            },
            {
              term: 'Tombstoning',
              punjabi: 'ਟੋਮਸਟੋਨਿੰਗ ਨੁਕਸ (Tombstoning)',
              meaningEn: 'SMT defect where an unbalanced surface tension pulls a passive component onto one end like a tombstone.',
              meaningPa: 'ਟਾਂਕਾ ਪਿਘਲਦੇ ਸਮੇਂ ਰਜਿਸਟਰ ਜਾਂ ਕੈਪਸੀਟਰ ਦਾ ਇੱਕ ਪਾਸਿਓਂ ਉੱਠ ਕੇ ਖੜ੍ਹਾ ਹੋ ਜਾਣਾ।',
            },
            {
              term: 'BOM (Bill of Materials)',
              punjabi: 'ਬਿੱਲ ਆਫ ਮਟੀਰੀਅਲਜ਼ (BOM)',
              meaningEn: 'Comprehensive list of all raw components, quantities, reference designators, and exact manufacturer part numbers (MPN).',
              meaningPa: 'ਸਰਕਟ ਬੋਰਡ ਉੱਤੇ ਲੱਗਣ ਵਾਲੇ ਸਾਰੇ ਪੁਰਜ਼ਿਆਂ ਅਤੇ ਉਹਨਾਂ ਦੇ ਮਾਡਲ ਨੰਬਰਾਂ ਦੀ ਮੁਕੰਮਲ ਸੂਚੀ।',
            },
            {
              term: 'CPL (Pick-and-Place File)',
              punjabi: 'ਪਿਕ-ਐਂਡ-ਪਲੇਸ ਫਾਈਲ (CPL)',
              meaningEn: 'Coordinate file containing X-Y centroids and orientation angles for robotic placement of SMT components.',
              meaningPa: 'ਰੋਬੋਟ ਮਸ਼ੀਨ ਲਈ ਕੰਪੋਨੈਂਟਾਂ ਦੀ ਸਹੀ ਲੋਕੇਸ਼ਨ ਅਤੇ ਕੋਣ ਦੱਸਣ ਵਾਲੀ ਫਾਈਲ।',
            },
          ],
          interactiveLabId: 'hardware-explorer',
          exercisePromptEn:
            'DFM Quality Task: (1) A PCB designer specifies a through-hole via with a drill diameter of 0.30 mm and an outer pad diameter of 0.50 mm. Calculate the resulting annular ring width in micrometers. Does it meet standard Class 2 DFM minimum rules (≥ 125 µm)? (2) Explain why Time Above Liquidus (TAL) in reflow soldering must be strictly limited to between 45 and 75 seconds.',
          exercisePromptPa:
            'DFM ਜਾਂਚ: (1) 0.30 mm ਡ੍ਰਿੱਲ ਅਤੇ 0.50 mm ਪੈਡ ਵਾਲੇ ਵਾਇਆ ਦੀ ਐਨੂਲਰ ਰਿੰਗ (ਮਾਈਕ੍ਰੋਮੀਟਰ) ਕੱਢੋ। ਕੀ ਇਹ ਫੈਕਟਰੀ ਨਿਯਮ (≥ 125 µm) ਪਾਸ ਕਰਦੀ ਹੈ? (2) ਸਮਝਾਓ ਕਿ ਰੀਫਲੋ ਸੋਲਡਰਿੰਗ ਵਿੱਚ ਪਿਘਲਣ ਦਾ ਸਮਾਂ (TAL) ਸਿਰਫ਼ 45 ਤੋਂ 75 ਸਕਿੰਟ ਹੀ ਕਿਉਂ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ।',
          summaryEn:
            'PCB manufacturing bridges electronic CAD design and physical factory mass-production: rigorous DFM rules ensure high yield, standardized Gerber and pick-and-place files drive precision robotics, and controlled thermal profiles forge strong intermetallic solder bonds.',
          summaryPa:
            'PCB ਫੈਬ੍ਰੀਕੇਸ਼ਨ ਕੰਪਿਊਟਰ ਨਕਸ਼ਿਆਂ ਨੂੰ ਅਸਲ ਫੈਕਟਰੀ ਵਿੱਚ ਢਾਲਦੀ ਹੈ: DFM ਨਿਯਮ ਗਲਤੀਆਂ ਰੋਕਦੇ ਹਨ, ਗਰਬਰ ਫਾਈਲਾਂ ਰੋਬੋਟਾਂ ਨੂੰ ਤੋਰਦੀਆਂ ਹਨ, ਅਤੇ ਰੀਫਲੋ ਓਵਨ ਮਜ਼ਬੂਤ ਸੋਲਡਰ ਜੋੜ ਬਣਾਉਂਦੇ ਹਨ।',
          furtherReadingJson: [
            'IPC-A-610: Acceptability of Electronic Assemblies',
            'Printed Circuits Handbook (7th Edition) by Clyde F. Coombs & Happy T. Holden',
            'Surface Mount Technology: Principles and Practice by Ray Prasad',
          ],
          quiz: {
            titleEn: 'Level 9 Assessment: DFM, Assembly, Soldering & Inspection',
            titlePa: 'ਲੈਵਲ 9 ਟੈਸਟ: DFM, ਅਸੈਂਬਲੀ, ਸੋਲਡਰਿੰਗ ਅਤੇ ਇੰਸਪੈਕਸ਼ਨ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'Annular Ring',
                promptEn: 'What is the annular ring width of a PCB via with a pad diameter of 0.60 mm and a drill hole diameter of 0.30 mm?',
                promptPa: '0.60 mm ਪੈਡ ਅਤੇ 0.30 mm ਡ੍ਰਿੱਲ ਵਾਲੇ ਵਾਇਆ ਦੀ ਐਨੂਲਰ ਰਿੰਗ ਕਿੰਨੀ ਹੋਵੇਗੀ?',
                optionsJson: ['0.15 mm (150 µm)', '0.30 mm', '0.05 mm', '0.45 mm'],
                correctAnswer: '0.15 mm (150 µm)',
                explanationEn:
                  'Annular Ring = (Pad Diameter - Drill Diameter) / 2 = (0.60 mm - 0.30 mm) / 2 = 0.30 / 2 = 0.15 mm = 150 µm.',
                explanationPa:
                  'Annular Ring = (0.60 - 0.30) / 2 = 0.15 mm (150 ਮਾਈਕ੍ਰੋਮੀਟਰ)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Gerber Standard',
                promptEn: 'What is the universally accepted standard file format used by PCB manufacturers to fabricate physical copper and mask layers?',
                promptPa: 'PCB ਫੈਕਟਰੀਆਂ ਵੱਲੋਂ ਤਾਂਬੇ ਅਤੇ ਮਾਸਕ ਬਣਾਉਣ ਲਈ ਕਿਹੜਾ ਅੰਤਰਰਾਸ਼ਟਰੀ ਫਾਈਲ ਫਾਰਮੈਟ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
                optionsJson: ['Gerber RS-274X (or ODB++)', 'Adobe PDF', 'Microsoft Word', 'AutoCAD DWG'],
                correctAnswer: 'Gerber RS-274X (or ODB++)',
                explanationEn:
                  'Gerber RS-274X is the universal 2D raster/vector standard interpreted by laser photoplotters to expose PCB copper, masks, and silkscreens.',
                explanationPa:
                  'Gerber RS-274X (ਜਾਂ ODB++) ਸਭ ਤੋਂ ਮਿਆਰੀ ਫਾਰਮੈਟ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Reflow Peak',
                promptEn: 'What is the typical peak reflow temperature range for modern lead-free SAC305 solder alloy?',
                promptPa: 'ਲੀਡ-ਫ੍ਰੀ SAC305 ਸੋਲਡਰ ਲਈ ਰੀਫਲੋ ਓਵਨ ਦਾ ਪੀਕ ਤਾਪਮਾਨ ਕਿੰਨਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ?',
                optionsJson: ['235 °C to 245 °C', '183 °C to 190 °C', '350 °C to 400 °C', '100 °C to 120 °C'],
                correctAnswer: '235 °C to 245 °C',
                explanationEn:
                  'SAC305 melts at 217°C (liquidus). Good intermetallic bonding requires a peak temperature of 235°C to 245°C without exceeding the 260°C component limit.',
                explanationPa:
                  'SAC305 ਸੋਲਡਰ 217°C ਤੇ ਪਿਘਲਦਾ ਹੈ ਅਤੇ ਸਹੀ ਜੋੜ ਲਈ 235°C ਤੋਂ 245°C ਦਾ ਪੀਕ ਤਾਪਮਾਨ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Tombstoning Cause',
                promptEn: 'What is the primary physical cause of "tombstoning" in small passive SMD components during reflow soldering?',
                promptPa: 'ਸੋਲਡਰਿੰਗ ਦੌਰਾਨ ਛੋਟੇ ਰਜਿਸਟਰਾਂ ਦੇ ਖੜ੍ਹੇ ਹੋ ਜਾਣ (Tombstoning) ਦਾ ਮੁੱਖ ਕਾਰਨ ਕੀ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'Unbalanced surface tension forces when solder melts earlier on one pad than the other due to uneven thermal mass or trace connections',
                  'The component is placed upside down',
                  'Excessive vibration on the factory conveyor',
                  'The PCB is too thin',
                ],
                correctAnswer: 'Unbalanced surface tension forces when solder melts earlier on one pad than the other due to uneven thermal mass or trace connections',
                explanationEn:
                  'If one pad connects to a heavy ground plane without thermal relief, the other pad melts first. Molten solder surface tension pulls the component upright like a tombstone.',
                explanationPa:
                  'ਜਦੋਂ ਇੱਕ ਪੈਡ ਪਹਿਲਾਂ ਪਿਘਲ ਜਾਂਦਾ ਹੈ ਅਤੇ ਦੂਜਾ ਠੰਢਾ ਰਹਿੰਦਾ ਹੈ, ਤਾਂ ਪਿਘਲੇ ਸੋਲਡਰ ਦਾ ਖਿੱਚਾਅ ਪੁਰਜ਼ੇ ਨੂੰ ਇੱਕ ਪਾਸਿਓਂ ਖੜ੍ਹਾ ਕਰ ਦਿੰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Pick and Place CPL',
                promptEn: 'What critical information does a Centroid / Pick-and-Place (CPL) file contain for SMT assembly robots?',
                promptPa: 'ਰੋਬੋਟਿਕ SMT ਮਸ਼ੀਨਾਂ ਲਈ Pick-and-Place (CPL) ਫਾਈਲ ਵਿੱਚ ਕੀ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'Reference designator, exact X-Y center coordinates, component rotation angle in degrees, and board side',
                  'The circuit schematic diagrams',
                  'The purchase price of each chip',
                  'The color of the PCB solder mask',
                ],
                correctAnswer: 'Reference designator, exact X-Y center coordinates, component rotation angle in degrees, and board side',
                explanationEn:
                  'The pick-and-place file guides computer vision nozzles to grab chips and place them with micron precision at specified X, Y coordinates and angles.',
                explanationPa:
                  'ਹਰ ਪੁਰਜ਼ੇ ਦੀ X-Y ਲੋਕੇਸ਼ਨ, ਘੁੰਮਣ ਦਾ ਕੋਣ (ਡਿਗਰੀਆਂ ਵਿੱਚ), ਅਤੇ ਬੋਰਡ ਦਾ ਪਾਸਾ (Top/Bottom)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'BGA X-Ray',
                promptEn: 'Why is an industrial X-Ray inspection system mandatory for inspecting Ball Grid Array (BGA) component solder joints?',
                promptPa: 'BGA ਚਿੱਪ ਦੇ ਟਾਂਕਿਆਂ ਦੀ ਜਾਂਚ ਲਈ ਐਕਸ-ਰੇ (X-Ray) ਮਸ਼ੀਨ ਕਿਉਂ ਜ਼ਰੂਰੀ ਹੁੰਦੀ ਹੈ?',
                optionsJson: [
                  'The solder balls are located entirely beneath the opaque component package body, completely hidden from optical cameras and human eyes',
                  'X-rays clean flux residue automatically',
                  'It measures the clock speed of the BGA',
                  'To prevent electrostatic discharge',
                ],
                correctAnswer: 'The solder balls are located entirely beneath the opaque component package body, completely hidden from optical cameras and human eyes',
                explanationEn:
                  'BGA connections form an array underneath the chip. Only X-rays can penetrate the silicon package to reveal solder bridges, voids, and misalignment.',
                explanationPa:
                  'ਕਿਉਂਕਿ ਸੋਲਡਰ ਬਾਲਾਂ ਚਿੱਪ ਦੇ ਹੇਠਾਂ ਲੁਕੀਆਂ ਹੁੰਦੀਆਂ ਹਨ ਅਤੇ ਕੈਮਰੇ ਨਾਲ ਨਹੀਂ ਦਿਸ ਸਕਦੀਆਂ। ਸਿਰਫ਼ ਐਕਸ-ਰੇ ਹੀ ਚਿੱਪ ਦੇ ਆਰ-ਪਾਰ ਦੇਖ ਸਕਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Solder Mask Dam',
                promptEn: 'What is the purpose of the narrow green "Solder Mask Dam" (sliver) between fine-pitch IC pads?',
                promptPa: 'ਬਰੀਕ ਪਿੰਨਾਂ ਵਿਚਕਾਰ ਹਰੇ ਰੰਗ ਦੇ ਸੋਲਡਰ ਮਾਸਕ ਡੈਮ ਦਾ ਕੀ ਕੰਮ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'To create a physical insulating barrier that prevents molten solder from flowing between adjacent pads and creating solder bridge shorts',
                  'To improve the aesthetics of the board',
                  'To absorb thermal expansion',
                  'To label the pin numbers',
                ],
                correctAnswer: 'To create a physical insulating barrier that prevents molten solder from flowing between adjacent pads and creating solder bridge shorts',
                explanationEn:
                  'Solder mask is not wetted by molten solder. A mask dam between pads keeps molten solder contained on its own pad, preventing bridging shorts.',
                explanationPa:
                  'ਇਹ ਦੋ ਪਿੰਨਾਂ ਵਿਚਕਾਰ ਕੰਧ ਬਣ ਕੇ ਸੋਲਡਰ ਨੂੰ ਆਪਸ ਵਿੱਚ ਜੁੜਨ (Short Circuit) ਤੋਂ ਰੋਕਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'TAL Reflow',
                promptEn: 'In reflow soldering, what does "Time Above Liquidus" (TAL) mean and what is its typical duration?',
                promptPa: 'ਸੋਲਡਰਿੰਗ ਵਿੱਚ "Time Above Liquidus" (TAL) ਦਾ ਕੀ ਮਤਲਬ ਹੈ ਅਤੇ ਇਹ ਕਿੰਨਾ ਚਿਰ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'The duration during which solder is fully melted above its liquidus temperature (typically 45 to 75 seconds)',
                  'The time required to cool to room temperature',
                  'The shelf life of solder paste in a refrigerator',
                  'The speed of the conveyor belt in meters per hour',
                ],
                correctAnswer: 'The duration during which solder is fully melted above its liquidus temperature (typically 45 to 75 seconds)',
                explanationEn:
                  'TAL is the window where solder is molten (>217°C for SAC305). Too short (<30s) causes poor wetting; too long (>90s) forms brittle excessive intermetallics.',
                explanationPa:
                  'ਉਹ ਸਮਾਂ ਜਿਸ ਦੌਰਾਨ ਸੋਲਡਰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਪਿਘਲੀ ਹੋਈ ਹਾਲਤ ਵਿੱਚ ਰਹਿੰਦਾ ਹੈ (ਲਗਭਗ 45 ਤੋਂ 75 ਸਕਿੰਟ)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Flux Role',
                promptEn: 'What is the primary chemical role of rosin/acid flux during the soldering process?',
                promptPa: 'ਸੋਲਡਰਿੰਗ ਦੌਰਾਨ ਫਲੈਕਸ (Flux) ਦਾ ਮੁੱਖ ਰਸਾਇਣਕ ਕੰਮ ਕੀ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'To chemically dissolve metal surface oxides and prevent oxidation during heating, enabling molten solder to wet cleanly',
                  'To act as an electrical insulator in the joint',
                  'To glue the component mechanically before heating',
                  'To color the joint silver',
                ],
                correctAnswer: 'To chemically dissolve metal surface oxides and prevent oxidation during heating, enabling molten solder to wet cleanly',
                explanationEn:
                  'Copper instantly oxidizes when heated in air, preventing solder wetting. Flux strips oxides and lowers surface tension, allowing liquid solder to bond.',
                explanationPa:
                  'ਤਾਂਬੇ ਉੱਤੇ ਜੰਮੀ ਮੈਲ ਅਤੇ ਆਕਸਾਈਡ ਨੂੰ ਸਾਫ਼ ਕਰਨਾ ਤਾਂ ਜੋ ਪਿਘਲਿਆ ਸੋਲਡਰ ਤਾਂਬੇ ਨਾਲ ਮਜ਼ਬੂਤੀ ਨਾਲ ਚਿਪਕ ਸਕੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Aspect Ratio',
                promptEn: 'Why do PCB fabrication houses limit the "Aspect Ratio" (Board Thickness / Drill Diameter) of through-hole vias to 8:1 or 10:1?',
                promptPa: 'PCB ਫੈਕਟਰੀਆਂ ਵਾਇਆ ਦੇ Aspect Ratio (ਮੋਟਾਈ / ਡ੍ਰਿੱਲ ਸਾਈਜ਼) ਨੂੰ 8:1 ਜਾਂ 10:1 ਤੱਕ ਕਿਉਂ ਸੀਮਤ ਕਰਦੀਆਂ ਹਨ?',
                optionsJson: [
                  'Deeper and narrower holes prevent electroplating fluid from circulating, resulting in incomplete copper barrel plating and open circuits',
                  'Drill bits will melt from friction',
                  'It causes the PCB to warp into a curve',
                  'It prevents traces from being routed on outer layers',
                ],
                correctAnswer: 'Deeper and narrower holes prevent electroplating fluid from circulating, resulting in incomplete copper barrel plating and open circuits',
                explanationEn:
                  'Chemical plating solution cannot penetrate narrow, deep capillary holes effectively, resulting in thin, cracked copper in the middle of the barrel.',
                explanationPa:
                  'ਜੇਕਰ ਮੋਰੀ ਬਹੁਤ ਡੂੰਘੀ ਤੇ ਤੰਗ ਹੋਵੇ, ਤਾਂ ਅੰਦਰ ਤਾਂਬਾ ਚੜ੍ਹਾਉਣ ਵਾਲਾ ਕੈਮੀਕਲ ਨਹੀਂ ਪਹੁੰਚਦਾ ਅਤੇ ਵਾਇਆ ਅੰਦਰੋਂ ਟੁੱਟ ਜਾਂਦੀ ਹੈ।',
              },
            ],
          },
        },
      ],
    },
  ],
};
