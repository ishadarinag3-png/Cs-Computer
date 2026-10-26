import { SeedCourse } from './types.ts';

export const LEVEL_12_COURSE: SeedCourse = {
  slug: 'level-12-practical-repair-and-troubleshooting',
  levelNumber: 12,
  titleEn: 'Level 12: Practical Repair & Troubleshooting',
  titlePa: 'ਲੈਵਲ 12: ਵਿਹਾਰਕ ਮੁਰੰਮਤ ਅਤੇ ਟ੍ਰਬਲਸ਼ੂਟਿੰਗ (Practical Repair & Troubleshooting)',
  descriptionEn:
    'Systematic electronic fault diagnosis, short-circuit localization, power rail sequencing, thermal imaging, SMD micro-soldering, pad reconstruction, and root cause analysis.',
  descriptionPa:
    'ਸਿਸਟਮੈਟਿਕ ਇਲੈਕਟ੍ਰਾਨਿਕ ਫਾਲਟ ਨਿਦਾਨ, ਸ਼ਾਰਟ-ਸਰਕਟ ਸਥਾਨਕਕਰਨ, ਪਾਵਰ ਰੇਲ ਸੀਕਵੈਂਸਿੰਗ, ਥਰਮਲ ਇਮੇਜਿੰਗ, SMD ਮਾਈਕਰੋ-ਸੋਲਡਰਿੰਗ, ਪੈਡ ਮੁਰੰਮਤ ਅਤੇ ਮੂਲ ਕਾਰਨ ਵਿਸ਼ਲੇਸ਼ਣ।',
  category: 'practical-skills',
  estimatedHours: 24,
  modules: [
    {
      orderIndex: 1,
      titleEn: 'Hardware Diagnostics, Board-Level Repair & Root Cause Engineering',
      titlePa: 'ਹਾਰਡਵੇਅਰ ਡਾਇਗਨੌਸਟਿਕਸ, ਬੋਰਡ-ਲੈਵਲ ਮੁਰੰਮਤ ਅਤੇ ਮੂਲ ਕਾਰਨ ਇੰਜੀਨੀਅਰਿੰਗ',
      summaryEn:
        'Systematic fault-finding workflows, cold impedance screening, thermal imaging, 4-wire Kelvin microvolt delta mapping, SMD/BGA rework, pad repair, and root cause analysis (RCA).',
      summaryPa:
        'ਸਿਸਟਮੈਟਿਕ ਫਾਲਟ ਲੱਭਣ ਦੀ ਵਿਧੀ, ਕੋਲਡ ਇੰਪੀਡੈਂਸ ਜਾਂਚ, ਥਰਮਲ ਇਮੇਜਿੰਗ, 4-ਤਾਰ ਕੈਲਵਿਨ ਡੈਲਟਾ ਮੈਪਿੰਗ, SMD/BGA ਰੀਵਰਕ, ਪੈਡ ਮੁਰੰਮਤ ਅਤੇ ਰੂਟ ਕਾਜ਼ ਐਨਾਲਿਸਿਸ।',
      lessons: [
        {
          slug: 'systematic-fault-finding-power-rail-diagnostics',
          orderIndex: 1,
          titleEn: '12.1 Systematic Fault-Finding, Power Rail Diagnostics & Signal Tracing',
          titlePa: '12.1 ਸਿਸਟਮੈਟਿਕ ਫਾਲਟ ਲੱਭਣਾ, ਪਾਵਰ ਰੇਲ ਡਾਇਗਨੌਸਟਿਕਸ ਅਤੇ ਸਿਗਨਲ ਟਰੇਸਿੰਗ',
          objectivesJson: [
            'Execute cold-state impedance checks across power rails before applying power to prevent cascading failures',
            'Pinpoint low-resistance short circuits using 4-wire Kelvin microvolt delta tracing and thermal imaging',
            'Verify multi-rail power sequencing and reset/clock de-assertion using digital storage oscilloscopes',
            'Differentiate signal tracing (probing downstream) from signal injection (introducing test stimuli) to isolate failed stages',
          ],
          prerequisitesJson: ['Level 1: Electrical Fundamentals & Level 7: Measurements and Instrumentation'],
          childAnalogyEn:
            'Think of a broken tube-well motor on a farm! Before turning on the high-voltage mains switch, a wise farmer turns the pump by hand to see if the shaft is physically jammed, and checks the wiring for rats chewing through the insulation. If they just flipped the breaker with a jammed impeller, the entire winding would burst into flames! In electronics, cold impedance checks prevent you from blowing up expensive chips before you even know what is wrong.',
          childAnalogyPa:
            'ਪਿੰਡ ਵਿੱਚ ਟਿਊਬਵੈੱਲ ਦੀ ਮੋਟਰ ਖ਼ਰਾਬ ਹੋਣ ਵਾਂਗ ਸੋਚੋ! ਸਿਆਣਾ ਕਿਸਾਨ ਮੇਨ ਸਵਿੱਚ ਦਬਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਹੱਥ ਨਾਲ ਪੱਖਾ ਘੁਮਾ ਕੇ ਦੇਖਦਾ ਹੈ ਕਿ ਕਿਤੇ ਮੋਟਰ ਜਾਮ ਤਾਂ ਨਹੀਂ, ਅਤੇ ਤਾਰਾਂ ਚੈੱਕ ਕਰਦਾ ਹੈ ਕਿ ਚੂਹੇ ਨੇ ਕੱਟ ਤਾਂ ਨਹੀਂ ਦਿੱਤੀਆਂ। ਜੇ ਜਾਮ ਮੋਟਰ ਵਿੱਚ ਸਿੱਧਾ ਸਟਾਰਟਰ ਦਬਾ ਦਿੱਤਾ ਤਾਂ ਮੋਟਰ ਸੜ ਕੇ ਸੁਆਹ ਹੋ ਜਾਵੇਗੀ! ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਵਿੱਚ ਪਾਵਰ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਮੀਟਰ ਨਾਲ ਵਿਰੋਧ (Resistance) ਚੈੱਕ ਕਰਨਾ ਬੋਰਡ ਨੂੰ ਸੜਨ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।',
          technicalExplanationEn:
            'Professional electronic diagnostics relies on deterministic fault isolation:\n\n1. Cold Impedance Screening (Unpowered):\n• Measure DC resistance to ground on all inductors and power rails (VIN, 12V, 5V, 3.3V, 1.8V, VCORE).\n• Rails showing < 1.0 Ω (except high-current low-voltage CPU rails which naturally exhibit 2–10 Ω) indicate short circuits.\n\n2. Short-Circuit Localization:\n• 4-Wire Kelvin Microvolt Mapping: Inject 1.0 A current at max 1.0 V. Because copper traces have finite resistance (R_square ≈ 0.5 mΩ/sq for 1 oz copper), V_drop = I_inj * R_trace creates a microvolt gradient. The physical pin with the lowest voltage reading relative to injection GND is the shorted component.\n• Thermal Imaging: The defective component dissipates Joule heat: P = I^2 * R_short. A 0.4 Ω short at 1.5 A dissipates 0.9 W, instantly appearing as an infrared hotspot.\n\n3. Power Sequencing & Signal Tracing:\n• Multi-channel DSO captures rail rise times. If 3.3V I/O rises before 1.2V core, internal latch-up can destroy the SoC.\n• Signal Tracing: Trace input waveform forward through gain stages until lost.\n• Signal Injection: Inject synthetic 1 kHz or RF pulse into intermediate stages.',
          technicalExplanationPa:
            'ਪੇਸ਼ੇਵਰ ਹਾਰਡਵੇਅਰ ਡਾਇਗਨੌਸਟਿਕਸ ਵਿਧੀ:\n\n1. ਕੋਲਡ ਇੰਪੀਡੈਂਸ ਜਾਂਚ (ਬਿਨਾਂ ਪਾਵਰ ਦੇ):\n• ਸਾਰੇ ਇੰਡਕਟਰਾਂ ਅਤੇ ਪਾਵਰ ਰੇਲਜ਼ (12V, 5V, 3.3V, 1.8V, VCORE) ਦਾ ਗਰਾਊਂਡ ਨਾਲ DC ਵਿਰੋਧ ਮਾਪੋ।\n• 1.0 Ω ਤੋਂ ਘੱਟ ਰੀਡਿੰਗ ਸ਼ਾਰਟ ਸਰਕਟ ਦਰਸਾਉਂਦੀ ਹੈ।\n\n2. ਸ਼ਾਰਟ ਲੱਭਣ ਦੀਆਂ ਉੱਨਤ ਤਕਨੀਕਾਂ:\n• 4-ਤਾਰ ਕੈਲਵਿਨ ਮਾਈਕ੍ਰੋ-ਵੋਲਟ ਮੈਪਿੰਗ: ਤਾਂਬੇ ਦੇ ਟਰੇਸ ਦੇ ਵਿਰੋਧ ਕਾਰਨ ਵੋਲਟੇਜ ਡਰਾਪ ਹੁੰਦੀ ਹੈ। ਸ਼ਾਰਟ ਹੋਈ ਪਿੰਨ ਉੱਤੇ ਸਭ ਤੋਂ ਘੱਟ ਪੋਟੈਂਸ਼ੀਅਲ ਹੁੰਦਾ ਹੈ।\n• ਥਰਮਲ ਇਮੇਜਿੰਗ: ਸ਼ਾਰਟ ਕੰਪੋਨੈਂਟ ਵਿੱਚ P = I^2 * R ਗਰਮੀ ਪੈਦਾ ਹੁੰਦੀ ਹੈ ਜੋ ਇਨਫਰਾਰੈੱਡ ਕੈਮਰੇ \'ਤੇ ਤੁਰੰਤ ਚਮਕਦੀ ਹੈ।\n\n3. ਪਾਵਰ ਸੀਕਵੈਂਸਿੰਗ:\n• ਆਸੀਲੋਸਕੋਪ ਨਾਲ ਚੈੱਕ ਕਰੋ ਕਿ ਸਾਰੀਆਂ ਵੋਲਟੇਜਾਂ ਸਹੀ ਕ੍ਰਮ ਵਿੱਚ ਚਾਲੂ ਹੋ ਰਹੀਆਂ ਹਨ।',
          practicalExampleEn:
            'Diagnosing a dead industrial controller: Technician measures cold resistance on 3.3V rail and finds 0.35 Ω. Setting bench power supply to 1.0 V with current limit 1.5 A, current draws 1.5 A (bench supply enters CC mode at 0.525 V). Under thermal camera, decoupling capacitor C42 lights up to 58°C within 3 seconds. Removing C42 restores rail impedance to 450 Ω and board powers on immediately.',
          practicalExamplePa:
            'ਇੱਕ ਬੰਦ ਪਏ ਇੰਡਸਟਰੀਅਲ ਕੰਟਰੋਲਰ ਦੀ ਜਾਂਚ: ਟੈਕਨੀਸ਼ੀਅਨ ਨੇ 3.3V ਰੇਲ \'ਤੇ ਕੋਲਡ ਵਿਰੋਧ ਮਾਪਿਆ ਅਤੇ 0.35 Ω ਪਾਇਆ। ਬੈਂਚ ਸਪਲਾਈ ਨੂੰ 1.0V ਅਤੇ 1.5A ਕਰੰਟ ਲਿਮਿਟ \'ਤੇ ਰੱਖ ਕੇ ਕਰੰਟ ਦਿੱਤਾ। ਥਰਮਲ ਕੈਮਰੇ ਹੇਠ C42 ਕੈਪੈਸੀਟਰ 3 ਸਕਿੰਟਾਂ ਵਿੱਚ 58°C \'ਤੇ ਚਮਕ ਪਿਆ। C42 ਨੂੰ ਬਦਲਣ ਨਾਲ ਬੋਰਡ ਬਿਲਕੁਲ ਠੀਕ ਹੋ ਗਿਆ।',
          codeDemo: `// Python / SCPI: Automated Power Rail Cold Impedance Check Harness
export const DIAGNOSTIC_SCRIPT = \`
import pyvisa
import time

def check_power_rails(rm, dmm_address):
    dmm = rm.open_resource(dmm_address)
    rails = {"12V_MAIN": 500.0, "5V_SYS": 200.0, "3V3_IO": 50.0, "1V1_CORE": 2.0}
    
    print("[DIAGNOSTIC] Performing Cold Impedance Screening...")
    for rail, min_ohms in rails.items():
        # DMM in 4-wire resistance mode
        dmm.write(":CONF:FRES")
        res = float(dmm.query(":MEAS:FRES?"))
        if res < min_ohms:
            print(f"FAILED: {rail} shorted! Measured: {res:.3f} ohms (min {min_ohms})")
            return False
        print(f"PASS: {rail} impedance = {res:.1f} ohms")
    return True
\`;`,
          misconceptionsJson: [
            {
              myth: 'If a 3.3V rail is shorted, it is safe to inject 3.3V at unlimited current.',
              truthEn:
                'False. If the high-side MOSFET of a buck converter is punctured, injecting 3.3V can punch through and permanently destroy a 1.0V CPU core die. Never inject more than 1.0V on unknown shorted rails.',
              truthPa:
                'ਗ਼ਲਤ! ਜੇਕਰ ਬੱਕ ਕਨਵਰਟਰ ਦਾ ਟ੍ਰਾਂਜਿਸਟਰ ਸ਼ਾਰਟ ਹੋਵੇ, ਤਾਂ 3.3V ਦੇਣ ਨਾਲ 1.0V ਵਾਲਾ ਸੰਵੇਦਨਸ਼ੀਲ ਪ੍ਰੋਸੈਸਰ ਸੜ ਜਾਵੇਗਾ। ਅਣਜਾਣ ਸ਼ਾਰਟ \'ਤੇ 1.0V ਤੋਂ ਵੱਧ ਕਦੇ ਨਾ ਦਿਓ।',
            },
            {
              myth: 'Digital signals either work or do not work; they never require an oscilloscope.',
              truthEn:
                'False. Marginal clock rise times, ground bounce, ringing, and power rail droop cause intermittent, elusive glitches that only an oscilloscope can capture.',
              truthPa:
                'ਗ਼ਲਤ! ਕਲਾਕ ਵਿੱਚ ਸ਼ੋਰ, ਵੋਲਟੇਜ ਡਰਾਪ ਅਤੇ ਸਿਗਨਲ ਬਾਊਂਸ ਕਾਰਨ ਅਜਿਹੇ ਨੁਕਸ ਪੈਂਦੇ ਹਨ ਜੋ ਸਿਰਫ਼ ਆਸੀਲੋਸਕੋਪ ਹੀ ਫੜ ਸਕਦਾ ਹੈ।',
            },
          ],
          terminologyJson: [
            {
              term: 'Cold Impedance Screening',
              punjabi: 'ਕੋਲਡ ਇੰਪੀਡੈਂਸ ਜਾਂਚ',
              meaningEn: 'Measuring DC resistance between power nodes and ground without powering the board.',
              meaningPa: 'ਬੋਰਡ ਨੂੰ ਬਿਜਲੀ ਦਿੱਤੇ ਬਿਨਾਂ ਪਾਵਰ ਪੁਆਇੰਟਾਂ ਦਾ ਜ਼ਮੀਨ ਨਾਲ ਵਿਰੋਧ ਮਾਪਣਾ।',
            },
            {
              term: 'Constant Current (CC) Clamping',
              punjabi: 'ਕਾਂਸਟੈਂਟ ਕਰੰਟ ਕਲੈਂਪਿੰਗ',
              meaningEn: 'Power supply mode where output voltage collapses to maintain current below a preset threshold.',
              meaningPa: 'ਪਾਵਰ ਸਪਲਾਈ ਦਾ ਮੋਡ ਜਿੱਥੇ ਕਰੰਟ ਨੂੰ ਸੀਮਾ ਅੰਦਰ ਰੱਖਣ ਲਈ ਵੋਲਟੇਜ ਆਪਣੇ ਆਪ ਡਿੱਗ ਜਾਂਦੀ ਹੈ।',
            },
            {
              term: 'Signal Tracing',
              punjabi: 'ਸਿਗਨਲ ਟਰੇਸਿੰਗ',
              meaningEn: 'Probing circuit stages sequentially downstream from input to output to find where signal fails.',
              meaningPa: 'ਇਨਪੁਟ ਤੋਂ ਆਉਟਪੁੱਟ ਵੱਲ ਸਿਗਨਲ ਦੇ ਰਸਤੇ ਦਾ ਪਿੱਛਾ ਕਰਨਾ ਤਾਂ ਜੋ ਨੁਕਸ ਵਾਲਾ ਪੜਾਅ ਲੱਭ ਸਕੇ।',
            },
            {
              term: 'Signal Injection',
              punjabi: 'ਸਿਗਨਲ ਇੰਜੈਕਸ਼ਨ',
              meaningEn: 'Introducing an external test waveform into an intermediate circuit stage to verify downstream stages.',
              meaningPa: 'ਸਰਕਟ ਦੇ ਵਿਚਕਾਰਲੇ ਪੜਾਅ ਵਿੱਚ ਨਕਲੀ ਸਿਗਨਲ ਦੇ ਕੇ ਅਗਲੇ ਹਿੱਸੇ ਦੀ ਜਾਂਚ ਕਰਨਾ।',
            },
            {
              term: 'Power Sequencing',
              punjabi: 'ਪਾਵਰ ਸੀਕਵੈਂਸਿੰਗ',
              meaningEn: 'The controlled chronological start-up order of multi-voltage power rails (e.g. Core -> I/O).',
              meaningPa: 'ਵੱਖ-ਵੱਖ ਪਾਵਰ ਰੇਲਾਂ ਦੇ ਚਾਲੂ ਹੋਣ ਦਾ ਨਿਰਧਾਰਿਤ ਕ੍ਰਮ।',
            },
          ],
          interactiveLabId: 'lab-power-rail-short-finder',
          exercisePromptEn:
            'A 5V rail carrying 1.5 A current drop measures 12 mV across a 30 mm copper trace. Calculate the trace resistance and determine the power dissipated if an MLCC at the end of the trace has a 0.25 Ω short.',
          exercisePromptPa:
            'ਇੱਕ 5V ਰੇਲ 1.5A ਕਰੰਟ ਖਿੱਚ ਰਹੀ ਹੈ ਅਤੇ 30mm ਟਰੇਸ ਉੱਤੇ 12mV ਵੋਲਟੇਜ ਡਰਾਪ ਹੁੰਦੀ ਹੈ। ਟਰੇਸ ਦੀ ਰਜਿਸਟੈਂਸ ਲੱਭੋ ਅਤੇ 0.25 Ω ਦੇ ਸ਼ਾਰਟ ਕੈਪੈਸੀਟਰ ਵਿੱਚ ਪੈਦਾ ਹੋਈ ਗਰਮੀ (Power) ਦਾ ਹਿਸਾਬ ਲਗਾਓ।',
          summaryEn:
            'Systematic troubleshooting begins with visual inspection and cold impedance screening. Short circuits are located non-destructively using 4-wire microvolt tracing and thermal cameras under current-limited injection. Power sequencing and signal tracing isolate complex dynamic faults.',
          summaryPa:
            'ਟ੍ਰਬਲਸ਼ੂਟਿੰਗ ਹਮੇਸ਼ਾ ਵਿਜ਼ੂਅਲ ਜਾਂਚ ਅਤੇ ਕੋਲਡ ਰੇਸਿਸਟੈਂਸ ਮਾਪਣ ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ। ਸ਼ਾਰਟ ਸਰਕਟਾਂ ਨੂੰ ਥਰਮਲ ਕੈਮਰੇ ਅਤੇ 4-ਤਾਰ ਮਾਈਕ੍ਰੋ-ਵੋਲਟ ਵਿਧੀ ਨਾਲ ਲੱਭਿਆ ਜਾਂਦਾ ਹੈ।',
          furtherReadingJson: [
            'Bogatin, Eric. Signal and Power Integrity - Simplified',
            'Horowitz & Hill. The Art of Electronics, Chapter 12: Electronic Construction & Troubleshooting',
          ],
          quiz: {
            titleEn: 'Level 12.1 Assessment: Diagnostic Workflows & Fault Isolation',
            titlePa: 'ਲੈਵਲ 12.1 ਮੁਲਾਂਕਣ: ਡਾਇਗਨੌਸਟਿਕ ਵਿਧੀਆਂ ਅਤੇ ਫਾਲਟ ਆਈਸੋਲੇਸ਼ਨ',
            timeLimitSeconds: 900,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'Cold State Screening',
                promptEn: 'What is the mandatory first step before applying bench power to a board with an unknown failure?',
                promptPa: 'ਅਣਜਾਣ ਨੁਕਸ ਵਾਲੇ ਬੋਰਡ ਨੂੰ ਪਾਵਰ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਸਭ ਤੋਂ ਪਹਿਲਾ ਲਾਜ਼ਮੀ ਕਦਮ ਕੀ ਹੈ?',
                optionsJson: [
                  'Measure DC resistance to ground on all power rails (cold impedance screening)',
                  'Connect maximum rated AC mains voltage directly',
                  'Desolder the microcontroller to check underneath pads',
                  'Turn all trimpots to their maximum clockwise positions',
                ],
                correctAnswer: 'Measure DC resistance to ground on all power rails (cold impedance screening)',
                explanationEn:
                  'Measuring cold impedance reveals short circuits before power application, preventing catastrophic component burnout.',
                explanationPa:
                  'ਪਾਵਰ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਰਜਿਸਟੈਂਸ ਮਾਪਣ ਨਾਲ ਸ਼ਾਰਟ ਸਰਕਟ ਪਹਿਲਾਂ ਹੀ ਫੜੇ ਜਾਂਦੇ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Voltage Injection Safety',
                promptEn: 'Why must voltage injection on an unknown shorted power rail be limited to max 1.0V?',
                promptPa: 'ਅਣਜਾਣ ਸ਼ਾਰਟ ਪਾਵਰ ਰੇਲ \'ਤੇ ਵੋਲਟੇਜ ਇੰਜੈਕਸ਼ਨ ਵੱਧ ਤੋਂ ਵੱਧ 1.0V ਤੱਕ ਕਿਉਂ ਸੀਮਤ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ?',
                optionsJson: [
                  'To protect sensitive low-voltage SoC silicon dies that may be exposed via high-side MOSFET shorts',
                  'Because power supplies cannot source current above 1 volt',
                  'Because thermal cameras only detect infrared at exactly 1 volt',
                  'To prevent copper traces from melting instantly',
                ],
                correctAnswer: 'To protect sensitive low-voltage SoC silicon dies that may be exposed via high-side MOSFET shorts',
                explanationEn:
                  'Injecting excessive voltage can destroy low-voltage SoC silicon dies that are bridged to higher-voltage rails via failed switching FETs.',
                explanationPa:
                  'ਵੱਧ ਵੋਲਟੇਜ ਦੇਣ ਨਾਲ ਸੰਵੇਦਨਸ਼ੀਲ ਪ੍ਰੋਸੈਸਰ ਜਾਂ SoC ਅੰਦਰੋਂ ਸੜ ਸਕਦੇ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Joule Heating Localization',
                promptEn: 'What physical principle allows thermal imaging cameras to identify shorted ceramic capacitors?',
                promptPa: 'ਸ਼ਾਰਟ ਹੋਏ ਕੈਪੈਸੀਟਰ ਨੂੰ ਥਰਮਲ ਕੈਮਰੇ \'ਤੇ ਦਿਖਾਉਣ ਵਾਲਾ ਭੌਤਿਕ ਸਿਧਾਂਤ ਕਿਹੜਾ ਹੈ?',
                optionsJson: [
                  'Joule heating (P = I^2 * R), where localized current concentration produces a hot spot',
                  'Peltier thermoelectric cooling across the dielectric',
                  'Magnetic Hall effect deflection of infrared rays',
                  'Piezoelectric ultrasound generation',
                ],
                correctAnswer: 'Joule heating (P = I^2 * R), where localized current concentration produces a hot spot',
                explanationEn:
                  'Current forced through the internal fault resistance dissipates heat (P = I^2 * R), creating an infrared hot spot visible on a thermal camera.',
                explanationPa:
                  'ਕਰੰਟ ਲੰਘਣ ਨਾਲ P = I^2 * R ਅਨੁਸਾਰ ਪੈਦਾ ਹੋਈ ਗਰਮੀ ਥਰਮਲ ਕੈਮਰੇ \'ਤੇ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: '4-Wire Kelvin Trace Mapping',
                promptEn: 'In 4-wire microvolt delta mapping along a PCB power bus, how is the shorted component identified?',
                promptPa: '4-ਤਾਰ ਕੈਲਵਿਨ ਮਾਈਕ੍ਰੋ-ਵੋਲਟ ਮੈਪਿੰਗ ਵਿੱਚ ਸ਼ਾਰਟ ਕੰਪੋਨੈਂਟ ਦੀ ਪਛਾਣ ਕਿਵੇਂ ਹੁੰਦੀ ਹੈ?',
                optionsJson: [
                  'The component pin exhibiting the lowest absolute voltage drop relative to injection point is the short',
                  'The component pin with the highest AC ripple frequency',
                  'The component that produces the loudest acoustic click',
                  'The component with the highest magnetic flux leakage',
                ],
                correctAnswer: 'The component pin exhibiting the lowest absolute voltage drop relative to injection point is the short',
                explanationEn:
                  'Because current flows toward the fault through trace resistance, the node closest to the short has the lowest potential.',
                explanationPa:
                  'ਸ਼ਾਰਟ ਵੱਲ ਜਾਂਦੇ ਕਰੰਟ ਕਾਰਨ ਵੋਲਟੇਜ ਡਿੱਗਦੀ ਹੈ, ਸ਼ਾਰਟ ਵਾਲੀ ਪਿੰਨ \'ਤੇ ਸਭ ਤੋਂ ਘੱਟ ਵੋਲਟੇਜ ਹੁੰਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Constant Current Transition',
                promptEn: 'A power supply set to 1.2V and clamped to 2.0A is connected to a 0.35 Ω short. What is the terminal voltage?',
                promptPa: '1.2V ਅਤੇ 2.0A ਲਿਮਿਟ ਵਾਲੀ ਸਪਲਾਈ 0.35 Ω ਦੇ ਸ਼ਾਰਟ ਨਾਲ ਜੋੜਨ \'ਤੇ ਟਰਮੀਨਲ ਵੋਲਟੇਜ ਕਿੰਨੀ ਹੋਵੇਗੀ?',
                optionsJson: ['0.70 V', '1.20 V', '0.35 V', '2.40 V'],
                correctAnswer: '0.70 V',
                explanationEn:
                  'Demand (1.2V / 0.35Ω = 3.43A) exceeds 2.0A limit, so PSU enters Constant Current mode: V = I * R = 2.0A * 0.35Ω = 0.70 V.',
                explanationPa:
                  'ਸਪਲਾਈ CC ਮੋਡ ਵਿੱਚ ਆ ਜਾਂਦੀ ਹੈ: V = 2.0A * 0.35Ω = 0.70 V।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Power Sequencing Risk',
                promptEn: 'What can happen if a 3.3V I/O power rail powers up before an internal 1.1V core rail in an SoC?',
                promptPa: 'ਜੇਕਰ SoC ਵਿੱਚ 3.3V I/O ਰੇਲ 1.1V ਕੋਰ ਰੇਲ ਤੋਂ ਪਹਿਲਾਂ ਚਾਲੂ ਹੋ ਜਾਵੇ ਤਾਂ ਕੀ ਹੋ ਸਕਦਾ ਹੈ?',
                optionsJson: [
                  'Internal parasitic thyristor latch-up causing catastrophic over-current and silicon destruction',
                  'The SoC automatically increases its clock speed by 200%',
                  'The firmware flash memory is formatted to factory defaults',
                  'The board runs at lower temperature',
                ],
                correctAnswer: 'Internal parasitic thyristor latch-up causing catastrophic over-current and silicon destruction',
                explanationEn:
                  'Violating power sequencing forward-biases internal parasitic PNPN structures, causing destructive latch-up.',
                explanationPa:
                  'ਗ਼ਲਤ ਕ੍ਰਮ ਕਾਰਨ ਅੰਦਰੂਨੀ ਪੈਰਾਸਿਟਿਕ ਥਾਈਰਿਸਟਰ ਲੈਚ-ਅੱਪ ਹੋ ਜਾਂਦੇ ਹਨ ਜੋ ਚਿੱਪ ਸਾੜ ਦਿੰਦੇ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Signal Tracing vs Injection',
                promptEn: 'What is the difference between signal tracing and signal injection?',
                promptPa: 'ਸਿਗਨਲ ਟਰੇਸਿੰਗ ਅਤੇ ਸਿਗਨਲ ਇੰਜੈਕਸ਼ਨ ਵਿੱਚ ਕੀ ਅੰਤਰ ਹੈ?',
                optionsJson: [
                  'Signal tracing follows a known stimulus downstream with a probe; signal injection introduces synthetic waveforms into intermediate stages',
                  'Signal tracing is only for DC power; signal injection is only for batteries',
                  'Signal tracing requires high voltage; signal injection requires cryogenic cooling',
                  'There is no difference; they are identical procedures',
                ],
                correctAnswer: 'Signal tracing follows a known stimulus downstream with a probe; signal injection introduces synthetic waveforms into intermediate stages',
                explanationEn:
                  'Tracing monitors normal or test signals as they pass through circuits; injection introduces synthetic test signals to test downstream behavior.',
                explanationPa:
                  'ਟਰੇਸਿੰਗ ਸਿਗਨਲ ਦੇ ਰਸਤੇ ਦਾ ਪਿੱਛਾ ਕਰਦੀ ਹੈ; ਇੰਜੈਕਸ਼ਨ ਸਰਕਟ ਵਿੱਚ ਨਕਲੀ ਸਿਗਨਲ ਪਾ ਕੇ ਪਰਖਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Oscilloscope Probe Grounding',
                promptEn: 'Why does a long 15 cm alligator ground lead on an oscilloscope probe distort high-speed digital clock signals?',
                promptPa: 'ਆਸੀਲੋਸਕੋਪ ਪ੍ਰੋਬ ਦੀ 15cm ਲੰਬੀ ਗਰਾਊਂਡ ਤਾਰ ਹਾਈ-ਸਪੀਡ ਕਲਾਕ ਸਿਗਨਲ ਨੂੰ ਕਿਉਂ ਵਿਗਾੜਦੀ ਹੈ?',
                optionsJson: [
                  'Parasitic ground lead inductance forms an LC resonant circuit with probe capacitance, causing severe ringing and overshoot',
                  'The alligator clip has too much DC resistance',
                  'Long wires absorb earth magnetic fields and double the frequency',
                  'The probe cable overheats and melts',
                ],
                correctAnswer: 'Parasitic ground lead inductance forms an LC resonant circuit with probe capacitance, causing severe ringing and overshoot',
                explanationEn:
                  'A long ground lead adds ~150 nH inductance, which rings with probe capacitance (10–15 pF) in the 100–300 MHz band. Use a short ground spring instead.',
                explanationPa:
                  'ਲੰਬੀ ਗਰਾਊਂਡ ਲੀਡ ਦੀ ਇੰਡਕਟੈਂਸ ਪ੍ਰੋਬ ਦੀ ਕੈਪੈਸੀਟੈਂਸ ਨਾਲ ਰੈਜ਼ੋਨੈਂਸ ਕਰਕੇ ਰਿੰਗਿੰਗ (Ringing) ਪੈਦਾ ਕਰਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Reset Line Diagnostics',
                promptEn: 'An active-low microcontroller reset pin (RESET#) remains permanently at 0.15 V. What is the state of the MCU?',
                promptPa: 'ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਦੀ RESET# ਪਿੰਨ ਲਗਾਤਾਰ 0.15 V \'ਤੇ ਰਹਿੰਦੀ ਹੈ। MCU ਕਿਸ ਹਾਲਤ ਵਿੱਚ ਹੋਵੇਗਾ?',
                optionsJson: [
                  'The MCU is permanently held in hardware reset and cannot execute instructions',
                  'The MCU is operating at maximum overclock speed',
                  'The MCU is in deep sleep mode awaiting a Bluetooth connection',
                  'The MCU is transmitting CAN packets at 1 Mbps',
                ],
                correctAnswer: 'The MCU is permanently held in hardware reset and cannot execute instructions',
                explanationEn:
                  'Active-low reset lines must be pulled high (VDD) to run code. If held near ground (0.15 V), the CPU is halted in reset state.',
                explanationPa:
                  'ਲੋਅ ਰਹਿਣ ਕਰਕੇ ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਲਗਾਤਾਰ ਰੀਸੈੱਟ ਵਿੱਚ ਫਸਿਆ ਰਹਿੰਦਾ ਹੈ ਅਤੇ ਕੋਡ ਨਹੀਂ ਚਲਾ ਸਕਦਾ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Clock Crystal Probing',
                promptEn: 'Why should an engineer use an active FET probe or a 10X probe rather than a 1X probe when inspecting a 32.768 kHz watch crystal?',
                promptPa: '32.768 kHz ਕ੍ਰਿਸਟਲ ਦੀ ਜਾਂਚ ਸਮੇਂ 1X ਦੀ ਬਜਾਏ 10X ਜਾਂ FET ਪ੍ਰੋਬ ਕਿਉਂ ਵਰਤਣੀ ਚਾਹੀਦੀ ਹੈ?',
                optionsJson: [
                  'A 1X probe has high capacitance (~100 pF) that pulls down the crystal and halts oscillation',
                  'A 1X probe would deliver 1000V to the crystal',
                  'A 10X probe changes the crystal frequency into a square wave',
                  'Crystals only conduct electricity through gold probes',
                ],
                correctAnswer: 'A 1X probe has high capacitance (~100 pF) that pulls down the crystal and halts oscillation',
                explanationEn:
                  'A 1X probe adds ~100 pF capacitance, far exceeding the crystal load capacitance (typically 6–12 pF), immediately quenching oscillation.',
                explanationPa:
                  '1X ਪ੍ਰੋਬ ਦੀ ਵੱਧ ਕੈਪੈਸੀਟੈਂਸ (~100 pF) ਕ੍ਰਿਸਟਲ ਦੇ ਦੋਲਨ (Oscillation) ਨੂੰ ਬੰਦ ਕਰ ਦਿੰਦੀ ਹੈ।',
              },
            ],
          },
        },
        {
          slug: 'component-rework-micro-soldering-root-cause-analysis',
          orderIndex: 2,
          titleEn: '12.2 Component Rework, PCB Micro-Soldering Repair & Root Cause Analysis',
          titlePa: '12.2 ਕੰਪੋਨੈਂਟ ਰੀਵਰਕ, PCB ਮਾਈਕਰੋ-ਸੋਲਡਰਿੰਗ ਮੁਰੰਮਤ ਅਤੇ ਮੂਲ ਕਾਰਨ ਵਿਸ਼ਲੇਸ਼ਣ',
          objectivesJson: [
            'Differentiate leaded (Sn63/Pb37) and lead-free (SAC305) solder metallurgy, melting profiles, and rework iron temperatures',
            'Restore ripped PCB solder pads and severed traces using micro-jumper wire and UV-curable dielectric mask per IPC-7721',
            'Conduct BGA desoldering, flux cleanup, stencil reballing, and thermal profile alignment',
            'Perform Root Cause Analysis (RCA) to classify failures (EOS, ESD, Tin Whiskers, Thermal Fatigue, Electrochemical Migration)',
          ],
          prerequisitesJson: ['Level 9: PCB Design & Manufacturing & Level 12.1: Fault Diagnostics'],
          childAnalogyEn:
            'Think of delicate surgery by a skilled doctor! If a surgeon used a heavy kitchen knife and no light, the patient would be harmed. A micro-soldering technician uses a microscope, fine-tip scalpel, and hair-thin wire (thinner than a strand of silk from a Punjabi dupatta) to repair broken copper arteries inside a circuit board, and seals it with UV mask just like a dentist cures a composite tooth filling!',
          childAnalogyPa:
            'ਕਿਸੇ ਮਾਹਿਰ ਸਰਜਨ ਵੱਲੋਂ ਕੀਤੇ ਜਾਣ ਵਾਲੇ ਨਾਜ਼ੁਕ ਆਪ੍ਰੇਸ਼ਨ ਵਾਂਗ ਸੋਚੋ! ਜੇ ਡਾਕਟਰ ਚਾਕੂ ਨਾਲ ਜ਼ੋਰ ਲਗਾਵੇ ਤਾਂ ਮਰੀਜ਼ ਨੂੰ ਨੁਕਸਾਨ ਹੋਵੇਗਾ। ਮਾਈਕਰੋ-ਸੋਲਡਰਿੰਗ ਵਿੱਚ ਟੈਕਨੀਸ਼ੀਅਨ ਮਾਈਕ੍ਰੋਸਕੋਪ ਹੇਠ ਦੁਪੱਟੇ ਦੇ ਰੇਸ਼ਮੀ ਧਾਗੇ ਨਾਲੋਂ ਵੀ ਪਤਲੀ ਤਾਰ ਨਾਲ ਸਰਕਟ ਬੋਰਡ ਦੀਆਂ ਟੁੱਟੀਆਂ ਨਾੜਾਂ (ਟਰੇਸ) ਜੋੜਦਾ ਹੈ, ਅਤੇ ਦੰਦਾਂ ਦੇ ਡਾਕਟਰ ਵਾਂਗ UV ਲਾਈਟ ਨਾਲ ਮਾਸਕ ਪੱਕਾ ਕਰਦਾ ਹੈ!',
          technicalExplanationEn:
            'SMD rework and failure analysis demand metallurgical knowledge and strict IPC compliance:\n\n1. Solder Metallurgy & Thermal Budgets:\n• Sn63/Pb37: Eutectic at 183°C. Iron tip: 300°C–320°C.\n• SAC305 (Sn96.5/Ag3.0/Cu0.5): Liquidus 217°C–220°C. Iron tip: 330°C–350°C. Exceeding 370°C dissolves copper traces and delaminates FR-4.\n• Bottom Preheating: Heating the entire board to 100°C–130°C eliminates thermal sinking into ground planes, allowing rapid component desoldering.\n\n2. IPC-7721 Pad & Trace Restoration:\n• Scrape solder mask with micro-scalpel to expose virgin copper.\n• Solder 44–48 AWG polyurethane insulated micro-wire.\n• Shape a replacement copper land, cure with 365 nm UV solder mask for dielectric insulation.\n\n3. Root Cause Analysis (RCA):\n• EOS (Electrical Overstress): Large craters, melted bond wires from sustained energy surges.\n• ESD: Latent nanometer oxide punch-through with no external visual signs.\n• Tin Whiskers: Spontaneous conductive filaments from pure tin plating under mechanical stress.\n• Electrochemical Migration (ECM): Moisture + ionic flux residue causing dendritic metal bridges.',
          technicalExplanationPa:
            'SMD ਰੀਵਰਕ ਅਤੇ ਮੂਲ ਕਾਰਨ ਵਿਸ਼ਲੇਸ਼ਣ:\n\n1. ਸੋਲਡਰ ਧਾਤਾਂ ਅਤੇ ਤਾਪਮਾਨ:\n• Sn63/Pb37: 183°C ਯੂਟੈਕਟਿਕ ਪਿਘਲਣ ਦਰਜਾ। ਆਇਰਨ ਤਾਪਮਾਨ: 300°C–320°C।\n• SAC305 (ਲੀਡ-ਫ੍ਰੀ): 217°C–220°C ਪਿਘਲਣ ਦਰਜਾ। ਆਇਰਨ ਤਾਪਮਾਨ: 330°C–350°C।\n• ਪ੍ਰੀ-ਹੀਟਿੰਗ: ਬੋਰਡ ਨੂੰ ਹੇਠਾਂ ਤੋਂ 100°C–130°C ਗਰਮ ਕਰਨ ਨਾਲ ਵੱਡੇ ਗਰਾਊਂਡ ਪਲੇਨ ਆਇਰਨ ਦੀ ਗਰਮੀ ਨਹੀਂ ਖਿੱਚਦੇ।\n\n2. ਪੈਡ ਅਤੇ ਟਰੇਸ ਮੁਰੰਮਤ:\n• ਤਾਂਬਾ ਸਾਫ਼ ਕਰਕੇ ਬਾਰੀਕ ਜੰਪਰ ਤਾਰ ਲਗਾਓ ਅਤੇ 365nm UV ਮਾਸਕ ਨਾਲ ਸੀਲ ਕਰੋ।\n\n3. ਰੂਟ ਕਾਜ਼ ਐਨਾਲਿਸਿਸ (RCA):\n• EOS: ਵੱਡੇ ਸੜੇ ਹੋਏ ਖੱਡੇ (ਓਵਰ-ਕਰੰਟ)।\n• ESD: ਗੇਟ ਆਕਸਾਈਡ ਵਿੱਚ ਸੂਖਮ ਸੁਰਾਖ।\n• ਟਿਨ ਵਿਸਕਰਜ਼: ਸ਼ੁੱਧ ਟਿਨ ਤੋਂ ਉੱਗਣ ਵਾਲੇ ਬਰੀਕ ਵਾਲ ਜੋ ਸ਼ਾਰਟ ਕਰਦੇ ਹਨ।\n• ਇਲੈਕਟ੍ਰੋਕੈਮੀਕਲ ਮਾਈਗ੍ਰੇਸ਼ਨ: ਨਮੀ ਕਾਰਨ ਤਾਂਬੇ ਦੇ ਡੈਂਡਰਾਈਟ ਉੱਗਣਾ।',
          practicalExampleEn:
            'Reworking a torn USB Type-C connector pad: The CC1 communication pad is ripped off the PCB. The technician scrapes the mask off the healthy 0.2 mm trace 2 mm away, solders a 0.04 mm enameled copper jumper with a strain relief loop, shapes a circular pad matching the footprint, anchors it with UV dielectric mask, cures it under 365 nm UV light for 45 seconds, and reflows the new connector.',
          practicalExamplePa:
            'USB-C ਕਨੈਕਟਰ ਦਾ ਉੱਖੜਿਆ ਪੈਡ ਠੀਕ ਕਰਨਾ: ਟੈਕਨੀਸ਼ੀਅਨ ਨੇ 2mm ਦੂਰ ਤਾਂਬੇ ਦੇ ਟਰੇਸ ਤੋਂ ਮਾਸਕ ਖੁਰਚਿਆ, 0.04mm ਬਰੀਕ ਤਾਂਬੇ ਦੀ ਤਾਰ ਜੋੜੀ, ਨਵਾਂ ਪੈਡ ਬਣਾਇਆ, UV ਮਾਸਕ ਲਗਾ ਕੇ 45 ਸਕਿੰਟ ਅਲਟਰਾਵਾਇਲਟ ਲਾਈਟ ਨਾਲ ਸੁਕਾਇਆ ਅਤੇ ਨਵਾਂ ਕਨੈਕਟਰ ਸੋਲਡਰ ਕੀਤਾ।',
          codeDemo: `// TypeScript: Thermal Heat Required to Reflow a Heavy Component
export function calculateDesolderEnergyJoules(
  massGrams: number,
  specificHeatJoulePerGramC: number,
  tempAmbientC: number,
  tempTargetC: number
): { energyJoules: number; minTimeSecAt50W: number } {
  const deltaT = tempTargetC - tempAmbientC;
  const energyJoules = massGrams * specificHeatJoulePerGramC * deltaT;
  const minTimeSecAt50W = energyJoules / 50.0;
  return { energyJoules, minTimeSecAt50W };
}
// Example: 2.0 g brass connector (c = 0.38 J/g*C) heated from 25°C to 225°C (deltaT = 200°C)
// Q = 2.0 * 0.38 * 200 = 152 Joules. At 50W net heat delivery: t = 152 / 50 = 3.04 seconds.`,
          misconceptionsJson: [
            {
              myth: 'Plumbing acid flux is better for soldering electronics because it cleans copper faster.',
              truthEn:
                'Extremely dangerous myth. Acid flux contains chloride ions that remain hygroscopic, continuously corroding copper traces and causing dendritic shorts within weeks. Only use electronic-grade rosin (RMA) or no-clean synthetic flux.',
              truthPa:
                'ਬਹੁਤ ਵੱਡੀ ਗ਼ਲਤੀ! ਪਲੰਬਿੰਗ ਵਾਲਾ ਤੇਜ਼ਾਬੀ ਫਲੈਕਸ ਤਾਂਬੇ ਨੂੰ ਗਾਲ ਦਿੰਦਾ ਹੈ ਅਤੇ ਕੁਝ ਹਫ਼ਤਿਆਂ ਵਿੱਚ ਸ਼ਾਰਟ ਸਰਕਟ ਕਰ ਦਿੰਦਾ ਹੈ। ਹਮੇਸ਼ਾ ਇਲੈਕਟ੍ਰਾਨਿਕ ਰੋਸਿਨ (RMA) ਜਾਂ ਨੋ-ਕਲੀਨ ਫਲੈਕਸ ਹੀ ਵਰਤੋ।',
            },
            {
              myth: 'Replacing a blown fuse solves the problem.',
              truthEn:
                'False. A fuse is a protective device that sacrifices itself in response to an over-current event. Replacing the fuse without locating and fixing the short circuit simply results in the new fuse blowing instantly.',
              truthPa:
                'ਗ਼ਲਤ! ਫਿਊਜ਼ ਨੁਕਸ ਦਾ ਕਾਰਨ ਨਹੀਂ ਬਲਕਿ ਬਚਾਅ ਦਾ ਸਾਧਨ ਹੈ। ਜੇਕਰ ਅਸਲ ਸ਼ਾਰਟ ਸਰਕਟ ਠੀਕ ਨਾ ਕੀਤਾ ਜਾਵੇ ਤਾਂ ਨਵਾਂ ਫਿਊਜ਼ ਵੀ ਤੁਰੰਤ ਉੱਡ ਜਾਵੇਗਾ।',
            },
          ],
          terminologyJson: [
            {
              term: 'Eutectic Alloy',
              punjabi: 'ਯੂਟੈਕਟਿਕ ਅਲਾਏ',
              meaningEn: 'A specific alloy composition (like Sn63/Pb37) that melts sharply at a single temperature without a pasty state.',
              meaningPa: 'ਅਜਿਹੀ ਮਿਸ਼ਰਤ ਧਾਤੂ ਜੋ ਬਿਨਾਂ ਪੇਸਟ ਬਣੇ ਇੱਕੋ ਨਿਰਧਾਰਿਤ ਤਾਪਮਾਨ \'ਤੇ ਸਿੱਧੀ ਪਿਘਲਦੀ ਹੈ।',
            },
            {
              term: 'SAC305',
              punjabi: 'SAC305 ਲੀਡ-ਫ੍ਰੀ ਸੋਲਡਰ',
              meaningEn: 'Standard lead-free solder alloy consisting of 96.5% Tin, 3.0% Silver, and 0.5% Copper.',
              meaningPa: '96.5% ਟਿਨ, 3.0% ਸਿਲਵਰ ਅਤੇ 0.5% ਕਾਪਰ ਦਾ ਬਣਿਆ ਵਾਤਾਵਰਣ-ਅਨੁਕੂਲ ਸੋਲਡਰ।',
            },
            {
              term: 'IPC-7721',
              punjabi: 'IPC-7721 ਮਿਆਰ',
              meaningEn: 'Industry standard procedures for rework, modification, and repair of electronic printed boards.',
              meaningPa: 'ਸਰਕਟ ਬੋਰਡਾਂ ਦੀ ਮੁਰੰਮਤ ਅਤੇ ਪੈਡ ਬਹਾਲੀ ਲਈ ਅੰਤਰਰਾਸ਼ਟਰੀ ਮਿਆਰੀ ਪ੍ਰਕਿਰਿਆਵਾਂ।',
            },
            {
              term: 'Electrical Overstress (EOS)',
              punjabi: 'ਇਲੈਕਟ੍ਰੀਕਲ ਓਵਰਸਟ੍ਰੈਸ',
              meaningEn: 'Thermal and mechanical destruction of an IC caused by excessive voltage, current, or power surges.',
              meaningPa: 'ਵੱਧ ਵੋਲਟੇਜ ਜਾਂ ਕਰੰਟ ਸਰਜ ਕਾਰਨ IC ਦਾ ਅੰਦਰੋਂ ਸੜਨਾ ਜਾਂ ਫਟਣਾ।',
            },
            {
              term: 'Tin Whiskers',
              punjabi: 'ਟਿਨ ਵਿਸਕਰਜ਼',
              meaningEn: 'Spontaneous crystalline conductive metal filaments growing from pure tin finishes that cause shorts.',
              meaningPa: 'ਸ਼ੁੱਧ ਟਿਨ ਤੋਂ ਆਪਣੇ ਆਪ ਉੱਗਣ ਵਾਲੇ ਬਾਰੀਕ ਕੰਡਕਟਿਵ ਵਾਲ ਜੋ ਸਰਕਟ ਨੂੰ ਸ਼ਾਰਟ ਕਰ ਦਿੰਦੇ ਹਨ।',
            },
          ],
          interactiveLabId: 'lab-pad-trace-repair-simulator',
          exercisePromptEn:
            'A 2.5 g copper heatsink block (c = 0.385 J/g*C) at 25°C must be heated to 220°C for soldering. Calculate the total energy required and determine the preheating temperature needed to reduce the soldering iron heat requirement by 50%.',
          exercisePromptPa:
            'ਇੱਕ 2.5 g ਕਾਪਰ ਹੀਟਸਿੰਕ (c = 0.385 J/g*C) ਨੂੰ 25°C ਤੋਂ 220°C ਤੱਕ ਗਰਮ ਕਰਨਾ ਹੈ। ਲੋੜੀਂਦੀ ਹੀਟ ਐਨਰਜੀ ਲੱਭੋ ਅਤੇ ਪ੍ਰੀ-ਹੀਟਿੰਗ ਦਾ ਉਹ ਤਾਪਮਾਨ ਪਤਾ ਕਰੋ ਜੋ ਆਇਰਨ ਦੀ ਲੋੜੀਂਦੀ ਗਰਮੀ ਨੂੰ 50% ਘਟਾ ਦੇਵੇ।',
          summaryEn:
            'Professional rework preserves PCB integrity using preheating, metallurgical temperature control (SAC305 vs Sn63), and IPC-7721 micro-soldering restoration. Root Cause Analysis (RCA) categorizes failure modes (EOS, ESD, thermal fatigue, tin whiskers) to prevent field recurrences.',
          summaryPa:
            'ਪੇਸ਼ੇਵਰ ਰੀਵਰਕ ਪ੍ਰੀ-ਹੀਟਿੰਗ, ਸਹੀ ਸੋਲਡਰ ਤਾਪਮਾਨ ਅਤੇ IPC-7721 ਪੈਡ ਬਹਾਲੀ ਨਾਲ ਬੋਰਡ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖਦਾ ਹੈ। ਰੂਟ ਕਾਜ਼ ਐਨਾਲਿਸਿਸ (RCA) ਨੁਕਸ ਦਾ ਅਸਲ ਕਾਰਨ ਲੱਭ ਕੇ ਭਵਿੱਖੀ ਅਸਫਲਤਾਵਾਂ ਨੂੰ ਰੋਕਦਾ ਹੈ।',
          furtherReadingJson: [
            'IPC-7711/7721: Rework, Modification and Repair of Electronic Assemblies',
            'Pecht, Michael. Failure Mechanisms in Semiconductor Devices',
          ],
          quiz: {
            titleEn: 'Level 12.2 Assessment: Micro-Soldering, Rework & Failure Analysis',
            titlePa: 'ਲੈਵਲ 12.2 ਮੁਲਾਂਕਣ: ਮਾਈਕਰੋ-ਸੋਲਡਰਿੰਗ, ਰੀਵਰਕ ਅਤੇ ਫੇਲੀਅਰ ਐਨਾਲਿਸਿਸ',
            timeLimitSeconds: 900,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'Sn63/Pb37 Melting Point',
                promptEn: 'What is the eutectic melting temperature of Sn63/Pb37 solder alloy?',
                promptPa: 'Sn63/Pb37 ਸੋਲਡਰ ਅਲਾਏ ਦਾ ਯੂਟੈਕਟਿਕ ਪਿਘਲਣ ਦਰਜਾ ਕਿੰਨਾ ਹੈ?',
                optionsJson: ['183°C', '217°C', '138°C', '300°C'],
                correctAnswer: '183°C',
                explanationEn:
                  'Sn63/Pb37 is eutectic, transitioning sharply from solid to liquid at exactly 183°C with no pasty range.',
                explanationPa:
                  'Sn63/Pb37 ਬਿਲਕੁਲ 183°C \'ਤੇ ਬਿਨਾਂ ਪੇਸਟ ਬਣੇ ਸਿੱਧਾ ਪਿਘਲਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'SAC305 Liquidus',
                promptEn: 'What is the liquidus temperature range of standard lead-free SAC305 solder?',
                promptPa: 'ਸਟੈਂਡਰਡ ਲੀਡ-ਫ੍ਰੀ SAC305 ਸੋਲਡਰ ਦਾ ਪਿਘਲਣ ਦਰਜਾ ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?',
                optionsJson: ['217°C to 220°C', '183°C', '138°C', '260°C to 280°C'],
                correctAnswer: '217°C to 220°C',
                explanationEn:
                  'SAC305 becomes fully molten between 217°C and 220°C, requiring soldering iron tip temperatures around 330°C–350°C.',
                explanationPa:
                  'SAC305 ਲੀਡ-ਫ੍ਰੀ ਸੋਲਡਰ 217°C ਤੋਂ 220°C ਵਿਚਕਾਰ ਪਿਘਲਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Bottom Preheater Purpose',
                promptEn: 'Why is a bottom preheater (100°C - 130°C) used when reworking multi-layer PCBs?',
                promptPa: 'ਮਲਟੀ-ਲੇਅਰ PCB \'ਤੇ ਰੀਵਰਕ ਕਰਦੇ ਸਮੇਂ ਹੇਠਲਾ ਪ੍ਰੀ-ਹੀਟਰ ਕਿਉਂ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
                optionsJson: [
                  'To reduce thermal gradients, prevent board warping, and prevent heavy copper ground planes from quenching iron heat',
                  'To burn off conformal coating without solvents',
                  'To melt plastic connectors for removal',
                  'To permanently magnetize the copper traces',
                ],
                correctAnswer: 'To reduce thermal gradients, prevent board warping, and prevent heavy copper ground planes from quenching iron heat',
                explanationEn:
                  'Preheating elevates the substrate temperature so ground planes do not sink heat away from the soldering iron, preventing torn pads.',
                explanationPa:
                  'ਪ੍ਰੀ-ਹੀਟਿੰਗ ਨਾਲ ਗਰਾਊਂਡ ਪਲੇਨ ਆਇਰਨ ਦੀ ਗਰਮੀ ਨਹੀਂ ਖਿੱਚਦੇ ਅਤੇ ਪੈਡ ਉੱਖੜਨ ਤੋਂ ਬਚਦੇ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'IPC-7721 Pad Reconstruction',
                promptEn: 'What is the standard procedure for repairing a torn PCB solder pad per IPC-7721?',
                promptPa: 'IPC-7721 ਅਨੁਸਾਰ ਉੱਖੜਿਆ ਹੋਇਆ ਸੋਲਡਰ ਪੈਡ ਠੀਕ ਕਰਨ ਦਾ ਸਹੀ ਤਰੀਕਾ ਕੀ ਹੈ?',
                optionsJson: [
                  'Expose trace copper, solder a micro-jumper wire, form a replacement pad, and bond with UV solder mask',
                  'Fill the gap with conductive glue and leave to dry',
                  'Bridge the missing pad with a 2 mm blob of acid flux solder',
                  'Drill a hole through the board to install an eyelet bolt',
                ],
                correctAnswer: 'Expose trace copper, solder a micro-jumper wire, form a replacement pad, and bond with UV solder mask',
                explanationEn:
                  'Standard IPC-7721 restoration uses micro-wire to bridge to the trace and anchors the new copper pad with UV dielectric mask.',
                explanationPa:
                  'ਟਰੇਸ ਸਾਫ਼ ਕਰਕੇ ਬਾਰੀਕ ਜੰਪਰ ਤਾਰ ਲਗਾ ਕੇ UV ਮਾਸਕ ਨਾਲ ਨਵਾਂ ਪੈਡ ਪੱਕਾ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Acid Flux Danger',
                promptEn: 'Why must plumbing or acid-core flux never be used in electronic circuit board repair?',
                promptPa: 'ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਵਿੱਚ ਪਲੰਬਿੰਗ ਜਾਂ ਤੇਜ਼ਾਬੀ ਫਲੈਕਸ ਦੀ ਵਰਤੋਂ ਕਿਉਂ ਨਹੀਂ ਕਰਨੀ ਚਾਹੀਦੀ?',
                optionsJson: [
                  'Chloride and acid ions cause aggressive galvanic corrosion that dissolves copper traces and induces dendritic shorts',
                  'Acid flux prevents lead-free solder from conducting electricity',
                  'Acid flux melts at 500°C which burns through the iron tip',
                  'Acid flux demagnetizes inductors on the PCB',
                ],
                correctAnswer: 'Chloride and acid ions cause aggressive galvanic corrosion that dissolves copper traces and induces dendritic shorts',
                explanationEn:
                  'Acid fluxes leave hygroscopic chloride residues that corrode copper and form conductive dendrite shorts across pins.',
                explanationPa:
                  'ਤੇਜ਼ਾਬੀ ਫਲੈਕਸ ਤਾਂਬੇ ਨੂੰ ਖੋਰ ਦਿੰਦਾ ਹੈ ਅਤੇ ਕੁਝ ਦਿਨਾਂ ਵਿੱਚ ਸ਼ਾਰਟ ਸਰਕਟ ਪੈਦਾ ਕਰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Electrical Overstress Signature',
                promptEn: 'In failure analysis, what microscopic physical signature indicates an Electrical Overstress (EOS) event?',
                promptPa: 'ਫੇਲੀਅਰ ਐਨਾਲਿਸਿਸ ਵਿੱਚ IC ਬਾਡੀ ਵਿੱਚ ਵੱਡੇ ਖੱਡੇ ਅਤੇ ਸੜੀਆਂ ਹੋਈਆਂ ਤਾਰਾਂ ਕਿਸ ਨੁਕਸ ਦਾ ਸਬੂਤ ਹਨ?',
                optionsJson: [
                  'Melted internal bond wires and volcanic craters blown in the plastic mold compound',
                  'Slight oxidation of external lead plating',
                  'Normal solder joint grain boundary growth',
                  'Low ambient relative humidity in the room',
                ],
                correctAnswer: 'Melted internal bond wires and volcanic craters blown in the plastic mold compound',
                explanationEn:
                  'EOS involves sustained high energy dissipation that explosively ruptures package mold compound and vaporizes bond wires.',
                explanationPa:
                  'EOS ਵਿੱਚ ਬਹੁਤ ਜ਼ਿਆਦਾ ਕਰੰਟ ਜਾਂ ਵੋਲਟੇਜ ਕਾਰਨ IC ਅੰਦਰੋਂ ਫਟ ਜਾਂਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'ESD Oxide Damage',
                promptEn: 'How does an Electrostatic Discharge (ESD) event typically damage an integrated circuit without leaving external burn marks?',
                promptPa: 'ESD ਬਿਨਾਂ ਬਾਹਰੀ ਸੜੇ ਨਿਸ਼ਾਨਾਂ ਦੇ IC ਨੂੰ ਕਿਵੇਂ ਖ਼ਰਾਬ ਕਰਦਾ ਹੈ?',
                optionsJson: [
                  'High voltage punctures the nanometer-thin SiO2 gate oxide, causing latent sub-surface leakage currents',
                  'It reverses the magnetic orientation of the copper leadframe',
                  'It freezes the crystal clock frequency at 0 Hz',
                  'It melts the PCB fiberglass substrate into glass beads',
                ],
                correctAnswer: 'High voltage punctures the nanometer-thin SiO2 gate oxide, causing latent sub-surface leakage currents',
                explanationEn:
                  'ESD discharges thousands of volts in nanoseconds, puncturing ultra-thin MOSFET gate oxide layers and creating invisible internal leakage paths.',
                explanationPa:
                  'ESD ਹਜ਼ਾਰਾਂ ਵੋਲਟ ਦੇ ਝਟਕੇ ਨਾਲ ਨੈਨੋਮੀਟਰ ਪਤਲੀ ਗੇਟ ਆਕਸਾਈਡ ਨੂੰ ਪੰਕਚਰ ਕਰ ਦਿੰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Tin Whiskers Mechanism',
                promptEn: 'What are tin whiskers and why do they cause unexpected electronic failures?',
                promptPa: 'ਟਿਨ ਵਿਸਕਰਜ਼ ਕੀ ਹਨ ਅਤੇ ਇਹ ਅਚਾਨਕ ਖ਼ਰਾਬੀ ਕਿਉਂ ਕਰਦੇ ਹਨ?',
                optionsJson: [
                  'Spontaneous mono-crystalline conductive filaments growing from pure tin plating that bridge adjacent pins',
                  'Braided copper ground wires inside power supplies',
                  'Silicone thermal paste applied beneath heat sinks',
                  'Flexible flat cables connecting LCD displays',
                ],
                correctAnswer: 'Spontaneous mono-crystalline conductive filaments growing from pure tin plating that bridge adjacent pins',
                explanationEn:
                  'Tin whiskers grow from pure tin coatings under compressive stress, bridging fine-pitch IC pins and causing intermittent shorts.',
                explanationPa:
                  'ਸ਼ੁੱਧ ਟਿਨ ਤੋਂ ਉੱਗਣ ਵਾਲੇ ਬਰੀਕ ਵਾਲ ਵਰਗੇ ਕੰਡਕਟਰ ਜੋ ਨਾਲ ਲੱਗਦੀਆਂ ਪਿੰਨਾਂ ਨੂੰ ਸ਼ਾਰਟ ਕਰ ਦਿੰਦੇ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Desoldering Wick Technique',
                promptEn: 'What is the correct technique for using desoldering wick to clean solder from delicate PCB pads?',
                promptPa: 'ਡੀਸੋਲਡਰਿੰਗ ਵਿੱਕ ਨਾਲ ਪੈਡ ਸਾਫ਼ ਕਰਦੇ ਸਮੇਂ ਪੈਡ ਉੱਖੜਨ ਤੋਂ ਬਚਾਉਣ ਦਾ ਸਹੀ ਤਰੀਕਾ ਕੀ ਹੈ?',
                optionsJson: [
                  'Apply flux, let capillary action draw the molten solder into the braid, and lift straight up without dragging sideways',
                  'Scrub the braid vigorously across the pads like sandpaper',
                  'Pull the wick away quickly before the solder has melted',
                  'Use zero flux and maximize soldering iron temperature to 480°C',
                ],
                correctAnswer: 'Apply flux, let capillary action draw the molten solder into the braid, and lift straight up without dragging sideways',
                explanationEn:
                  'Capillary action draws solder into the fluxed braid. Dragging braid sideways while partially solidified shears pads off the PCB substrate.',
                explanationPa:
                  'ਫਲੈਕਸ ਲਗਾ ਕੇ ਕੈਪਿਲਰੀ ਐਕਸ਼ਨ ਨਾਲ ਸੋਲਡਰ ਖਿੱਚਣ ਦਿਓ ਅਤੇ ਬਿਨਾਂ ਘੜੀਸੇ ਸਿੱਧਾ ਉੱਪਰ ਚੁੱਕੋ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Root Cause Analysis Goal',
                promptEn: 'What is the ultimate purpose of performing a Root Cause Analysis (RCA) on failed equipment?',
                promptPa: 'ਖ਼ਰਾਬ ਹੋਏ ਯੰਤਰ ਦਾ ਰੂਟ ਕਾਜ਼ ਐਨਾਲਿਸਿਸ (RCA) ਕਰਨ ਦਾ ਮੁੱਖ ਮਕਸਦ ਕੀ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'To uncover the root physical failure mechanism and enact design or assembly controls to prevent recurrence',
                  'To assign blame to the assembly line operator',
                  'To inflate the repair bill for the customer',
                  'To dispose of old repair tools and buy new ones',
                ],
                correctAnswer: 'To uncover the root physical failure mechanism and enact design or assembly controls to prevent recurrence',
                explanationEn:
                  'RCA focuses on systemic and physical prevention (e.g. adding TVS protection or improving heat sinking) so identical field failures never happen again.',
                explanationPa:
                  'ਨੁਕਸ ਦੇ ਅਸਲ ਭੌਤਿਕ ਕਾਰਨ ਨੂੰ ਸਮਝ ਕੇ ਡਿਜ਼ਾਈਨ ਸੁਧਾਰਨਾ ਤਾਂ ਜੋ ਉਹੀ ਨੁਕਸ ਦੁਬਾਰਾ ਕਦੇ ਨਾ ਆਵੇ।',
              },
            ],
          },
        },
      ],
    },
  ],
};
