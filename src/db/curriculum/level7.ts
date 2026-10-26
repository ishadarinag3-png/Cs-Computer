import { SeedCourse } from './types.ts';

export const LEVEL_7_COURSE: SeedCourse = {
  slug: 'level-7-measurements-and-instrumentation',
  levelNumber: 7,
  titleEn: 'Level 7: Measurements & Instrumentation',
  titlePa: 'ਲੈਵਲ 7: ਮਾਪ ਅਤੇ ਯੰਤਰ-ਪ੍ਰਣਾਲੀ (Measurements & Instrumentation)',
  descriptionEn:
    'Digital multimeters, True RMS vs average responding, 10 MΩ loading effect, 4-wire Kelvin sensing, CAT safety ratings, digital storage oscilloscopes (DSO), 10X probe compensation, triggering, logic analyzers, and lab safety.',
  descriptionPa:
    'ਡਿਜੀਟਲ ਮਲਟੀਮੀਟਰ, True RMS, 10 MΩ ਲੋਡਿੰਗ ਪ੍ਰਭਾਵ, 4-ਵਾਇਰ ਕੈਲਵਿਨ ਮਾਪ, CAT ਸੇਫਟੀ ਰੇਟਿੰਗ, ਔਸੀਲੋਸਕੋਪ (DSO), 10X ਪ੍ਰੋਬ ਕੰਪਨਸੇਸ਼ਨ, ਟ੍ਰਿਗਰਿੰਗ, ਅਤੇ ਲੌਜਿਕ ਐਨਾਲਾਈਜ਼ਰ।',
  category: 'core-electronics',
  estimatedHours: 16,
  modules: [
    {
      orderIndex: 1,
      titleEn: 'Multimeters, Precision Probing, Uncertainty & Prototyping',
      titlePa: 'ਮਲਟੀਮੀਟਰ, ਸਟੀਕ ਪ੍ਰੋਬਿੰਗ, ਅਨਿਸ਼ਚਿਤਤਾ ਅਤੇ ਪ੍ਰੋਟੋਟਾਈਪਿੰਗ',
      summaryEn:
        'DMM measurement physics, True RMS vs average sensing, 10MΩ input impedance loading errors, 4-wire Kelvin milliohm resistance measurement, and CAT electrical safety ratings.',
      summaryPa:
        'ਮਲਟੀਮੀਟਰ ਵਿਗਿਆਨ, True RMS, 10MΩ ਲੋਡਿੰਗ ਗਲਤੀਆਂ, 4-ਤਾਰ ਕੈਲਵਿਨ ਰਜਿਸਟੈਂਸ ਮਾਪ, ਬ੍ਰੈੱਡਬੋਰਡ ਦੀਆਂ ਸੀਮਾਵਾਂ, ਅਤੇ CAT ਸੁਰੱਖਿਆ ਨਿਯਮ।',
      lessons: [
        {
          slug: 'multimeters-true-rms-impedance-measurement',
          orderIndex: 1,
          titleEn: '7.1 Digital Multimeters, True RMS, Input Loading & 4-Wire Sensing',
          titlePa: '7.1 ਡਿਜੀਟਲ ਮਲਟੀਮੀਟਰ, True RMS, ਇਨਪੁਟ ਲੋਡਿੰਗ ਅਤੇ 4-ਵਾਇਰ ਕੈਲਵਿਨ ਮਾਪ',
          objectivesJson: [
            'Differentiate True RMS multimeters from cheap Average-Responding calibrated meters on distorted non-sinusoidal waveforms',
            'Calculate voltmeter loading errors caused by finite meter input impedance (typically 10 MΩ) in high-resistance circuits',
            'Explain the 4-wire Kelvin resistance measurement technique that cancels test lead resistance for sub-ohm measurements',
            'Identify IEC 61010 Overvoltage Category ratings (CAT I through CAT IV) and high-energy transient blast safety',
          ],
          prerequisitesJson: ['Level 1: Electrical Fundamentals (Measurement uncertainty and electrical safety)'],
          childAnalogyEn:
            'Think of checking a patient’s temperature! A regular meter is like putting a cold metal thermometer in a single drop of warm tea: the cold metal cools the tea down immediately, giving a totally false low temperature (Meter Loading Error)! A precision True RMS meter is like an infrared camera that reads heat instantly without disturbing anything. A 4-wire Kelvin probe is like weighing a tractor without counting the driver’s own shoes!',
          childAnalogyPa:
            'ਚਾਹ ਦੇ ਇੱਕ ਨਿੱਕੇ ਚਮਚ ਦਾ ਤਾਪਮਾਨ ਨਾਪਣ ਦੀ ਕਲਪਨਾ ਕਰੋ! ਜੇਕਰ ਤੁਸੀਂ ਵੱਡਾ ਠੰਢਾ ਥਰਮਾਮੀਟਰ ਉਸ ਵਿੱਚ ਡੋਬ ਦਿਓਗੇ, ਤਾਂ ਥਰਮਾਮੀਟਰ ਖੁਦ ਚਾਹ ਨੂੰ ਠੰਢੀ ਕਰ ਦੇਵੇਗਾ ਅਤੇ ਗਲਤ ਰੀਡਿੰਗ ਦੇਵੇਗਾ (ਮੀਟਰ ਦਾ ਲੋਡਿੰਗ ਪ੍ਰਭਾਵ)! 4-ਵਾਇਰ ਕੈਲਵਿਨ ਪ੍ਰੋਬ ਟਰਾਲੀ ਦਾ ਕੰਡਾ ਕਰਨ ਵਾਂਗ ਹੈ ਜਿੱਥੇ ਟਰੈਕਟਰ ਦੀ ਤਾਰਾਂ ਦਾ ਵਜ਼ਨ ਆਪਣੇ-ਆਪ ਕੱਟਿਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਸਿਰਫ਼ ਅਸਲ ਦਾਣਿਆਂ ਦਾ ਸਹੀ ਵਜ਼ਨ ਮਿਲਦਾ ਹੈ!',
          technicalExplanationEn:
            'Precision electrical measurement requires understanding instrument loading and waveform mathematics:\n\n1. True RMS vs Average Responding:\n• Cheap multimeters rectify AC and multiply by 1.11 (the form factor of a pure sine wave). On square, PWM, or triac-dimmed waves, errors reach 40% to 50%!\n• True RMS DMMs use analog root-mean-square converters or high-speed DSP sampling to compute the exact definition: V_rms = √[(1/T) * ∫ v(t)^2 dt].\n\n2. Voltmeter Input Impedance & Circuit Loading:\n• Standard bench DMMs have an input resistance R_m = 10 MΩ.\n• When measuring a voltage divider with high-value resistors (e.g. two 10 MΩ resistors across 20V):\n  - Unloaded: V_out = 10.0 V.\n  - Loaded: R_bottom || R_m = 10M || 10M = 5 MΩ. Measured voltage = 20V * (5M / 15M) = 6.67 V (a massive 33.3% measurement error!).\n\n3. 4-Wire (Kelvin) Resistance Measurement:\nStandard 2-wire ohmmeters pass current and measure voltage through the same test leads (adding 0.2 Ω to 0.5 Ω lead resistance, corrupting low milliohm measurements).\n• 4-Wire Technique: Two dedicated "Force" leads drive a known constant current (I_test), while two separate high-impedance "Sense" leads measure voltage drop across the component. Since sense leads carry virtually zero current, lead resistance drops zero volts, enabling micro-ohm accuracy.\n\n4. IEC 61010 CAT Overvoltage Ratings:\n• CAT I: Protected electronic equipment and low-voltage bench circuits.\n• CAT II: Single-phase domestic appliance receptacle loads.\n• CAT III: 3-phase building distribution, feeder circuits, and industrial distribution boards.\n• CAT IV: Three-phase utility service entrance, electricity meters, and overhead outdoor lines subjected to lightning surges.',
          technicalExplanationPa:
            'ਮਲਟੀਮੀਟਰਾਂ ਅਤੇ ਮਾਪ ਵਿਗਿਆਨ ਦੇ ਅਸੂਲ:\n\n1. True RMS ਬਨਾਮ ਸਧਾਰਨ ਮੀਟਰ:\nਸਸਤੇ ਮੀਟਰ ਸਿਰਫ਼ ਸ਼ੁੱਧ ਸਾਈਨ ਵੇਵ ਲਈ ਸਹੀ ਹੁੰਦੇ ਹਨ। ਜੇਕਰ ਇਨਵਰਟਰ ਜਾਂ ਮੋਟਰ ਡਰਾਈਵ ਦੀ ਕੱਟੀ-ਵੱਢੀ ਵੇਵ ਹੋਵੇ, ਤਾਂ ਉਹ 40% ਤੱਕ ਗਲਤ ਰੀਡਿੰਗ ਦਿੰਦੇ ਹਨ। True RMS ਮਲਟੀਮੀਟਰ ਅਸਲ ਗਣਿਤਕ ਵਰਗਮੂਲ ਕੱਢ ਕੇ ਬਿਲਕੁਲ ਸੱਚੀ ਪਾਵਰ ਵੋਲਟੇਜ ਦੱਸਦਾ ਹੈ।\n\n2. ਮੀਟਰ ਦਾ ਲੋਡਿੰਗ ਨੁਕਸਾਨ (10 MΩ):\nਜਦੋਂ ਬਹੁਤ ਹਾਈ ਰਜਿਸਟੈਂਸ ਵਾਲੇ ਸਰਕਟ ਵਿੱਚ ਮੀਟਰ ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਮੀਟਰ ਦੀ ਆਪਣੀ 10 ਮੈਗਾਓਹਮ ਰਜਿਸਟੈਂਸ ਸਰਕਟ ਦੀ ਵੋਲਟੇਜ ਨੂੰ ਹੇਠਾਂ ਸੁੱਟ ਦਿੰਦੀ ਹੈ।\n\n3. 4-ਵਾਇਰ ਕੈਲਵਿਨ ਮਾਪ (4-Wire Kelvin):\n0.01 ਓਹਮ ਵਰਗੇ ਨਿੱਕੇ ਰਜਿਸਟਰ ਨਾਪਣ ਲਈ 4 ਤਾਰਾਂ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ: ਦੋ ਤਾਰਾਂ ਕਰੰਟ ਭੇਜਦੀਆਂ ਹਨ ਅਤੇ ਦੋ ਵੱਖਰੀਆਂ ਤਾਰਾਂ ਵੋਲਟੇਜ ਨਾਪਦੀਆਂ ਹਨ, ਜਿਸ ਨਾਲ ਪ੍ਰੋਬ ਦੀਆਂ ਤਾਰਾਂ ਦੀ ਆਪਣੀ ਰਜਿਸਟੈਂਸ ਜ਼ੀਰੋ ਹੋ ਜਾਂਦੀ ਹੈ।\n\n4. CAT ਸੁਰੱਖਿਆ ਰੇਟਿੰਗ (CAT I to CAT IV):\nਘਰਾਂ ਦੇ ਮੇਨ ਮੀਟਰਾਂ ਅਤੇ ਖੰਭੇ ਦੀਆਂ ਤਾਰਾਂ ਤੇ ਕੰਮ ਕਰਨ ਲਈ CAT IV ਮੀਟਰ ਚਾਹੀਦਾ ਹੈ ਜੋ ਅਸਮਾਨੀ ਬਿਜਲੀ ਦੇ ਹਜ਼ਾਰਾਂ ਵੋਲਟ ਦੇ ਝਟਕੇ ਨੂੰ ਸਹਿਣ ਕਰ ਸਕੇ ਬਿਨਾਂ ਹੱਥ ਵਿੱਚ ਫਟੇ।',
          practicalExampleEn:
            'Measuring the shunt resistor in an electric vehicle motor controller: The current shunt is 0.005 Ω (5 milliohms). A technician using a standard 2-wire multimeter measures 0.35 Ω because the multimeter probe test leads themselves have 0.345 Ω resistance (a 6900% measurement error!). Switching to a 4-wire Kelvin milliohm meter completely cancels the test lead resistance, accurately displaying 0.0050 Ω.',
          practicalExamplePa:
            'ਇਲੈਕਟ੍ਰਿਕ ਸਕੂਟਰ ਦੇ ਕੰਟਰੋਲਰ ਵਿੱਚ 0.005 Ω (5 ਮਿਲੀਓਹਮ) ਦਾ ਸ਼ੰਟ ਰਜਿਸਟਰ ਚੈੱਕ ਕਰਨਾ: ਆਮ 2-ਤਾਰਾਂ ਵਾਲੇ ਮਲਟੀਮੀਟਰ ਦੀਆਂ ਆਪਣੀਆਂ ਤਾਰਾਂ ਦੀ ਰਜਿਸਟੈਂਸ ਹੀ 0.35 Ω ਹੁੰਦੀ ਹੈ, ਜਿਸ ਕਾਰਨ ਮੀਟਰ 60 ਗੁਣਾ ਗਲਤ ਰੀਡਿੰਗ ਦਿੰਦਾ ਹੈ! ਜਦੋਂ 4-ਵਾਇਰ ਕੈਲਵਿਨ ਮੀਟਰ ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਤਾਰਾਂ ਦਾ ਨੁਕਸਾਨ ਕੱਟਿਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਬਿਲਕੁਲ ਸਹੀ 0.0050 Ω ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ।',
          codeDemo: `// TypeScript: Multimeter Loading Error & 4-Wire Sensing Simulator
export function calcVoltmeterLoadingError(vSource: number, rTop: number, rBottom: number, rMeter = 10e6) {
  const trueVout = vSource * (rBottom / (rTop + rBottom));
  const rParallelLoaded = (rBottom * rMeter) / (rBottom + rMeter);
  const measuredVout = vSource * (rParallelLoaded / (rTop + rParallelLoaded));
  const percentError = ((measuredVout - trueVout) / trueVout) * 100;

  return {
    trueVoltage: trueVout,
    measuredVoltage: measuredVout,
    percentError,
  };
}

export function calcTwoWireVsFourWire(rUnknown: number, rLead1 = 0.15, rLead2 = 0.15) {
  const twoWireReading = rUnknown + rLead1 + rLead2;
  const fourWireReading = rUnknown; // Kelvin sense carries negligible current
  const percentError = ((twoWireReading - fourWireReading) / fourWireReading) * 100;

  return { twoWireReading, fourWireReading, percentError };
}

// Verification: Measuring 0.010 Ohm resistor with 0.3 Ohm probe leads:
const sensing = calcTwoWireVsFourWire(0.010, 0.15, 0.15);
console.log('2-Wire Reading:', sensing.twoWireReading.toFixed(3), 'Ω'); // 0.310 Ω (3000% error!)
console.log('4-Wire Reading:', sensing.fourWireReading.toFixed(3), 'Ω'); // 0.010 Ω (Exact!)`,
          misconceptionsJson: [
            {
              myth: 'A standard digital multimeter set to AC Volts accurately measures any AC waveform.',
              truthEn:
                'Average-responding multimeters are strictly calibrated for a pure single-frequency 50/60 Hz sine wave. On switching power supply waveforms, phase-cut dimmers, or motor drives, they can under-read or over-read true power dissipation by more than 40%.',
              truthPa:
                'ਆਮ ਸਸਤੇ ਮਲਟੀਮੀਟਰ ਸਿਰਫ਼ ਸ਼ੁੱਧ 50 Hz ਸਾਈਨ ਵੇਵ ਲਈ ਹੁੰਦੇ ਹਨ। ਮੋਟਰ ਡਰਾਈਵ ਜਾਂ ਇਨਵਰਟਰ ਉੱਤੇ ਉਹ 40% ਤੱਕ ਗਲਤ ਰੀਡਿੰਗ ਦਿੰਦੇ ਹਨ। ਇਸ ਲਈ True RMS ਮੀਟਰ ਲਾਜ਼ਮੀ ਹੈ।',
            },
            {
              myth: 'A CAT II 1000V rated multimeter is just as safe on outdoor power grid lines as a CAT IV 600V meter.',
              truthEn:
                'Overvoltage categories represent transient energy dissipation capability, not just steady-state voltage. A CAT IV 600V meter can withstand an 8,000 Volt lightning transient without arc-flash explosion; a CAT II 1000V meter subjected to the same outdoor transient will vaporize into a lethal plasma fireball in your hands.',
              truthPa:
                'CAT ਰੇਟਿੰਗ ਅਸਮਾਨੀ ਬਿਜਲੀ ਦੇ ਝਟਕੇ ਨੂੰ ਸਹਿਣ ਦੀ ਤਾਕਤ ਹੁੰਦੀ ਹੈ। ਖੰਭਿਆਂ ਜਾਂ ਬਾਹਰਲੇ ਮੇਨ ਮੀਟਰਾਂ ਉੱਤੇ CAT II ਮੀਟਰ ਲਗਾਉਣ ਨਾਲ ਅੰਦਰ ਧਮਾਕਾ ਹੋ ਸਕਦਾ ਹੈ। ਉੱਥੇ ਸਿਰਫ਼ CAT IV ਮੀਟਰ ਹੀ ਸੁਰੱਖਿਅਤ ਹੁੰਦਾ ਹੈ।',
            },
            {
              myth: 'Testing continuity with a beeper proves a circuit trace has low enough resistance for high-current power.',
              truthEn:
                'Multimeter continuity beepers typically buzz on anything below 30 Ω to 70 Ω. A damaged copper PCB trace with a resistance of 5 Ω will beep happily, but would drop 50 Volts and catch fire when carrying 10 Amperes of operating current.',
              truthPa:
                'ਕੰਟੀਨਿਊਟੀ ਬੀਪਰ 30-50 ਓਹਮ ਉੱਤੇ ਵੀ ਸੀਟੀ ਮਾਰ ਦਿੰਦਾ ਹੈ। ਜੇਕਰ ਤਾਰ ਵਿੱਚ 5 ਓਹਮ ਦੀ ਰੁਕਾਵਟ ਹੋਵੇ ਤਾਂ ਉਹ ਬੀਪ ਤਾਂ ਕਰੇਗੀ ਪਰ 10 ਐਂਪੀਅਰ ਕਰੰਟ ਲੰਘਦੇ ਹੀ ਸੜ ਜਾਵੇਗੀ।',
            },
          ],
          terminologyJson: [
            {
              term: 'True RMS',
              punjabi: 'True RMS (ਸੱਚੀ RMS ਵੋਲਟੇਜ)',
              meaningEn: 'Accurate calculation of the heating value of complex, distorted AC waveforms independent of waveshape.',
              meaningPa: 'ਕਿਸੇ ਵੀ ਵਿਗੜੀ ਹੋਈ AC ਵੇਵ ਦੀ ਅਸਲ ਪ੍ਰਭਾਵੀ ਵੋਲਟੇਜ ਨਾਪਣ ਦੀ ਤਕਨੀਕ।',
            },
            {
              term: 'Meter Loading Effect',
              punjabi: 'ਮੀਟਰ ਲੋਡਿੰਗ ਪ੍ਰਭਾਵ',
              meaningEn: 'Measurement error introduced when the instrument’s internal input impedance draws current from the circuit under test.',
              meaningPa: 'ਮਲਟੀਮੀਟਰ ਲਗਾਉਣ ਕਾਰਨ ਸਰਕਟ ਦੀ ਆਪਣੀ ਵੋਲਟੇਜ ਡਿੱਗਣ ਦੀ ਗਲਤੀ।',
            },
            {
              term: '4-Wire Kelvin Sensing',
              punjabi: '4-ਵਾਇਰ ਕੈਲਵਿਨ ਸੈਂਸਿੰਗ',
              meaningEn: 'Separation of current-carrying and voltage-sensing conductors to eliminate test lead and contact resistance.',
              meaningPa: 'ਪ੍ਰੋਬ ਤਾਰਾਂ ਦੀ ਰਜਿਸਟੈਂਸ ਖ਼ਤਮ ਕਰਕੇ ਬੇਹੱਦ ਛੋਟੀ ਰਜਿਸਟੈਂਸ ਨਾਪਣ ਦਾ ਤਰੀਕਾ।',
            },
            {
              term: 'CAT Rating (Overvoltage Category)',
              punjabi: 'CAT ਸੁਰੱਖਿਆ ਰੇਟਿੰਗ',
              meaningEn: 'IEC 61010 electrical safety rating indicating an instrument’s ability to survive high-energy transient spikes without arc flash.',
              meaningPa: 'ਹਾਈ-ਵੋਲਟੇਜ ਧਮਾਕੇ ਅਤੇ ਕਰੰਟ ਦੇ ਝਟਕੇ ਤੋਂ ਬਚਾਅ ਦਾ ਅੰਤਰਰਾਸ਼ਟਰੀ ਮਿਆਰ।',
            },
            {
              term: 'Burden Voltage',
              punjabi: 'ਬਰਡਨ ਵੋਲਟੇਜ (Burden Voltage)',
              meaningEn: 'Voltage drop across an ammeter’s internal current shunt resistor during measurement.',
              meaningPa: 'ਕਰੰਟ ਨਾਪਣ ਵੇਲੇ ਮਲਟੀਮੀਟਰ ਦੇ ਅੰਦਰਲੇ ਸ਼ੰਟ ਰਜਿਸਟਰ ਕਾਰਨ ਸਰਕਟ ਵਿੱਚ ਘਟਣ ਵਾਲੀ ਵੋਲਟੇਜ।',
            },
            {
              term: 'Crest Factor',
              punjabi: 'ਕ੍ਰੈਸਟ ਫੈਕਟਰ (Crest Factor)',
              meaningEn: 'Ratio of the peak value of a waveform to its RMS value (Vpk / Vrms).',
              meaningPa: 'ਪੀਕ ਵੋਲਟੇਜ ਅਤੇ RMS ਵੋਲਟੇਜ ਦਾ ਅਨੁਪਾਤ।',
            },
          ],
          interactiveLabId: 'multimeter-lab',
          exercisePromptEn:
            'Precision Measurement Analysis: (1) A high-impedance CMOS sensor bias network consists of two 5 MΩ resistors in series across a 10 V reference. Calculate the true unloaded voltage at the midpoint. Then calculate what a standard 10 MΩ input impedance DMM will actually display. (2) Calculate the percentage measurement loading error.',
          exercisePromptPa:
            'ਸਟੀਕ ਮਾਪ ਵਿਸ਼ਲੇਸ਼ਣ: (1) 10V ਸਪਲਾਈ ਨਾਲ 5 MΩ ਦੇ ਦੋ ਰਜਿਸਟਰ ਸੀਰੀਜ਼ ਵਿੱਚ ਹਨ। ਅਸਲ ਵੋਲਟੇਜ ਕੱਢੋ। ਫਿਰ ਦੱਸੋ ਕਿ 10 MΩ ਇੰਪੀਡੈਂਸ ਵਾਲਾ ਮਲਟੀਮੀਟਰ ਕਿੰਨੀ ਵੋਲਟੇਜ ਦਿਖਾਏਗਾ। (2) ਇਸ ਲੋਡਿੰਗ ਗਲਤੀ ਦੀ ਪ੍ਰਤੀਸ਼ਤਤਾ ਪਤਾ ਕਰੋ।',
          summaryEn:
            'Precision instrumentation is the eyes and ears of electronics: True RMS meters reveal true thermal powers, 4-wire Kelvin sensing resolves milliohms, and CAT ratings keep engineers safe from lethal arc-flash explosions.',
          summaryPa:
            'ਇੰਸਟਰੂਮੈਂਟੇਸ਼ਨ ਇੰਜੀਨੀਅਰ ਦੀਆਂ ਅੱਖਾਂ ਅਤੇ ਕੰਨ ਹਨ: True RMS ਮੀਟਰ ਅਸਲ ਪਾਵਰ ਦੱਸਦੇ ਹਨ, ਕੈਲਵਿਨ ਮਾਪ ਨਿੱਕੀਆਂ ਰਜਿਸਟੈਂਸਾਂ ਸਹੀ ਨਾਪਦਾ ਹੈ, ਅਤੇ CAT ਰੇਟਿੰਗ ਇੰਜੀਨੀਅਰ ਦੀ ਜਾਨ ਬਚਾਉਂਦੀ ਹੈ।',
          furtherReadingJson: [
            'Digital Multimeter Principles by Glen A. Mazur',
            'Fluke Corporation: ABCs of Multimeter Safety & True RMS Application Notes',
            'Keithley Low Level Measurements Handbook (7th Edition)',
          ],
          quiz: {
            titleEn: 'Level 7 Assessment: Multimeters, Precision Probing & CAT Ratings',
            titlePa: 'ਲੈਵਲ 7 ਟੈਸਟ: ਮਲਟੀਮੀਟਰ, ਪ੍ਰੋਬਿੰਗ ਅਤੇ CAT ਸੁਰੱਖਿਆ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'True RMS',
                promptEn: 'Why does an average-responding multimeter produce large errors when measuring a triac-dimmed lamp or PWM motor driver voltage?',
                promptPa: 'ਟ੍ਰਾਇਕ ਡਿਮਰ ਜਾਂ PWM ਵੇਵ ਉੱਤੇ ਸਧਾਰਨ ਮਲਟੀਮੀਟਰ ਵੱਡੀ ਗਲਤੀ ਕਿਉਂ ਦਿਖਾਉਂਦਾ ਹੈ?',
                optionsJson: [
                  'It simply multiplies rectified average by 1.11, which is only valid for pure unclipped sine waves',
                  'Its internal battery is drained by PWM',
                  'The multimeter display cannot refresh fast enough',
                  'PWM frequencies short-circuit the meter input',
                ],
                correctAnswer: 'It simply multiplies rectified average by 1.11, which is only valid for pure unclipped sine waves',
                explanationEn:
                  'Average-responding meters assume a sine wave form factor (1.11). Non-sinusoidal waveforms have entirely different form factors, causing massive errors unless a True RMS meter is used.',
                explanationPa:
                  'ਇਹ ਔਸਤ ਵੋਲਟੇਜ ਨੂੰ 1.11 ਨਾਲ ਗੁਣਾ ਕਰਦਾ ਹੈ ਜੋ ਸਿਰਫ਼ ਸ਼ੁੱਧ ਸਾਈਨ ਵੇਵ ਲਈ ਸੱਚ ਹੁੰਦਾ ਹੈ, ਕੱਟੀ ਹੋਈ ਵੇਵ ਲਈ ਨਹੀਂ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Voltmeter Loading',
                promptEn: 'What is the standard DC input resistance of most professional digital multimeters?',
                promptPa: 'ਜ਼ਿਆਦਾਤਰ ਪ੍ਰੋਫੈਸ਼ਨਲ ਡਿਜੀਟਲ ਮਲਟੀਮੀਟਰਾਂ ਦੀ ਅੰਦਰੂਨੀ ਇਨਪੁਟ ਰਜਿਸਟੈਂਸ ਲਗਭਗ ਕਿੰਨੀ ਹੁੰਦੀ ਹੈ?',
                optionsJson: ['10 MΩ (Megaohms)', '1 kΩ', '50 Ω', 'Infinity with zero resistance'],
                correctAnswer: '10 MΩ (Megaohms)',
                explanationEn:
                  'Standard professional DMMs have a 10 MΩ input resistance on DC voltage ranges to minimize circuit loading.',
                explanationPa:
                  'ਸਟੈਂਡਰਡ ਮਲਟੀਮੀਟਰਾਂ ਦੀ ਇਨਪੁਟ ਰਜਿਸਟੈਂਸ 10 ਮੈਗਾਓਹਮ (10 MΩ) ਹੁੰਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Kelvin 4-Wire',
                promptEn: 'Why does a 4-wire Kelvin resistance measurement provide milliohm accuracy where a 2-wire measurement fails?',
                promptPa: '4-ਵਾਇਰ ਕੈਲਵਿਨ ਮਾਪ ਵਿੱਚ ਛੋਟੀ ਰਜਿਸਟੈਂਸ ਬਿਲਕੁਲ ਸਹੀ ਕਿਉਂ ਆਉਂਦੀ ਹੈ?',
                optionsJson: [
                  'Current is driven through two dedicated leads, while two separate voltage sense leads carry virtually zero current, eliminating lead resistance voltage drops',
                  'It uses four times higher voltage',
                  'It operates at 4 GHz frequency',
                  'It cools the component down to absolute zero',
                ],
                correctAnswer: 'Current is driven through two dedicated leads, while two separate voltage sense leads carry virtually zero current, eliminating lead resistance voltage drops',
                explanationEn:
                  'Because the high-impedance sense leads carry nanoamps, zero voltage drops across the sense lead resistance, measuring the exact voltage across the unknown component.',
                explanationPa:
                  'ਸੈਂਸਿੰਗ ਤਾਰਾਂ ਵਿੱਚ ਕੋਈ ਕਰੰਟ ਨਹੀਂ ਵਗਦਾ, ਇਸ ਲਈ ਟੈਸਟ ਲੀਡਾਂ ਦੀ ਆਪਣੀ ਰਜਿਸਟੈਂਸ ਦਾ ਕੋਈ ਵੋਲਟੇਜ ਡ੍ਰੌਪ ਨਹੀਂ ਹੁੰਦਾ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'CAT Ratings',
                promptEn: 'Which IEC overvoltage category rating is mandatory for test instruments used directly on incoming electrical utility mains and outdoor service drop lines?',
                promptPa: 'ਬਾਹਰਲੇ ਖੰਭੇ ਦੀਆਂ ਮੇਨ ਲਾਈਨਾਂ ਉੱਤੇ ਕੰਮ ਕਰਨ ਲਈ ਮਲਟੀਮੀਟਰ ਦੀ ਕਿਹੜੀ CAT ਰੇਟਿੰਗ ਲਾਜ਼ਮੀ ਹੈ?',
                optionsJson: ['CAT IV', 'CAT I', 'CAT II', 'CAT III'],
                correctAnswer: 'CAT IV',
                explanationEn:
                  'CAT IV applies to the origin of the installation (utility electricity meters, overhead lines, and underground service entrances) where lightning surge energy is highest.',
                explanationPa:
                  'CAT IV ਰੇਟਿੰਗ ਬਾਹਰਲੀਆਂ ਮੇਨ ਲਾਈਨਾਂ ਅਤੇ ਮੀਟਰਾਂ ਲਈ ਹੁੰਦੀ ਹੈ ਜਿੱਥੇ ਬਿਜਲੀ ਦੇ ਸਭ ਤੋਂ ਵੱਡੇ ਝਟਕੇ ਆਉਂਦੇ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Continuity Beeper',
                promptEn: 'At approximately what resistance threshold does a typical multimeter continuity beeper sound?',
                promptPa: 'ਮਲਟੀਮੀਟਰ ਦਾ ਕੰਟੀਨਿਊਟੀ ਬੀਪਰ ਆਮ ਤੌਰ ਤੇ ਕਿੰਨੇ ਓਹਮ ਤੋਂ ਹੇਠਾਂ ਹੋਣ ਤੇ ਸੀਟੀ ਮਾਰਦਾ ਹੈ?',
                optionsJson: ['Below 30 Ω to 50 Ω', 'Exactly 0.000 Ω only', 'Above 1000 Ω', 'Below 0.001 Ω only'],
                correctAnswer: 'Below 30 Ω to 50 Ω',
                explanationEn:
                  'Continuity beepers are designed for rapid wire tracing and sound on anything below ~30 Ω to 50 Ω (they do NOT guarantee milliohm joint quality).',
                explanationPa:
                  'ਕੰਟੀਨਿਊਟੀ ਬੀਪਰ 30 ਤੋਂ 50 ਓਹਮ ਤੋਂ ਘੱਟ ਹੋਣ ਤੇ ਵੱਜਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Ammeter Burden Voltage',
                promptEn: 'What is "Burden Voltage" when measuring current with a digital multimeter?',
                promptPa: 'ਮਲਟੀਮੀਟਰ ਨਾਲ ਕਰੰਟ ਨਾਪਣ ਵੇਲੇ "Burden Voltage" ਦਾ ਕੀ ਅਰਥ ਹੈ?',
                optionsJson: [
                  'The unintended voltage drop introduced across the internal current shunt resistor inserted into the circuit',
                  'The battery voltage of the multimeter',
                  'The maximum overvoltage rating',
                  'The AC voltage ripple',
                ],
                correctAnswer: 'The unintended voltage drop introduced across the internal current shunt resistor inserted into the circuit',
                explanationEn:
                  'Current meters insert a shunt in series with the load. The voltage across this shunt is the burden voltage, which steals voltage from low-voltage circuits (like 1.8V rails).',
                explanationPa:
                  'ਮੀਟਰ ਦੇ ਅੰਦਰਲੇ ਸ਼ੰਟ ਰਜਿਸਟਰ ਕਾਰਨ ਸਰਕਟ ਵਿੱਚੋਂ ਘਟਣ ਵਾਲੀ ਵੋਲਟੇਜ, ਜੋ ਘੱਟ ਵੋਲਟੇਜ ਵਾਲੇ ਸਰਕਟਾਂ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'High-Energy Fuses',
                promptEn: 'Why do professional multimeters use specialized sand-filled ceramic fuses instead of cheap glass fuses on their current inputs?',
                promptPa: 'ਪ੍ਰੋਫੈਸ਼ਨਲ ਮਲਟੀਮੀਟਰਾਂ ਵਿੱਚ ਕੱਚ ਦੇ ਫਿਊਜ਼ ਦੀ ਬਜਾਏ ਰੇਤ ਭਰੇ ਸਿਰੈਮਿਕ ਫਿਊਜ਼ ਕਿਉਂ ਹੁੰਦੇ ਹਨ?',
                optionsJson: [
                  'To instantly quench and extinguish high-energy electric plasma arcs during massive short circuits, preventing explosive meter destruction',
                  'To make the meter heavier',
                  'Because sand conducts electricity better than wire',
                  'To protect the LCD display from heat',
                ],
                correctAnswer: 'To instantly quench and extinguish high-energy electric plasma arcs during massive short circuits, preventing explosive meter destruction',
                explanationEn:
                  'Glass fuses can sustain a conducting plasma arc if blown across 400V mains, exploding the meter. Silica sand melts into glass, suffocating the arc instantly.',
                explanationPa:
                  'ਸ਼ਾਰਟ ਸਰਕਟ ਵੇਲੇ ਬਣਨ ਵਾਲੀ ਭਿਆਨਕ ਅੱਗ ਅਤੇ ਪਲਾਜ਼ਮਾ ਆਰਕ ਨੂੰ ਰੇਤ ਤੁਰੰਤ ਠਾਰ ਦਿੰਦੀ ਹੈ ਤਾਂ ਜੋ ਮੀਟਰ ਹੱਥ ਵਿੱਚ ਨਾ ਫਟੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Diode Test Mode',
                promptEn: 'When testing an operational silicon diode in the "Diode Test" position, what physical quantity does the multimeter screen display?',
                promptPa: 'ਡਾਇਓਡ ਟੈਸਟ ਮੋਡ ਵਿੱਚ ਸਹੀ ਸਿਲੀਕਾਨ ਡਾਇਓਡ ਚੈੱਕ ਕਰਦੇ ਸਮੇਂ ਸਕ੍ਰੀਨ ਉੱਤੇ ਕੀ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ?',
                optionsJson: [
                  'The forward voltage drop in Volts (typically 0.5V to 0.7V)',
                  'The reverse breakdown voltage',
                  'The junction capacitance in pF',
                  'The resistance in Megaohms',
                ],
                correctAnswer: 'The forward voltage drop in Volts (typically 0.5V to 0.7V)',
                explanationEn:
                  'The meter drives a constant ~1 mA current and displays the resulting forward voltage drop across the PN junction in Volts (e.g. 0.650 V).',
                explanationPa:
                  'ਇਹ ਡਾਇਓਡ ਦੀ ਫਾਰਵਰਡ ਵੋਲਟੇਜ ਡ੍ਰੌਪ ਦਿਖਾਉਂਦਾ ਹੈ (ਲਗਭਗ 0.5 ਤੋਂ 0.7 ਵੋਲਟ)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'CAT III Application',
                promptEn: 'Which environment matches an IEC CAT III measurement classification?',
                promptPa: 'IEC CAT III ਸੁਰੱਖਿਆ ਰੇਟਿੰਗ ਕਿਸ ਜਗ੍ਹਾ ਦੇ ਮਾਪ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?',
                optionsJson: [
                  'Hardwired 3-phase industrial motors, circuit breaker distribution panels, and busbars',
                  'A battery-powered wrist watch',
                  'A USB phone charger cable',
                  'High-voltage overhead cross-country utility pylons',
                ],
                correctAnswer: 'Hardwired 3-phase industrial motors, circuit breaker distribution panels, and busbars',
                explanationEn:
                  'CAT III covers building distribution panels, 3-phase industrial distribution boards, feeder circuits, and heavy industrial machinery.',
                explanationPa:
                  'ਇੰਡਸਟਰੀ ਦੇ 3-ਫੇਜ਼ ਪੈਨਲ ਬੋਰਡ, ਮੋਟਰਾਂ ਅਤੇ ਮੇਨ ਡਿਸਟ੍ਰੀਬਿਊਸ਼ਨ ਬਾਕਸ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Uncertainty Calculation',
                promptEn: 'A multimeter has a specified DC voltage accuracy of ±(0.5% of reading + 2 digits). If measuring 10.00 V on a 4-digit display, what is the measurement uncertainty range?',
                promptPa: 'ਜੇਕਰ ਮੀਟਰ ਦੀ ਸ਼ੁੱਧਤਾ ±(0.5% + 2 ਡਿਜਿਟ) ਹੋਵੇ ਅਤੇ ਰੀਡਿੰਗ 10.00 V ਆਵੇ ਤਾਂ ਅਸਲ ਵੋਲਟੇਜ ਕਿਸ ਸੀਮਾ ਵਿੱਚ ਹੋਵੇਗੀ?',
                optionsJson: ['9.93 V to 10.07 V', '9.50 V to 10.50 V', '9.98 V to 10.02 V', '9.00 V to 11.00 V'],
                correctAnswer: '9.93 V to 10.07 V',
                explanationEn:
                  '0.5% of 10.00 V = 0.05 V. 2 digits on a 0.01V resolution display = 0.02 V. Total uncertainty = ±(0.05 + 0.02) = ±0.07 V. Range: 9.93 V to 10.07 V.',
                explanationPa:
                  '10V ਦਾ 0.5% = 0.05V। 2 ਡਿਜਿਟ = 0.02V। ਕੁੱਲ ਅਨਿਸ਼ਚਿਤਤਾ ±0.07V (9.93V ਤੋਂ 10.07V)।',
              },
            ],
          },
        },
        {
          slug: 'oscilloscopes-bandwidth-probes-logic-analyzers',
          orderIndex: 2,
          titleEn: '7.2 Oscilloscopes, Bandwidth, 10X Probes, Triggering & Logic Analyzers',
          titlePa: '7.2 ਔਸੀਲੋਸਕੋਪ, ਬੈਂਡਵਿਡਥ, 10X ਪ੍ਰੋਬ ਕੰਪਨਸੇਸ਼ਨ, ਟ੍ਰਿਗਰਿੰਗ ਅਤੇ ਲੌਜਿਕ ਐਨਾਲਾਈਜ਼ਰ',
          objectivesJson: [
            'Apply the 5x oscilloscope bandwidth rule (BW >= 5 * f_signal) and calculate rise time limitations (t_r = 0.35 / BW)',
            'Analyze 10X passive probe compensation: capacitive voltage division and high-frequency circuit capacitive loading',
            'Configure advanced oscilloscope triggering: Edge, Pulse Width, Runts, and Single-shot glitch capture',
            'Capture and decode digital buses (I2C, SPI, UART) using multi-channel digital logic analyzers',
            'Operate laboratory bench power supplies with safe Current Limiting (Constant Current CC mode) for prototype bring-up',
          ],
          prerequisitesJson: ['7.1 Digital Multimeters, True RMS, Input Loading & 4-Wire Sensing'],
          childAnalogyEn:
            'Think of watching a hummingbird’s wings flap! If you look with your bare human eyes, the wings look like an invisible blur (a multimeter just showing zero or a random average). An Oscilloscope is like an ultra-high-speed slow-motion camera: it freezes time, graphing every single flap and flutter of the wing on screen in real time! A Logic Analyzer is like reading a Morse code telegraph message: it translates long streams of electronic taps into clear English words on your screen!',
          childAnalogyPa:
            'ਗਰਮੀਆਂ ਵਿੱਚ ਪੱਖੇ ਦੇ ਘੁੰਮਦੇ ਪਰਾਂ ਦੀ ਕਲਪਨਾ ਕਰੋ! ਜੇਕਰ ਪੱਖਾ ਫੁੱਲ ਸਪੀਡ ਤੇ ਘੁੰਮ ਰਿਹਾ ਹੋਵੇ ਤਾਂ ਅੱਖਾਂ ਨਾਲ ਪਰ ਨਹੀਂ ਦਿਸਦੇ ਸਿਰਫ਼ ਹਵਾ ਲੱਗਦੀ ਹੈ (ਮਲਟੀਮੀਟਰ ਸਿਰਫ਼ ਔਸਤ ਦੱਸਦਾ ਹੈ)। ਔਸੀਲੋਸਕੋਪ ਇੱਕ ਅਤਿ-ਆਧੁਨਿਕ ਹਾਈ-ਸਪੀਡ ਕੈਮਰੇ ਵਾਂਗ ਹੈ ਜੋ ਹਰ ਮਿਲੀਸਕਿੰਟ ਨੂੰ ਸਕ੍ਰੀਨ ਉੱਤੇ ਖੜ੍ਹਾ ਕਰਕੇ ਦਿਖਾ ਦਿੰਦਾ ਹੈ ਕਿ ਵੋਲਟੇਜ ਕਿੱਥੇ ਉੱਪਰ ਜਾ ਰਹੀ ਹੈ ਤੇ ਕਿੱਥੇ ਹੇਠਾਂ! ਲੌਜਿਕ ਐਨਾਲਾਈਜ਼ਰ ਤਾਰਾਂ ਵਿੱਚ ਦੌੜਦੇ ਕੰਪਿਊਟਰ ਕੋਡ (I2C, SPI) ਨੂੰ ਪੜ੍ਹ ਕੇ ਸਕ੍ਰੀਨ ਉੱਤੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਲਿਖ ਦਿੰਦਾ ਹੈ!',
          technicalExplanationEn:
            'Oscilloscopes and protocol analyzers provide time-domain visualization of dynamic electronic waveforms:\n\n1. Oscilloscope Bandwidth & Rise Time:\n• Analog Bandwidth (-3dB point): Frequency where sinusoidal amplitude drops by 29.3% (to 0.707 of input).\n• 5x Rule for Digital Square Waves: A square wave consists of odd harmonics. To capture up to the 5th harmonic accurately: BW_scope ≥ 5 * f_clock.\n• Rise Time Relationship: t_r ≈ 0.35 / BW. The measured rise time is the root-sum-square: t_r(measured) = √[t_r(signal)^2 + t_r(scope)^2 + t_r(probe)^2].\n\n2. 10X Passive Probes & Compensation:\n• 1X Probe: Bandwidth severely limited (~10 MHz), high capacitive loading (~100 pF), directly loads the test point.\n• 10X Probe: Attenuates voltage by 10:1 using a 9 MΩ resistor in parallel with a small trimmer capacitor. Raises input impedance to 10 MΩ and slashes tip capacitance to ~10-15 pF.\n• Compensation: Adjusting the probe trimmer matches probe capacitance with the scope input capacitance (C_probe * R_probe = C_scope * R_scope). Under-compensated probes round off edges; over-compensated probes cause massive false overshoot ringing.\n\n3. Triggering Modes:\n• Auto Mode: Sweeps continuously even without trigger events; useful for hunting unknown signals.\n• Normal Mode: Only updates screen when the exact trigger condition (threshold crossing) is met.\n• Single-Shot Mode: Arms the scope once, waiting indefinitely for a transient glitch, then captures and freezes it into memory.\n\n4. Digital Logic Analyzers & Protocol Decoding:\n• Samples digital channels synchronously (external clock) or asynchronously (high-speed internal clock).\n• Hardware decoders interpret packet bytes: I2C (Start, Address, R/W, ACK, Data, Stop) and SPI (CS, MOSI, MISO, SCK) directly on waveform traces.',
          technicalExplanationPa:
            'ਔਸੀਲੋਸਕੋਪ ਅਤੇ ਲੌਜਿਕ ਐਨਾਲਾਈਜ਼ਰਾਂ ਦਾ ਵਿਗਿਆਨ:\n\n1. ਬੈਂਡਵਿਡਥ (Bandwidth) ਦਾ 5X ਨਿਯਮ:\nਡਿਜੀਟਲ ਚੌਰਸ ਵੇਵ (Square Wave) ਨੂੰ ਸਹੀ ਦੇਖਣ ਲਈ ਔਸੀਲੋਸਕੋਪ ਦੀ ਬੈਂਡਵਿਡਥ ਸਿਗਨਲ ਦੀ ਫ੍ਰੀਕੁਐਂਸੀ ਨਾਲੋਂ ਘੱਟੋ-ਘੱਟ 5 ਗੁਣਾ ਵੱਧ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ (20 MHz ਸਿਗਨਲ ਲਈ ਘੱਟੋ-ਘੱਟ 100 MHz ਸਕੋਪ ਚਾਹੀਦਾ ਹੈ)। ਰਾਈਜ਼ ਟਾਈਮ tr = 0.35 / BW।\n\n2. 10X ਪ੍ਰੋਬ ਕੰਪਨਸੇਸ਼ਨ (Probe Compensation):\n10X ਪ੍ਰੋਬ ਵੋਲਟੇਜ ਨੂੰ 10 ਗੁਣਾ ਘਟਾ ਕੇ ਸਕੋਪ ਦੀ ਬੈਂਡਵਿਡਥ ਵਧਾਉਂਦੀ ਹੈ ਅਤੇ ਸਰਕਟ ਉੱਤੇ ਲੋਡ ਘਟਾਉਂਦੀ ਹੈ। ਪ੍ਰੋਬ ਦੇ ਪਿੱਛੇ ਨਿੱਕੇ ਪੇਚ ਨੂੰ ਘੁਮਾ ਕੇ ਵਰਗ ਵੇਵ ਦੇ ਕੋਨੇ ਬਿਲਕੁਲ ਸਿੱਧੇ (90 ਡਿਗਰੀ) ਕੀਤੇ ਜਾਂਦੇ ਹਨ।\n\n3. ਟ੍ਰਿਗਰਿੰਗ (Triggering):\n• Single-Shot: ਕਿਸੇ ਇੱਕ ਵਾਰ ਹੋਣ ਵਾਲੀ ਖ਼ਰਾਬੀ (Glitch) ਨੂੰ ਫੜ ਕੇ ਸਕ੍ਰੀਨ ਉੱਤੇ ਪੱਕੇ ਤੌਰ ਤੇ ਰੋਕ ਲੈਂਦਾ ਹੈ।\n\n4. ਲੌਜਿਕ ਐਨਾਲਾਈਜ਼ਰ:\nਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਦੀਆਂ I2C, SPI, ਅਤੇ UART ਡਾਟਾ ਤਾਰਾਂ ਨੂੰ ਪੜ੍ਹ ਕੇ ਡਾਟਾ ਬਾਈਟਸ (ਜਿਵੇਂ 0x55, "HELLO") ਸਕ੍ਰੀਨ ਉੱਤੇ ਦਿਖਾਉਂਦਾ ਹੈ।',
          practicalExampleEn:
            'Debugging an uncompensated 10X oscilloscope probe on a 3.3V 10 MHz microcontroller clock: The engineer connects the probe to the scope’s 1 kHz calibration square wave lug. The square wave displays rounded, sluggish rising edges. If the engineer measured a 10 MHz SPI clock with this under-compensated probe, the clock amplitude would falsely read 1.8 V instead of 3.3 V! Turning the probe trimmer screw with an adjustment tool restores crisp 90-degree corners, ensuring accurate measurements.',
          practicalExamplePa:
            'ਔਸੀਲੋਸਕੋਪ ਪ੍ਰੋਬ ਦੀ ਸੈਟਿੰਗ (ਕੰਪਨਸੇਸ਼ਨ): ਨਵੀਂ ਪ੍ਰੋਬ ਲਗਾਉਣ ਤੇ ਸਕੋਪ ਦੇ 1 kHz ਟੈਸਟ ਪੁਆਇੰਟ ਉੱਤੇ ਚੌਰਸ ਵੇਵ ਦੇ ਕੋਨੇ ਗੋਲ ਦਿਖਾਈ ਦਿੰਦੇ ਹਨ। ਇਸ ਹਾਲਤ ਵਿੱਚ ਜੇਕਰ ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਦੀ 10 MHz ਕਲਾਕ ਚੈੱਕ ਕੀਤੀ ਜਾਵੇ ਤਾਂ ਉਹ 3.3V ਦੀ ਥਾਂ ਸਿਰਫ਼ 1.8V ਦਿਖਾਈ ਦੇਵੇਗੀ! ਪ੍ਰੋਬ ਦਾ ਪੇਚ ਘੁਮਾ ਕੇ ਕੋਨੇ ਬਿਲਕੁਲ ਤਿੱਖੇ ਚੌਰਸ ਕੀਤੇ ਜਾਂਦੇ ਹਨ ਤਾਂ ਜੋ ਸਹੀ ਵੋਲਟੇਜ ਦਿਖਾਈ ਦੇਵੇ।',
          codeDemo: `// TypeScript: Scope Bandwidth Calculator & Probe Capacitive Loading
export function calcScopeMeasurementRiseTime(signalRiseTimeNs: number, scopeBwMhz: number, probeBwMhz: number) {
  const scopeRiseTimeNs = (0.35 / (scopeBwMhz * 1e6)) * 1e9;
  const probeRiseTimeNs = (0.35 / (probeBwMhz * 1e6)) * 1e9;

  // Root-sum-square
  const displayedRiseTimeNs = Math.sqrt(
    Math.pow(signalRiseTimeNs, 2) + Math.pow(scopeRiseTimeNs, 2) + Math.pow(probeRiseTimeNs, 2)
  );

  return {
    scopeRiseTimeNs,
    probeRiseTimeNs,
    displayedRiseTimeNs,
    measurementErrorPercent: ((displayedRiseTimeNs - signalRiseTimeNs) / signalRiseTimeNs) * 100,
  };
}

export function calcProbeCapacitiveLoading(probeCapPf: number, signalFreqMhz: number) {
  const xcOhms = 1 / (2 * Math.PI * (signalFreqMhz * 1e6) * (probeCapPf * 1e-12));
  return { capacitiveReactanceOhms: xcOhms };
}

// Verification: 100MHz scope measuring a 3.5ns signal with 15pF probe:
const scope = calcScopeMeasurementRiseTime(3.5, 100, 150);
console.log('Displayed Rise Time:', scope.displayedRiseTimeNs.toFixed(2), 'ns'); // ~5.43 ns
const loading = calcProbeCapacitiveLoading(15, 50); // 15pF probe at 50MHz
console.log('Probe Loading Impedance at 50MHz:', loading.capacitiveReactanceOhms.toFixed(1), 'Ω'); // ~212.2 Ω!`,
          misconceptionsJson: [
            {
              myth: 'An oscilloscope probe ground clip can be connected anywhere convenient or left floating.',
              truthEn:
                'The long black ground alligator lead has significant inductance (~100 nH). In fast digital signals (>20 MHz), this ground loop inductance resonates with probe tip capacitance, generating massive artificial ringing overshoot spikes on screen that do not exist in the actual circuit. High-speed probing requires a short coaxial ground spring.',
              truthPa:
                'ਔਸੀਲੋਸਕੋਪ ਦੀ ਕਾਲੀ ਗਰਾਊਂਡ ਚਿਮਟੀ ਵਾਲੀ ਲੰਮੀ ਤਾਰ ਅੰਦਰ ਚੁੰਬਕੀ ਇੰਡਕਟੈਂਸ ਪੈਦਾ ਕਰਦੀ ਹੈ, ਜਿਸ ਨਾਲ ਸਕ੍ਰੀਨ ਉੱਤੇ ਨਕਲੀ ਝਟਕੇ ਅਤੇ ਕੰਬਣੀ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ ਜੋ ਅਸਲ ਵਿੱਚ ਸਰਕਟ ਵਿੱਚ ਨਹੀਂ ਹੁੰਦੀ। ਹਾਈ ਸਪੀਡ ਲਈ ਛੋਟੀ ਸਪਰਿੰਗ ਵਾਲੀ ਗਰਾਊਂਡ ਵਰਤਣੀ ਚਾਹੀਦੀ ਹੈ।',
            },
            {
              myth: 'A 100 MHz oscilloscope can measure a 100 MHz digital clock signal accurately.',
              truthEn:
                'At 100 MHz, a 100 MHz scope attenuates the fundamental sine frequency by -3 dB (displaying only 70.7% of its amplitude) and completely filters out all odd harmonics (300 MHz, 500 MHz). A 100 MHz digital square clock will look like a tiny, severely attenuated sine wave. Measuring a 100 MHz square wave accurately requires at least a 500 MHz scope.',
              truthPa:
                '100 MHz ਸਕੋਪ ਉੱਤੇ 100 MHz ਦੀ ਡਿਜੀਟਲ ਕਲਾਕ ਨਹੀਂ ਦੇਖੀ ਜਾ ਸਕਦੀ, ਕਿਉਂਕਿ ਇਹ ਸਿਰਫ਼ 70% ਵੋਲਟੇਜ ਦਿਖਾਏਗਾ ਅਤੇ ਚੌਰਸ ਵੇਵ ਗੋਲ ਸਾਈਨ ਵੇਵ ਬਣ ਜਾਵੇਗੀ। ਇਸ ਲਈ ਘੱਟੋ-ਘੱਟ 500 MHz ਬੈਂਡਵਿਡਥ ਵਾਲਾ ਸਕੋਪ ਚਾਹੀਦਾ ਹੈ।',
            },
            {
              myth: 'Digital storage oscilloscopes sample so fast that aliasing never occurs.',
              truthEn:
                'When you zoom out the timebase to look at a slow signal, the scope’s effective sample rate drops to fit memory depth. If the sample rate drops below the Nyquist rate (twice the highest frequency component present), high-frequency signals alias into false low-frequency ghost waveforms.',
              truthPa:
                'ਜਦੋਂ ਸਕੋਪ ਨੂੰ ਬਹੁਤ ਹੌਲੀ ਸਮੇਂ ਤੇ ਸੈੱਟ ਕੀਤਾ ਜਾਵੇ, ਤਾਂ ਸੈਂਪਲਿੰਗ ਰੇਟ ਘਟ ਜਾਂਦਾ ਹੈ ਅਤੇ ਹਾਈ ਫ੍ਰੀਕੁਐਂਸੀ ਸਿਗਨਲ ਨਕਲੀ ਭੂਤ ਵੇਵ (Aliasing) ਬਣ ਕੇ ਸਕ੍ਰੀਨ ਤੇ ਗਲਤ ਦਿਖਾਈ ਦੇਣ ਲੱਗ ਪੈਂਦੇ ਹਨ।',
            },
          ],
          terminologyJson: [
            {
              term: 'Bandwidth (-3dB)',
              punjabi: 'ਬੈਂਡਵਿਡਥ (Bandwidth)',
              meaningEn: 'Frequency at which an instrument’s signal response drops by 3 dB (70.7% of original amplitude).',
              meaningPa: 'ਉਹ ਫ੍ਰੀਕੁਐਂਸੀ ਜਿੱਥੇ ਸਕੋਪ ਦਾ ਸਿਗਨਲ 30% ਘਟ ਕੇ 70.7% ਰਹਿ ਜਾਂਦਾ ਹੈ।',
            },
            {
              term: 'Probe Compensation',
              punjabi: 'ਪ੍ਰੋਬ ਕੰਪਨਸੇਸ਼ਨ',
              meaningEn: 'Adjusting an oscilloscope probe’s variable capacitor to match its RC time constant to the scope input.',
              meaningPa: 'ਪ੍ਰੋਬ ਦੇ ਪੇਚ ਨੂੰ ਘੁਮਾ ਕੇ ਚੌਰਸ ਵੇਵ ਨੂੰ ਬਿਲਕੁਲ ਸਹੀ 90 ਡਿਗਰੀ ਕੋਨਿਆਂ ਵਾਲੀ ਬਣਾਉਣਾ।',
            },
            {
              term: 'Trigger Level',
              punjabi: 'ਟ੍ਰਿਗਰ ਲੈਵਲ',
              meaningEn: 'Voltage threshold that a signal must cross to synchronize and stabilize the oscilloscope display sweep.',
              meaningPa: 'ਉਹ ਵੋਲਟੇਜ ਸੀਮਾ ਜਿਸਨੂੰ ਪਾਰ ਕਰਦੇ ਹੀ ਸਕੋਪ ਸਕ੍ਰੀਨ ਉੱਤੇ ਵੇਵ ਨੂੰ ਸਥਿਰ ਕਰਕੇ ਰੋਕ ਲੈਂਦਾ ਹੈ।',
            },
            {
              term: 'Logic Analyzer',
              punjabi: 'ਲੌਜਿਕ ਐਨਾਲਾਈਜ਼ਰ',
              meaningEn: 'Multi-channel digital instrument designed to capture and display logic states and decode communication protocols.',
              meaningPa: 'ਕੰਪਿਊਟਰ ਚਿਪਸ ਦੇ ਡਿਜੀਟਲ ਸਿਗਨਲ ਅਤੇ ਪ੍ਰੋਟੋਕੋਲ (I2C, SPI) ਨੂੰ ਡੀਕੋਡ ਕਰਨ ਵਾਲਾ ਯੰਤਰ।',
            },
            {
              term: 'Rise Time (tr)',
              punjabi: 'ਰਾਈਜ਼ ਟਾਈਮ (ਚੜ੍ਹਨ ਦਾ ਸਮਾਂ)',
              meaningEn: 'Time taken by a digital signal edge to transition from 10% to 90% of its full steady-state amplitude.',
              meaningPa: 'ਸਿਗਨਲ ਨੂੰ 10% ਤੋਂ 90% ਵੋਲਟੇਜ ਤੱਕ ਚੜ੍ਹਨ ਲਈ ਲੱਗਣ ਵਾਲਾ ਸਮਾਂ।',
            },
            {
              term: 'Constant Current (CC) Mode',
              punjabi: 'ਸਥਿਰ ਕਰੰਟ ਮੋਡ (CC Mode)',
              meaningEn: 'Power supply operating mode where output current is strictly clamped to a preset safety limit to prevent burning circuits.',
              meaningPa: 'ਪਾਵਰ ਸਪਲਾਈ ਦਾ ਉਹ ਮੋਡ ਜੋ ਕਰੰਟ ਨੂੰ ਸੀਮਤ ਕਰਕੇ ਨਵੇਂ ਸਰਕਟਾਂ ਨੂੰ ਸੜਨ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।',
            },
          ],
          interactiveLabId: 'multimeter-lab',
          exercisePromptEn:
            'Bench Lab Exercise: (1) You need to measure a 25 MHz square wave clock signal from an FPGA. According to the 5x rule, what is the minimum required oscilloscope bandwidth? (2) A 100 MHz oscilloscope has an internal rise time of 3.5 ns. If a signal has a real rise time of 2.0 ns, calculate the displayed rise time seen on the screen.',
          exercisePromptPa:
            'ਲੈਬ ਅਭਿਆਸ: (1) FPGA ਚਿੱਪ ਤੋਂ 25 MHz ਦੀ ਚੌਰਸ ਕਲਾਕ ਨਾਪਣ ਲਈ 5X ਨਿਯਮ ਅਨੁਸਾਰ ਘੱਟੋ-ਘੱਟ ਕਿੰਨੀ ਬੈਂਡਵਿਡਥ ਵਾਲਾ ਔਸੀਲੋਸਕੋਪ ਚਾਹੀਦਾ ਹੈ? (2) 100 MHz ਸਕੋਪ ਦਾ ਰਾਈਜ਼ ਟਾਈਮ 3.5 ns ਹੈ। 2.0 ns ਵਾਲੇ ਸਿਗਨਲ ਦਾ ਸਕ੍ਰੀਨ ਉੱਤੇ ਦਿਖਾਈ ਦੇਣ ਵਾਲਾ ਰਾਈਜ਼ ਟਾਈਮ ਕੱਢੋ।',
          summaryEn:
            'Oscilloscopes and logic analyzers capture electrical reality in high definition: 10X probes balance bandwidth and loading, proper triggering stabilizes chaotic transients, and current-limited bench power supplies safeguard fragile silicon prototypes.',
          summaryPa:
            'ਔਸੀਲੋਸਕੋਪ ਅਤੇ ਲੌਜਿਕ ਐਨਾਲਾਈਜ਼ਰ ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਦੀਆਂ ਤਰੰਗਾਂ ਨੂੰ ਸਾਫ਼ ਦੇਖਣ ਦਾ ਸਾਧਨ ਹਨ: 10X ਪ੍ਰੋਬਾਂ ਸਹੀ ਵੋਲਟੇਜ ਫੜਦੀਆਂ ਹਨ, ਟ੍ਰਿਗਰਿੰਗ ਸਿਗਨਲ ਰੋਕਦੀ ਹੈ, ਅਤੇ CC ਮੋਡ ਵਾਲੀ ਪਾਵਰ ਸਪਲਾਈ ਨਵੇਂ ਸਰਕਟਾਂ ਨੂੰ ਸੜਨ ਤੋਂ ਬਚਾਉਂਦੀ ਹੈ।',
          furtherReadingJson: [
            'Oscilloscopes: A Guide to Principles and Applications by Ian Hickman',
            'Tektronix: XYZs of Oscilloscopes Primer',
            'Keysight Technologies: Evaluating Oscilloscope Fundamentals & Probing Handbook',
          ],
          quiz: {
            titleEn: 'Level 7 Assessment: Oscilloscopes, Probes & Logic Analyzers',
            titlePa: 'ਲੈਵਲ 7 ਟੈਸਟ: ਔਸੀਲੋਸਕੋਪ, ਪ੍ਰੋਬਿੰਗ ਅਤੇ ਲੌਜਿਕ ਐਨਾਲਾਈਜ਼ਰ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: '5x Bandwidth Rule',
                promptEn: 'According to the standard engineering "5x Rule", what minimum oscilloscope bandwidth is required to view a 20 MHz digital square wave accurately?',
                promptPa: '5X ਇੰਜੀਨੀਅਰਿੰਗ ਨਿਯਮ ਅਨੁਸਾਰ 20 MHz ਦੀ ਡਿਜੀਟਲ ਚੌਰਸ ਵੇਵ ਨੂੰ ਸਹੀ ਦੇਖਣ ਲਈ ਘੱਟੋ-ਘੱਟ ਕਿੰਨੀ ਬੈਂਡਵਿਡਥ ਵਾਲਾ ਸਕੋਪ ਚਾਹੀਦਾ ਹੈ?',
                optionsJson: ['100 MHz', '20 MHz', '40 MHz', '500 MHz'],
                correctAnswer: '100 MHz',
                explanationEn:
                  'A square wave requires capturing up to the 5th harmonic (5 * 20 MHz = 100 MHz) to preserve edge fidelity without severe rounding.',
                explanationPa:
                  'ਚੌਰਸ ਵੇਵ ਦੇ ਪੰਜਵੇਂ ਹਾਰਮੋਨਿਕ (5 * 20 = 100 MHz) ਨੂੰ ਫੜਨ ਲਈ ਘੱਟੋ-ਘੱਟ 100 MHz ਸਕੋਪ ਚਾਹੀਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Scope Rise Time',
                promptEn: 'What is the theoretical rise time of a 200 MHz analog bandwidth oscilloscope?',
                promptPa: '200 MHz ਬੈਂਡਵਿਡਥ ਵਾਲੇ ਔਸੀਲੋਸਕੋਪ ਦਾ ਰਾਈਜ਼ ਟਾਈਮ (Rise Time) ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?',
                optionsJson: ['1.75 nanoseconds', '3.5 nanoseconds', '5.0 nanoseconds', '0.35 nanoseconds'],
                correctAnswer: '1.75 nanoseconds',
                explanationEn:
                  'tr = 0.35 / BW = 0.35 / (200 * 10^6 Hz) = 1.75 * 10^-9 s = 1.75 ns.',
                explanationPa:
                  'tr = 0.35 / BW = 0.35 / 200,000,000 = 1.75 ਨੈਨੋਸਕਿੰਟ।',
              },
              {
                questionType: 'mcq',
                topicTag: '10X Probe Advantage',
                promptEn: 'What is the primary technical advantage of using a 10X passive probe over a 1X probe?',
                promptPa: '1X ਪ੍ਰੋਬ ਦੇ ਮੁਕਾਬਲੇ 10X ਪੈਸਿਵ ਪ੍ਰੋਬ ਵਰਤਣ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਤਕਨੀਕੀ ਫ਼ਾਇਦਾ ਕੀ ਹੈ?',
                optionsJson: [
                  'Higher bandwidth (e.g. 200-500 MHz) and much lower tip capacitance (~10-15 pF), minimizing circuit loading',
                  'It amplifies tiny microvolt signals by 10 times',
                  'It eliminates the need for a ground wire',
                  'It converts analog signals directly to digital',
                ],
                correctAnswer: 'Higher bandwidth (e.g. 200-500 MHz) and much lower tip capacitance (~10-15 pF), minimizing circuit loading',
                explanationEn:
                  'A 10X probe uses a 9 MΩ resistor to divide voltage, increasing input resistance to 10 MΩ and slashing capacitive loading from ~100 pF down to ~12 pF.',
                explanationPa:
                  'ਇਹ ਹਾਈ ਬੈਂਡਵਿਡਥ ਦਿੰਦੀ ਹੈ ਅਤੇ ਪ੍ਰੋਬ ਕੈਪਸੀਟਰ ਨੂੰ 100 pF ਤੋਂ ਘਟਾ ਕੇ ਸਿਰਫ਼ 12 pF ਕਰ ਦਿੰਦੀ ਹੈ, ਜਿਸ ਨਾਲ ਸਰਕਟ ਤੇ ਬੋਝ ਨਹੀਂ ਪੈਂਦਾ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Probe Compensation',
                promptEn: 'What does an "over-compensated" 10X oscilloscope probe display when connected to the 1 kHz square wave calibrator lug?',
                promptPa: 'ਜਦੋਂ 10X ਪ੍ਰੋਬ "Over-Compensated" ਹੋਵੇ ਤਾਂ 1 kHz ਟੈਸਟ ਵੇਵ ਦੇ ਕੋਨੇ ਕਿਹੋ ਜਿਹੇ ਦਿਖਾਈ ਦਿੰਦੇ ਹਨ?',
                optionsJson: [
                  'Excessive sharp overshoot spikes and ringing at each rising edge',
                  'Rounded, sluggish, droop-edged corners',
                  'A pure sine wave',
                  'A flat DC line',
                ],
                correctAnswer: 'Excessive sharp overshoot spikes and ringing at each rising edge',
                explanationEn:
                  'Over-compensation (too much probe capacitance) over-emphasizes high frequencies, causing sharp artificial overshoot spikes.',
                explanationPa:
                  'ਚੜ੍ਹਦੇ ਕਿਨਾਰੇ ਉੱਤੇ ਤਿੱਖੇ ਨਕਲੀ ਸਪਾਈਕ (Overshoot) ਦਿਖਾਈ ਦਿੰਦੇ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Single Shot Trigger',
                promptEn: 'Which trigger mode should be used to capture a rare, non-repetitive microsecond transient pulse on a reset line?',
                promptPa: 'ਕਿਸੇ ਦੁਰਲੱਭ ਅਤੇ ਇੱਕ ਵਾਰ ਆਉਣ ਵਾਲੀ ਖ਼ਰਾਬੀ (Glitch) ਨੂੰ ਫੜਨ ਲਈ ਔਸੀਲੋਸਕੋਪ ਦਾ ਕਿਹੜਾ ਮੋਡ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
                optionsJson: ['Single-Shot (Single Trigger)', 'Auto Mode', 'Roll Mode', 'Free-Run Mode'],
                correctAnswer: 'Single-Shot (Single Trigger)',
                explanationEn:
                  'Single-shot mode arms the acquisition system once. As soon as the transient edge triggers the threshold, it captures the event into memory and halts.',
                explanationPa:
                  'Single-Shot ਮੋਡ: ਇਹ ਇੰਤਜ਼ਾਰ ਕਰਦਾ ਰਹਿੰਦਾ ਹੈ, ਅਤੇ ਜਿਵੇਂ ਹੀ ਝਟਕਾ ਆਉਂਦਾ ਹੈ, ਉਸਨੂੰ ਫੜ ਕੇ ਸਕ੍ਰੀਨ ਉੱਤੇ ਪੱਕਾ ਰੋਕ ਲੈਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Ground Clip Inductance',
                promptEn: 'Why should you avoid using the standard 15 cm black alligator ground lead when probing fast 100 MHz digital clock signals?',
                promptPa: '100 MHz ਹਾਈ-ਸਪੀਡ ਕਲਾਕ ਨਾਪਣ ਵੇਲੇ ਪ੍ਰੋਬ ਦੀ 15 ਸੈਂਟੀਮੀਟਰ ਲੰਮੀ ਕਾਲੀ ਗਰਾਊਂਡ ਤਾਰ ਕਿਉਂ ਨਹੀਂ ਵਰਤਣੀ ਚਾਹੀਦੀ?',
                optionsJson: [
                  'Its ~100 nH lead inductance forms an LC tank with probe capacitance, creating massive false ringing overshoot on the screen',
                  'It carries dangerous 230V mains potential',
                  'It overheats and melts',
                  'It attenuates the signal to zero',
                ],
                correctAnswer: 'Its ~100 nH lead inductance forms an LC tank with probe capacitance, creating massive false ringing overshoot on the screen',
                explanationEn:
                  'Long ground leads add series inductance that resonates with probe capacitance, causing huge artificial ringing oscillations. A short coaxial spring ground must be used.',
                explanationPa:
                  'ਲੰਮੀ ਤਾਰ ਦੀ ਚੁੰਬਕੀ ਇੰਡਕਟੈਂਸ ਕਾਰਨ ਸਕ੍ਰੀਨ ਉੱਤੇ ਨਕਲੀ ਕੰਬਣੀ ਅਤੇ ਸਪਾਈਕ ਬਣਦੇ ਹਨ ਜੋ ਅਸਲ ਵਿੱਚ ਸਰਕਟ ਵਿੱਚ ਨਹੀਂ ਹੁੰਦੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Logic Analyzer Decoding',
                promptEn: 'What is the primary operational difference between a Logic Analyzer and an Oscilloscope?',
                promptPa: 'ਲੌਜਿਕ ਐਨਾਲਾਈਜ਼ਰ ਅਤੇ ਔਸੀਲੋਸਕੋਪ ਵਿਚਕਾਰ ਮੁੱਖ ਫ਼ਰਕ ਕੀ ਹੈ?',
                optionsJson: [
                  'A logic analyzer only evaluates digital logic states (0 or 1) across many channels (16-64 channels) with hardware protocol decoding',
                  'An oscilloscope cannot measure voltage',
                  'A logic analyzer only operates on AC mains',
                  'A logic analyzer has only one channel',
                ],
                correctAnswer: 'A logic analyzer only evaluates digital logic states (0 or 1) across many channels (16-64 channels) with hardware protocol decoding',
                explanationEn:
                  'Oscilloscopes show high-resolution analog voltage waveforms on 2 to 4 channels. Logic analyzers capture 16 to 64 digital channels, decoding I2C, SPI, and UART packets.',
                explanationPa:
                  'ਲੌਜਿਕ ਐਨਾਲਾਈਜ਼ਰ 16 ਤੋਂ 64 ਤਾਰਾਂ ਉੱਤੇ ਸਿਰਫ਼ 0 ਅਤੇ 1 ਦੇਖ ਕੇ ਕੰਪਿਊਟਰ ਕੋਡ (I2C/SPI) ਪੜ੍ਹਦਾ ਹੈ, ਜਦਕਿ ਸਕੋਪ ਅਸਲ ਵੋਲਟੇਜ ਦੀ ਸ਼ਕਲ ਦਿਖਾਉਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Bench Supply CC Mode',
                promptEn: 'When powering on an unverified prototype circuit for the very first time, why should you set the bench power supply to Constant Current (CC) limit mode?',
                promptPa: 'ਨਵਾਂ ਬਣਿਆ ਸਰਕਟ ਪਹਿਲੀ ਵਾਰ ਚਾਲੂ ਕਰਦੇ ਸਮੇਂ ਬੈਂਚ ਪਾਵਰ ਸਪਲਾਈ ਉੱਤੇ ਕਰੰਟ ਲਿਮਿਟ (CC Mode) ਕਿਉਂ ਲਗਾਈ ਜਾਂਦੀ ਹੈ?',
                optionsJson: [
                  'To prevent smoke, fire, and catastrophic chip destruction if an undetected solder bridge or short circuit exists',
                  'To calibrate the voltage display',
                  'To speed up circuit boot time',
                  'To increase battery life',
                ],
                correctAnswer: 'To prevent smoke, fire, and catastrophic chip destruction if an undetected solder bridge or short circuit exists',
                explanationEn:
                  'If there is a short circuit, the supply clamps current to the safe limit (e.g. 50 mA) and drops voltage, preventing blown traces and fried microcontrollers.',
                explanationPa:
                  'ਜੇਕਰ ਸਰਕਟ ਵਿੱਚ ਕੋਈ ਸ਼ਾਰਟ ਸਰਕਟ ਹੋਵੇ ਤਾਂ ਕਰੰਟ ਲਿਮਿਟ (ਜਿਵੇਂ 50 mA) ਪਾਵਰ ਕੱਟ ਕੇ ਚਿਪਸ ਨੂੰ ਸੜਨ ਅਤੇ ਧੂੰਆਂ ਛੱਡਣ ਤੋਂ ਬਚਾ ਲੈਂਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Aliasing',
                promptEn: 'What is the minimum sampling rate required by the Nyquist-Shannon Sampling Theorem to avoid frequency aliasing of a signal with maximum frequency component f_max?',
                promptPa: 'ਨਾਈਕਵਿਸਟ ਥਿਊਰਮ ਅਨੁਸਾਰ ਐਲੀਆਸਿੰਗ (Aliasing) ਤੋਂ ਬਚਣ ਲਈ ਸੈਂਪਲਿੰਗ ਰੇਟ ਘੱਟੋ-ਘੱਟ ਕਿੰਨਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ?',
                optionsJson: ['At least 2 times f_max (fs ≥ 2 * f_max)', 'Equal to f_max', '10 times f_max', 'Half of f_max'],
                correctAnswer: 'At least 2 times f_max (fs ≥ 2 * f_max)',
                explanationEn:
                  'Nyquist theorem mandates that sample rate fs must be strictly greater than twice the highest frequency present (fs ≥ 2 * f_max) to reconstruct the signal without aliasing.',
                explanationPa:
                  'ਸੈਂਪਲਿੰਗ ਰੇਟ ਸਿਗਨਲ ਦੀ ਵੱਧ ਤੋਂ ਵੱਧ ਫ੍ਰੀਕੁਐਂਸੀ ਨਾਲੋਂ ਘੱਟੋ-ਘੱਟ ਦੁੱਗਣਾ (2 * f_max) ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Runt Trigger',
                promptEn: 'What is a "Runt Pulse" in digital electronics testing?',
                promptPa: 'ਡਿਜੀਟਲ ਟੈਸਟਿੰਗ ਵਿੱਚ "Runt Pulse" ਕਿਸਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
                optionsJson: [
                  'A malformed digital pulse that crosses one logic threshold but fails to reach the opposite threshold before falling back',
                  'An extremely long pulse lasting hours',
                  'A high-voltage lightning surge',
                  'A pulse with zero voltage',
                ],
                correctAnswer: 'A malformed digital pulse that crosses one logic threshold but fails to reach the opposite threshold before falling back',
                explanationEn:
                  'Runt pulses occur when timing violations or bus contention cause a pulse to rise above lower threshold (V_IL) but fall before reaching valid logic high (V_IH).',
                explanationPa:
                  'ਇੱਕ ਅੱਧ-ਪਚੱਧੀ ਪਲਸ ਜੋ ਹੇਠੋਂ ਤਾਂ ਚੜ੍ਹਦੀ ਹੈ ਪਰ ਪੂਰੀ 1 ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਹੀ ਵਿਚਾਲੇ ਡਿੱਗ ਪੈਂਦੀ ਹੈ, ਜਿਸ ਨਾਲ ਸਰਕਟ ਹੈਂਗ ਹੋ ਜਾਂਦਾ ਹੈ।',
              },
            ],
          },
        },
      ],
    },
  ],
};
