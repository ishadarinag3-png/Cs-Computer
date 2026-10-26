import { SeedCourse } from './types.ts';

export const LEVEL_0_COURSE: SeedCourse = {
  slug: 'level-0-math-and-physics-for-electronics',
  levelNumber: 0,
  titleEn: 'Level 0: Mathematics & Physics for Electronics',
  titlePa: 'ਲੈਵਲ 0: ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਲਈ ਗਣਿਤ ਅਤੇ ਭੌਤਿਕ ਵਿਗਿਆਨ (Math & Physics)',
  descriptionEn:
    'Essential mathematical tools, calculus, complex phasors, and foundational electromagnetic physics required to understand circuits, components, and signals.',
  descriptionPa:
    'ਸਰਕਟਾਂ, ਕੰਪੋਨੈਂਟਾਂ ਅਤੇ ਸਿਗਨਲਾਂ ਨੂੰ ਡੂੰਘਾਈ ਨਾਲ ਸਮਝਣ ਲਈ ਲੋੜੀਂਦਾ ਬੁਨਿਆਦੀ ਗਣਿਤ, ਕੈਲਕੂਲਸ, ਫੇਜ਼ਰ (Phasors) ਅਤੇ ਇਲੈਕਟ੍ਰੋਮੈਗਨੈਟਿਕ ਭੌਤਿਕ ਵਿਗਿਆਨ।',
  category: 'foundations',
  estimatedHours: 12,
  modules: [
    {
      orderIndex: 1,
      titleEn: 'Mathematical Foundations for Circuit Analysis',
      titlePa: 'ਸਰਕਟ ਵਿਸ਼ਲੇਸ਼ਣ ਲਈ ਗਣਿਤਕ ਬੁਨਿਆਦਾਂ',
      summaryEn:
        'Algebraic equations, SI prefixes, logarithms, decibels, and trigonometric waveforms in electronic circuits.',
      summaryPa:
        'ਇਲੈਕਟ੍ਰਾਨਿਕ ਸਰਕਟਾਂ ਵਿੱਚ ਅਲਜਬਰਾ, SI ਪ੍ਰੀਫਿਕਸ, ਲਾਗਰਿਦਮ (dB), ਅਤੇ ਤਿਕੋਣਮਿਤੀ ਵੇਵਫਾਰਮਾਂ ਦੀ ਗਣਨਾ।',
      lessons: [
        {
          slug: 'math-foundations-si-algebra-trig',
          orderIndex: 1,
          titleEn: '0.1 Arithmetic, Algebra, SI Units, Decibels & Trigonometry',
          titlePa: '0.1 ਅੰਕਗਣਿਤ, ਅਲਜਬਰਾ, SI ਇਕਾਈਆਂ, ਡੈਸੀਬਲ ਅਤੇ ਤਿਕੋਣਮਿਤੀ',
          objectivesJson: [
            'Convert fluently between scientific and engineering notation across SI electrical prefixes (pico, nano, micro, milli, kilo, mega, giga)',
            'Solve linear and quadratic equations for circuit voltages, currents, and component tolerances',
            'Compute voltage, current, and power ratios in logarithmic Decibels (dB)',
            'Calculate instantaneous values of alternating sine waveforms using trigonometric angular frequency (omega = 2*pi*f)',
          ],
          prerequisitesJson: ['High school basic arithmetic (addition, multiplication, fractions)'],
          childAnalogyEn:
            'Think of SI prefixes like currency notes and coins in Punjab! A ₹500 note is 500 Rupees, while 50 paise is half a Rupee (500 milli-rupees). In electronics, electricity is measured in tiny drops (microamps, like drops of water from a leaky hand-pump) and massive flows (megawatts, like Bhakra Dam power output). Math is simply our ruler to measure both safely!',
          childAnalogyPa:
            'ਪੰਜਾਬ ਵਿੱਚ ਕਰੰਸੀ ਅਤੇ ਮਾਪ-ਤੋਲ ਵਾਂਗ ਸੋਚੋ! ₹1000 ਦਾ ਨੋਟ ਇੱਕ ਕਿਲੋ-ਰੁਪਈਆ (1 Kilo-Rupee) ਵਾਂਗ ਹੈ, ਅਤੇ 50 ਪੈਸੇ ਅੱਧਾ ਰੁਪਈਆ ਹਨ। ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਵਿੱਚ ਬਿਜਲੀ ਕਦੇ ਨਿੱਕੀਆਂ-ਨਿੱਕੀਆਂ ਬੂੰਦਾਂ ਵਾਂਗ ਹੁੰਦੀ ਹੈ (ਜਿਵੇਂ ਹੈਂਡਪੰਪ ਦੀ ਲੀਕ ਹੁੰਦੀ ਬੂੰਦ, microamps) ਅਤੇ ਕਦੇ ਭਾਖੜਾ ਡੈਮ ਵਾਂਗ ਵਿਸ਼ਾਲ (ਮੈਗਾਵਾਟ, Megawatts)। ਗਣਿਤ ਉਹ ਸੰਦ ਹੈ ਜਿਸ ਨਾਲ ਅਸੀਂ ਦੋਹਾਂ ਨੂੰ ਬਿਨਾਂ ਝਟਕੇ ਖਾਧੇ ਸਹੀ ਢੰਗ ਨਾਲ ਨਾਪ ਸਕਦੇ ਹਾਂ!',
          technicalExplanationEn:
            'Electronic engineering relies on rigorous mathematical notation to describe microscopic electrical quantities:\n\n1. Engineering Notation & SI Prefixes:\nNumbers are represented as M * 10^(3k) where k is an integer.\n• Pico (p) = 10^-12\n• Nano (n) = 10^-9\n• Micro (µ) = 10^-6\n• Milli (m) = 10^-3\n• Kilo (k) = 10^3\n• Mega (M) = 10^6\n• Giga (G) = 10^9\n\n2. Logarithms & Decibels (dB):\nHuman hearing and signal attenuation operate on logarithmic scales:\n• Voltage Gain: A_v(dB) = 20 * log10(V_out / V_in)\n• Power Gain: A_p(dB) = 10 * log10(P_out / P_in)\n• An attenuation of -3 dB corresponds to exactly half power (P_out = 0.5 * P_in).\n\n3. Trigonometric AC Waveform Representation:\nv(t) = V_pk * sin(ω * t + θ)\nwhere ω = 2 * π * f (angular velocity in rad/s), f is frequency in Hertz (Hz), and θ is the phase angle in radians or degrees.',
          technicalExplanationPa:
            'ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਇੰਜੀਨੀਅਰਿੰਗ ਵਿੱਚ ਬਿਜਲਈ ਰਾਸ਼ੀਆਂ ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ ਦਰਸਾਉਣ ਲਈ ਸਟੀਕ ਗਣਿਤਕ ਨਿਯਮ ਵਰਤੇ ਜਾਂਦੇ ਹਨ:\n\n1. ਇੰਜੀਨੀਅਰਿੰਗ ਨੋਟੇਸ਼ਨ ਅਤੇ SI ਪ੍ਰੀਫਿਕਸ:\nਹਰ ਸੰਖਿਆ 10 ਦੀ ਘਾਤ 3 ਦੇ ਗੁਣਜ ਵਿੱਚ ਲਿਖੀ ਜਾਂਦੀ ਹੈ:\n• Pico (p) = 10^-12 (ਜਿਵੇਂ 100 pF ਕੈਪਸੀਟਰ)\n• Nano (n) = 10^-9 (ਜਿਵੇਂ 10 nH ਇੰਡਕਟਰ)\n• Micro (µ) = 10^-6 (ਜਿਵੇਂ 10 µF ਕੈਪਸੀਟਰ)\n• Milli (m) = 10^-3 (ਜਿਵੇਂ 20 mA LED ਕਰੰਟ)\n• Kilo (k) = 10^3 (ਜਿਵੇਂ 10 kΩ ਰਜਿਸਟਰ)\n• Mega (M) = 10^6 (ਜਿਵੇਂ 1 MΩ ਇਨਪੁਟ ਰੁਕਾਵਟ)\n\n2. ਡੈਸੀਬਲ (Decibel - dB):\nਐਂਪਲੀਫਾਇਰ ਦਾ ਗੇਨ ਲਾਗਰਿਦਮ ਵਿੱਚ ਨਾਪਿਆ ਜਾਂਦਾ ਹੈ:\n• ਵੋਲਟੇਜ ਗੇਨ: Av(dB) = 20 * log10(Vout / Vin)\n• ਪਾਵਰ ਗੇਨ: Ap(dB) = 10 * log10(Pout / Pin)\n-3 dB ਦਾ ਮਤਲਬ ਹੁੰਦਾ ਹੈ ਕਿ ਸਿਗਨਲ ਦੀ ਪਾਵਰ ਅੱਧੀ (Half Power) ਰਹਿ ਗਈ ਹੈ।\n\n3. ਸਾਈਨ ਵੇਵ ਦਾ ਤਿਕੋਣਮਿਤੀ ਫਾਰਮੂਲਾ:\nv(t) = Vpeak * sin(ωt + θ), ਜਿੱਥੇ ω = 2 * π * f ਹੈ।',
          practicalExampleEn:
            'When an audio amplifier receives an input microphone voltage of 5 mV and outputs 500 mV to a speaker, the engineer calculates the voltage gain in dB: Gain = 20 * log10(500 mV / 5 mV) = 20 * log10(100) = 20 * 2 = +40 dB. If the volume knob is turned down by -6 dB, the voltage drops by exactly half to 250 mV.',
          practicalExamplePa:
            'ਜਦੋਂ ਗੁਰਦੁਆਰੇ ਜਾਂ ਸਟੇਜ ਉੱਤੇ ਲੱਗੇ ਮਾਈਕ੍ਰੋਫੋਨ ਤੋਂ 5 mV ਦੀ ਨਿੱਕੀ ਆਵਾਜ਼ ਐਂਪਲੀਫਾਇਰ ਵਿੱਚ ਜਾਂਦੀ ਹੈ ਅਤੇ ਸਪੀਕਰ ਲਈ 500 mV ਬਣ ਕੇ ਬਾਹਰ ਆਉਂਦੀ ਹੈ: ਵੋਲਟੇਜ ਗੇਨ = 20 * log10(500/5) = 20 * log10(100) = 40 dB ਹੁੰਦਾ ਹੈ। ਜੇਕਰ ਸਾਊਂਡ ਵਾਲਾ ਵਾਲਿਊਮ -6 dB ਘਟਾ ਦੇਵੇ, ਤਾਂ ਸਪੀਕਰ ਨੂੰ ਮਿਲਣ ਵਾਲੀ ਵੋਲਟੇਜ ਅੱਧੀ ਯਾਨੀ 250 mV ਰਹਿ ਜਾਵੇਗੀ।',
          codeDemo: `// TypeScript: SI Prefix Conversion & Decibel Calculator
export function convertToEngineeringUnit(val: number, baseUnit: string): string {
  const prefixes = [
    { factor: 1e9, prefix: 'G' },
    { factor: 1e6, prefix: 'M' },
    { factor: 1e3, prefix: 'k' },
    { factor: 1, prefix: '' },
    { factor: 1e-3, prefix: 'm' },
    { factor: 1e-6, prefix: 'µ' },
    { factor: 1e-9, prefix: 'n' },
    { factor: 1e-12, prefix: 'p' },
  ];
  for (const p of prefixes) {
    if (Math.abs(val) >= p.factor * 0.999) {
      return \`\${(val / p.factor).toFixed(2)} \${p.prefix}\${baseUnit}\`;
    }
  }
  return \`\${val.toExponential(2)} \${baseUnit}\`;
}

export function calcVoltageGainDb(vIn: number, vOut: number): number {
  if (vIn <= 0 || vOut <= 0) throw new Error('Voltages must be strictly positive');
  return 20 * Math.log10(vOut / vIn);
}

// Verification: 5mV in, 500mV out -> 40 dB
console.log('Gain:', calcVoltageGainDb(0.005, 0.500).toFixed(1), 'dB');
console.log('Resistance:', convertToEngineeringUnit(47000, 'Ω')); // 47.00 kΩ`,
          misconceptionsJson: [
            {
              myth: 'Decibel (dB) is an absolute unit of physical voltage or power like Volts or Watts.',
              truthEn:
                'Decibels are dimensionless logarithmic ratios comparing two quantities. Only when referenced to a standard base (like dBm referenced to 1 mW, or dBV to 1 V) does it indicate absolute levels.',
              truthPa:
                'ਡੈਸੀਬਲ ਕੋਈ ਸੁਤੰਤਰ ਇਕਾਈ ਨਹੀਂ ਹੈ, ਇਹ ਦੋ ਚੀਜ਼ਾਂ ਦਾ ਲਾਗਰਿਦਮਿਕ ਅਨੁਪਾਤ (Ratio) ਹੈ। ਜਦੋਂ ਤੱਕ ਨਾਲ ਰੈਫਰੈਂਸ ਨਾ ਲਿਖਿਆ ਹੋਵੇ (ਜਿਵੇਂ dBm ਜਾਂ dBV), ਇਹ ਸਿਰਫ਼ ਤੁਲਨਾ ਦਰਸਾਉਂਦਾ ਹੈ।',
            },
            {
              myth: 'Scientific notation and engineering notation are the same.',
              truthEn:
                'Scientific notation allows any exponent (e.g. 4.7 * 10^4). Engineering notation strictly restricts powers of 10 to multiples of 3 (e.g. 47 * 10^3 = 47 k) to align directly with SI component values.',
              truthPa:
                'ਸਾਇੰਟਿਫਿਕ ਨੋਟੇਸ਼ਨ ਵਿੱਚ 10 ਦੀ ਕੋਈ ਵੀ ਘਾਤ ਹੋ ਸਕਦੀ ਹੈ, ਪਰ ਇੰਜੀਨੀਅਰਿੰਗ ਨੋਟੇਸ਼ਨ ਵਿੱਚ ਸਿਰਫ਼ 3 ਦੇ ਗੁਣਜ (ਜਿਵੇਂ 10^3, 10^6, 10^-6) ਹੀ ਵਰਤੇ ਜਾਂਦੇ ਹਨ ਤਾਂ ਜੋ ਰਜਿਸਟਰ ਅਤੇ ਕੈਪਸੀਟਰ ਆਸਾਨੀ ਨਾਲ ਪੜ੍ਹੇ ਜਾ ਸਕਣ।',
            },
            {
              myth: 'An AC sine wave with zero average voltage has zero electrical power.',
              truthEn:
                'While the algebraic average of a symmetric sine wave over a full cycle is zero, the instantaneous power p(t) = v(t)^2 / R is always positive, transferring real thermal energy (RMS power).',
              truthPa:
                'ਹਾਲਾਂਕਿ ਇੱਕ ਪੂਰੇ ਚੱਕਰ ਵਿੱਚ AC ਦਾ ਔਸਤ ਵੋਲਟੇਜ ਜ਼ੀਰੋ ਹੁੰਦਾ ਹੈ, ਪਰ ਵਰਗ (v^2) ਹਮੇਸ਼ਾ ਪਾਜ਼ਿਟਿਵ ਹੁੰਦਾ ਹੈ, ਜਿਸ ਕਾਰਨ ਹੀਟਰ ਅਤੇ ਬਲਬ ਬਿਜਲੀ ਖਪਤ ਕਰਦੇ ਹਨ (RMS ਪਾਵਰ)।',
            },
          ],
          terminologyJson: [
            {
              term: 'Engineering Notation',
              punjabi: 'ਇੰਜੀਨੀਅਰਿੰਗ ਨੋਟੇਸ਼ਨ',
              meaningEn: 'Number representation where exponent of 10 is always a multiple of 3.',
              meaningPa: 'ਸੰਖਿਆ ਨੂੰ 10 ਦੀ ਘਾਤ 3 ਦੇ ਗੁਣਜ ਵਿੱਚ ਲਿਖਣ ਦਾ ਤਰੀਕਾ।',
            },
            {
              term: 'Decibel (dB)',
              punjabi: 'ਡੈਸੀਬਲ',
              meaningEn: 'Logarithmic unit expressing ratio of two values of a physical quantity.',
              meaningPa: 'ਦੋ ਬਿਜਲਈ ਜਾਂ ਧੁਨੀ ਮਾਪਾਂ ਦੇ ਅਨੁਪਾਤ ਨੂੰ ਲਾਗ ਵਿੱਚ ਦਰਸਾਉਣ ਵਾਲੀ ਇਕਾਈ।',
            },
            {
              term: 'Angular Frequency (ω)',
              punjabi: 'ਕੋਣੀ ਫ੍ਰੀਕੁਐਂਸੀ',
              meaningEn: 'Rate of rotation in radians per second: ω = 2 * π * f.',
              meaningPa: 'ਸਾਈਨ ਵੇਵ ਦੇ ਘੁੰਮਣ ਦੀ ਗਤੀ (ਰੇਡੀਅਨ ਪ੍ਰਤੀ ਸਕਿੰਟ)।',
            },
            {
              term: 'Phase Angle (θ)',
              punjabi: 'ਫੇਜ਼ ਕੋਣ',
              meaningEn: 'Fraction of an AC wave cycle that has elapsed relative to a reference origin.',
              meaningPa: 'ਸਿਗਨਲ ਦੀ ਸ਼ੁਰੂਆਤੀ ਸਥਿਤੀ ਜਾਂ ਦੋ ਵੇਵਾਂ ਵਿਚਕਾਰ ਸਮੇਂ ਦਾ ਕੋਣ।',
            },
            {
              term: 'Peak-to-Peak Voltage (Vpp)',
              punjabi: 'ਪੀਕ-ਟੂ-ਪੀਕ ਵੋਲਟੇਜ',
              meaningEn: 'Total voltage difference between positive and negative peaks: 2 * Vpk.',
              meaningPa: 'ਸਭ ਤੋਂ ਉੱਚੇ ਅਤੇ ਸਭ ਤੋਂ ਹੇਠਲੇ ਸਿਰੇ ਵਿਚਕਾਰ ਕੁੱਲ ਵੋਲਟੇਜ ਫ਼ਰਕ।',
            },
            {
              term: 'Root Mean Square (RMS)',
              punjabi: 'ਰੂਟ ਮੀਨ ਸਕੁਏਅਰ (RMS)',
              meaningEn: 'Effective DC-equivalent heating value of an AC waveform (Vpk / √2 for sine).',
              meaningPa: 'AC ਵੇਵ ਦੀ ਅਸਲ ਪ੍ਰਭਾਵੀ ਵੋਲਟੇਜ ਜੋ DC ਬਰਾਬਰ ਗਰਮੀ ਪੈਦਾ ਕਰਦੀ ਹੈ।',
            },
          ],
          interactiveLabId: 'resistor-calc',
          exercisePromptEn:
            'Step 1: Calculate the voltage gain in dB if an operational amplifier receives 12 mV RMS and outputs 2.4 V RMS. Step 2: Convert 0.000047 Farads into microfarads and write its engineering notation.',
          exercisePromptPa:
            'ਕਦਮ 1: ਜੇਕਰ ਇੱਕ ਓਪ-ਐਂਪ ਨੂੰ 12 mV ਮਿਲਦਾ ਹੈ ਅਤੇ ਉਹ 2.4 V ਆਊਟਪੁੱਟ ਦਿੰਦਾ ਹੈ ਤਾਂ dB ਵਿੱਚ ਗੇਨ ਕੱਢੋ। ਕਦਮ 2: 0.000047 Farads ਨੂੰ ਮਾਈਕ੍ਰੋਫੈਰਡ (µF) ਵਿੱਚ ਬਦਲੋ।',
          summaryEn:
            'Engineering mathematics provides the exact language for circuit analysis: SI prefixes scale minute and massive quantities, logarithms convert exponential gains into manageable decibels, and trigonometry describes oscillating AC signals.',
          summaryPa:
            'ਇੰਜੀਨੀਅਰਿੰਗ ਗਣਿਤ ਇਲੈਕਟ੍ਰੋਨਿਕਸ ਦੀ ਮੂਲ ਬੋਲੀ ਹੈ: SI ਪ੍ਰੀਫਿਕਸ ਨਿੱਕੇ ਤੇ ਵੱਡੇ ਮੁੱਲਾਂ ਨੂੰ ਸੁਵਿਧਾਜਨਕ ਬਣਾਉਂਦੇ ਹਨ, ਡੈਸੀਬਲ ਗੇਨ ਨੂੰ ਸੌਖਾ ਕਰਦੇ ਹਨ, ਅਤੇ ਤਿਕੋਣਮਿਤੀ AC ਵੇਵਾਂ ਦੀ ਗਣਨਾ ਕਰਦੀ ਹੈ।',
          furtherReadingJson: [
            'Basic Engineering Circuit Analysis by J. David Irwin & R. Mark Nelms',
            'Advanced Engineering Mathematics by Erwin Kreyszig',
            'NIST Guide to the SI Units (Special Publication 811)',
          ],
          quiz: {
            titleEn: 'Level 0 Assessment: Circuit Mathematics & SI Analysis',
            titlePa: 'ਲੈਵਲ 0 ਟੈਸਟ: ਸਰਕਟ ਗਣਿਤ ਅਤੇ SI ਵਿਸ਼ਲੇਸ਼ਣ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'SI Units',
                promptEn: 'How is a capacitance of 4,700,000 pF written in standard microfarads (µF)?',
                promptPa: '4,700,000 pF ਦੇ ਕੈਪਸੀਟਰ ਨੂੰ ਮਾਈਕ੍ਰੋਫੈਰਡ (µF) ਵਿੱਚ ਕਿਵੇਂ ਲਿਖਿਆ ਜਾਵੇਗਾ?',
                optionsJson: ['0.47 µF', '4.7 µF', '47 µF', '0.047 µF'],
                correctAnswer: '4.7 µF',
                explanationEn:
                  '4,700,000 pF = 4,700,000 * 10^-12 F = 4.7 * 10^-6 F = 4.7 µF.',
                explanationPa:
                  '1 µF = 1,000,000 pF ਹੁੰਦਾ ਹੈ। ਇਸ ਲਈ 4,700,000 ਨੂੰ 1,000,000 ਨਾਲ ਭਾਗ ਕਰਨ ਤੇ 4.7 µF ਆਉਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Decibels',
                promptEn: 'If an amplifier increases a signal voltage from 10 mV to 1.0 V, what is its voltage gain in dB?',
                promptPa: 'ਜੇਕਰ ਕੋਈ ਐਂਪਲੀਫਾਇਰ 10 mV ਸਿਗਨਲ ਨੂੰ ਵਧਾ ਕੇ 1.0 V ਕਰ ਦਿੰਦਾ ਹੈ, ਤਾਂ dB ਵਿੱਚ ਗੇਨ ਕਿੰਨਾ ਹੈ?',
                optionsJson: ['20 dB', '40 dB', '10 dB', '100 dB'],
                correctAnswer: '40 dB',
                explanationEn:
                  'Voltage ratio = 1.0 V / 0.010 V = 100. Av(dB) = 20 * log10(100) = 20 * 2 = 40 dB.',
                explanationPa:
                  'ਅਨੁਪਾਤ = 1000 mV / 10 mV = 100। Av(dB) = 20 * log10(100) = 20 * 2 = 40 dB।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Decibels',
                promptEn: 'A passive filter has a power loss of -3 dB. What percentage of the input power reaches the output?',
                promptPa: 'ਇੱਕ ਪੈਸਿਵ ਫਿਲਟਰ ਵਿੱਚ -3 dB ਦਾ ਪਾਵਰ ਨੁਕਸਾਨ ਹੁੰਦਾ ਹੈ। ਇਨਪੁਟ ਪਾਵਰ ਦਾ ਕਿੰਨੇ ਪ੍ਰਤੀਸ਼ਤ ਆਊਟਪੁੱਟ ਤੇ ਪਹੁੰਚਦਾ ਹੈ?',
                optionsJson: ['50%', '70.7%', '25%', '33.3%'],
                correctAnswer: '50%',
                explanationEn:
                  'Pout / Pin = 10^(-3/10) = 10^(-0.3) ≈ 0.501, meaning exactly 50% half-power.',
                explanationPa:
                  '-3 dB ਦਾ ਮਤਲਬ ਹੁੰਦਾ ਹੈ ਅੱਧੀ ਪਾਵਰ (50% ਪਾਵਰ)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Engineering Notation',
                promptEn: 'Which of the following is written in correct engineering notation for a 680,000 Ω resistor?',
                promptPa: '680,000 Ω ਦੇ ਰਜਿਸਟਰ ਲਈ ਸਹੀ ਇੰਜੀਨੀਅਰਿੰਗ ਨੋਟੇਸ਼ਨ ਕਿਹੜੀ ਹੈ?',
                optionsJson: ['68 * 10^4 Ω', '680 * 10^3 Ω (680 kΩ)', '6.8 * 10^5 Ω', '0.68 * 10^6 Ω'],
                correctAnswer: '680 * 10^3 Ω (680 kΩ)',
                explanationEn:
                  'Engineering notation restricts the 10 exponent to multiples of 3 (10^3 = kilo). Thus 680 * 10^3 Ω is correct.',
                explanationPa:
                  'ਇੰਜੀਨੀਅਰਿੰਗ ਨੋਟੇਸ਼ਨ ਵਿੱਚ ਘਾਤ 3 ਦਾ ਗੁਣਜ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ, ਇਸ ਲਈ 680 kΩ (680 * 10^3 Ω) ਬਿਲਕੁਲ ਸਹੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Trigonometry',
                promptEn: 'What is the angular frequency (ω) of a 50 Hz domestic alternating mains voltage in India/Punjab?',
                promptPa: 'ਪੰਜਾਬ/ਭਾਰਤ ਵਿੱਚ 50 Hz ਦੀ ਘਰੇਲੂ ਬਿਜਲੀ ਦੀ ਕੋਣੀ ਫ੍ਰੀਕੁਐਂਸੀ (ω) ਕਿੰਨੀ ਹੁੰਦੀ ਹੈ?',
                optionsJson: ['100 rad/s', '314.16 rad/s', '157.08 rad/s', '50 rad/s'],
                correctAnswer: '314.16 rad/s',
                explanationEn:
                  'ω = 2 * π * f = 2 * 3.14159 * 50 = 314.16 rad/s.',
                explanationPa:
                  'ਕੋਣੀ ਵੇਗ ω = 2 * π * f = 2 * 3.1416 * 50 = 314.16 ਰੇਡੀਅਨ ਪ੍ਰਤੀ ਸਕਿੰਟ ਹੁੰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Waveforms',
                promptEn: 'If a pure sine wave has an RMS voltage of 230 V, what is its peak voltage (Vpk)?',
                promptPa: 'ਜੇਕਰ ਇੱਕ ਸ਼ੁੱਧ ਸਾਈਨ ਵੇਵ ਦੀ RMS ਵੋਲਟੇਜ 230 V ਹੈ, ਤਾਂ ਇਸਦੀ ਪੀਕ ਵੋਲਟੇਜ (Vpk) ਕਿੰਨੀ ਹੋਵੇਗੀ?',
                optionsJson: ['230 V', '325.27 V', '460 V', '162.63 V'],
                correctAnswer: '325.27 V',
                explanationEn:
                  'Vpk = Vrms * √2 = 230 * 1.4142 ≈ 325.27 V.',
                explanationPa:
                  'ਪੀਕ ਵੋਲਟੇਜ = 230 * √2 = 230 * 1.4142 ≈ 325.3 ਵੋਲਟ ਹੁੰਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Logarithms',
                promptEn: 'What is the result of log10(100,000)?',
                promptPa: 'log10(100,000) ਦਾ ਮੁੱਲ ਕੀ ਹੈ?',
                optionsJson: ['3', '4', '5', '6'],
                correctAnswer: '5',
                explanationEn:
                  '100,000 = 10^5, so log10(10^5) = 5.',
                explanationPa:
                  '100,000 ਵਿੱਚ 5 ਸਿਫ਼ਰਾਂ ਹਨ (10^5), ਇਸ ਲਈ ਲਾਗ ਦਾ ਮੁੱਲ 5 ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Algebra',
                promptEn: 'Solving P = V^2 / R for voltage V yields which formula?',
                promptPa: 'ਫਾਰਮੂਲੇ P = V^2 / R ਵਿੱਚੋਂ ਵੋਲਟੇਜ V ਦਾ ਸਹੀ ਸੂਤਰ ਕੀ ਨਿਕਲਦਾ ਹੈ?',
                optionsJson: ['V = P * R', 'V = √(P * R)', 'V = √(P / R)', 'V = P^2 * R'],
                correctAnswer: 'V = √(P * R)',
                explanationEn:
                  'Multiplying both sides by R gives V^2 = P * R. Taking the square root gives V = √(P * R).',
                explanationPa:
                  'V^2 = P * R ਹੁੰਦਾ ਹੈ, ਦੋਵੇਂ ਪਾਸੇ ਵਰਗਮੂਲ ਲੈਣ ਤੇ V = √(P * R) ਬਣਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'SI Units',
                promptEn: 'How many milliamperes (mA) are in 0.035 Amperes?',
                promptPa: '0.035 Amperes ਵਿੱਚ ਕਿੰਨੇ ਮਿਲੀਐਂਪੀਅਰ (mA) ਹੁੰਦੇ ਹਨ?',
                optionsJson: ['3.5 mA', '35 mA', '350 mA', '0.35 mA'],
                correctAnswer: '35 mA',
                explanationEn:
                  '0.035 A * 1,000 mA/A = 35 mA.',
                explanationPa:
                  '1 Ampere ਵਿੱਚ 1000 mA ਹੁੰਦੇ ਹਨ, ਇਸ ਲਈ 0.035 * 1000 = 35 mA।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Geometry & Angles',
                promptEn: 'How many radians correspond to a 90-degree phase shift in an AC waveform?',
                promptPa: 'AC ਵੇਵਫਾਰਮ ਵਿੱਚ 90 ਡਿਗਰੀ ਦੇ ਫੇਜ਼ ਸ਼ਿਫਟ ਵਿੱਚ ਕਿੰਨੇ ਰੇਡੀਅਨ ਹੁੰਦੇ ਹਨ?',
                optionsJson: ['π radians', 'π / 2 radians (≈ 1.571 rad)', '2π radians', 'π / 4 radians'],
                correctAnswer: 'π / 2 radians (≈ 1.571 rad)',
                explanationEn:
                  'Angle in radians = Degrees * (π / 180) = 90 * (π / 180) = π / 2 ≈ 1.5708 rad.',
                explanationPa:
                  '180° = π ਰੇਡੀਅਨ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ 90° = π / 2 ਰੇਡੀਅਨ (ਲਗਭਗ 1.571 rad) ਹੁੰਦਾ ਹੈ।',
              },
            ],
          },
        },
        {
          slug: 'calculus-vectors-electromagnetic-physics',
          orderIndex: 2,
          titleEn: '0.2 Calculus, Phasors & Electromagnetic Physics for Electronics',
          titlePa: '0.2 ਕੈਲਕੂਲਸ, ਫੇਜ਼ਰ ਅਤੇ ਇਲੈਕਟ੍ਰੋਮੈਗਨੈਟਿਕ ਭੌਤਿਕ ਵਿਗਿਆਨ',
          objectivesJson: [
            'Apply differential equations to calculate capacitor voltage changes (i = C dv/dt) and inductor induced voltages (v = L di/dt)',
            'Represent reactive circuit impedances using complex numbers (Z = R + jX) and polar phasors',
            'Understand Gauss’s Law, Coulomb’s Law, and magnetic flux density (B = mu * H)',
            'Analyze wave propagation, speed of light in dielectric substrates, and electromagnetic skin depth',
          ],
          prerequisitesJson: ['0.1 Arithmetic, Algebra, SI Units, Decibels & Trigonometry'],
          childAnalogyEn:
            'Imagine filling a water tank (Capacitor) in your house! The water level does not jump to the top instantly; it rises gradually as water pours in over time (Calculus Integral). If you shut the valve instantly, the moving water hammers the pipe (Inductor Back-EMF)! Calculus is just the science of tracking how fast things change over time.',
          childAnalogyPa:
            'ਘਰ ਦੀ ਪਾਣੀ ਵਾਲੀ ਟੈਂਕੀ (Capacitor) ਦੀ ਕਲਪਨਾ ਕਰੋ! ਜਦੋਂ ਮੋਟਰ ਚਲਦੀ ਹੈ ਤਾਂ ਪਾਣੀ ਦਾ ਪੱਧਰ ਇੱਕ ਦਮ ਨਹੀਂ ਭਰਦਾ, ਸਗੋਂ ਸਮੇਂ ਦੇ ਨਾਲ ਹੌਲੀ-ਹੌਲੀ ਚੜ੍ਹਦਾ ਹੈ (ਕੈਲਕੂਲਸ ਦਾ ਇੰਟੀਗ੍ਰਲ)। ਜੇਕਰ ਤੁਸੀਂ ਤੇਜ਼ ਚੱਲਦੇ ਪਾਣੀ ਦਾ ਵਾਲਵ ਇੱਕ ਦਮ ਬੰਦ ਕਰ ਦਿਓ, ਤਾਂ ਪਾਈਪ ਵਿੱਚ ਧਮਾਕਾ ਹੁੰਦਾ ਹੈ (ਇੰਡਕਟਰ ਦਾ ਬੈਕ-EMF)! ਕੈਲਕੂਲਸ ਇਹ ਹਿਸਾਬ ਲਗਾਉਂਦਾ ਹੈ ਕਿ ਸਮੇਂ ਦੇ ਨਾਲ ਚੀਜ਼ਾਂ ਕਿੰਨੀ ਤੇਜ਼ੀ ਨਾਲ ਬਦਲ ਰਹੀਆਂ ਹਨ।',
          technicalExplanationEn:
            'Dynamic circuit behavior is dictated by time-derivative differential relationships and vector electromagnetic fields:\n\n1. Capacitive Derivative Law:\ni(t) = C * (dv / dt)\nInstantaneous capacitor current is directly proportional to the rate of voltage change. If voltage is constant (DC steady-state), dv/dt = 0, so capacitor current is zero (open circuit).\n\n2. Inductive Derivative Law:\nv(t) = L * (di / dt)\nInstantaneous inductor voltage opposes any change in current (Lenz’s Law). A step change in current induces an infinite theoretical voltage spike.\n\n3. Complex Impedance & Phasors:\nIn AC circuits, time-domain sinusoids are mapped to the complex frequency plane using Euler’s identity e^(jωt) = cos(ωt) + j*sin(ωt):\n• Resistor Impedance: Z_R = R + j0\n• Inductor Impedance: Z_L = 0 + j*ωL = j*X_L\n• Capacitor Impedance: Z_C = 0 - j / (ωC) = -j*X_C\n• Total Polar Form: Z = |Z| * e^(jθ) = √(R^2 + X^2) ∠ arctan(X / R)\n\n4. Electromagnetic Field Fundamentals:\n• Electric Field (E): Force per unit charge, E = -∇V = V / d (V/m)\n• Magnetic Flux (Φ): Φ = ∫ B · dA (Webers, Wb)\n• Magnetic Flux Density (B): B = µ * H (Tesla, T), where µ = µ0 * µr.',
          technicalExplanationPa:
            'ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਵਿੱਚ ਕੰਪੋਨੈਂਟਾਂ ਦਾ ਵਿਵਹਾਰ ਕੈਲਕੂਲਸ ਅਤੇ ਇਲੈਕਟ੍ਰੋਮੈਗਨੈਟਿਕ ਖੇਤਰਾਂ ਉੱਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ:\n\n1. ਕੈਪਸੀਟਰ ਦਾ ਨਿਯਮ:\ni(t) = C * (dv/dt)\nਕੈਪਸੀਟਰ ਵਿੱਚੋਂ ਕਰੰਟ ਤਾਂ ਹੀ ਲੰਘਦਾ ਹੈ ਜੇਕਰ ਵੋਲਟੇਜ ਸਮੇਂ ਦੇ ਨਾਲ ਬਦਲ ਰਹੀ ਹੋਵੇ। DC ਵਿੱਚ ਵੋਲਟੇਜ ਸਥਿਰ ਹੁੰਦੀ ਹੈ (dv/dt = 0), ਇਸ ਲਈ ਕੈਪਸੀਟਰ DC ਨੂੰ ਰੋਕ ਦਿੰਦਾ ਹੈ (Open Circuit)।\n\n2. ਇੰਡਕਟਰ ਦਾ ਨਿਯਮ:\nv(t) = L * (di/dt)\nਇੰਡਕਟਰ ਕਰੰਟ ਵਿੱਚ ਤਬਦੀਲੀ ਦਾ ਵਿਰੋਧ ਕਰਦਾ ਹੈ (Lenz’s Law)। ਜੇਕਰ ਕਰੰਟ ਅਚਾਨਕ ਕੱਟਿਆ ਜਾਵੇ, ਤਾਂ ਇੰਡਕਟਰ ਬਹੁਤ ਵੱਡਾ ਹਾਈ-ਵੋਲਟੇਜ ਸਪਾਈਕ ਪੈਦਾ ਕਰਦਾ ਹੈ।\n\n3. ਕੰਪਲੈਕਸ ਇੰਪੀਡੈਂਸ (Complex Impedance) ਅਤੇ ਫੇਜ਼ਰ:\n• ਰਜਿਸਟਰ: Z = R\n• ਇੰਡਕਟਰ: ZL = +j*ωL (ਕਰੰਟ ਵੋਲਟੇਜ ਤੋਂ 90° ਪਿੱਛੇ ਰਹਿੰਦਾ ਹੈ)\n• ਕੈਪਸੀਟਰ: ZC = -j / (ωC) (ਕਰੰਟ ਵੋਲਟੇਜ ਤੋਂ 90° ਅੱਗੇ ਨਿਕਲ ਜਾਂਦਾ ਹੈ)\n• ਕੁੱਲ ਰੁਕਾਵਟ: |Z| = √(R^2 + X^2)।',
          practicalExampleEn:
            'When a relay coil (inductor of 100 mH carrying 100 mA) is switched off by a transistor in 1 microsecond, the induced back-EMF is v = L * (di/dt) = 0.1 H * (0.1 A / 10^-6 s) = 10,000 Volts! Without a reverse freewheeling diode (flyback diode) across the coil, this massive induced voltage spike instantly destroys the driving transistor.',
          practicalExamplePa:
            'ਜਦੋਂ ਇੱਕ ਰਿਲੇਅ ਕੁਆਇਲ (100 mH ਇੰਡਕਟਰ ਜਿਸ ਵਿੱਚ 100 mA ਕਰੰਟ ਹੈ) ਨੂੰ ਟ੍ਰਾਂਜਿਸਟਰ ਰਾਹੀਂ 1 ਮਾਈਕ੍ਰੋਸਕਿੰਟ ਵਿੱਚ ਬੰਦ ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਪੈਦਾ ਹੋਈ ਬੈਕ-ਵੋਲਟੇਜ v = L * (di/dt) = 0.1 * (0.1 / 10^-6) = 10,000 ਵੋਲਟ ਹੋ ਜਾਂਦੀ ਹੈ! ਜੇਕਰ ਕੁਆਇਲ ਦੇ ਸਮਾਨਾਂਤਰ ਇੱਕ ਫਲਾਈਬੈਕ ਡਾਇਓਡ (Flyback Diode) ਨਾ ਲਗਾਇਆ ਜਾਵੇ ਤਾਂ ਇਹ 10,000 ਵੋਲਟ ਦਾ ਝਟਕਾ ਟ੍ਰਾਂਜਿਸਟਰ ਨੂੰ ਸੈਕਿੰਡ ਦੇ ਲੱਖਵੇਂ ਹਿੱਸੇ ਵਿੱਚ ਸਾੜ ਕੇ ਸੁਆਹ ਕਰ ਦੇਵੇਗਾ।',
          codeDemo: `// TypeScript / Math: Complex Phasor Impedance Calculator
export interface ComplexNumber {
  real: number; // Resistance (R)
  imag: number; // Reactance (X = XL - XC)
}

export function calcRlcImpedance(r: number, lHenries: number, cFarads: number, freqHz: number) {
  const omega = 2 * Math.PI * freqHz;
  const xL = omega * lHenries;
  const xC = 1 / (omega * cFarads);
  const netX = xL - xC;

  const magnitude = Math.sqrt(r * r + netX * netX);
  const phaseDeg = (Math.atan2(netX, r) * 180) / Math.PI;

  return {
    resistance: r,
    inductiveReactance: xL,
    capacitiveReactance: xC,
    netReactance: netX,
    magnitudeZ: magnitude,
    phaseAngleDegrees: phaseDeg,
  };
}

// Example: 100 Ohm resistor, 10mH inductor, 100nF capacitor at 1000 Hz
const res = calcRlcImpedance(100, 0.010, 100e-9, 1000);
console.log('Impedance Magnitude:', res.magnitudeZ.toFixed(2), 'Ω');
console.log('Phase Angle:', res.phaseAngleDegrees.toFixed(2), '°');`,
          misconceptionsJson: [
            {
              myth: 'Electrons travel at the speed of light through copper circuit traces.',
              truthEn:
                'Individual electrons drift through copper at a snail’s pace (drift velocity typically less than 1 mm per second). However, the electromagnetic wave (Poynting vector) travels along the conductor at roughly 50% to 70% of the speed of light.',
              truthPa:
                'ਤਾਰ ਵਿੱਚ ਇਲੈਕਟ੍ਰਾਨ ਬਹੁਤ ਹੌਲੀ ਤੁਰਦੇ ਹਨ (1 ਮਿਲੀਮੀਟਰ ਪ੍ਰਤੀ ਸਕਿੰਟ ਤੋਂ ਵੀ ਘੱਟ)। ਪਰ ਬਿਜਲਈ ਤਰੰਗ (Electromagnetic Field) ਪ੍ਰਕਾਸ਼ ਦੀ ਗਤੀ ਦੇ ਲਗਭਗ 60-70% ਦੀ ਰਫ਼ਤਾਰ ਨਾਲ ਦੌੜਦੀ ਹੈ।',
            },
            {
              myth: 'Capacitor impedance is just 1 / (omega * C).',
              truthEn:
                'The scalar capacitive reactance is Xc = 1 / (omega * C), but its complex impedance is Zc = -j / (omega * C) = 1 / (j * omega * C), which carries a critical negative 90-degree phase shift.',
              truthPa:
                'ਕੈਪਸੀਟਰ ਦੀ ਰਿਐਕਟੈਂਸ 1/(ωC) ਹੈ, ਪਰ ਇਸਦਾ ਕੰਪਲੈਕਸ ਇੰਪੀਡੈਂਸ -j/(ωC) ਹੁੰਦਾ ਹੈ ਜੋ -90 ਡਿਗਰੀ ਦਾ ਫੇਜ਼ ਸ਼ਿਫਟ ਲਿਆਉਂਦਾ ਹੈ।',
            },
            {
              myth: 'An inductor stores energy in an electric field.',
              truthEn:
                'Inductors store kinetic energy in their surrounding magnetic field (E = 0.5 * L * I^2), whereas capacitors store potential energy in their electrostatic field (E = 0.5 * C * V^2).',
              truthPa:
                'ਇੰਡਕਟਰ ਊਰਜਾ ਨੂੰ ਚੁੰਬਕੀ ਖੇਤਰ (Magnetic Field) ਵਿੱਚ ਸਟੋਰ ਕਰਦਾ ਹੈ, ਜਦਕਿ ਕੈਪਸੀਟਰ ਬਿਜਲਈ ਖੇਤਰ (Electric Field) ਵਿੱਚ ਸਟੋਰ ਕਰਦਾ ਹੈ।',
            },
          ],
          terminologyJson: [
            {
              term: 'Phasor',
              punjabi: 'ਫੇਜ਼ਰ',
              meaningEn: 'Complex vector representing sinusoidal magnitude and phase angle independent of time.',
              meaningPa: 'ਕੰਪਲੈਕਸ ਵੈਕਟਰ ਜੋ ਸਾਈਨ ਵੇਵ ਦੇ ਮਾਪ ਅਤੇ ਕੋਣ ਨੂੰ ਸਥਿਰ ਤੌਰ ਤੇ ਦਰਸਾਉਂਦਾ ਹੈ।',
            },
            {
              term: 'Reactance (X)',
              punjabi: 'ਰਿਐਕਟੈਂਸ',
              meaningEn: 'Opposition to alternating current flow caused by capacitance or inductance.',
              meaningPa: 'ਕੈਪਸੀਟਰ ਜਾਂ ਇੰਡਕਟਰ ਵੱਲੋਂ AC ਕਰੰਟ ਦੇ ਵਹਾਅ ਵਿੱਚ ਪਾਈ ਜਾਣ ਵਾਲੀ ਰੁਕਾਵਟ।',
            },
            {
              term: 'Impedance (Z)',
              punjabi: 'ਇੰਪੀਡੈਂਸ',
              meaningEn: 'Total combined opposition to AC current consisting of Resistance and Reactance (R + jX).',
              meaningPa: 'AC ਸਰਕਟ ਦੀ ਕੁੱਲ ਰੁਕਾਵਟ ਜਿਸ ਵਿੱਚ ਰਜਿਸਟੈਂਸ ਅਤੇ ਰਿਐਕਟੈਂਸ ਦੋਵੇਂ ਸ਼ਾਮਲ ਹੁੰਦੇ ਹਨ।',
            },
            {
              term: 'Back-EMF',
              punjabi: 'ਬੈਕ-EMF',
              meaningEn: 'Counter-electromotive force induced by a changing magnetic flux opposing its cause (Lenz’s Law).',
              meaningPa: 'ਬਦਲਦੇ ਚੁੰਬਕੀ ਖੇਤਰ ਕਾਰਨ ਪੈਦਾ ਹੋਈ ਉਲਟ ਵੋਲਟੇਜ ਜੋ ਕਰੰਟ ਬਦਲਣ ਦਾ ਵਿਰੋਧ ਕਰਦੀ ਹੈ।',
            },
            {
              term: 'Skin Effect',
              punjabi: 'ਸਕਿਨ ਇਫੈਕਟ',
              meaningEn: 'Tendency of high-frequency AC current to concentrate near the outer surface of a conductor.',
              meaningPa: 'ਹਾਈ ਫ੍ਰੀਕੁਐਂਸੀ ਉੱਤੇ AC ਕਰੰਟ ਦਾ ਤਾਰ ਦੀ ਬਾਹਰੀ ਸਤਹ ਦੇ ਕੋਲ ਹੀ ਵਹਿਣ ਦਾ ਵਰਤਾਰਾ।',
            },
            {
              term: 'Dielectric Permittivity (ε)',
              punjabi: 'ਡਾਇਇਲੈਕਟ੍ਰਿਕ ਪਰਮਿਟੀਵਿਟੀ',
              meaningEn: 'Measure of how much resistance is encountered when forming an electric field in a medium.',
              meaningPa: 'ਕਿਸੇ ਪਦਾਰਥ ਵਿੱਚੋਂ ਬਿਜਲਈ ਲਾਈਨਾਂ ਲੰਘਣ ਦੀ ਸਮਰੱਥਾ ਦਾ ਮਾਪ।',
            },
          ],
          interactiveLabId: 'resistor-calc',
          exercisePromptEn:
            'Problem: An inductor of 50 mH carries a current that ramps from 0 A to 2 A in 5 milliseconds. Calculate: (1) di/dt, (2) the induced back-EMF voltage, and (3) the peak magnetic energy stored in Joules.',
          exercisePromptPa:
            'ਸਵਾਲ: ਇੱਕ 50 mH ਇੰਡਕਟਰ ਵਿੱਚ ਕਰੰਟ 5 ਮਿਲੀਸਕਿੰਟ ਵਿੱਚ 0 ਤੋਂ ਵਧ ਕੇ 2 ਐਂਪੀਅਰ ਹੁੰਦਾ ਹੈ। ਪਤਾ ਕਰੋ: (1) di/dt, (2) ਪੈਦਾ ਹੋਈ ਬੈਕ-EMF ਵੋਲਟੇਜ, ਅਤੇ (3) ਸਟੋਰ ਹੋਈ ਕੁੱਲ ਚੁੰਬਕੀ ਊਰਜਾ।',
          summaryEn:
            'Dynamic circuit electronics unites calculus and electromagnetics: capacitors integrate charge and differentiate voltage, inductors store magnetic energy and resist current changes, and complex phasors reduce differential equations to algebraic Ohm’s law calculations.',
          summaryPa:
            'ਗਤੀਸ਼ੀਲ ਸਰਕਟਾਂ ਵਿੱਚ ਕੈਲਕੂਲਸ ਅਤੇ ਚੁੰਬਕਤਾ ਇਕੱਠੇ ਕੰਮ ਕਰਦੇ ਹਨ: ਕੈਪਸੀਟਰ ਚਾਰਜ ਜਮ੍ਹਾਂ ਕਰਦੇ ਹਨ, ਇੰਡਕਟਰ ਕਰੰਟ ਬਦਲਣ ਦਾ ਵਿਰੋਧ ਕਰਦੇ ਹਨ, ਅਤੇ ਕੰਪਲੈਕਸ ਫੇਜ਼ਰ ਗੁੰਝਲਦਾਰ ਸਮੀਕਰਨਾਂ ਨੂੰ ਸੌਖੇ ਢੰਗ ਨਾਲ ਹੱਲ ਕਰ ਦਿੰਦੇ ਹਨ।',
          furtherReadingJson: [
            'Fundamentals of Applied Electromagnetics by Fawwaz T. Ulaby',
            'The Feynman Lectures on Physics, Vol. II: Electromagnetism and Matter',
            'Engineering Electromagnetics by William H. Hayt & John A. Buck',
          ],
          quiz: {
            titleEn: 'Level 0 Assessment: Calculus, Phasors & Electromagnetics',
            titlePa: 'ਲੈਵਲ 0 ਟੈਸਟ: ਕੈਲਕੂਲਸ, ਫੇਜ਼ਰ ਅਤੇ ਇਲੈਕਟ੍ਰੋਮੈਗਨੇਟਿਜ਼ਮ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'Capacitor Calculus',
                promptEn: 'A 10 µF capacitor experiences a steady voltage change from 0 V to 10 V over 2 milliseconds. What current flows through it?',
                promptPa: 'ਇੱਕ 10 µF ਕੈਪਸੀਟਰ ਉੱਤੇ ਵੋਲਟੇਜ 2 ਮਿਲੀਸਕਿੰਟ ਵਿੱਚ 0 ਤੋਂ 10 ਵੋਲਟ ਹੁੰਦੀ ਹੈ। ਇਸ ਵਿੱਚੋਂ ਕਿੰਨਾ ਕਰੰਟ ਲੰਘੇਗਾ?',
                optionsJson: ['50 mA', '20 mA', '100 mA', '5 mA'],
                correctAnswer: '50 mA',
                explanationEn:
                  'dv/dt = 10 V / 0.002 s = 5000 V/s. i = C * (dv/dt) = (10 * 10^-6 F) * 5000 V/s = 0.050 A = 50 mA.',
                explanationPa:
                  'dv/dt = 10 / 0.002 = 5000 V/s। ਕਰੰਟ i = C * (dv/dt) = 10^-5 * 5000 = 0.050 A = 50 mA।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Inductor Calculus',
                promptEn: 'What is the voltage across a 200 mH inductor when its current is constant at 5 A DC?',
                promptPa: 'ਇੱਕ 200 mH ਇੰਡਕਟਰ ਵਿੱਚੋਂ ਜਦੋਂ ਸਥਿਰ 5 A DC ਕਰੰਟ ਲੰਘ ਰਿਹਾ ਹੋਵੇ ਤਾਂ ਉਸਦੇ ਆਰ-ਪਾਰ ਵੋਲਟੇਜ ਕਿੰਨੀ ਹੋਵੇਗੀ?',
                optionsJson: ['0 V', '1 V', '100 V', '10 V'],
                correctAnswer: '0 V',
                explanationEn:
                  'For constant DC, di/dt = 0. Therefore, v = L * (di/dt) = L * 0 = 0 V (acts as a short circuit with zero ideal resistance).',
                explanationPa:
                  'ਸਥਿਰ DC ਕਰੰਟ ਵਿੱਚ di/dt = 0 ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ ਵੋਲਟੇਜ v = L * 0 = 0 ਵੋਲਟ ਹੁੰਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Phasors',
                promptEn: 'What is the complex impedance of an ideal 10 µF capacitor at an angular frequency ω = 1000 rad/s?',
                promptPa: 'ਕੋਣੀ ਫ੍ਰੀਕੁਐਂਸੀ ω = 1000 rad/s ਉੱਤੇ 10 µF ਕੈਪਸੀਟਰ ਦਾ ਕੰਪਲੈਕਸ ਇੰਪੀਡੈਂਸ ਕਿੰਨਾ ਹੋਵੇਗਾ?',
                optionsJson: ['-j 100 Ω', '+j 100 Ω', '-j 10 Ω', '+j 10 Ω'],
                correctAnswer: '-j 100 Ω',
                explanationEn:
                  'Zc = -j / (ω * C) = -j / (1000 * 10^-5) = -j / 0.01 = -j 100 Ω.',
                explanationPa:
                  'Zc = -j / (ωC) = -j / (1000 * 10^-5) = -j 100 Ω।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Energy Storage',
                promptEn: 'How much energy in Joules is stored in a 470 µF capacitor charged to 50 Volts?',
                promptPa: '50 ਵੋਲਟ ਤੇ ਚਾਰਜ ਕੀਤੇ 470 µF ਕੈਪਸੀਟਰ ਵਿੱਚ ਕਿੰਨੇ ਜੂਲ (Joules) ਊਰਜਾ ਸਟੋਰ ਹੁੰਦੀ ਹੈ?',
                optionsJson: ['0.5875 J', '1.175 J', '0.0235 J', '5.875 J'],
                correctAnswer: '0.5875 J',
                explanationEn:
                  'E = 0.5 * C * V^2 = 0.5 * (470 * 10^-6 F) * 2500 V^2 = 0.5875 Joules.',
                explanationPa:
                  'ਊਰਜਾ E = 0.5 * C * V^2 = 0.5 * 0.00047 * 2500 = 0.5875 ਜੂਲ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Inductor Energy',
                promptEn: 'How much magnetic energy is stored in a 2 Henry filter choke carrying 3 Amperes of current?',
                promptPa: '3 ਐਂਪੀਅਰ ਕਰੰਟ ਵਾਲੇ 2 ਹੈਨਰੀ (Henry) ਦੇ ਚੋਕ ਇੰਡਕਟਰ ਵਿੱਚ ਕਿੰਨੀ ਚੁੰਬਕੀ ਊਰਜਾ ਸਟੋਰ ਹੁੰਦੀ ਹੈ?',
                optionsJson: ['9 Joules', '18 Joules', '6 Joules', '3 Joules'],
                correctAnswer: '9 Joules',
                explanationEn:
                  'E = 0.5 * L * I^2 = 0.5 * 2 H * (3 A)^2 = 0.5 * 2 * 9 = 9 Joules.',
                explanationPa:
                  'E = 0.5 * L * I^2 = 0.5 * 2 * 9 = 9 ਜੂਲ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Electromagnetic Waves',
                promptEn: 'What happens to the speed of an electromagnetic signal when traveling through a FR-4 PCB with dielectric constant εr = 4.0?',
                promptPa: 'ਜਦੋਂ ਸਿਗਨਲ FR-4 PCB (ਜਿਸਦੀ εr = 4.0 ਹੈ) ਵਿੱਚੋਂ ਲੰਘਦਾ ਹੈ ਤਾਂ ਉਸਦੀ ਰਫ਼ਤਾਰ ਤੇ ਕੀ ਅਸਰ ਪੈਂਦਾ ਹੈ?',
                optionsJson: [
                  'It slows down to half the speed of light (c / 2 ≈ 15 cm/ns)',
                  'It speeds up to twice the speed of light',
                  'It stays exactly at c (30 cm/ns)',
                  'It stops completely',
                ],
                correctAnswer: 'It slows down to half the speed of light (c / 2 ≈ 15 cm/ns)',
                explanationEn:
                  'Velocity v = c / √(εr) = c / √4 = c / 2 ≈ 3 * 10^8 / 2 = 1.5 * 10^8 m/s = 15 cm/ns.',
                explanationPa:
                  'ਸਿਗਨਲ ਦੀ ਗਤੀ v = c / √εr = c / 2 ਰਹਿ ਜਾਂਦੀ ਹੈ (ਲਗਭਗ 15 ਸੈਂਟੀਮੀਟਰ ਪ੍ਰਤੀ ਨੈਨੋਸਕਿੰਟ)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Skin Effect',
                promptEn: 'Why do high-frequency radio frequency (RF) circuits use hollow or silver-plated copper conductors?',
                promptPa: 'ਹਾਈ-ਫ੍ਰੀਕੁਐਂਸੀ RF ਸਰਕਟਾਂ ਵਿੱਚ ਖੋਖਲੀਆਂ ਜਾਂ ਚਾਂਦੀ ਚੜ੍ਹੀਆਂ ਤਾਂਬੇ ਦੀਆਂ ਤਾਰਾਂ ਕਿਉਂ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ?',
                optionsJson: [
                  'Skin effect forces high-frequency current to travel exclusively along the outer surface',
                  'Hollow conductors prevent magnetic fields from leaking',
                  'Silver lowers the weight of the PCB',
                  'It prevents DC resistance from dropping',
                ],
                correctAnswer: 'Skin effect forces high-frequency current to travel exclusively along the outer surface',
                explanationEn:
                  'At RF frequencies, skin depth is fractions of a millimeter. Since current only flows in the outer skin, plating or hollow tubing optimizes conductivity without wasting metal.',
                explanationPa:
                  'ਸਕਿਨ ਇਫੈਕਟ ਕਾਰਨ ਹਾਈ ਫ੍ਰੀਕੁਐਂਸੀ ਕਰੰਟ ਸਿਰਫ਼ ਬਾਹਰੀ ਸਤਹ ਤੇ ਵਗਦਾ ਹੈ, ਇਸ ਲਈ ਬਾਹਰ ਚਾਂਦੀ ਲਗਾਉਣ ਨਾਲ ਰੁਕਾਵਟ ਘਟ ਜਾਂਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Phasor Phase',
                promptEn: 'In a purely inductive AC circuit, what is the phase relationship between voltage and current?',
                promptPa: 'ਇੱਕ ਸ਼ੁੱਧ ਇੰਡਕਟਿਵ AC ਸਰਕਟ ਵਿੱਚ ਵੋਲਟੇਜ ਅਤੇ ਕਰੰਟ ਵਿਚਕਾਰ ਕੀ ਸੰਬੰਧ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'Voltage leads current by 90 degrees',
                  'Current leads voltage by 90 degrees',
                  'Voltage and current are completely in phase (0 degrees)',
                  'Voltage and current are 180 degrees out of phase',
                ],
                correctAnswer: 'Voltage leads current by 90 degrees',
                explanationEn:
                  'Remember "ELI the ICE man": In an Inductor (L), Voltage (E) leads Current (I) by 90° (ELI).',
                explanationPa:
                  'ਇੰਡਕਟਰ ਵਿੱਚ ਵੋਲਟੇਜ ਕਰੰਟ ਤੋਂ 90 ਡਿਗਰੀ ਅੱਗੇ (Lead) ਚਲਦੀ ਹੈ (ELI ਨਿਯਮ)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Complex Numbers',
                promptEn: 'What is the magnitude of an impedance Z = 30 + j40 Ω?',
                promptPa: 'ਇੰਪੀਡੈਂਸ Z = 30 + j40 Ω ਦਾ ਕੁੱਲ ਮਾਪ (|Z|) ਕਿੰਨਾ ਹੈ?',
                optionsJson: ['50 Ω', '70 Ω', '10 Ω', '1200 Ω'],
                correctAnswer: '50 Ω',
                explanationEn:
                  '|Z| = √(R^2 + X^2) = √(30^2 + 40^2) = √(900 + 1600) = √2500 = 50 Ω.',
                explanationPa:
                  '|Z| = √(30^2 + 40^2) = √(900 + 1600) = √2500 = 50 Ω।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Magnetic Flux',
                promptEn: 'What SI unit is used to measure magnetic flux density (B)?',
                promptPa: 'ਚੁੰਬਕੀ ਫਲੈਕਸ ਘਣਤਾ (Magnetic Flux Density - B) ਨੂੰ ਮਾਪਣ ਲਈ ਕਿਹੜੀ SI ਇਕਾਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?',
                optionsJson: ['Tesla (T)', 'Weber (Wb)', 'Henry (H)', 'Farad (F)'],
                correctAnswer: 'Tesla (T)',
                explanationEn:
                  'Magnetic flux density B is measured in Tesla (T), equivalent to Webers per square meter (Wb/m^2). Magnetic flux Φ is measured in Webers (Wb).',
                explanationPa:
                  'ਚੁੰਬਕੀ ਫਲੈਕਸ ਘਣਤਾ (B) ਟੈਸਲਾ (Tesla) ਵਿੱਚ ਨਾਪੀ ਜਾਂਦੀ ਹੈ, ਜਦਕਿ ਕੁੱਲ ਫਲੈਕਸ ਵੈਬਰ (Weber) ਵਿੱਚ ਨਾਪਿਆ ਜਾਂਦਾ ਹੈ।',
              },
            ],
          },
        },
      ],
    },
  ],
};
