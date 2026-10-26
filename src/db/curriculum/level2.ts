import { SeedCourse } from './types.ts';

export const LEVEL_2_COURSE: SeedCourse = {
  slug: 'level-2-passive-components',
  levelNumber: 2,
  titleEn: 'Level 2: Passive Components',
  titlePa: 'ਲੈਵਲ 2: ਪੈਸਿਵ ਕੰਪੋਨੈਂਟ (Passive Components)',
  descriptionEn:
    'Comprehensive study of resistors, potentiometers, capacitors (ceramic, electrolytic, film, tantalum), inductors, RLC resonance, transformers, relays, and sensors.',
  descriptionPa:
    'ਰਜਿਸਟਰ, ਕਲਰ ਕੋਡ, ਪੋਟੈਂਸ਼ੀਓਮੀਟਰ, ਥਰਮਿਸਟਰ, ਕੈਪਸੀਟਰ (ਇਲੈਕਟ੍ਰੋਲਾਈਟਿਕ, ਸਿਰੈਮਿਕ, ਟੈਂਟਲਮ), ਇੰਡਕਟਰ, RLC ਰੈਜ਼ੋਨੈਂਸ, ਟ੍ਰਾਂਸਫਾਰਮਰ ਅਤੇ ਰਿਲੇਅ।',
  category: 'core-electronics',
  estimatedHours: 15,
  modules: [
    {
      orderIndex: 1,
      titleEn: 'Resistive Devices, Colour Codes & Temperature Sensors',
      titlePa: 'ਰਜਿਸਟਰ, ਕਲਰ ਕੋਡ ਅਤੇ ਤਾਪਮਾਨ ਸੈਂਸਰ',
      summaryEn:
        'Fixed resistors, 4-band/5-band colour coding, power ratings, potentiometers, rheostats, thermistors (NTC/PTC), and LDRs.',
      summaryPa:
        'ਫਿਕਸਡ ਰਜਿਸਟਰ, 4 ਅਤੇ 5-ਬੈਂਡ ਕਲਰ ਕੋਡਿੰਗ, ਪਾਵਰ ਰੇਟਿੰਗ, ਪੋਟੈਂਸ਼ੀਓਮੀਟਰ, NTC/PTC ਥਰਮਿਸਟਰ ਅਤੇ ਲਾਈਟ ਸੈਂਸਰ (LDR)।',
      lessons: [
        {
          slug: 'resistors-potentiometers-colour-codes-thermistors',
          orderIndex: 1,
          titleEn: '2.1 Resistors, Colour Coding, Potentiometers & Thermistors',
          titlePa: '2.1 ਰਜਿਸਟਰ, ਕਲਰ ਕੋਡਿੰਗ, ਪੋਟੈਂਸ਼ੀਓਮੀਟਰ ਅਤੇ ਥਰਮਿਸਟਰ',
          objectivesJson: [
            'Decode 4-band, 5-band, and SMD resistor codes with exact tolerance and temperature coefficients',
            'Select resistor package sizes and ratings using power dissipation derating curves',
            'Differentiate linear vs logarithmic (audio) potentiometers and rheostat configurations',
            'Analyze NTC and PTC thermistors for temperature sensing and inrush current suppression',
          ],
          prerequisitesJson: ['Level 1: Electrical Fundamentals (Ohm’s law and power dissipation)'],
          childAnalogyEn:
            'Think of a village water tap (ਨਲਕੇ ਦਾ ਵਾਲਵ)! A fixed resistor is like a pipe of fixed narrow width that always lets a set amount of water pass. A potentiometer is like a twistable brass tap handle—turn it one way, and water gushes out; turn it the other, and it slows to a trickle! A thermistor is like asphalt on a hot Punjabi summer day: as it gets hotter, its properties change dramatically!',
          childAnalogyPa:
            'ਪਿੰਡ ਵਿੱਚ ਲੱਗੇ ਪਾਣੀ ਵਾਲੇ ਨਲਕੇ ਦੇ ਵਾਲਵ ਦੀ ਕਲਪਨਾ ਕਰੋ! ਫਿਕਸਡ ਰਜਿਸਟਰ ਇੱਕ ਪੱਕੀ ਬਾਰੀਕ ਪਾਈਪ ਵਾਂਗ ਹੈ ਜਿਸ ਵਿੱਚੋਂ ਹਮੇਸ਼ਾ ਇੱਕੋ ਜਿੰਨਾ ਪਾਣੀ ਲੰਘਦਾ ਹੈ। ਪੋਟੈਂਸ਼ੀਓਮੀਟਰ (Potentiometer) ਪਿੱਤਲ ਦੇ ਘੁੰਮਣ ਵਾਲੇ ਵਾਲਵ ਵਾਂਗ ਹੈ—ਜਿੰਨਾ ਘੁਮਾਓਗੇ ਓਨਾ ਪਾਣੀ ਵੱਧ ਜਾਂ ਘੱਟ ਹੋਵੇਗਾ (ਜਿਵੇਂ ਰੇਡੀਓ ਦਾ ਵਾਲਿਊਮ ਬਟਨ)! ਥਰਮਿਸਟਰ ਗਰਮੀਆਂ ਦੀ ਤਾਰਕੋਲ ਵਾਲੀ ਸੜਕ ਵਾਂਗ ਹੈ ਜੋ ਧੁੱਪ ਵਿੱਚ ਗਰਮ ਹੁੰਦੇ ਹੀ ਨਰਮ ਪੈ ਜਾਂਦੀ ਹੈ ਅਤੇ ਆਪਣੀ ਰੁਕਾਵਟ ਬਦਲ ਲੈਂਦੀ ਹੈ।',
          technicalExplanationEn:
            'Resistors establish bias currents, divide voltages, and set operational amplifier gains:\n\n1. Resistor Color Code System (BBROY of Great Britain has a Very Good Wife):\n• 0: Black, 1: Brown, 2: Red, 3: Orange, 4: Yellow, 5: Green, 6: Blue, 7: Violet, 8: Grey, 9: White\n• Multipliers: Gold = 10^-1 (0.1), Silver = 10^-2 (0.01)\n• Tolerance: Gold = ±5%, Silver = ±10%, Brown = ±1%, Red = ±2%\n• 4-Band: [Digit 1][Digit 2] * 10^[Multiplier] ± [Tolerance]\n• 5-Band (Precision 1%): [Digit 1][Digit 2][Digit 3] * 10^[Multiplier] ± [Tolerance]\n\n2. Power Rating & Thermal Derating:\nStandard axial sizes: 1/8W (0.125W), 1/4W (0.25W), 1/2W (0.5W), 1W, 2W, 5W wirewound.\nStandard SMD sizes: 0402 (1/16W), 0603 (1/10W), 0805 (1/8W), 1206 (1/4W).\nAbove 70°C ambient, allowable power derates linearly toward zero at 155°C (T_max).\n\n3. Potentiometers vs Rheostats:\n• Potentiometer: 3-terminal voltage divider (Track ends connected across supply, wiper extracts variable fraction).\n• Rheostat: 2-terminal variable current limiter (one end and wiper connected in series with load).\n• Tapers: Linear (type B, uniform resistance vs angle) vs Logarithmic/Audio (type A, matches non-linear human ear response).\n\n4. Thermistors & Photoresistors:\n• NTC (Negative Temperature Coefficient): Resistance decreases exponentially as temperature rises: R(T) = R_0 * exp[β * (1/T - 1/T_0)]. Ideal for thermometers and inrush limiters.\n• PTC (Positive Temperature Coefficient): Resistance jumps abruptly at Curie point. Used as self-resetting fuses (Polyswitches).\n• LDR (Light-Dependent Resistor, CdS): Resistance drops from ~1 MΩ in darkness to ~1 kΩ under bright sunlight.',
          technicalExplanationPa:
            'ਰਜਿਸਟਰ ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਦੇ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ ਪੁਰਜ਼ੇ ਹਨ:\n\n1. ਰਜਿਸਟਰ ਕਲਰ ਕੋਡ (BBROY Great Britain Very Good Wife):\n• 0: ਕਾਲਾ (Black), 1: ਭੂਰਾ (Brown), 2: ਲਾਲ (Red), 3: ਸੰਤਰੀ (Orange), 4: ਪੀਲਾ (Yellow), 5: ਹਰਾ (Green), 6: ਨੀਲਾ (Blue), 7: ਬੈਂਗਣੀ (Violet), 8: ਸਲੇਟੀ (Grey), 9: ਚਿੱਟਾ (White)\n• ਟੋਲਰੈਂਸ: ਸੁਨਹਿਰੀ (Gold) = ±5%, ਚਾਂਦੀ (Silver) = ±10%, ਭੂਰਾ = ±1%।\nਉਦਾਹਰਣ: ਪੀਲਾ-ਬੈਂਗਣੀ-ਲਾਲ-ਸੁਨਹਿਰੀ = 4, 7, * 10^2, ±5% = 4700 Ω = 4.7 kΩ (±5%)।\n\n2. ਪੋਟੈਂਸ਼ੀਓਮੀਟਰ (Potentiometer):\nਇਸਦੇ 3 ਪਿੰਨ ਹੁੰਦੇ ਹਨ। ਵਿਚਕਾਰਲੀ ਪਿੰਨ (Wiper) ਘੁੰਮਾ ਕੇ ਵੋਲਟੇਜ ਨੂੰ ਜ਼ੀਰੋ ਤੋਂ ਪੂਰੀ ਵੋਲਟੇਜ ਤੱਕ ਕੰਟਰੋਲ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ (ਜਿਵੇਂ ਪੱਖੇ ਦਾ ਰੈਗੂਲੇਟਰ ਜਾਂ ਸਪੀਕਰ ਦਾ ਵਾਲਿਊਮ)।\n\n3. ਥਰਮਿਸਟਰ (Thermistor):\n• NTC: ਤਾਪਮਾਨ ਵਧਣ ਨਾਲ ਰਜਿਸਟੈਂਸ ਘਟਦੀ ਹੈ (ਫਰਿੱਜ, ਏਅਰ ਕੰਡੀਸ਼ਨਰ ਅਤੇ ਬੈਟਰੀ ਚਾਰਜਰ ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ)।\n• PTC: ਤਾਪਮਾਨ ਵਧਣ ਨਾਲ ਰਜਿਸਟੈਂਸ ਵਧਦੀ ਹੈ (ਸੁਰੱਖਿਆ ਫਿਊਜ਼ ਵਜੋਂ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ)।\n• LDR: ਹਨੇਰੇ ਵਿੱਚ ਰਜਿਸਟੈਂਸ ਬਹੁਤ ਜ਼ਿਆਦਾ (1 Megaohm) ਅਤੇ ਚਾਨਣ ਵਿੱਚ ਘੱਟ (1 kΩ) ਹੋ ਜਾਂਦੀ ਹੈ।',
          practicalExampleEn:
            'A lithium-ion smartphone battery pack embeds a 10 kΩ NTC thermistor directly against the battery pouch cells. When fast-charging at 45 Watts, the battery temperature rises. The charging IC reads the falling resistance of the NTC through an ADC pin. If the temperature exceeds 45°C (resistance drops below ~4.3 kΩ), the charger instantly throttle down the current to prevent thermal runaway and battery explosion.',
          practicalExamplePa:
            'ਸਮਾਰਟਫੋਨ ਦੀ ਲਿਥੀਅਮ ਬੈਟਰੀ ਵਿੱਚ ਬੈਟਰੀ ਦੇ ਨਾਲ 10 kΩ ਦਾ NTC ਥਰਮਿਸਟਰ ਲੱਗਿਆ ਹੁੰਦਾ ਹੈ। ਜਦੋਂ 45 ਵਾਟ ਦੇ ਸੁਪਰਫਾਸਟ ਚਾਰਜਰ ਨਾਲ ਫੋਨ ਚਾਰਜ ਹੁੰਦਾ ਹੈ, ਤਾਂ ਬੈਟਰੀ ਗਰਮ ਹੁੰਦੀ ਹੈ। ਫੋਨ ਦਾ ਪ੍ਰੋਸੈਸਰ ਥਰਮਿਸਟਰ ਦੀ ਘਟਦੀ ਰਜਿਸਟੈਂਸ ਨੂੰ ਲਗਾਤਾਰ ਚੈੱਕ ਕਰਦਾ ਰਹਿੰਦਾ ਹੈ। ਜੇਕਰ ਬੈਟਰੀ ਦਾ ਤਾਪਮਾਨ 45°C ਤੋਂ ਵੱਧ ਜਾਵੇ, ਤਾਂ ਚਾਰਜਰ ਤੁਰੰਤ ਕਰੰਟ ਘਟਾ ਦਿੰਦਾ ਹੈ ਤਾਂ ਜੋ ਫੋਨ ਦੀ ਬੈਟਰੀ ਨੂੰ ਅੱਗ ਨਾ ਲੱਗੇ।',
          codeDemo: `// TypeScript: Resistor Color Code Decoder & NTC Steinhart Calculator
export function decode4BandResistor(band1: string, band2: string, multiplier: string, tolerance: string) {
  const digits: Record<string, number> = {
    black: 0, brown: 1, red: 2, orange: 3, yellow: 4,
    green: 5, blue: 6, violet: 7, grey: 8, white: 9,
  };
  const mults: Record<string, number> = {
    black: 1, brown: 10, red: 100, orange: 1000, yellow: 10000,
    green: 100000, blue: 1000000, gold: 0.1, silver: 0.01,
  };
  const tols: Record<string, number> = {
    brown: 1, red: 2, gold: 5, silver: 10,
  };

  const nominalOhms = (digits[band1.toLowerCase()] * 10 + digits[band2.toLowerCase()]) * mults[multiplier.toLowerCase()];
  const tolPercent = tols[tolerance.toLowerCase()] ?? 20;

  return {
    nominalOhms,
    tolPercent,
    minOhms: nominalOhms * (1 - tolPercent / 100),
    maxOhms: nominalOhms * (1 + tolPercent / 100),
  };
}

// Verification: Yellow (4), Violet (7), Red (x100), Gold (+-5%) = 4700 Ohms
const r = decode4BandResistor('yellow', 'violet', 'red', 'gold');
console.log('Nominal:', r.nominalOhms, 'Ω'); // 4700 Ω
console.log('Min-Max:', r.minOhms, '-', r.maxOhms, 'Ω'); // 4465 - 4935 Ω`,
          misconceptionsJson: [
            {
              myth: 'A 1000 Ω resistor marked with 5% tolerance always measures exactly 1000 Ω on a multimeter.',
              truthEn:
                'A 5% 1000 Ω resistor is legally manufactured to measure anywhere between 950 Ω and 1050 Ω. High-precision ADC measurement circuits require 1% (metal film) or 0.1% precision resistors.',
              truthPa:
                '5% ਟੋਲਰੈਂਸ ਵਾਲਾ 1000 Ω ਦਾ ਰਜਿਸਟਰ ਮਲਟੀਮੀਟਰ ਤੇ 950 ਤੋਂ 1050 Ω ਦੇ ਵਿਚਕਾਰ ਕੁਝ ਵੀ ਦਿਖਾ ਸਕਦਾ ਹੈ। ਸਹੀ ਸਟੀਕ ਮਾਪ ਲਈ 1% ਜਾਂ 0.1% ਵਾਲੇ ਮੈਟਲ ਫਿਲਮ ਰਜਿਸਟਰ ਚਾਹੀਦੇ ਹਨ।',
            },
            {
              myth: 'You can use an audio (logarithmic) potentiometer as a linear speed control for a robot motor.',
              truthEn:
                'Audio potentiometers have a logarithmic taper where the first 50% of knob rotation only produces ~10% to 15% of total resistance change. A motor wired to it would remain sluggish across half the rotation and abruptly jump to maximum speed at the very end.',
              truthPa:
                'ਆਡੀਓ (Logarithmic) ਪੋਟੈਂਸ਼ੀਓਮੀਟਰ ਮੋਟਰਾਂ ਦੀ ਸਪੀਡ ਲਈ ਠੀਕ ਨਹੀਂ ਹੁੰਦਾ ਕਿਉਂਕਿ ਅੱਧਾ ਘੁੰਮਣ ਤੱਕ ਸਿਰਫ਼ 10% ਹੀ ਰਜਿਸਟੈਂਸ ਬਦਲਦੀ ਹੈ ਅਤੇ ਅਖੀਰ ਵਿੱਚ ਇੱਕ ਦਮ ਝਟਕਾ ਲੱਗਦਾ ਹੈ। ਇਸ ਲਈ ਲੀਨੀਅਰ (Type B) ਚਾਹੀਦਾ ਹੈ।',
            },
            {
              myth: 'A resistor rated for 1/4 Watt will safely handle 0.25 W inside a sealed hot enclosure at 100°C.',
              truthEn:
                'Power ratings are specified at 25°C or 70°C ambient in free air. At 100°C ambient, derating curves require reducing applied power to less than 50% of the nominal rating (e.g. max 0.125 W).',
              truthPa:
                'ਕਿਸੇ ਰਜਿਸਟਰ ਦੀ 0.25W ਪਾਵਰ ਰੇਟਿੰਗ ਆਮ ਕਮਰੇ ਦੇ ਤਾਪਮਾਨ (25°C) ਲਈ ਹੁੰਦੀ ਹੈ। ਜੇਕਰ ਡੱਬਾ 100°C ਤੱਕ ਗਰਮ ਹੋਵੇ, ਤਾਂ ਰਜਿਸਟਰ ਅੱਧੀ ਪਾਵਰ ਉੱਤੇ ਹੀ ਸੜ ਜਾਵੇਗਾ।',
            },
          ],
          terminologyJson: [
            {
              term: 'Tolerance',
              punjabi: 'ਟੋਲਰੈਂਸ (ਸਹਿਣਸ਼ੀਲਤਾ ਸੀਮਾ)',
              meaningEn: 'Allowable manufacturing variation from the nominal resistor value expressed as a percentage.',
              meaningPa: 'ਅਸਲ ਰਜਿਸਟੈਂਸ ਵਿੱਚ ਨਾਮੀ ਮੁੱਲ ਤੋਂ ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਫ਼ਰਕ (ਪ੍ਰਤੀਸ਼ਤ ਵਿੱਚ)।',
            },
            {
              term: 'TCR (Temperature Coefficient of Resistance)',
              punjabi: 'ਤਾਪਮਾਨ ਗੁਣਾਂਕ (TCR)',
              meaningEn: 'Change in electrical resistance per degree Celsius temperature shift, measured in ppm/°C.',
              meaningPa: 'ਇੱਕ ਡਿਗਰੀ ਤਾਪਮਾਨ ਬਦਲਣ ਤੇ ਰਜਿਸਟੈਂਸ ਵਿੱਚ ਆਉਣ ਵਾਲਾ ਫ਼ਰਕ।',
            },
            {
              term: 'Potentiometer',
              punjabi: 'ਪੋਟੈਂਸ਼ੀਓਮੀਟਰ',
              meaningEn: 'Three-terminal manually adjustable resistor configured as a variable voltage divider.',
              meaningPa: 'ਤਿੰਨ ਪਿੰਨਾਂ ਵਾਲਾ ਘੁੰਮਣ ਵਾਲਾ ਰਜਿਸਟਰ ਜੋ ਵੋਲਟੇਜ ਨੂੰ ਬਦਲਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
            },
            {
              term: 'NTC Thermistor',
              punjabi: 'NTC ਥਰਮਿਸਟਰ',
              meaningEn: 'Negative Temperature Coefficient resistor whose resistance drops sharply as temperature rises.',
              meaningPa: 'ਉਹ ਪੁਰਜ਼ਾ ਜਿਸਦੀ ਰਜਿਸਟੈਂਸ ਗਰਮ ਹੋਣ ਤੇ ਤੇਜ਼ੀ ਨਾਲ ਘਟਦੀ ਹੈ।',
            },
            {
              term: 'LDR (Light Dependent Resistor)',
              punjabi: 'ਲਾਈਟ ਡਿਪੈਂਡੈਂਟ ਰਜਿਸਟਰ (LDR)',
              meaningEn: 'Photoresistor whose resistance decreases when exposed to increasing luminous flux.',
              meaningPa: 'ਚਾਨਣ ਪੈਣ ਤੇ ਰਜਿਸਟੈਂਸ ਘਟਾਉਣ ਵਾਲਾ ਫੋਟੋ ਸੈਂਸਰ।',
            },
            {
              term: 'SMD Package (Surface Mount Device)',
              punjabi: 'SMD ਕੰਪੋਨੈਂਟ',
              meaningEn: 'Miniature leadless component soldered directly to PCB copper pads (e.g. 0805, 0603).',
              meaningPa: 'ਬਿਨਾਂ ਲੱਤਾਂ ਵਾਲੇ ਨਿੱਕੇ ਪੁਰਜ਼ੇ ਜੋ ਸਿੱਧੇ ਸਰਕਟ ਬੋਰਡ ਉੱਤੇ ਸੋਲਡਰ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।',
            },
          ],
          interactiveLabId: 'resistor-calc',
          exercisePromptEn:
            'Hands-On Analysis: (1) Decode a 5-band precision resistor: Band 1 = Brown, Band 2 = Black, Band 3 = Black, Band 4 = Red, Band 5 = Brown. (2) If a 10 kΩ potentiometer has its wiper set at 75% rotation from ground in an unloaded 12 V circuit, calculate the wiper output voltage.',
          exercisePromptPa:
            'ਅਭਿਆਸ: (1) 5-ਬੈਂਡ ਰਜਿਸਟਰ ਦਾ ਮੁੱਲ ਕੱਢੋ: ਭੂਰਾ, ਕਾਲਾ, ਕਾਲਾ, ਲਾਲ, ਭੂਰਾ। (2) ਜੇਕਰ 12V ਸਰਕਟ ਵਿੱਚ 10 kΩ ਦੇ ਪੋਟੈਂਸ਼ੀਓਮੀਟਰ ਨੂੰ 75% ਘੁਮਾਇਆ ਜਾਵੇ ਤਾਂ ਉਸਦੀ ਆਊਟਪੁੱਟ ਵੋਲਟੇਜ ਕਿੰਨੀ ਹੋਵੇਗੀ?',
          summaryEn:
            'Resistors, potentiometers, and thermistors are the bedrock of analogue signal conditioning: establishing operating points, reading ambient temperatures, and controlling user inputs with precision.',
          summaryPa:
            'ਰਜਿਸਟਰ, ਪੋਟੈਂਸ਼ੀਓਮੀਟਰ ਅਤੇ ਥਰਮਿਸਟਰ ਹਰ ਇਲੈਕਟ੍ਰਾਨਿਕ ਡਿਵਾਈਸ ਦੀ ਰੀੜ੍ਹ ਦੀ ਹੱਡੀ ਹਨ ਜੋ ਕਰੰਟ ਸੀਮਤ ਕਰਦੇ ਹਨ, ਤਾਪਮਾਨ ਸੈਂਸ ਕਰਦੇ ਹਨ ਅਤੇ ਵਾਲਿਊਮ ਕੰਟਰੋਲ ਕਰਦੇ ਹਨ।',
          furtherReadingJson: [
            'The Art of Electronics (3rd Edition) by Paul Horowitz & Winfield Hill',
            'Practical Electronics for Inventors by Paul Scherz & Simon Monk',
            'Vishay Resistor Technology & Derating Handbook',
          ],
          quiz: {
            titleEn: 'Level 2 Assessment: Resistors, Colour Codes & Thermistors',
            titlePa: 'ਲੈਵਲ 2 ਟੈਸਟ: ਰਜਿਸਟਰ, ਕਲਰ ਕੋਡ ਅਤੇ ਥਰਮਿਸਟਰ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'Colour Codes',
                promptEn: 'What is the nominal value and tolerance of a resistor with bands: Red, Violet, Orange, Gold?',
                promptPa: 'ਲਾਲ, ਬੈਂਗਣੀ, ਸੰਤਰੀ, ਸੁਨਹਿਰੀ ਬੈਂਡਾਂ ਵਾਲੇ ਰਜਿਸਟਰ ਦਾ ਨਾਮੀ ਮੁੱਲ ਅਤੇ ਟੋਲਰੈਂਸ ਕੀ ਹੈ?',
                optionsJson: ['27 kΩ ±5%', '270 kΩ ±5%', '2.7 kΩ ±10%', '27 kΩ ±1%'],
                correctAnswer: '27 kΩ ±5%',
                explanationEn:
                  'Red = 2, Violet = 7, Orange = 10^3 (x1000), Gold = ±5%. Value = 27 * 1000 = 27,000 Ω = 27 kΩ (±5%).',
                explanationPa:
                  'ਲਾਲ = 2, ਬੈਂਗਣੀ = 7, ਸੰਤਰੀ = 1000, ਸੁਨਹਿਰੀ = ±5%। ਮੁੱਲ = 27 kΩ ±5%।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Colour Codes 5-Band',
                promptEn: 'What is the nominal resistance of a 5-band precision resistor: Brown, Green, Black, Brown, Brown?',
                promptPa: '5-ਬੈਂਡ ਪ੍ਰੀਸੀਜ਼ਨ ਰਜਿਸਟਰ (ਭੂਰਾ, ਹਰਾ, ਕਾਲਾ, ਭੂਰਾ, ਭੂਰਾ) ਦਾ ਮੁੱਲ ਕੀ ਹੈ?',
                optionsJson: ['1.50 kΩ ±1%', '150 Ω ±1%', '15 kΩ ±1%', '1.50 MΩ ±5%'],
                correctAnswer: '1.50 kΩ ±1%',
                explanationEn:
                  'Brown = 1, Green = 5, Black = 0. Multiplier Brown = 10^1. Tolerance Brown = ±1%. 150 * 10 = 1500 Ω = 1.50 kΩ ±1%.',
                explanationPa:
                  '1, 5, 0 * 10^1 = 1500 Ω = 1.5 kΩ (1% ਟੋਲਰੈਂਸ)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'SMD Codes',
                promptEn: 'An SMD resistor is marked with code "103". What is its resistance value?',
                promptPa: 'ਇੱਕ SMD ਰਜਿਸਟਰ ਉੱਤੇ "103" ਲਿਖਿਆ ਹੈ। ਇਸਦੀ ਰਜਿਸਟੈਂਸ ਕਿੰਨੀ ਹੈ?',
                optionsJson: ['10 kΩ (10,000 Ω)', '103 Ω', '1.03 kΩ', '100 kΩ'],
                correctAnswer: '10 kΩ (10,000 Ω)',
                explanationEn:
                  'Standard 3-digit SMD: first two digits are numbers, third is exponent of 10. "103" = 10 * 10^3 = 10,000 Ω = 10 kΩ.',
                explanationPa:
                  '103 ਦਾ ਮਤਲਬ ਹੈ 10 ਦੇ ਪਿੱਛੇ 3 ਸਿਫ਼ਰਾਂ = 10,000 Ω = 10 kΩ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Thermistors',
                promptEn: 'What happens to the resistance of a Negative Temperature Coefficient (NTC) thermistor when its temperature increases?',
                promptPa: 'ਜਦੋਂ NTC ਥਰਮਿਸਟਰ ਦਾ ਤਾਪਮਾਨ ਵਧਦਾ ਹੈ ਤਾਂ ਉਸਦੀ ਰਜਿਸਟੈਂਸ ਤੇ ਕੀ ਅਸਰ ਪੈਂਦਾ ਹੈ?',
                optionsJson: [
                  'Resistance decreases sharply',
                  'Resistance increases linearly',
                  'Resistance stays perfectly constant',
                  'Resistance becomes negative in Ohms',
                ],
                correctAnswer: 'Resistance decreases sharply',
                explanationEn:
                  'NTC thermistors possess a negative coefficient: higher thermal energy excites more charge carriers into the conduction band, reducing resistance.',
                explanationPa:
                  'NTC (Negative Temperature Coefficient) ਵਿੱਚ ਤਾਪਮਾਨ ਵਧਣ ਤੇ ਰਜਿਸਟੈਂਸ ਤੇਜ਼ੀ ਨਾਲ ਘਟਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'LDR Sensor',
                promptEn: 'When ambient light falling on a Cadmium Sulfide (CdS) photoresistor (LDR) increases from pitch black to bright sunlight, its resistance typically:',
                promptPa: 'ਜਦੋਂ LDR ਉੱਤੇ ਹਨੇਰੇ ਤੋਂ ਬਾਅਦ ਤੇਜ਼ ਧੁੱਪ ਪੈਂਦੀ ਹੈ ਤਾਂ ਉਸਦੀ ਰਜਿਸਟੈਂਸ:',
                optionsJson: [
                  'Drops from ~1 MΩ down to ~1 kΩ or less',
                  'Rises from 100 Ω up to 10 MΩ',
                  'Remains constant at 50 Ω',
                  'Produces a 5 V output voltage',
                ],
                correctAnswer: 'Drops from ~1 MΩ down to ~1 kΩ or less',
                explanationEn:
                  'Photons with energy greater than the bandgap liberate electron-hole pairs, causing photoconductivity and slashing resistance.',
                explanationPa:
                  'ਰੌਸ਼ਨੀ ਪੈਣ ਤੇ ਫੋਟੋਨਾਂ ਕਾਰਨ ਚਾਰਜ ਵਧਦਾ ਹੈ ਅਤੇ ਰਜਿਸਟੈਂਸ 1 ਮੈਗਾਓਹਮ ਤੋਂ ਡਿੱਗ ਕੇ 1 kΩ ਜਾਂ ਇਸਤੋਂ ਵੀ ਘੱਟ ਰਹਿ ਜਾਂਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Potentiometer Tapers',
                promptEn: 'Why do audio volume control circuits use logarithmic (Audio / Type A) taper potentiometers instead of linear pots?',
                promptPa: 'ਆਡੀਓ ਵਾਲਿਊਮ ਬਟਨਾਂ ਵਿੱਚ ਲੀਨੀਅਰ ਦੀ ਬਜਾਏ ਲਾਗਰਿਦਮਿਕ (Type A) ਪੋਟੈਂਸ਼ੀਓਮੀਟਰ ਕਿਉਂ ਵਰਤੇ ਜਾਂਦੇ ਹਨ?',
                optionsJson: [
                  'Human hearing perceives sound loudness logarithmically (Weber-Fechner Law)',
                  'Logarithmic pots handle more electrical current',
                  'Linear pots are too large to fit in amplifiers',
                  'Audio frequencies destroy linear carbon tracks',
                ],
                correctAnswer: 'Human hearing perceives sound loudness logarithmically (Weber-Fechner Law)',
                explanationEn:
                  'Human ear sensitivity is logarithmic. A logarithmic taper provides a smooth, subjectively uniform increase in perceived volume.',
                explanationPa:
                  'ਮਨੁੱਖੀ ਕੰਨ ਆਵਾਜ਼ ਨੂੰ ਲਾਗਰਿਦਮਿਕ ਢੰਗ ਨਾਲ ਸੁਣਦੇ ਹਨ, ਇਸ ਲਈ ਇੱਕੋ ਜਿਹਾ ਵਾਧਾ ਮਹਿਸੂਸ ਕਰਵਾਉਣ ਲਈ ਲਾਗ ਪੋਟੈਂਸ਼ੀਓਮੀਟਰ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Power Ratings',
                promptEn: 'A 1/4 Watt (0.25 W) resistor has 100 Ω resistance. What is the maximum continuous DC voltage that can be applied across it without exceeding its power rating?',
                promptPa: '0.25 ਵਾਟ ਦੇ 100 Ω ਰਜਿਸਟਰ ਦੇ ਆਰ-ਪਾਰ ਵੱਧ ਤੋਂ ਵੱਧ ਕਿੰਨੀ ਵੋਲਟੇਜ ਲਗਾਈ ਜਾ ਸਕਦੀ ਹੈ ਤਾਂ ਜੋ ਉਹ ਸੜੇ ਨਾ?',
                optionsJson: ['5.0 Volts', '25 Volts', '1.0 Volt', '10.0 Volts'],
                correctAnswer: '5.0 Volts',
                explanationEn:
                  'P = V^2 / R => V = √(P * R) = √(0.25 W * 100 Ω) = √25 = 5.0 Volts.',
                explanationPa:
                  'V = √(P * R) = √(0.25 * 100) = √25 = 5.0 ਵੋਲਟ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'PTC Applications',
                promptEn: 'What is the primary industrial application of a ceramic PTC thermistor / PolySwitch in electronic power circuits?',
                promptPa: 'ਇਲੈਕਟ੍ਰਾਨਿਕ ਪਾਵਰ ਸਰਕਟਾਂ ਵਿੱਚ PTC ਥਰਮਿਸਟਰ (PolySwitch) ਦਾ ਮੁੱਖ ਕੰਮ ਕੀ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'Self-resetting overcurrent protection fuse',
                  'Audio amplification',
                  'Radio frequency demodulation',
                  'High-voltage rectification',
                ],
                correctAnswer: 'Self-resetting overcurrent protection fuse',
                explanationEn:
                  'Excessive fault current heats the PTC past its trip temperature, causing its resistance to skyrocket and choke current. When power is removed and it cools, it resets automatically.',
                explanationPa:
                  'ਵੱਧ ਕਰੰਟ ਆਉਣ ਤੇ PTC ਗਰਮ ਹੋ ਕੇ ਆਪਣੀ ਰਜਿਸਟੈਂਸ ਬਹੁਤ ਵਧਾ ਲੈਂਦਾ ਹੈ ਅਤੇ ਕਰੰਟ ਰੋਕ ਦਿੰਦਾ ਹੈ। ਠੰਢਾ ਹੋਣ ਤੇ ਇਹ ਆਪਣੇ-ਆਪ ਮੁੜ ਠੀਕ ਹੋ ਜਾਂਦਾ ਹੈ (ਰੀਸੈੱਟੇਬਲ ਫਿਊਜ਼)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'SMD Code 4-Digit',
                promptEn: 'What is the resistance value of a 4-digit precision SMD resistor marked "4701"?',
                promptPa: '4-ਅੰਕਾਂ ਵਾਲੇ SMD ਰਜਿਸਟਰ "4701" ਦਾ ਮੁੱਲ ਕੀ ਹੈ?',
                optionsJson: ['4.70 kΩ (4700 Ω)', '470.1 Ω', '47 kΩ', '470 kΩ'],
                correctAnswer: '4.70 kΩ (4700 Ω)',
                explanationEn:
                  'In 4-digit SMD coding, the first three digits are significant and the fourth is the multiplier power of 10. "4701" = 470 * 10^1 = 4700 Ω = 4.70 kΩ.',
                explanationPa:
                  'ਪਹਿਲੇ 3 ਅੰਕ (470) ਅਤੇ ਚੌਥਾ ਅੰਕ 10 ਦੀ ਘਾਤ (10^1): 470 * 10 = 4700 Ω = 4.7 kΩ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Potentiometer Wiper',
                promptEn: 'In a 3-terminal potentiometer wired across a 10 V DC supply, if the wiper is connected directly to a high-impedance voltmeter and centered at exactly 50% rotation, what voltage is measured?',
                promptPa: '10V ਸਪਲਾਈ ਨਾਲ ਜੁੜੇ ਪੋਟੈਂਸ਼ੀਓਮੀਟਰ ਦੀ ਸੈਂਟਰ ਪਿੰਨ (50% ਉੱਤੇ) ਨਾਲ ਵੋਲਟਮੀਟਰ ਜੋੜਨ ਤੇ ਕਿੰਨੀ ਵੋਲਟੇਜ ਮਿਲੇਗੀ?',
                optionsJson: ['5.0 Volts', '10.0 Volts', '0 Volts', '2.5 Volts'],
                correctAnswer: '5.0 Volts',
                explanationEn:
                  'At 50% mechanical rotation on a linear potentiometer, the track is divided into two equal halves (R1 = R2), creating a 1:1 voltage divider that outputs exactly half of Vin (5.0 V).',
                explanationPa:
                  'ਅੱਧੇ ਰੋਟੇਸ਼ਨ ਤੇ ਦੋਵੇਂ ਪਾਸੇ ਬਰਾਬਰ ਰਜਿਸਟੈਂਸ ਹੋਣ ਕਾਰਨ ਵੋਲਟੇਜ ਅੱਧੀ ਯਾਨੀ 5.0 ਵੋਲਟ ਹੋਵੇਗੀ।',
              },
            ],
          },
        },
        {
          slug: 'capacitors-inductors-rlc-resonance-transformers',
          orderIndex: 2,
          titleEn: '2.2 Capacitors, Inductors, RLC Resonance & Transformers',
          titlePa: '2.2 ਕੈਪਸੀਟਰ, ਇੰਡਕਟਰ, RLC ਰੈਜ਼ੋਨੈਂਸ ਅਤੇ ਟ੍ਰਾਂਸਫਾਰਮਰ',
          objectivesJson: [
            'Compare ceramic (MLCC), aluminum electrolytic, tantalum, and film capacitor chemistries for ESR, leakage, polarity, and DC bias derating',
            'Calculate RC charging and discharging transients using time constants (tau = R * C)',
            'Analyze inductive energy storage, saturation, self-inductance, and mutual inductance',
            'Compute RLC series/parallel resonant frequencies (fr = 1 / [2*pi*sqrt(LC)]) and Quality factor (Q)',
            'Calculate transformer turns ratios, voltage scaling, current reflections, and impedance matching',
          ],
          prerequisitesJson: ['2.1 Resistors, Colour Coding, Potentiometers & Thermistors'],
          childAnalogyEn:
            'Think of a Capacitor like an elastic balloon storing water under pressure—squeeze water in, and it stretches; let it go, and it pushes the water back out instantly! An Inductor is like a heavy iron flywheel on an old tractor—it takes effort to get it spinning, but once spinning, it stubbornly keeps rolling and fights any attempt to halt it! A Transformer is like a gearbox on a bicycle: shift gears to trade high pedaling speed for massive uphill climbing force!',
          childAnalogyPa:
            'ਕੈਪਸੀਟਰ ਇੱਕ ਰਬੜ ਦੇ ਗੁਬਾਰੇ ਵਾਂਗ ਹੈ ਜਿਸ ਵਿੱਚ ਪਾਣੀ ਭਰ ਕੇ ਦਬਾਅ ਸਟੋਰ ਕੀਤਾ ਜਾਂਦਾ ਹੈ—ਜਦੋਂ ਲੋੜ ਪਵੇ ਇਹ ਤੁਰੰਤ ਪਾਣੀ ਬਾਹਰ ਸੁੱਟਦਾ ਹੈ! ਇੰਡਕਟਰ ਪੁਰਾਣੇ ਟਰੈਕਟਰ ਦੇ ਭਾਰੇ ਲੋਹੇ ਦੇ ਪਹੀਏ (ਫਲਾਈਵ੍ਹੀਲ) ਵਾਂਗ ਹੈ—ਇਸਨੂੰ ਘੁੰਮਾਉਣਾ ਔਖਾ ਹੁੰਦਾ ਹੈ, ਪਰ ਇੱਕ ਵਾਰ ਘੁੰਮਣ ਲੱਗ ਪਵੇ ਤਾਂ ਇਹ ਇੱਕ ਦਮ ਰੁਕਣ ਦਾ ਵਿਰੋਧ ਕਰਦਾ ਹੈ! ਟ੍ਰਾਂਸਫਾਰਮਰ ਸਾਈਕਲ ਦੇ ਗੇਅਰਾਂ ਵਾਂਗ ਹੈ ਜੋ ਸਪੀਡ ਅਤੇ ਤਾਕਤ ਨੂੰ ਆਪਸ ਵਿੱਚ ਬਦਲ ਦਿੰਦਾ ਹੈ!',
          technicalExplanationEn:
            'Reactive components store and release energy, shaping AC waveforms and filtering power rails:\n\n1. Capacitor Types & Non-Idealities:\n• Multilayer Ceramic (MLCC): Class 1 (C0G/NP0: ultra-stable, zero DC bias effect) vs Class 2 (X5R, X7R: high density, but capacitance drops up to 70% under rated DC voltage).\n• Aluminum Electrolytic: High capacitance-voltage product, polarized, high ESR, limited lifetime (drying electrolyte).\n• Tantalum: Solid dielectric, stable ESR, but violent explosive short-circuit failure mode if overvoltage or reverse polarized.\n• Film (Polypropylene): High peak current (dV/dt), self-healing, low distortion in audio crossovers.\n• RC Transient: v_C(t) = V_final + (V_initial - V_final) * exp(-t / RC). Reaches 63.2% at 1τ and >99.3% at 5τ.\n\n2. Inductors & Core Saturation:\n• Inductance: L = (µ * N^2 * A) / l. Core materials: Ferrite, iron powder, laminated silicon steel.\n• Saturation Current (I_sat): Point where core magnetic domains fully align and permeability drops precipitously, collapsing inductance and causing overcurrent.\n\n3. RLC Resonance & Quality Factor (Q):\n• Resonant Frequency: f_0 = 1 / (2 * π * √(L * C))\n• Series Resonance: Impedance reaches minimum (|Z| = R), current peaks, phase angle is 0°.\n• Quality Factor (Series): Q = (ω_0 * L) / R = 1 / (ω_0 * C * R). Bandwidth BW = f_0 / Q.\n\n4. Transformer Principles:\n• Turns Ratio: N_p / N_s = V_p / V_s = I_s / I_p\n• Impedance Transformation: Z_p = (N_p / N_s)^2 * Z_s\n• Isolation: Eliminates ground loops by transferring power purely through alternating magnetic flux.',
          technicalExplanationPa:
            'ਕੈਪਸੀਟਰ ਅਤੇ ਇੰਡਕਟਰ ਸਰਕਟਾਂ ਦੇ ਗਤੀਸ਼ੀਲ ਥੰਮ੍ਹ ਹਨ:\n\n1. ਕੈਪਸੀਟਰਾਂ ਦੀਆਂ ਕਿਸਮਾਂ:\n• ਸਿਰੈਮਿਕ (MLCC): ਛੋਟੇ ਆਕਾਰ ਦੇ (pF ਤੋਂ µF), ਹਾਈ ਫ੍ਰੀਕੁਐਂਸੀ ਸ਼ੋਰ ਨੂੰ ਦੂਰ ਕਰਦੇ ਹਨ।\n• ਇਲੈਕਟ੍ਰੋਲਾਈਟਿਕ (Electrolytic): ਵੱਡੀ ਸਮਰੱਥਾ ਵਾਲੇ (ਜਿਵੇਂ 1000 µF), ਪਾਵਰ ਸਪਲਾਈ ਵਿੱਚ ਵੋਲਟੇਜ ਨੂੰ ਸਮੂਥ ਕਰਦੇ ਹਨ। ਇਹਨਾਂ ਦੇ ਪਾਜ਼ਿਟਿਵ ਅਤੇ ਨੈਗੇਟਿਵ ਟਰਮੀਨਲ ਹੁੰਦੇ ਹਨ। ਪੁੱਠਾ ਲਗਾਉਣ ਤੇ ਇਹ ਪਟਾਕਾ ਪਾ ਕੇ ਫਟ ਜਾਂਦੇ ਹਨ!\n• ਟੈਂਟਲਮ (Tantalum): ਸਥਿਰ ਸਮਰੱਥਾ ਵਾਲੇ, ਪਰ ਓਵਰ-ਵੋਲਟੇਜ ਤੇ ਸੜ ਜਾਂਦੇ ਹਨ।\n• RC ਸਮਾਂ ਸਥਿਰਾਂਕ (Time Constant): τ = R * C। ਕੈਪਸੀਟਰ 5τ ਵਿੱਚ 99% ਚਾਰਜ ਹੁੰਦਾ ਹੈ।\n\n2. ਰੈਜ਼ੋਨੈਂਸ (Resonance):\nਜਦੋਂ ਇੰਡਕਟਰ ਅਤੇ ਕੈਪਸੀਟਰ ਇੱਕ ਦੂਜੇ ਦੀ ਰੁਕਾਵਟ ਨੂੰ ਬਿਲਕੁਲ ਰੱਦ ਕਰ ਦਿੰਦੇ ਹਨ (XL = XC):\n• ਫ੍ਰੀਕੁਐਂਸੀ f0 = 1 / (2 * π * √(L * C))\nਇਹ ਰੇਡੀਓ ਟਿਊਨਿੰਗ ਵਿੱਚ ਇੱਕ ਖਾਸ ਸਟੇਸ਼ਨ ਫੜਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ!\n\n3. ਟ੍ਰਾਂਸਫਾਰਮਰ (Transformer):\nਚੁੰਬਕੀ ਫਲੈਕਸ ਰਾਹੀਂ ਬਿਨਾਂ ਤਾਰ ਜੋੜੇ ਵੋਲਟੇਜ ਵਧਾਉਂਦਾ (Step-up) ਜਾਂ ਘਟਾਉਂਦਾ (Step-down) ਹੈ: Np/Ns = Vp/Vs।',
          practicalExampleEn:
            'Linear 12V 1A DC Power Supply Filter Design: After bridge rectification of 50 Hz AC, the ripple frequency is 100 Hz. If the allowable peak-to-peak ripple is V_ripple = 1.0 V at I_load = 1.0 A, the required smoothing electrolytic capacitor is: C = I / (2 * f_mains * V_ripple) = 1.0 A / (100 Hz * 1.0 V) = 0.010 Farads = 10,000 µF rated at 25V or 35V.',
          practicalExamplePa:
            'ਮੋਬਾਈਲ ਚਾਰਜਰ ਜਾਂ ਐਂਪਲੀਫਾਇਰ ਦੀ ਪਾਵਰ ਸਪਲਾਈ ਫਿਲਟਰ: 50 Hz AC ਨੂੰ ਡਾਇਓਡਾਂ ਰਾਹੀਂ DC ਬਣਾਉਣ ਤੋਂ ਬਾਅਦ ਉਸ ਵਿੱਚ 100 Hz ਦਾ ਝਟਕਾ (Ripple) ਰਹਿ ਜਾਂਦਾ ਹੈ। ਜੇਕਰ 1 ਐਂਪੀਅਰ ਕਰੰਟ ਉੱਤੇ ਸਿਰਫ਼ 1 ਵੋਲਟ ਰਿਪਲ ਬਰਦਾਸ਼ਤ ਕਰਨੀ ਹੋਵੇ, ਤਾਂ C = I / (2 * f * V) = 1 / (100 * 1) = 0.01 F = 10,000 µF ਦਾ ਵੱਡਾ ਇਲੈਕਟ੍ਰੋਲਾਈਟਿਕ ਕੈਪਸੀਟਰ ਲਗਾਉਣਾ ਪੈਂਦਾ ਹੈ ਤਾਂ ਜੋ ਸਪੀਕਰ ਵਿੱਚ "ਹੰਮ" (Hum) ਦੀ ਆਵਾਜ਼ ਨਾ ਆਵੇ।',
          codeDemo: `// TypeScript: RLC Resonant Frequency & RC Charging Calculator
export function calcRlcResonance(lHenries: number, cFarads: number, rOhms = 10) {
  const f0 = 1 / (2 * Math.PI * Math.sqrt(lHenries * cFarads));
  const omega0 = 2 * Math.PI * f0;
  const qFactor = (omega0 * lHenries) / rOhms;
  const bandwidthHz = f0 / qFactor;

  return {
    resonantFreqHz: f0,
    angularFreqRadSec: omega0,
    qualityFactorQ: qFactor,
    bandwidthHz,
  };
}

export function calcRcChargingVoltage(vSource: number, rOhms: number, cFarads: number, timeSec: number) {
  const tau = rOhms * cFarads;
  const vCap = vSource * (1 - Math.exp(-timeSec / tau));
  return { tauSeconds: tau, vCapAtTime: vCap };
}

// Verification: 10uH inductor with 100pF capacitor:
const rlc = calcRlcResonance(10e-6, 100e-12, 5);
console.log('Resonant Frequency:', (rlc.resonantFreqHz / 1e6).toFixed(2), 'MHz'); // 5.03 MHz
console.log('Q Factor:', rlc.qualityFactorQ.toFixed(1));`,
          misconceptionsJson: [
            {
              myth: 'An electrolytic capacitor can be connected into a circuit in either direction like a resistor.',
              truthEn:
                'Aluminum electrolytic and tantalum capacitors are polarized. Reverse voltage rapidly breaks down their ultra-thin oxide dielectric layer, causing immense gas generation, pressure relief plug rupture, or violent chemical explosion.',
              truthPa:
                'ਇਲੈਕਟ੍ਰੋਲਾਈਟਿਕ ਕੈਪਸੀਟਰ ਪੋਲਰਾਈਜ਼ਡ ਹੁੰਦੇ ਹਨ (ਪਾਜ਼ਿਟਿਵ ਅਤੇ ਨੈਗੇਟਿਵ)। ਜੇਕਰ ਇਹਨਾਂ ਨੂੰ ਪੁੱਠਾ ਲਗਾ ਦਿੱਤਾ ਜਾਵੇ, ਤਾਂ ਅੰਦਰਲੀ ਐਸਿਡ ਡਾਇਇਲੈਕਟ੍ਰਿਕ ਪਰਤ ਨਸ਼ਟ ਹੋ ਜਾਂਦੀ ਹੈ ਅਤੇ ਕੈਪਸੀਟਰ ਧਮਾਕੇ ਨਾਲ ਫਟ ਜਾਂਦਾ ਹੈ।',
            },
            {
              myth: 'A 10 µF MLCC capacitor provides 10 µF under all real operating conditions.',
              truthEn:
                'Class 2 MLCC capacitors (e.g. 0603 X5R/X7R) suffer dramatic DC bias voltage coefficient: operating a 10 µF 16V rated capacitor at 12V DC can reduce its actual working capacitance by 60% to 80% (down to ~2 µF).',
              truthPa:
                'ਛੋਟੇ ਸਿਰੈਮਿਕ (MLCC) ਕੈਪਸੀਟਰਾਂ ਉੱਤੇ ਜਦੋਂ ਪੂਰੀ ਵੋਲਟੇਜ ਲਗਾਈ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਉਹਨਾਂ ਦੀ ਅਸਲ ਸਮਰੱਥਾ 70% ਤੱਕ ਘਟ ਸਕਦੀ ਹੈ। 10 µF ਵਾਲਾ ਕੈਪਸੀਟਰ ਅਸਲ ਵਿੱਚ ਸਿਰਫ਼ 2-3 µF ਹੀ ਰਹਿ ਜਾਂਦਾ ਹੈ!',
            },
            {
              myth: 'Transformers can step up or step down Direct Current (DC) voltages.',
              truthEn:
                'Transformers operate strictly on Faraday’s law of electromagnetic induction (V = -N * dΦ/dt), requiring a continuously changing alternating magnetic flux. Constant DC causes no change in flux (dΦ/dt = 0), resulting in zero secondary output and burning the primary winding due to lack of inductive reactance.',
              truthPa:
                'ਟ੍ਰਾਂਸਫਾਰਮਰ ਕਦੇ ਵੀ DC ਬਿਜਲੀ ਉੱਤੇ ਕੰਮ ਨਹੀਂ ਕਰ ਸਕਦਾ। DC ਵਿੱਚ ਚੁੰਬਕੀ ਖੇਤਰ ਬਦਲਦਾ ਨਹੀਂ (dΦ/dt = 0), ਜਿਸ ਕਾਰਨ ਦੂਜੇ ਪਾਸੇ ਜ਼ੀਰੋ ਵੋਲਟੇਜ ਆਉਂਦੀ ਹੈ ਅਤੇ ਟ੍ਰਾਂਸਫਾਰਮਰ ਦੀ ਮੇਨ ਤਾਰ ਸੜ ਕੇ ਸੁਆਹ ਹੋ ਜਾਂਦੀ ਹੈ।',
            },
          ],
          terminologyJson: [
            {
              term: 'Capacitance (C)',
              punjabi: 'ਕੈਪੈਸਿਟੈਂਸ',
              meaningEn: 'Ability of a component to store electrostatic charge per unit potential difference (Farads).',
              meaningPa: 'ਬਿਜਲਈ ਚਾਰਜ ਨੂੰ ਸਟੋਰ ਕਰਨ ਦੀ ਸਮਰੱਥਾ (ਫੈਰਡ, Farads)।',
            },
            {
              term: 'ESR (Equivalent Series Resistance)',
              punjabi: 'ਬਰਾਬਰ ਸੀਰੀਜ਼ ਰਜਿਸਟੈਂਸ (ESR)',
              meaningEn: 'Internal ohmic resistive loss of a practical real-world capacitor or inductor.',
              meaningPa: 'ਕੈਪਸੀਟਰ ਦੇ ਅੰਦਰੂਨੀ ਨੁਕਸਾਨ ਅਤੇ ਇਲੈਕਟ੍ਰੋਲਾਈਟ ਦੀ ਆਪਣੀ ਰਜਿਸਟੈਂਸ।',
            },
            {
              term: 'Inductance (L)',
              punjabi: 'ਇੰਡਕਟੈਂਸ',
              meaningEn: 'Property of a conductor by which a change in current induces an electromotive force (Henries).',
              meaningPa: 'ਕਰੰਟ ਬਦਲਣ ਤੇ ਉਲਟ ਵੋਲਟੇਜ ਪੈਦਾ ਕਰਨ ਦੀ ਸਮਰੱਥਾ (ਹੈਨਰੀ, Henries)।',
            },
            {
              term: 'Resonance',
              punjabi: 'ਰੈਜ਼ੋਨੈਂਸ (ਗੂੰਜ)',
              meaningEn: 'Condition in an RLC circuit where inductive and capacitive reactances are equal and cancel each other out.',
              meaningPa: 'ਉਹ ਸਥਿਤੀ ਜਦੋਂ ਇੰਡਕਟਰ ਅਤੇ ਕੈਪਸੀਟਰ ਇੱਕ ਦੂਜੇ ਦੀ ਰੁਕਾਵਟ ਖ਼ਤਮ ਕਰ ਦਿੰਦੇ ਹਨ।',
            },
            {
              term: 'Mutual Inductance',
              punjabi: 'ਆਪਸੀ ਇੰਡਕਟੈਂਸ (Mutual Inductance)',
              meaningEn: 'Production of an EMF in one coil caused by the changing current in an adjacent magnetically coupled coil.',
              meaningPa: 'ਇੱਕ ਕੁਆਇਲ ਵਿੱਚ ਕਰੰਟ ਬਦਲਣ ਨਾਲ ਨਾਲ ਵਾਲੀ ਦੂਜੀ ਕੁਆਇਲ ਵਿੱਚ ਵੋਲਟੇਜ ਪੈਦਾ ਹੋਣਾ।',
            },
            {
              term: 'Time Constant (τ = RC)',
              punjabi: 'ਟਾਈਮ ਕੌਂਸਟੈਂਟ (τ)',
              meaningEn: 'Time required for a capacitor in an RC circuit to charge to 63.2% of the applied voltage.',
              meaningPa: 'ਕੈਪਸੀਟਰ ਨੂੰ 63.2% ਚਾਰਜ ਹੋਣ ਲਈ ਲੱਗਣ ਵਾਲਾ ਸਮਾਂ।',
            },
          ],
          interactiveLabId: 'resistor-calc',
          exercisePromptEn:
            'Engineering Calculation: (1) An FM radio tuner circuit requires a resonant frequency of 100.0 MHz using a 100 nH surface-mount inductor. Calculate the required tuning capacitance C in picofarads. (2) A mains step-down transformer has 1000 primary turns and 50 secondary turns. If 230 V AC is applied to the primary, calculate the secondary output voltage.',
          exercisePromptPa:
            'ਇੰਜੀਨੀਅਰਿੰਗ ਗਣਨਾ: (1) 100 MHz ਦੇ FM ਰੇਡੀਓ ਸਰਕਟ ਵਿੱਚ 100 nH ਇੰਡਕਟਰ ਨਾਲ ਕਿੰਨੇ ਪਿਕੋਫੈਰਡ (pF) ਦਾ ਕੈਪਸੀਟਰ ਲਗਾਉਣਾ ਪਵੇਗਾ? (2) ਇੱਕ ਟ੍ਰਾਂਸਫਾਰਮਰ ਦੇ ਪ੍ਰਾਇਮਰੀ ਵਿੱਚ 1000 ਗੇੜੇ ਅਤੇ ਸੈਕੰਡਰੀ ਵਿੱਚ 50 ਗੇੜੇ ਹਨ। ਜੇਕਰ 230V ਦਿੱਤੀ ਜਾਵੇ ਤਾਂ ਆਊਟਪੁੱਟ ਵੋਲਟੇਜ ਕਿੰਨੀ ਹੋਵੇਗੀ?',
          summaryEn:
            'Capacitors store potential energy in electric fields, inductors store kinetic energy in magnetic fields, their combination at resonance enables wireless radio tuning, and transformers scale AC voltages safely with complete galvanic isolation.',
          summaryPa:
            'ਕੈਪਸੀਟਰ ਬਿਜਲਈ ਖੇਤਰ ਵਿੱਚ ਅਤੇ ਇੰਡਕਟਰ ਚੁੰਬਕੀ ਖੇਤਰ ਵਿੱਚ ਊਰਜਾ ਸਟੋਰ ਕਰਦੇ ਹਨ; ਦੋਵਾਂ ਦਾ ਸੁਮੇਲ ਰੇਡੀਓ ਵੇਵਾਂ ਨੂੰ ਫੜਦਾ ਹੈ ਅਤੇ ਟ੍ਰਾਂਸਫਾਰਮਰ ਬਿਜਲੀ ਨੂੰ ਬਿਨਾਂ ਜੋੜੇ ਇੱਕ ਸਰਕਟ ਤੋਂ ਦੂਜੇ ਵਿੱਚ ਤਬਦੀਲ ਕਰਦਾ ਹੈ।',
          furtherReadingJson: [
            'Electromagnetic Fields and Energy by Hermann A. Haus & James R. Melcher',
            'Transformer and Inductor Design Handbook by Colonel Wm. T. McLyman',
            'Murata Application Note: DC Bias Characteristics of Multilayer Ceramic Capacitors',
          ],
          quiz: {
            titleEn: 'Level 2 Assessment: Capacitors, Inductors & RLC Circuits',
            titlePa: 'ਲੈਵਲ 2 ਟੈਸਟ: ਕੈਪਸੀਟਰ, ਇੰਡਕਟਰ ਅਤੇ RLC ਸਰਕਟ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'RC Time Constant',
                promptEn: 'In a series RC circuit with R = 100 kΩ and C = 10 µF, what is the time constant (τ)?',
                promptPa: 'R = 100 kΩ ਅਤੇ C = 10 µF ਵਾਲੇ ਸੀਰੀਜ਼ RC ਸਰਕਟ ਦਾ ਟਾਈਮ ਕੌਂਸਟੈਂਟ (τ) ਕਿੰਨਾ ਹੈ?',
                optionsJson: ['1.0 second', '0.1 seconds', '10 seconds', '100 milliseconds'],
                correctAnswer: '1.0 second',
                explanationEn:
                  'τ = R * C = (100 * 10^3 Ω) * (10 * 10^-6 F) = 1.0 second.',
                explanationPa:
                  'τ = R * C = 100,000 * 0.00001 = 1.0 ਸੈਕਿੰਡ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'RC Full Charge',
                promptEn: 'Approximately how many time constants (τ) are required for a capacitor to charge to over 99% of the supply voltage?',
                promptPa: 'ਕੈਪਸੀਟਰ ਨੂੰ 99% ਤੋਂ ਵੱਧ ਚਾਰਜ ਹੋਣ ਲਈ ਲਗਭਗ ਕਿੰਨੇ ਟਾਈਮ ਕੌਂਸਟੈਂਟ (τ) ਲੱਗਦੇ ਹਨ?',
                optionsJson: ['5 τ', '1 τ', '3 τ', '10 τ'],
                correctAnswer: '5 τ',
                explanationEn:
                  'At 1τ = 63.2%, 2τ = 86.5%, 3τ = 95.0%, 4τ = 98.2%, and 5τ = 99.3% (standard engineering full charge).',
                explanationPa:
                  '5τ ਵਿੱਚ ਕੈਪਸੀਟਰ 99.3% ਚਾਰਜ ਹੋ ਜਾਂਦਾ ਹੈ, ਜਿਸਨੂੰ ਪੂਰਾ ਚਾਰਜ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Transformer Turns',
                promptEn: 'A transformer has 500 primary turns and 50 secondary turns. If the primary voltage is 240 V AC, what is the secondary voltage?',
                promptPa: 'ਇੱਕ ਟ੍ਰਾਂਸਫਾਰਮਰ ਦੇ ਪ੍ਰਾਇਮਰੀ ਵਿੱਚ 500 ਅਤੇ ਸੈਕੰਡਰੀ ਵਿੱਚ 50 ਗੇੜੇ ਹਨ। ਜੇਕਰ ਪ੍ਰਾਇਮਰੀ ਵਿੱਚ 240V AC ਦਿੱਤੀ ਜਾਵੇ ਤਾਂ ਸੈਕੰਡਰੀ ਵੋਲਟੇਜ ਕਿੰਨੀ ਹੋਵੇਗੀ?',
                optionsJson: ['24 V AC', '2400 V AC', '12 V AC', '48 V AC'],
                correctAnswer: '24 V AC',
                explanationEn:
                  'Vs = Vp * (Ns / Np) = 240 V * (50 / 500) = 240 * 0.1 = 24 V AC.',
                explanationPa:
                  'Vs = 240 * (50 / 500) = 24 ਵੋਲਟ AC।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Transformer Current',
                promptEn: 'If an ideal step-down transformer steps down voltage by a factor of 10:1, what happens to the output current relative to input current?',
                promptPa: 'ਜੇਕਰ ਕੋਈ ਟ੍ਰਾਂਸਫਾਰਮਰ ਵੋਲਟੇਜ ਨੂੰ 10 ਗੁਣਾ ਘਟਾਉਂਦਾ ਹੈ, ਤਾਂ ਆਊਟਪੁੱਟ ਕਰੰਟ ਤੇ ਕੀ ਅਸਰ ਪੈਂਦਾ ਹੈ?',
                optionsJson: [
                  'Current increases by a factor of 10 (Ip * 10)',
                  'Current decreases by a factor of 10',
                  'Current stays exactly the same',
                  'Current drops to zero',
                ],
                correctAnswer: 'Current increases by a factor of 10 (Ip * 10)',
                explanationEn:
                  'Conservation of power: Pin = Pout (Vp * Ip = Vs * Is). If voltage drops by 10x, current must increase by 10x.',
                explanationPa:
                  'ਪਾਵਰ ਬਰਾਬਰ ਰੱਖਣ ਲਈ (V * I), ਜੇਕਰ ਵੋਲਟੇਜ 10 ਗੁਣਾ ਘਟੇਗੀ ਤਾਂ ਕਰੰਟ 10 ਗੁਣਾ ਵਧ ਜਾਵੇਗਾ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Capacitor Chemistry',
                promptEn: 'Which capacitor dielectric type provides zero capacitance loss under high DC bias voltage and the lowest distortion for high-fidelity audio?',
                promptPa: 'ਕਿਹੜੇ ਕੈਪਸੀਟਰ ਵਿੱਚ ਹਾਈ DC ਵੋਲਟੇਜ ਉੱਤੇ ਵੀ ਸਮਰੱਥਾ ਘੱਟ ਨਹੀਂ ਹੁੰਦੀ ਅਤੇ ਆਡੀਓ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ?',
                optionsJson: [
                  'Polypropylene Film / C0G (NP0) Ceramic',
                  'X5R Class 2 Ceramic',
                  'Standard Aluminum Electrolytic',
                  'Semiconductor Varactor',
                ],
                correctAnswer: 'Polypropylene Film / C0G (NP0) Ceramic',
                explanationEn:
                  'C0G/NP0 Class 1 ceramic and Polypropylene film have virtually zero piezoelectric microphonics and zero DC voltage coefficient.',
                explanationPa:
                  'C0G (NP0) ਸਿਰੈਮਿਕ ਅਤੇ ਫਿਲਮ ਕੈਪਸੀਟਰਾਂ ਵਿੱਚ ਕੋਈ ਵੋਲਟੇਜ ਨੁਕਸਾਨ ਨਹੀਂ ਹੁੰਦਾ ਅਤੇ ਇਹ ਸਾਫ਼ ਆਵਾਜ਼ ਦਿੰਦੇ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'RLC Resonance',
                promptEn: 'What is the condition for resonance in a series RLC circuit?',
                promptPa: 'ਸੀਰੀਜ਼ RLC ਸਰਕਟ ਵਿੱਚ ਰੈਜ਼ੋਨੈਂਸ (Resonance) ਕਦੋਂ ਹੁੰਦੀ ਹੈ?',
                optionsJson: [
                  'Inductive reactance equals capacitive reactance (XL = XC)',
                  'Resistance equals zero',
                  'Capacitive reactance is twice inductive reactance',
                  'Frequency is zero Hertz (DC)',
                ],
                correctAnswer: 'Inductive reactance equals capacitive reactance (XL = XC)',
                explanationEn:
                  'At resonance, XL = XC, canceling each other completely in complex impedance (jXL - jXC = 0), leaving only pure resistance R.',
                explanationPa:
                  'ਜਦੋਂ ਇੰਡਕਟਿਵ ਰਿਐਕਟੈਂਸ ਅਤੇ ਕੈਪੈਸਿਟਿਵ ਰਿਐਕਟੈਂਸ ਬਿਲਕੁਲ ਬਰਾਬਰ ਹੋ ਜਾਣ (XL = XC)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Series Resonance Impedance',
                promptEn: 'At the exact resonant frequency, what is the total impedance of a series RLC circuit with R = 50 Ω, L = 10 mH, and C = 10 µF?',
                promptPa: 'ਰੈਜ਼ੋਨੈਂਟ ਫ੍ਰੀਕੁਐਂਸੀ ਉੱਤੇ R = 50 Ω ਵਾਲੇ ਸੀਰੀਜ਼ RLC ਸਰਕਟ ਦੀ ਕੁੱਲ ਰੁਕਾਵਟ (ਇੰਪੀਡੈਂਸ) ਕਿੰਨੀ ਹੋਵੇਗੀ?',
                optionsJson: ['50 Ω (purely resistive)', '0 Ω', '100 Ω', 'Infinity'],
                correctAnswer: '50 Ω (purely resistive)',
                explanationEn:
                  'Since XL cancels XC at resonance, Z = R + j(XL - XC) = R + j0 = 50 Ω.',
                explanationPa:
                  'ਕਿਉਂਕਿ XL ਅਤੇ XC ਇੱਕ ਦੂਜੇ ਨੂੰ ਰੱਦ ਕਰ ਦਿੰਦੇ ਹਨ, ਕੁੱਲ ਰੁਕਾਵਟ ਸਿਰਫ਼ ਰਜਿਸਟੈਂਸ R (50 Ω) ਰਹਿ ਜਾਂਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Quality Factor Q',
                promptEn: 'What does a high Quality Factor (Q) indicate in an RF bandpass filter?',
                promptPa: 'RF ਬੈਂਡਪਾਸ ਫਿਲਟਰ ਵਿੱਚ ਉੱਚੇ Quality Factor (Q) ਦਾ ਕੀ ਮਤਲਬ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'Narrow bandwidth and sharp frequency selectivity',
                  'Wide bandwidth and sluggish response',
                  'High power loss and heat dissipation',
                  'Lower circuit cost',
                ],
                correctAnswer: 'Narrow bandwidth and sharp frequency selectivity',
                explanationEn:
                  'Bandwidth BW = f0 / Q. A higher Q narrows the passband, rejecting adjacent radio station channels with extreme sharpness.',
                explanationPa:
                  'ਉੱਚੇ Q ਫੈਕਟਰ ਦਾ ਮਤਲਬ ਬਹੁਤ ਤੰਗ ਬੈਂਡਵਿਡਥ ਹੈ, ਜੋ ਨਾਲ ਵਾਲੇ ਸਟੇਸ਼ਨਾਂ ਦਾ ਰੌਲਾ ਕੱਟ ਕੇ ਸਿਰਫ਼ ਤੁਹਾਡਾ ਚੁਣਿਆ ਸਟੇਸ਼ਨ ਫੜਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Electrolytic Safety',
                promptEn: 'Why do aluminum electrolytic capacitors have stamped score lines (a cross or K-shape vent) on the top of their aluminum cans?',
                promptPa: 'ਇਲੈਕਟ੍ਰੋਲਾਈਟਿਕ ਕੈਪਸੀਟਰ ਦੇ ਸਿਰੇ ਉੱਤੇ ਕਾਟੇ (X ਜਾਂ K ਮਾਰਕਾ) ਦਾ ਨਿਸ਼ਾਨ ਕਿਉਂ ਬਣਿਆ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'A safety pressure relief vent designed to open safely without explosive fragmentation during catastrophic overpressure',
                  'To indicate positive polarity',
                  'To aid heat dissipation like a heat sink',
                  'A robotic assembly grip mark',
                ],
                correctAnswer: 'A safety pressure relief vent designed to open safely without explosive fragmentation during catastrophic overpressure',
                explanationEn:
                  'If reverse voltage or overvoltage boils the internal electrolyte into gas, the score line splits open safely rather than turning the metal can into shrapnel.',
                explanationPa:
                  'ਇਹ ਸੁਰੱਖਿਆ ਵਾਲਵ ਹੈ। ਜੇਕਰ ਕੈਪਸੀਟਰ ਵਿੱਚ ਗੈਸ ਬਣ ਜਾਵੇ ਤਾਂ ਕੈਪਸੀਟਰ ਬੰਬ ਵਾਂਗ ਫਟਣ ਦੀ ਬਜਾਏ ਇਸ ਨਿਸ਼ਾਨ ਤੋਂ ਹੌਲੀ ਦੇਣੇ ਖੁੱਲ੍ਹ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Relay Coils',
                promptEn: 'What type of component must ALWAYS be placed in reverse-parallel across a DC electromechanical relay coil to protect the driving transistor?',
                promptPa: 'ਰਿਲੇਅ ਕੁਆਇਲ ਨੂੰ ਬੰਦ ਕਰਦੇ ਸਮੇਂ ਟ੍ਰਾਂਜਿਸਟਰ ਨੂੰ ਸੜਨ ਤੋਂ ਬਚਾਉਣ ਲਈ ਕੁਆਇਲ ਦੇ ਸਮਾਨਾਂਤਰ ਕਿਹੜਾ ਪੁਰਜ਼ਾ ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ?',
                optionsJson: [
                  'Flyback diode (freewheeling diode)',
                  'Electrolytic capacitor',
                  'Zener diode facing forward',
                  'Step-up transformer',
                ],
                correctAnswer: 'Flyback diode (freewheeling diode)',
                explanationEn:
                  'When current is interrupted, inductive back-EMF (v = -L di/dt) attempts to maintain current. The flyback diode safely circulates this inductive energy until dissipated.',
                explanationPa:
                  'ਫਲਾਈਬੈਕ ਡਾਇਓਡ (Flyback Diode) ਇੰਡਕਟਰ ਦੇ ਹਾਈ ਵੋਲਟੇਜ ਝਟਕੇ ਨੂੰ ਰਿਲੇਅ ਦੇ ਅੰਦਰ ਹੀ ਖ਼ਤਮ ਕਰ ਦਿੰਦਾ ਹੈ ਅਤੇ ਟ੍ਰਾਂਜਿਸਟਰ ਨੂੰ ਬਚਾਉਂਦਾ ਹੈ।',
              },
            ],
          },
        },
      ],
    },
  ],
};
