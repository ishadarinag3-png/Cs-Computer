import { SeedCourse } from './types.ts';

export const LEVEL_1_COURSE: SeedCourse = {
  slug: 'level-1-electrical-fundamentals',
  levelNumber: 1,
  titleEn: 'Level 1: Electrical Fundamentals',
  titlePa: 'ਲੈਵਲ 1: ਬਿਜਲਈ ਬੁਨਿਆਦਾਂ (Electrical Fundamentals)',
  descriptionEn:
    'Core physics of voltage, current, resistance, Ohm’s and Kirchhoff’s circuit laws, DC vs AC waveforms, RMS power, and electrical safety.',
  descriptionPa:
    'ਵੋਲਟੇਜ, ਕਰੰਟ, ਰਜਿਸਟੈਂਸ, ਓਹਮ ਅਤੇ ਕਿਰਚੌਫ ਦੇ ਨਿਯਮ, ਸੀਰੀਜ਼ ਤੇ ਪੈਰਲਲ ਸਰਕਟ, AC/DC ਵੇਵਫਾਰਮਾਂ, RMS ਪਾਵਰ ਅਤੇ ਬਿਜਲਈ ਸੁਰੱਖਿਆ ਦੇ ਅਸੂਲ।',
  category: 'core-electronics',
  estimatedHours: 14,
  modules: [
    {
      orderIndex: 1,
      titleEn: 'DC Circuit Theory & Network Theorems',
      titlePa: 'DC ਸਰਕਟ ਸਿਧਾਂਤ ਅਤੇ ਨੈੱਟਵਰਕ ਨਿਯਮ',
      summaryEn:
        'Fundamental circuit elements, Ohm’s law, Kirchhoff’s laws (KCL and KVL), series-parallel networks, and node analysis.',
      summaryPa:
        'ਬੁਨਿਆਦੀ ਸਰਕਟ ਤੱਤ, ਓਹਮ ਦਾ ਨਿਯਮ, ਕਿਰਚੌਫ ਦੇ ਨਿਯਮ (KCL/KVL), ਸੀਰੀਜ਼-ਪੈਰਲਲ ਨੈੱਟਵਰਕ ਅਤੇ ਵੋਲਟੇਜ ਡਿਵਾਈਡਰ।',
      lessons: [
        {
          slug: 'electrical-fundamentals-ohms-kirchhoff',
          orderIndex: 1,
          titleEn: '1.1 Voltage, Current, Ohm’s Law & Kirchhoff’s Laws (KCL / KVL)',
          titlePa: '1.1 ਵੋਲਟੇਜ, ਕਰੰਟ, ਓਹਮ ਦਾ ਨਿਯਮ ਅਤੇ ਕਿਰਚੌਫ ਦੇ ਨਿਯਮ (KCL / KVL)',
          objectivesJson: [
            'Define electrical potential difference (Voltage), charge flow rate (Current), and opposition (Resistance and Conductance)',
            'Apply Ohm’s law (V = I * R) and Joule’s heating law (P = V * I = I^2 * R = V^2 / R) across DC networks',
            'Solve series, parallel, and bridge resistor networks using equivalent resistance techniques',
            'Enforce Kirchhoff’s Current Law (conservation of charge) and Kirchhoff’s Voltage Law (conservation of energy)',
          ],
          prerequisitesJson: ['Level 0: Mathematics & Physics for Electronics (Algebra & SI units)'],
          childAnalogyEn:
            'Think of a village tube well (ਟਿਊਬਵੈੱਲ) pumping water to fields! The water pressure pushed by the pump is VOLTAGE. The volume of water rushing through the irrigation channel per second is CURRENT. Mud, stones, or a narrow pipe slowing the water down is RESISTANCE. If water reaches a fork into two channels, the sum of water in both channels equals the main pipe water—that is Kirchhoff’s Current Law (KCL)!',
          childAnalogyPa:
            'ਪਿੰਡ ਦੇ ਖੇਤਾਂ ਵਿੱਚ ਚਲਦੇ ਟਿਊਬਵੈੱਲ ਦੀ ਕਲਪਨਾ ਕਰੋ! ਮੋਟਰ ਵੱਲੋਂ ਪਾਣੀ ਨੂੰ ਦਿੱਤਾ ਧੱਕਾ (Pressure) VOLTAGE ਹੈ। ਨਾਲੀ ਵਿੱਚੋਂ ਇੱਕ ਸਕਿੰਟ ਵਿੱਚ ਲੰਘ ਰਿਹਾ ਪਾਣੀ ਦਾ ਵਹਾਅ CURRENT ਹੈ। ਨਾਲੀ ਵਿੱਚ ਜੰਮਿਆ ਘਾਹ-ਫੂਸ ਜਾਂ ਤੰਗ ਰਸਤਾ ਜੋ ਪਾਣੀ ਨੂੰ ਰੋਕਦਾ ਹੈ, ਉਹ RESISTANCE ਹੈ। ਜਦੋਂ ਪਾਣੀ ਅੱਗੇ ਜਾ ਕੇ ਦੋ ਖਾਲਾਂ (Channels) ਵਿੱਚ ਵੰਡਿਆ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਦੋਵਾਂ ਖਾਲਾਂ ਦਾ ਪਾਣੀ ਜੋੜ ਕੇ ਮੇਨ ਨਾਲੀ ਜਿੰਨਾ ਹੀ ਹੁੰਦਾ ਹੈ—ਇਹੀ ਕਿਰਚੌਫ ਦਾ ਕਰੰਟ ਨਿਯਮ (KCL) ਹੈ!',
          technicalExplanationEn:
            'Circuit analysis rests upon charge conservation, energy conservation, and constitutive element laws:\n\n1. Constitutive Quantities:\n• Electric Potential Difference (V): Energy transferred per unit charge (1 Volt = 1 Joule / Coulomb).\n• Current (I): Rate of charge transport (1 Ampere = 1 Coulomb / second = 6.242 * 10^18 electrons/sec).\n• Resistance (R): R = ρ * (L / A), measured in Ohms (Ω), where ρ is material resistivity.\n• Conductance (G): G = 1 / R, measured in Siemens (S).\n\n2. Ohm’s Law & Electrical Power:\n• V = I * R  <==>  I = V / R  <==>  R = V / I\n• Power: P = V * I = I^2 * R = V^2 / R (Watts, W)\n• Energy: E = P * t (Joules, J; or kilowatt-hours, kWh).\n\n3. Kirchhoff’s Laws:\n• Kirchhoff’s Current Law (KCL): Algebraic sum of currents entering any circuit node is zero: Σ I_in = Σ I_out (Conservation of Charge).\n• Kirchhoff’s Voltage Law (KVL): Algebraic sum of all voltages around any closed loop is zero: Σ V_drops = Σ V_sources (Conservation of Energy).\n\n4. Dividers:\n• Voltage Divider (Series): V_x = V_total * (R_x / R_total)\n• Current Divider (Two Parallel Branches): I_1 = I_total * [R_2 / (R_1 + R_2)].',
          technicalExplanationPa:
            'ਸਰਕਟਾਂ ਦਾ ਗਣਿਤਕ ਵਿਸ਼ਲੇਸ਼ਣ ਇਹਨਾਂ ਨਿਯਮਾਂ ਉੱਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ:\n\n1. ਮੂਲ ਇਕਾਈਆਂ:\n• ਵੋਲਟੇਜ (V): ਪ੍ਰਤੀ ਯੂਨਿਟ ਚਾਰਜ ਊਰਜਾ (1 Volt = 1 Joule / 1 Coulomb)।\n• ਕਰੰਟ (I): ਚਾਰਜ ਦੇ ਵਹਿਣ ਦੀ ਦਰ (1 Ampere = 1 Coulomb ਪ੍ਰਤੀ ਸਕਿੰਟ)।\n• ਰਜਿਸਟੈਂਸ (R): ਤਾਰ ਦੀ ਲੰਬਾਈ ਅਤੇ ਮੋਟਾਈ ਅਨੁਸਾਰ ਰੁਕਾਵਟ R = ρ * (L / A)।\n• ਕੰਡਕਟੈਂਸ (G): ਰਜਿਸਟੈਂਸ ਦਾ ਉਲਟ G = 1 / R (ਸੀਮੰਜ਼ - Siemens)।\n\n2. ਓਹਮ ਦਾ ਨਿਯਮ ਅਤੇ ਪਾਵਰ:\n• V = I * R\n• ਪਾਵਰ P = V * I = I^2 * R = V^2 / R (ਵਾਟ, Watts)\n\n3. ਕਿਰਚੌਫ ਦੇ ਨਿਯਮ:\n• KCL (ਕਰੰਟ ਨਿਯਮ): ਕਿਸੇ ਵੀ ਜੋੜ (Node) ਉੱਤੇ ਆਉਣ ਵਾਲਾ ਕੁੱਲ ਕਰੰਟ ਬਾਹਰ ਜਾਣ ਵਾਲੇ ਕਰੰਟ ਦੇ ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ (Σ I = 0)।\n• KVL (ਵੋਲਟੇਜ ਨਿਯਮ): ਕਿਸੇ ਵੀ ਬੰਦ ਲੂਪ ਵਿੱਚ ਕੁੱਲ ਵੋਲਟੇਜ ਦਾ ਜੋੜ ਜ਼ੀਰੋ ਹੁੰਦਾ ਹੈ (Σ V = 0)।',
          practicalExampleEn:
            'Powering a 3.3V microcontroller from a 12V automotive battery using a linear regulator or dropping resistor: If the microcontroller draws 100 mA, a dropping resistor must drop 12V - 3.3V = 8.7V. R = 8.7V / 0.1A = 87 Ω. The power dissipated in the resistor as pure heat is P = V * I = 8.7V * 0.1A = 0.87 Watts. A standard 1/4W (0.25W) resistor would overheat and burn within seconds; at least a 2-Watt ceramic wirewound resistor is required.',
          practicalExamplePa:
            'ਕਾਰ ਦੀ 12V ਬੈਟਰੀ ਤੋਂ 3.3V ਦਾ ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਚਲਾਉਣਾ: ਜੇਕਰ ਕੰਟਰੋਲਰ 100 mA ਲੈਂਦਾ ਹੈ, ਤਾਂ ਰਜਿਸਟਰ ਨੂੰ 12V - 3.3V = 8.7V ਰੋਕਣਾ ਪਵੇਗਾ। ਰਜਿਸਟੈਂਸ R = 8.7V / 0.1A = 87 Ω ਚਾਹੀਦੀ ਹੈ। ਇਸ ਰਜਿਸਟਰ ਵਿੱਚ ਗਰਮੀ (Heat) ਬਣ ਕੇ ਬਰਬਾਦ ਹੋਣ ਵਾਲੀ ਪਾਵਰ P = 8.7V * 0.1A = 0.87 Watts ਹੈ। ਜੇਕਰ ਇੱਥੇ ਆਮ 0.25 ਵਾਟ ਦਾ ਨਿੱਕਾ ਰਜਿਸਟਰ ਲਗਾ ਦਿੱਤਾ ਜਾਵੇ, ਤਾਂ ਉਹ 5 ਸਕਿੰਟਾਂ ਵਿੱਚ ਧੂੰਆਂ ਛੱਡ ਕੇ ਸੜ ਜਾਵੇਗਾ! ਇੱਥੇ ਘੱਟੋ-ਘੱਟ 2 ਵਾਟ ਦਾ ਹੈਵੀ ਰਜਿਸਟਰ ਚਾਹੀਦਾ ਹੈ।',
          codeDemo: `// TypeScript: DC Network & Voltage/Current Divider Solver
export function solveSeriesParallelResistors(rSeries: number, r1Parallel: number, r2Parallel: number) {
  // Equivalent resistance of parallel section
  const rParallelEquiv = (r1Parallel * r2Parallel) / (r1Parallel + r2Parallel);
  const rTotal = rSeries + rParallelEquiv;
  return { rParallelEquiv, rTotal };
}

export function solveLoadedVoltageDivider(vSource: number, rTop: number, rBottom: number, rLoad: number) {
  // rBottom in parallel with rLoad
  const rParallel = (rBottom * rLoad) / (rBottom + rLoad);
  const vOut = vSource * (rParallel / (rTop + rParallel));
  const currentTotal = vSource / (rTop + rParallel);
  const powerWastedTop = Math.pow(currentTotal, 2) * rTop;

  return {
    unloadedVout: vSource * (rBottom / (rTop + rBottom)),
    loadedVout: vOut,
    powerWastedWatts: powerWastedTop,
  };
}

// Verification: 12V in, R1=10k, R2=10k (unloaded=6V). Connect 10k load:
const testDiv = solveLoadedVoltageDivider(12, 10000, 10000, 10000);
console.log('Unloaded:', testDiv.unloadedVout.toFixed(2), 'V'); // 6.00 V
console.log('Loaded:', testDiv.loadedVout.toFixed(2), 'V');     // 4.00 V (Loading Effect!)`,
          misconceptionsJson: [
            {
              myth: 'Current is consumed or "used up" as it travels through resistors in a circuit.',
              truthEn:
                'Current is the flow of electric charge, which is strictly conserved (KCL). The exact same number of electrons entering a resistor exits it; what is consumed is electrical potential energy (voltage), converted into heat.',
              truthPa:
                'ਕਰੰਟ ਕਦੇ ਖਪਤ ਜਾਂ ਖ਼ਤਮ ਨਹੀਂ ਹੁੰਦਾ। ਜਿੰਨੇ ਇਲੈਕਟ੍ਰਾਨ ਰਜਿਸਟਰ ਵਿੱਚ ਦਾਖਲ ਹੁੰਦੇ ਹਨ, ਓਨੇ ਹੀ ਬਾਹਰ ਆਉਂਦੇ ਹਨ। ਖ਼ਤਮ ਸਿਰਫ਼ ਪੋਟੈਂਸ਼ੀਅਲ ਐਨਰਜੀ (ਵੋਲਟੇਜ) ਹੁੰਦੀ ਹੈ ਜੋ ਗਰਮੀ ਵਿੱਚ ਬਦਲ ਜਾਂਦੀ ਹੈ।',
            },
            {
              myth: 'Ground (GND) is an infinite magical sink that sucks electricity into the earth.',
              truthEn:
                'Ground is simply an arbitrarily chosen reference node (0 V) in a circuit diagram. In battery-powered portable devices, "ground" is merely the battery negative terminal, and current must always complete a closed loop back to its source.',
              truthPa:
                'ਗਰਾਊਂਡ ਕੋਈ ਜਾਦੂਈ ਖੂਹ ਨਹੀਂ ਹੈ। ਇਹ ਸਰਕਟ ਵਿੱਚ 0V ਮੰਨਿਆ ਗਿਆ ਇੱਕ ਰੈਫਰੈਂਸ ਬਿੰਦੂ ਹੈ। ਮੋਬਾਈਲ ਫੋਨ ਵਿੱਚ ਗਰਾਊਂਡ ਬੈਟਰੀ ਦਾ ਮਾਈਨਸ ਟਰਮੀਨਲ ਹੁੰਦਾ ਹੈ, ਜਿੱਥੇ ਕਰੰਟ ਆਪਣਾ ਚੱਕਰ ਪੂਰਾ ਕਰਦਾ ਹੈ।',
            },
            {
              myth: 'A voltage divider made of two resistors can be used as a reliable power supply for microcontrollers.',
              truthEn:
                'Resistor dividers have high output impedance. As soon as the microcontroller changes its operating state or draws dynamic current, the output voltage sags drastically (the loading effect). Active linear regulators or buck converters must be used instead.',
              truthPa:
                'ਰਜਿਸਟਰ ਵੋਲਟੇਜ ਡਿਵਾਈਡਰ ਨੂੰ ਕਦੇ ਵੀ ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਦੀ ਪਾਵਰ ਸਪਲਾਈ ਵਜੋਂ ਨਹੀਂ ਵਰਤਿਆ ਜਾ ਸਕਦਾ, ਕਿਉਂਕਿ ਲੋਡ ਪੈਂਦੇ ਹੀ ਵੋਲਟੇਜ ਡਿੱਗ ਜਾਂਦੀ ਹੈ (Loading Effect)।',
            },
          ],
          terminologyJson: [
            {
              term: 'Voltage (V)',
              punjabi: 'ਵੋਲਟੇਜ',
              meaningEn: 'Electric potential difference driving current between two points (Joules per Coulomb).',
              meaningPa: 'ਦੋ ਬਿੰਦੂਆਂ ਵਿਚਕਾਰ ਬਿਜਲਈ ਦਬਾਅ ਜੋ ਕਰੰਟ ਨੂੰ ਤੋਰਦਾ ਹੈ।',
            },
            {
              term: 'Current (I)',
              punjabi: 'ਕਰੰਟ',
              meaningEn: 'Rate of flow of electric charge through a conductor (Coulombs per second).',
              meaningPa: 'ਕਿਸੇ ਤਾਰ ਵਿੱਚੋਂ ਬਿਜਲਈ ਚਾਰਜ ਦੇ ਵਹਿਣ ਦੀ ਦਰ।',
            },
            {
              term: 'Conductance (G)',
              punjabi: 'ਕੰਡਕਟੈਂਸ',
              meaningEn: 'Ease with which electric current passes through a component; inverse of resistance (G = 1/R).',
              meaningPa: 'ਬਿਜਲੀ ਨੂੰ ਲੰਘਣ ਦੇਣ ਦੀ ਸਹਿਜਤਾ, ਰਜਿਸਟੈਂਸ ਦਾ ਉਲਟ।',
            },
            {
              term: 'Node',
              punjabi: 'ਨੋਡ (ਜੋੜ)',
              meaningEn: 'Point in a circuit where two or more circuit elements join together.',
              meaningPa: 'ਸਰਕਟ ਦਾ ਉਹ ਬਿੰਦੂ ਜਿੱਥੇ ਦੋ ਜਾਂ ਦੋ ਤੋਂ ਵੱਧ ਪੁਰਜ਼ੇ ਆਪਸ ਵਿੱਚ ਜੁੜਦੇ ਹਨ।',
            },
            {
              term: 'KCL (Kirchhoff’s Current Law)',
              punjabi: 'ਕਿਰਚੌਫ ਦਾ ਕਰੰਟ ਨਿਯਮ',
              meaningEn: 'Conservation of charge principle stating sum of currents entering a node equals sum exiting.',
              meaningPa: 'ਕਿਸੇ ਨੋਡ ਉੱਤੇ ਆਉਣ ਵਾਲਾ ਕੁੱਲ ਕਰੰਟ ਬਾਹਰ ਜਾਣ ਵਾਲੇ ਕੁੱਲ ਕਰੰਟ ਦੇ ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ।',
            },
            {
              term: 'KVL (Kirchhoff’s Voltage Law)',
              punjabi: 'ਕਿਰਚੌਫ ਦਾ ਵੋਲਟੇਜ ਨਿਯਮ',
              meaningEn: 'Conservation of energy principle stating sum of directed voltages around any closed loop is zero.',
              meaningPa: 'ਕਿਸੇ ਵੀ ਬੰਦ ਸਰਕਟ ਲੂਪ ਵਿੱਚ ਸਾਰੀਆਂ ਵੋਲਟੇਜਾਂ ਦਾ ਜੋੜ ਸਿਫ਼ਰ ਹੁੰਦਾ ਹੈ।',
            },
          ],
          interactiveLabId: 'resistor-calc',
          exercisePromptEn:
            'Problem: A 24V DC industrial source powers two parallel branches: Branch A has a 120 Ω resistor; Branch B has a series combination of 40 Ω and 80 Ω. Calculate: (1) Equivalent resistance, (2) Total source current, and (3) Power dissipated in the 40 Ω resistor.',
          exercisePromptPa:
            'ਸਵਾਲ: 24V DC ਸਪਲਾਈ ਨਾਲ ਦੋ ਸਮਾਨਾਂਤਰ ਸ਼ਾਖਾਵਾਂ ਜੁੜੀਆਂ ਹਨ: ਸ਼ਾਖਾ A ਵਿੱਚ 120 Ω ਰਜਿਸਟਰ ਹੈ; ਸ਼ਾਖਾ B ਵਿੱਚ 40 Ω ਅਤੇ 80 Ω ਦੇ ਦੋ ਰਜਿਸਟਰ ਸੀਰੀਜ਼ ਵਿੱਚ ਹਨ। ਪਤਾ ਕਰੋ: (1) ਕੁੱਲ ਸਮਾਨਾਂਤਰ ਰਜਿਸਟੈਂਸ, (2) ਬੈਟਰੀ ਦਾ ਕੁੱਲ ਕਰੰਟ, ਅਤੇ (3) 40 Ω ਵਾਲੇ ਰਜਿਸਟਰ ਵਿੱਚ ਖਪਤ ਹੋਈ ਪਾਵਰ।',
          summaryEn:
            'Ohm’s law connects voltage, current, and resistance in deterministic harmony, while Kirchhoff’s laws (KCL and KVL) guarantee the conservation of charge and energy across every electrical node and loop.',
          summaryPa:
            'ਓਹਮ ਦਾ ਨਿਯਮ ਵੋਲਟੇਜ, ਕਰੰਟ ਅਤੇ ਰਜਿਸਟੈਂਸ ਦਾ ਆਪਸੀ ਸੰਬੰਧ ਜੋੜਦਾ ਹੈ, ਜਦਕਿ ਕਿਰਚੌਫ ਦੇ ਨਿਯਮ ਚਾਰਜ ਅਤੇ ਊਰਜਾ ਦੀ ਸਦੀਵੀ ਸੁਰੱਖਿਆ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਂਦੇ ਹਨ।',
          furtherReadingJson: [
            'Introductory Circuit Analysis by Robert L. Boylestad',
            'Engineering Circuit Analysis by William H. Hayt & Jack E. Kemmerly',
            'Electric Circuits by James W. Nilsson & Susan A. Riedel',
          ],
          quiz: {
            titleEn: 'Level 1 Assessment: DC Network Laws & Dividers',
            titlePa: 'ਲੈਵਲ 1 ਟੈਸਟ: DC ਨੈੱਟਵਰਕ ਨਿਯਮ ਅਤੇ ਸਰਕਟ ਵਿਸ਼ਲੇਸ਼ਣ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'Ohms Law',
                promptEn: 'A 470 Ω resistor has a current of 20 mA flowing through it. What is the voltage drop across it?',
                promptPa: 'ਇੱਕ 470 Ω ਦੇ ਰਜਿਸਟਰ ਵਿੱਚੋਂ 20 mA ਕਰੰਟ ਲੰਘ ਰਿਹਾ ਹੈ। ਉਸਦੇ ਆਰ-ਪਾਰ ਕਿੰਨੀ ਵੋਲਟੇਜ ਡਿੱਗੇਗੀ?',
                optionsJson: ['9.4 V', '0.94 V', '94 V', '4.7 V'],
                correctAnswer: '9.4 V',
                explanationEn:
                  'V = I * R = 0.020 A * 470 Ω = 9.4 Volts.',
                explanationPa:
                  'V = I * R = 0.020 * 470 = 9.4 ਵੋਲਟ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Power Law',
                promptEn: 'How much power is dissipated by a 10 Ω power resistor connected across a 12 V car battery?',
                promptPa: '12V ਕਾਰ ਬੈਟਰੀ ਨਾਲ ਜੁੜੇ 10 Ω ਰਜਿਸਟਰ ਵਿੱਚ ਕਿੰਨੇ ਵਾਟ ਪਾਵਰ ਖਪਤ ਹੋਵੇਗੀ?',
                optionsJson: ['14.4 Watts', '1.2 Watts', '120 Watts', '144 Watts'],
                correctAnswer: '14.4 Watts',
                explanationEn:
                  'P = V^2 / R = (12)^2 / 10 = 144 / 10 = 14.4 Watts.',
                explanationPa:
                  'P = V^2 / R = 144 / 10 = 14.4 ਵਾਟ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Parallel Resistors',
                promptEn: 'What is the equivalent resistance of three 300 Ω resistors connected in parallel?',
                promptPa: '300 Ω ਦੇ ਤਿੰਨ ਰਜਿਸਟਰ ਸਮਾਨਾਂਤਰ (Parallel) ਵਿੱਚ ਜੋੜਨ ਤੇ ਕੁੱਲ ਰਜਿਸਟੈਂਸ ਕਿੰਨੀ ਬਣੇਗੀ?',
                optionsJson: ['100 Ω', '900 Ω', '300 Ω', '150 Ω'],
                correctAnswer: '100 Ω',
                explanationEn:
                  'For N identical parallel resistors, Req = R / N = 300 Ω / 3 = 100 Ω.',
                explanationPa:
                  'ਸਮਾਨਾਂਤਰ ਵਿੱਚ Req = 300 / 3 = 100 Ω ਹੁੰਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'KCL',
                promptEn: 'At a circuit node, three currents enter: 2 A, 3.5 A, and 1.5 A. If two branches leave the node and one carries 4 A, what current does the other carry?',
                promptPa: 'ਇੱਕ ਨੋਡ ਤੇ ਤਿੰਨ ਕਰੰਟ ਆ ਰਹੇ ਹਨ: 2 A, 3.5 A, ਅਤੇ 1.5 A। ਜੇਕਰ ਦੋ ਲਾਈਨਾਂ ਬਾਹਰ ਜਾ ਰਹੀਆਂ ਹਨ ਅਤੇ ਇੱਕ ਵਿੱਚ 4 A ਹੈ ਤਾਂ ਦੂਜੀ ਵਿੱਚ ਕਿੰਨਾ ਹੋਵੇਗਾ?',
                optionsJson: ['3 A', '7 A', '11 A', '2 A'],
                correctAnswer: '3 A',
                explanationEn:
                  'Total entering = 2 + 3.5 + 1.5 = 7 A. Total exiting = 4 A + I2 = 7 A, so I2 = 3 A.',
                explanationPa:
                  'ਕੁੱਲ ਆਉਣ ਵਾਲਾ = 7 A। ਬਾਹਰ ਜਾਣ ਵਾਲਾ 4 + I2 = 7, ਇਸ ਲਈ I2 = 3 ਐਂਪੀਅਰ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'KVL',
                promptEn: 'A 24 V battery is connected in series with a 5 V diode drop, an 11 V lamp drop, and a resistor. What is the voltage across the resistor?',
                promptPa: '24V ਬੈਟਰੀ ਨਾਲ ਸੀਰੀਜ਼ ਵਿੱਚ 5V ਡਾਇਓਡ, 11V ਬਲਬ ਅਤੇ ਇੱਕ ਰਜਿਸਟਰ ਲੱਗਾ ਹੈ। ਰਜਿਸਟਰ ਦੇ ਆਰ-ਪਾਰ ਵੋਲਟੇਜ ਕਿੰਨੀ ਹੋਵੇਗੀ?',
                optionsJson: ['8 V', '16 V', '40 V', '13 V'],
                correctAnswer: '8 V',
                explanationEn:
                  'By KVL: Vsource - Vdiode - Vlamp - Vresistor = 0. 24 - 5 - 11 - Vr = 0 => Vr = 8 V.',
                explanationPa:
                  'KVL ਅਨੁਸਾਰ: 24 - 5 - 11 = 8 ਵੋਲਟ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Voltage Divider',
                promptEn: 'In an unloaded series voltage divider with R1 = 20 kΩ (top) and R2 = 10 kΩ (bottom) connected to a 15 V supply, what is Vout across R2?',
                promptPa: '15V ਸਪਲਾਈ ਨਾਲ R1 = 20 kΩ ਅਤੇ R2 = 10 kΩ ਦਾ ਵੋਲਟੇਜ ਡਿਵਾਈਡਰ ਲੱਗਾ ਹੈ। R2 ਦੇ ਆਰ-ਪਾਰ Vout ਕਿੰਨੀ ਹੋਵੇਗੀ?',
                optionsJson: ['5 V', '10 V', '7.5 V', '2.5 V'],
                correctAnswer: '5 V',
                explanationEn:
                  'Vout = Vin * [R2 / (R1 + R2)] = 15 V * [10k / 30k] = 15 * (1/3) = 5 V.',
                explanationPa:
                  'Vout = 15 * (10 / 30) = 5 ਵੋਲਟ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Conductance',
                promptEn: 'If a component has a resistance of 50 Ω, what is its electrical conductance in Siemens?',
                promptPa: 'ਜੇਕਰ ਕਿਸੇ ਪੁਰਜ਼ੇ ਦੀ ਰਜਿਸਟੈਂਸ 50 Ω ਹੈ ਤਾਂ ਉਸਦੀ ਕੰਡਕਟੈਂਸ ਕਿੰਨੇ ਸੀਮੰਜ਼ (Siemens) ਹੋਵੇਗੀ?',
                optionsJson: ['0.02 S (20 mS)', '0.05 S', '50 S', '0.002 S'],
                correctAnswer: '0.02 S (20 mS)',
                explanationEn:
                  'G = 1 / R = 1 / 50 Ω = 0.02 S = 20 mS.',
                explanationPa:
                  'G = 1 / 50 = 0.02 ਸੀਮੰਜ਼ (20 mS)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Energy Calculation',
                promptEn: 'How much energy in kilowatt-hours (kWh) does a 1500 Watt electric water heater consume if operated for 4 hours?',
                promptPa: '1500 ਵਾਟ ਦਾ ਇਲੈਕਟ੍ਰਿਕ ਗੀਜ਼ਰ ਜੇਕਰ 4 ਘੰਟੇ ਚੱਲੇ ਤਾਂ ਕਿੰਨੇ ਯੂਨਿਟ (kWh) ਬਿਜਲੀ ਖਪਤ ਕਰੇਗਾ?',
                optionsJson: ['6 kWh', '6000 kWh', '375 kWh', '1.5 kWh'],
                correctAnswer: '6 kWh',
                explanationEn:
                  'Energy = Power (kW) * Time (hours) = 1.5 kW * 4 h = 6.0 kWh (6 units).',
                explanationPa:
                  'ਬਿਜਲੀ ਯੂਨਿਟ = 1.5 kW * 4 ਘੰਟੇ = 6 kWh (6 ਯੂਨਿਟ)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Circuit Faults',
                promptEn: 'What happens to the total circuit current when an unintended "short circuit" (zero resistance path) bypasses a load?',
                promptPa: 'ਜਦੋਂ ਕਿਸੇ ਲੋਡ ਦੇ ਸਮਾਨਾਂਤਰ ਅਚਾਨਕ "ਸ਼ਾਰਟ ਸਰਕਟ" (ਜ਼ੀਰੋ ਰਜਿਸਟੈਂਸ ਤਾਰ) ਹੋ ਜਾਵੇ ਤਾਂ ਕੁੱਲ ਕਰੰਟ ਤੇ ਕੀ ਅਸਰ ਪੈਂਦਾ ਹੈ?',
                optionsJson: [
                  'Current rises instantaneously to an extremely dangerous destructive peak',
                  'Current drops to zero',
                  'Current remains exactly unchanged',
                  'Voltage across the short circuit doubles',
                ],
                correctAnswer: 'Current rises instantaneously to an extremely dangerous destructive peak',
                explanationEn:
                  'By Ohm’s Law, I = V / R. When R approaches 0, current I approaches infinity, limited only by internal battery impedance and wire resistance, causing sparks, fire, or blown fuses.',
                explanationPa:
                  'ਜਦੋਂ ਰਜਿਸਟੈਂਸ ਲਗਭਗ ਜ਼ੀਰੋ ਹੋ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਕਰੰਟ ਖ਼ਤਰਨਾਕ ਹੱਦ ਤੱਕ ਵੱਧ ਜਾਂਦਾ ਹੈ ਜਿਸ ਨਾਲ ਅੱਗ ਲੱਗ ਸਕਦੀ ਹੈ ਜਾਂ ਫਿਊਜ਼ ਉੱਡ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Current Divider',
                promptEn: 'A total current of 12 A enters two parallel resistors: R1 = 4 Ω and R2 = 8 Ω. What current flows through R1?',
                promptPa: '12 A ਦਾ ਕੁੱਲ ਕਰੰਟ ਦੋ ਸਮਾਨਾਂਤਰ ਰਜਿਸਟਰਾਂ R1 = 4 Ω ਅਤੇ R2 = 8 Ω ਵਿੱਚ ਵੰਡਿਆ ਜਾਂਦਾ ਹੈ। R1 ਵਿੱਚੋਂ ਕਿੰਨਾ ਕਰੰਟ ਲੰਘੇਗਾ?',
                optionsJson: ['8 A', '4 A', '6 A', '10 A'],
                correctAnswer: '8 A',
                explanationEn:
                  'Current divider rule: I1 = Itotal * [R2 / (R1 + R2)] = 12 * [8 / 12] = 8 A. Notice the smaller resistor carries the larger current.',
                explanationPa:
                  'ਕਰੰਟ ਡਿਵਾਈਡਰ ਨਿਯਮ: I1 = 12 * (8 / 12) = 8 ਐਂਪੀਅਰ। ਛੋਟੇ ਰਜਿਸਟਰ ਵਿੱਚੋਂ ਜ਼ਿਆਦਾ ਕਰੰਟ ਲੰਘਦਾ ਹੈ।',
              },
            ],
          },
        },
        {
          slug: 'ac-fundamentals-rms-safety-grounding',
          orderIndex: 2,
          titleEn: '1.2 AC Waveforms, RMS Values, Ground Faults & Electrical Safety',
          titlePa: '1.2 AC ਵੇਵਫਾਰਮਾਂ, RMS ਮੁੱਲ, ਗਰਾਊਂਡ ਫਾਲਟ ਅਤੇ ਬਿਜਲਈ ਸੁਰੱਖਿਆ',
          objectivesJson: [
            'Differentiate between Direct Current (DC) and Alternating Current (AC) in terms of electron flow and polarity',
            'Derive and calculate Peak, Peak-to-Peak, Average, and Root-Mean-Square (RMS) voltages',
            'Understand domestic 3-pin wiring (Live/Phase, Neutral, Protective Earth Ground) and residual current circuit breakers (RCCB/GFCI)',
            'Implement electrical safety standards, lock-out/tag-out, high-voltage precautions, and shock prevention',
          ],
          prerequisitesJson: ['1.1 Voltage, Current, Ohm’s Law & Kirchhoff’s Laws (KCL / KVL)'],
          childAnalogyEn:
            'Think of a handsaw (ਲੱਕੜ ਚੀਰਨ ਵਾਲਾ ਆਰਾ) versus a conveyor belt! Direct Current (DC) is like a conveyor belt moving in one single continuous direction. Alternating Current (AC) is like two carpenters pushing and pulling a saw back and forth 50 times every single second (50 Hz)! Even though the saw moves back and forth without traveling across town, the teeth still cut through the thick wooden log (RMS energy transfer)!',
          childAnalogyPa:
            'ਲੱਕੜ ਚੀਰਨ ਵਾਲੇ ਆਰੇ ਅਤੇ ਰਨਿੰਗ ਟਰੈਕ ਦੀ ਕਲਪਨਾ ਕਰੋ! DC ਕਰੰਟ ਇੱਕ ਪਾਸੇ ਦੌੜਦੇ ਪਾਣੀ ਵਾਂਗ ਹੈ ਜੋ ਸਿੱਧਾ ਇੱਕੋ ਦਿਸ਼ਾ ਵਿੱਚ ਵਗਦਾ ਹੈ। AC ਕਰੰਟ ਦੋ ਤਰਖਾਣਾਂ ਵੱਲੋਂ ਆਰੇ ਨੂੰ ਇੱਕ ਸੈਕਿੰਡ ਵਿੱਚ 50 ਵਾਰ ਅੱਗੇ-ਪਿੱਛੇ ਖਿੱਚਣ ਵਾਂਗ ਹੈ (50 Hz ਫ੍ਰੀਕੁਐਂਸੀ)! ਭਾਵੇਂ ਆਰਾ ਆਪਣੀ ਥਾਂ ਤੋਂ ਕਿਧਰੇ ਦੂਰ ਨਹੀਂ ਜਾਂਦਾ, ਪਰ ਉਸਦੇ ਦੰਦੇ ਮੋਟੇ ਲੱਕੜ ਦੇ ਸ਼ਤੀਰ ਨੂੰ ਚੀਰ ਦਿੰਦੇ ਹਨ—ਇਹੀ AC ਦੀ ਕੰਮ ਕਰਨ ਵਾਲੀ RMS ਤਾਕਤ ਹੈ!',
          technicalExplanationEn:
            'Alternating electrical power transmits efficiently over long distances due to low-loss transformer stepping:\n\n1. Mathematical Parameters of a Sinusoid:\n• Instantaneous Voltage: v(t) = V_pk * sin(2 * π * f * t)\n• Peak-to-Peak Voltage: V_pp = 2 * V_pk\n• Half-Cycle Average: V_avg = (2 / π) * V_pk ≈ 0.637 * V_pk\n• Root-Mean-Square (RMS): Effective DC equivalent heating voltage: V_rms = V_pk / √2 ≈ 0.7071 * V_pk\n• Peak Factor (Crest Factor) = V_pk / V_rms = √2 ≈ 1.414\n• Form Factor = V_rms / V_avg = (π / 2√2) ≈ 1.11\n\n2. Domestic Electrical Wiring Standards (India / UK / Europe):\n• Phase / Live (Brown or Red): Carries high alternating potential (+325V to -325V peak relative to neutral).\n• Neutral (Blue or Black): Return conductor grounded at the local distribution transformer (0 V nominal).\n• Protective Earth (Green or Green/Yellow): Low-impedance safety bonding conductor connected to the metal chassis of appliances.\n\n3. Ground Fault Circuit Interrupter (GFCI) / RCCB:\nMonitors vector sum of currents: I_live + I_neutral = 0. If current leaks through a human being to ground (exceeding 30 mA), the core imbalance triggers a mechanical trip in less than 25 milliseconds, preventing ventricular fibrillation.',
          technicalExplanationPa:
            'AC ਬਿਜਲੀ ਦਾ ਵਿਗਿਆਨ ਅਤੇ ਸੁਰੱਖਿਆ ਨਿਯਮ:\n\n1. ਸਾਈਨ ਵੇਵ ਦੇ ਮਾਪ:\n• RMS ਵੋਲਟੇਜ (Vrms): ਉਹ ਵੋਲਟੇਜ ਜੋ DC ਜਿੰਨੀ ਹੀ ਗਰਮੀ ਪੈਦਾ ਕਰਦੀ ਹੈ: Vrms = Vpk / √2 ≈ 0.707 * Vpk\n• ਪੀਕ ਵੋਲਟੇਜ (Vpk): Vpk = Vrms * 1.414\n• ਭਾਰਤ/ਪੰਜਾਬ ਵਿੱਚ 230V ਘਰੇਲੂ ਸਪਲਾਈ ਦੀ ਪੀਕ ਵੋਲਟੇਜ ਲਗਭਗ 325 ਵੋਲਟ ਹੁੰਦੀ ਹੈ!\n\n2. ਥ੍ਰੀ-ਪਿਨ (3-Pin) ਸੁਰੱਖਿਆ ਵਾਇਰਿੰਗ:\n• ਫੇਜ਼ / ਲਾਈਵ (ਲਾਲ/ਭੂਰਾ): 230V AC ਲੈ ਕੇ ਆਉਂਦਾ ਹੈ।\n• ਨਿਊਟਰਲ (ਕਾਲਾ/ਨੀਲਾ): ਕਰੰਟ ਵਾਪਸ ਭੇਜਦਾ ਹੈ (0V ਰੈਫਰੈਂਸ)।\n• ਅਰਥ / ਅਰਥਿੰਗ (ਹਰਾ): ਸਭ ਤੋਂ ਮੋਟੀ ਪਿੰਨ, ਜੋ ਫਰਿੱਜ ਜਾਂ ਪ੍ਰੈਸ ਦੀ ਬਾਡੀ ਨਾਲ ਜੁੜੀ ਹੁੰਦੀ ਹੈ। ਜੇਕਰ ਅੰਦਰਲੀ ਤਾਰ ਬਾਡੀ ਨਾਲ ਛੂਹ ਜਾਵੇ, ਤਾਂ ਅਰਥਿੰਗ ਸਾਰਾ ਕਰੰਟ ਜ਼ਮੀਨ ਵਿੱਚ ਭੇਜ ਕੇ ਫਿਊਜ਼ ਉਡਾ ਦਿੰਦੀ ਹੈ ਅਤੇ ਬੰਦੇ ਨੂੰ ਕਰੰਟ ਨਹੀਂ ਲੱਗਦਾ!\n\n3. RCCB / ELCB ਸੁਰੱਖਿਆ:\nਜੇਕਰ 30 mA ਤੋਂ ਵੱਧ ਕਰੰਟ ਕਿਸੇ ਬੰਦੇ ਰਾਹੀਂ ਜ਼ਮੀਨ ਵਿੱਚ ਲੀਕ ਹੋਵੇ, ਤਾਂ ਇਹ ਸੈਕਿੰਡ ਦੇ 40ਵੇਂ ਹਿੱਸੇ (25 ms) ਵਿੱਚ ਸਾਰੀ ਬਿਜਲੀ ਬੰਦ ਕਰ ਦਿੰਦਾ ਹੈ।',
          practicalExampleEn:
            'Testing a clothes iron with a damaged internal heater wire touching its metal casing: If the socket lacks a connected Protective Earth pin, touching the iron casing exposes the user to full 230 V mains, resulting in a potentially fatal shock. With a properly bonded Earth ground, the fault current flows directly through the heavy green wire to ground, tripping the 16A MCB in milliseconds and protecting the user.',
          practicalExamplePa:
            'ਕੱਪੜੇ ਪ੍ਰੈਸ ਕਰਨ ਵਾਲੀ ਇਸਤਰੀ (Iron) ਦੀ ਉਦਾਹਰਣ: ਜੇਕਰ ਅੰਦਰੋਂ ਗਰਮ ਤਾਰ ਟੁੱਟ ਕੇ ਲੋਹੇ ਦੀ ਬਾਡੀ ਨਾਲ ਲੱਗ ਜਾਵੇ, ਅਤੇ ਪਲੱਗ ਵਿੱਚ ਅਰਥਿੰਗ ਨਾ ਹੋਵੇ, ਤਾਂ ਪ੍ਰੈਸ ਨੂੰ ਹੱਥ ਲਗਾਉਂਦੇ ਹੀ 230V ਦਾ ਜਾਨਲੇਵਾ ਝਟਕਾ ਲੱਗੇਗਾ! ਪਰ ਜੇਕਰ ਮੋਟੀ ਹਰੀ ਅਰਥਿੰਗ ਤਾਰ ਜੁੜੀ ਹੈ, ਤਾਂ ਕਰੰਟ ਤੁਰੰਤ ਜ਼ਮੀਨ ਵਿੱਚ ਜਾਵੇਗਾ ਅਤੇ ਕੰਧ ਉੱਤੇ ਲੱਗਿਆ MCB ਖਟਾਕ ਕਰਕੇ ਡਿੱਗ ਪਵੇਗਾ, ਜਿਸ ਨਾਲ ਬੰਦੇ ਦੀ ਜਾਨ ਬਚ ਜਾਵੇਗੀ।',
          codeDemo: `// TypeScript: AC Waveform Analyzer & Electrical Shock Thresholds
export function analyzeAcWaveform(vRms: number, frequencyHz: number) {
  const vPeak = vRms * Math.SQRT2;
  const vPeakToPeak = 2 * vPeak;
  const periodSeconds = 1 / frequencyHz;
  const vAvgHalfWave = (2 / Math.PI) * vPeak;

  return {
    vRms,
    vPeak,
    vPeakToPeak,
    periodMs: periodSeconds * 1000,
    vAvgHalfWave,
    crestFactor: vPeak / vRms,
  };
}

export function classifyElectricalShockHazard(currentMilliamps: number): string {
  if (currentMilliamps < 1.0) return 'Imperceptible to slight tingling sensation';
  if (currentMilliamps < 10.0) return 'Perceptible shock, involuntary muscle contraction, can let go';
  if (currentMilliamps < 30.0) return 'Severe muscular contractions; breathing difficult; "cannot let go" threshold!';
  if (currentMilliamps < 100.0) return 'Extreme danger: Ventricular fibrillation can occur within seconds!';
  return 'Fatal cardiac arrest, severe thermal organ burns, immediate fatality risk!';
}

// Verification for 230V 50Hz mains:
const mains = analyzeAcWaveform(230, 50);
console.log('Peak Voltage:', mains.vPeak.toFixed(1), 'V'); // 325.3 V
console.log('Period:', mains.periodMs.toFixed(1), 'ms');    // 20.0 ms`,
          misconceptionsJson: [
            {
              myth: '230 V AC is safer than 230 V DC.',
              truthEn:
                '50/60 Hz AC is significantly more dangerous to the human heart than DC of the same voltage because power line frequencies closely match the vulnerable cycle of cardiac ventricular fibrillation.',
              truthPa:
                '50 Hz AC ਕਰੰਟ DC ਨਾਲੋਂ ਕਿਤੇ ਜ਼ਿਆਦਾ ਖ਼ਤਰਨਾਕ ਹੁੰਦਾ ਹੈ ਕਿਉਂਕਿ 50 Hz ਦੀ ਕੰਬਣੀ ਦਿਲ ਦੀ ਧੜਕਣ ਨੂੰ ਬੇਤਾਲ ਕਰਕੇ ਦਿਲ ਦਾ ਦੌਰਾ (Cardiac Arrest) ਪੈਦਾ ਕਰ ਦਿੰਦੀ ਹੈ।',
            },
            {
              myth: 'The Neutral wire and Earth wire are identical and can be shorted together anywhere in a house.',
              truthEn:
                'Neutral carries normal operating return current and has small resistive voltage drops under load. Earth is an exclusively fault-carrying protective conductor. Joining them inside a branch circuit creates dangerous ground loops and trips RCCB/GFCI breakers immediately.',
              truthPa:
                'ਨਿਊਟਰਲ ਅਤੇ ਅਰਥਿੰਗ ਨੂੰ ਘਰ ਦੇ ਅੰਦਰ ਕਦੇ ਆਪਸ ਵਿੱਚ ਨਹੀਂ ਜੋੜਨਾ ਚਾਹੀਦਾ। ਨਿਊਟਰਲ ਵਿੱਚ ਕਰੰਟ ਚੱਲ ਰਿਹਾ ਹੁੰਦਾ ਹੈ, ਜਦਕਿ ਅਰਥਿੰਗ ਸਿਰਫ਼ ਦੁਰਘਟਨਾ ਵੇਲੇ ਸੁਰੱਖਿਆ ਲਈ ਹੁੰਦੀ ਹੈ।',
            },
            {
              myth: 'Pure rubber gloves or regular sports sneakers will always protect you from high voltage.',
              truthEn:
                'Household rubber gloves or thin sneakers have dielectric breakdown ratings far below mains peak voltages (often punctured by >300 V). Only certified electrical PPE rated for the working voltage provides true protection.',
              truthPa:
                'ਰਸੋਈ ਵਾਲੇ ਦਸਤਾਨੇ ਜਾਂ ਆਮ ਜਾਗਰ ਬੂਟ 230V ਜਾਂ ਹਾਈ ਵੋਲਟੇਜ ਨੂੰ ਨਹੀਂ ਰੋਕ ਸਕਦੇ। ਬਿਜਲੀ ਦੇ ਕੰਮ ਲਈ ਸਿਰਫ਼ ਸਰਟੀਫਾਈਡ ਇਲੈਕਟ੍ਰੀਕਲ ਟੂਲ ਅਤੇ ਬੂਟ ਹੀ ਵਰਤਣੇ ਚਾਹੀਦੇ ਹਨ।',
            },
          ],
          terminologyJson: [
            {
              term: 'Alternating Current (AC)',
              punjabi: 'ਆਲਟਰਨੇਟਿੰਗ ਕਰੰਟ (AC)',
              meaningEn: 'Electric current that periodically reverses its direction and changes its magnitude continuously with time.',
              meaningPa: 'ਬਿਜਲੀ ਦਾ ਉਹ ਕਰੰਟ ਜੋ ਸਮੇਂ ਦੇ ਨਾਲ ਆਪਣੀ ਦਿਸ਼ਾ ਅਤੇ ਮਾਪ ਲਗਾਤਾਰ ਬਦਲਦਾ ਰਹਿੰਦਾ ਹੈ।',
            },
            {
              term: 'Frequency (f)',
              punjabi: 'ਫ੍ਰੀਕੁਐਂਸੀ',
              meaningEn: 'Number of complete cycles per second of an alternating waveform, measured in Hertz (Hz).',
              meaningPa: 'ਇੱਕ ਸਕਿੰਟ ਵਿੱਚ ਪੂਰੇ ਹੋਣ ਵਾਲੇ ਚੱਕਰਾਂ ਦੀ ਗਿਣਤੀ (ਹਰਟਜ਼, Hz)।',
            },
            {
              term: 'Period (T)',
              punjabi: 'ਆਵਰਤ ਕਾਲ (ਸਮਾਂ)',
              meaningEn: 'Time duration required to complete one full sinusoidal cycle (T = 1 / f).',
              meaningPa: 'ਇੱਕ ਪੂਰਾ ਚੱਕਰ ਕੱਟਣ ਲਈ ਲੱਗਣ ਵਾਲਾ ਸਮਾਂ।',
            },
            {
              term: 'RCCB / GFCI',
              punjabi: 'ਅਰਥ ਲੀਕੇਜ ਸੁਰੱਖਿਆ ਸਵਿੱਚ',
              meaningEn: 'Residual current device detecting minute current leakage to ground and tripping power to prevent electrocution.',
              meaningPa: 'ਜ਼ਮੀਨ ਵਿੱਚ ਕਰੰਟ ਲੀਕ ਹੁੰਦੇ ਹੀ ਬਿਜਲੀ ਕੱਟਣ ਵਾਲਾ ਆਟੋਮੈਟਿਕ ਸੇਫਟੀ ਯੰਤਰ।',
            },
            {
              term: 'Protective Earth (PE)',
              punjabi: 'ਸੁਰੱਖਿਆ ਅਰਥਿੰਗ',
              meaningEn: 'Dedicated low-resistance conductor providing a safe fault-current return path to ground.',
              meaningPa: 'ਯੰਤਰਾਂ ਦੀ ਲੋਹੇ ਦੀ ਬਾਡੀ ਨੂੰ ਜ਼ਮੀਨ ਨਾਲ ਜੋੜਨ ਵਾਲੀ ਸੁਰੱਖਿਆ ਤਾਰ।',
            },
            {
              term: 'Ventricular Fibrillation',
              punjabi: 'ਦਿਲ ਦੀ ਧੜਕਣ ਵਿਗੜਨਾ',
              meaningEn: 'Uncoordinated chaotic twitching of heart ventricles triggered by electric shock currents above 50 mA.',
              meaningPa: 'ਬਿਜਲੀ ਦੇ ਝਟਕੇ ਕਾਰਨ ਦਿਲ ਦੀ ਧੜਕਣ ਦਾ ਬੇਕਾਬੂ ਹੋ ਕੇ ਖੂਨ ਪੰਪ ਕਰਨਾ ਬੰਦ ਕਰ ਦੇਣਾ।',
            },
          ],
          interactiveLabId: 'resistor-calc',
          exercisePromptEn:
            'Inspection Task: (1) An oscilloscope displays a 50 Hz sine wave with a peak-to-peak voltage of 650 V. Calculate its RMS voltage. (2) If a human body dry resistance is 2000 Ω, calculate the prospective current in mA if accidentally touching 230 V RMS mains. Consult the shock chart to state the physiological hazard.',
          exercisePromptPa:
            'ਪੜਤਾਲੀਆ ਕੰਮ: (1) ਇੱਕ ਔਸੀਲੋਸਕੋਪ ਉੱਤੇ 50 Hz ਸਾਈਨ ਵੇਵ ਦਾ ਪੀਕ-ਟੂ-ਪੀਕ ਮੁੱਲ 650 V ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ। ਇਸਦਾ RMS ਵੋਲਟੇਜ ਪਤਾ ਕਰੋ। (2) ਜੇਕਰ ਸੁੱਕੇ ਸਰੀਰ ਦੀ ਰਜਿਸਟੈਂਸ 2000 Ω ਹੋਵੇ, ਤਾਂ 230V ਨੂੰ ਹੱਥ ਲੱਗਣ ਤੇ ਕਿੰਨੇ mA ਕਰੰਟ ਲੰਘੇਗਾ ਅਤੇ ਕੀ ਖ਼ਤਰਾ ਪੈਦਾ ਹੋਵੇਗਾ?',
          summaryEn:
            'AC power powers the world because of easy voltage transformation, but safety demands rigorous respect for peak potentials, 3-wire grounding, RCCB trip protection, and safe isolation protocols.',
          summaryPa:
            'AC ਬਿਜਲੀ ਦੁਨੀਆ ਨੂੰ ਚਲਾਉਂਦੀ ਹੈ ਕਿਉਂਕਿ ਇਸਨੂੰ ਟ੍ਰਾਂਸਫਾਰਮਰ ਰਾਹੀਂ ਵਧਾਇਆ-ਘਟਾਇਆ ਜਾ ਸਕਦਾ ਹੈ, ਪਰ ਇਸਦੀ ਉੱਚ ਪੀਕ ਵੋਲਟੇਜ ਕਾਰਨ 3-ਪਿੰਨ ਅਰਥਿੰਗ ਅਤੇ RCCB ਸੁਰੱਖਿਆ ਬੇਹੱਦ ਜ਼ਰੂਰੀ ਹੈ।',
          furtherReadingJson: [
            'Electrical Safety Code Manual: A Plain Language Guide by Kimberley Keller',
            'IEEE Standard 80: Guide for Safety in AC Substation Grounding',
            'NFPA 70E: Standard for Electrical Safety in the Workplace',
          ],
          quiz: {
            titleEn: 'Level 1 Assessment: AC Waveforms, RMS & Electrical Safety',
            titlePa: 'ਲੈਵਲ 1 ਟੈਸਟ: AC ਵੇਵਫਾਰਮਾਂ, RMS ਅਤੇ ਸੁਰੱਖਿਆ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'AC Frequency',
                promptEn: 'What is the period (T) of a 50 Hz alternating current electrical mains cycle?',
                promptPa: '50 Hz ਦੀ AC ਬਿਜਲੀ ਦੇ ਇੱਕ ਚੱਕਰ ਦਾ ਸਮਾਂ (Period) ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?',
                optionsJson: ['20 milliseconds', '10 milliseconds', '50 milliseconds', '2 milliseconds'],
                correctAnswer: '20 milliseconds',
                explanationEn:
                  'T = 1 / f = 1 / 50 Hz = 0.020 seconds = 20 milliseconds.',
                explanationPa:
                  'T = 1 / 50 = 0.02 ਸੈਕਿੰਡ = 20 ਮਿਲੀਸਕਿੰਟ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'RMS Voltage',
                promptEn: 'What is the peak voltage (Vpk) of standard Indian / European 230 V RMS domestic mains?',
                promptPa: 'ਭਾਰਤ ਅਤੇ ਯੂਰਪ ਦੀ 230V RMS ਘਰੇਲੂ ਬਿਜਲੀ ਦੀ ਪੀਕ ਵੋਲਟੇਜ ਕਿੰਨੀ ਹੁੰਦੀ ਹੈ?',
                optionsJson: ['Approximately 325 V', '230 V', '460 V', '162 V'],
                correctAnswer: 'Approximately 325 V',
                explanationEn:
                  'Vpk = Vrms * √2 = 230 * 1.4142 ≈ 325.27 V.',
                explanationPa:
                  'Vpk = 230 * 1.414 ≈ 325.3 ਵੋਲਟ ਹੁੰਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Peak-to-Peak',
                promptEn: 'If an oscilloscope measures a sine wave with a peak voltage of 15 V, what is its peak-to-peak voltage (Vpp)?',
                promptPa: 'ਜੇਕਰ ਕਿਸੇ ਸਾਈਨ ਵੇਵ ਦੀ ਪੀਕ ਵੋਲਟੇਜ 15 V ਹੈ ਤਾਂ ਉਸਦੀ ਪੀਕ-ਟੂ-ਪੀਕ (Vpp) ਵੋਲਟੇਜ ਕਿੰਨੀ ਹੋਵੇਗੀ?',
                optionsJson: ['30 V', '15 V', '10.6 V', '21.2 V'],
                correctAnswer: '30 V',
                explanationEn:
                  'Vpp = 2 * Vpk = 2 * 15 V = 30 V.',
                explanationPa:
                  'Vpp = 2 * 15 = 30 ਵੋਲਟ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Electrical Safety',
                promptEn: 'What is the primary function of the third (longest and thickest) pin in a standard domestic 3-pin plug?',
                promptPa: 'ਘਰੇਲੂ 3-ਪਿਨ ਪਲੱਗ ਵਿੱਚ ਸਭ ਤੋਂ ਲੰਮੀ ਅਤੇ ਮੋਟੀ ਤੀਜੀ ਪਿੰਨ ਦਾ ਮੁੱਖ ਕੰਮ ਕੀ ਹੈ?',
                optionsJson: [
                  'To connect the appliance metal chassis directly to protective earth ground before live connection',
                  'To supply extra neutral current for heavy appliances',
                  'To regulate the mains frequency',
                  'To act purely as a mechanical lock',
                ],
                correctAnswer: 'To connect the appliance metal chassis directly to protective earth ground before live connection',
                explanationEn:
                  'The earth pin is longer so it connects first and disconnects last, ensuring user safety against insulation faults at all times.',
                explanationPa:
                  'ਇਹ ਅਰਥਿੰਗ ਪਿੰਨ ਹੁੰਦੀ ਹੈ ਜੋ ਉਪਕਰਨ ਦੀ ਲੋਹੇ ਦੀ ਬਾਡੀ ਨੂੰ ਜ਼ਮੀਨ ਨਾਲ ਜੋੜਦੀ ਹੈ ਤਾਂ ਜੋ ਸ਼ਾਰਟ ਹੋਣ ਤੇ ਕਰੰਟ ਨਾ ਲੱਗੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'GFCI / RCCB',
                promptEn: 'What trip current threshold is legally mandated for domestic life-safety RCCB (Residual Current Circuit Breakers)?',
                promptPa: 'ਘਰਾਂ ਵਿੱਚ ਜਾਨ ਬਚਾਉਣ ਵਾਲੇ RCCB ਲਈ ਕਿੰਨੇ ਮਿਲੀਐਂਪੀਅਰ (mA) ਦਾ ਲੀਕੇਜ ਕਰੰਟ ਤੈਅ ਕੀਤਾ ਗਿਆ ਹੈ?',
                optionsJson: ['30 mA', '100 mA', '500 mA', '10 A'],
                correctAnswer: '30 mA',
                explanationEn:
                  '30 mA is the internationally recognized physiological safety limit to prevent lethal cardiac ventricular fibrillation.',
                explanationPa:
                  '30 mA ਉਹ ਸੁਰੱਖਿਆ ਸੀਮਾ ਹੈ ਜਿਸ ਤੋਂ ਵੱਧ ਕਰੰਟ ਲੀਕ ਹੁੰਦੇ ਹੀ RCCB ਬਿਜਲੀ ਕੱਟ ਦਿੰਦਾ ਹੈ ਤਾਂ ਜੋ ਦਿਲ ਨੂੰ ਨੁਕਸਾਨ ਨਾ ਪਹੁੰਚੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Wire Colour Codes',
                promptEn: 'According to modern IEC / Indian electrical wiring standards, what colour is the Live / Phase conductor?',
                promptPa: 'ਨਵੇਂ IEC ਅਤੇ ਭਾਰਤੀ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਲਾਈਵ / ਫੇਜ਼ ਤਾਰ ਦਾ ਰੰਗ ਕਿਹੜਾ ਹੁੰਦਾ ਹੈ?',
                optionsJson: ['Brown (or Red in 3-phase)', 'Blue', 'Green with yellow stripe', 'Black'],
                correctAnswer: 'Brown (or Red in 3-phase)',
                explanationEn:
                  'Under IEC 60446, single-phase Live is Brown (or Red in legacy/3-phase R-Y-B), Neutral is Blue, and Earth is Green/Yellow.',
                explanationPa:
                  'ਸਿੰਗਲ ਫੇਜ਼ ਵਿੱਚ ਲਾਈਵ ਤਾਰ ਭੂਰੀ (ਜਾਂ ਲਾਲ) ਹੁੰਦੀ ਹੈ, ਨਿਊਟਰਲ ਨੀਲੀ ਹੁੰਦੀ ਹੈ, ਅਤੇ ਅਰਥ ਹਰੀ/ਪੀਲੀ ਹੁੰਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Physiological Shock',
                promptEn: 'At what AC current level through the chest does the "cannot let go" threshold (tetanic muscle freeze) typically begin?',
                promptPa: 'ਛਾਤੀ ਵਿੱਚੋਂ ਲਗਭਗ ਕਿੰਨਾ AC ਕਰੰਟ ਲੰਘਣ ਤੇ ਮਾਸਪੇਸ਼ੀਆਂ ਜਕੜੀਆਂ ਜਾਂਦੀਆਂ ਹਨ ਅਤੇ ਤਾਰ ਛੱਡਣੀ ਅਸੰਭਵ ਹੋ ਜਾਂਦੀ ਹੈ?',
                optionsJson: ['10 mA to 20 mA', '0.5 mA', '1 mA', '1000 mA'],
                correctAnswer: '10 mA to 20 mA',
                explanationEn:
                  'Between 10 mA and 20 mA at 50/60 Hz, muscles contract involuntarily so the victim cannot release the grasped conductor.',
                explanationPa:
                  '10 ਤੋਂ 20 mA ਉੱਤੇ ਹੱਥ ਦੀਆਂ ਮਾਸਪੇਸ਼ੀਆਂ ਇੰਨੀਆਂ ਕਸ ਕੇ ਬੰਦ ਹੋ ਜਾਂਦੀਆਂ ਹਨ ਕਿ ਇਨਸਾਨ ਖੁਦ ਤਾਰ ਨਹੀਂ ਛੱਡ ਸਕਦਾ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Average vs RMS',
                promptEn: 'What is the full-cycle average voltage of a pure, symmetrical sine wave?',
                promptPa: 'ਇੱਕ ਸ਼ੁੱਧ ਅਤੇ ਸਮਮਿਤ (Symmetrical) ਸਾਈਨ ਵੇਵ ਦਾ ਇੱਕ ਪੂਰੇ ਚੱਕਰ ਲਈ ਔਸਤ ਵੋਲਟੇਜ ਕੀ ਹੁੰਦਾ ਹੈ?',
                optionsJson: ['Exactly 0 Volts', '0.707 * Vpk', '0.637 * Vpk', 'Equal to Vpk'],
                correctAnswer: 'Exactly 0 Volts',
                explanationEn:
                  'The positive half-cycle exactly cancels out the negative half-cycle over a full 360° period, yielding an average of 0 V.',
                explanationPa:
                  'ਅੱਧਾ ਚੱਕਰ ਪਾਜ਼ਿਟਿਵ ਅਤੇ ਅੱਧਾ ਨੈਗੇਟਿਵ ਹੋਣ ਕਰਕੇ ਪੂਰੇ ਚੱਕਰ ਦਾ ਔਸਤ ਬਿਲਕੁਲ 0 ਵੋਲਟ ਹੁੰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Circuit Protection',
                promptEn: 'How does a fast-acting fuse protect electronic equipment against short circuits?',
                promptPa: 'ਇੱਕ ਤੇਜ਼-ਕੰਮ ਕਰਨ ਵਾਲਾ ਫਿਊਜ਼ ਸ਼ਾਰਟ ਸਰਕਟ ਤੋਂ ਇਲੈਕਟ੍ਰਾਨਿਕ ਯੰਤਰਾਂ ਦੀ ਕਿਵੇਂ ਰੱਖਿਆ ਕਰਦਾ ਹੈ?',
                optionsJson: [
                  'Excessive I^2 * R heating melts the sacrificial thin wire link, opening the circuit permanently',
                  'It absorbs the extra voltage and stores it as static charge',
                  'It reverses the direction of current flow',
                  'It emits an audible beep to warn the user',
                ],
                correctAnswer: 'Excessive I^2 * R heating melts the sacrificial thin wire link, opening the circuit permanently',
                explanationEn:
                  'Fuses use Joule heating (I^2 * t): excessive fault current quickly melts the calibrated thin metal wire, breaking the circuit.',
                explanationPa:
                  'ਜਦੋਂ ਬਹੁਤ ਜ਼ਿਆਦਾ ਕਰੰਟ ਲੰਘਦਾ ਹੈ, ਤਾਂ I^2 * R ਗਰਮੀ ਨਾਲ ਫਿਊਜ਼ ਦੀ ਬਾਰੀਕ ਤਾਰ ਪਿਘਲ ਜਾਂਦੀ ਹੈ ਅਤੇ ਸਰਕਟ ਖੁੱਲ੍ਹ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Measurement Safety',
                promptEn: 'Why must you NEVER attempt to measure household mains voltage with a multimeter set to the "Current / Amps" mode?',
                promptPa: 'ਮਲਟੀਮੀਟਰ ਨੂੰ "Amps (ਕਰੰਟ)" ਮੋਡ ਤੇ ਰੱਖ ਕੇ ਕਦੇ ਵੀ ਸਿੱਧਾ ਘਰ ਦੀ 230V ਸਾਕਟ ਵਿੱਚ ਕਿਉਂ ਨਹੀਂ ਲਗਾਉਣਾ ਚਾਹੀਦਾ?',
                optionsJson: [
                  'The current mode input has near-zero internal resistance, creating a massive direct short circuit that can explode the meter',
                  'The display will merely read zero',
                  'The multimeter battery will drain instantly',
                  'The AC frequency will drop to DC',
                ],
                correctAnswer: 'The current mode input has near-zero internal resistance, creating a massive direct short circuit that can explode the meter',
                explanationEn:
                  'Current shunts have near-zero resistance (<0.01 Ω). Connecting them across 230 V causes hundreds of amps to flash, causing an arc flash explosion if unrated.',
                explanationPa:
                  'ਕਰੰਟ ਮੋਡ ਵਿੱਚ ਮਲਟੀਮੀਟਰ ਦੀ ਆਪਣੀ ਰਜਿਸਟੈਂਸ ਲਗਭਗ ਜ਼ੀਰੋ ਹੁੰਦੀ ਹੈ। ਇਸਨੂੰ 230V ਵਿੱਚ ਲਗਾਉਣ ਨਾਲ ਭਿਆਨਕ ਸ਼ਾਰਟ ਸਰਕਟ ਹੋਵੇਗਾ ਅਤੇ ਧਮਾਕਾ ਹੋ ਸਕਦਾ ਹੈ।',
              },
            ],
          },
        },
      ],
    },
  ],
};
