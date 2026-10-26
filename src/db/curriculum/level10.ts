import { SeedCourse } from './types.ts';

export const LEVEL_10_COURSE: SeedCourse = {
  slug: 'level-10-communications-and-signal-processing',
  levelNumber: 10,
  titleEn: 'Level 10: Communications & Signal Processing',
  titlePa: 'ਲੈਵਲ 10: ਸੰਚਾਰ ਅਤੇ ਸਿਗਨਲ ਪ੍ਰੋਸੈਸਿੰਗ (Communications & DSP)',
  descriptionEn:
    'Analog modulation (AM, FM), digital keying (QPSK, QAM), Shannon channel capacity, RS-485, RF antennas, Free-Space Path Loss, Bluetooth, Wi-Fi, LoRa, OSI 7-layer, TCP/IP, and Fast Fourier Transform (FFT).',
  descriptionPa:
    'ਐਨਾਲਾਗ ਅਤੇ ਡਿਜੀਟਲ ਮੌਡੂਲੇਸ਼ਨ (AM, FM, QAM), ਸ਼ੈਨਨ ਕਪੈਸਿਟੀ, RS-485, ਐਂਟੀਨਾ ਸਿਧਾਂਤ, ਵਾਈ-ਫਾਈ, ਬਲੂਟੁੱਥ, LoRa, OSI ਮਾਡਲ, TCP/IP, ਅਤੇ ਡਿਜੀਟਲ ਸਿਗਨਲ ਪ੍ਰੋਸੈਸਿੰਗ (DSP, FFT)।',
  category: 'advanced-electronics',
  estimatedHours: 22,
  modules: [
    {
      orderIndex: 1,
      titleEn: 'Modulation, Information Theory & Wired Standards',
      titlePa: 'ਮੌਡੂਲੇਸ਼ਨ, ਸੂਚਨਾ ਸਿਧਾਂਤ ਅਤੇ ਤਾਰ-ਅਧਾਰਿਤ ਪ੍ਰੋਟੋਕੋਲ',
      summaryEn:
        'AM/FM sideband physics, digital PSK/QAM constellations, Shannon-Hartley channel capacity limit, SNR, RS-232, and balanced differential RS-485 industrial buses.',
      summaryPa:
        'AM/FM ਰੇਡੀਓ ਵੇਵਾਂ, ਡਿਜੀਟਲ QAM ਮੌਡੂਲੇਸ਼ਨ, ਸ਼ੈਨਨ ਥਿਊਰਮ, ਸ਼ੋਰ ਅਨੁਪਾਤ (SNR), RS-232, ਅਤੇ ਉਦਯੋਗਿਕ RS-485 ਬੱਸ।',
      lessons: [
        {
          slug: 'modulation-am-fm-qam-wired-protocols',
          orderIndex: 1,
          titleEn: '10.1 AM, FM, Digital QAM, Shannon Capacity & RS-485 Industrial Buses',
          titlePa: '10.1 AM, FM, ਡਿਜੀਟਲ QAM, ਸ਼ੈਨਨ ਸਮਰੱਥਾ ਅਤੇ RS-485 ਉਦਯੋਗਿਕ ਬੱਸ',
          objectivesJson: [
            'Analyze Amplitude Modulation (AM) and Frequency Modulation (FM) calculating modulation index, sidebands, and Carson’s Rule bandwidth',
            'Map digital modulation schemes: ASK, FSK, BPSK, QPSK, and 16/64-QAM constellation diagrams for high spectral efficiency',
            'Calculate theoretical maximum data rates using the Shannon-Hartley Channel Capacity Theorem (C = B * log2(1 + SNR))',
            'Design long-distance differential industrial communication links using RS-485 transceivers, fail-safe bias, and 120 Ω termination',
          ],
          prerequisitesJson: ['Level 0: Mathematics for Electronics (Logarithms and trigonometry)'],
          childAnalogyEn:
            'Think of sending a letter across the world! The letter’s words are the original low-frequency voice/music. A pigeon or supersonic jet carrying the letter is the high-frequency Carrier Wave! In Amplitude Modulation (AM), you make the jet fly higher or lower according to your voice volume. In Frequency Modulation (FM), you make the jet fly faster or slower! QAM is like putting 16 or 64 different coloured flags on the jet wings, sending whole paragraphs in a single glance!',
          childAnalogyPa:
            'ਦੂਰ ਸੁਨੇਹਾ ਭੇਜਣ ਦੀ ਕਲਪਨਾ ਕਰੋ! ਸਾਡੀ ਆਵਾਜ਼ ਇੱਕ ਚਿੱਠੀ ਵਾਂਗ ਹੈ ਜੋ ਹਵਾ ਵਿੱਚ ਦੂਰ ਨਹੀਂ ਜਾ ਸਕਦੀ। ਤੇਜ਼ ਰਫ਼ਤਾਰ ਬਾਜ਼ ਜਾਂ ਜੈੱਟ ਜਹਾਜ਼ ਕੈਰੀਅਰ ਵੇਵ (Carrier Wave) ਹੈ! AM ਰੇਡੀਓ ਵਿੱਚ ਅਸੀਂ ਜਹਾਜ਼ ਦੀ ਉਚਾਈ ਨੂੰ ਆਵਾਜ਼ ਅਨੁਸਾਰ ਘਟਾਉਂਦੇ-ਵਧਾਉਂਦੇ ਹਾਂ। FM ਵਿੱਚ ਅਸੀਂ ਜਹਾਜ਼ ਦੀ ਸਪੀਡ ਨੂੰ ਬਦਲਦੇ ਹਾਂ! QAM ਜਹਾਜ਼ ਉੱਤੇ 16 ਜਾਂ 64 ਵੱਖ-ਵੱਖ ਰੰਗਾਂ ਦੇ ਝੰਡੇ ਲਗਾਉਣ ਵਾਂਗ ਹੈ, ਜਿਸ ਨਾਲ ਇੱਕੋ ਪਲ ਵਿੱਚ ਢੇਰ ਸਾਰਾ ਡਿਜੀਟਲ ਡਾਟਾ ਬਿਨਾਂ ਸ਼ੋਰ ਦੇ ਚਲਾ ਜਾਂਦਾ ਹੈ!',
          technicalExplanationEn:
            'Communication systems modulate high-frequency electromagnetic carriers to transmit information through physical media:\n\n1. Analog Modulation:\n• Amplitude Modulation (AM): s(t) = [A_c + m(t)] * cos(2*π*f_c*t). Bandwidth B = 2 * f_m(max). Power: P_t = P_c * (1 + m^2 / 2). Carrier consumes 66% of power at 100% modulation (m=1.0).\n• Frequency Modulation (FM): Carrier frequency is varied proportional to modulating voltage: f(t) = f_c + k_f * m(t). Carson’s Rule: Bandwidth BW ≈ 2 * (Δf + f_m). FM rejects amplitude noise, providing broadcast high-fidelity audio.\n\n2. Digital Modulation Schemes:\n• Phase Shift Keying (BPSK, QPSK): Varies carrier phase angle. QPSK encodes 2 bits per symbol (00, 01, 11, 10) at 90° intervals.\n• Quadrature Amplitude Modulation (QAM): Modulates both amplitude and phase simultaneously on two orthogonal (In-phase I and Quadrature Q) carriers. 16-QAM encodes 4 bits/symbol; 64-QAM encodes 6 bits/symbol (used in Wi-Fi and 5G).\n\n3. Shannon-Hartley Theorem:\nDefines absolute theoretical channel capacity C (bits per second) through a noisy channel of bandwidth B (Hz):\n• C = B * log_2(1 + SNR)\nwhere SNR is the linear signal-to-noise power ratio (P_signal / P_noise).\n\n4. Industrial Wired Standards (RS-485 vs RS-232):\n• RS-232: Single-ended ground-referenced voltages (Logic 0: +3V to +15V, Logic 1: -3V to -15V). Limited to ~15 meters and susceptible to common-mode ground noise.\n• RS-485 (TIA/EIA-485-A): Balanced differential pair (Data A and Data B). Transceivers drive differential voltage V_AB = ±1.5V to ±5V. Common-mode noise picked up equally on both twisted wires is subtracted and rejected at the receiver. Supports 32 to 128 nodes up to 1200 meters at 100 kbps (or 10 Mbps at 10 meters) with 120 Ω parallel termination.',
          technicalExplanationPa:
            'ਸੰਚਾਰ ਇੰਜੀਨੀਅਰਿੰਗ ਦੇ ਮੁੱਖ ਨਿਯਮ:\n\n1. ਰੇਡੀਓ ਮੌਡੂਲੇਸ਼ਨ:\n• AM (Amplitude Modulation): ਕੈਰੀਅਰ ਵੇਵ ਦੀ ਉਚਾਈ ਬਦਲਦੀ ਹੈ। ਸ਼ੋਰ ਆਸਾਨੀ ਨਾਲ ਆ ਜਾਂਦਾ ਹੈ (ਜਿਵੇਂ ਬਿਜਲੀ ਕੜਕਣ ਤੇ ਖੜਖੜਾਹਟ)।\n• FM (Frequency Modulation): ਕੈਰੀਅਰ ਦੀ ਫ੍ਰੀਕੁਐਂਸੀ ਬਦਲਦੀ ਹੈ (Carson’s Rule: BW = 2*(Δf + fm))। ਆਵਾਜ਼ ਬਹੁਤ ਸਾਫ਼ ਹੁੰਦੀ ਹੈ।\n\n2. ਡਿਜੀਟਲ QAM ਮੌਡੂਲੇਸ਼ਨ:\nਇੱਕੋ ਸਮੇਂ ਐਂਪਲੀਚਿਊਡ ਅਤੇ ਫੇਜ਼ ਦੋਵੇਂ ਬਦਲ ਕੇ ਇੱਕੋ ਸਿੰਬਲ ਵਿੱਚ 4 ਤੋਂ 8 ਬਿੱਟ ਭੇਜਦਾ ਹੈ (ਜਿਵੇਂ 64-QAM)। ਇਹ ਵਾਈ-ਫਾਈ ਅਤੇ 4G/5G ਵਿੱਚ ਤੇਜ਼ ਇੰਟਰਨੈੱਟ ਦਿੰਦਾ ਹੈ।\n\n3. ਸ਼ੈਨਨ ਕਪੈਸਿਟੀ ਥਿਊਰਮ (Shannon Capacity):\nਦੱਸਦਾ ਹੈ ਕਿ ਕਿਸੇ ਸ਼ੋਰ ਵਾਲੀ ਤਾਰ ਜਾਂ ਰੇਡੀਓ ਚੈਨਲ ਵਿੱਚੋਂ ਵੱਧ ਤੋਂ ਵੱਧ ਕਿੰਨਾ ਇੰਟਰਨੈੱਟ ਡਾਟਾ ਲੰਘ ਸਕਦਾ ਹੈ: C = B * log2(1 + SNR)।\n\n4. RS-485 ਉਦਯੋਗਿਕ ਤਾਰ:\nਕਾਰਖਾਨਿਆਂ ਵਿੱਚ ਮੋਟਰਾਂ ਦੇ ਭਾਰੀ ਸ਼ੋਰ ਦੇ ਬਾਵਜੂਦ 1200 ਮੀਟਰ ਦੂਰ ਤੱਕ ਡਾਟਾ ਭੇਜਣ ਲਈ ਡਿਫਰੈਂਸ਼ੀਅਲ (ਦੋ ਤਾਰਾਂ ਦਾ ਆਪਸੀ ਫ਼ਰਕ) ਤਰੀਕਾ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ ਜਿਸਦੇ ਦੋਵੇਂ ਸਿਰਿਆਂ ਤੇ 120 ਓਹਮ ਦਾ ਰਜਿਸਟਰ ਲੱਗਦਾ ਹੈ।',
          practicalExampleEn:
            'Connecting solar farm power inverters across a 1-kilometer open field to a central SCADA computer: Running standard USB or Ethernet would completely fail over 1 km. Engineers install an RS-485 half-duplex Modbus RTU network over a shielded twisted-pair (STP) cable terminated with 120 Ω resistors at both ends. Even when multi-megawatt switching inverters radiate intense electromagnetic fields, the balanced differential RS-485 receivers reject the common-mode interference, maintaining 100% error-free data packets.',
          practicalExamplePa:
            '1 ਕਿਲੋਮੀਟਰ ਵੱਡੇ ਸੋਲਰ ਪਲਾਂਟ ਵਿੱਚ ਸਾਰੇ ਇਨਵਰਟਰਾਂ ਦਾ ਡਾਟਾ ਕੰਟਰੋਲ ਰੂਮ ਤੱਕ ਪਹੁੰਚਾਉਣਾ: ਆਮ ਤਾਰਾਂ ਉੱਤੇ ਸੋਲਰ ਇਨਵਰਟਰਾਂ ਦਾ ਇੰਨਾ ਸ਼ੋਰ ਹੁੰਦਾ ਹੈ ਕਿ ਕੰਪਿਊਟਰ ਹੈਂਗ ਹੋ ਜਾਂਦਾ ਹੈ। ਇੱਥੇ ਸ਼ੀਲਡ ਵਾਲੀ RS-485 ਤਾਰ (ਮੋਡਬੱਸ ਪ੍ਰੋਟੋਕੋਲ) ਵਰਤੀ ਜਾਂਦੀ ਹੈ। ਦੋਵੇਂ ਪਾਸੇ 120 Ω ਰਜਿਸਟਰ ਲਗਾਉਣ ਨਾਲ 1000 ਮੀਟਰ ਦੂਰ ਵੀ ਬਿਨਾਂ ਕਿਸੇ ਗਲਤੀ ਦੇ ਪੂਰਾ ਡਾਟਾ ਸਹੀ ਸਲਾਮਤ ਪਹੁੰਚਦਾ ਹੈ।',
          codeDemo: `// TypeScript: Shannon-Hartley Capacity & Carson's FM Bandwidth Calculator
export function calcShannonCapacity(bandwidthHz: number, snrDb: number): number {
  const snrLinear = Math.pow(10, snrDb / 10);
  const capacityBps = bandwidthHz * Math.log2(1 + snrLinear);
  return capacityBps;
}

export function calcCarsonsFmBandwidth(peakDeviationHz: number, maxModulatingFreqHz: number) {
  // Carson's bandwidth rule: BW = 2 * (Delta_f + f_m)
  const bandwidthHz = 2 * (peakDeviationHz + maxModulatingFreqHz);
  return { bandwidthHz, bandwidthKhz: bandwidthHz / 1e3 };
}

// Verification: 3000 Hz telephone channel with 30 dB SNR:
const phoneCap = calcShannonCapacity(3000, 30);
console.log('Phone Channel Capacity:', (phoneCap / 1e3).toFixed(1), 'kbps'); // ~29.9 kbps (V.34 modem limit!)

// Commercial FM broadcast: 75 kHz deviation + 15 kHz audio:
const fm = calcCarsonsFmBandwidth(75000, 15000);
console.log('Commercial FM Bandwidth:', fm.bandwidthKhz, 'kHz'); // 180.0 kHz`,
          misconceptionsJson: [
            {
              myth: 'Digital QAM modulation requires higher physical carrier frequencies to transmit faster data.',
              truthEn:
                'QAM increases the bits transmitted per symbol (spectral efficiency) by subdividing the phase and amplitude constellation space. It achieves higher data rates over the EXACT same carrier frequency and bandwidth, limited solely by the Signal-to-Noise Ratio (SNR).',
              truthPa:
                'QAM ਨੂੰ ਫ੍ਰੀਕੁਐਂਸੀ ਵਧਾਉਣ ਦੀ ਲੋੜ ਨਹੀਂ ਹੁੰਦੀ। ਇਹ ਉਸੇ ਫ੍ਰੀਕੁਐਂਸੀ ਉੱਤੇ ਹਰ ਸੈਕਿੰਡ ਵਿੱਚ ਜ਼ਿਆਦਾ ਬਿੱਟ (ਜਿਵੇਂ 64-QAM ਵਿੱਚ 6 ਬਿੱਟ) ਪੈਕ ਕਰਕੇ ਭੇਜਦਾ ਹੈ, ਜੇਕਰ ਸਿਗਨਲ ਵਿੱਚ ਸ਼ੋਰ ਘੱਟ ਹੋਵੇ।',
            },
            {
              myth: 'An RS-485 communication line can be connected in a "star" or "tree" topology with long branch stubs.',
              truthEn:
                'RS-485 is strictly a daisy-chain bus topology. Stub branches act as unterminated transmission line stubs that create severe signal reflections, destroying differential bit edges and causing packet CRC drops.',
              truthPa:
                'RS-485 ਨੂੰ ਕਦੇ ਵੀ ਤਾਰੇ ਵਾਂਗ (Star topology) ਵੱਖ-ਵੱਖ ਪਾਸੇ ਨਹੀਂ ਵੰਡਣਾ ਚਾਹੀਦਾ। ਇਹ ਸਿਰਫ਼ ਇੱਕ ਸਿੱਧੀ ਲੜੀ (Daisy Chain) ਵਿੱਚ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ, ਨਹੀਂ ਤਾਂ ਤਾਰਾਂ ਵਿੱਚੋਂ ਰਿਫਲੈਕਸ਼ਨ ਆ ਕੇ ਡਾਟਾ ਕੱਟ ਦੇਵੇਗੀ।',
            },
            {
              myth: 'Increasing transmission power can raise channel data capacity to infinity under the Shannon theorem.',
              truthEn:
                'In real-world channels, increasing transmitter power eventually reaches receiver front-end non-linear intermodulation saturation, and the logarithmic term (log2(1 + SNR)) experiences diminishing returns while channel bandwidth B remains the absolute fundamental bound.',
              truthPa:
                'ਸਿਰਫ਼ ਪਾਵਰ ਵਧਾ ਕੇ ਇੰਟਰਨੈੱਟ ਅਨੰਤ ਤੇਜ਼ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ, ਕਿਉਂਕਿ ਲਾਗਰਿਦਮਿਕ ਨਿਯਮ ਕਾਰਨ ਪਾਵਰ ਦਾ ਅਸਰ ਹੌਲੀ-ਹੌਲੀ ਘਟਦਾ ਜਾਂਦਾ ਹੈ ਅਤੇ ਅਸਲ ਸੀਮਾ ਬੈਂਡਵਿਡਥ (B) ਤੈਅ ਕਰਦੀ ਹੈ।',
            },
          ],
          terminologyJson: [
            {
              term: 'Shannon-Hartley Theorem',
              punjabi: 'ਸ਼ੈਨਨ-ਹਾਰਟਲੇ ਥਿਊਰਮ',
              meaningEn: 'Formula quantifying the absolute upper theoretical data transmission rate for a noisy analog communication channel.',
              meaningPa: 'ਸ਼ੋਰ ਵਾਲੇ ਰੇਡੀਓ ਜਾਂ ਤਾਰ ਚੈਨਲ ਵਿੱਚੋਂ ਵੱਧ ਤੋਂ ਵੱਧ ਡਾਟਾ ਲੰਘਾਉਣ ਦਾ ਗਣਿਤਕ ਫਾਰਮੂਲਾ।',
            },
            {
              term: 'QAM (Quadrature Amplitude Modulation)',
              punjabi: 'QAM ਮੌਡੂਲੇਸ਼ਨ',
              meaningEn: 'Modulation method combining two amplitude-modulated sinusoidal carriers 90 degrees out of phase.',
              meaningPa: 'ਐਂਪਲੀਚਿਊਡ ਅਤੇ ਫੇਜ਼ ਦੋਵਾਂ ਨੂੰ ਮਿਲਾ ਕੇ ਹਾਈ-ਸਪੀਡ ਇੰਟਰਨੈੱਟ ਭੇਜਣ ਵਾਲੀ ਤਕਨੀਕ।',
            },
            {
              term: 'RS-485',
              punjabi: 'RS-485 ਉਦਯੋਗਿਕ ਬੱਸ',
              meaningEn: 'EIA differential balanced transmission standard supporting multi-drop serial communications up to 1200 meters.',
              meaningPa: 'ਕਾਰਖਾਨਿਆਂ ਵਿੱਚ ਲੰਮੀ ਦੂਰੀ (1200 ਮੀਟਰ) ਤੱਕ ਬਿਨਾਂ ਸ਼ੋਰ ਦੇ ਡਾਟਾ ਭੇਜਣ ਵਾਲੀ ਦੋ-ਤਾਰਾਂ ਵਾਲੀ ਬੱਸ।',
            },
            {
              term: 'Carson’s Rule',
              punjabi: 'ਕਾਰਸਨ ਦਾ ਨਿਯਮ',
              meaningEn: 'Rule of thumb estimating the practical bandwidth required for frequency-modulated (FM) transmission.',
              meaningPa: 'FM ਰੇਡੀਓ ਪ੍ਰਸਾਰਣ ਲਈ ਲੋੜੀਂਦੀ ਕੁੱਲ ਬੈਂਡਵਿਡਥ ਕੱਢਣ ਦਾ ਇੰਜੀਨੀਅਰਿੰਗ ਨਿਯਮ।',
            },
            {
              term: 'Modulation Index (m)',
              punjabi: 'ਮੌਡੂਲੇਸ਼ਨ ਇੰਡੈਕਸ',
              meaningEn: 'Measure of the extent of carrier amplitude or frequency variation relative to unmodulated carrier level.',
              meaningPa: 'ਕੈਰੀਅਰ ਵੇਵ ਨੂੰ ਸਿਗਨਲ ਵੱਲੋਂ ਬਦਲਣ ਦੀ ਡੂੰਘਾਈ ਦਾ ਅਨੁਪਾਤ।',
            },
            {
              term: 'Differential Signaling',
              punjabi: 'ਡਿਫਰੈਂਸ਼ੀਅਲ ਸਿਗਨਲਿੰਗ',
              meaningEn: 'Method of transmitting information using two complementary signals on paired conductors to reject common-mode noise.',
              meaningPa: 'ਦੋ ਉਲਟ ਤਾਰਾਂ ਰਾਹੀਂ ਡਾਟਾ ਭੇਜਣਾ ਤਾਂ ਜੋ ਬਾਹਰੀ ਸ਼ੋਰ ਆਸਾਨੀ ਨਾਲ ਕੱਟਿਆ ਜਾ ਸਕੇ।',
            },
          ],
          interactiveLabId: 'network-sim',
          exercisePromptEn:
            'Communications Problem: (1) A deep-space NASA satellite transponder transmits over an RF channel bandwidth of 500 kHz with an SNR of 15 dB. Calculate the theoretical maximum Shannon channel capacity in kbps. (2) Commercial FM broadcast uses a peak deviation of 75 kHz and a maximum audio frequency of 15 kHz. Calculate its Carson’s rule bandwidth in kHz.',
          exercisePromptPa:
            'ਸੰਚਾਰ ਸਵਾਲ: (1) 500 kHz ਬੈਂਡਵਿਡਥ ਅਤੇ 15 dB SNR ਵਾਲੇ ਨਾਸਾ ਸੈਟੇਲਾਈਟ ਚੈਨਲ ਦੀ ਵੱਧ ਤੋਂ ਵੱਧ ਸ਼ੈਨਨ ਕਪੈਸਿਟੀ (kbps) ਕੱਢੋ। (2) 75 kHz ਡੈਵੀਏਸ਼ਨ ਅਤੇ 15 kHz ਆਡੀਓ ਵਾਲੇ FM ਸਟੇਸ਼ਨ ਦੀ ਕਾਰਸਨ ਨਿਯਮ ਅਨੁਸਾਰ ਬੈਂਡਵਿਡਥ (kHz) ਪਤਾ ਕਰੋ।',
          summaryEn:
            'Modern communication orchestrates analog radio carriers and discrete digital constellations: Shannon’s theorem establishes ultimate capacity boundaries, digital QAM packs multiple bits per Hertz, and differential RS-485 shields industrial factory automation.',
          summaryPa:
            'ਸੰਚਾਰ ਇੰਜੀਨੀਅਰਿੰਗ ਦੁਨੀਆ ਨੂੰ ਜੋੜਦੀ ਹੈ: ਸ਼ੈਨਨ ਦਾ ਨਿਯਮ ਡਾਟੇ ਦੀ ਅਸਲ ਸੀਮਾ ਦੱਸਦਾ ਹੈ, QAM ਘੱਟ ਥਾਂ ਵਿੱਚ ਵੱਧ ਡਾਟਾ ਪੈਕ ਕਰਦਾ ਹੈ, ਅਤੇ RS-485 ਕਾਰਖਾਨਿਆਂ ਵਿੱਚ ਬਿਨਾਂ ਸ਼ੋਰ ਦੇ ਸੁਨੇਹੇ ਪਹੁੰਚਾਉਂਦੀ ਹੈ।',
          furtherReadingJson: [
            'Digital Communications (5th Edition) by John G. Proakis & Masoud Salehi',
            'Communication Systems by Simon Haykin & Michael Moher',
            'A Mathematical Theory of Communication by Claude E. Shannon (1948 Bell Labs Classic)',
          ],
          quiz: {
            titleEn: 'Level 10 Assessment: Modulation, Shannon Theorem & RS-485',
            titlePa: 'ਲੈਵਲ 10 ਟੈਸਟ: ਮੌਡੂਲੇਸ਼ਨ, ਸ਼ੈਨਨ ਥਿਊਰਮ ਅਤੇ RS-485',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'Shannon Theorem',
                promptEn: 'According to the Shannon-Hartley theorem, what happens to the channel capacity C if the channel bandwidth B is doubled while maintaining constant SNR?',
                promptPa: 'ਸ਼ੈਨਨ ਥਿਊਰਮ ਅਨੁਸਾਰ ਜੇਕਰ ਸ਼ੋਰ ਅਨੁਪਾਤ (SNR) ਬਰਾਬਰ ਰੱਖ ਕੇ ਬੈਂਡਵਿਡਥ (B) ਦੁੱਗਣੀ ਕਰ ਦਿੱਤੀ ਜਾਵੇ ਤਾਂ ਚੈਨਲ ਕਪੈਸਿਟੀ (C) ਤੇ ਕੀ ਅਸਰ ਪੈਂਦਾ ਹੈ?',
                optionsJson: ['Channel capacity doubles linearly', 'Channel capacity quadruples', 'Channel capacity increases logarithmically', 'Channel capacity remains unchanged'],
                correctAnswer: 'Channel capacity doubles linearly',
                explanationEn:
                  'In C = B * log2(1 + SNR), capacity C is directly proportional to bandwidth B. Doubling B doubles C.',
                explanationPa:
                  'ਕਿਉਂਕਿ C = B * log2(1 + SNR) ਹੁੰਦਾ ਹੈ, ਬੈਂਡਵਿਡਥ ਦੁੱਗਣੀ ਹੋਣ ਤੇ ਕਪੈਸਿਟੀ ਵੀ ਸਿੱਧੀ ਦੁੱਗਣੀ ਹੋ ਜਾਂਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'QAM Bit Rate',
                promptEn: 'How many binary bits of digital information are transmitted in each individual symbol of a 64-QAM constellation?',
                promptPa: '64-QAM ਮੌਡੂਲੇਸ਼ਨ ਦੇ ਇੱਕ ਸਿੰਬਲ ਵਿੱਚ ਕਿੰਨੇ ਬਾਈਨਰੀ ਬਿੱਟ ਜਾਣਕਾਰੀ ਜਾਂਦੀ ਹੈ?',
                optionsJson: ['6 bits per symbol', '64 bits per symbol', '4 bits per symbol', '8 bits per symbol'],
                correctAnswer: '6 bits per symbol',
                explanationEn:
                  'Number of bits = log2(Constellation Size) = log2(64) = 6 bits per symbol (since 2^6 = 64).',
                explanationPa:
                  '2^6 = 64 ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ ਹਰ ਸਿੰਬਲ ਵਿੱਚ 6 ਬਿੱਟ ਹੁੰਦੇ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Carsons Rule',
                promptEn: 'Using Carson’s rule BW = 2 * (Δf + fm), what bandwidth is required for an FM broadcast with peak deviation Δf = 75 kHz and maximum modulating audio fm = 15 kHz?',
                promptPa: 'ਕਾਰਸਨ ਨਿਯਮ ਅਨੁਸਾਰ 75 kHz ਡੈਵੀਏਸ਼ਨ ਅਤੇ 15 kHz ਆਡੀਓ ਵਾਲੇ FM ਪ੍ਰਸਾਰਣ ਲਈ ਕਿੰਨੀ ਬੈਂਡਵਿਡਥ ਚਾਹੀਦੀ ਹੈ?',
                optionsJson: ['180 kHz', '90 kHz', '150 kHz', '300 kHz'],
                correctAnswer: '180 kHz',
                explanationEn:
                  'BW = 2 * (75 kHz + 15 kHz) = 2 * 90 kHz = 180 kHz.',
                explanationPa:
                  'BW = 2 * (75 + 15) = 2 * 90 = 180 kHz।',
              },
              {
                questionType: 'mcq',
                topicTag: 'RS-485 Differential',
                promptEn: 'Why is RS-485 capable of communicating over 1200 meters through high-voltage electrical factories where single-ended RS-232 fails?',
                promptPa: 'ਫੈਕਟਰੀਆਂ ਵਿੱਚ RS-232 ਫੇਲ੍ਹ ਹੋਣ ਦੇ ਬਾਵਜੂਦ RS-485 1200 ਮੀਟਰ ਤੱਕ ਸਹੀ ਡਾਟਾ ਕਿਵੇਂ ਭੇਜ ਲੈਂਦੀ ਹੈ?',
                optionsJson: [
                  'Balanced differential voltage signaling rejects common-mode noise induced equally onto both twisted wires',
                  'It operates with 1000 Volts',
                  'It uses fiber optics instead of copper',
                  'It slows data down to 1 bit per minute',
                ],
                correctAnswer: 'Balanced differential voltage signaling rejects common-mode noise induced equally onto both twisted wires',
                explanationEn:
                  'External electromagnetic interference couples equally onto both twisted wires. The differential receiver subtracts the two wires, eliminating the common noise completely.',
                explanationPa:
                  'ਡਿਫਰੈਂਸ਼ੀਅਲ ਰਿਸੀਵਰ ਦੋਵਾਂ ਤਾਰਾਂ ਦਾ ਆਪਸੀ ਫ਼ਰਕ ਨਾਪਦਾ ਹੈ ਅਤੇ ਬਾਹਰੀ ਸ਼ੋਰ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਮਨਫ਼ੀ ਕਰਕੇ ਕੱਟ ਦਿੰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'AM Power Inefficiency',
                promptEn: 'At 100% modulation (m = 1.0) in standard Double-Sideband Full-Carrier AM, what percentage of total transmitted RF power is wasted in the carrier wave that carries zero information?',
                promptPa: 'ਸਟੈਂਡਰਡ AM ਰੇਡੀਓ ਵਿੱਚ ਬਿਨਾਂ ਜਾਣਕਾਰੀ ਵਾਲੀ ਕੈਰੀਅਰ ਵੇਵ ਵਿੱਚ ਕਿੰਨੇ ਪ੍ਰਤੀਸ਼ਤ ਪਾਵਰ ਬਰਬਾਦ ਹੁੰਦੀ ਹੈ?',
                optionsJson: ['66.7% (two-thirds of total power)', '10.0%', '99.9%', '0%'],
                correctAnswer: '66.7% (two-thirds of total power)',
                explanationEn:
                  'Ptotal = Pc * (1 + 1/2) = 1.5 * Pc. The carrier is Pc / 1.5Pc = 66.7% of total power. Only the remaining 33.3% resides in the information-bearing sidebands.',
                explanationPa:
                  'ਕੁੱਲ ਪਾਵਰ ਦਾ 66.7% ਹਿੱਸਾ ਕੈਰੀਅਰ ਵੇਵ ਖਾ ਜਾਂਦੀ ਹੈ, ਅਤੇ ਸਿਰਫ਼ 33.3% ਪਾਵਰ ਹੀ ਅਸਲ ਆਵਾਜ਼ ਦੇ ਸਾਈਡ-ਬੈਂਡਾਂ ਵਿੱਚ ਹੁੰਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'QPSK Bits',
                promptEn: 'How many bits per symbol does Quadrature Phase Shift Keying (QPSK) transmit?',
                promptPa: 'QPSK (Quadrature Phase Shift Keying) ਦੇ ਹਰ ਸਿੰਬਲ ਵਿੱਚ ਕਿੰਨੇ ਬਿੱਟ ਹੁੰਦੇ ਹਨ?',
                optionsJson: ['2 bits per symbol', '1 bit per symbol', '4 bits per symbol', '8 bits per symbol'],
                correctAnswer: '2 bits per symbol',
                explanationEn:
                  'QPSK uses four orthogonal phase states (0°, 90°, 180°, 270°). log2(4) = 2 bits per symbol (00, 01, 10, 11).',
                explanationPa:
                  '4 ਵੱਖਰੇ ਫੇਜ਼ ਕੋਣ ਹੋਣ ਕਰਕੇ ਹਰ ਸਿੰਬਲ ਵਿੱਚ 2 ਬਿੱਟ (00, 01, 10, 11) ਜਾਂਦੇ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'SNR Definition',
                promptEn: 'What does a Signal-to-Noise Ratio (SNR) of 20 dB represent in terms of linear power ratio?',
                promptPa: '20 dB SNR ਦਾ ਮਤਲਬ ਸਿਗਨਲ ਪਾਵਰ ਸ਼ੋਰ ਨਾਲੋਂ ਕਿੰਨੇ ਗੁਣਾ ਵੱਧ ਹੈ?',
                optionsJson: ['100 times stronger than noise', '20 times stronger', '10 times stronger', '1000 times stronger'],
                correctAnswer: '100 times stronger than noise',
                explanationEn:
                  'SNR(dB) = 10 * log10(Psignal / Pnoise). 20 dB / 10 = 2, so linear ratio = 10^2 = 100.',
                explanationPa:
                  '20 dB ਦਾ ਮਤਲਬ ਹੈ ਸਿਗਨਲ ਸ਼ੋਰ ਨਾਲੋਂ 10^2 = 100 ਗੁਣਾ ਤਾਕਤਵਰ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'RS-485 Topology',
                promptEn: 'What physical bus cabling topology is mandatory for reliable multi-drop RS-485 communication?',
                promptPa: 'RS-485 ਸੰਚਾਰ ਲਈ ਕਿਹੜੀ ਕੇਬਲ ਟੋਪੋਲੋਜੀ ਲਾਜ਼ਮੀ ਹੈ?',
                optionsJson: [
                  'Linear Daisy-Chain bus with 120 Ω termination at both ends',
                  'Star topology with central hub',
                  'Closed ring loop',
                  'Mesh network with cross-connected stubs',
                ],
                correctAnswer: 'Linear Daisy-Chain bus with 120 Ω termination at both ends',
                explanationEn:
                  'RS-485 must be routed in a continuous linear daisy chain with minimal stubs (<0.3m) and 120 Ω termination resistors at each end to prevent reflections.',
                explanationPa:
                  'ਇੱਕ ਸਿੱਧੀ ਲੜੀ (Daisy Chain) ਜਿਸਦੇ ਦੋਵਾਂ ਸਿਰਿਆਂ ਉੱਤੇ 120 ਓਹਮ ਦਾ ਰਜਿਸਟਰ ਲੱਗਾ ਹੋਵੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Constellation Diagrams',
                promptEn: 'In digital communication, what does a "Constellation Diagram" represent graphically?',
                promptPa: 'ਡਿਜੀਟਲ ਸੰਚਾਰ ਵਿੱਚ "Constellation Diagram" ਕੀ ਦਰਸਾਉਂਦਾ ਹੈ?',
                optionsJson: [
                  'A 2D polar plot showing the In-phase (I) and Quadrature (Q) amplitude and phase states of digital modulation symbols',
                  'A map of astronomy stars for satellite tracking',
                  'A circuit diagram of the power amplifier',
                  'A plot of frequency versus time',
                ],
                correctAnswer: 'A 2D polar plot showing the In-phase (I) and Quadrature (Q) amplitude and phase states of digital modulation symbols',
                explanationEn:
                  'The constellation diagram plots symbols in I-Q complex space; tight clusters indicate high SNR, while scattered points indicate severe noise and bit errors.',
                explanationPa:
                  'ਇਹ I ਅਤੇ Q ਐਕਸਿਸ ਉੱਤੇ ਡਿਜੀਟਲ ਸਿੰਬਲਾਂ ਦੀ ਸਥਿਤੀ ਦਿਖਾਉਂਦਾ ਹੈ; ਜੇਕਰ ਬਿੰਦੂ ਖਿੱਲਰੇ ਹੋਣ ਤਾਂ ਸ਼ੋਰ ਜ਼ਿਆਦਾ ਹੁੰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Fail-Safe Biasing',
                promptEn: 'What is the function of "Fail-Safe Biasing" resistors on an RS-485 differential bus?',
                promptPa: 'RS-485 ਬੱਸ ਉੱਤੇ "Fail-Safe Biasing" ਰਜਿਸਟਰਾਂ ਦਾ ਕੀ ਕੰਮ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'To force the differential bus voltage into a known logic-high state when all transmitters are idle or disconnected, preventing false noise bits',
                  'To protect against direct lightning strikes',
                  'To increase the baud rate to 1 Gbps',
                  'To cool the transceivers',
                ],
                correctAnswer: 'To force the differential bus voltage into a known logic-high state when all transmitters are idle or disconnected, preventing false noise bits',
                explanationEn:
                  'When all drivers are tri-stated (idle), differential voltage drops to 0V, which is an undefined state for receivers. Pull-up/pull-down bias resistors hold V_AB > +200 mV.',
                explanationPa:
                  'ਜਦੋਂ ਸਾਰੇ ਕੰਪਿਊਟਰ ਚੁੱਪ ਹੋਣ ਤਾਂ ਤਾਰ ਵਿੱਚ ਫਾਲਤੂ ਸ਼ੋਰ ਨੂੰ ਰੋਕਣ ਲਈ ਵੋਲਟੇਜ ਨੂੰ ਸੁਰੱਖਿਅਤ ਸਥਿਰ ਰੱਖਣਾ।',
              },
            ],
          },
        },
        {
          slug: 'wireless-rf-antennas-osi-dsp-fft',
          orderIndex: 2,
          titleEn: '10.2 Wireless RF, Antennas, IoT (BLE, Wi-Fi, LoRa), OSI/TCP-IP & DSP (FFT)',
          titlePa: '10.2 ਵਾਇਰਲੈੱਸ RF, ਐਂਟੀਨਾ, IoT (BLE, Wi-Fi, LoRa), OSI ਮਾਡਲ ਅਤੇ DSP (FFT)',
          objectivesJson: [
            'Design quarter-wave monopole and half-wave dipole antennas calculating physical lengths (L = lambda / 4) and Friis path loss',
            'Compare IoT wireless standards: Bluetooth Low Energy (BLE), Wi-Fi (2.4/5 GHz), and LoRa Chirp Spread Spectrum (CSS) for range vs bandwidth',
            'Map the OSI 7-Layer model and TCP/IP stack: framing, MAC addressing, IPv4/IPv6 routing, and TCP reliability vs UDP streaming',
            'Implement Discrete and Fast Fourier Transforms (FFT) to convert time-domain sensor waveforms into frequency spectral plots',
            'Design digital Finite Impulse Response (FIR) and Infinite Impulse Response (IIR) filters eliminating aliasing artifacts',
          ],
          prerequisitesJson: ['10.1 AM, FM, Digital QAM, Shannon Capacity & RS-485 Industrial Buses'],
          childAnalogyEn:
            'Think of sending a letter through the post office! The OSI 7-Layer model is the post office system: Layer 7 (Application) is your handwritten letter. Layer 4 (Transport, TCP) checks that every page arrives in order and resends missing pages. Layer 3 (Network, IP) writes the pin code and home address. Layer 2 (Data Link, MAC) puts it in a delivery truck. Layer 1 (Physical) is the asphalt road and tires! The Fast Fourier Transform (FFT) is like a musical maestro who listens to a full orchestra and immediately writes down which exact notes the flute, violin, and dhol are playing simultaneously!',
          childAnalogyPa:
            'ਡਾਕਘਰ ਰਾਹੀਂ ਚਿੱਠੀ ਭੇਜਣ ਦੀ ਕਲਪਨਾ ਕਰੋ! OSI ਮਾਡਲ ਡਾਕ ਪ੍ਰਣਾਲੀ ਵਾਂਗ ਹੈ: ਐਪਲੀਕੇਸ਼ਨ ਲੇਅਰ ਤੁਹਾਡੀ ਲਿਖੀ ਚਿੱਠੀ ਹੈ। ਟ੍ਰਾਂਸਪੋਰਟ ਲੇਅਰ (TCP) ਰਜਿਸਟਰੀ ਵਾਂਗ ਪੱਕਾ ਕਰਦੀ ਹੈ ਕਿ ਸਾਰੇ ਪੰਨੇ ਪਹੁੰਚਣ ਅਤੇ ਗੁੰਮਿਆ ਪੰਨਾ ਦੁਬਾਰਾ ਮੰਗਵਾਉਂਦੀ ਹੈ। ਨੈੱਟਵਰਕ ਲੇਅਰ (IP) ਪਿੰਨ ਕੋਡ ਅਤੇ ਪਤਾ ਲਿਖਦੀ ਹੈ। ਫਿਜ਼ੀਕਲ ਲੇਅਰ ਅਸਲ ਸੜਕ ਹੈ! FFT ਇੱਕ ਉਸਤਾਦ ਸੰਗੀਤਕਾਰ ਵਾਂਗ ਹੈ ਜੋ ਵੱਜਦੇ ਆਰਕੈਸਟਰਾ ਨੂੰ ਸੁਣ ਕੇ ਦੱਸ ਦਿੰਦਾ ਹੈ ਕਿ ਬੰਸਰੀ, ਵਾਇਲਨ ਅਤੇ ਢੋਲ ਕਿੰਨੇ-ਕਿੰਨੇ ਹਰਟਜ਼ ਦੀ ਫ੍ਰੀਕੁਐਂਸੀ ਤੇ ਵੱਜ ਰਹੇ ਹਨ!',
          technicalExplanationEn:
            'Wireless RF engineering, networking protocol suites, and digital signal processing form the foundation of connected cyber-physical systems:\n\n1. Antenna Theory & Free Space Path Loss (FSPL):\n• Speed of light: c = 3 * 10^8 m/s. Wavelength: λ = c / f.\n• Quarter-Wave Monopole Antenna Length: L = λ / 4 = c / (4 * f). For 2.4 GHz Wi-Fi: L = 3e8 / (4 * 2.4e9) = 31.25 mm.\n• Friis Transmission Equation & FSPL:\n  FSPL(dB) = 20 * log10(d) + 20 * log10(f) - 147.55 (d in meters, f in Hz).\n  Every doubling of distance adds 6 dB of signal attenuation.\n\n2. IoT Wireless Technologies:\n• Bluetooth Low Energy (BLE, 2.4 GHz): Short range (10-30m), coin-cell friendly, GATT client/server architecture.\n• Wi-Fi (802.11 b/g/n/ac/ax): High throughput (up to Gbps), high power consumption (~100-300 mA), star topology to router.\n• LoRa (Long Range, 868/915 MHz): Chirp Spread Spectrum (CSS) modulation. Extremely high receiver sensitivity (-148 dBm), achieving 10 to 15 km transmission on milliwatt battery power at low data rates (0.3 to 50 kbps).\n\n3. OSI 7-Layer vs TCP/IP Stack:\n• L7 Application: HTTP, DNS, MQTT, SSH\n• L4 Transport: TCP (reliable, connection-oriented, 3-way handshake SYN/SYN-ACK/ACK, retransmission) vs UDP (connectionless, lightweight, low-latency streaming)\n• L3 Network: IP (IPv4 32-bit, IPv6 128-bit), ICMP, routers\n• L2 Data Link: Ethernet frames, 48-bit MAC addresses, Wi-Fi 802.11 frames, switches\n• L1 Physical: Voltage pulses, fiber photons, RF radio waves\n\n4. Digital Signal Processing (DSP) & Fast Fourier Transform (FFT):\n• Time domain to frequency domain conversion: decomposes complex time waveforms x[n] into amplitude and phase of discrete frequency sinusoids X[k].\n• FFT Algorithm (Cooley-Tukey): Reduces computational complexity of N-point DFT from O(N^2) down to O(N * log2(N)), enabling real-time audio and vibration spectrum analysis on embedded microcontrollers.',
          technicalExplanationPa:
            'ਵਾਇਰਲੈੱਸ RF ਅਤੇ ਡਿਜੀਟਲ ਸਿਗਨਲ ਪ੍ਰੋਸੈਸਿੰਗ (DSP):\n\n1. ਐਂਟੀਨਾ ਸਿਧਾਂਤ:\nਤਰੰਗ ਲੰਬਾਈ λ = c / f। 2.4 GHz ਵਾਈ-ਫਾਈ ਲਈ ਚੌਥਾਈ ਐਂਟੀਨਾ (Quarter Wave): L = λ / 4 = 31.2 ਮਿਲੀਮੀਟਰ ਹੁੰਦਾ ਹੈ। ਦੂਰੀ ਦੁੱਗਣੀ ਹੋਣ ਤੇ ਸਿਗਨਲ 6 dB ਘਟ ਜਾਂਦਾ ਹੈ (Free Space Path Loss)।\n\n2. IoT ਵਾਇਰਲੈੱਸ ਪ੍ਰਣਾਲੀਆਂ:\n• BLE (ਬਲੂਟੁੱਥ): ਛੋਟੀ ਦੂਰੀ (10 ਮੀਟਰ), ਨਿੱਕੇ ਸੈੱਲ ਨਾਲ ਸਾਲਾਂ ਚੱਲਦਾ ਹੈ।\n• Wi-Fi: ਹਾਈ ਸਪੀਡ, ਪਰ ਬੈਟਰੀ ਜ਼ਿਆਦਾ ਖਾਂਦਾ ਹੈ।\n• LoRa: ਪਿੰਡਾਂ ਅਤੇ ਖੇਤਾਂ ਵਿੱਚ 10 ਤੋਂ 15 ਕਿਲੋਮੀਟਰ ਦੂਰ ਤੱਕ ਬਿਨਾਂ ਸਿਮ ਕਾਰਡ ਦੇ ਸੈਂਸਰ ਡਾਟਾ ਭੇਜਦਾ ਹੈ।\n\n3. OSI ਅਤੇ TCP/IP ਮਾਡਲ:\n• TCP: ਭਰੋਸੇਮੰਦ ਪ੍ਰੋਟੋਕੋਲ, ਜੇਕਰ ਕੋਈ ਪੈਕੇਟ ਗੁੰਮ ਜਾਵੇ ਤਾਂ ਦੁਬਾਰਾ ਮੰਗਵਾਉਂਦਾ ਹੈ (3-Way Handshake)।\n• UDP: ਬਿਨਾਂ ਰੁਕੇ ਤੇਜ਼ ਸਟ੍ਰੀਮਿੰਗ (ਜਿਵੇਂ ਵੀਡੀਓ ਕਾਲ ਜਾਂ ਆਨਲਾਈਨ ਗੇਮਿੰਗ)।\n\n4. Fast Fourier Transform (FFT):\nਸਮੇਂ ਵਾਲੀ ਵੇਵ ਨੂੰ ਫ੍ਰੀਕੁਐਂਸੀ ਗ੍ਰਾਫ ਵਿੱਚ ਬਦਲ ਦਿੰਦਾ ਹੈ ਤਾਂ ਜੋ ਪਤਾ ਲੱਗ ਸਕੇ ਕਿ ਮੋਟਰ ਵਿੱਚ ਕਿਹੜੇ ਬੇਅਰਿੰਗ ਵਿੱਚ ਖ਼ਰਾਬੀ ਹੈ ਜਾਂ ਆਵਾਜ਼ ਵਿੱਚ ਕਿਹੜਾ ਸ਼ੋਰ ਹੈ।',
          practicalExampleEn:
            'Agricultural soil moisture monitoring system across a 5-kilometer rural farm: Wi-Fi cannot reach 5 km, and 4G cellular requires expensive monthly SIM fees. The engineer installs a solar-powered soil probe using a LoRa transceiver (868 MHz) with a quarter-wave whip antenna (86 mm length). Transmitting at only +14 dBm (25 mW), the chirp spread spectrum signal easily punches through tree foliage and rain, received reliably by a LoRaWAN gateway 5 km away on the farmhouse roof.',
          practicalExamplePa:
            'ਪਿੰਡ ਵਿੱਚ 5 ਕਿਲੋਮੀਟਰ ਦੂਰ ਖੇਤਾਂ ਵਿੱਚੋਂ ਮਿੱਟੀ ਦੀ ਨਮੀ ਦਾ ਡਾਟਾ ਲੈਣਾ: ਵਾਈ-ਫਾਈ ਇੰਨੀ ਦੂਰ ਨਹੀਂ ਜਾ ਸਕਦਾ ਅਤੇ ਮੋਬਾਈਲ ਸਿਮ ਮਹਿੰਗੀ ਪੈਂਦੀ ਹੈ। ਇੰਜੀਨੀਅਰ ਸੋਲਰ ਪੈਨਲ ਨਾਲ 868 MHz ਦਾ LoRa ਮੌਡਿਊਲ ਲਗਾਉਂਦਾ ਹੈ। ਸਿਰਫ਼ 25 ਮਿਲੀਵਾਟ ਪਾਵਰ ਨਾਲ LoRa ਦਾ ਸਿਗਨਲ ਦਰੱਖਤਾਂ ਅਤੇ ਮੀਂਹ ਵਿੱਚੋਂ ਲੰਘ ਕੇ 5 ਕਿਲੋਮੀਟਰ ਦੂਰ ਘਰ ਦੀ ਛੱਤ ਉੱਤੇ ਲੱਗੇ ਰਿਸੀਵਰ ਤੱਕ ਪਹੁੰਚ ਜਾਂਦਾ ਹੈ।',
          codeDemo: `// TypeScript: Antenna Length, Path Loss & FFT Frequency Bin Calculator
export function calcQuarterWaveAntennaMm(freqHz: number): number {
  const c = 299792458; // Speed of light m/s
  const wavelengthMeters = c / freqHz;
  const quarterWaveMm = (wavelengthMeters / 4) * 1000;
  return quarterWaveMm;
}

export function calcFreeSpacePathLossDb(distanceMeters: number, freqHz: number): number {
  const c = 299792458;
  // FSPL = 20*log10(d) + 20*log10(f) + 20*log10(4*pi / c)
  const constantTerm = 20 * Math.log10((4 * Math.PI) / c);
  const fsplDb = 20 * Math.log10(distanceMeters) + 20 * Math.log10(freqHz) + constantTerm;
  return fsplDb;
}

export function calcFftBinResolution(samplingRateHz: number, nPoints: number) {
  const binResolutionHz = samplingRateHz / nPoints;
  return { binResolutionHz, nyquistLimitHz: samplingRateHz / 2 };
}

// Verification: 2.4 GHz Wi-Fi antenna length:
const ant = calcQuarterWaveAntennaMm(2.4e9);
console.log('2.4 GHz Antenna Length:', ant.toFixed(1), 'mm'); // ~31.2 mm
console.log('Path Loss at 100m for 2.4GHz:', calcFreeSpacePathLossDb(100, 2.4e9).toFixed(1), 'dB'); // ~80.0 dB
const fft = calcFftBinResolution(44100, 1024);
console.log('Audio FFT Bin Width:', fft.binResolutionHz.toFixed(1), 'Hz'); // 43.1 Hz`,
          misconceptionsJson: [
            {
              myth: 'An antenna with higher gain (e.g. 9 dBi vs 2 dBi) creates more total RF energy out of thin air.',
              truthEn:
                'Passive antennas cannot amplify power (conservation of energy). Higher gain is achieved purely by reshaping the radiation pattern—focusing energy in a narrow beam toward the horizon like a flashlight reflector, while stealing energy from the vertical directions.',
              truthPa:
                'ਪੈਸਿਵ ਐਂਟੀਨਾ ਨਵੀਂ ਪਾਵਰ ਪੈਦਾ ਨਹੀਂ ਕਰ ਸਕਦਾ। ਵੱਧ dBi ਵਾਲਾ ਐਂਟੀਨਾ ਸਿਰਫ਼ ਟਾਰਚ ਦੇ ਸ਼ੀਸ਼ੇ ਵਾਂਗ ਸਾਰੀ ਬਿਜਲੀ ਨੂੰ ਇੱਕੋ ਸਿੱਧੇ ਪਾਸੇ ਕੇਂਦਰਿਤ ਕਰ ਦਿੰਦਾ ਹੈ।',
            },
            {
              myth: 'TCP should always be chosen over UDP because TCP is reliable and never loses packets.',
              truthEn:
                'TCP achieves reliability by retransmitting dropped packets and pausing execution (head-of-line blocking). For real-time voice, video streaming, or multi-player gaming, a delayed packet is useless; UDP streams immediately with zero retransmission delay.',
              truthPa:
                'ਰੀਅਲ-ਟਾਈਮ ਵੀਡੀਓ ਕਾਲਿੰਗ ਜਾਂ ਗੇਮਿੰਗ ਲਈ TCP ਨਹੀਂ ਵਰਤਿਆ ਜਾਂਦਾ ਕਿਉਂਕਿ ਇਹ ਪੁਰਾਣੇ ਪੈਕੇਟ ਦੁਬਾਰਾ ਮੰਗਵਾਉਣ ਲਈ ਪੂਰੀ ਵੀਡੀਓ ਰੋਕ ਦਿੰਦਾ ਹੈ। ਉੱਥੇ UDP ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
            },
            {
              myth: 'An N-point FFT output provides frequencies all the way up to the sampling frequency fs.',
              truthEn:
                'Due to the Nyquist theorem, frequencies above fs / 2 are duplicate mirror image reflections (complex conjugates). Only the first N / 2 bins represent unique, physically meaningful positive frequencies.',
              truthPa:
                'ਨਾਈਕਵਿਸਟ ਨਿਯਮ ਅਨੁਸਾਰ FFT ਦੇ ਅੱਧੇ ਬਿਨ ਹੀ ਅਸਲ ਫ੍ਰੀਕੁਐਂਸੀ ਦੱਸਦੇ ਹਨ (fs / 2 ਤੱਕ), ਬਾਕੀ ਅੱਧੇ ਸਿਰਫ਼ ਸ਼ੀਸ਼ੇ ਵਾਂਗ ਪੁੱਠਾ ਪਰਛਾਵਾਂ ਹੁੰਦੇ ਹਨ।',
            },
          ],
          terminologyJson: [
            {
              term: 'Fast Fourier Transform (FFT)',
              punjabi: 'ਫਾਸਟ ਫੋਰੀਅਰ ਟ੍ਰਾਂਸਫਾਰਮ (FFT)',
              meaningEn: 'Efficient algorithm computing the Discrete Fourier Transform to decompose time signals into frequency spectrum components.',
              meaningPa: 'ਕਿਸੇ ਵੀ ਵੇਵ ਨੂੰ ਉਸਦੇ ਵੱਖ-ਵੱਖ ਫ੍ਰੀਕੁਐਂਸੀ ਸੁਰਾਂ ਵਿੱਚ ਤੋੜ ਕੇ ਦਿਖਾਉਣ ਵਾਲਾ ਐਲਗੋਰਿਦਮ।',
            },
            {
              term: 'LoRa (Long Range)',
              punjabi: 'LoRa ਵਾਇਰਲੈੱਸ ਤਕਨੀਕ',
              meaningEn: 'Proprietary Chirp Spread Spectrum modulation enabling multi-kilometer IoT battery transmission below noise floors.',
              meaningPa: 'ਬਹੁਤ ਲੰਮੀ ਦੂਰੀ (15 ਕਿਲੋਮੀਟਰ) ਤੱਕ ਘੱਟ ਬੈਟਰੀ ਨਾਲ ਚੱਲਣ ਵਾਲੀ IoT ਵਾਇਰਲੈੱਸ ਤਕਨੀਕ।',
            },
            {
              term: 'Free Space Path Loss (FSPL)',
              punjabi: 'ਫ੍ਰੀ-ਸਪੇਸ ਪਾਥ ਲੌਸ',
              meaningEn: 'Attenuation of an electromagnetic wave as it radiates outward through free space without obstacles.',
              meaningPa: 'ਖੁੱਲ੍ਹੀ ਹਵਾ ਵਿੱਚ ਦੂਰੀ ਵਧਣ ਨਾਲ ਰੇਡੀਓ ਸਿਗਨਲ ਦੀ ਤਾਕਤ ਵਿੱਚ ਹੋਣ ਵਾਲੀ ਕੁਦਰਤੀ ਗਿਰਾਵਟ।',
            },
            {
              term: 'TCP (Transmission Control Protocol)',
              punjabi: 'TCP ਪ੍ਰੋਟੋਕੋਲ',
              meaningEn: 'Connection-oriented transport protocol guaranteeing ordered, error-checked packet delivery via acknowledgments.',
              meaningPa: 'ਭਰੋਸੇਮੰਦ ਇੰਟਰਨੈੱਟ ਪ੍ਰੋਟੋਕੋਲ ਜੋ ਗੁੰਮ ਹੋਏ ਪੈਕੇਟ ਦੁਬਾਰਾ ਮੰਗਵਾ ਕੇ ਪੂਰੀ ਫਾਈਲ ਸਹੀ ਪਹੁੰਚਾਉਂਦਾ ਹੈ।',
            },
            {
              term: 'Quarter-Wave Monopole',
              punjabi: 'ਕੁਆਰਟਰ-ਵੇਵ ਐਂਟੀਨਾ',
              meaningEn: 'Resonant antenna conductor with physical length equal to one-fourth of the signal wavelength over a ground plane.',
              meaningPa: 'ਤਰੰਗ ਲੰਬਾਈ ਦੇ ਚੌਥੇ ਹਿੱਸੇ (λ / 4) ਜਿੰਨਾ ਲੰਮਾ ਸਭ ਤੋਂ ਆਮ ਵਰਤਿਆ ਜਾਣ ਵਾਲਾ ਐਂਟੀਨਾ।',
            },
            {
              term: 'MAC Address',
              punjabi: 'MAC ਐਡਰੈੱਸ',
              meaningEn: 'Unique 48-bit hardware identifier burned into network interface cards for Layer-2 data link communication.',
              meaningPa: 'ਹਰ ਵਾਈ-ਫਾਈ ਜਾਂ ਇੰਟਰਨੈੱਟ ਕਾਰਡ ਦਾ ਪੱਕਾ 48-ਬਿੱਟ ਹਾਰਡਵੇਅਰ ਪਤਾ।',
            },
          ],
          interactiveLabId: 'network-sim',
          exercisePromptEn:
            'RF & DSP Calculation: (1) Calculate the physical length in millimeters of a quarter-wave whip antenna for an 868 MHz LoRa transceiver. (2) A microphone sensor samples audio at 48 kHz. You compute a 2048-point FFT. Calculate the exact frequency bin resolution Delta_f in Hertz.',
          exercisePromptPa:
            'RF ਅਤੇ DSP ਗਣਨਾ: (1) 868 MHz LoRa ਮੌਡਿਊਲ ਲਈ ਕੁਆਰਟਰ-ਵੇਵ ਐਂਟੀਨਾ ਦੀ ਲੰਬਾਈ (ਮਿਲੀਮੀਟਰ) ਕੱਢੋ। (2) 48 kHz ਸੈਂਪਲਿੰਗ ਰੇਟ ਉੱਤੇ 2048-ਪੁਆਇੰਟ FFT ਕੱਢਣ ਤੇ ਹਰੇਕ ਬਿਨ ਦੀ ਫ੍ਰੀਕੁਐਂਸੀ ਚੌੜਾਈ (Hz) ਕਿੰਨੀ ਹੋਵੇਗੀ?',
          summaryEn:
            'Wireless RF systems radiate electromagnetic energy across tuned quarter-wave structures, robust multi-layer network stacks (OSI & TCP/IP) guarantee global data delivery, and Fast Fourier Transforms uncover the hidden frequency spectrum of physical vibrations.',
          summaryPa:
            'ਵਾਇਰਲੈੱਸ RF ਪ੍ਰਣਾਲੀਆਂ ਐਂਟੀਨਾ ਰਾਹੀਂ ਹਵਾ ਵਿੱਚ ਡਾਟਾ ਤੋਰਦੀਆਂ ਹਨ, TCP/IP ਪ੍ਰੋਟੋਕੋਲ ਗਲੋਬਲ ਇੰਟਰਨੈੱਟ ਚਲਾਉਂਦੇ ਹਨ, ਅਤੇ ਫਾਸਟ ਫੋਰੀਅਰ ਟ੍ਰਾਂਸਫਾਰਮ (FFT) ਵੇਵਾਂ ਦੇ ਅੰਦਰ ਛੁਪੀਆਂ ਫ੍ਰੀਕੁਐਂਸੀਆਂ ਦਾ ਪਰਦਾਫਾਸ਼ ਕਰਦਾ ਹੈ।',
          furtherReadingJson: [
            'Antenna Theory: Analysis and Design by Constantine A. Balanis',
            'Computer Networks (5th Edition) by Andrew S. Tanenbaum & David J. Wetherall',
            'Understanding Digital Signal Processing (3rd Edition) by Richard G. Lyons',
          ],
          quiz: {
            titleEn: 'Level 10 Assessment: Wireless RF, Antennas, Networks & DSP',
            titlePa: 'ਲੈਵਲ 10 ਟੈਸਟ: ਵਾਇਰਲੈੱਸ RF, ਐਂਟੀਨਾ, ਨੈੱਟਵਰਕ ਅਤੇ DSP',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'Antenna Length',
                promptEn: 'What is the approximate physical length of a resonant quarter-wave monopole antenna for 2.4 GHz Wi-Fi?',
                promptPa: '2.4 GHz ਵਾਈ-ਫਾਈ ਲਈ ਕੁਆਰਟਰ-ਵੇਵ ਐਂਟੀਨਾ ਦੀ ਲੰਬਾਈ ਲਗਭਗ ਕਿੰਨੀ ਹੁੰਦੀ ਹੈ?',
                optionsJson: ['31.2 millimeters', '125 millimeters', '62.5 millimeters', '5 millimeters'],
                correctAnswer: '31.2 millimeters',
                explanationEn:
                  'Wavelength λ = c / f = (3 * 10^8 m/s) / (2.4 * 10^9 Hz) = 0.125 m = 125 mm. Quarter wave L = λ / 4 = 125 / 4 = 31.25 mm.',
                explanationPa:
                  'λ = 3e8 / 2.4e9 = 125 mm। ਕੁਆਰਟਰ ਵੇਵ L = 125 / 4 = 31.2 ਮਿਲੀਮੀਟਰ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Path Loss Distance',
                promptEn: 'According to the Free Space Path Loss (FSPL) equation, by how many decibels (dB) does signal power decrease every time the distance is doubled?',
                promptPa: 'ਫ੍ਰੀ-ਸਪੇਸ ਪਾਥ ਲੌਸ ਅਨੁਸਾਰ ਦੂਰੀ ਦੁੱਗਣੀ ਹੋਣ ਤੇ ਸਿਗਨਲ ਪਾਵਰ ਕਿੰਨੇ ਡੈਸੀਬਲ (dB) ਘਟ ਜਾਂਦੀ ਹੈ?',
                optionsJson: ['6 dB loss', '3 dB loss', '10 dB loss', '20 dB loss'],
                correctAnswer: '6 dB loss',
                explanationEn:
                  'Path loss is proportional to d^2. Doubling distance: 20 * log10(2) = 20 * 0.3010 ≈ 6.02 dB loss.',
                explanationPa:
                  '20 * log10(2) ≈ 6 dB ਦਾ ਨੁਕਸਾਨ ਹੁੰਦਾ ਹੈ (ਚੌਥਾ ਹਿੱਸਾ ਪਾਵਰ ਰਹਿ ਜਾਂਦੀ ਹੈ)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'LoRa Modulation',
                promptEn: 'What unique physical modulation technique allows LoRa wireless radios to communicate over 15 kilometers with extreme sensitivity?',
                promptPa: 'LoRa ਰੇਡੀਓ 15 ਕਿਲੋਮੀਟਰ ਦੂਰ ਤੱਕ ਸੰਚਾਰ ਕਰਨ ਲਈ ਕਿਹੜੀ ਖਾਸ ਮੌਡੂਲੇਸ਼ਨ ਤਕਨੀਕ ਵਰਤਦਾ ਹੈ?',
                optionsJson: [
                  'Chirp Spread Spectrum (CSS)',
                  'Amplitude Modulation (AM)',
                  'Direct Sequence Pulse Coding',
                  'Standard FM Radio',
                ],
                correctAnswer: 'Chirp Spread Spectrum (CSS)',
                explanationEn:
                  'LoRa sweeps carrier pulses across frequency (chirps), spreading energy across bandwidth and allowing decoding even 20 dB BELOW the noise floor.',
                explanationPa:
                  'Chirp Spread Spectrum (CSS): ਇਹ ਸਿਗਨਲ ਨੂੰ ਚੀਕ ਵਰਗੀ ਫ੍ਰੀਕੁਐਂਸੀ ਵਿੱਚ ਫੈਲਾਅ ਦਿੰਦਾ ਹੈ ਜਿਸ ਨਾਲ ਇਹ ਸ਼ੋਰ ਦੇ ਹੇਠਾਂ ਵੀ ਸਾਫ਼ ਪੜ੍ਹਿਆ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'TCP vs UDP',
                promptEn: 'Why is UDP preferred over TCP for live online video calling and gaming?',
                promptPa: 'ਲਾਈਵ ਵੀਡੀਓ ਕਾਲਿੰਗ ਅਤੇ ਗੇਮਿੰਗ ਲਈ TCP ਦੀ ਥਾਂ UDP ਕਿਉਂ ਚੁਣਿਆ ਜਾਂਦਾ ਹੈ?',
                optionsJson: [
                  'UDP has zero retransmission delay and no head-of-line blocking; late packets are simply dropped rather than freezing the stream',
                  'UDP encrypts video automatically',
                  'UDP uses more bandwidth than TCP',
                  'TCP cannot carry video data',
                ],
                correctAnswer: 'UDP has zero retransmission delay and no head-of-line blocking; late packets are simply dropped rather than freezing the stream',
                explanationEn:
                  'In live voice and video, resending a dropped packet 200 ms late is useless. UDP transmits immediately with minimum latency without blocking.',
                explanationPa:
                  'UDP ਗੁੰਮ ਹੋਏ ਪੈਕੇਟ ਦੁਬਾਰਾ ਮੰਗਵਾ ਕੇ ਵੀਡੀਓ ਨੂੰ ਰੋਕਦਾ ਨਹੀਂ; ਪੁਰਾਣਾ ਪੈਕੇਟ ਛੱਡ ਕੇ ਅਗਲਾ ਫਰੇਮ ਤੁਰੰਤ ਦਿਖਾ ਦਿੰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'OSI Transport Layer',
                promptEn: 'At which layer of the OSI 7-Layer model do TCP port numbers (e.g. Port 80 for HTTP, Port 443 for HTTPS) operate?',
                promptPa: 'OSI ਮਾਡਲ ਦੀ ਕਿਹੜੀ ਪਰਤ ਉੱਤੇ TCP ਪੋਰਟ ਨੰਬਰ (ਜਿਵੇਂ Port 80 ਜਾਂ 443) ਕੰਮ ਕਰਦੇ ਹਨ?',
                optionsJson: ['Layer 4 — Transport Layer', 'Layer 3 — Network Layer', 'Layer 2 — Data Link Layer', 'Layer 7 — Application Layer'],
                correctAnswer: 'Layer 4 — Transport Layer',
                explanationEn:
                  'Layer 4 (Transport Layer) manages end-to-end communication multiplexing using port numbers to direct streams to specific software applications.',
                explanationPa:
                  'ਲੇਅਰ 4 (ਟ੍ਰਾਂਸਪੋਰਟ ਲੇਅਰ) ਉੱਤੇ TCP/UDP ਪੋਰਟ ਨੰਬਰ ਕੰਮ ਕਰਦੇ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'FFT Bin Width',
                promptEn: 'If an audio system samples at 48,000 Hz and computes a 1024-point FFT, what is the frequency resolution (bin width) of each spectral point?',
                promptPa: '48,000 Hz ਸੈਂਪਲਿੰਗ ਰੇਟ ਅਤੇ 1024-ਪੁਆਇੰਟ FFT ਵਿੱਚ ਹਰੇਕ ਬਿਨ ਦੀ ਫ੍ਰੀਕੁਐਂਸੀ ਚੌੜਾਈ ਕਿੰਨੀ ਹੋਵੇਗੀ?',
                optionsJson: ['46.875 Hz', '1024 Hz', '48 Hz', '23.437 Hz'],
                correctAnswer: '46.875 Hz',
                explanationEn:
                  'Delta_f = fs / N = 48,000 Hz / 1024 = 46.875 Hz per bin.',
                explanationPa:
                  'Delta_f = 48,000 / 1024 = 46.875 Hz।',
              },
              {
                questionType: 'mcq',
                topicTag: 'MAC Address Size',
                promptEn: 'What is the standard bit length of an IEEE 802 hardware MAC address burned into Ethernet and Wi-Fi chips?',
                promptPa: 'ਈਥਰਨੈੱਟ ਅਤੇ ਵਾਈ-ਫਾਈ ਚਿਪਸ ਦੇ ਹਾਰਡਵੇਅਰ MAC ਐਡਰੈੱਸ ਵਿੱਚ ਕਿੰਨੇ ਬਿੱਟ ਹੁੰਦੇ ਹਨ?',
                optionsJson: ['48 bits (6 bytes)', '32 bits', '128 bits', '64 bits'],
                correctAnswer: '48 bits (6 bytes)',
                explanationEn:
                  'MAC addresses consist of 48 bits (6 octets) typically written in hex: e.g. 00:1A:2B:3C:4D:5E.',
                explanationPa:
                  'MAC ਐਡਰੈੱਸ 48 ਬਿੱਟ (6 ਬਾਈਟ) ਦਾ ਹੁੰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'BLE Advantages',
                promptEn: 'What is the primary architectural goal of Bluetooth Low Energy (BLE) compared to Classic Bluetooth?',
                promptPa: 'ਕਲਾਸਿਕ ਬਲੂਟੁੱਥ ਦੇ ਮੁਕਾਬਲੇ Bluetooth Low Energy (BLE) ਦਾ ਮੁੱਖ ਮਕਸਦ ਕੀ ਹੈ?',
                optionsJson: [
                  'To enable coin-cell battery operation for months or years by remaining in deep sleep and waking for millisecond burst transmissions',
                  'To transmit high-bandwidth 4K video',
                  'To communicate across 100 kilometers',
                  'To eliminate the need for an antenna',
                ],
                correctAnswer: 'To enable coin-cell battery operation for months or years by remaining in deep sleep and waking for millisecond burst transmissions',
                explanationEn:
                  'BLE sleeps at microamps, waking for milliseconds to send small sensor telemetry packets (GATT), lasting years on a single CR2032 coin cell.',
                explanationPa:
                  'ਨਿੱਕੇ ਘੜੀ ਵਾਲੇ ਸੈੱਲ (CR2032) ਨਾਲ ਮਹੀਨਿਆਂ ਤੱਕ ਚੱਲਣਾ, ਸਿਰਫ਼ ਕੁਝ ਮਿਲੀਸਕਿੰਟਾਂ ਵਿੱਚ ਡਾਟਾ ਭੇਜ ਕੇ ਵਾਪਸ ਸੌਂ ਜਾਣਾ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'TCP Handshake',
                promptEn: 'What sequence of control packets establishes a reliable connection in the TCP 3-Way Handshake?',
                promptPa: 'TCP ਕਨੈਕਸ਼ਨ ਬਣਾਉਣ ਲਈ 3-Way Handshake ਦਾ ਸਹੀ ਕ੍ਰਮ ਕੀ ਹੈ?',
                optionsJson: ['SYN -> SYN-ACK -> ACK', 'ACK -> SYN -> FIN', 'GET -> POST -> PUT', 'HELLO -> READY -> OK'],
                correctAnswer: 'SYN -> SYN-ACK -> ACK',
                explanationEn:
                  'Client sends SYN (synchronize). Server replies with SYN-ACK. Client acknowledges with ACK, opening the reliable stream.',
                explanationPa:
                  'ਕਲਾਇੰਟ SYN ਭੇਜਦਾ ਹੈ, ਸਰਵਰ SYN-ACK ਦਿੰਦਾ ਹੈ, ਅਤੇ ਕਲਾਇੰਟ ACK ਨਾਲ ਪੁਸ਼ਟੀ ਕਰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'FFT Nyquist Mirror',
                promptEn: 'Why do engineers only examine the first N / 2 frequency bins of an N-point Real-valued FFT spectrum?',
                promptPa: 'ਅਸਲ ਸਿਗਨਲ ਦੇ FFT ਸਪੈਕਟ੍ਰਮ ਵਿੱਚ ਇੰਜੀਨੀਅਰ ਸਿਰਫ਼ ਪਹਿਲੇ N / 2 ਬਿਨ ਹੀ ਕਿਉਂ ਦੇਖਦੇ ਹਨ?',
                optionsJson: [
                  'The upper N / 2 bins are redundant complex-conjugate mirror reflections of frequencies above the Nyquist limit',
                  'The upper bins contain only hardware bugs',
                  'The second half is encrypted',
                  'The screen cannot draw the right half',
                ],
                correctAnswer: 'The upper N / 2 bins are redundant complex-conjugate mirror reflections of frequencies above the Nyquist limit',
                explanationEn:
                  'For real-time inputs, the DFT produces a symmetric Hermitian output. Frequencies above the Nyquist frequency (fs / 2) are mirror conjugates.',
                explanationPa:
                  'ਉੱਪਰਲਾ ਅੱਧਾ ਹਿੱਸਾ ਨਾਈਕਵਿਸਟ ਨਿਯਮ ਕਾਰਨ ਸਿਰਫ਼ ਹੇਠਲੇ ਹਿੱਸੇ ਦਾ ਸ਼ੀਸ਼ੇ ਵਾਂਗ ਪੁੱਠਾ ਪਰਛਾਵਾਂ ਹੁੰਦਾ ਹੈ।',
              },
            ],
          },
        },
      ],
    },
  ],
};
