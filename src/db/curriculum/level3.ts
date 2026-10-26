import { SeedCourse } from './types.ts';

export const LEVEL_3_COURSE: SeedCourse = {
  slug: 'level-3-semiconductor-devices',
  levelNumber: 3,
  titleEn: 'Level 3: Semiconductor Devices',
  titlePa: 'ਲੈਵਲ 3: ਸੈਮੀਕੰਡਕਟਰ ਯੰਤਰ (Semiconductor Devices)',
  descriptionEn:
    'Semiconductor physics, doping, PN junctions, rectifiers, Schottky, Zener, LEDs, optocouplers, BJTs, MOSFETs, IGBTs, thyristors, datasheets, and failure modes.',
  descriptionPa:
    'ਸੈਮੀਕੰਡਕਟਰ ਭੌਤਿਕ ਵਿਗਿਆਨ, ਡੋਪਿੰਗ, PN ਜੰਕਸ਼ਨ, ਡਾਇਓਡ, ਸ਼ੌਟਕੀ, ਜ਼ੀਨਰ, LED, ਆਪਟੋਕਪਲਰ, BJT ਟ੍ਰਾਂਜਿਸਟਰ, MOSFET, IGBT, ਥਾਇਰਿਸਟਰ ਅਤੇ ਥਰਮਲ ਪ੍ਰਬੰਧਨ।',
  category: 'core-electronics',
  estimatedHours: 16,
  modules: [
    {
      orderIndex: 1,
      titleEn: 'Diodes, Rectification, Zener Regulators & Optoelectronics',
      titlePa: 'ਡਾਇਓਡ, ਰੈਕਟੀਫਾਇਰ, ਜ਼ੀਨਰ ਰੈਗੂਲੇਟਰ ਅਤੇ ਆਪਟੋ-ਇਲੈਕਟ੍ਰਾਨਿਕਸ',
      summaryEn:
        'Intrinsic and extrinsic silicon, PN junction depletion layer, Schottky vs PN diodes, full-wave bridge rectification, Zener shunt regulators, LEDs, and optocouplers.',
      summaryPa:
        'ਸਿਲੀਕਾਨ ਭੌਤਿਕ ਵਿਗਿਆਨ, PN ਜੰਕਸ਼ਨ, ਸ਼ੌਟਕੀ ਡਾਇਓਡ, ਬ੍ਰਿਜ ਰੈਕਟੀਫਾਇਰ, ਜ਼ੀਨਰ ਵੋਲਟੇਜ ਰੈਗੂਲੇਟਰ, LED ਅਤੇ ਆਪਟੋਕਪਲਰ।',
      lessons: [
        {
          slug: 'semiconductor-physics-diodes-rectifiers-optocouplers',
          orderIndex: 1,
          titleEn: '3.1 Semiconductor Physics, Diodes, Bridge Rectifiers & Optocouplers',
          titlePa: '3.1 ਸੈਮੀਕੰਡਕਟਰ ਭੌਤਿਕ ਵਿਗਿਆਨ, ਡਾਇਓਡ, ਬ੍ਰਿਜ ਰੈਕਟੀਫਾਇਰ ਅਤੇ ਆਪਟੋਕਪਲਰ',
          objectivesJson: [
            'Explain intrinsic silicon crystal lattice, covalent bonds, and extrinsic P-type (trivalent Boron) and N-type (pentavalent Phosphorus) doping',
            'Model PN junction dynamics: majority/minority carriers, depletion width, barrier potential (0.7V for Si, 0.3V for Ge/Schottky)',
            'Design full-wave bridge rectifiers calculating Peak Inverse Voltage (PIV = Vpk - Vf) and output DC voltage',
            'Size current-limiting resistors for LEDs and calculate Zener shunt regulators and optocoupler galvanic isolation barriers',
          ],
          prerequisitesJson: ['Level 1: Electrical Fundamentals (Ohm’s law and DC/AC voltages)'],
          childAnalogyEn:
            'Think of a one-way revolving door at the Golden Temple or an airport! People can easily walk forward into the complex, but if someone tries to run backward through the door, it locks shut tight! A Diode is an electrical one-way door: current flows freely forward, but is blocked completely when pushed backward. An Optocoupler is like sending secret messages across a river using flashlight flashes—no wire touches the other side, so lightning on one bank cannot harm the other!',
          childAnalogyPa:
            'ਦਰਬਾਰ ਸਾਹਿਬ ਜਾਂ ਹਵਾਈ ਅੱਡੇ ਦੇ ਵਨ-ਵੇਅ (One-Way) ਘੁੰਮਣ ਵਾਲੇ ਗੇਟ ਦੀ ਕਲਪਨਾ ਕਰੋ! ਲੋਕ ਅੰਦਰ ਤਾਂ ਆਸਾਨੀ ਨਾਲ ਆ ਸਕਦੇ ਹਨ, ਪਰ ਪੁੱਠੇ ਪਾਸੇ ਨਹੀਂ ਜਾ ਸਕਦੇ ਕਿਉਂਕਿ ਗੇਟ ਲਾਕ ਹੋ ਜਾਂਦਾ ਹੈ! ਡਾਇਓਡ ਬਿਜਲੀ ਦਾ ਇੱਕ-ਪਾਸੜ ਗੇਟ ਹੈ: ਕਰੰਟ ਨੂੰ ਸਿੱਧਾ ਲੰਘਣ ਦਿੰਦਾ ਹੈ, ਪਰ ਪੁੱਠਾ ਵਗਣ ਤੋਂ ਬਿਲਕੁਲ ਰੋਕ ਦਿੰਦਾ ਹੈ। ਆਪਟੋਕਪਲਰ ਨਦੀ ਦੇ ਆਰ-ਪਾਰ ਟਾਰਚ ਨਾਲ ਇਸ਼ਾਰਾ ਕਰਨ ਵਾਂਗ ਹੈ—ਬਿਨਾਂ ਕੋਈ ਤਾਰ ਜੋੜੇ ਸਿਗਨਲ ਚਲਾ ਜਾਂਦਾ ਹੈ ਅਤੇ ਹਾਈ ਵੋਲਟੇਜ ਦਾ ਖ਼ਤਰਾ ਰੱਦ ਹੋ ਜਾਂਦਾ ਹੈ!',
          technicalExplanationEn:
            'Semiconductor physics governs all modern microelectronics:\n\n1. Silicon Crystal & Doping:\nPure silicon (intrinsic) has 4 valence electrons forming covalent tetrahedral bonds:\n• N-type Doping: Doped with pentavalent donor atoms (Phosphorus, Arsenic) adding free conduction band electrons.\n• P-type Doping: Doped with trivalent acceptor atoms (Boron, Gallium) creating positive holes (missing valence electrons).\n\n2. PN Junction & Depletion Region:\nDiffusion of electrons into P-side and holes into N-side creates uncompensated fixed ionic charges, creating a built-in electric field (Barrier potential: ~0.7V for Silicon, ~0.3V for Germanium and Schottky).\n• Forward Bias: Positive on Anode collapses barrier, exponential current flows: I = I_s * [exp(V_D / (n*V_T)) - 1].\n• Reverse Bias: Widens depletion region; only minute nanoamp leakage current (I_s) flows until avalanche or Zener breakdown.\n\n3. Diode Types:\n• Schottky Barrier: Metal-silicon junction (zero minority carrier storage time, ~0.2V-0.3V forward drop, ultrafast reverse recovery).\n• Zener Diode: Heavily doped PN junction designed to conduct reversibly in reverse breakdown at a fixed voltage V_Z.\n• TVS Diode (Transient Voltage Suppressor): Silicon p-n junction clamp designed to absorb massive ESD spikes (thousands of Watts in nanoseconds).\n• Bridge Rectifier: 4 diodes in full-wave bridge. DC output V_dc(peak) = V_ac(peak) - 2 * V_f.\n• Optocoupler (e.g. PC817): Infrared LED optically coupled to a phototransistor. Galvanic isolation up to 5,000 V_rms.',
          technicalExplanationPa:
            'ਸੈਮੀਕੰਡਕਟਰ ਵਿਗਿਆਨ ਅਤੇ ਡਾਇਓਡ ਦੇ ਅਸੂਲ:\n\n1. ਸਿਲੀਕਾਨ ਅਤੇ ਡੋਪਿੰਗ:\nਸਿਲੀਕਾਨ ਦੇ ਆਖਰੀ ਚੱਕਰ ਵਿੱਚ 4 ਇਲੈਕਟ੍ਰਾਨ ਹੁੰਦੇ ਹਨ:\n• N-ਟਾਈਪ: ਫਾਸਫੋਰਸ ਮਿਲਾਉਣ ਨਾਲ ਵਾਧੂ ਮੁਫ਼ਤ ਇਲੈਕਟ੍ਰਾਨ ਮਿਲਦੇ ਹਨ।\n• P-ਟਾਈਪ: ਬੋਰੋਨ ਮਿਲਾਉਣ ਨਾਲ ਹੋਲ (Holes - ਖ਼ਾਲੀ ਥਾਵਾਂ) ਬਣਦੀਆਂ ਹਨ।\n\n2. PN ਜੰਕਸ਼ਨ (ਡਾਇਓਡ):\nਜਦੋਂ P ਅਤੇ N ਨੂੰ ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਵਿਚਕਾਰ ਇੱਕ ਡਿਪਲੀਸ਼ਨ ਪਰਤ (Depletion Layer) ਬਣਦੀ ਹੈ ਜਿਸਨੂੰ ਪਾਰ ਕਰਨ ਲਈ ਸਿਲੀਕਾਨ ਵਿੱਚ 0.7 ਵੋਲਟ ਚਾਹੀਦੇ ਹਨ।\n• ਫਾਰਵਰਡ ਬਾਇਸ: ਐਨੋਡ ਤੇ ਪਾਜ਼ਿਟਿਵ ਦੇਣ ਨਾਲ ਕਰੰਟ ਵਗਦਾ ਹੈ।\n• ਰਿਵਰਸ ਬਾਇਸ: ਕਰੰਟ ਰੁਕ ਜਾਂਦਾ ਹੈ।\n\n3. ਖਾਸ ਡਾਇਓਡ:\n• ਜ਼ੀਨਰ ਡਾਇਓਡ (Zener Diode): ਪੁੱਠੀ ਦਿਸ਼ਾ ਵਿੱਚ ਵੀ ਇੱਕ ਸਥਿਰ ਵੋਲਟੇਜ (ਜਿਵੇਂ 5.1V) ਬਣਾਈ ਰੱਖਦਾ ਹੈ।\n• ਸ਼ੌਟਕੀ ਡਾਇਓਡ (Schottky): ਬਹੁਤ ਤੇਜ਼ੀ ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ ਵੋਲਟੇਜ ਸਿਰਫ਼ 0.3V ਖਾਂਦਾ ਹੈ।\n• ਆਪਟੋਕਪਲਰ (Optocoupler): LED ਅਤੇ ਫੋਟੋਟ੍ਰਾਂਜਿਸਟਰ ਦਾ ਸੁਮੇਲ ਜੋ ਦੋ ਸਰਕਟਾਂ ਵਿਚਕਾਰ 5000 ਵੋਲਟ ਤੱਕ ਦਾ ਸੁਰੱਖਿਅਤ ਪਰਦਾ ਰੱਖਦਾ ਹੈ।',
          practicalExampleEn:
            'Designing an indicator LED from a 12V automotive battery: A blue LED has a typical forward voltage Vf = 3.2 V and requires a forward current If = 20 mA. The current-limiting series resistor is calculated as: R = (Vcc - Vf) / If = (12 V - 3.2 V) / 0.020 A = 8.8 V / 0.02 A = 440 Ω. Standard E24 value is 470 Ω. Resistor power: P = I^2 * R = (0.02)^2 * 470 = 0.188 Watts, so a standard 1/4W resistor operates safely.',
          practicalExamplePa:
            'ਕਾਰ ਦੀ 12V ਬੈਟਰੀ ਉੱਤੇ ਬਲੂ LED ਲਗਾਉਣਾ: ਬਲੂ LED 3.2V ਖਾਂਦੀ ਹੈ ਅਤੇ ਇਸਨੂੰ 20 mA (0.02 A) ਕਰੰਟ ਚਾਹੀਦਾ ਹੈ। ਜੇਕਰ ਸਿੱਧੀ 12V ਲਗਾ ਦਿੱਤੀ ਜਾਵੇ ਤਾਂ LED ਇੱਕ ਸੈਕਿੰਡ ਵਿੱਚ ਸੜ ਜਾਵੇਗੀ। ਇਸ ਲਈ ਸੀਰੀਜ਼ ਰਜਿਸਟਰ: R = (12V - 3.2V) / 0.02A = 8.8V / 0.02A = 440 Ω ਚਾਹੀਦਾ ਹੈ। ਮਾਰਕੀਟ ਵਿੱਚੋਂ 470 Ω ਦਾ ਰਜਿਸਟਰ ਚੁਣਿਆ ਜਾਵੇਗਾ, ਜੋ 0.19 ਵਾਟ ਗਰਮੀ ਪੈਦਾ ਕਰੇਗਾ, ਇਸ ਲਈ 1/4 ਵਾਟ ਦਾ ਰਜਿਸਟਰ ਬਿਲਕੁਲ ਠੀਕ ਕੰਮ ਕਰੇਗਾ।',
          codeDemo: `// TypeScript: Diode Current & Zener Shunt Regulator Simulator
export function calcShockleyDiodeCurrent(vDiode: number, isAmps = 1e-12, ideality = 1.0, tempKelvin = 300) {
  const k = 1.380649e-23; // Boltzmann constant
  const q = 1.60217663e-19; // Elementary charge
  const vt = (k * tempKelvin) / q; // Thermal voltage (~25.86 mV at 300K)

  if (vDiode < -5 * vt) return -isAmps; // Reverse saturation limit
  return isAmps * (Math.exp(vDiode / (ideality * vt)) - 1);
}

export function designZenerShuntRegulator(vInputMin: number, vZener: number, iLoadMax: number, iZenerMin = 0.005) {
  // R_series must supply enough current at minimum input voltage
  const iTotal = iLoadMax + iZenerMin;
  const rSeriesMax = (vInputMin - vZener) / iTotal;
  const powerZenerUnloaded = ((vInputMin - vZener) / rSeriesMax) * vZener;

  return {
    maxSeriesResistorOhms: rSeriesMax,
    requiredZenerPowerRatingWatts: powerZenerUnloaded * 1.5, // 50% safety margin
  };
}

// Verification: 12V min in, 5.1V Zener out, 50mA load:
const zener = designZenerShuntRegulator(12, 5.1, 0.050);
console.log('Max Series R:', zener.maxSeriesResistorOhms.toFixed(1), 'Ω'); // ~125.5 Ω`,
          misconceptionsJson: [
            {
              myth: 'Silicon diodes drop exactly 0.700 Volts at all operating currents.',
              truthEn:
                'The 0.7V forward drop is merely a convenient rule of thumb. According to the Shockley equation, a 1N4007 drops around 0.55V at 1 mA, 0.72V at 100 mA, and over 1.0V at 1 Ampere.',
              truthPa:
                '0.7V ਸਿਰਫ਼ ਇੱਕ ਅੰਦਾਜ਼ਾ ਹੈ। ਸ਼ੌਕਲੇ ਸਮੀਕਰਨ ਅਨੁਸਾਰ ਘੱਟ ਕਰੰਟ (1 mA) ਤੇ ਡਾਇਓਡ 0.55V ਖਾਂਦਾ ਹੈ, ਅਤੇ 1 ਐਂਪੀਅਰ ਤੇ ਇਹ 1.0 ਵੋਲਟ ਤੋਂ ਵੀ ਵੱਧ ਖਾਂਦਾ ਹੈ।',
            },
            {
              myth: 'A bridge rectifier converts AC into a pure, perfectly flat DC voltage without any extra components.',
              truthEn:
                'A bridge rectifier only produces pulsating rectified DC (pulsating sine humps from 0V to peak). Large smoothing capacitors and linear/switching regulators are mandatory to produce smooth DC.',
              truthPa:
                'ਬ੍ਰਿਜ ਰੈਕਟੀਫਾਇਰ ਸਿਰਫ਼ ਪੁੱਠੀ ਵੇਵ ਨੂੰ ਸਿੱਧੀ ਕਰਦਾ ਹੈ, ਪਰ ਵੋਲਟੇਜ ਅਜੇ ਵੀ 0 ਤੋਂ 325V ਵਿਚਕਾਰ ਕੰਬਦੀ ਰਹਿੰਦੀ ਹੈ। ਇਸਨੂੰ ਸਿੱਧਾ ਕਰਨ ਲਈ ਕੈਪਸੀਟਰ ਫਿਲਟਰ ਜ਼ਰੂਰੀ ਹੈ।',
            },
            {
              myth: 'Schottky diodes can directly replace standard silicon rectifiers in all high-voltage circuits.',
              truthEn:
                'Schottky diodes have significantly lower reverse breakdown voltages (rarely exceeding 100V-200V) and much higher reverse leakage currents that increase dramatically with temperature, risking thermal runaway.',
              truthPa:
                'ਸ਼ੌਟਕੀ ਡਾਇਓਡ ਹਾਈ ਵੋਲਟੇਜ (230V mains) ਵਿੱਚ ਨਹੀਂ ਲਗਾਏ ਜਾ ਸਕਦੇ ਕਿਉਂਕਿ ਇਹਨਾਂ ਦੀ ਰਿਵਰਸ ਵੋਲਟੇਜ ਸਮਰੱਥਾ ਘੱਟ ਹੁੰਦੀ ਹੈ ਅਤੇ ਇਹ ਗਰਮ ਹੋ ਕੇ ਲੀਕ ਕਰਨ ਲੱਗ ਪੈਂਦੇ ਹਨ।',
            },
          ],
          terminologyJson: [
            {
              term: 'PN Junction',
              punjabi: 'PN ਜੰਕਸ਼ਨ',
              meaningEn: 'Boundary interface between P-type and N-type semiconductor material in a single crystal.',
              meaningPa: 'ਇੱਕੋ ਸਿਲੀਕਾਨ ਚਿੱਪ ਵਿੱਚ P-ਕਿਸਮ ਅਤੇ N-ਕਿਸਮ ਦੇ ਪਦਾਰਥ ਦਾ ਮੇਲ।',
            },
            {
              term: 'Barrier Potential',
              punjabi: 'ਬੈਰੀਅਰ ਪੋਟੈਂਸ਼ੀਅਲ',
              meaningEn: 'Internal built-in electrostatic voltage that prevents further majority charge carrier diffusion (0.7V in Si).',
              meaningPa: 'ਡਾਇਓਡ ਦੇ ਅੰਦਰਲਾ ਬਿਜਲਈ ਦਬਾਅ ਜਿਸਨੂੰ ਤੋੜ ਕੇ ਕਰੰਟ ਲੰਘਦਾ ਹੈ।',
            },
            {
              term: 'PIV (Peak Inverse Voltage)',
              punjabi: 'ਪੀਕ ਇਨਵਰਸ ਵੋਲਟੇਜ (PIV)',
              meaningEn: 'Maximum reverse voltage a diode can withstand without entering catastrophic breakdown.',
              meaningPa: 'ਪੁੱਠੀ ਦਿਸ਼ਾ ਵਿੱਚ ਵੱਧ ਤੋਂ ਵੱਧ ਵੋਲਟੇਜ ਜੋ ਡਾਇਓਡ ਬਿਨਾਂ ਸੜੇ ਸਹਿਣ ਕਰ ਸਕਦਾ ਹੈ।',
            },
            {
              term: 'Zener Breakdown',
              punjabi: 'ਜ਼ੀਨਰ ਬ੍ਰੇਕਡਾਊਨ',
              meaningEn: 'Quantum mechanical tunneling of electrons across a narrow depletion zone under high reverse electric field.',
              meaningPa: 'ਹਾਈ ਰਿਵਰਸ ਵੋਲਟੇਜ ਉੱਤੇ ਇਲੈਕਟ੍ਰਾਨਾਂ ਦਾ ਸੁਰੰਗ ਵਾਂਗ ਲੰਘ ਕੇ ਸਥਿਰ ਵੋਲਟੇਜ ਬਣਾਉਣਾ।',
            },
            {
              term: 'Optocoupler',
              punjabi: 'ਆਪਟੋਕਪਲਰ',
              meaningEn: 'Galvanically isolated semiconductor device transmitting signals optically between an LED and photodetector.',
              meaningPa: 'ਚਾਨਣ ਰਾਹੀਂ ਸਿਗਨਲ ਭੇਜਣ ਵਾਲਾ ਯੰਤਰ ਜੋ ਹਾਈ-ਵੋਲਟੇਜ ਝਟਕੇ ਨੂੰ ਰੋਕਦਾ ਹੈ।',
            },
            {
              term: 'Schottky Diode',
              punjabi: 'ਸ਼ੌਟਕੀ ਡਾਇਓਡ',
              meaningEn: 'Metal-to-semiconductor diode with ultra-low forward voltage drop (~0.3V) and nanosecond switching speed.',
              meaningPa: 'ਧਾਤੂ ਅਤੇ ਸਿਲੀਕਾਨ ਦਾ ਬਣਿਆ ਤੇਜ਼ ਡਾਇਓਡ ਜੋ ਬਹੁਤ ਘੱਟ ਵੋਲਟੇਜ ਖਾਂਦਾ ਹੈ।',
            },
          ],
          interactiveLabId: 'transistor-switch',
          exercisePromptEn:
            'Circuit Analysis: (1) A full-wave bridge rectifier is fed by a 12 V RMS transformer secondary. Assuming each silicon diode drops 0.7 V, calculate the peak DC voltage across the smoothing capacitor. (2) Calculate the PIV rating required for each diode in this bridge.',
          exercisePromptPa:
            'ਸਰਕਟ ਹੱਲ ਕਰੋ: (1) ਇੱਕ ਬ੍ਰਿਜ ਰੈਕਟੀਫਾਇਰ ਨੂੰ 12V RMS ਟ੍ਰਾਂਸਫਾਰਮਰ ਨਾਲ ਜੋੜਿਆ ਗਿਆ ਹੈ। 0.7V ਡਾਇਓਡ ਡ੍ਰੌਪ ਮੰਨਦੇ ਹੋਏ ਕੈਪਸੀਟਰ ਉੱਤੇ ਪੀਕ DC ਵੋਲਟੇਜ ਕੱਢੋ। (2) ਇਸ ਸਰਕਟ ਵਿੱਚ ਹਰ ਡਾਇਓਡ ਦੀ PIV ਰੇਟਿੰਗ ਕਿੰਨੀ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ?',
          summaryEn:
            'Semiconductor diodes leverage the quantum mechanics of the PN junction to direct current unidirectionally, clamp dangerous transient spikes, regulate reference voltages, and provide optical galvanic isolation.',
          summaryPa:
            'ਸੈਮੀਕੰਡਕਟਰ ਡਾਇਓਡ PN ਜੰਕਸ਼ਨ ਦੇ ਨਿਯਮਾਂ ਰਾਹੀਂ ਕਰੰਟ ਨੂੰ ਇੱਕੋ ਪਾਸੇ ਤੋਰਦੇ ਹਨ, ਵੋਲਟੇਜ ਕੰਟਰੋਲ ਕਰਦੇ ਹਨ ਅਤੇ ਆਪਟੋਕਪਲਰ ਰਾਹੀਂ ਸੰਵੇਦਨਸ਼ੀਲ ਸਰਕਟਾਂ ਨੂੰ ਬਚਾਉਂਦੇ ਹਨ।',
          furtherReadingJson: [
            'Solid State Electronic Devices by Ben G. Streetman & Sanjay Kumar Banerjee',
            'Microelectronic Circuits (8th Edition) by Adel S. Sedra & Kenneth C. Smith',
            'Semiconductor Physics and Devices by Donald A. Neamen',
          ],
          quiz: {
            titleEn: 'Level 3 Assessment: Diodes, Rectifiers & Optoelectronics',
            titlePa: 'ਲੈਵਲ 3 ਟੈਸਟ: ਡਾਇਓਡ, ਰੈਕਟੀਫਾਇਰ ਅਤੇ ਆਪਟੋਕਪਲਰ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'Barrier Potential',
                promptEn: 'What is the typical forward barrier voltage drop of a standard silicon PN junction diode at moderate current?',
                promptPa: 'ਦਰਮਿਆਨੇ ਕਰੰਟ ਉੱਤੇ ਇੱਕ ਆਮ ਸਿਲੀਕਾਨ PN ਜੰਕਸ਼ਨ ਡਾਇਓਡ ਦੀ ਫਾਰਵਰਡ ਵੋਲਟੇਜ ਡ੍ਰੌਪ ਲਗਭਗ ਕਿੰਨੀ ਹੁੰਦੀ ਹੈ?',
                optionsJson: ['0.7 Volts', '0.3 Volts', '1.2 Volts', '0.0 Volts'],
                correctAnswer: '0.7 Volts',
                explanationEn:
                  'Standard silicon diodes exhibit a built-in barrier potential of approximately 0.65 V to 0.75 V at room temperature.',
                explanationPa:
                  'ਸਿਲੀਕਾਨ ਡਾਇਓਡ ਦਾ ਬੈਰੀਅਰ ਪੋਟੈਂਸ਼ੀਅਲ ਲਗਭਗ 0.7 ਵੋਲਟ ਹੁੰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Schottky Diodes',
                promptEn: 'Why are Schottky diodes preferred over standard PN junction diodes in switch-mode power supplies?',
                promptPa: 'ਸਵਿੱਚ ਮੋਡ ਪਾਵਰ ਸਪਲਾਈ (SMPS) ਵਿੱਚ ਆਮ ਡਾਇਓਡ ਦੀ ਥਾਂ ਸ਼ੌਟਕੀ ਡਾਇਓਡ ਕਿਉਂ ਵਰਤੇ ਜਾਂਦੇ ਹਨ?',
                optionsJson: [
                  'Lower forward voltage drop (~0.3V) and virtually zero reverse recovery time',
                  'Higher reverse breakdown voltage above 2000 V',
                  'Zero cost and immunity to all heat',
                  'They do not require heat sinks',
                ],
                correctAnswer: 'Lower forward voltage drop (~0.3V) and virtually zero reverse recovery time',
                explanationEn:
                  'As majority-carrier devices, Schottky diodes have no minority carrier recombination delay, enabling highly efficient multi-hundred kilohertz switching.',
                explanationPa:
                  'ਸ਼ੌਟਕੀ ਡਾਇਓਡ ਸਿਰਫ਼ 0.3V ਵੋਲਟੇਜ ਖਾਂਦੇ ਹਨ ਅਤੇ ਬਹੁਤ ਤੇਜ਼ੀ ਨਾਲ ਆਨ-ਆਫ ਹੁੰਦੇ ਹਨ, ਜਿਸ ਨਾਲ ਪਾਵਰ ਬਚਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Bridge Rectifier',
                promptEn: 'In a full-wave bridge rectifier circuit, how many diodes conduct current simultaneously during each half-cycle of the AC waveform?',
                promptPa: 'ਫੁੱਲ-ਵੇਵ ਬ੍ਰਿਜ ਰੈਕਟੀਫਾਇਰ ਵਿੱਚ AC ਦੇ ਹਰੇਕ ਅੱਧੇ ਚੱਕਰ ਦੌਰਾਨ ਕਿੰਨੇ ਡਾਇਓਡ ਇਕੱਠੇ ਕਰੰਟ ਲੰਘਾਉਂਦੇ ਹਨ?',
                optionsJson: ['Two diodes', 'One diode', 'Four diodes', 'Three diodes'],
                correctAnswer: 'Two diodes',
                explanationEn:
                  'In a bridge rectifier, diodes conduct in pairs: two conduct during the positive half-cycle and the opposite two conduct during the negative half-cycle.',
                explanationPa:
                  'ਬ੍ਰਿਜ ਵਿੱਚ ਡਾਇਓਡ ਜੋੜਿਆਂ ਵਿੱਚ ਕੰਮ ਕਰਦੇ ਹਨ: ਹਰ ਅੱਧੇ ਚੱਕਰ ਵਿੱਚ 2 ਡਾਇਓਡ ਕਰੰਟ ਲੰਘਾਉਂਦੇ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Bridge Rectifier Voltage',
                promptEn: 'A bridge rectifier is fed by a 10 V peak AC transformer secondary. If each diode drops 0.7 V, what is the peak voltage delivered to the load capacitor?',
                promptPa: '10V ਪੀਕ AC ਵਾਲੇ ਬ੍ਰਿਜ ਰੈਕਟੀਫਾਇਰ ਵਿੱਚ (ਹਰੇਕ ਡਾਇਓਡ 0.7V ਖਾਂਦਾ ਹੈ) ਲੋਡ ਕੈਪਸੀਟਰ ਉੱਤੇ ਪੀਕ ਵੋਲਟੇਜ ਕਿੰਨੀ ਮਿਲੇਗੀ?',
                optionsJson: ['8.6 Volts', '9.3 Volts', '10.0 Volts', '7.2 Volts'],
                correctAnswer: '8.6 Volts',
                explanationEn:
                  'Current flows through two series diodes in every half-cycle: Vpeak_dc = Vpeak_ac - 2 * Vf = 10 V - (2 * 0.7 V) = 10 - 1.4 = 8.6 V.',
                explanationPa:
                  'ਦੋ ਡਾਇਓਡ ਹੋਣ ਕਾਰਨ: 10V - (2 * 0.7V) = 10 - 1.4 = 8.6 ਵੋਲਟ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Zener Diode',
                promptEn: 'In which bias region is a Zener diode normally operated when used as a voltage regulator?',
                promptPa: 'ਵੋਲਟੇਜ ਰੈਗੂਲੇਟਰ ਵਜੋਂ ਕੰਮ ਕਰਦੇ ਸਮੇਂ ਜ਼ੀਨਰ ਡਾਇਓਡ ਨੂੰ ਕਿਸ ਬਾਇਸਿੰਗ ਵਿੱਚ ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ?',
                optionsJson: [
                  'Reverse-bias breakdown region',
                  'Forward-bias active region',
                  'Zero-bias equilibrium',
                  'Cut-off region with zero current',
                ],
                correctAnswer: 'Reverse-bias breakdown region',
                explanationEn:
                  'In reverse breakdown, a Zener maintains an almost constant terminal voltage (Vz) across wide variations in current.',
                explanationPa:
                  'ਜ਼ੀਨਰ ਡਾਇਓਡ ਨੂੰ ਪੁੱਠਾ (Reverse Bias) ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ ਜਿੱਥੇ ਇਹ ਵੋਲਟੇਜ ਨੂੰ ਬਿਲਕੁਲ ਸਥਿਰ ਰੱਖਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Optocoupler Isolation',
                promptEn: 'What physically separates the input transmitter and output detector inside an optocoupler IC (e.g. PC817)?',
                promptPa: 'ਆਪਟੋਕਪਲਰ IC (ਜਿਵੇਂ PC817) ਦੇ ਅੰਦਰ ਇਨਪੁਟ ਅਤੇ ਆਊਟਪੁੱਟ ਨੂੰ ਆਪਸ ਵਿੱਚ ਕੀ ਵੱਖ ਕਰਦਾ ਹੈ?',
                optionsJson: [
                  'An optically transparent insulating dielectric barrier (silicone/resin air gap)',
                  'A high-value 10 MΩ metal resistor',
                  'A miniature iron-core transformer',
                  'A germanium diode',
                ],
                correctAnswer: 'An optically transparent insulating dielectric barrier (silicone/resin air gap)',
                explanationEn:
                  'The signal crosses purely via photons of infrared light across a transparent optical silicone barrier with thousands of volts of dielectric insulation.',
                explanationPa:
                  'ਅੰਦਰ ਪਾਰਦਰਸ਼ੀ ਇਨਸੂਲੇਟਿੰਗ ਪਰਦਾ ਹੁੰਦਾ ਹੈ ਜਿਸ ਵਿੱਚੋਂ ਸਿਰਫ਼ ਇਨਫਰਾਰੈੱਡ ਚਾਨਣ ਲੰਘਦਾ ਹੈ, ਕੋਈ ਤਾਰ ਨਹੀਂ ਜੁੜੀ ਹੁੰਦੀ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'LED Resistor Sizing',
                promptEn: 'A red LED (Vf = 1.8 V) is powered from a 5 V microcontroller pin. What resistor is needed for a forward current of 16 mA?',
                promptPa: '5V ਪਿੰਨ ਤੋਂ ਲਾਲ LED (Vf = 1.8V) ਨੂੰ 16 mA ਕਰੰਟ ਉੱਤੇ ਚਲਾਉਣ ਲਈ ਕਿੰਨੇ ਓਹਮ ਦਾ ਰਜਿਸਟਰ ਚਾਹੀਦਾ ਹੈ?',
                optionsJson: ['200 Ω', '312.5 Ω', '100 Ω', '470 Ω'],
                correctAnswer: '200 Ω',
                explanationEn:
                  'R = (Vcc - Vf) / If = (5.0 V - 1.8 V) / 0.016 A = 3.2 V / 0.016 A = 200 Ω.',
                explanationPa:
                  'R = (5.0 - 1.8) / 0.016 = 3.2 / 0.016 = 200 Ω।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Semiconductor Doping',
                promptEn: 'Which dopant element is introduced into silicon crystal to create P-type semiconductor material with excess holes?',
                promptPa: 'ਸਿਲੀਕਾਨ ਵਿੱਚ ਹੋਲ (Holes) ਬਣਾ ਕੇ P-ਟਾਈਪ ਬਣਾਉਣ ਲਈ ਕਿਹੜਾ ਤੱਤ ਮਿਲਾਇਆ ਜਾਂਦਾ ਹੈ?',
                optionsJson: ['Boron (trivalent)', 'Phosphorus (pentavalent)', 'Arsenic', 'Antimony'],
                correctAnswer: 'Boron (trivalent)',
                explanationEn:
                  'Boron has 3 valence electrons (trivalent). When it substitutes for a 4-electron silicon atom, a vacant electron position (hole) is created.',
                explanationPa:
                  'ਬੋਰੋਨ (Boron) ਵਿੱਚ 3 ਇਲੈਕਟ੍ਰਾਨ ਹੁੰਦੇ ਹਨ, ਜੋ ਸਿਲੀਕਾਨ ਵਿੱਚ ਹੋਲ (P-ਟਾਈਪ) ਪੈਦਾ ਕਰਦੇ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'TVS Protection',
                promptEn: 'What is the primary role of a Bidirectional TVS (Transient Voltage Suppressor) diode across an RS-485 or USB data line?',
                promptPa: 'USB ਜਾਂ RS-485 ਡਾਟਾ ਤਾਰਾਂ ਉੱਤੇ ਬਾਈਡਾਇਰੈਕਸ਼ਨਲ TVS ਡਾਇਓਡ ਦਾ ਕੀ ਕੰਮ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'Clamping fast electrostatic discharge (ESD) overvoltage spikes safely to ground',
                  'Converting digital data to analog',
                  'Amplifying the data packet amplitude',
                  'Inverting binary 0 into 1',
                ],
                correctAnswer: 'Clamping fast electrostatic discharge (ESD) overvoltage spikes safely to ground',
                explanationEn:
                  'TVS diodes clamp microsecond high-voltage ESD transients (up to ±15 kV) in picoseconds, safely shunting lethal surge energy to ground.',
                explanationPa:
                  'TVS ਡਾਇਓਡ ਹੱਥ ਲੱਗਣ ਤੇ ਪੈਦਾ ਹੋਣ ਵਾਲੇ ਹਜ਼ਾਰਾਂ ਵੋਲਟ ਦੇ ਸਟੈਟਿਕ ਬਿਜਲੀ ਦੇ ਝਟਕੇ (ESD) ਨੂੰ ਤੁਰੰਤ ਜ਼ਮੀਨ ਵਿੱਚ ਭੇਜ ਕੇ ਚਿੱਪ ਨੂੰ ਬਚਾਉਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Reverse Recovery',
                promptEn: 'What physical mechanism causes standard rectifier diodes (like 1N4007) to fail or overheat when used in high-frequency SMPS power supplies?',
                promptPa: 'ਹਾਈ ਫ੍ਰੀਕੁਐਂਸੀ SMPS ਵਿੱਚ ਆਮ 1N4007 ਡਾਇਓਡ ਲਗਾਉਣ ਤੇ ਉਹ ਕਿਉਂ ਸੜ ਜਾਂਦਾ ਹੈ?',
                optionsJson: [
                  'Long reverse recovery time (trr) caused by stored minority carriers during switching',
                  'The wire leads are too thin',
                  'Lack of sufficient silicon resistance',
                  'It generates excessive magnetic fields',
                ],
                correctAnswer: 'Long reverse recovery time (trr) caused by stored minority carriers during switching',
                explanationEn:
                  'Standard diodes take microseconds to sweep out minority carriers when polarity flips. At 100 kHz, the diode spends significant time conducting backwards under high voltage, generating catastrophic switching heat.',
                explanationPa:
                  'ਆਮ ਡਾਇਓਡ ਵਿੱਚ ਰਿਵਰਸ ਰਿਕਵਰੀ ਸਮਾਂ ਬਹੁਤ ਜ਼ਿਆਦਾ ਹੁੰਦਾ ਹੈ। 100 kHz ਉੱਤੇ ਇਹ ਬੰਦ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਪੁੱਠਾ ਕਰੰਟ ਲੰਘਾਉਣ ਲੱਗ ਪੈਂਦਾ ਹੈ ਅਤੇ ਗਰਮ ਹੋ ਕੇ ਸੜ ਜਾਂਦਾ ਹੈ।',
              },
            ],
          },
        },
        {
          slug: 'transistors-bjts-mosfets-igbts-thyristors',
          orderIndex: 2,
          titleEn: '3.2 BJTs, MOSFETs, IGBTs, Thyristors & Thermal Management',
          titlePa: '3.2 BJT, MOSFET, IGBT, ਥਾਇਰਿਸਟਰ ਅਤੇ ਥਰਮਲ ਪ੍ਰਬੰਧਨ',
          objectivesJson: [
            'Differentiate BJT current-controlled operation (Ic = beta * Ib) from MOSFET voltage-controlled electric field operation (Vgs)',
            'Design saturated BJT transistor switches and logic-level N-channel MOSFET gate drive circuits',
            'Compare MOSFETs vs IGBTs for high-voltage, high-current power conversion and motor drives',
            'Understand thyristors (SCR) and TRIAC phase control for AC dimming and industrial switching',
            'Perform thermal resistance calculations (Tj = Ta + Pd * theta_ja) to select heat sinks',
          ],
          prerequisitesJson: ['3.1 Semiconductor Physics, Diodes, Bridge Rectifiers & Optocouplers'],
          childAnalogyEn:
            'Think of a BJT like a heavy mechanical hand-pump where you must keep pumping your hand continuously (base current) to keep water flowing out the spout. A MOSFET is like an ultra-modern capacitive touch sensor tap: you just touch it once with your finger (apply gate voltage), and water roars out without you expending any continuous physical effort! An IGBT is a hybrid monster with the sensitive touch of a MOSFET and the roaring power of a locomotive engine!',
          childAnalogyPa:
            'BJT ਟ੍ਰਾਂਜਿਸਟਰ ਹੈਂਡਪੰਪ ਦੇ ਗੇੜੇ ਵਾਂਗ ਹੈ ਜਿੱਥੇ ਪਾਣੀ ਕੱਢਣ ਲਈ ਤੁਹਾਨੂੰ ਹੱਥ ਲਗਾਤਾਰ ਹਿਲਾਉਣਾ ਪੈਂਦਾ ਹੈ (ਬੇਸ ਕਰੰਟ ਦੇਣਾ ਪੈਂਦਾ ਹੈ)। MOSFET ਇੱਕ ਆਧੁਨਿਕ ਟੱਚ-ਸੈਂਸਰ ਵਾਲੇ ਨਲਕੇ ਵਾਂਗ ਹੈ: ਸਿਰਫ਼ ਉਂਗਲ ਛੁਹਾਓ (ਗੇਟ ਵੋਲਟੇਜ ਦਿਓ), ਅਤੇ ਪਾਣੀ ਬਿਨਾਂ ਜ਼ੋਰ ਲਗਾਏ ਤੇਜ਼ੀ ਨਾਲ ਵਹਿਣ ਲੱਗ ਪੈਂਦਾ ਹੈ! IGBT ਦੋਹਾਂ ਦਾ ਰਾਜਾ ਹੈ ਜਿਸ ਵਿੱਚ MOSFET ਵਰਗਾ ਆਸਾਨ ਕੰਟਰੋਲ ਅਤੇ ਰੇਲਵੇ ਇੰਜਣ ਜਿੰਨੀ ਵਿਸ਼ਾਲ ਪਾਵਰ ਹੁੰਦੀ ਹੈ!',
          technicalExplanationEn:
            'Transistors and solid-state switches form the core of computing logic and power electronics:\n\n1. Bipolar Junction Transistors (BJT - NPN / PNP):\n• Current-controlled device: Collector current Ic = β * Ib in forward active mode.\n• Modes: Cutoff (Vbe < 0.6V, Ic = 0), Active (linear amplification), Saturation (Vbe ≈ 0.7V, Vce_sat ≈ 0.1V - 0.2V).\n• Saturated Switch Design: Base overdrive ratio (forced beta β_forced = 10 to 20): Ib_sat = Ic_load / β_forced. Rb = (V_in - Vbe) / Ib_sat.\n\n2. Field Effect Transistors (MOSFETs):\n• Voltage-controlled majority-carrier device (N-channel / P-channel):\n  - Gate is insulated by an ultra-thin Silicon Dioxide (SiO2) dielectric (input impedance > 10^12 Ω).\n  - Conduction is modulated by gate-source voltage Vgs relative to threshold Vgs(th).\n  - Linear/Ohmic region: acts as a pure low-value resistor Rds(on) (down to a few milliohms).\n  - Gate Capacitance (Ciss, Qg): Switching speed is limited by charging gate capacitance through gate driver resistance.\n\n3. Insulated Gate Bipolar Transistors (IGBTs):\n• Monolithic combination: MOSFET gate driving a wide-base bipolar output.\n• Extremely high voltage and current ratings (1200V - 6500V, hundreds of Amperes) in electric vehicles and industrial motor inverters.\n\n4. Thyristors (SCR) and TRIACs:\n• SCR (Silicon Controlled Rectifier): 4-layer PNPN latching switch. Once triggered by a gate pulse, it stays latched on until current drops below holding current (Ih).\n• TRIAC: Bidirectional thyristor capable of conducting current in both directions of an AC mains cycle (used in light dimmers and motor speed controllers).\n\n5. Thermal Resistance & Heat Sinks:\n• Junction Temperature: T_j = T_amb + P_d * (θ_jc + θ_cs + θ_sa)\n  where θ_jc is junction-to-case, θ_cs is case-to-heatsink (thermal paste), and θ_sa is heatsink-to-ambient.',
          technicalExplanationPa:
            'ਟ੍ਰਾਂਜਿਸਟਰ ਅਤੇ ਪਾਵਰ ਸਵਿੱਚਾਂ ਦੀ ਵਿਗਿਆਨਕ ਕਾਰਜਪ੍ਰਣਾਲੀ:\n\n1. BJT ਟ੍ਰਾਂਜਿਸਟਰ (NPN / PNP):\nਇਹ ਕਰੰਟ ਨਾਲ ਕੰਟਰੋਲ ਹੁੰਦਾ ਹੈ (Ic = β * Ib)। ਜਦੋਂ ਬੇਸ (Base) ਵਿੱਚ ਨਿੱਕਾ ਕਰੰਟ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਕੁਲੈਕਟਰ ਤੋਂ ਐਮੀਟਰ ਤੱਕ ਵੱਡਾ ਕਰੰਟ ਲੰਘਦਾ ਹੈ। ਸਵਿੱਚ ਬਣਾਉਣ ਲਈ ਬੇਸ ਨੂੰ ਪੂਰਾ ਕਰੰਟ ਦੇ ਕੇ ਸੈਚੁਰੇਸ਼ਨ (Saturation) ਵਿੱਚ ਲਿਆਂਦਾ ਜਾਂਦਾ ਹੈ (Vce ≈ 0.2V)।\n\n2. MOSFET:\nਇਹ ਵੋਲਟੇਜ ਨਾਲ ਕੰਟਰੋਲ ਹੁੰਦਾ ਹੈ। ਇਸਦਾ ਗੇਟ (Gate) ਕੱਚ ਵਰਗੀ ਸਿਲੀਕਾਨ ਆਕਸਾਈਡ ਪਰਤ ਨਾਲ ਅਲੱਗ ਹੁੰਦਾ ਹੈ। ਗੇਟ ਉੱਤੇ ਵੋਲਟੇਜ (Vgs) ਆਉਂਦੇ ਹੀ ਡਰੇਨ ਅਤੇ ਸੋਰਸ ਵਿਚਕਾਰ ਰਜਿਸਟੈਂਸ ਮਿਲੀਓਹਮਾਂ ਵਿੱਚ ਡਿੱਗ ਜਾਂਦੀ ਹੈ (Rds(on))।\n\n3. IGBT:\nਇਹ MOSFET ਦੇ ਗੇਟ ਅਤੇ BJT ਦੇ ਆਊਟਪੁੱਟ ਦਾ ਸੁਮੇਲ ਹੈ, ਜੋ ਇਲੈਕਟ੍ਰਿਕ ਕਾਰਾਂ (EVs) ਅਤੇ ਵੱਡੇ ਇਨਵਰਟਰਾਂ ਵਿੱਚ ਹਜ਼ਾਰਾਂ ਵੋਲਟ ਅਤੇ ਸੈਂਕੜੇ ਐਂਪੀਅਰ ਸੰਭਾਲਦਾ ਹੈ।\n\n4. TRIAC:\nAC ਬਿਜਲੀ ਦੇ ਦੋਵੇਂ ਪਾਸੇ ਕਰੰਟ ਕੰਟਰੋਲ ਕਰਦਾ ਹੈ (ਜਿਵੇਂ ਪੱਖੇ ਦੇ ਇਲੈਕਟ੍ਰਾਨਿਕ ਰੈਗੂਲੇਟਰ ਵਿੱਚ)।\n\n5. ਥਰਮਲ ਮੈਨੇਜਮੈਂਟ:\nਜੇਕਰ ਟ੍ਰਾਂਜਿਸਟਰ 150°C ਤੋਂ ਵੱਧ ਗਰਮ ਹੋ ਜਾਵੇ ਤਾਂ ਇਹ ਸੜ ਜਾਂਦਾ ਹੈ। ਇਸ ਲਈ ਐਲੂਮੀਨੀਅਮ ਦਾ ਹੀਟ ਸਿੰਕ (Heat Sink) ਅਤੇ ਥਰਮਲ ਪੇਸਟ ਲਗਾਈ ਜਾਂਦੀ ਹੈ।',
          practicalExampleEn:
            'Driving a 12V 2A cooling fan with an ESP32 microcontroller (3.3V GPIO): A standard BJT requires too much base current, while a standard MOSFET requires Vgs = 10V to fully turn on. The engineer selects a Logic-Level N-channel MOSFET (e.g., IRLZ44N with Vgs(th) = 1.5V and Rds(on) = 0.025 Ω at 3.3V). Power dissipated in the MOSFET is P = I^2 * Rds(on) = (2 A)^2 * 0.025 Ω = 0.10 Watts. It runs completely cool to the touch without needing any heat sink.',
          practicalExamplePa:
            'ESP32 ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ (3.3V ਪਿੰਨ) ਨਾਲ 12V 2A ਦਾ ਪੱਖਾ ਚਲਾਉਣਾ: ਆਮ MOSFET ਨੂੰ ਪੂਰਾ ਖੁੱਲ੍ਹਣ ਲਈ 10V ਚਾਹੀਦੇ ਹਨ, ਇਸ ਲਈ ਇੰਜੀਨੀਅਰ "Logic-Level" MOSFET (ਜਿਵੇਂ IRLZ44N) ਚੁਣਦਾ ਹੈ ਜੋ 3.3V ਉੱਤੇ ਹੀ ਪੂਰਾ ਆਨ ਹੋ ਜਾਂਦਾ ਹੈ। ਇਸ ਵਿੱਚ ਸਿਰਫ਼ 0.1 ਵਾਟ ਗਰਮੀ ਪੈਦਾ ਹੁੰਦੀ ਹੈ ਅਤੇ ਇਹ ਬਿਨਾਂ ਹੀਟ ਸਿੰਕ ਦੇ ਬਿਲਕੁਲ ਠੰਢਾ ਚੱਲਦਾ ਹੈ।',
          codeDemo: `// TypeScript: BJT Saturated Switch & MOSFET Thermal Junction Calculator
export function designBjtSwitch(vSupply: number, loadCurrentAmps: number, vLogic: number, vCeSat = 0.2, vBe = 0.7, forcedBeta = 10) {
  const iBase = loadCurrentAmps / forcedBeta;
  const rBase = (vLogic - vBe) / iBase;
  const powerTransistor = (vCeSat * loadCurrentAmps) + (vBe * iBase);

  return {
    requiredBaseCurrentAmps: iBase,
    calculatedBaseResistorOhms: rBase,
    transistorPowerDissipationWatts: powerTransistor,
  };
}

export function calcJunctionTemperature(pWatts: number, tAmbient = 35, thetaJunctionCase = 1.5, thetaCaseSink = 0.5, thetaSinkAmbient = 4.0) {
  const totalThermalResistance = thetaJunctionCase + thetaCaseSink + thetaSinkAmbient;
  const tempRise = pWatts * totalThermalResistance;
  const junctionTemp = tAmbient + tempRise;

  return {
    totalThetaJa: totalThermalResistance,
    junctionTempCelsius: junctionTemp,
    isSafe: junctionTemp < 125, // 125C safe threshold
  };
}

// Verification: 2A load driven by 5V logic:
const bjt = designBjtSwitch(12, 2.0, 5.0);
console.log('Base Resistor:', bjt.calculatedBaseResistorOhms.toFixed(1), 'Ω'); // ~21.5 Ω
const thermal = calcJunctionTemperature(15, 35); // 15W on heat sink
console.log('Junction Temp:', thermal.junctionTempCelsius.toFixed(1), '°C'); // 125.0 °C`,
          misconceptionsJson: [
            {
              myth: 'MOSFET gates draw zero current under all conditions because of their insulated oxide gate.',
              truthEn:
                'At DC steady-state, gate leakage is picoamps. However, during high-frequency switching, the gate capacitance (Ciss = several nanofarads) requires rapid charging and discharging, demanding peak currents of 1 to 2 Amperes from a dedicated gate driver IC.',
              truthPa:
                'ਸਥਿਰ ਹਾਲਤ ਵਿੱਚ ਗੇਟ ਕਰੰਟ ਜ਼ੀਰੋ ਹੁੰਦਾ ਹੈ, ਪਰ ਤੇਜ਼ੀ ਨਾਲ ਆਨ-ਆਫ ਕਰਦੇ ਸਮੇਂ ਗੇਟ ਕੈਪਸੀਟਰ ਨੂੰ ਚਾਰਜ ਕਰਨ ਲਈ 1 ਤੋਂ 2 ਐਂਪੀਅਰ ਦਾ ਪੀਕ ਕਰੰਟ ਚਾਹੀਦਾ ਹੁੰਦਾ ਹੈ।',
            },
            {
              myth: 'Any N-channel MOSFET can be turned fully on directly by an Arduino or Raspberry Pi 3.3V pin.',
              truthEn:
                'Standard power MOSFETs (like IRF540) require Vgs = 10V to achieve their rated low Rds(on). At 3.3V, they operate in the linear high-resistance region, dropping volts and rapidly burning out under load. Only "Logic-Level" MOSFETs (IRL series) should be used.',
              truthPa:
                'ਆਮ MOSFET ਨੂੰ ਖੋਲ੍ਹਣ ਲਈ 10 ਵੋਲਟ ਚਾਹੀਦੇ ਹਨ। 3.3V ਦੇਣ ਨਾਲ ਇਹ ਪੂਰਾ ਨਹੀਂ ਖੁੱਲ੍ਹਦਾ, ਗਰਮ ਹੁੰਦਾ ਹੈ ਅਤੇ ਸੜ ਜਾਂਦਾ ਹੈ। ਸਿਰਫ਼ Logic-Level MOSFET ਹੀ 3.3V ਨਾਲ ਚਲਾਏ ਜਾ ਸਕਦੇ ਹਨ।',
            },
            {
              myth: 'Once a thyristor (SCR) is turned on, removing the gate trigger pulse turns it back off.',
              truthEn:
                'An SCR possesses regenerative internal PNPN feedback latching. Once triggered, the gate loses all control; the SCR remains latched on until the main anode-cathode current is externally reduced below its holding current (Ih) or commutated by an AC zero-crossing.',
              truthPa:
                'SCR ਇੱਕ ਵਾਰ ਗੇਟ ਕਰੰਟ ਨਾਲ ਚਾਲੂ ਹੋ ਜਾਵੇ ਤਾਂ ਗੇਟ ਬੰਦ ਕਰਨ ਤੇ ਵੀ ਇਹ ਬੰਦ ਨਹੀਂ ਹੁੰਦਾ! ਇਸਨੂੰ ਬੰਦ ਕਰਨ ਲਈ ਮੇਨ ਕਰੰਟ ਕੱਟਣਾ ਪੈਂਦਾ ਹੈ ਜਾਂ AC ਦੇ ਜ਼ੀਰੋ ਹੋਣ ਦੀ ਉਡੀਕ ਕਰਨੀ ਪੈਂਦੀ ਹੈ।',
            },
          ],
          terminologyJson: [
            {
              term: 'MOSFET',
              punjabi: 'MOSFET',
              meaningEn: 'Metal-Oxide-Semiconductor Field-Effect Transistor; voltage-controlled majority carrier power switch.',
              meaningPa: 'ਵੋਲਟੇਜ ਨਾਲ ਕੰਟਰੋਲ ਹੋਣ ਵਾਲਾ ਤੇਜ਼ ਸੈਮੀਕੰਡਕਟਰ ਸਵਿੱਚ।',
            },
            {
              term: 'Rds(on)',
              punjabi: 'ਡਰੇਨ-ਸੋਰਸ ਆਨ-ਰਜਿਸਟੈਂਸ',
              meaningEn: 'Total internal resistance between drain and source terminals when a MOSFET is fully saturated.',
              meaningPa: 'MOSFET ਪੂਰਾ ਆਨ ਹੋਣ ਤੇ ਅੰਦਰਲੀ ਬਚੀ ਨਿਗੂਣੀ ਰਜਿਸਟੈਂਸ।',
            },
            {
              term: 'IGBT',
              punjabi: 'IGBT',
              meaningEn: 'Insulated Gate Bipolar Transistor; combining insulated voltage gate control with high-current bipolar conduction.',
              meaningPa: 'ਹਾਈ ਵੋਲਟੇਜ ਅਤੇ ਹਾਈ ਕਰੰਟ ਲਈ MOSFET ਅਤੇ BJT ਦਾ ਸ਼ਕਤੀਸ਼ਾਲੀ ਸੁਮੇਲ।',
            },
            {
              term: 'Thermal Resistance (θja)',
              punjabi: 'ਥਰਮਲ ਰਜਿਸਟੈਂਸ',
              meaningEn: 'Opposition to heat flow from semiconductor junction to ambient air, expressed in °C per Watt.',
              meaningPa: 'ਪੁਰਜ਼ੇ ਦੇ ਅੰਦਰੋਂ ਬਾਹਰਲੀ ਹਵਾ ਤੱਕ ਗਰਮੀ ਨਿਕਲਣ ਵਿੱਚ ਆਉਣ ਵਾਲੀ ਰੁਕਾਵਟ (°C/Watt)।',
            },
            {
              term: 'TRIAC',
              punjabi: 'ਟ੍ਰਾਇਕ (TRIAC)',
              meaningEn: 'Three-terminal bidirectional semiconductor switch capable of conducting AC current in either direction.',
              meaningPa: 'ਦੋਵੇਂ ਦਿਸ਼ਾਵਾਂ ਵਿੱਚ AC ਕਰੰਟ ਕੰਟਰੋਲ ਕਰਨ ਵਾਲਾ ਸੈਮੀਕੰਡਕਟਰ ਸਵਿੱਚ।',
            },
            {
              term: 'Thermal Runaway',
              punjabi: 'ਥਰਮਲ ਰਨਅਵੇਅ',
              meaningEn: 'Destructive positive feedback loop where rising temperature increases leakage current, generating more destructive heat.',
              meaningPa: 'ਗਰਮੀ ਵਧਣ ਨਾਲ ਕਰੰਟ ਵਧਣਾ ਅਤੇ ਹੋਰ ਗਰਮੀ ਨਾਲ ਪੁਰਜ਼ੇ ਦਾ ਪਟਾਕਾ ਪੈ ਜਾਣਾ।',
            },
          ],
          interactiveLabId: 'transistor-switch',
          exercisePromptEn:
            'Circuit Calculation: (1) An NPN transistor with beta = 100 switches a 500 mA relay coil from a 5 V microcontroller pin. Using a forced beta of 10 for deep saturation, calculate the required base current and base resistor Rb. (2) A power MOSFET dissipates 8 Watts of heat. If theta_ja = 5 °C/W and ambient temperature is 40 °C, calculate the internal junction temperature Tj.',
          exercisePromptPa:
            'ਗਣਨਾ: (1) 500 mA ਦੀ ਰਿਲੇਅ ਚਲਾਉਣ ਲਈ 5V ਪਿੰਨ ਤੋਂ NPN ਟ੍ਰਾਂਜਿਸਟਰ ਨੂੰ ਸੈਚੁਰੇਟ ਕਰਨ ਲਈ (forced beta = 10) ਬੇਸ ਕਰੰਟ ਅਤੇ ਬੇਸ ਰਜਿਸਟਰ ਕੱਢੋ। (2) ਇੱਕ ਪਾਵਰ MOSFET 8 ਵਾਟ ਗਰਮੀ ਛੱਡਦਾ ਹੈ। 40°C ਤਾਪਮਾਨ ਅਤੇ 5 °C/W ਥਰਮਲ ਰਜਿਸਟੈਂਸ ਉੱਤੇ ਅੰਦਰਲਾ ਜੰਕਸ਼ਨ ਤਾਪਮਾਨ ਪਤਾ ਕਰੋ।',
          summaryEn:
            'Transistors are the building blocks of both digital processors and industrial power converters: BJTs provide current gain, MOSFETs switch multi-ampere loads with minimal gate power, IGBTs conquer kilovolts, and proper thermal heatsinking guarantees long-term reliability.',
          summaryPa:
            'ਟ੍ਰਾਂਜਿਸਟਰ ਕੰਪਿਊਟਰ ਪ੍ਰੋਸੈਸਰਾਂ ਅਤੇ ਇਨਵਰਟਰਾਂ ਦੀ ਨੀਂਹ ਹਨ: BJT ਕਰੰਟ ਵਧਾਉਂਦੇ ਹਨ, MOSFET ਤੇਜ਼ ਸਵਿਚਿੰਗ ਕਰਦੇ ਹਨ, IGBT ਵੱਡੀਆਂ ਮੋਟਰਾਂ ਚਲਾਉਂਦੇ ਹਨ, ਅਤੇ ਹੀਟ ਸਿੰਕ ਉਹਨਾਂ ਨੂੰ ਸੜਨ ਤੋਂ ਬਚਾਉਂਦੇ ਹਨ।',
          furtherReadingJson: [
            'Power Electronics: Converters, Applications, and Design by Ned Mohan, Tore M. Undeland, William P. Robbins',
            'Infineon Technologies IGBT & MOSFET Application Notes',
            'Electronic Devices and Circuit Theory by Robert L. Boylestad & Louis Nashelsky',
          ],
          quiz: {
            titleEn: 'Level 3 Assessment: BJTs, MOSFETs, IGBTs & Thermal Design',
            titlePa: 'ਲੈਵਲ 3 ਟੈਸਟ: ਟ੍ਰਾਂਜਿਸਟਰ, MOSFET, IGBT ਅਤੇ ਥਰਮਲ ਡਿਜ਼ਾਈਨ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'Transistor Control',
                promptEn: 'What is the fundamental difference between the control mechanism of a BJT and a MOSFET?',
                promptPa: 'BJT ਅਤੇ MOSFET ਦੇ ਕੰਟਰੋਲ ਕਰਨ ਦੇ ਤਰੀਕੇ ਵਿੱਚ ਮੁੱਖ ਫ਼ਰਕ ਕੀ ਹੈ?',
                optionsJson: [
                  'BJT is current-controlled (Base current); MOSFET is voltage-controlled (Gate electric field)',
                  'BJT is voltage-controlled; MOSFET is current-controlled',
                  'BJT only conducts AC; MOSFET only conducts DC',
                  'There is no functional difference',
                ],
                correctAnswer: 'BJT is current-controlled (Base current); MOSFET is voltage-controlled (Gate electric field)',
                explanationEn:
                  'A BJT requires continuous base current to sustain collector flow (Ic = beta * Ib). A MOSFET gate is an insulated capacitor controlled purely by voltage (Vgs).',
                explanationPa:
                  'BJT ਬੇਸ ਕਰੰਟ ਨਾਲ ਚਲਦਾ ਹੈ ਜਦਕਿ MOSFET ਗੇਟ ਵੋਲਟੇਜ (ਬਿਜਲਈ ਖੇਤਰ) ਨਾਲ ਚਲਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'MOSFET Logic Level',
                promptEn: 'Why will a standard power MOSFET (like IRF540) fail to work reliably when driven directly by a 3.3V microcontroller pin?',
                promptPa: '3.3V ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਪਿੰਨ ਨਾਲ ਆਮ IRF540 MOSFET ਸਹੀ ਕਿਉਂ ਨਹੀਂ ਚੱਲਦਾ?',
                optionsJson: [
                  'Its gate threshold voltage requires 10V Vgs to achieve low Rds(on); at 3.3V it remains in high-resistance linear mode and overheats',
                  'It reverses the polarity of the load',
                  '3.3V will punch through and destroy the gate oxide',
                  'It causes microcontroller clock frequency to slow down',
                ],
                correctAnswer: 'Its gate threshold voltage requires 10V Vgs to achieve low Rds(on); at 3.3V it remains in high-resistance linear mode and overheats',
                explanationEn:
                  'Standard MOSFETs specify Rds(on) at Vgs = 10V. At 3.3V, channel inversion is weak, causing high resistance, massive voltage drop, and overheating.',
                explanationPa:
                  'IRF540 ਨੂੰ ਪੂਰਾ ਖੁੱਲ੍ਹਣ ਲਈ 10V ਚਾਹੀਦੇ ਹਨ। 3.3V ਤੇ ਇਹ ਪੂਰਾ ਨਹੀਂ ਖੁੱਲ੍ਹਦਾ, ਜ਼ਿਆਦਾ ਗਰਮ ਹੁੰਦਾ ਹੈ ਅਤੇ ਸੜ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'BJT Saturation',
                promptEn: 'To guarantee that an NPN BJT functions as a solid ON switch with minimum Vce saturation voltage drop, what design rule is used for base current?',
                promptPa: 'NPN BJT ਨੂੰ ਇੱਕ ਪੱਕੇ ਆਨ-ਸਵਿੱਚ ਵਜੋਂ ਚਲਾਉਣ ਲਈ ਬੇਸ ਕਰੰਟ ਲਈ ਕਿਹੜਾ ਇੰਜੀਨੀਅਰਿੰਗ ਨਿਯਮ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
                optionsJson: [
                  'Use a forced beta of 10 to 20 (Ib = Ic / 10)',
                  'Set base current equal to zero',
                  'Use the maximum datasheet beta (e.g. 400)',
                  'Connect base directly to 12V without a resistor',
                ],
                correctAnswer: 'Use a forced beta of 10 to 20 (Ib = Ic / 10)',
                explanationEn:
                  'Datasheet beta drops severely near saturation. Standard design uses a forced beta of 10 (overdrive) to ensure Vce saturates below 0.2 V.',
                explanationPa:
                  'ਸੈਚੁਰੇਸ਼ਨ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ forced beta = 10 (ਯਾਨੀ Ib = Ic / 10) ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ ਤਾਂ ਜੋ ਵੋਲਟੇਜ ਡ੍ਰੌਪ ਸਿਰਫ਼ 0.2V ਰਹਿ ਜਾਵੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'IGBT Application',
                promptEn: 'In which application are IGBTs most commonly preferred over MOSFETs?',
                promptPa: 'ਕਿਹੜੇ ਕੰਮ ਵਿੱਚ MOSFET ਦੀ ਬਜਾਏ IGBT ਨੂੰ ਪਹਿਲ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ?',
                optionsJson: [
                  'High-voltage (>600V), high-power industrial motor drives and EV traction inverters',
                  'Low-power 3.3V portable battery circuits',
                  'Gigahertz radio frequency transmitters',
                  'Computer CPU core voltage regulators (1V @ 100A)',
                ],
                correctAnswer: 'High-voltage (>600V), high-power industrial motor drives and EV traction inverters',
                explanationEn:
                  'At high voltages (>600V to several kV), MOSFET Rds(on) increases dramatically with voltage rating. IGBTs maintain a fixed low Vce(sat) forward drop, excelling at high powers.',
                explanationPa:
                  'ਹਾਈ ਵੋਲਟੇਜ (600V ਤੋਂ ਉੱਤੇ) ਇਲੈਕਟ੍ਰਿਕ ਗੱਡੀਆਂ (EVs) ਅਤੇ ਵੱਡੀਆਂ ਮੋਟਰਾਂ ਵਿੱਚ IGBT ਸਭ ਤੋਂ ਵਧੀਆ ਕੰਮ ਕਰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'TRIAC Applications',
                promptEn: 'What power electronics device is universally used in household AC ceiling fan regulators and incandescent light dimmers?',
                promptPa: 'ਘਰੇਲੂ ਪੱਖਿਆਂ ਦੇ ਰੈਗੂਲੇਟਰਾਂ ਅਤੇ ਲਾਈਟ ਡਿਮਰਾਂ ਵਿੱਚ ਕਿਹੜਾ ਪੁਰਜ਼ਾ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
                optionsJson: ['TRIAC', 'Schottky Diode', 'Zener Diode', 'JFET'],
                correctAnswer: 'TRIAC',
                explanationEn:
                  'A TRIAC can conduct in either direction across both AC half-cycles, triggered by phase-delayed gate pulses from a DIAC to control average power.',
                explanationPa:
                  'ਟ੍ਰਾਇਕ (TRIAC) AC ਬਿਜਲੀ ਦੇ ਦੋਵਾਂ ਪਾਸਿਆਂ ਨੂੰ ਕੱਟ ਕੇ ਪੱਖੇ ਦੀ ਸਪੀਡ ਜਾਂ ਲਾਈਟ ਦੀ ਰੌਸ਼ਨੀ ਕੰਟਰੋਲ ਕਰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'SCR Latching',
                promptEn: 'Once a Silicon Controlled Rectifier (SCR) has been triggered into conduction by a gate pulse, how do you turn it OFF?',
                promptPa: 'ਇੱਕ ਵਾਰ ਗੇਟ ਪਲਸ ਨਾਲ ਚਾਲੂ ਹੋਣ ਤੋਂ ਬਾਅਦ SCR ਨੂੰ ਬੰਦ ਕਿਵੇਂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ?',
                optionsJson: [
                  'Reduce the anode current below the holding current (Ih) or remove supply voltage',
                  'Apply a negative voltage to the gate',
                  'Ground the gate terminal',
                  'Increase the anode voltage',
                ],
                correctAnswer: 'Reduce the anode current below the holding current (Ih) or remove supply voltage',
                explanationEn:
                  'SCRs latch on regeneratively. The gate loses all control after firing. To turn off, anode current must be dropped below holding current (natural or forced commutation).',
                explanationPa:
                  'ਗੇਟ ਬੰਦ ਕਰਨ ਤੇ ਵੀ SCR ਬੰਦ ਨਹੀਂ ਹੁੰਦਾ। ਇਸਨੂੰ ਬੰਦ ਕਰਨ ਲਈ ਮੇਨ ਕਰੰਟ ਕੱਟਣਾ ਪੈਂਦਾ ਹੈ ਜਾਂ ਹੋਲਡਿੰਗ ਕਰੰਟ (Ih) ਤੋਂ ਹੇਠਾਂ ਲਿਆਉਣਾ ਪੈਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Thermal Calculation',
                promptEn: 'A transistor dissipates 5 Watts. The thermal resistance from junction to ambient (θja) is 10 °C/W. If ambient temperature is 30 °C, what is the internal junction temperature?',
                promptPa: 'ਇੱਕ ਟ੍ਰਾਂਜਿਸਟਰ 5 ਵਾਟ ਗਰਮੀ ਪੈਦਾ ਕਰਦਾ ਹੈ। ਥਰਮਲ ਰਜਿਸਟੈਂਸ 10 °C/W ਹੈ ਅਤੇ ਕਮਰੇ ਦਾ ਤਾਪਮਾਨ 30 °C ਹੈ। ਜੰਕਸ਼ਨ ਦਾ ਤਾਪਮਾਨ ਕਿੰਨਾ ਹੋਵੇਗਾ?',
                optionsJson: ['80 °C', '50 °C', '150 °C', '35 °C'],
                correctAnswer: '80 °C',
                explanationEn:
                  'Temperature rise = P * θja = 5 W * 10 °C/W = 50 °C. Junction temperature Tj = Tamb + Rise = 30 °C + 50 °C = 80 °C.',
                explanationPa:
                  'ਤਾਪਮਾਨ ਵਾਧਾ = 5 * 10 = 50 °C। ਕੁੱਲ ਤਾਪਮਾਨ = 30 + 50 = 80 °C।',
              },
              {
                questionType: 'mcq',
                topicTag: 'MOSFET Power Loss',
                promptEn: 'A MOSFET with Rds(on) = 0.05 Ω conducts a continuous DC load current of 10 Amperes. What is its conduction power dissipation?',
                promptPa: 'Rds(on) = 0.05 Ω ਵਾਲਾ MOSFET ਜਦੋਂ 10 ਐਂਪੀਅਰ ਕਰੰਟ ਲੰਘਾਉਂਦਾ ਹੈ ਤਾਂ ਕਿੰਨੇ ਵਾਟ ਪਾਵਰ ਖਪਤ ਹੁੰਦੀ ਹੈ?',
                optionsJson: ['5.0 Watts', '0.5 Watts', '50 Watts', '2.5 Watts'],
                correctAnswer: '5.0 Watts',
                explanationEn:
                  'P = I^2 * Rds(on) = (10 A)^2 * 0.05 Ω = 100 * 0.05 = 5.0 Watts.',
                explanationPa:
                  'P = I^2 * R = 10^2 * 0.05 = 100 * 0.05 = 5.0 ਵਾਟ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Thermal Paste',
                promptEn: 'Why is thermal paste (thermal interface material, TIM) applied between a power transistor metal tab and its aluminum heat sink?',
                promptPa: 'ਪਾਵਰ ਟ੍ਰਾਂਜਿਸਟਰ ਅਤੇ ਐਲੂਮੀਨੀਅਮ ਹੀਟ ਸਿੰਕ ਦੇ ਵਿਚਕਾਰ ਥਰਮਲ ਪੇਸਟ ਕਿਉਂ ਲਗਾਈ ਜਾਂਦੀ ਹੈ?',
                optionsJson: [
                  'To displace microscopic air pockets that act as thermal insulators with thermally conductive grease',
                  'To insulate the transistor electrically from the heat sink',
                  'To glue the transistor permanently so it never comes off',
                  'To prevent electromagnetic interference',
                ],
                correctAnswer: 'To displace microscopic air pockets that act as thermal insulators with thermally conductive grease',
                explanationEn:
                  'Microscopic surface imperfections trap air, which has terrible thermal conductivity (0.026 W/mK). Thermal paste conducts heat orders of magnitude better, preventing hot-spot destruction.',
                explanationPa:
                  'ਦੋਵਾਂ ਧਾਤਾਂ ਦੇ ਵਿਚਕਾਰ ਨਿੱਕੀ-ਨਿੱਕੀ ਹਵਾ ਫਸ ਜਾਂਦੀ ਹੈ ਜੋ ਗਰਮੀ ਨੂੰ ਰੋਕਦੀ ਹੈ। ਥਰਮਲ ਪੇਸਟ ਹਵਾ ਨੂੰ ਕੱਢ ਕੇ ਗਰਮੀ ਨੂੰ ਸਿੱਧਾ ਹੀਟ ਸਿੰਕ ਵਿੱਚ ਭੇਜਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'JFET Basics',
                promptEn: 'What type of gate bias voltage turns an N-channel Junction Field Effect Transistor (JFET) OFF (pinch-off)?',
                promptPa: 'N-ਚੈਨਲ JFET ਨੂੰ ਬੰਦ (Pinch-off) ਕਰਨ ਲਈ ਗੇਟ ਉੱਤੇ ਕਿਹੋ ਜਿਹੀ ਵੋਲਟੇਜ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ?',
                optionsJson: [
                  'Negative gate-to-source voltage (Vgs < 0)',
                  'Positive gate-to-source voltage (Vgs > 0)',
                  'Zero gate voltage (Vgs = 0)',
                  'High AC frequency voltage',
                ],
                correctAnswer: 'Negative gate-to-source voltage (Vgs < 0)',
                explanationEn:
                  'N-channel JFETs are depletion-mode devices normally ON at Vgs = 0. Applying a negative Vgs reverse-biases the PN gate junction, widening depletion layers until the channel pinches off completely.',
                explanationPa:
                  'JFET ਆਮ ਤੌਰ ਤੇ ਚਾਲੂ ਰਹਿੰਦਾ ਹੈ। ਇਸਨੂੰ ਬੰਦ ਕਰਨ ਲਈ ਗੇਟ ਉੱਤੇ ਨੈਗੇਟਿਵ ਵੋਲਟੇਜ ਦੇਣੀ ਪੈਂਦੀ ਹੈ।',
              },
            ],
          },
        },
      ],
    },
  ],
};
