import { SeedCourse } from './types.ts';

export const LEVEL_4_COURSE: SeedCourse = {
  slug: 'level-4-analog-electronics',
  levelNumber: 4,
  titleEn: 'Level 4: Analog Electronics',
  titlePa: 'ਲੈਵਲ 4: ਐਨਾਲਾਗ ਇਲੈਕਟ੍ਰਾਨਿਕਸ (Analog Electronics)',
  descriptionEn:
    'Transistor small-signal amplifiers, differential pairs, operational amplifiers, negative feedback, summing/integrating circuits, Schmitt triggers, instrumentation amps, active filters, and oscillators.',
  descriptionPa:
    'ਟ੍ਰਾਂਜਿਸਟਰ ਐਂਪਲੀਫਾਇਰ, ਓਪ-ਐਂਪ (Op-Amp), ਨੈਗੇਟਿਵ ਫੀਡਬੈਕ, ਇਨਵਰਟਿੰਗ/ਨਾਨ-ਇਨਵਰਟਿੰਗ ਸਰਕਟ, ਸਮਿਟ ਟ੍ਰਿਗਰ, ਐਕਟਿਵ ਫਿਲਟਰ, ਆਸੀਲੇਟਰ ਅਤੇ ਸਿਗਨਲ ਕੰਡੀਸ਼ਨਿੰਗ।',
  category: 'core-electronics',
  estimatedHours: 18,
  modules: [
    {
      orderIndex: 1,
      titleEn: 'Transistor Amplifiers & Operational Amplifier Foundations',
      titlePa: 'ਟ੍ਰਾਂਜਿਸਟਰ ਐਂਪਲੀਫਾਇਰ ਅਤੇ ਓਪ-ਐਂਪ ਬੁਨਿਆਦਾਂ',
      summaryEn:
        'Small-signal BJT models (common-emitter, emitter-follower), differential input stages, ideal op-amp golden rules, virtual ground, and negative feedback amplifier configurations.',
      summaryPa:
        'ਕਾਮਨ-ਐਮੀਟਰ ਐਂਪਲੀਫਾਇਰ, ਓਪ-ਐਂਪ ਦੇ ਸੁਨਹਿਰੀ ਨਿਯਮ, ਵਰਚੁਅਲ ਗਰਾਊਂਡ, ਅਤੇ ਨੈਗੇਟਿਵ ਫੀਡਬੈਕ ਵਾਲੇ ਐਂਪਲੀਫਾਇਰ ਸਰਕਟ।',
      lessons: [
        {
          slug: 'transistor-amplifiers-opamps-negative-feedback',
          orderIndex: 1,
          titleEn: '4.1 Transistor Amplifiers, Op-Amp Principles & Negative Feedback',
          titlePa: '4.1 ਟ੍ਰਾਂਜਿਸਟਰ ਐਂਪਲੀਫਾਇਰ, ਓਪ-ਐਂਪ ਸਿਧਾਂਤ ਅਤੇ ਨੈਗੇਟਿਵ ਫੀਡਬੈਕ',
          objectivesJson: [
            'Analyze BJT common-emitter and emitter-follower amplifier topologies for voltage gain, input impedance, and output impedance',
            'Enforce the two Golden Rules of ideal operational amplifiers with negative feedback: V+ = V- and zero input bias current (I+ = I- = 0)',
            'Derive and calculate exact closed-loop gains for inverting, non-inverting, and unity-gain buffer configurations',
            'Calculate closed-loop bandwidth and stability using the Gain-Bandwidth Product (GBWP = A_cl * f_cl)',
          ],
          prerequisitesJson: ['Level 3: Semiconductor Devices (BJT active biasing and small-signal models)'],
          childAnalogyEn:
            'Think of a singer singing at a Punjabi cultural festival! The singer’s natural voice is soft (millivolts). The audio microphone catches this vibration, passes it through an amplifier, and giant stage loudspeakers blast sound across the entire village (Volts)! Negative feedback is like the singer listening to their own monitor headphone: if their pitch drifts too high, they instantly hear it and adjust their voice back to sweet perfection!',
          childAnalogyPa:
            'ਪਿੰਡ ਦੇ ਮੇਲੇ ਵਿੱਚ ਗਾ ਰਹੇ ਗਾਇਕ ਦੀ ਕਲਪਨਾ ਕਰੋ! ਗਾਇਕ ਦੀ ਆਵਾਜ਼ ਕੁਦਰਤੀ ਤੌਰ ਤੇ ਨਿੱਕੀ ਹੁੰਦੀ ਹੈ (ਕੁਝ ਮਿਲੀਵੋਲਟ)। ਮਾਈਕ੍ਰੋਫੋਨ ਇਸ ਆਵਾਜ਼ ਨੂੰ ਫੜਦਾ ਹੈ, ਐਂਪਲੀਫਾਇਰ ਇਸਨੂੰ ਹਜ਼ਾਰਾਂ ਗੁਣਾ ਵਧਾ ਕੇ ਵੱਡੇ ਸਪੀਕਰਾਂ ਰਾਹੀਂ ਪੂਰੇ ਪਿੰਡ ਵਿੱਚ ਗੂੰਜਾ ਦਿੰਦਾ ਹੈ! ਨੈਗੇਟਿਵ ਫੀਡਬੈਕ ਗਾਇਕ ਦੇ ਕੰਨ ਵਿੱਚ ਲੱਗੇ ਮੌਨੀਟਰ ਈਅਰਫੋਨ ਵਾਂਗ ਹੈ: ਜੇਕਰ ਕੋਈ ਸੁਰ ਵਿਗੜੇ ਤਾਂ ਉਹ ਖੁਦ ਸੁਣ ਕੇ ਉਸੇ ਵੇਲੇ ਅਵਾਜ਼ ਨੂੰ ਸਹੀ ਸੁਰ ਵਿੱਚ ਬੰਨ੍ਹ ਲੈਂਦਾ ਹੈ!',
          technicalExplanationEn:
            'Analog amplification conditions tiny continuous natural signals before digital conversion:\n\n1. BJT Common-Emitter Amplifier:\n• Small-signal Transconductance: g_m = I_C / V_T ≈ I_C / 26mV\n• Dynamic Emitter Resistance: r_e\' = 1 / g_m = 26mV / I_C\n• Voltage Gain: A_v = -R_C / (r_e\' + R_E1) (Negative sign indicates 180° phase inversion).\n• Input Impedance: R_in = R_B1 || R_B2 || [β * (r_e\' + R_E1)].\n\n2. The Ideal Operational Amplifier (Op-Amp):\n• Infinite Open-Loop Gain (A_ol -> ∞, practically 100,000 to 1,000,000)\n• Infinite Input Impedance (R_in -> ∞, practically 10^7 to 10^12 Ω)\n• Zero Output Impedance (R_out = 0 Ω, practically 10 to 100 Ω)\n• Infinite Bandwidth and Zero Input Offset Voltage\n\n3. The Two Golden Rules (under negative feedback):\n• Rule 1: The output does whatever is necessary to keep the differential input voltage at zero: V+ = V- (Virtual Ground when V+ is grounded).\n• Rule 2: The inputs draw no current: I+ = I- = 0 A.\n\n4. Closed-Loop Configurations:\n• Inverting Amplifier: A_v = -R_f / R_in. Current I = V_in / R_in flows through R_f into output. Output is inverted.\n• Non-Inverting Amplifier: A_v = 1 + (R_f / R_1). Extremely high input impedance; zero inversion.\n• Voltage Follower (Buffer): R_f = 0, R_1 = ∞. A_v = +1.0. Isolates high-impedance sensors from low-impedance loads.\n\n5. Gain-Bandwidth Product (GBWP):\nOp-amps exhibit an internal dominant pole roll-off at -20 dB/decade:\n• GBWP = Closed-Loop Gain * Cutoff Frequency: f_c = GBWP / A_cl.',
          technicalExplanationPa:
            'ਐਨਾਲਾਗ ਐਂਪਲੀਫਿਕੇਸ਼ਨ ਦਾ ਵਿਗਿਆਨ:\n\n1. ਕਾਮਨ-ਐਮੀਟਰ ਐਂਪਲੀਫਾਇਰ:\nਸਿਗਨਲ ਨੂੰ ਵਧਾਉਣ ਦੇ ਨਾਲ-ਨਾਲ ਉਸਦਾ ਫੇਜ਼ 180 ਡਿਗਰੀ ਉਲਟਾ ਦਿੰਦਾ ਹੈ (Av = -Rc / re\')।\n\n2. ਆਪ੍ਰੇਸ਼ਨਲ ਐਂਪਲੀਫਾਇਰ (Op-Amp, ਜਿਵੇਂ LM358, TL072):\nਇਹ ਇੱਕ ਸ਼ਕਤੀਸ਼ਾਲੀ ਚਿੱਪ ਹੈ ਜਿਸਦੇ ਦੋ ਇਨਪੁਟ ਹੁੰਦੇ ਹਨ: Inverting (-) ਅਤੇ Non-Inverting (+)।\nਨੈਗੇਟਿਵ ਫੀਡਬੈਕ ਦੇ 2 ਸੁਨਹਿਰੀ ਨਿਯਮ:\n• ਨਿਯਮ 1: ਦੋਵੇਂ ਇਨਪੁਟ ਪਿੰਨਾਂ ਵਿਚਕਾਰ ਵੋਲਟੇਜ ਹਮੇਸ਼ਾ ਬਰਾਬਰ ਰਹਿੰਦੀ ਹੈ (V+ = V-, ਵਰਚੁਅਲ ਗਰਾਊਂਡ)।\n• ਨਿਯਮ 2: ਇਨਪੁਟ ਪਿੰਨਾਂ ਦੇ ਅੰਦਰ ਕੋਈ ਕਰੰਟ ਨਹੀਂ ਜਾਂਦਾ (I = 0)।\n\n3. ਮੁੱਖ ਸਰਕਟ:\n• ਇਨਵਰਟਿੰਗ ਐਂਪਲੀਫਾਇਰ: Gain = -Rf / Rin (ਸਿਗਨਲ ਪੁੱਠਾ ਹੁੰਦਾ ਹੈ)।\n• ਨਾਨ-ਇਨਵਰਟਿੰਗ ਐਂਪਲੀਫਾਇਰ: Gain = 1 + (Rf / R1) (ਸਿਗਨਲ ਸਿੱਧਾ ਰਹਿੰਦਾ ਹੈ)।\n• ਬਫਰ (Buffer): Gain = 1। ਸੈਂਸਰ ਦੀ ਕਮਜ਼ੋਰ ਵੋਲਟੇਜ ਨੂੰ ਬਿਨਾਂ ਦਬਾਏ ਅੱਗੇ ਭੇਜਦਾ ਹੈ।',
          practicalExampleEn:
            'Conditioning a low-level piezoelectric guitar pickup or thermocouple sensor: The sensor has a very high source impedance (1 MΩ) and produces only a 20 mV AC signal. Connecting it directly to a microcontroller ADC pin drags the signal down to zero due to loading. By passing it first through an op-amp non-inverting amplifier with Rin > 10^12 Ω and gain of 1 + 100k/10k = 11, the output becomes a clean 220 mV with low output impedance, ready for sampling.',
          practicalExamplePa:
            'ਸੈਂਸਰ ਦੀ ਕਮਜ਼ੋਰ ਆਵਾਜ਼ ਨੂੰ ਮਜ਼ਬੂਤ ਕਰਨਾ: ਗਿਟਾਰ ਦੇ ਪਿਕਅੱਪ ਜਾਂ ਤਾਪਮਾਨ ਵਾਲੇ ਥਰਮੋਕਪਲ ਤੋਂ ਸਿਰਫ਼ 20 mV ਦੀ ਨਿੱਕੀ ਵੋਲਟੇਜ ਨਿਕਲਦੀ ਹੈ। ਜੇਕਰ ਇਸਨੂੰ ਸਿੱਧਾ ਜੋੜਿਆ ਜਾਵੇ ਤਾਂ ਵੋਲਟੇਜ ਦੱਬ ਕੇ ਜ਼ੀਰੋ ਹੋ ਜਾਂਦੀ ਹੈ। ਜਦੋਂ ਇਸਨੂੰ ਓਪ-ਐਂਪ ਦੇ ਨਾਨ-ਇਨਵਰਟਿੰਗ ਸਰਕਟ (Gain = 11) ਵਿੱਚੋਂ ਲੰਘਾਇਆ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਇਹ ਬਿਨਾਂ ਕਿਸੇ ਖ਼ਰਾਬੀ ਦੇ ਮਜ਼ਬੂਤ 220 mV ਬਣ ਜਾਂਦੀ ਹੈ।',
          codeDemo: `// TypeScript: Op-Amp Closed-Loop Gain & Bandwidth Simulator
export function calcInvertingOpAmp(rIn: number, rFeedback: number, vIn: number, gbwpHz = 1e6) {
  const gain = -(rFeedback / rIn);
  const vOut = vIn * gain;
  const closedLoopBandwidthHz = gbwpHz / Math.abs(gain);

  return {
    closedLoopGain: gain,
    outputVoltage: vOut,
    bandwidthHz: closedLoopBandwidthHz,
  };
}

export function calcNonInvertingOpAmp(r1: number, rFeedback: number, vIn: number, gbwpHz = 1e6) {
  const gain = 1 + (rFeedback / r1);
  const vOut = vIn * gain;
  const closedLoopBandwidthHz = gbwpHz / gain;

  return {
    closedLoopGain: gain,
    outputVoltage: vOut,
    bandwidthHz: closedLoopBandwidthHz,
  };
}

// Verification: TL072 (GBWP = 3 MHz) inverting amp with Rin=10k, Rf=100k (Gain = -10):
const amp = calcInvertingOpAmp(10000, 100000, 0.050, 3e6);
console.log('Gain:', amp.closedLoopGain); // -10
console.log('Output:', amp.outputVoltage.toFixed(2), 'V'); // -0.50 V
console.log('Bandwidth:', (amp.bandwidthHz / 1e3).toFixed(1), 'kHz'); // 300.0 kHz`,
          misconceptionsJson: [
            {
              myth: 'An op-amp can output voltages higher than its positive power supply rail.',
              truthEn:
                'An op-amp cannot output more voltage than its power rails (e.g. +15V and -15V). Driving the input beyond this causes hard output saturation (clipping). Even rail-to-rail op-amps can only swing within a few tens of millivolts of the supply rails.',
              truthPa:
                'ਓਪ-ਐਂਪ ਆਪਣੀ ਪਾਵਰ ਸਪਲਾਈ (ਜਿਵੇਂ +12V) ਤੋਂ ਵੱਧ ਵੋਲਟੇਜ ਕਦੇ ਨਹੀਂ ਦੇ ਸਕਦਾ। ਜੇਕਰ ਗੇਨ ਵੱਧ ਹੋਵੇ ਤਾਂ ਵੋਲਟੇਜ ਸਪਲਾਈ ਨਾਲ ਟਕਰਾ ਕੇ ਕੱਟੀ ਜਾਂਦੀ ਹੈ (Clipping)।',
            },
            {
              myth: 'Virtual ground is an actual physical copper connection to ground (0V).',
              truthEn:
                'Virtual ground is an operating condition maintained dynamically by negative feedback. If you connect an ohmmeter to a virtual ground pin with power off, it measures megaohms, not a short to ground.',
              truthPa:
                'ਵਰਚੁਅਲ ਗਰਾਊਂਡ ਕੋਈ ਅਸਲ ਤਾਰ ਨਹੀਂ ਹੁੰਦੀ। ਇਹ ਨੈਗੇਟਿਵ ਫੀਡਬੈਕ ਕਾਰਨ ਪੈਦਾ ਹੋਈ ਜ਼ੀਰੋ ਵੋਲਟੇਜ ਹੁੰਦੀ ਹੈ। ਪਾਵਰ ਬੰਦ ਕਰਕੇ ਮਲਟੀਮੀਟਰ ਲਗਾਉਣ ਤੇ ਇਹ ਜ਼ਮੀਨ ਨਾਲ ਸ਼ਾਰਟ ਨਹੀਂ ਦਿਖਾਉਂਦੀ।',
            },
            {
              myth: 'Op-amp gain remains constant at all frequencies.',
              truthEn:
                'Open-loop gain begins dropping drastically at very low frequencies (often around 10 Hz) due to internal frequency compensation capacitors. The product of closed-loop gain and bandwidth is strictly constant (GBWP).',
              truthPa:
                'ਜਿਉਂ-ਜਿਉਂ ਸਿਗਨਲ ਦੀ ਫ੍ਰੀਕੁਐਂਸੀ ਵਧਦੀ ਹੈ, ਓਪ-ਐਂਪ ਦਾ ਗੇਨ ਘਟਦਾ ਜਾਂਦਾ ਹੈ। ਜੇਕਰ ਗੇਨ 100 ਗੁਣਾ ਕਰੋਗੇ ਤਾਂ ਬੈਂਡਵਿਡਥ 100 ਗੁਣਾ ਘਟ ਜਾਵੇਗੀ।',
            },
          ],
          terminologyJson: [
            {
              term: 'Operational Amplifier (Op-Amp)',
              punjabi: 'ਆਪ੍ਰੇਸ਼ਨਲ ਐਂਪਲੀਫਾਇਰ (ਓਪ-ਐਂਪ)',
              meaningEn: 'High-gain direct-coupled differential amplifier designed to perform mathematical operations with external feedback.',
              meaningPa: 'ਬਹੁਤ ਜ਼ਿਆਦਾ ਗੇਨ ਵਾਲੀ ਐਨਾਲਾਗ ਚਿੱਪ ਜੋ ਨੈਗੇਟਿਵ ਫੀਡਬੈਕ ਨਾਲ ਗਣਿਤਕ ਕੰਮ ਕਰਦੀ ਹੈ।',
            },
            {
              term: 'Negative Feedback',
              punjabi: 'ਨੈਗੇਟਿਵ ਫੀਡਬੈਕ',
              meaningEn: 'Feeding a portion of output back to inverting input to stabilize gain, widen bandwidth, and eliminate distortion.',
              meaningPa: 'ਆਊਟਪੁੱਟ ਦਾ ਕੁਝ ਹਿੱਸਾ ਉਲਟੇ ਇਨਪੁਟ ਤੇ ਵਾਪਸ ਭੇਜਣਾ ਤਾਂ ਜੋ ਗੇਨ ਸਥਿਰ ਰਹੇ ਅਤੇ ਆਵਾਜ਼ ਸਾਫ਼ ਰਹੇ।',
            },
            {
              term: 'Virtual Ground',
              punjabi: 'ਵਰਚੁਅਲ ਗਰਾਊਂਡ',
              meaningEn: 'Circuit node held at zero volts by negative feedback without being directly connected to reference ground.',
              meaningPa: 'ਨੈਗੇਟਿਵ ਫੀਡਬੈਕ ਕਾਰਨ 0V ਤੇ ਟਿਕਿਆ ਹੋਇਆ ਨੋਡ, ਬਿਨਾਂ ਸਿੱਧੀ ਅਰਥਿੰਗ ਤਾਰ ਦੇ।',
            },
            {
              term: 'GBWP (Gain-Bandwidth Product)',
              punjabi: 'ਗੇਨ-ਬੈਂਡਵਿਡਥ ਗੁਣਨਫਲ',
              meaningEn: 'Constant product of amplifier closed-loop gain and its upper 3-dB cutoff frequency.',
              meaningPa: 'ਐਂਪਲੀਫਾਇਰ ਦੇ ਗੇਨ ਅਤੇ ਬੈਂਡਵਿਡਥ ਦਾ ਸਥਿਰ ਗੁਣਨਫਲ।',
            },
            {
              term: 'Slew Rate (SR)',
              punjabi: 'ਸਲਿਊ ਰੇਟ',
              meaningEn: 'Maximum rate of change of output voltage per unit time, measured in Volts per microsecond (V/µs).',
              meaningPa: 'ਆਊਟਪੁੱਟ ਵੋਲਟੇਜ ਦੇ ਵਧਣ ਜਾਂ ਘਟਣ ਦੀ ਵੱਧ ਤੋਂ ਵੱਧ ਰਫ਼ਤਾਰ (V/µs)।',
            },
            {
              term: 'CMRR (Common-Mode Rejection Ratio)',
              punjabi: 'ਕਾਮਨ-ਮੋਡ ਰਿਜੈਕਸ਼ਨ ਰੇਸ਼ੋ',
              meaningEn: 'Ability of a differential amplifier to reject unwanted common-mode noise present equally on both inputs.',
              meaningPa: 'ਦੋਵਾਂ ਤਾਰਾਂ ਉੱਤੇ ਆਉਣ ਵਾਲੇ ਬਰਾਬਰ ਸ਼ੋਰ (Noise) ਨੂੰ ਰੱਦ ਕਰਨ ਦੀ ਸਮਰੱਥਾ।',
            },
          ],
          interactiveLabId: 'transistor-switch',
          exercisePromptEn:
            'Circuit Design Problem: Design a non-inverting amplifier using an LM358 op-amp (GBWP = 1.0 MHz) to achieve a voltage gain of 20 (Av = 20) with an input signal from a 50 mV peak audio source. (1) Select standard E24 resistor values for Rf and R1. (2) Calculate the upper -3dB cutoff frequency.',
          exercisePromptPa:
            'ਸਰਕਟ ਡਿਜ਼ਾਈਨ: LM358 ਓਪ-ਐਂਪ ਨਾਲ ਇੱਕ ਨਾਨ-ਇਨਵਰਟਿੰਗ ਐਂਪਲੀਫਾਇਰ ਬਣਾਓ ਜਿਸਦਾ ਗੇਨ 20 ਹੋਵੇ। (1) Rf ਅਤੇ R1 ਦੇ ਸਹੀ ਮੁੱਲ ਚੁਣੋ। (2) ਇਸਦੀ ਕੱਟ-ਆਫ ਫ੍ਰੀਕੁਐਂਸੀ (Bandwidth) ਪਤਾ ਕਰੋ।',
          summaryEn:
            'Operational amplifiers combine immense differential open-loop gain with negative feedback to create deterministic, drift-free analog circuits where external resistor ratios dictate exact circuit performance.',
          summaryPa:
            'ਓਪ-ਐਂਪ ਨੈਗੇਟਿਵ ਫੀਡਬੈਕ ਰਾਹੀਂ ਐਨਾਲਾਗ ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਟੀਕ ਬਣਾ ਦਿੰਦੇ ਹਨ, ਜਿੱਥੇ ਬਾਹਰੀ ਰਜਿਸਟਰਾਂ ਦੇ ਮੁੱਲ ਤੈਅ ਕਰਦੇ ਹਨ ਕਿ ਸਰਕਟ ਕੀ ਕੰਮ ਕਰੇਗਾ।',
          furtherReadingJson: [
            'Op Amps for Everyone by Ron Mancini & Bruce Carter (Texas Instruments)',
            'Design with Operational Amplifiers and Analog Integrated Circuits by Sergio Franco',
            'Analog Filter and Circuit Design Handbook by Arthur Williams',
          ],
          quiz: {
            titleEn: 'Level 4 Assessment: Transistor Amplifiers & Op-Amp Foundations',
            titlePa: 'ਲੈਵਲ 4 ਟੈਸਟ: ਐਂਪਲੀਫਾਇਰ ਅਤੇ ਓਪ-ਐਂਪ ਬੁਨਿਆਦਾਂ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'Inverting Op-Amp',
                promptEn: 'In an inverting op-amp circuit with Rin = 10 kΩ and feedback resistor Rf = 100 kΩ, what is the closed-loop voltage gain?',
                promptPa: 'ਇੱਕ ਇਨਵਰਟਿੰਗ ਓਪ-ਐਂਪ ਸਰਕਟ ਵਿੱਚ ਜੇਕਰ Rin = 10 kΩ ਅਤੇ Rf = 100 kΩ ਹੋਵੇ ਤਾਂ ਵੋਲਟੇਜ ਗੇਨ ਕੀ ਹੋਵੇਗਾ?',
                optionsJson: ['-10', '+10', '+11', '-100'],
                correctAnswer: '-10',
                explanationEn:
                  'Av = -Rf / Rin = -100 kΩ / 10 kΩ = -10 (inverted output phase).',
                explanationPa:
                  'Av = -Rf / Rin = -100 / 10 = -10 (ਸਿਗਨਲ ਉਲਟਾ ਹੋ ਕੇ 10 ਗੁਣਾ ਵਧੇਗਾ)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Non-Inverting Op-Amp',
                promptEn: 'What is the voltage gain of a non-inverting op-amp amplifier with R1 = 5 kΩ and Rf = 45 kΩ?',
                promptPa: 'R1 = 5 kΩ ਅਤੇ Rf = 45 kΩ ਵਾਲੇ ਨਾਨ-ਇਨਵਰਟਿੰਗ ਓਪ-ਐਂਪ ਦਾ ਵੋਲਟੇਜ ਗੇਨ ਕਿੰਨਾ ਹੋਵੇਗਾ?',
                optionsJson: ['+10', '+9', '-9', '+1'],
                correctAnswer: '+10',
                explanationEn:
                  'Av = 1 + (Rf / R1) = 1 + (45 kΩ / 5 kΩ) = 1 + 9 = +10.',
                explanationPa:
                  'Av = 1 + (Rf / R1) = 1 + (45 / 5) = 1 + 9 = +10।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Voltage Buffer',
                promptEn: 'What is the primary function of an op-amp voltage follower (unity-gain buffer with Av = 1)?',
                promptPa: 'ਓਪ-ਐਂਪ ਵੋਲਟੇਜ ਫਾਲੋਅਰ (ਬਫਰ - Buffer, Av = 1) ਦਾ ਮੁੱਖ ਕੰਮ ਕੀ ਹੈ?',
                optionsJson: [
                  'To provide impedance matching by converting high input impedance to near-zero output impedance without altering voltage',
                  'To amplify the input voltage by 100 times',
                  'To invert the signal polarity from positive to negative',
                  'To rectify AC into DC',
                ],
                correctAnswer: 'To provide impedance matching by converting high input impedance to near-zero output impedance without altering voltage',
                explanationEn:
                  'A buffer has infinite input impedance and zero output impedance, preventing loading on sensitive sensors while delivering current to loads.',
                explanationPa:
                  'ਇਹ ਕਮਜ਼ੋਰ ਸੈਂਸਰਾਂ ਉੱਤੇ ਲੋਡ ਨਹੀਂ ਪੈਣ ਦਿੰਦਾ; ਵੋਲਟੇਜ ਓਨੀ ਹੀ ਰੱਖ ਕੇ ਕਰੰਟ ਦੇਣ ਦੀ ਸਮਰੱਥਾ ਵਧਾ ਦਿੰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Golden Rules',
                promptEn: 'According to the first Golden Rule of ideal op-amps under negative feedback, what is the voltage difference between the inverting (-) and non-inverting (+) inputs?',
                promptPa: 'ਨੈਗੇਟਿਵ ਫੀਡਬੈਕ ਵਾਲੇ ਆਦਰਸ਼ ਓਪ-ਐਂਪ ਦੇ ਸੁਨਹਿਰੀ ਨਿਯਮ ਅਨੁਸਾਰ ਦੋਵਾਂ ਇਨਪੁਟ ਪਿੰਨਾਂ ਵਿਚਕਾਰ ਵੋਲਟੇਜ ਫ਼ਰਕ ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?',
                optionsJson: ['Exactly 0 Volts (V+ = V-)', 'Equal to the positive power supply rail', '0.7 Volts', 'Infinity'],
                correctAnswer: 'Exactly 0 Volts (V+ = V-)',
                explanationEn:
                  'Negative feedback drives output to force the differential input voltage Vd = (V+ - V-) to virtually zero.',
                explanationPa:
                  'ਨੈਗੇਟਿਵ ਫੀਡਬੈਕ ਕਾਰਨ ਦੋਵਾਂ ਇਨਪੁਟ ਪਿੰਨਾਂ ਵਿਚਕਾਰ ਵੋਲਟੇਜ ਹਮੇਸ਼ਾ 0 ਵੋਲਟ (ਬਰਾਬਰ) ਰਹਿੰਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Gain-Bandwidth Product',
                promptEn: 'An op-amp has a Gain-Bandwidth Product (GBWP) of 2.0 MHz. If configured for a closed-loop gain of 40, what is its upper -3dB cutoff frequency?',
                promptPa: '2.0 MHz GBWP ਵਾਲੇ ਓਪ-ਐਂਪ ਦਾ ਜੇਕਰ ਗੇਨ 40 ਰੱਖਿਆ ਜਾਵੇ ਤਾਂ ਇਸਦੀ ਕੱਟ-ਆਫ ਫ੍ਰੀਕੁਐਂਸੀ ਕਿੰਨੀ ਹੋਵੇਗੀ?',
                optionsJson: ['50 kHz', '80 MHz', '20 kHz', '500 kHz'],
                correctAnswer: '50 kHz',
                explanationEn:
                  'fc = GBWP / Gain = 2,000,000 Hz / 40 = 50,000 Hz = 50 kHz.',
                explanationPa:
                  'fc = 2,000,000 / 40 = 50,000 Hz = 50 kHz।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Common-Emitter Inversion',
                promptEn: 'What is the phase shift between the input base signal and the output collector signal in a standard BJT Common-Emitter amplifier?',
                promptPa: 'ਸਟੈਂਡਰਡ BJT ਕਾਮਨ-ਐਮੀਟਰ ਐਂਪਲੀਫਾਇਰ ਵਿੱਚ ਇਨਪੁਟ ਅਤੇ ਆਊਟਪੁੱਟ ਸਿਗਨਲ ਵਿਚਕਾਰ ਕਿੰਨੇ ਡਿਗਰੀ ਦਾ ਫੇਜ਼ ਫ਼ਰਕ ਹੁੰਦਾ ਹੈ?',
                optionsJson: ['180 degrees (inversion)', '0 degrees (in-phase)', '90 degrees', '270 degrees'],
                correctAnswer: '180 degrees (inversion)',
                explanationEn:
                  'As base voltage rises, collector current rises, causing a greater drop across collector resistor Rc, pulling output collector voltage down (180° out of phase).',
                explanationPa:
                  'ਕਾਮਨ-ਐਮੀਟਰ ਐਂਪਲੀਫਾਇਰ ਵਿੱਚ ਸਿਗਨਲ 180 ਡਿਗਰੀ ਉਲਟਾ (Inverted) ਹੋ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Input Current',
                promptEn: 'According to the second Golden Rule of ideal op-amps, how much current enters the inverting (-) or non-inverting (+) input pins?',
                promptPa: 'ਦੂਜੇ ਸੁਨਹਿਰੀ ਨਿਯਮ ਅਨੁਸਾਰ ਓਪ-ਐਂਪ ਦੀਆਂ ਇਨਪੁਟ ਪਿੰਨਾਂ ਦੇ ਅੰਦਰ ਕਿੰਨਾ ਕਰੰਟ ਦਾਖਲ ਹੁੰਦਾ ਹੈ?',
                optionsJson: ['0 Amperes (zero current)', '10 mA', '1 Ampere', 'Equal to the output current'],
                correctAnswer: '0 Amperes (zero current)',
                explanationEn:
                  'Ideal op-amps have infinite input impedance (Rin -> infinity), so zero current flows into either input terminal.',
                explanationPa:
                  'ਬਹੁਤ ਜ਼ਿਆਦਾ ਇੰਪੀਡੈਂਸ ਹੋਣ ਕਾਰਨ ਇਨਪੁਟ ਪਿੰਨਾਂ ਦੇ ਅੰਦਰ ਬਿਲਕੁਲ ਜ਼ੀਰੋ ਕਰੰਟ (0 Amperes) ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Slew Rate Distortion',
                promptEn: 'What symptom appears on an oscilloscope when an op-amp amplifier is driven with a high-frequency sine wave that exceeds its Slew Rate?',
                promptPa: 'ਜਦੋਂ ਸਿਗਨਲ ਦੀ ਫ੍ਰੀਕੁਐਂਸੀ ਓਪ-ਐਂਪ ਦੇ ਸਲਿਊ ਰੇਟ (Slew Rate) ਤੋਂ ਵੱਧ ਜਾਵੇ ਤਾਂ ਸਕ੍ਰੀਨ ਉੱਤੇ ਕੀ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ?',
                optionsJson: [
                  'The sine wave distorts into a triangular waveform with diminished peak amplitude',
                  'The signal turns into pure DC',
                  'The frequency doubles',
                  'The signal disappears entirely',
                ],
                correctAnswer: 'The sine wave distorts into a triangular waveform with diminished peak amplitude',
                explanationEn:
                  'When required dv/dt exceeds the op-amp internal charging rate, the output can only ramp linearly at maximum slew rate, producing a triangular wave.',
                explanationPa:
                  'ਸਾਈਨ ਵੇਵ ਤਿਕੋਣੀ (Triangular) ਬਣ ਜਾਂਦੀ ਹੈ ਕਿਉਂਕਿ ਚਿੱਪ ਇੰਨੀ ਤੇਜ਼ੀ ਨਾਲ ਵੋਲਟੇਜ ਨਹੀਂ ਬਦਲ ਸਕਦੀ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Differential Stage',
                promptEn: 'Why do operational amplifiers use a differential pair (long-tailed pair) as their very first input stage?',
                promptPa: 'ਓਪ-ਐਂਪ ਦੇ ਅੰਦਰ ਪਹਿਲੇ ਸਟੇਜ ਉੱਤੇ ਡਿਫਰੈਂਸ਼ੀਅਲ ਪੇਅਰ (Differential Pair) ਕਿਉਂ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
                optionsJson: [
                  'To amplify the difference between two inputs while rejecting common-mode noise and power supply ripple',
                  'To convert digital bits to audio',
                  'To reduce heat dissipation',
                  'To step up the supply voltage',
                ],
                correctAnswer: 'To amplify the difference between two inputs while rejecting common-mode noise and power supply ripple',
                explanationEn:
                  'Differential pairs subtract common interference (such as 50 Hz mains hum picked up on both wires), providing high CMRR.',
                explanationPa:
                  'ਦੋਵਾਂ ਤਾਰਾਂ ਦੇ ਆਪਸੀ ਫ਼ਰਕ ਨੂੰ ਵਧਾਉਣ ਅਤੇ ਬਾਹਰੀ ਸ਼ੋਰ (Noise/Hum) ਨੂੰ ਕੱਟਣ ਲਈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Emitter Follower',
                promptEn: 'What is the typical voltage gain of a BJT Common-Collector (Emitter-Follower) amplifier?',
                promptPa: 'BJT ਕਾਮਨ-ਕੁਲੈਕਟਰ (Emitter Follower) ਐਂਪਲੀਫਾਇਰ ਦਾ ਵੋਲਟੇਜ ਗੇਨ ਲਗਭਗ ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?',
                optionsJson: ['Slightly less than 1.0 (≈ 0.98 to 0.99)', '100', '0.0', '-10'],
                correctAnswer: 'Slightly less than 1.0 (≈ 0.98 to 0.99)',
                explanationEn:
                  'The emitter voltage directly "follows" the base voltage minus one Vbe drop (~0.7V). Its voltage gain is Av = Re / (Re + re\') ≈ 1, acting as a high-current buffer.',
                explanationPa:
                  'ਇਸਦਾ ਗੇਨ ਲਗਭਗ 1 ਹੁੰਦਾ ਹੈ। ਇਹ ਵੋਲਟੇਜ ਨਹੀਂ ਵਧਾਉਂਦਾ, ਸਗੋਂ ਕਰੰਟ ਵਧਾ ਕੇ ਬਫਰ ਦਾ ਕੰਮ ਕਰਦਾ ਹੈ।',
              },
            ],
          },
        },
        {
          slug: 'opamp-circuits-comparators-active-filters',
          orderIndex: 2,
          titleEn: '4.2 Summing, Integrators, Comparators, Schmitt Triggers & Active Filters',
          titlePa: '4.2 ਸਮਿੰਗ ਐਂਪਲੀਫਾਇਰ, ਇੰਟੀਗ੍ਰੇਟਰ, ਸਮਿਟ ਟ੍ਰਿਗਰ ਅਤੇ ਐਕਟਿਵ ਫਿਲਟਰ',
          objectivesJson: [
            'Design multi-channel summing amplifiers for audio mixing and difference amplifiers for balanced signal reception',
            'Model op-amp integrators and differentiators for analog wave generation and calculus computation',
            'Configure open-loop comparators and solve Schmitt trigger positive feedback thresholds (V_UTP, V_LTP) to eliminate noise chatter',
            'Design 3-op-amp instrumentation amplifiers with extreme Common-Mode Rejection (CMRR > 100 dB) for medical ECG and strain gauges',
            'Synthesize 2nd-order active Sallen-Key low-pass and high-pass Butterworth filters',
          ],
          prerequisitesJson: ['4.1 Transistor Amplifiers, Op-Amp Principles & Negative Feedback'],
          childAnalogyEn:
            'Think of a DJ mixer at a Punjabi wedding! The DJ connects three microphone channels: one for the Dholak, one for the keyboard, and one for the singer. The Summing Amplifier cleanly blends all three musical streams into one harmonious output without any instrument interfering with the other! A Schmitt Trigger is like a refrigerator thermostat: it turns cooling ON at 6°C and OFF at 2°C, preventing the motor from clicking crazily on and off every millisecond!',
          childAnalogyPa:
            'ਵਿਆਹ ਦੇ DJ ਮਿਕਸਰ ਦੀ ਕਲਪਨਾ ਕਰੋ! DJ ਤਿੰਨ ਵੱਖ-ਵੱਖ ਮਾਈਕ ਲਗਾਉਂਦਾ ਹੈ: ਢੋਲਕ, ਕੀਬੋਰਡ ਅਤੇ ਗਾਇਕ। ਸਮਿੰਗ ਐਂਪਲੀਫਾਇਰ (Summing Amplifier) ਇਹਨਾਂ ਤਿੰਨਾਂ ਆਵਾਜ਼ਾਂ ਨੂੰ ਬਿਨਾਂ ਆਪਸ ਵਿੱਚ ਉਲਝਾਏ ਇੱਕ ਮਾਸਟਰ ਸਪੀਕਰ ਲਾਈਨ ਵਿੱਚ ਮਿਕਸ ਕਰ ਦਿੰਦਾ ਹੈ! ਸਮਿਟ ਟ੍ਰਿਗਰ (Schmitt Trigger) ਫਰਿੱਜ ਦੇ ਥਰਮੋਸਟੈਟ ਵਾਂਗ ਹੈ: ਇਹ 6°C ਤੇ ਮੋਟਰ ਚਲਾਉਂਦਾ ਹੈ ਅਤੇ 2°C ਤੇ ਬੰਦ ਕਰਦਾ ਹੈ ਤਾਂ ਜੋ ਮੋਟਰ ਹਰ ਸੈਕਿੰਡ ਕਲਿੱਕ-ਕਲਿੱਕ ਕਰਕੇ ਖ਼ਰਾਬ ਨਾ ਹੋਵੇ (Hysteresis)।',
          technicalExplanationEn:
            'Advanced operational amplifier topologies perform complex analog signal mathematical operations:\n\n1. Summing Amplifier (Inverting Mixer):\nV_out = -R_f * (V_1/R_1 + V_2/R_2 + V_3/R_3 + ...)\nBecause the inverting input is held at virtual ground, the current summing node prevents any channel interaction or crosstalk.\n\n2. Difference & Instrumentation Amplifier (In-Amp):\n• 3-Op-Amp Topology (e.g. INA128): Two high-impedance non-inverting buffers feeding a matched difference subtractor.\n• Differential Gain: A_diff = (1 + 2*R_1/R_gain) * (R_3/R_2).\n• Rejects common-mode 50 Hz interference with CMRR typically exceeding 100 to 120 dB.\n\n3. Integrators and Differentiators:\n• Ideal Integrator: Feedback capacitor C, input resistor R: v_out(t) = -(1 / RC) * ∫ v_in(t) dt. Transforms square waves into triangle waves.\n• Ideal Differentiator: Input capacitor C, feedback resistor R: v_out(t) = -RC * (dv_in / dt). Sensitive to high-frequency noise; requires a series damping resistor.\n\n4. Comparators & Schmitt Triggers (Positive Feedback):\nOpen-loop comparators without feedback suffer "chatter" when noisy analog signals slowly cross the reference threshold. Schmitt triggers add positive feedback (hysteresis):\n• Upper Threshold: V_UTP = V_ref + (V_sat_pos - V_ref) * (R_1 / (R_1 + R_2))\n• Lower Threshold: V_LTP = V_ref + (V_sat_neg - V_ref) * (R_1 / (R_1 + R_2))\n• Hysteresis Band: V_H = V_UTP - V_LTP, eliminating false triggers.\n\n5. Sallen-Key Active Butterworth Filters:\n2nd-order active low-pass filter using two resistors R and two capacitors C:\n• Cutoff Frequency: f_c = 1 / (2 * π * R * C)\n• Roll-off: -40 dB/decade (-12 dB/octave) with maximally flat passband response.',
          technicalExplanationPa:
            'ਐਡਵਾਂਸਡ ਓਪ-ਐਂਪ ਸਰਕਟਾਂ ਦੀ ਕਾਰਜਪ੍ਰਣਾਲੀ:\n\n1. ਸਮਿੰਗ ਐਂਪਲੀਫਾਇਰ (Audio Mixer):\nਵੱਖ-ਵੱਖ ਵੋਲਟੇਜਾਂ ਨੂੰ ਆਪਸ ਵਿੱਚ ਜੋੜਦਾ ਹੈ: Vout = -Rf * (V1/R1 + V2/R2 + V3/R3)। ਵਰਚੁਅਲ ਗਰਾਊਂਡ ਕਾਰਨ ਆਵਾਜ਼ਾਂ ਆਪਸ ਵਿੱਚ ਟਕਰਾਉਂਦੀਆਂ ਨਹੀਂ।\n\n2. ਇੰਸਟਰੂਮੈਂਟੇਸ਼ਨ ਐਂਪਲੀਫਾਇਰ (Instrumentation Amp):\nਹਸਪਤਾਲ ਦੀ ECG ਮਸ਼ੀਨ ਵਿੱਚ ਦਿਲ ਦੀ ਨਿੱਕੀ ਧੜਕਣ (1 mV) ਨੂੰ ਫੜਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। ਇਹ ਬਾਹਰੀ ਬਿਜਲੀ ਦੇ 50 Hz ਸ਼ੋਰ ਨੂੰ 1,00,000 ਗੁਣਾ ਰੱਦ ਕਰਦਾ ਹੈ (CMRR > 100 dB)।\n\n3. ਸਮਿਟ ਟ੍ਰਿਗਰ (Schmitt Trigger):\nਪਾਜ਼ਿਟਿਵ ਫੀਡਬੈਕ ਰਾਹੀਂ ਦੋ ਵੱਖ-ਵੱਖ ਵੋਲਟੇਜ ਸੀਮਾਵਾਂ (High ਅਤੇ Low ਥ੍ਰੈਸ਼ਹੋਲਡ) ਬਣਾਉਂਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਸ਼ੋਰ ਵਾਲੇ ਕਮਜ਼ੋਰ ਸਿਗਨਲ ਵੀ ਸਾਫ਼ ਡਿਜੀਟਲ ਪਲਸ (Square Wave) ਬਣ ਜਾਂਦੇ ਹਨ।\n\n4. ਐਕਟਿਵ ਫਿਲਟਰ (Active Filter):\nਸਿਰਫ਼ ਚਾਹੀਦੀ ਫ੍ਰੀਕੁਐਂਸੀ ਲੰਘਾਉਂਦਾ ਹੈ ਅਤੇ ਬਾਕੀ ਸਭ ਕੱਟ ਦਿੰਦਾ ਹੈ (ਜਿਵੇਂ ਬਾਸ ਜਾਂ ਟ੍ਰੈਬਲ ਫਿਲਟਰ)।',
          practicalExampleEn:
            'Medical ECG (Electrocardiogram) Heartbeat Monitor: A patient’s heart produces microvolt bioelectric pulses on skin electrode pads. However, the patient’s body also acts as an antenna picking up massive 230 V 50 Hz mains electromagnetic radiation (common-mode voltage of several Volts). By routing the signals into an AD620 instrumentation amplifier with CMRR = 120 dB, the 50 Hz hum is attenuated by a factor of 1,000,000:1, revealing the pristine heart waveform on the hospital monitor.',
          practicalExamplePa:
            'ਹਸਪਤਾਲ ਵਿੱਚ ਦਿਲ ਦੀ ਧੜਕਣ (ECG) ਚੈੱਕ ਕਰਨਾ: ਮਰੀਜ਼ ਦੇ ਸਰੀਰ ਉੱਤੇ ਲੱਗੇ ਇਲੈਕਟ੍ਰੋਡ ਸਿਰਫ਼ ਕੁਝ ਮਾਈਕ੍ਰੋਵੋਲਟ ਦਾ ਸਿਗਨਲ ਦਿੰਦੇ ਹਨ, ਪਰ ਪੂਰਾ ਕਮਰਾ 230V ਬਿਜਲੀ ਦੇ ਸ਼ੋਰ ਨਾਲ ਭਰਿਆ ਹੁੰਦਾ ਹੈ। ਇੰਸਟਰੂਮੈਂਟੇਸ਼ਨ ਐਂਪਲੀਫਾਇਰ ਉਸ 230V ਦੇ ਸ਼ੋਰ ਨੂੰ ਲੱਖ ਗੁਣਾ ਦਬਾ ਕੇ ਸਿਰਫ਼ ਦਿਲ ਦੀ ਅਸਲ ਧੜਕਣ ਨੂੰ ਸਕ੍ਰੀਨ ਉੱਤੇ ਸਾਫ਼ ਦਿਖਾਉਂਦਾ ਹੈ।',
          codeDemo: `// TypeScript: Active Sallen-Key Filter & Schmitt Trigger Thresholds
export function calcSallenKeyLowPass(rOhms: number, cFarads: number) {
  const cutoffFreqHz = 1 / (2 * Math.PI * rOhms * cFarads);
  return {
    cutoffFreqHz,
    attenuationAt2xCutoffDb: -12.04, // 2nd-order -40dB/decade
  };
}

export function calcSchmittTriggerThresholds(r1: number, rFeedback: number, vSatPos: number, vSatNeg: number, vRef = 0) {
  // Non-inverting Schmitt Trigger
  const vUpper = ((vRef * (r1 + rFeedback)) - (vSatNeg * r1)) / rFeedback;
  const vLower = ((vRef * (r1 + rFeedback)) - (vSatPos * r1)) / rFeedback;
  const vHysteresis = vUpper - vLower;

  return {
    upperThresholdVoltage: vUpper,
    lowerThresholdVoltage: vLower,
    hysteresisBandVoltage: vHysteresis,
  };
}

// Verification: 1kHz low-pass filter (R=10k, C=15.9nF):
const filter = calcSallenKeyLowPass(10000, 15.915e-9);
console.log('Cutoff Frequency:', filter.cutoffFreqHz.toFixed(1), 'Hz'); // 1000.0 Hz`,
          misconceptionsJson: [
            {
              myth: 'An ordinary open-loop op-amp works well as a high-speed comparator.',
              truthEn:
                'Standard op-amps have internal compensation capacitors designed for linear stability, causing them to recover very slowly from saturation (saturation recovery delay of tens of microseconds). Dedicated comparator ICs (such as LM393 or LM311) lack compensation and switch in nanoseconds with open-collector outputs.',
              truthPa:
                'ਆਮ ਓਪ-ਐਂਪ ਨੂੰ ਕੰਪੈਰੇਟਰ ਵਜੋਂ ਨਹੀਂ ਵਰਤਣਾ ਚਾਹੀਦਾ ਕਿਉਂਕਿ ਇਹ ਸੈਚੁਰੇਸ਼ਨ ਤੋਂ ਬਾਹਰ ਆਉਣ ਲਈ ਬਹੁਤ ਸਮਾਂ ਲੈਂਦਾ ਹੈ। ਇਸ ਲਈ LM393 ਵਰਗੀ ਸਮਰਪਿਤ ਕੰਪੈਰੇਟਰ ਚਿੱਪ ਵਰਤਣੀ ਚਾਹੀਦੀ ਹੈ।',
            },
            {
              myth: 'An ideal op-amp differentiator circuit can be built in the real world with just one capacitor and one resistor.',
              truthEn:
                'A pure differentiator’s gain increases indefinitely with frequency (Av = 2*pi*f*R*C), causing it to amplify high-frequency noise and break into violent uncontrolled oscillation. Practical differentiators always add a series input resistor and small feedback capacitor.',
              truthPa:
                'ਸਿਰਫ਼ ਇੱਕ ਕੈਪਸੀਟਰ ਅਤੇ ਰਜਿਸਟਰ ਨਾਲ ਡਿਫਰੈਂਸ਼ੀਏਟਰ ਨਹੀਂ ਬਣਦਾ, ਕਿਉਂਕਿ ਇਹ ਹਾਈ ਫ੍ਰੀਕੁਐਂਸੀ ਸ਼ੋਰ ਨੂੰ ਬਹੁਤ ਵਧਾ ਕੇ ਸਰਕਟ ਵਿੱਚ ਕੰਬਣੀ (Oscillation) ਪੈਦਾ ਕਰ ਦਿੰਦਾ ਹੈ।',
            },
            {
              myth: 'Active filters can eliminate all noise without introducing any phase shifts or signal delay.',
              truthEn:
                'All frequency filtering obeys the Kramers-Kronig and Bode gain-phase relationships: sharp attenuation in amplitude inherently introduces significant phase shifts and group delays near the cutoff frequency.',
              truthPa:
                'ਕੋਈ ਵੀ ਫਿਲਟਰ ਬਿਨਾਂ ਫੇਜ਼ ਸ਼ਿਫਟ ਜਾਂ ਸਿਗਨਲ ਲੇਟ ਕੀਤੇ ਸ਼ੋਰ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਖ਼ਤਮ ਨਹੀਂ ਕਰ ਸਕਦਾ। ਬਟਰਵਰਥ ਫਿਲਟਰ ਕੱਟ-ਆਫ ਨੇੜੇ ਸਿਗਨਲ ਨੂੰ ਥੋੜ੍ਹਾ ਲੇਟ ਕਰਦਾ ਹੈ।',
            },
          ],
          terminologyJson: [
            {
              term: 'Schmitt Trigger',
              punjabi: 'ਸਮਿਟ ਟ੍ਰਿਗਰ',
              meaningEn: 'Comparator circuit with positive feedback introducing hysteresis to prevent erratic switching on noisy inputs.',
              meaningPa: 'ਪਾਜ਼ਿਟਿਵ ਫੀਡਬੈਕ ਵਾਲਾ ਕੰਪੈਰੇਟਰ ਜੋ ਸ਼ੋਰ ਕਾਰਨ ਹੋਣ ਵਾਲੀ ਖੜਖੜਾਹਟ ਨੂੰ ਰੋਕਦਾ ਹੈ।',
            },
            {
              term: 'Hysteresis',
              punjabi: 'ਹਿਸਟਰੇਸਿਸ',
              meaningEn: 'Difference between the rising (turn-on) and falling (turn-off) threshold voltages in a switching circuit.',
              meaningPa: 'ਸਰਕਟ ਦੇ ਆਨ ਹੋਣ ਅਤੇ ਆਫ ਹੋਣ ਵਾਲੀ ਵੋਲਟੇਜ ਵਿਚਕਾਰ ਰੱਖਿਆ ਗਿਆ ਸੁਰੱਖਿਆ ਫ਼ਰਕ।',
            },
            {
              term: 'Instrumentation Amplifier',
              punjabi: 'ਇੰਸਟਰੂਮੈਂਟੇਸ਼ਨ ਐਂਪਲੀਫਾਇਰ',
              meaningEn: 'Precision differential amplifier with buffered inputs and laser-trimmed internal resistors for extremely high CMRR.',
              meaningPa: 'ਸੈਂਸਰਾਂ ਅਤੇ ਡਾਕਟਰੀ ਯੰਤਰਾਂ ਲਈ ਬੇਹੱਦ ਸਟੀਕ ਐਂਪਲੀਫਾਇਰ ਜੋ ਸ਼ੋਰ ਨੂੰ ਰੱਦ ਕਰਦਾ ਹੈ।',
            },
            {
              term: 'Active Filter',
              punjabi: 'ਐਕਟਿਵ ਫਿਲਟਰ',
              meaningEn: 'Frequency-selective network combining active op-amps with resistors and capacitors without requiring bulky inductors.',
              meaningPa: 'ਓਪ-ਐਂਪ ਅਤੇ ਕੈਪਸੀਟਰਾਂ ਦਾ ਬਣਿਆ ਫਿਲਟਰ ਜਿਸ ਵਿੱਚ ਭਾਰੇ ਇੰਡਕਟਰਾਂ ਦੀ ਲੋੜ ਨਹੀਂ ਪੈਂਦੀ।',
            },
            {
              term: 'Wien Bridge Oscillator',
              punjabi: 'ਵੀਨ ਬ੍ਰਿਜ ਆਸੀਲੇਟਰ',
              meaningEn: 'Two-stage RC network op-amp oscillator generating low-distortion audio sinusoidal waves.',
              meaningPa: 'ਆਡੀਓ ਫ੍ਰੀਕੁਐਂਸੀ ਉੱਤੇ ਬਿਲਕੁਲ ਸ਼ੁੱਧ ਸਾਈਨ ਵੇਵ ਪੈਦਾ ਕਰਨ ਵਾਲਾ ਸਰਕਟ।',
            },
            {
              term: 'Summing Node',
              punjabi: 'ਸਮਿੰਗ ਨੋਡ',
              meaningEn: 'Virtual ground junction in an inverting op-amp where multiple input currents sum algebraically to zero.',
              meaningPa: 'ਇਨਵਰਟਿੰਗ ਓਪ-ਐਂਪ ਦਾ ਉਹ ਬਿੰਦੂ ਜਿੱਥੇ ਸਾਰੇ ਇਨਪੁਟ ਕਰੰਟ ਆਪਸ ਵਿੱਚ ਜੁੜਦੇ ਹਨ।',
            },
          ],
          interactiveLabId: 'transistor-switch',
          exercisePromptEn:
            'Mixer Calculation: (1) A 3-channel audio mixer summing amplifier has feedback resistor Rf = 20 kΩ. Input resistors are R1 = 10 kΩ, R2 = 20 kΩ, and R3 = 40 kΩ. If V1 = +0.5 V, V2 = -1.0 V, and V3 = +0.8 V, calculate the exact output voltage Vout. (2) Explain why virtual ground prevents channel 1 from feeding back into channel 2.',
          exercisePromptPa:
            'ਮਿਕਸਰ ਗਣਨਾ: (1) 3-ਚੈਨਲ ਆਡੀਓ ਮਿਕਸਰ ਵਿੱਚ Rf = 20 kΩ ਹੈ। ਇਨਪੁਟ ਰਜਿਸਟਰ 10k, 20k, 40k ਹਨ ਅਤੇ ਵੋਲਟੇਜ +0.5V, -1.0V, +0.8V ਹਨ। ਆਊਟਪੁੱਟ ਵੋਲਟੇਜ ਕੱਢੋ। (2) ਸਮਝਾਓ ਕਿ ਵਰਚੁਅਲ ਗਰਾਊਂਡ ਚੈਨਲਾਂ ਨੂੰ ਆਪਸ ਵਿੱਚ ਟਕਰਾਉਣ ਤੋਂ ਕਿਵੇਂ ਰੋਕਦਾ ਹੈ।',
          summaryEn:
            'Operational amplifier sub-circuits provide a complete toolkit for analog computation: summing signals linearly, computing real-time calculus integrals, cleaning noisy signals with Schmitt hysteresis, and eliminating common-mode interference with instrumentation precision.',
          summaryPa:
            'ਓਪ-ਐਂਪ ਸਰਕਟ ਐਨਾਲਾਗ ਗਣਿਤ ਦਾ ਪੂਰਾ ਬਕਸਾ ਹਨ: ਸਿਗਨਲ ਜੋੜਨਾ, ਕੈਲਕੂਲਸ ਇੰਟੀਗ੍ਰਲ ਕੱਢਣਾ, ਸਮਿਟ ਟ੍ਰਿਗਰ ਨਾਲ ਸ਼ੋਰ ਸਾਫ਼ ਕਰਨਾ ਅਤੇ ਬਿਜਲੀ ਦੇ ਸ਼ੋਰ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਦਬਾਉਣਾ।',
          furtherReadingJson: [
            'Operational Amplifiers and Linear Integrated Circuits by Robert F. Coughlin & Frederick F. Driscoll',
            'Analog Devices Instrumentation Amplifier Applications Guide',
            'Active Filter Cookbook by Don Lancaster',
          ],
          quiz: {
            titleEn: 'Level 4 Assessment: Advanced Op-Amps, Filters & Comparators',
            titlePa: 'ਲੈਵਲ 4 ਟੈਸਟ: ਐਡਵਾਂਸਡ ਓਪ-ਐਂਪ, ਫਿਲਟਰ ਅਤੇ ਕੰਪੈਰੇਟਰ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'Summing Amplifier',
                promptEn: 'In a 2-input inverting summing amplifier with Rf = 10 kΩ, R1 = 10 kΩ, and R2 = 10 kΩ, what is Vout if V1 = 1.0 V and V2 = 2.0 V?',
                promptPa: 'Rf = 10 kΩ, R1 = 10 kΩ, R2 = 10 kΩ ਵਾਲੇ ਸਮਿੰਗ ਐਂਪਲੀਫਾਇਰ ਵਿੱਚ ਜੇਕਰ V1 = 1V ਅਤੇ V2 = 2V ਹੋਵੇ ਤਾਂ ਆਊਟਪੁੱਟ ਕੀ ਹੋਵੇਗੀ?',
                optionsJson: ['-3.0 Volts', '+3.0 Volts', '-1.5 Volts', '+1.5 Volts'],
                correctAnswer: '-3.0 Volts',
                explanationEn:
                  'Vout = -Rf * (V1/R1 + V2/R2) = -10k * (1/10k + 2/10k) = -(1 + 2) = -3.0 V.',
                explanationPa:
                  'Vout = -(V1 + V2) = -(1 + 2) = -3.0 ਵੋਲਟ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Op-Amp Integrator',
                promptEn: 'What output waveform is produced by an ideal op-amp integrator when driven by a continuous constant positive DC voltage at its input?',
                promptPa: 'ਜਦੋਂ ਕਿਸੇ ਓਪ-ਐਂਪ ਇੰਟੀਗ੍ਰੇਟਰ ਦੇ ਇਨਪੁਟ ਉੱਤੇ ਸਥਿਰ ਪਾਜ਼ਿਟਿਵ DC ਵੋਲਟੇਜ ਦਿੱਤੀ ਜਾਵੇ ਤਾਂ ਆਊਟਪੁੱਟ ਤੇ ਕੀ ਬਣਦਾ ਹੈ?',
                optionsJson: [
                  'A steadily decreasing negative-going linear ramp voltage',
                  'A high-frequency sine wave',
                  'A constant positive DC voltage',
                  'A square wave pulse train',
                ],
                correctAnswer: 'A steadily decreasing negative-going linear ramp voltage',
                explanationEn:
                  'v_out(t) = -(1/RC) * ∫ Vin dt. For constant Vin, the integral is linear in time: v_out(t) = -(Vin / RC) * t, producing a negative linear ramp until negative saturation.',
                explanationPa:
                  'ਕਿਉਂਕਿ ਕੈਪਸੀਟਰ ਲਗਾਤਾਰ ਚਾਰਜ ਹੁੰਦਾ ਹੈ, ਆਊਟਪੁੱਟ ਇੱਕ ਸਿੱਧੀ ਲਾਈਨ ਵਾਂਗ ਹੌਲੀ-ਹੌਲੀ ਹੇਠਾਂ ਵੱਲ ਡਿੱਗਦੀ ਹੈ (Negative Linear Ramp)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Schmitt Trigger Hysteresis',
                promptEn: 'Why is positive feedback applied around an op-amp comparator in a Schmitt Trigger circuit?',
                promptPa: 'ਸਮਿਟ ਟ੍ਰਿਗਰ ਵਿੱਚ ਕੰਪੈਰੇਟਰ ਦੇ ਦੁਆਲੇ ਪਾਜ਼ਿਟਿਵ ਫੀਡਬੈਕ ਕਿਉਂ ਲਗਾਈ ਜਾਂਦੀ ਹੈ?',
                optionsJson: [
                  'To create hysteresis voltage thresholds, preventing noise from causing rapid false chatter switching',
                  'To reduce the power consumption of the op-amp',
                  'To increase closed-loop analog bandwidth',
                  'To invert the output phase angle',
                ],
                correctAnswer: 'To create hysteresis voltage thresholds, preventing noise from causing rapid false chatter switching',
                explanationEn:
                  'Hysteresis creates two distinct threshold voltages (upper and lower), ensuring clean digital transitions even with noisy, slowly varying analog inputs.',
                explanationPa:
                  'ਹਿਸਟਰੇਸਿਸ ਪੈਦਾ ਕਰਨ ਲਈ, ਤਾਂ ਜੋ ਸੈਂਸਰ ਦੇ ਸ਼ੋਰ ਕਾਰਨ ਆਊਟਪੁੱਟ ਵਾਰ-ਵਾਰ ਕਲਿੱਕ-ਕਲਿੱਕ ਕਰਕੇ ਖ਼ਰਾਬ ਨਾ ਹੋਵੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Instrumentation Amp',
                promptEn: 'How many operational amplifiers are used in the classic industry-standard instrumentation amplifier architecture?',
                promptPa: 'ਕਲਾਸਿਕ ਇੰਡਸਟਰੀਅਲ ਇੰਸਟਰੂਮੈਂਟੇਸ਼ਨ ਐਂਪਲੀਫਾਇਰ ਦੇ ਅੰਦਰ ਕਿੰਨੇ ਓਪ-ਐਂਪ ਲੱਗੇ ਹੁੰਦੇ ਹਨ?',
                optionsJson: ['Three op-amps', 'One op-amp', 'Two op-amps', 'Four op-amps'],
                correctAnswer: 'Three op-amps',
                explanationEn:
                  'The 3-op-amp topology consists of two non-inverting input buffer stages with a shared gain-setting resistor, driving a unity-gain difference amplifier.',
                explanationPa:
                  'ਇਸ ਵਿੱਚ 3 ਓਪ-ਐਂਪ ਹੁੰਦੇ ਹਨ: ਦੋ ਇਨਪੁਟ ਬਫਰ ਵਜੋਂ ਅਤੇ ਤੀਜਾ ਵੋਲਟੇਜ ਘਟਾਉਣ ਵਾਲੇ ਡਿਫਰੈਂਸ ਸਟੇਜ ਵਜੋਂ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'CMRR Specification',
                promptEn: 'An instrumentation amplifier has a CMRR of 100 dB. By what numerical ratio does it attenuate common-mode noise relative to differential signal?',
                promptPa: '100 dB CMRR ਵਾਲਾ ਐਂਪਲੀਫਾਇਰ ਬਾਹਰੀ ਕਾਮਨ ਸ਼ੋਰ ਨੂੰ ਸਿਗਨਲ ਦੇ ਮੁਕਾਬਲੇ ਕਿੰਨੇ ਗੁਣਾ ਦਬਾ ਦਿੰਦਾ ਹੈ?',
                optionsJson: ['100,000 : 1', '100 : 1', '1,000 : 1', '10,000 : 1'],
                correctAnswer: '100,000 : 1',
                explanationEn:
                  'CMRR(dB) = 20 * log10(Ratio). 100 dB / 20 = 5, so Ratio = 10^5 = 100,000 to 1.',
                explanationPa:
                  '100 dB ਦਾ ਮਤਲਬ ਹੈ 10^5 = 1,00,000 ਗੁਣਾ ਦਬਾਅ ਦੇਣਾ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Active Low-Pass Filter',
                promptEn: 'What is the cutoff frequency of a first-order active low-pass filter with R = 15.9 kΩ and C = 10 nF?',
                promptPa: 'R = 15.9 kΩ ਅਤੇ C = 10 nF ਵਾਲੇ ਫਿਲਟਰ ਦੀ ਕੱਟ-ਆਫ ਫ੍ਰੀਕੁਐਂਸੀ ਕਿੰਨੀ ਹੋਵੇਗੀ?',
                optionsJson: ['1.0 kHz', '10 kHz', '100 Hz', '15.9 kHz'],
                correctAnswer: '1.0 kHz',
                explanationEn:
                  'fc = 1 / (2 * π * R * C) = 1 / (2 * 3.14159 * 15,900 * 10^-8) ≈ 1 / 0.000999 ≈ 1000 Hz = 1.0 kHz.',
                explanationPa:
                  'fc = 1 / (2 * π * R * C) = 1000 Hz = 1.0 kHz।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Active Filter Roll-Off',
                promptEn: 'What is the attenuation roll-off rate of a second-order (2-pole) Sallen-Key active filter in its stopband?',
                promptPa: 'ਸੈਕੰਡ-ਆਰਡਰ (2-ਪੋਲ) ਸੈਲਨ-ਕੀ ਐਕਟਿਵ ਫਿਲਟਰ ਦੇ ਸਟਾਪ-ਬੈਂਡ ਵਿੱਚ ਸਿਗਨਲ ਕਿੰਨੀ ਤੇਜ਼ੀ ਨਾਲ ਡਿੱਗਦਾ ਹੈ?',
                optionsJson: [
                  '-40 dB per decade (-12 dB per octave)',
                  '-20 dB per decade (-6 dB per octave)',
                  '-60 dB per decade (-18 dB per octave)',
                  '-6 dB per decade',
                ],
                correctAnswer: '-40 dB per decade (-12 dB per octave)',
                explanationEn:
                  'Each reactive pole introduces -20 dB/decade roll-off. A 2nd-order filter has two poles, producing -40 dB/decade (-12 dB/octave).',
                explanationPa:
                  '2-ਪੋਲ ਫਿਲਟਰ ਹੋਣ ਕਰਕੇ ਇਹ -40 dB ਪ੍ਰਤੀ ਦਹਾਕਾ (-12 dB ਪ੍ਰਤੀ ਆਕਟੇਵ) ਦੀ ਤੇਜ਼ੀ ਨਾਲ ਸ਼ੋਰ ਨੂੰ ਕੱਟਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Op-Amp Differentiator',
                promptEn: 'When a triangle wave is connected to the input of an op-amp differentiator, what waveform appears at the output?',
                promptPa: 'ਜਦੋਂ ਓਪ-ਐਂਪ ਡਿਫਰੈਂਸ਼ੀਏਟਰ ਦੇ ਇਨਪੁਟ ਉੱਤੇ ਤਿਕੋਣੀ (Triangle) ਵੇਵ ਦਿੱਤੀ ਜਾਵੇ ਤਾਂ ਆਊਟਪੁੱਟ ਤੇ ਕੀ ਬਣਦਾ ਹੈ?',
                optionsJson: [
                  'A square wave',
                  'A sine wave',
                  'A parabolic wave',
                  'Constant zero Volts',
                ],
                correctAnswer: 'A square wave',
                explanationEn:
                  'The derivative (slope) of a linear rising ramp is a constant positive value; the slope of a falling ramp is a constant negative value, producing alternating square pulses.',
                explanationPa:
                  'ਤਿਕੋਣੀ ਵੇਵ ਦੀ ਢਲਾਨ ਸਥਿਰ ਹੁੰਦੀ ਹੈ, ਇਸ ਲਈ ਡੈਰੀਵੇਟਿਵ ਕੱਢਣ ਤੇ ਚੌਰਸ ਵੇਵ (Square Wave) ਬਣਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Difference Amplifier',
                promptEn: 'In a 4-resistor difference amplifier where all four resistors are identical (R1 = R2 = R3 = R4 = 10 kΩ), what is the output voltage?',
                promptPa: 'ਚਾਰ ਬਰਾਬਰ 10 kΩ ਰਜਿਸਟਰਾਂ ਵਾਲੇ ਡਿਫਰੈਂਸ ਐਂਪਲੀਫਾਇਰ ਦੀ ਆਊਟਪੁੱਟ ਵੋਲਟੇਜ ਕੀ ਹੁੰਦੀ ਹੈ?',
                optionsJson: [
                  'Vout = V2 - V1 (pure difference with unity gain)',
                  'Vout = 2 * (V2 - V1)',
                  'Vout = -(V1 + V2)',
                  'Vout = 0 Volts',
                ],
                correctAnswer: 'Vout = V2 - V1 (pure difference with unity gain)',
                explanationEn:
                  'With perfectly matched resistors, the common-mode gain is zero and differential gain is exactly R/R = 1, so Vout = V2 - V1.',
                explanationPa:
                  'ਚਾਰੇ ਰਜਿਸਟਰ ਬਰਾਬਰ ਹੋਣ ਕਰਕੇ Vout = V2 - V1 ਬਣਦੀ ਹੈ (ਦੋਵਾਂ ਵੋਲਟੇਜਾਂ ਦਾ ਸਿੱਧਾ ਅੰਤਰ)।',
              },
              {
                questionType: 'mcq',
                topicTag: '555 Timer Astable',
                promptEn: 'In an industry-standard 555 timer IC configured in astable multivibrator mode, what components set the output oscillation frequency?',
                promptPa: '555 ਟਾਈਮਰ IC ਵਿੱਚ ਅਸਟੇਬਲ ਮੋਡ ਵਿੱਚ ਆਸੀਲੇਸ਼ਨ ਫ੍ਰੀਕੁਐਂਸੀ ਕਿਨ੍ਹਾਂ ਪੁਰਜ਼ਿਆਂ ਨਾਲ ਤੈਅ ਹੁੰਦੀ ਹੈ?',
                optionsJson: [
                  'Two timing resistors (RA, RB) and one timing capacitor (C)',
                  'An internal quartz crystal',
                  'The power supply voltage level',
                  'A transformer coil',
                ],
                correctAnswer: 'Two timing resistors (RA, RB) and one timing capacitor (C)',
                explanationEn:
                  'Frequency f = 1.44 / [(RA + 2*RB) * C], set entirely by external resistors RA, RB and timing capacitor C.',
                explanationPa:
                  'ਬਾਹਰੀ ਦੋ ਰਜਿਸਟਰ (RA, RB) ਅਤੇ ਇੱਕ ਕੈਪਸੀਟਰ (C) ਤੈਅ ਕਰਦੇ ਹਨ ਕਿ 555 ਟਾਈਮਰ ਕਿੰਨੀ ਫ੍ਰੀਕੁਐਂਸੀ ਤੇ ਚੱਲੇਗਾ (f = 1.44 / [(RA + 2RB) * C])।',
              },
            ],
          },
        },
      ],
    },
  ],
};
