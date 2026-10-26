import { SeedCourse } from './types.ts';

export const LEVEL_6_COURSE: SeedCourse = {
  slug: 'level-6-power-supplies-and-power-electronics',
  levelNumber: 6,
  titleEn: 'Level 6: Power Supplies & Power Electronics',
  titlePa: 'ਲੈਵਲ 6: ਪਾਵਰ ਸਪਲਾਈ ਅਤੇ ਪਾਵਰ ਇਲੈਕਟ੍ਰਾਨਿਕਸ (Power Electronics)',
  descriptionEn:
    'Linear power supplies, 78xx/LM317 regulators, Low-Dropout (LDO) regulators, Switch-Mode Power Supplies (Buck, Boost, Buck-Boost, Flyback), PWM control, thermal design, Lithium/LiFePO4 battery management systems (BMS), and inverters.',
  descriptionPa:
    'ਲੀਨੀਅਰ ਰੈਗੂਲੇਟਰ (7805, LM317), LDO, ਸਵਿੱਚ ਮੋਡ ਪਾਵਰ ਸਪਲਾਈ (ਬੱਕ, ਬੂਸਟ, ਫਲਾਈਬੈਕ ਕਨਵਰਟਰ), PWM ਕੰਟਰੋਲ, ਲਿਥੀਅਮ ਬੈਟਰੀ BMS, ਅਤੇ ਸੋਲਰ/ਘਰੇਲੂ ਇਨਵਰਟਰ।',
  category: 'core-electronics',
  estimatedHours: 18,
  modules: [
    {
      orderIndex: 1,
      titleEn: 'Linear Power Supplies, Regulators & Low-Dropout (LDO) Devices',
      titlePa: 'ਲੀਨੀਅਰ ਪਾਵਰ ਸਪਲਾਈ, ਰੈਗੂਲੇਟਰ ਅਤੇ LDO',
      summaryEn:
        'Mains step-down rectification, capacitor ripple smoothing, 78xx fixed regulators, LM317 adjustable regulators, LDO dropout mechanisms, and thermal dissipation.',
      summaryPa:
        'ਟ੍ਰਾਂਸਫਾਰਮਰ ਰੈਕਟੀਫਿਕੇਸ਼ਨ, 7805 ਫਿਕਸਡ ਰੈਗੂਲੇਟਰ, LM317 ਵੇਰੀਏਬਲ ਰੈਗੂਲੇਟਰ, LDO, ਅਤੇ ਹੀਟ ਸਿੰਕ ਗਣਨਾ।',
      lessons: [
        {
          slug: 'linear-power-supplies-ldo-thermal',
          orderIndex: 1,
          titleEn: '6.1 Linear Power Supplies, 78xx, LM317, LDOs & Thermal Sinks',
          titlePa: '6.1 ਲੀਨੀਅਰ ਪਾਵਰ ਸਪਲਾਈ, 7805, LM317, LDO ਅਤੇ ਹੀਟ ਸਿੰਕ ਡਿਜ਼ਾਈਨ',
          objectivesJson: [
            'Analyze linear regulation: drop-out voltage, line regulation, load regulation, and ripple rejection (PSRR)',
            'Design adjustable voltage regulators using the LM317 calculating exact programming resistor values (R1 and R2)',
            'Explain Low-Dropout (LDO) architecture using P-channel MOSFET / PNP pass elements and evaluate ESR stability zones',
            'Perform thermal dissipation calculations and size aluminum heat sinks to prevent thermal shutdown',
          ],
          prerequisitesJson: ['Level 3: Semiconductor Devices (Zener diodes, BJTs, and thermal resistance)'],
          childAnalogyEn:
            'Think of pouring milk from a tall 12-foot tank into a small 5-foot bucket! A Linear Regulator is like a person with a valve constantly holding back the excess 7 feet of milk pressure by pressing their hand against it—their hand gets burning hot (wasted heat energy)! If you pour 1 liter per minute, the person must burn up that pressure difference as pure heat. An LDO is a very clever valve that works even if the milk tank is just 5.2 feet tall!',
          childAnalogyPa:
            '12 ਫੁੱਟ ਉੱਚੀ ਟੈਂਕੀ ਤੋਂ 5 ਫੁੱਟ ਵਾਲੀ ਬਾਲਟੀ ਵਿੱਚ ਦੁੱਧ ਪਾਉਣ ਦੀ ਕਲਪਨਾ ਕਰੋ! ਲੀਨੀਅਰ ਰੈਗੂਲੇਟਰ (7805) ਉਸ ਬੰਦੇ ਵਾਂਗ ਹੈ ਜੋ ਵਾਧੂ 7 ਫੁੱਟ ਦੇ ਦਬਾਅ ਨੂੰ ਆਪਣੇ ਹੱਥ ਨਾਲ ਜ਼ੋਰ ਨਾਲ ਦਬਾ ਕੇ ਰੋਕ ਰਿਹਾ ਹੈ—ਇਸ ਕਾਰਨ ਉਸਦਾ ਹੱਥ ਗਰਮੀ ਨਾਲ ਸੜਨ ਲੱਗ ਪੈਂਦਾ ਹੈ (ਬਰਬਾਦ ਹੋਈ ਗਰਮੀ)! LDO ਇੱਕ ਬਹੁਤ ਹੀ ਕਾਰਗਰ ਵਾਲਵ ਹੈ ਜੋ ਟੈਂਕੀ ਸਿਰਫ਼ 5.2 ਫੁੱਟ ਉੱਚੀ ਹੋਣ ਤੇ ਵੀ ਬਿਨਾਂ ਅਟਕੇ ਦੁੱਧ ਪੂਰਾ ਭਰ ਦਿੰਦਾ ਹੈ!',
          technicalExplanationEn:
            'Linear regulators maintain rock-solid output voltages with ultra-low noise at the cost of thermal efficiency:\n\n1. 78xx / 79xx Fixed Voltage Regulators:\n• 3-Terminal series: 7805 (+5V), 7812 (+12V), 7815 (+15V), 7905 (-5V).\n• Minimum Dropout Voltage: Typically 2.0 V (An input of at least 7.0 V is mandatory to produce a stable 5.0 V from a 7805).\n• Internal Protections: Thermal overload shutdown, internal short-circuit current limiting, safe-area protection.\n\n2. LM317 Adjustable Regulator:\n• Internal bandgap reference: V_ref = 1.25 V between OUT and ADJ pins.\n• Output Formula: V_out = 1.25 V * (1 + R_2 / R_1) + (I_adj * R_2).\n• Setting R_1 = 240 Ω maintains the minimum 5 mA load current; since I_adj is small (~50 µA), it simplifies to V_out ≈ 1.25 * (1 + R_2/R_1).\n\n3. Low-Dropout Regulators (LDOs):\n• Conventional NPN Darlington pass transistors have high dropout (V_drop ≈ 2 * V_be ≈ 1.5V - 2.0V).\n• Modern LDOs use a single P-channel MOSFET or lateral PNP transistor: dropout voltage drops to V_drop = I_load * R_ds(on) (often only 50 mV to 200 mV).\n• Stability Requirement: High-gain LDO error amplifiers require output capacitors within a specific Equivalent Series Resistance (ESR) stability tunnel to avoid oscillation.\n\n4. Power Dissipation & Thermal Sinks:\n• P_d = (V_in - V_out) * I_load + (V_in * I_ground)\n• Thermal Circuit: T_j = T_amb + P_d * (θ_jc + θ_cs + θ_sa).\n• Maximum allowable heatsink thermal resistance: θ_sa ≤ [(T_j_max - T_amb) / P_d] - θ_jc - θ_cs.',
          technicalExplanationPa:
            'ਲੀਨੀਅਰ ਰੈਗੂਲੇਟਰਾਂ ਦੀ ਕਾਰਜਪ੍ਰਣਾਲੀ:\n\n1. 7805 ਰੈਗੂਲੇਟਰ:\n• 12V ਜਾਂ 9V ਨੂੰ ਬਿਲਕੁਲ ਸਾਫ਼ 5.0V DC ਬਣਾਉਂਦਾ ਹੈ।\n• ਡ੍ਰੌਪ-ਆਊਟ ਵੋਲਟੇਜ: ਘੱਟੋ-ਘੱਟ 2 ਵੋਲਟ ਵੱਧ ਇਨਪੁਟ ਚਾਹੀਦੀ ਹੈ (ਯਾਨੀ 5V ਲਈ ਘੱਟੋ-ਘੱਟ 7V ਇਨਪੁਟ ਜ਼ਰੂਰੀ ਹੈ)।\n\n2. LM317 ਐਡਜਸਟੇਬਲ ਰੈਗੂਲੇਟਰ:\n• ਦੋ ਰਜਿਸਟਰਾਂ (R1 ਅਤੇ R2) ਨਾਲ 1.25V ਤੋਂ 37V ਤੱਕ ਮਨਚਾਹੀ ਵੋਲਟੇਜ ਸੈੱਟ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ: Vout = 1.25 * (1 + R2/R1)।\n\n3. LDO (Low-Dropout Regulator, ਜਿਵੇਂ AMS1117):\n• ਇਹ ਸਿਰਫ਼ 0.2V ਤੋਂ 1.0V ਦੇ ਫ਼ਰਕ ਤੇ ਵੀ ਕੰਮ ਕਰ ਲੈਂਦਾ ਹੈ। ਲਿਥੀਅਮ ਬੈਟਰੀ (3.7V) ਤੋਂ 3.3V ਕੱਢਣ ਲਈ LDO ਜ਼ਰੂਰੀ ਹੁੰਦਾ ਹੈ।\n\n4. ਗਰਮੀ ਦਾ ਨੁਕਸਾਨ (Heat Loss):\n• ਬਰਬਾਦ ਪਾਵਰ: P = (Vin - Vout) * I। ਜੇਕਰ 12V ਤੋਂ 5V @ 1A ਬਣਾਉਗੇ ਤਾਂ (12-5)*1 = 7 ਵਾਟ ਬਿਜਲੀ ਗਰਮੀ ਬਣ ਕੇ ਉੱਡੇਗੀ! ਇਸ ਲਈ ਵੱਡਾ ਐਲੂਮੀਨੀਅਮ ਹੀਟ ਸਿੰਕ ਲਗਾਉਣਾ ਪੈਂਦਾ ਹੈ।',
          practicalExampleEn:
            'Powering an ESP32 (3.3V @ 250 mA peak) from a 9V alkaline battery using an AMS1117-3.3 LDO: Power dropped as heat in the regulator is P = (9V - 3.3V) * 0.25A = 5.7V * 0.25A = 1.425 Watts! In a tiny SOT-223 package with theta_ja = 90 °C/W, temperature rise is 1.425 W * 90 °C/W = 128 °C above ambient! At room temperature (25°C), the chip reaches 153°C and enters thermal shutdown. Solution: Use a step-down buck converter instead of a linear regulator.',
          practicalExamplePa:
            '9V ਬੈਟਰੀ ਤੋਂ ESP32 (3.3V @ 250 mA) ਚਲਾਉਣਾ: ਰੈਗੂਲੇਟਰ ਵਿੱਚ ਗਰਮੀ: (9 - 3.3) * 0.25 = 1.42 ਵਾਟ। ਬਿਨਾਂ ਹੀਟ ਸਿੰਕ ਦੇ ਇਹ ਨਿੱਕੀ ਚਿੱਪ 150°C ਤੱਕ ਉਬਲ ਜਾਵੇਗੀ ਅਤੇ ਫੋਨ/ਬੋਰਡ ਬੰਦ ਹੋ ਜਾਵੇਗਾ। ਅਜਿਹੇ ਕੰਮ ਲਈ ਲੀਨੀਅਰ ਦੀ ਥਾਂ ਬੱਕ ਕਨਵਰਟਰ (Switching Regulator) ਲਗਾਉਣਾ ਚਾਹੀਦਾ ਹੈ।',
          codeDemo: `// TypeScript: LM317 Resistor Calculator & Thermal Heatsink Sizer
export function calcLm317Resistors(targetVout: number, r1Ohms = 240) {
  if (targetVout < 1.25) throw new Error('LM317 cannot output less than 1.25 V');
  const r2Ohms = r1Ohms * (targetVout / 1.25 - 1);
  return { r1Ohms, r2Ohms, calculatedVout: 1.25 * (1 + r2Ohms / r1Ohms) };
}

export function sizeHeatsink(vIn: number, vOut: number, iLoad: number, tAmb = 35, tJmax = 125, thetaJc = 3.0, thetaCs = 1.0) {
  const pLossWatts = (vIn - vOut) * iLoad;
  const maxTotalTheta = (tJmax - tAmb) / pLossWatts;
  const maxSinkTheta = maxTotalTheta - thetaJc - thetaCs;

  return {
    powerLossWatts: pLossWatts,
    requiredHeatsinkRatingDegCWatt: maxSinkTheta,
    isHeatsinkMandatory: pLossWatts > 1.0,
  };
}

// Verification: 12V in, 5V out @ 1.5A load (LM317 or 7805):
const hs = sizeHeatsink(12, 5, 1.5);
console.log('Power Dissipation:', hs.powerLossWatts.toFixed(1), 'Watts'); // 10.5 W
console.log('Max Heatsink θsa:', hs.requiredHeatsinkRatingDegCWatt.toFixed(2), '°C/W'); // ~4.57 °C/W`,
          misconceptionsJson: [
            {
              myth: 'A 7805 regulator outputting 5V from a 24V supply is 80% efficient.',
              truthEn:
                'Linear regulator efficiency is fundamentally limited by the ratio of voltages: Efficiency ≈ Vout / Vin. For 5V from 24V, efficiency is 5 / 24 ≈ 20.8%. The remaining 79.2% of electrical power is wasted entirely as heat.',
              truthPa:
                'ਲੀਨੀਅਰ ਰੈਗੂਲੇਟਰ ਦੀ ਕਾਰਜਕੁਸ਼ਲਤਾ ਸਿਰਫ਼ Vout/Vin ਹੁੰਦੀ ਹੈ। 24V ਤੋਂ 5V ਬਣਾਉਣ ਵੇਲੇ ਸਿਰਫ਼ 20% ਬਿਜਲੀ ਕੰਮ ਆਉਂਦੀ ਹੈ, ਬਾਕੀ 80% ਬਿਜਲੀ ਗਰਮੀ ਬਣ ਕੇ ਬਰਬਾਦ ਹੁੰਦੀ ਹੈ।',
            },
            {
              myth: 'You can put any large ceramic capacitor on the output of an LDO to get cleaner power.',
              truthEn:
                'Many classic LDOs (such as LP2985 or LM1117) rely on the output capacitor having a specific minimum Equivalent Series Resistance (ESR between 0.1 Ω and 1 Ω) to create a stabilizing zero in the feedback loop. Using an ultra-low ESR ceramic capacitor (<0.01 Ω) causes severe uncontrolled oscillation.',
              truthPa:
                'ਹਰ LDO ਦੇ ਪਿੱਛੇ ਅਲਟਰਾ-ਲੋਅ ESR ਵਾਲਾ ਸਿਰੈਮਿਕ ਕੈਪਸੀਟਰ ਨਹੀਂ ਲਗਾਇਆ ਜਾ ਸਕਦਾ। ਕੁਝ LDO ਸਥਿਰ ਰਹਿਣ ਲਈ ਕੈਪਸੀਟਰ ਵਿੱਚ 0.1 ਓਹਮ ਦੀ ਰਜਿਸਟੈਂਸ (ESR) ਮੰਗਦੇ ਹਨ, ਨਹੀਂ ਤਾਂ ਉਹ ਕੰਬਣ (Oscillate) ਲੱਗ ਪੈਂਦੇ ਹਨ।',
            },
            {
              myth: 'If a regulator has built-in thermal shutdown, you do not need to bother adding a heat sink.',
              truthEn:
                'Thermal shutdown is an emergency fail-safe feature designed to prevent immediate fire or package explosion. In regular operation, relying on thermal shutdown causes the regulator to constantly cycle on and off, resetting your processor every few seconds.',
              truthPa:
                'ਥਰਮਲ ਸ਼ਟਡਾਊਨ ਐਮਰਜੈਂਸੀ ਬਚਾਅ ਲਈ ਹੈ। ਜੇਕਰ ਹੀਟ ਸਿੰਕ ਨਹੀਂ ਲਗਾਓਗੇ ਤਾਂ ਰੈਗੂਲੇਟਰ ਗਰਮ ਹੋ ਕੇ ਹਰ 5 ਸਕਿੰਟ ਬਾਅਦ ਬੰਦ ਹੋ ਜਾਵੇਗਾ ਅਤੇ ਪ੍ਰੋਸੈਸਰ ਰੀਸਟਾਰਟ ਹੁੰਦਾ ਰਹੇਗਾ।',
            },
          ],
          terminologyJson: [
            {
              term: 'Dropout Voltage',
              punjabi: 'ਡ੍ਰੌਪ-ਆਊਟ ਵੋਲਟੇਜ',
              meaningEn: 'Minimum difference between input and output voltage required for a regulator to maintain regulation.',
              meaningPa: 'ਰੈਗੂਲੇਟਰ ਨੂੰ ਸਹੀ ਕੰਮ ਕਰਨ ਲਈ ਇਨਪੁਟ ਅਤੇ ਆਊਟਪੁੱਟ ਵਿਚਕਾਰ ਲੋੜੀਂਦਾ ਘੱਟੋ-ਘੱਟ ਵੋਲਟੇਜ ਫ਼ਰਕ।',
            },
            {
              term: 'LDO (Low-Dropout Regulator)',
              punjabi: 'LDO ਰੈਗੂਲੇਟਰ',
              meaningEn: 'Linear voltage regulator that can operate with an input-to-output voltage difference as low as 100 mV.',
              meaningPa: 'ਬਹੁਤ ਘੱਟ ਵੋਲਟੇਜ ਫ਼ਰਕ (ਜਿਵੇਂ 0.2V) ਉੱਤੇ ਵੀ ਸਥਿਰ ਵੋਲਟੇਜ ਦੇਣ ਵਾਲਾ ਆਧੁਨਿਕ ਰੈਗੂਲੇਟਰ।',
            },
            {
              term: 'PSRR (Power Supply Rejection Ratio)',
              punjabi: 'PSRR (ਪਾਵਰ ਸਪਲਾਈ ਸ਼ੋਰ ਰੱਦ ਕਰਨ ਦੀ ਸਮਰੱਥਾ)',
              meaningEn: 'Measure of how well an analog circuit or regulator rejects input supply noise and AC ripple.',
              meaningPa: 'ਇਨਪੁਟ ਬਿਜਲੀ ਦੇ ਸ਼ੋਰ ਅਤੇ ਕੰਬਣੀ ਨੂੰ ਆਊਟਪੁੱਟ ਤੇ ਜਾਣ ਤੋਂ ਰੋਕਣ ਦਾ ਮਾਪ।',
            },
            {
              term: 'Thermal Resistance (θsa)',
              punjabi: 'ਹੀਟ ਸਿੰਕ ਥਰਮਲ ਰਜਿਸਟੈਂਸ',
              meaningEn: 'Ability of a heat sink to transfer thermal power to ambient air, measured in °C per Watt.',
              meaningPa: 'ਹੀਟ ਸਿੰਕ ਵੱਲੋਂ ਗਰਮੀ ਨੂੰ ਬਾਹਰੀ ਹਵਾ ਵਿੱਚ ਛੱਡਣ ਦੀ ਸਮਰੱਥਾ (°C/Watt)।',
            },
            {
              term: 'Crowbar Circuit',
              punjabi: 'ਕਰੋਬਾਰ ਓਵਰ-ਵੋਲਟੇਜ ਸੁਰੱਖਿਆ ਸਰਕਟ',
              meaningEn: 'Protection circuit that fires a thyristor (SCR) to intentionally short-circuit an overvoltage rail, blowing the upstream fuse.',
              meaningPa: 'ਵੋਲਟੇਜ ਵਧਣ ਤੇ SCR ਰਾਹੀਂ ਲਾਈਨ ਸ਼ਾਰਟ ਕਰਕੇ ਫਿਊਜ਼ ਉਡਾਉਣ ਵਾਲਾ ਸੁਰੱਖਿਆ ਸਰਕਟ ਤਾਂ ਜੋ ਮਦਰਬੋਰਡ ਬਚ ਜਾਵੇ।',
            },
            {
              term: 'Quiescent Current (Iq)',
              punjabi: 'ਸ਼ਾਂਤ ਕਰੰਟ (Quiescent Current)',
              meaningEn: 'Internal operating current drawn by the regulator itself when delivering zero load current.',
              meaningPa: 'ਬਿਨਾਂ ਲੋਡ ਤੋਂ ਰੈਗੂਲੇਟਰ ਦੇ ਅੰਦਰੂਨੀ ਸਰਕਟ ਵੱਲੋਂ ਖਪਤ ਕੀਤਾ ਜਾਣ ਵਾਲਾ ਕਰੰਟ।',
            },
          ],
          interactiveLabId: 'resistor-calc',
          exercisePromptEn:
            'Thermal Heatsink Sizing Task: A 7805 regulator powers a 5 V circuit drawing 800 mA from a 12 V car adapter. Given theta_jc = 3.0 °C/W and theta_cs = 0.5 °C/W with a maximum allowable junction temperature Tj = 125 °C at an ambient temperature of 45 °C: (1) Calculate the power dissipated in the regulator. (2) Calculate the maximum thermal resistance theta_sa of the heatsink required.',
          exercisePromptPa:
            'ਹੀਟ ਸਿੰਕ ਗਣਨਾ: 12V ਕਾਰ ਬੈਟਰੀ ਤੋਂ 7805 ਰੈਗੂਲੇਟਰ 5V @ 800 mA ਚਲਾਉਂਦਾ ਹੈ। 45°C ਤਾਪਮਾਨ ਉੱਤੇ: (1) ਰੈਗੂਲੇਟਰ ਵਿੱਚ ਖਪਤ ਹੋਣ ਵਾਲੀ ਪਾਵਰ (Watts) ਕੱਢੋ। (2) ਇਸਨੂੰ 125°C ਤੋਂ ਹੇਠਾਂ ਰੱਖਣ ਲਈ ਕਿੰਨੀ ਥਰਮਲ ਰਜਿਸਟੈਂਸ (θsa) ਵਾਲਾ ਹੀਟ ਸਿੰਕ ਲਗਾਉਣਾ ਪਵੇਗਾ?',
          summaryEn:
            'Linear regulators and LDOs deliver pristine, ripple-free voltages for sensitive sensors and microcontrollers, but high voltage drops demand careful thermal calculation and aluminum heatsinking.',
          summaryPa:
            'ਲੀਨੀਅਰ ਰੈਗੂਲੇਟਰ ਅਤੇ LDO ਸੈਂਸਰਾਂ ਲਈ ਬਿਨਾਂ ਸ਼ੋਰ ਦੀ ਸਾਫ਼ ਬਿਜਲੀ ਦਿੰਦੇ ਹਨ, ਪਰ ਵਾਧੂ ਵੋਲਟੇਜ ਨੂੰ ਗਰਮੀ ਬਣਾ ਕੇ ਉਡਾਉਣ ਕਾਰਨ ਇਹਨਾਂ ਲਈ ਹੀਟ ਸਿੰਕ ਬਹੁਤ ਜ਼ਰੂਰੀ ਹੁੰਦਾ ਹੈ।',
          furtherReadingJson: [
            'Linear Circuit Design Handbook by Hank Zumbahlen (Analog Devices)',
            'Texas Instruments Application Report: Understanding the Terms and Definitions of LDO Voltage Regulators',
            'Heat Sink Design Facts & Thermal Interface Guidelines by Aavid Thermalloy',
          ],
          quiz: {
            titleEn: 'Level 6 Assessment: Linear Regulators, LDOs & Thermal Design',
            titlePa: 'ਲੈਵਲ 6 ਟੈਸਟ: ਲੀਨੀਅਰ ਰੈਗੂਲੇਟਰ, LDO ਅਤੇ ਥਰਮਲ ਡਿਜ਼ਾਈਨ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'Dropout Voltage',
                promptEn: 'What is the minimum recommended DC input voltage required for a standard 7805 regulator to guarantee a steady 5.0 V output?',
                promptPa: '7805 ਰੈਗੂਲੇਟਰ ਤੋਂ ਪੱਕੀ 5.0V ਆਊਟਪੁੱਟ ਲੈਣ ਲਈ ਘੱਟੋ-ਘੱਟ ਕਿੰਨੀ DC ਇਨਪੁਟ ਵੋਲਟੇਜ ਦੇਣੀ ਪੈਂਦੀ ਹੈ?',
                optionsJson: ['7.0 Volts (5V + 2V dropout)', '5.0 Volts', '5.5 Volts', '12.0 Volts'],
                correctAnswer: '7.0 Volts (5V + 2V dropout)',
                explanationEn:
                  'Standard 7805 regulators have a dropout voltage of approximately 2.0 V. Thus, Vin(min) = 5.0 V + 2.0 V = 7.0 V.',
                explanationPa:
                  '7805 ਦਾ ਡ੍ਰੌਪ-ਆਊਟ 2V ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ 5 + 2 = 7.0 ਵੋਲਟ ਘੱਟੋ-ਘੱਟ ਚਾਹੀਦੇ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Power Dissipation',
                promptEn: 'A 7805 linear regulator provides 5.0 V at 1.0 A from a 12.0 V input. How much power is dissipated as pure heat in the regulator?',
                promptPa: '12V ਇਨਪੁਟ ਤੋਂ 5V @ 1A ਦੇਣ ਵਾਲਾ 7805 ਰੈਗੂਲੇਟਰ ਕਿੰਨੇ ਵਾਟ ਗਰਮੀ ਪੈਦਾ ਕਰਦਾ ਹੈ?',
                optionsJson: ['7.0 Watts', '5.0 Watts', '12.0 Watts', '1.0 Watt'],
                correctAnswer: '7.0 Watts',
                explanationEn:
                  'P = (Vin - Vout) * I = (12.0 V - 5.0 V) * 1.0 A = 7.0 V * 1.0 A = 7.0 Watts.',
                explanationPa:
                  'P = (12 - 5) * 1 = 7.0 ਵਾਟ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Linear Efficiency',
                promptEn: 'What is the electrical power efficiency of a linear regulator producing 3.3 V from a 5.0 V supply at 100 mA?',
                promptPa: '5V ਸਪਲਾਈ ਤੋਂ 3.3V @ 100 mA ਬਣਾਉਣ ਵਾਲੇ ਲੀਨੀਅਰ ਰੈਗੂਲੇਟਰ ਦੀ ਕਾਰਜਕੁਸ਼ਲਤਾ (Efficiency) ਕਿੰਨੀ ਹੈ?',
                optionsJson: ['66%', '90%', '50%', '33%'],
                correctAnswer: '66%',
                explanationEn:
                  'Efficiency ≈ Vout / Vin = 3.3 V / 5.0 V = 0.66 = 66%.',
                explanationPa:
                  'Efficiency = 3.3 / 5.0 = 66%।',
              },
              {
                questionType: 'mcq',
                topicTag: 'LM317 Resistors',
                promptEn: 'In an LM317 adjustable regulator with R1 = 240 Ω, what value of R2 is required to produce an output of 12.0 Volts?',
                promptPa: 'LM317 ਵਿੱਚ R1 = 240 Ω ਹੈ। 12.0V ਆਊਟਪੁੱਟ ਲੈਣ ਲਈ R2 ਕਿੰਨੇ ਓਹਮ ਦਾ ਲਗਾਉਣਾ ਪਵੇਗਾ?',
                optionsJson: ['2064 Ω (≈ 2.06 kΩ)', '240 Ω', '1200 Ω', '4700 Ω'],
                correctAnswer: '2064 Ω (≈ 2.06 kΩ)',
                explanationEn:
                  'Vout = 1.25 * (1 + R2 / R1) => 12 / 1.25 = 1 + R2 / 240 => 9.6 - 1 = R2 / 240 => R2 = 8.6 * 240 = 2064 Ω.',
                explanationPa:
                  'R2 = 240 * (12 / 1.25 - 1) = 240 * 8.6 = 2064 Ω।',
              },
              {
                questionType: 'mcq',
                topicTag: 'LDO Architecture',
                promptEn: 'What enables modern Low-Dropout (LDO) regulators to achieve dropout voltages below 200 mV?',
                promptPa: 'ਆਧੁਨਿਕ LDO ਰੈਗੂਲੇਟਰ ਸਿਰਫ਼ 200 mV ਦੇ ਨਿੱਕੇ ਵੋਲਟੇਜ ਫ਼ਰਕ ਉੱਤੇ ਕਿਵੇਂ ਕੰਮ ਕਰ ਲੈਂਦੇ ਹਨ?',
                optionsJson: [
                  'Using a single P-channel MOSFET or PNP pass transistor operating in its low-resistance ohmic saturation region',
                  'Using miniature high-frequency transformers',
                  'Using inductors to store AC magnetic energy',
                  'Eliminating all feedback loops',
                ],
                correctAnswer: 'Using a single P-channel MOSFET or PNP pass transistor operating in its low-resistance ohmic saturation region',
                explanationEn:
                  'Instead of an NPN Darlington follower requiring 2*Vbe (~1.5V), a P-MOSFET pass element drops only I_load * Rds(on), achieving millivolt dropouts.',
                explanationPa:
                  'ਇਹਨਾਂ ਵਿੱਚ P-ਚੈਨਲ MOSFET ਲੱਗਿਆ ਹੁੰਦਾ ਹੈ ਜੋ ਬਹੁਤ ਘੱਟ ਵੋਲਟੇਜ (Rds(on)) ਖਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'LDO ESR Stability',
                promptEn: 'Why do some classic LDOs become unstable and oscillate when their output capacitor is replaced with an ultra-low ESR ceramic capacitor?',
                promptPa: 'ਕੁਝ ਪੁਰਾਣੇ LDOs ਦੇ ਪਿੱਛੇ ਅਲਟਰਾ-ਲੋਅ ESR ਸਿਰੈਮਿਕ ਕੈਪਸੀਟਰ ਲਗਾਉਣ ਤੇ ਉਹ ਕੰਬਣ (Oscillate) ਕਿਉਂ ਲੱਗ ਪੈਂਦੇ ਹਨ?',
                optionsJson: [
                  'The internal feedback loop relies on the capacitor ESR zero to provide adequate phase margin',
                  'Ceramic capacitors cannot store DC charge',
                  'The ceramic capacitor shorts out the output',
                  'The dropout voltage increases to 10 V',
                ],
                correctAnswer: 'The internal feedback loop relies on the capacitor ESR zero to provide adequate phase margin',
                explanationEn:
                  'LDO control loops use the capacitor ESR zero (fz = 1 / [2*pi*ESR*C]) to cancel an internal pole. If ESR is too low, phase margin drops to zero, triggering oscillation.',
                explanationPa:
                  'ਚਿੱਪ ਦਾ ਅੰਦਰੂਨੀ ਫੀਡਬੈਕ ਸਿਸਟਮ ਕੈਪਸੀਟਰ ਦੀ ESR ਰਜਿਸਟੈਂਸ ਉੱਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ। ਜੇਕਰ ESR ਬਿਲਕੁਲ ਜ਼ੀਰੋ ਹੋ ਜਾਵੇ ਤਾਂ ਫੇਜ਼ ਮਾਰਜਿਨ ਵਿਗੜ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Crowbar Protection',
                promptEn: 'How does an SCR "Crowbar" circuit protect a sensitive 5V motherboard from a failed, shorted pass transistor?',
                promptPa: 'SCR ਕਰੋਬਾਰ ਸਰਕਟ ਮਦਰਬੋਰਡ ਨੂੰ ਓਵਰ-ਵੋਲਟੇਜ ਤੋਂ ਕਿਵੇਂ ਬਚਾਉਂਦਾ ਹੈ?',
                optionsJson: [
                  'It triggers a heavy SCR that intentionally shorts the overvoltage rail to ground in microseconds, blowing the input fuse',
                  'It slowly steps down the voltage using a resistor',
                  'It sounds a buzzer and waits for user intervention',
                  'It inverts the polarity of the supply',
                ],
                correctAnswer: 'It triggers a heavy SCR that intentionally shorts the overvoltage rail to ground in microseconds, blowing the input fuse',
                explanationEn:
                  'If voltage exceeds 5.8V, a Zener fires the SCR gate, creating a direct short circuit to ground. This blows the fuse in microseconds before delicate chips can be fried.',
                explanationPa:
                  'ਵੋਲਟੇਜ ਵਧਦੇ ਹੀ SCR ਸਾਰੀ ਲਾਈਨ ਨੂੰ ਜ਼ਮੀਨ ਨਾਲ ਸ਼ਾਰਟ ਕਰ ਦਿੰਦਾ ਹੈ ਜਿਸ ਨਾਲ ਫਿਊਜ਼ ਉੱਡ ਜਾਂਦਾ ਹੈ ਅਤੇ ਮਹਿੰਗੇ ਪ੍ਰੋਸੈਸਰ ਸੜਨ ਤੋਂ ਬਚ ਜਾਂਦੇ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Negative Regulators',
                promptEn: 'Which standard 3-terminal regulator IC provides a fixed negative -12.0 V DC output rail?',
                promptPa: 'ਫਿਕਸਡ ਨੈਗੇਟਿਵ -12.0V DC ਸਪਲਾਈ ਦੇਣ ਲਈ ਕਿਹੜੀ 3-ਪਿਨ ਰੈਗੂਲੇਟਰ IC ਵਰਤੀ ਜਾਂਦੀ ਹੈ?',
                optionsJson: ['7912', '7812', 'LM317', '7805'],
                correctAnswer: '7912',
                explanationEn:
                  'The 79xx series produces fixed negative voltages (e.g. 7912 = -12V). The 78xx series produces fixed positive voltages (7812 = +12V).',
                explanationPa:
                  '79xx ਸੀਰੀਜ਼ ਨੈਗੇਟਿਵ ਵੋਲਟੇਜ ਲਈ ਹੁੰਦੀ ਹੈ (7912 = -12V)। 78xx ਪਾਜ਼ਿਟਿਵ ਲਈ ਹੁੰਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Heatsink Thermal Calculation',
                promptEn: 'A regulator dissipates 10 W. Total thermal resistance junction-to-ambient is 5 °C/W. If ambient is 35 °C, what is the internal junction temperature?',
                promptPa: '10 ਵਾਟ ਪਾਵਰ ਖਪਤ ਕਰਨ ਵਾਲੇ ਰੈਗੂਲੇਟਰ ਦੀ ਥਰਮਲ ਰਜਿਸਟੈਂਸ 5 °C/W ਹੈ। 35°C ਕਮਰੇ ਦੇ ਤਾਪਮਾਨ ਉੱਤੇ ਅੰਦਰਲਾ ਜੰਕਸ਼ਨ ਤਾਪਮਾਨ ਕੀ ਹੋਵੇਗਾ?',
                optionsJson: ['85 °C', '50 °C', '135 °C', '45 °C'],
                correctAnswer: '85 °C',
                explanationEn:
                  'Temp rise = 10 W * 5 °C/W = 50 °C. Tj = 35 °C + 50 °C = 85 °C.',
                explanationPa:
                  'ਵਾਧਾ = 10 * 5 = 50 °C। ਕੁੱਲ ਤਾਪਮਾਨ = 35 + 50 = 85 °C।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Foldback Limiting',
                promptEn: 'What is the advantage of "Foldback Current Limiting" over standard constant current limiting in a power supply?',
                promptPa: 'ਪਾਵਰ ਸਪਲਾਈ ਵਿੱਚ ਆਮ ਕਰੰਟ ਲਿਮਿਟਿੰਗ ਦੇ ਮੁਕਾਬਲੇ "Foldback Current Limiting" ਦਾ ਕੀ ਫ਼ਾਇਦਾ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'Under a dead short-circuit, it reduces both output voltage AND current to near zero, preventing massive thermal destruction of the regulator',
                  'It increases the available output current during a short',
                  'It maintains full 100% output power into a short circuit',
                  'It prevents the input fuse from blowing',
                ],
                correctAnswer: 'Under a dead short-circuit, it reduces both output voltage AND current to near zero, preventing massive thermal destruction of the regulator',
                explanationEn:
                  'Standard current limits keep full current flowing under a short, dissipating maximum power (Vin * Imax). Foldback "folds back" the current to a tiny fraction, keeping the transistor cool.',
                explanationPa:
                  'ਸ਼ਾਰਟ ਸਰਕਟ ਹੋਣ ਤੇ ਇਹ ਵੋਲਟੇਜ ਅਤੇ ਕਰੰਟ ਦੋਵਾਂ ਨੂੰ ਬਹੁਤ ਘਟਾ ਦਿੰਦਾ ਹੈ ਤਾਂ ਜੋ ਰੈਗੂਲੇਟਰ ਸੜਨ ਤੋਂ ਬਚ ਜਾਵੇ।',
              },
            ],
          },
        },
        {
          slug: 'smps-buck-boost-bms-inverters',
          orderIndex: 2,
          titleEn: '6.2 Switch-Mode Power Supplies (SMPS), Battery Systems (BMS) & Inverters',
          titlePa: '6.2 ਸਵਿੱਚ-ਮੋਡ ਪਾਵਰ ਸਪਲਾਈ (SMPS), ਬੈਟਰੀ BMS ਅਤੇ ਇਨਵਰਟਰ',
          objectivesJson: [
            'Analyze core SMPS switching topologies: Buck (step-down), Boost (step-up), Buck-Boost, and isolated Flyback converters',
            'Derive ideal voltage conversion ratios based on PWM duty cycle: D = V_out / V_in for Buck, and V_out = V_in / (1 - D) for Boost',
            'Size power inductors and output filter capacitors for continuous conduction mode (CCM) and allowable ripple',
            'Compare Lead-Acid, NiMH, Li-ion (NMC), and LiFePO4 battery chemistries: C-rate, depth of discharge, and thermal runaway limits',
            'Design Battery Management Systems (BMS): CC-CV charging profiles, passive/active cell balancing, and pure sine wave inverters',
          ],
          prerequisitesJson: ['6.1 Linear Power Supplies, 78xx, LM317, LDOs & Thermal Sinks'],
          childAnalogyEn:
            'Think of pushing a child on a playground swing! A linear regulator is like holding your hand on the swing the entire time, constantly fighting its motion (massive heat loss). A Switch-Mode Power Supply (SMPS) is like giving a sharp, powerful push at the exact right microsecond (PWM pulse), then letting the swing glide freely on its own momentum (Inductor energy storage)! You expend tiny effort, yet the swing keeps moving with over 90% efficiency!',
          childAnalogyPa:
            'ਪੀਂਘ ਦੇ ਹੁਲਾਰੇ ਦੀ ਕਲਪਨਾ ਕਰੋ! ਲੀਨੀਅਰ ਰੈਗੂਲੇਟਰ ਪੀਂਘ ਨੂੰ ਲਗਾਤਾਰ ਹੱਥ ਨਾਲ ਫੜ ਕੇ ਰੱਖਣ ਵਾਂਗ ਹੈ ਜਿਸ ਨਾਲ ਹੱਥ ਥੱਕ ਜਾਂਦਾ ਹੈ। ਸਵਿੱਚ-ਮੋਡ ਪਾਵਰ ਸਪਲਾਈ (SMPS) ਸਹੀ ਸਮੇਂ ਤੇ ਇੱਕ ਜ਼ੋਰਦਾਰ ਧੱਕਾ (PWM ਪਲਸ) ਦੇਣ ਵਾਂਗ ਹੈ, ਜਿਸ ਤੋਂ ਬਾਅਦ ਪੀਂਘ ਆਪਣੇ ਵੇਗ (ਇੰਡਕਟਰ ਦੀ ਚੁੰਬਕੀ ਊਰਜਾ) ਨਾਲ ਆਪਣੇ-ਆਪ ਅੱਗੇ ਵੱਧਦੀ ਹੈ! ਇਸ ਨਾਲ ਸਿਰਫ਼ ਥੋੜ੍ਹੀ ਜਿਹੀ ਤਾਕਤ ਲੱਗਦੀ ਹੈ ਅਤੇ 90% ਤੋਂ ਵੱਧ ਬਿਜਲੀ ਬਚਦੀ ਹੈ!',
          technicalExplanationEn:
            'High-efficiency power electronics utilize switching semiconductors to transfer energy in discrete packets via inductors and transformers:\n\n1. Buck Converter (Step-Down Topology):\n• Switch ON (duration D*T): Current ramps up through inductor L, charging capacitor C and supplying load: v_L = V_in - V_out.\n• Switch OFF (duration (1-D)*T): Inductor current freewheels through catch diode (or synchronous MOSFET): v_L = -V_out.\n• Ideal Voltage Ratio: V_out = D * V_in (Duty cycle D = t_on / T).\n• Inductor Sizing (CCM): L = [(V_in - V_out) * D] / (f_sw * ΔI_L), where ΔI_L is typically 20% to 40% of I_out.\n\n2. Boost Converter (Step-Up Topology):\n• Switch ON: Inductor charges from V_in; output diode is reverse biased.\n• Switch OFF: Inductor back-EMF adds to V_in, discharging through diode into load at higher voltage.\n• Ideal Voltage Ratio: V_out = V_in / (1 - D).\n\n3. Battery Chemistries & Safe Operating Areas:\n• Lead-Acid: 2.0V/cell nominal, heavy, tolerant, 50% max recommended DoD.\n• Li-ion (NMC): 3.7V nominal, 4.2V max, high energy density, flammable thermal runaway if overcharged (>4.3V) or crushed.\n• LiFePO4: 3.2V nominal, 3.65V max, extremely stable chemistry (>2000-5000 cycles), zero thermal runaway risk.\n• C-Rate: Rate of charge/discharge relative to capacity (1C discharge of a 3000 mAh battery = 3.0 Amperes for 1 hour).\n\n4. Battery Management Systems (BMS):\n• CC-CV Profile: Constant Current (CC) until cell reaches 4.20V, then Constant Voltage (CV) until current tapers below C/20.\n• Cell Balancing: Shunts current around highest-voltage cells in a multi-cell series pack to ensure all cells reach full capacity equally.\n\n5. Inverters (DC to AC):\nH-bridge topology switched with Sinusoidal Pulse Width Modulation (SPWM) through an LC low-pass filter to synthesize clean 230 V 50 Hz pure sine waves with Total Harmonic Distortion (THD) < 3%.',
          technicalExplanationPa:
            'SMPS ਅਤੇ ਬੈਟਰੀ ਮੈਨੇਜਮੈਂਟ ਦਾ ਵਿਗਿਆਨ:\n\n1. ਬੱਕ ਕਨਵਰਟਰ (Buck Converter - Step Down):\nਵੋਲਟੇਜ ਘਟਾਉਂਦਾ ਹੈ (ਜਿਵੇਂ 12V ਤੋਂ 5V)। Vout = D * Vin। ਇਸ ਵਿੱਚ MOSFET ਇੱਕ ਸੈਕਿੰਡ ਵਿੱਚ 1,00,000 ਵਾਰ ਆਨ-ਆਫ ਹੁੰਦਾ ਹੈ ਅਤੇ ਇੰਡਕਟਰ ਰਾਹੀਂ 90-95% ਕਾਰਜਕੁਸ਼ਲਤਾ ਨਾਲ ਪਾਵਰ ਦਿੰਦਾ ਹੈ।\n\n2. ਬੂਸਟ ਕਨਵਰਟਰ (Boost Converter - Step Up):\nਵੋਲਟੇਜ ਵਧਾਉਂਦਾ ਹੈ (ਜਿਵੇਂ 3.7V ਲਿਥੀਅਮ ਬੈਟਰੀ ਤੋਂ 5V ਜਾਂ 12V ਬਣਾਉਣਾ)। Vout = Vin / (1 - D)।\n\n3. ਬੈਟਰੀਆਂ ਦੀ ਤੁਲਨਾ:\n• ਲਿਥੀਅਮ ਆਇਨ (Li-ion): 3.7V, ਮੋਬਾਈਲਾਂ ਵਿੱਚ ਵਰਤੀ ਜਾਂਦੀ ਹੈ। 4.2V ਤੋਂ ਵੱਧ ਚਾਰਜ ਕਰਨ ਤੇ ਫਟ ਸਕਦੀ ਹੈ!\n• ਲਿਥੀਅਮ ਆਇਰਨ ਫਾਸਫੇਟ (LiFePO4): 3.2V, ਸਭ ਤੋਂ ਸੁਰੱਖਿਅਤ, ਕਦੇ ਅੱਗ ਨਹੀਂ ਲੱਗਦੀ, ਸੋਲਰ ਇਨਵਰਟਰਾਂ ਅਤੇ ਇਲੈਕਟ੍ਰਿਕ ਸਕੂਟਰਾਂ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ (5000 ਸਾਈਕਲ ਲਾਈਫ)।\n\n4. BMS (ਬੈਟਰੀ ਮੈਨੇਜਮੈਂਟ ਸਿਸਟਮ):\nਹਰ ਸੈੱਲ ਦੀ ਵੋਲਟੇਜ ਬਰਾਬਰ ਰੱਖਦਾ ਹੈ (Cell Balancing), ਓਵਰ-ਚਾਰਜਿੰਗ ਅਤੇ ਸ਼ਾਰਟ ਸਰਕਟ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।\n\n5. ਪਿਓਰ ਸਾਈਨ ਵੇਵ ਇਨਵਰਟਰ (Pure Sine Wave Inverter):\nDC ਬੈਟਰੀ ਤੋਂ H-ਬ੍ਰਿਜ ਅਤੇ SPWM ਰਾਹੀਂ ਘਰ ਦੇ ਪੱਖਿਆਂ ਤੇ ਮੋਟਰਾਂ ਲਈ ਬਿਨਾਂ ਆਵਾਜ਼ ਵਾਲੀ 230V 50Hz ਬਿਜਲੀ ਬਣਾਉਂਦਾ ਹੈ।',
          practicalExampleEn:
            'Smartphone 65-Watt USB-PD Superfast Charger Design: Uses a Gallium Nitride (GaN) active clamp flyback converter switching at 500 kHz. The GaN FET switches so fast with zero reverse recovery that power efficiency reaches 94%. Even delivering 65 Watts, only ~4 Watts of heat is produced across the entire miniature palm-sized brick, operating comfortably without a cooling fan.',
          practicalExamplePa:
            'ਮੋਬਾਈਲ ਦਾ 65-ਵਾਟ ਦਾ GaN ਸੁਪਰਫਾਸਟ ਚਾਰਜਰ: ਇਸ ਵਿੱਚ ਗੈਲੀਅਮ ਨਾਈਟ੍ਰਾਈਡ (GaN) ਦਾ ਸਵਿੱਚ 500,000 Hz ਦੀ ਤੇਜ਼ ਰਫ਼ਤਾਰ ਤੇ ਕੰਮ ਕਰਦਾ ਹੈ। ਇਸਦੀ ਐਫੀਸ਼ੈਂਸੀ 94% ਹੁੰਦੀ ਹੈ। 65 ਵਾਟ ਪਾਵਰ ਦੇਣ ਦੇ ਬਾਵਜੂਦ ਸਿਰਫ਼ 4 ਵਾਟ ਗਰਮੀ ਬਣਦੀ ਹੈ, ਜਿਸ ਕਾਰਨ ਇਹ ਛੋਟਾ ਜਿਹਾ ਅਡੈਪਟਰ ਬਿਨਾਂ ਪੱਖੇ ਦੇ ਵੀ ਠੰਢਾ ਚੱਲਦਾ ਹੈ।',
          codeDemo: `// TypeScript: Buck Converter Inductor Sizer & Battery Charging Calculator
export function designBuckConverter(vIn: number, vOut: number, iOutAmps: number, fSwitchHz = 200000, rippleRatio = 0.3) {
  const dutyCycle = vOut / vIn;
  const deltaIL = iOutAmps * rippleRatio; // 30% peak-to-peak ripple
  const lHenries = ((vIn - vOut) * dutyCycle) / (fSwitchHz * deltaIL);
  const peakInductorCurrent = iOutAmps + deltaIL / 2;

  return {
    dutyCyclePercent: dutyCycle * 100,
    requiredInductanceMicroHenries: lHenries * 1e6,
    deltaInductorCurrentAmps: deltaIL,
    inductorSaturationCurrentRatingAmps: peakInductorCurrent * 1.25, // 25% margin
  };
}

export function calcBatteryChargeTime(capacityAh: number, chargeCurrentAmps: number, chargerEfficiency = 0.90) {
  const chargeTimeHours = (capacityAh / chargeCurrentAmps) / chargerEfficiency;
  return {
    hoursToFull: chargeTimeHours,
    minutesToFull: chargeTimeHours * 60,
  };
}

// Verification: 12V to 5V @ 2A at 200kHz:
const buck = designBuckConverter(12, 5, 2.0);
console.log('Duty Cycle:', buck.dutyCyclePercent.toFixed(1), '%'); // 41.7%
console.log('Required L:', buck.requiredInductanceMicroHenries.toFixed(1), 'µH'); // ~24.3 µH
console.log('Isat Rating:', buck.inductorSaturationCurrentRatingAmps.toFixed(2), 'A'); // ~2.88 A`,
          misconceptionsJson: [
            {
              myth: 'A Modified Sine Wave (Square Wave) inverter is just as good for home appliances as a Pure Sine Wave inverter.',
              truthEn:
                'Modified sine wave inverters produce stepped square waves with massive high-frequency harmonics (THD > 40%). Inductive loads like ceiling fans, refrigerator compressors, and microwave ovens overheat severely, buzz loudly, and can burn out their motor windings.',
              truthPa:
                'ਸਸਤੇ "Modified Sine Wave" ਇਨਵਰਟਰ ਘਰ ਦੇ ਪੱਖਿਆਂ ਵਿੱਚ ਜ਼ੋਰ-ਜ਼ੋਰ ਦੀ "ਭੂੰ-ਭੂੰ" ਦੀ ਆਵਾਜ਼ ਪੈਦਾ ਕਰਦੇ ਹਨ ਅਤੇ ਮੋਟਰਾਂ ਨੂੰ ਸਾੜ ਦਿੰਦੇ ਹਨ। ਘਰ ਲਈ ਹਮੇਸ਼ਾ "Pure Sine Wave" ਇਨਵਰਟਰ ਹੀ ਲਗਾਉਣਾ ਚਾਹੀਦਾ ਹੈ।',
            },
            {
              myth: 'Lithium batteries can be safely connected in series without any battery management system (BMS).',
              truthEn:
                'Due to minute manufacturing tolerances in internal resistance and capacity, individual cells in a series string drift apart. Without BMS cell balancing, one cell will overcharge past 4.3V (causing violent fire/explosion) while another cell over-discharges below 2.5V (causing permanent chemical destruction).',
              truthPa:
                'BMS ਤੋਂ ਬਿਨਾਂ ਲਿਥੀਅਮ ਸੈੱਲਾਂ ਨੂੰ ਕਦੇ ਸੀਰੀਜ਼ ਵਿੱਚ ਨਹੀਂ ਜੋੜਨਾ ਚਾਹੀਦਾ। ਬਿਨਾਂ ਬੈਲੇਂਸਿੰਗ ਦੇ ਇੱਕ ਸੈੱਲ ਜ਼ਿਆਦਾ ਚਾਰਜ ਹੋ ਕੇ ਫਟ ਜਾਵੇਗਾ ਅਤੇ ਦੂਜਾ ਬਿਲਕੁਲ ਮਰ ਜਾਵੇਗਾ।',
            },
            {
              myth: 'A Buck converter switch can be left continuously closed (100% duty cycle) indefinitely.',
              truthEn:
                'Many buck controllers use bootstrap capacitors to drive high-side N-channel MOSFET gates (requiring Vgate = Vin + 5V). If the switch stays on at 100% duty cycle, the bootstrap capacitor discharges and the MOSFET shuts off. Only controllers with dedicated charge pumps or P-MOSFETs support 100% duty cycle.',
              truthPa:
                'ਬੱਕ ਕਨਵਰਟਰ ਵਿੱਚ ਬੂਟਸਟ੍ਰੈਪ ਕੈਪਸੀਟਰ ਲੱਗਿਆ ਹੁੰਦਾ ਹੈ ਜਿਸਨੂੰ ਚਾਰਜ ਰਹਿਣ ਲਈ ਸਵਿੱਚ ਦਾ ਵਾਰ-ਵਾਰ ਆਫ ਹੋਣਾ ਜ਼ਰੂਰੀ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ ਇਹ ਹਮੇਸ਼ਾ 100% ਆਨ ਨਹੀਂ ਰਹਿ ਸਕਦਾ।',
            },
          ],
          terminologyJson: [
            {
              term: 'SMPS (Switch-Mode Power Supply)',
              punjabi: 'SMPS (ਸਵਿੱਚ-ਮੋਡ ਪਾਵਰ ਸਪਲਾਈ)',
              meaningEn: 'High-efficiency power supply that regulates voltage by switching transistors on and off at high frequencies.',
              meaningPa: 'ਹਾਈ ਫ੍ਰੀਕੁਐਂਸੀ ਸਵਿਚਿੰਗ ਰਾਹੀਂ 90% ਤੋਂ ਵੱਧ ਕਾਰਜਕੁਸ਼ਲਤਾ ਨਾਲ ਵੋਲਟੇਜ ਕੰਟਰੋਲ ਕਰਨ ਵਾਲੀ ਪਾਵਰ ਸਪਲਾਈ।',
            },
            {
              term: 'Duty Cycle (D)',
              punjabi: 'ਡਿਊਟੀ ਸਾਈਕਲ',
              meaningEn: 'Ratio of time the switching element is active (ON) to the total switching period (D = Ton / T).',
              meaningPa: 'ਇੱਕ ਚੱਕਰ ਵਿੱਚ ਸਵਿੱਚ ਦੇ ਆਨ ਰਹਿਣ ਦੇ ਸਮੇਂ ਦਾ ਅਨੁਪਾਤ (Ton / T)।',
            },
            {
              term: 'Buck Converter',
              punjabi: 'ਬੱਕ ਕਨਵਰਟਰ',
              meaningEn: 'Step-down DC-to-DC converter that efficiently reduces input voltage to a lower output voltage.',
              meaningPa: 'DC ਵੋਲਟੇਜ ਨੂੰ ਘਟਾਉਣ ਵਾਲਾ ਸਵਿੱਚ ਮੋਡ ਕਨਵਰਟਰ (ਜਿਵੇਂ 12V ਤੋਂ 5V)।',
            },
            {
              term: 'Boost Converter',
              punjabi: 'ਬੂਸਟ ਕਨਵਰਟਰ',
              meaningEn: 'Step-up DC-to-DC converter that efficiently raises input voltage to a higher output voltage.',
              meaningPa: 'DC ਵੋਲਟੇਜ ਨੂੰ ਵਧਾਉਣ ਵਾਲਾ ਸਵਿੱਚ ਮੋਡ ਕਨਵਰਟਰ (ਜਿਵੇਂ 3.7V ਤੋਂ 12V)।',
            },
            {
              term: 'BMS (Battery Management System)',
              punjabi: 'ਬੈਟਰੀ ਮੈਨੇਜਮੈਂਟ ਸਿਸਟਮ (BMS)',
              meaningEn: 'Electronic system managing a rechargeable battery pack by monitoring cells, balancing charge, and enforcing safety limits.',
              meaningPa: 'ਬੈਟਰੀ ਦੇ ਸੈੱਲਾਂ ਨੂੰ ਬਰਾਬਰ ਚਾਰਜ ਰੱਖਣ ਅਤੇ ਅੱਗ ਲੱਗਣ ਤੋਂ ਬਚਾਉਣ ਵਾਲਾ ਸਰਕਟ।',
            },
            {
              term: 'CC-CV Charging',
              punjabi: 'CC-CV ਚਾਰਜਿੰਗ ਵਿਧੀ',
              meaningEn: 'Two-stage battery charging protocol: Constant Current until threshold voltage, followed by Constant Voltage.',
              meaningPa: 'ਪਹਿਲਾਂ ਸਥਿਰ ਕਰੰਟ ਨਾਲ ਅਤੇ ਫਿਰ ਸਥਿਰ ਵੋਲਟੇਜ ਨਾਲ ਬੈਟਰੀ ਚਾਰਜ ਕਰਨ ਦਾ ਸੁਰੱਖਿਅਤ ਤਰੀਕਾ।',
            },
          ],
          interactiveLabId: 'transistor-switch',
          exercisePromptEn:
            'Engineering Design Task: (1) A Buck converter steps down a 24 V DC industrial bus to 5 V DC. Calculate the ideal PWM duty cycle D. (2) If the load draws 3 Amperes and switching frequency is 100 kHz, calculate the required inductance L for an inductor ripple current Delta_IL = 0.6 A (20% ripple). (3) Calculate the minimum saturation current rating required for the inductor.',
          exercisePromptPa:
            'ਇੰਜੀਨੀਅਰਿੰਗ ਡਿਜ਼ਾਈਨ: (1) 24V ਤੋਂ 5V ਬਣਾਉਣ ਵਾਲੇ ਬੱਕ ਕਨਵਰਟਰ ਦਾ ਡਿਊਟੀ ਸਾਈਕਲ (D) ਕੱਢੋ। (2) 100 kHz ਫ੍ਰੀਕੁਐਂਸੀ ਅਤੇ 3A ਲੋਡ ਉੱਤੇ 0.6A ਰਿਪਲ ਲਈ ਇੰਡਕਟਰ ਦਾ ਮੁੱਲ (µH) ਪਤਾ ਕਰੋ। (3) ਇੰਡਕਟਰ ਦੀ ਸੈਚੁਰੇਸ਼ਨ ਕਰੰਟ ਰੇਟਿੰਗ ਕਿੰਨੀ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ?',
          summaryEn:
            'Power electronics bridges source energy and electronic silicon: high-frequency PWM buck and boost converters slash thermal losses, advanced lithium BMS systems balance energy safely, and pure sine wave inverters convert battery DC into clean grid-quality AC.',
          summaryPa:
            'ਪਾਵਰ ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਊਰਜਾ ਦੀ ਅਸਲ ਤਾਕਤ ਹੈ: ਬੱਕ ਅਤੇ ਬੂਸਟ ਕਨਵਰਟਰ ਬਿਜਲੀ ਦਾ ਨੁਕਸਾਨ ਬਚਾਉਂਦੇ ਹਨ, ਲਿਥੀਅਮ BMS ਬੈਟਰੀਆਂ ਨੂੰ ਸੜਨ ਤੋਂ ਰੋਕਦਾ ਹੈ, ਅਤੇ ਪਿਓਰ ਸਾਈਨ ਵੇਵ ਇਨਵਰਟਰ ਘਰਾਂ ਲਈ ਸ਼ੁੱਧ AC ਬਿਜਲੀ ਬਣਾਉਂਦੇ ਹਨ।',
          furtherReadingJson: [
            'Fundamentals of Power Electronics (3rd Edition) by Robert W. Erickson & Dragan Maksimovic',
            'Switching Power Supply Design (3rd Edition) by Abraham I. Pressman, Keith Billings, Taylor Morey',
            'Battery Management Systems: Design by Modeling by H.J. Bergveld, J.M. Kruijt, P.H.L. Notten',
          ],
          quiz: {
            titleEn: 'Level 6 Assessment: SMPS Topologies, BMS & Inverters',
            titlePa: 'ਲੈਵਲ 6 ਟੈਸਟ: SMPS ਕਨਵਰਟਰ, ਬੈਟਰੀ BMS ਅਤੇ ਇਨਵਰਟਰ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'Buck Duty Cycle',
                promptEn: 'In an ideal Buck (step-down) DC-DC converter with 12.0 V input, what PWM duty cycle D is required to produce a 3.3 V output?',
                promptPa: '12V ਇਨਪੁਟ ਵਾਲੇ ਬੱਕ ਕਨਵਰਟਰ ਤੋਂ 3.3V ਲੈਣ ਲਈ PWM ਡਿਊਟੀ ਸਾਈਕਲ (D) ਕਿੰਨਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ?',
                optionsJson: ['27.5%', '33.0%', '50.0%', '72.5%'],
                correctAnswer: '27.5%',
                explanationEn:
                  'D = Vout / Vin = 3.3 V / 12.0 V = 0.275 = 27.5%.',
                explanationPa:
                  'D = 3.3 / 12 = 0.275 = 27.5%।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Boost Converter',
                promptEn: 'In an ideal Boost (step-up) converter operating with a duty cycle D = 0.60 from a 5.0 V input, what is the output voltage?',
                promptPa: '5.0V ਇਨਪੁਟ ਅਤੇ D = 0.60 ਡਿਊਟੀ ਸਾਈਕਲ ਵਾਲੇ ਬੂਸਟ ਕਨਵਰਟਰ ਦੀ ਆਊਟਪੁੱਟ ਵੋਲਟੇਜ ਕੀ ਹੋਵੇਗੀ?',
                optionsJson: ['12.5 Volts', '8.33 Volts', '3.0 Volts', '15.0 Volts'],
                correctAnswer: '12.5 Volts',
                explanationEn:
                  'Vout = Vin / (1 - D) = 5.0 V / (1 - 0.60) = 5.0 / 0.40 = 12.5 Volts.',
                explanationPa:
                  'Vout = 5.0 / (1 - 0.6) = 5 / 0.4 = 12.5 ਵੋਲਟ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Flyback Topology',
                promptEn: 'What is the principal advantage of a Flyback converter topology over standard buck and boost converters?',
                promptPa: 'ਬੱਕ ਅਤੇ ਬੂਸਟ ਦੇ ਮੁਕਾਬਲੇ ਫਲਾਈਬੈਕ (Flyback) ਕਨਵਰਟਰ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਫ਼ਾਇਦਾ ਕੀ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'It provides complete galvanic isolation between high-voltage mains and low-voltage output via a coupled inductor/transformer',
                  'It uses zero inductors',
                  'It requires no feedback controller',
                  'It achieves 100.0% efficiency with zero loss',
                ],
                correctAnswer: 'It provides complete galvanic isolation between high-voltage mains and low-voltage output via a coupled inductor/transformer',
                explanationEn:
                  'Flyback converters use a coupled transformer inductor, providing thousands of volts of safety galvanic isolation for wall phone chargers.',
                explanationPa:
                  'ਇਹ ਟ੍ਰਾਂਸਫਾਰਮਰ ਰਾਹੀਂ 230V mains ਅਤੇ ਫੋਨ ਦੇ 5V ਵਿਚਕਾਰ ਪੂਰਾ ਸੁਰੱਖਿਅਤ ਗੈਲਵੈਨਿਕ ਇਨਸੂਲੇਸ਼ਨ ਪਰਦਾ ਰੱਖਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Battery Chemistry',
                promptEn: 'Why is Lithium Iron Phosphate (LiFePO4) increasingly chosen over Lithium Cobalt/NMC for home solar energy storage?',
                promptPa: 'ਘਰੇਲੂ ਸੋਲਰ ਬੈਟਰੀਆਂ ਲਈ ਆਮ ਲਿਥੀਅਮ ਦੀ ਬਜਾਏ LiFePO4 (ਲਿਥੀਅਮ ਆਇਰਨ ਫਾਸਫੇਟ) ਨੂੰ ਕਿਉਂ ਚੁਣਿਆ ਜਾਂਦਾ ਹੈ?',
                optionsJson: [
                  'Exceptional thermal stability with zero risk of violent thermal runaway fire, and extreme cycle life (>3000 to 5000 cycles)',
                  'It is lighter than pure hydrogen',
                  'It outputs 120 V per single cell',
                  'It requires zero charging current',
                ],
                correctAnswer: 'Exceptional thermal stability with zero risk of violent thermal runaway fire, and extreme cycle life (>3000 to 5000 cycles)',
                explanationEn:
                  'LiFePO4 has strong covalent P-O chemical bonds that do not release oxygen during overheating, preventing thermal runaway fires, and lasts over 10 years.',
                explanationPa:
                  'ਇਹ ਬਹੁਤ ਸੁਰੱਖਿਅਤ ਹੈ, ਇਸਨੂੰ ਕਦੇ ਅੱਗ ਨਹੀਂ ਲੱਗਦੀ ਅਤੇ ਇਹ 10-15 ਸਾਲ (5000 ਸਾਈਕਲ) ਆਸਾਨੀ ਨਾਲ ਚਲਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'CC-CV Charging',
                promptEn: 'In the CC-CV charging algorithm for Lithium-ion cells, when does the charger transition from Constant Current (CC) to Constant Voltage (CV)?',
                promptPa: 'ਲਿਥੀਅਮ ਬੈਟਰੀ ਨੂੰ ਚਾਰਜ ਕਰਦੇ ਸਮੇਂ ਚਾਰਜਰ Constant Current ਤੋਂ Constant Voltage ਮੋਡ ਵਿੱਚ ਕਦੋਂ ਬਦਲਦਾ ਹੈ?',
                optionsJson: [
                  'When the cell terminal voltage reaches its maximum upper cutoff limit (typically 4.20 V per cell)',
                  'When the battery reaches 100°C',
                  'When half the charge time has elapsed',
                  'When the battery is completely empty',
                ],
                correctAnswer: 'When the cell terminal voltage reaches its maximum upper cutoff limit (typically 4.20 V per cell)',
                explanationEn:
                  'During CC, current is held constant as voltage rises. Once cell voltage hits 4.20 V, the charger holds 4.20 V constant (CV) while current tapers off to zero.',
                explanationPa:
                  'ਜਿਵੇਂ ਹੀ ਬੈਟਰੀ ਦੀ ਵੋਲਟੇਜ 4.20V ਤੱਕ ਪਹੁੰਚਦੀ ਹੈ, ਚਾਰਜਰ ਵੋਲਟੇਜ ਨੂੰ 4.20V ਤੇ ਰੋਕ ਦਿੰਦਾ ਹੈ ਅਤੇ ਕਰੰਟ ਹੌਲੀ-ਹੌਲੀ ਘਟਾਉਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'BMS Balancing',
                promptEn: 'What is the primary danger if a multi-cell Lithium battery pack operates without a Battery Management System (BMS)?',
                promptPa: 'ਜੇਕਰ ਮਲਟੀ-ਸੈੱਲ ਲਿਥੀਅਮ ਬੈਟਰੀ ਬਿਨਾਂ BMS ਦੇ ਚਲਾਈ ਜਾਵੇ ਤਾਂ ਸਭ ਤੋਂ ਵੱਡਾ ਖ਼ਤਰਾ ਕੀ ਹੋਵੇਗਾ?',
                optionsJson: [
                  'Unbalanced cells can be driven into severe overcharge (>4.3V), triggering violent thermal runaway and explosion',
                  'The battery voltage will drop to zero immediately',
                  'The battery will consume more electricity from the wall',
                  'The cells will turn into lead-acid chemistry',
                ],
                correctAnswer: 'Unbalanced cells can be driven into severe overcharge (>4.3V), triggering violent thermal runaway and explosion',
                explanationEn:
                  'Without cell balancing, weaker cells get pushed past 4.3V during charging, causing lithium dendrite growth, internal shorts, and catastrophic fire.',
                explanationPa:
                  'ਸੈੱਲ ਅਸੰਤੁਲਿਤ ਹੋ ਜਾਣਗੇ, ਕਮਜ਼ੋਰ ਸੈੱਲ 4.3V ਤੋਂ ਵੱਧ ਚਾਰਜ ਹੋ ਕੇ ਫਟ ਜਾਵੇਗਾ ਅਤੇ ਅੱਗ ਲੱਗ ਜਾਵੇਗੀ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Inductor Saturation',
                promptEn: 'What happens inside a Buck converter if the inductor current exceeds its core magnetic Saturation Current (Isat)?',
                promptPa: 'ਜੇਕਰ ਬੱਕ ਕਨਵਰਟਰ ਦਾ ਇੰਡਕਟਰ ਆਪਣੀ ਸੈਚੁਰੇਸ਼ਨ ਕਰੰਟ ਸੀਮਾ (Isat) ਪਾਰ ਕਰ ਜਾਵੇ ਤਾਂ ਕੀ ਹੋਵੇਗਾ?',
                optionsJson: [
                  'Inductance collapses precipitously toward zero, causing a massive spike in current that can destroy the switching MOSFET',
                  'The output voltage automatically triples',
                  'The switching frequency drops to zero',
                  'The inductor turns into a capacitor',
                ],
                correctAnswer: 'Inductance collapses precipitously toward zero, causing a massive spike in current that can destroy the switching MOSFET',
                explanationEn:
                  'When core magnetic domains saturate, incremental permeability drops to that of air, collapsing inductance and causing short-circuit current ramps.',
                explanationPa:
                  'ਇੰਡਕਟੈਂਸ ਇੱਕ ਦਮ ਜ਼ੀਰੋ ਹੋ ਜਾਂਦੀ ਹੈ, ਕਰੰਟ ਬੇਕਾਬੂ ਹੋ ਕੇ ਵਧਦਾ ਹੈ ਅਤੇ ਸਵਿਚਿੰਗ MOSFET ਸੜ ਕੇ ਸੁਆਹ ਹੋ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Pure Sine Inverter',
                promptEn: 'How does a Pure Sine Wave inverter synthesize a clean 50 Hz sine wave from high-voltage DC?',
                promptPa: 'ਪਿਓਰ ਸਾਈਨ ਵੇਵ ਇਨਵਰਟਰ ਹਾਈ ਵੋਲਟੇਜ DC ਤੋਂ ਸ਼ੁੱਧ 50 Hz ਸਾਈਨ ਵੇਵ ਕਿਵੇਂ ਬਣਾਉਂਦਾ ਹੈ?',
                optionsJson: [
                  'By switching an H-bridge using high-frequency Sinusoidal Pulse-Width Modulation (SPWM) and filtering through an LC low-pass filter',
                  'By using a 50 Hz mechanical spinning motor',
                  'By passing DC through a giant 50 Ω resistor',
                  'By converting DC directly to heat',
                ],
                correctAnswer: 'By switching an H-bridge using high-frequency Sinusoidal Pulse-Width Modulation (SPWM) and filtering through an LC low-pass filter',
                explanationEn:
                  'High-frequency SPWM pulses (e.g. 20 kHz) vary in width sinusoidally. An LC filter smooths out the switching carrier, leaving only a pure 50 Hz fundamental sine wave.',
                explanationPa:
                  '20 kHz ਉੱਤੇ SPWM ਪਲਸਾਂ ਬਣਾ ਕੇ ਉਹਨਾਂ ਨੂੰ LC ਫਿਲਟਰ ਰਾਹੀਂ ਲੰਘਾਇਆ ਜਾਂਦਾ ਹੈ ਜਿਸ ਨਾਲ ਬਿਲਕੁਲ ਸ਼ੁੱਧ 50 Hz ਸਾਈਨ ਵੇਵ ਨਿਕਲਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'C-Rate Calculation',
                promptEn: 'If a 5000 mAh drone battery pack is discharged at a continuous 10C rate, what current is drawn and how long does the battery last?',
                promptPa: '5000 mAh ਦੀ ਡਰੋਨ ਬੈਟਰੀ ਨੂੰ ਜੇਕਰ 10C ਦੀ ਦਰ ਤੇ ਡਿਸਚਾਰਜ ਕੀਤਾ ਜਾਵੇ ਤਾਂ ਕਿੰਨਾ ਕਰੰਟ ਨਿਕਲੇਗਾ ਅਤੇ ਬੈਟਰੀ ਕਿੰਨੀ ਦੇਰ ਚੱਲੇਗੀ?',
                optionsJson: [
                  '50 Amperes for 6 minutes',
                  '5 Amperes for 10 hours',
                  '10 Amperes for 30 minutes',
                  '500 Amperes for 1 minute',
                ],
                correctAnswer: '50 Amperes for 6 minutes',
                explanationEn:
                  '1C = 5000 mA = 5 A. 10C = 10 * 5 A = 50 Amperes. Duration = 1 hour / 10 = 0.1 hours = 6 minutes.',
                explanationPa:
                  '1C = 5A। 10C = 50 ਐਂਪੀਅਰ। ਸਮਾਂ = 60 ਮਿੰਟ / 10 = 6 ਮਿੰਟ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Synchronous Rectification',
                promptEn: 'Why do modern high-efficiency buck converters replace the freewheeling catch diode with a "synchronous" N-channel MOSFET?',
                promptPa: 'ਆਧੁਨਿਕ ਹਾਈ-ਐਫੀਸ਼ੈਂਸੀ ਬੱਕ ਕਨਵਰਟਰਾਂ ਵਿੱਚ ਡਾਇਓਡ ਦੀ ਥਾਂ "Synchronous" MOSFET ਕਿਉਂ ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ?',
                optionsJson: [
                  'To eliminate the 0.4V diode forward drop, replacing it with a tiny I * Rds(on) drop (e.g. 0.05V), boosting efficiency above 95%',
                  'To invert the output voltage',
                  'To increase switching noise',
                  'To eliminate the need for an inductor',
                ],
                correctAnswer: 'To eliminate the 0.4V diode forward drop, replacing it with a tiny I * Rds(on) drop (e.g. 0.05V), boosting efficiency above 95%',
                explanationEn:
                  'At 10 Amperes, a 0.5V Schottky diode dissipates 5 Watts. A synchronous MOSFET with Rds(on) = 5 mΩ dissipates only 0.5 Watts (10x less heat).',
                explanationPa:
                  'ਡਾਇਓਡ 0.4V ਖਾਂਦਾ ਹੈ ਜਦਕਿ MOSFET ਸਿਰਫ਼ 0.05V ਖਾਂਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਗਰਮੀ 10 ਗੁਣਾ ਘਟ ਜਾਂਦੀ ਹੈ ਅਤੇ ਐਫੀਸ਼ੈਂਸੀ 95% ਤੋਂ ਟੱਪ ਜਾਂਦੀ ਹੈ।',
              },
            ],
          },
        },
      ],
    },
  ],
};
