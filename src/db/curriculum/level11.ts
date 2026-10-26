import { SeedCourse } from './types.ts';

export const LEVEL_11_COURSE: SeedCourse = {
  slug: 'level-11-advanced-engineering',
  levelNumber: 11,
  titleEn: 'Level 11: Advanced Engineering',
  titlePa: 'ਲੈਵਲ 11: ਐਡਵਾਂਸਡ ਇੰਜੀਨੀਅਰਿੰਗ (Advanced Engineering)',
  descriptionEn:
    'Closed-loop control systems, PID controller tuning, sensor integration, H-bridge motor drivers (BLDC/stepper), robotics kinematics, safety-critical dual-core lockstep, MTBF reliability, FMEA risk analysis, and CE/FCC/RoHS regulatory compliance.',
  descriptionPa:
    'ਕਲੋਜ਼ਡ-ਲੂਪ ਕੰਟਰੋਲ, PID ਰੈਗੂਲੇਸ਼ਨ, ਸੈਂਸਰ ਅਤੇ ਐਕਚੂਏਟਰ (BLDC, ਸਟੈਪਰ ਮੋਟਰ), ਰੋਬੋਟਿਕਸ, MTBF ਭਰੋਸੇਯੋਗਤਾ, FMEA ਰਿਸਕ ਐਨਾਲਿਸਿਸ, ਅਤੇ CE/FCC/RoHS ਸਰਟੀਫਿਕੇਸ਼ਨ।',
  category: 'advanced-electronics',
  estimatedHours: 22,
  modules: [
    {
      orderIndex: 1,
      titleEn: 'Closed-Loop Control, PID Tuning & Actuator Drive Systems',
      titlePa: 'ਕਲੋਜ਼ਡ-ਲੂਪ ਕੰਟਰੋਲ, PID ਟਿਊਨਿੰਗ ਅਤੇ ਮੋਟਰ ਡਰਾਈਵ ਸਿਸਟਮ',
      summaryEn:
        'Feedback control physics, Proportional-Integral-Derivative (PID) algorithm implementation, anti-windup, PT100 RTDs, H-bridges, stepper microstepping, and BLDC motor commutation.',
      summaryPa:
        'ਫੀਡਬੈਕ ਕੰਟਰੋਲ, PID ਐਲਗੋਰਿਦਮ, ਐਂਟੀ-ਵਾਈਂਡਅੱਪ, H-ਬ੍ਰਿਜ ਮੋਟਰ ਡਰਾਈਵਰ, ਸਟੈਪਰ ਮਾਈਕ੍ਰੋਸਟੈਪਿੰਗ, ਅਤੇ ਬੁਰਸ਼ਲੈੱਸ (BLDC) ਮੋਟਰ ਕੰਟਰੋਲ।',
      lessons: [
        {
          slug: 'control-systems-pid-sensors-actuators',
          orderIndex: 1,
          titleEn: '11.1 Control Systems, PID Tuning, Sensors & H-Bridge Motor Drivers',
          titlePa: '11.1 ਕੰਟਰੋਲ ਸਿਸਟਮ, PID ਟਿਊਨਿੰਗ, ਸੈਂਸਰ ਅਤੇ H-ਬ੍ਰਿਜ ਮੋਟਰ ਡਰਾਈਵਰ',
          objectivesJson: [
            'Differentiate open-loop from closed-loop feedback systems using error signals e(t) = setpoint - measurement',
            'Implement discrete PID control algorithms: Proportional (present), Integral (past offset elimination), and Derivative (future damping)',
            'Prevent integrator windup saturation using clamping and back-calculation algorithms',
            'Drive DC, stepper, and BLDC motors using full H-bridge MOSFET stages with shoot-through dead-time insertion',
          ],
          prerequisitesJson: ['Level 4: Analog Electronics & Level 8: Microcontrollers'],
          childAnalogyEn:
            'Think of driving a tractor on a straight path in your fields! An Open-Loop driver closes their eyes and points the steering wheel forward: within 10 seconds, the tractor drifts into a ditch! A Closed-Loop (PID) driver watches the furrow with their eyes: Proportional (P) steers back toward the center; Integral (I) corrects for a sloped hill pulling the tractor sideways; and Derivative (D) gently steadies the steering wheel so you don’t violently swerve back and forth!',
          childAnalogyPa:
            'ਖੇਤ ਵਿੱਚ ਸਿੱਧਾ ਟਰੈਕਟਰ ਚਲਾਉਣ ਦੀ ਕਲਪਨਾ ਕਰੋ! ਓਪਨ-ਲੂਪ ਡਰਾਈਵਰ ਅੱਖਾਂ ਬੰਦ ਕਰਕੇ ਸਟੇਅਰਿੰਗ ਸਿੱਧਾ ਫੜ ਲੈਂਦਾ ਹੈ—10 ਸਕਿੰਟਾਂ ਵਿੱਚ ਟਰੈਕਟਰ ਖਾਲ ਵਿੱਚ ਜਾ ਡਿੱਗਦਾ ਹੈ! ਕਲੋਜ਼ਡ-ਲੂਪ (PID) ਡਰਾਈਵਰ ਅੱਖਾਂ ਖੁੱਲ੍ਹੀਆਂ ਰੱਖਦਾ ਹੈ: P (ਪ੍ਰਪੋਰਸ਼ਨਲ) ਟਰੈਕਟਰ ਨੂੰ ਸਿੱਧਾ ਮੋੜਦਾ ਹੈ; I (ਇੰਟੀਗ੍ਰਲ) ਢਲਾਨ ਕਾਰਨ ਇੱਕ ਪਾਸੇ ਖਿੱਚੇ ਜਾਣ ਵਾਲੇ ਲਗਾਤਾਰ ਫ਼ਰਕ ਨੂੰ ਮਿਟਾਉਂਦਾ ਹੈ; ਅਤੇ D (ਡੈਰੀਵੇਟਿਵ) ਸਟੇਅਰਿੰਗ ਨੂੰ ਝਟਕੇ ਮਾਰਨ ਤੋਂ ਰੋਕ ਕੇ ਬਿਲਕੁਲ ਮੱਖਣ ਵਾਂਗ ਸਿੱਧਾ ਰੱਖਦਾ ਹੈ!',
          technicalExplanationEn:
            'Control engineering regulates physical dynamical processes to follow desired setpoints despite external disturbances:\n\n1. Feedback Control & Error Function:\n• Error Signal: e(t) = r(t) - y(t) (where r(t) is reference setpoint, y(t) is measured process variable).\n• PID Continuous Law: u(t) = K_p * e(t) + K_i * ∫ e(τ) dτ + K_d * [de(t) / dt].\n  - Proportional (Kp): Reacts to present error. High Kp increases speed but causes overshoot.\n  - Integral (Ki): Eliminates residual steady-state offset error by accumulating past error. If actuator saturates, integral term explodes ("Integrator Windup"), requiring anti-windup clamping.\n  - Derivative (Kd): Predicts future trajectory based on rate of error change, adding braking damping to suppress oscillation.\n\n2. Discrete Time Algorithm for Microcontrollers:\nu[n] = K_p * e[n] + K_i * sum_error * Δt + K_d * [(e[n] - e[n-1]) / Δt].\n\n3. Sensors:\n• RTD (PT100/PT1000): Platinum resistor exhibiting ultra-linear resistance increase with temperature (100.0 Ω at 0°C, 138.5 Ω at 100°C).\n• IMU (Inertial Measurement Unit): 3-axis MEMS accelerometer + 3-axis gyroscope combined via Kalman filter or Madgwick filter for pitch/roll orientation.\n\n4. H-Bridge & Motor Drive Mechanics:\n• 4 MOSFETs arranged in an "H" shape around a DC motor:\n  - Forward: Q1 (High-side Left) and Q4 (Low-side Right) ON.\n  - Reverse: Q2 (High-side Right) and Q3 (Low-side Left) ON.\n  - Shoot-Through Catastrophe: Turning on Q1 and Q3 simultaneously creates a direct dead short-circuit across the power supply. Hardware gate drivers enforce a mandatory "Dead-Time" delay (100 ns - 1 µs) where all switches are off between commutations.',
          technicalExplanationPa:
            'ਕੰਟਰੋਲ ਇੰਜੀਨੀਅਰਿੰਗ ਅਤੇ ਮੋਟਰ ਡਰਾਈਵਰ:\n\n1. PID ਕੰਟਰੋਲਰ:\nਰੋਬੋਟਾਂ ਦੀ ਸਪੀਡ, ਡਰੋਨ ਦਾ ਸੰਤੁਲਨ ਅਤੇ ਤਾਪਮਾਨ ਸਥਿਰ ਰੱਖਣ ਵਾਲਾ ਮੁੱਖ ਐਲਗੋਰਿਦਮ:\n• P (ਪ੍ਰਪੋਰਸ਼ਨਲ): ਮੌਜੂਦਾ ਗਲਤੀ ਅਨੁਸਾਰ ਤਾਕਤ ਲਗਾਉਂਦਾ ਹੈ।\n• I (ਇੰਟੀਗ੍ਰਲ): ਬਚੇ ਹੋਏ ਥੋੜ੍ਹੇ ਜਿਹੇ ਫ਼ਰਕ ਨੂੰ ਜ਼ੀਰੋ ਕਰਦਾ ਹੈ।\n• D (ਡੈਰੀਵੇਟਿਵ): ਝਟਕੇ ਅਤੇ ਕੰਬਣੀ ਨੂੰ ਸ਼ਾਂਤ ਕਰਦਾ ਹੈ।\n\n2. H-ਬ੍ਰਿਜ ਮੋਟਰ ਡਰਾਈਵਰ (H-Bridge):\nਚਾਰ ਪਾਵਰ MOSFETs ਦਾ ਬਣਿਆ ਹੁੰਦਾ ਹੈ ਜੋ DC ਮੋਟਰ ਨੂੰ ਅੱਗੇ ਅਤੇ ਪਿੱਛੇ ਦੋਵੇਂ ਪਾਸੇ ਘੁੰਮਾ ਸਕਦਾ ਹੈ।\n• ਡੈੱਡ-ਟਾਈਮ (Dead-Time): ਇੱਕ ਪਾਸਾ ਬੰਦ ਹੋਣ ਅਤੇ ਦੂਜਾ ਚਾਲੂ ਹੋਣ ਵਿਚਕਾਰ ਨੈਨੋਸਕਿੰਟਾਂ ਦਾ ਵਕਫ਼ਾ ਰੱਖਣਾ ਲਾਜ਼ਮੀ ਹੈ, ਨਹੀਂ ਤਾਂ ਦੋਵੇਂ ਟ੍ਰਾਂਜਿਸਟਰ ਇਕੱਠੇ ਆਨ ਹੋ ਕੇ ਸ਼ਾਰਟ ਸਰਕਟ ਨਾਲ ਫਟ ਜਾਣਗੇ (Shoot-Through)।\n\n3. ਸਟੈਪਰ ਮੋਟਰ ਮਾਈਕ੍ਰੋਸਟੈਪਿੰਗ (Microstepping):\nਮੋਟਰ ਨੂੰ ਝਟਕਿਆਂ ਨਾਲ ਘੁੰਮਾਉਣ ਦੀ ਬਜਾਏ ਨਿਰਵਿਘਨ ਸਾਈਨ ਵੇਵ ਕਰੰਟ ਦੇ ਕੇ 1/16 ਜਾਂ 1/32 ਕਦਮਾਂ ਵਿੱਚ ਘੁਮਾਉਂਦਾ ਹੈ, ਜਿਸ ਨਾਲ 3D ਪ੍ਰਿੰਟਰ ਬਿਨਾਂ ਆਵਾਜ਼ ਦੇ ਚਲਦੇ ਹਨ।',
          practicalExampleEn:
            'Quadcopter drone altitude and roll stabilization: An onboard 6-axis IMU reads gyroscope angular velocity at 1 kHz. If a sudden gust of wind tilts the drone 10 degrees to the left, the flight controller computes the tilt error. The PID loop calculates an immediate correction within 1 millisecond: Kp quickly boosts right-motor PWM, Ki eliminates tilt drift, and Kd counters motor overshoot. The drone remains rock-solid stationary in mid-air.',
          practicalExamplePa:
            'ਡਰੋਨ ਦਾ ਹਵਾ ਵਿੱਚ ਸੰਤੁਲਨ: ਜਦੋਂ ਤੇਜ਼ ਹਵਾ ਡਰੋਨ ਨੂੰ ਇੱਕ ਪਾਸੇ ਝੁਕਾਉਂਦੀ ਹੈ, ਤਾਂ IMU ਸੈਂਸਰ 1 ਮਿਲੀਸਕਿੰਟ ਵਿੱਚ ਗਲਤੀ ਫੜਦਾ ਹੈ। PID ਕੰਟਰੋਲਰ ਤੁਰੰਤ ਖੱਬੇ ਪਾਸੇ ਵਾਲੀ ਮੋਟਰ ਦੀ ਸਪੀਡ ਵਧਾ ਕੇ ਡਰੋਨ ਨੂੰ ਵਾਪਸ ਬਿਲਕੁਲ ਸਿੱਧਾ ਖੜ੍ਹਾ ਕਰ ਦਿੰਦਾ ਹੈ ਤਾਂ ਜੋ ਉਹ ਜ਼ਮੀਨ ਤੇ ਨਾ ਡਿੱਗੇ।',
          codeDemo: `// TypeScript: Discrete PID Controller with Anti-Windup Clamping
export class PidController {
  private kp: number;
  private ki: number;
  private kd: number;
  private minOutput: number;
  private maxOutput: number;
  private integralSum = 0;
  private lastError = 0;

  constructor(kp: number, ki: number, kd: number, minOutput: number, maxOutput: number) {
    this.kp = kp;
    this.ki = ki;
    this.kd = kd;
    this.minOutput = minOutput;
    this.maxOutput = maxOutput;
  }

  public compute(setpoint: number, measurement: number, dtSeconds: number): number {
    const error = setpoint - measurement;
    
    // Proportional term
    const pTerm = this.kp * error;

    // Integral term with anti-windup clamping
    this.integralSum += error * dtSeconds;
    const iTerm = this.ki * this.integralSum;

    // Derivative term
    const dTerm = this.kd * ((error - this.lastError) / dtSeconds);
    this.lastError = error;

    let output = pTerm + iTerm + dTerm;

    // Clamp output within physical actuator limits
    if (output > this.maxOutput) {
      output = this.maxOutput;
      this.integralSum -= error * dtSeconds; // Freeze integrator
    } else if (output < this.minOutput) {
      output = this.minOutput;
      this.integralSum -= error * dtSeconds; // Freeze integrator
    }

    return output;
  }
}

// Verification: Speed control targeting 1000 RPM from 800 RPM:
const pid = new PidController(1.5, 0.5, 0.1, 0, 100);
const outPwm = pid.compute(1000, 800, 0.010);
console.log('PID Control Output:', outPwm.toFixed(1), '% PWM'); // e=200 -> clamped or high effort`,
          misconceptionsJson: [
            {
              myth: 'Setting a huge Integral gain (Ki) makes a PID controller respond faster to sudden setpoint jumps.',
              truthEn:
                'Integral gain acts on accumulated historical error over time. Setting Ki too high introduces severe phase lag into the closed loop, causing massive overshoot, sluggish recovery, and violent self-sustaining oscillation.',
              truthPa:
                'Ki ਨੂੰ ਬਹੁਤ ਵੱਡਾ ਕਰਨ ਨਾਲ ਸਿਸਟਮ ਤੇਜ਼ ਨਹੀਂ ਹੁੰਦਾ, ਸਗੋਂ ਇਹ ਝੂਲਣ (Oscillate) ਲੱਗ ਪੈਂਦਾ ਹੈ ਅਤੇ ਆਪਣੀ ਮੰਜ਼ਿਲ ਤੋਂ ਬਹੁਤ ਅੱਗੇ ਲੰਘ ਕੇ ਓਵਰਸ਼ੂਟ ਕਰਦਾ ਹੈ।',
            },
            {
              myth: 'An H-bridge can switch instantly from forward driving to reverse without any delay.',
              truthEn:
                'Power MOSFETs have finite turn-off delays due to gate capacitance and stored charge. Switching an H-bridge leg from low to high without an explicit dead-time (typically 100 ns to 1 µs) creates cross-conduction ("shoot-through"), which instantly destroys the bridge in a cloud of smoke.',
              truthPa:
                'H-ਬ੍ਰਿਜ ਨੂੰ ਬਿਨਾਂ ਡੈੱਡ-ਟਾਈਮ ਦੇ ਅੱਗੇ ਤੋਂ ਪਿੱਛੇ ਨਹੀਂ ਘੁਮਾਇਆ ਜਾ ਸਕਦਾ। ਜੇਕਰ ਬੰਦ ਹੋਣ ਅਤੇ ਚੱਲਣ ਵਿਚਕਾਰ ਥੋੜ੍ਹੀ ਦੇਰੀ ਨਾ ਰੱਖੀ ਜਾਵੇ, ਤਾਂ ਦੋਵੇਂ ਪਾਸੇ ਸ਼ਾਰਟ ਹੋ ਕੇ ਟ੍ਰਾਂਜਿਸਟਰ ਫਟ ਜਾਣਗੇ।',
            },
            {
              myth: 'A stepper motor with 200 steps per revolution (1.8°/step) running with 1/16 microstepping has 0.1125° mechanical accuracy.',
              truthEn:
                'Microstepping provides silky-smooth motion and eliminates mechanical resonance, but incremental torque at fractional microsteps drops dramatically. Magnetic detent torque and mechanical friction limit real positional accuracy to roughly ±1/2 full step unless closed-loop encoder feedback is added.',
              truthPa:
                'ਮਾਈਕ੍ਰੋਸਟੈਪਿੰਗ ਆਵਾਜ਼ ਅਤੇ ਕੰਬਣੀ ਖ਼ਤਮ ਕਰਦੀ ਹੈ, ਪਰ ਅਸਲ ਮਕੈਨੀਕਲ ਸ਼ੁੱਧਤਾ ਇੰਨੀ ਜ਼ਿਆਦਾ ਨਹੀਂ ਹੁੰਦੀ ਕਿਉਂਕਿ ਨਿੱਕੇ ਕਦਮਾਂ ਤੇ ਚੁੰਬਕੀ ਤਾਕਤ ਬਹੁਤ ਘੱਟ ਹੁੰਦੀ ਹੈ।',
            },
          ],
          terminologyJson: [
            {
              term: 'PID Controller',
              punjabi: 'PID ਕੰਟਰੋਲਰ',
              meaningEn: 'Feedback control loop mechanism calculating an error value as difference between desired setpoint and measured process variable.',
              meaningPa: 'ਟੀਚੇ ਅਤੇ ਅਸਲ ਮਾਪ ਦੇ ਫ਼ਰਕ ਨੂੰ ਮਿਟਾ ਕੇ ਸਿਸਟਮ ਨੂੰ ਸਹੀ ਰੱਖਣ ਵਾਲਾ ਗਣਿਤਕ ਕੰਟਰੋਲਰ।',
            },
            {
              term: 'Dead-Time',
              punjabi: 'ਡੈੱਡ-ਟਾਈਮ (Dead-Time)',
              meaningEn: 'Intentional switching delay inserted between turning off one transistor and turning on the opposing transistor in a half-bridge.',
              meaningPa: 'ਸ਼ਾਰਟ ਸਰਕਟ (Shoot-through) ਤੋਂ ਬਚਣ ਲਈ ਦੋ ਟ੍ਰਾਂਜਿਸਟਰਾਂ ਦੇ ਚੱਲਣ ਵਿਚਕਾਰ ਰੱਖੀ ਗਈ ਨੈਨੋਸਕਿੰਟਾਂ ਦੀ ਦੇਰੀ।',
            },
            {
              term: 'Anti-Windup',
              punjabi: 'ਐਂਟੀ-ਵਾਈਂਡਅੱਪ',
              meaningEn: 'Technique that clamps or suspends integral error accumulation when an actuator has reached its physical saturation limit.',
              meaningPa: 'ਮੋਟਰ ਜਾਂ ਵਾਲਵ ਦੇ ਪੂਰਾ ਖੁੱਲ੍ਹਣ ਤੇ ਇੰਟੀਗ੍ਰਲ ਨੂੰ ਬੇਕਾਬੂ ਹੋਣ ਤੋਂ ਰੋਕਣ ਵਾਲਾ ਸੁਰੱਖਿਆ ਨਿਯਮ।',
            },
            {
              term: 'BLDC Motor',
              punjabi: 'ਬੁਰਸ਼ਲੈੱਸ DC ਮੋਟਰ (BLDC)',
              meaningEn: 'Synchronous electric motor powered by DC electricity via an electronic commutation controller rather than mechanical carbon brushes.',
              meaningPa: 'ਬਿਨਾਂ ਕਾਰਬਨ ਬੁਰਸ਼ਾਂ ਵਾਲੀ ਮੋਟਰ ਜੋ ਇਲੈਕਟ੍ਰਾਨਿਕ ਸਵਿਚਿੰਗ ਨਾਲ ਚੱਲਦੀ ਹੈ (ਜਿਵੇਂ ਡਰੋਨ ਜਾਂ EV ਮੋਟਰ)।',
            },
            {
              term: 'Microstepping',
              punjabi: 'ਮਾਈਕ੍ਰੋਸਟੈਪਿੰਗ',
              meaningEn: 'Technique for driving stepper motor windings with sine/cosine currents to position the rotor between discrete step teeth.',
              meaningPa: 'ਸਟੈਪਰ ਮੋਟਰ ਦੇ ਕਦਮਾਂ ਨੂੰ ਬਰੀਕ ਹਿੱਸਿਆਂ (ਜਿਵੇਂ 1/16) ਵਿੱਚ ਵੰਡ ਕੇ ਬਿਨਾਂ ਆਵਾਜ਼ ਦੇ ਘੁਮਾਉਣਾ।',
            },
            {
              term: 'RTD (PT100)',
              punjabi: 'PT100 ਤਾਪਮਾਨ ਸੈਂਸਰ',
              meaningEn: 'Platinum Resistance Temperature Detector exhibiting 100.00 Ω at 0 °C with extreme international precision.',
              meaningPa: 'ਪਲੈਟੀਨਮ ਦਾ ਬਣਿਆ ਉਦਯੋਗਿਕ ਤਾਪਮਾਨ ਸੈਂਸਰ ਜੋ 0°C ਉੱਤੇ 100 ਓਹਮ ਰਜਿਸਟੈਂਸ ਦਿੰਦਾ ਹੈ।',
            },
          ],
          interactiveLabId: 'transistor-switch',
          exercisePromptEn:
            'PID & Motor Analysis: (1) A stepper motor has 200 full steps per revolution (1.8° step angle). If configured with 1/16 microstepping, calculate the microstep angle in degrees. (2) Explain why an anti-windup clamping algorithm is essential in a temperature oven PID controller when the lid is left open.',
          exercisePromptPa:
            'PID ਅਤੇ ਮੋਟਰ ਵਿਸ਼ਲੇਸ਼ਣ: (1) 200 ਕਦਮਾਂ (1.8° ਪ੍ਰਤੀ ਕਦਮ) ਵਾਲੀ ਸਟੈਪਰ ਮੋਟਰ ਨੂੰ 1/16 ਮਾਈਕ੍ਰੋਸਟੈਪਿੰਗ ਉੱਤੇ ਚਲਾਉਣ ਤੇ ਇੱਕ ਮਾਈਕ੍ਰੋਸਟੈਪ ਦਾ ਕੋਣ (ਡਿਗਰੀਆਂ) ਕੀ ਹੋਵੇਗਾ? (2) ਸਮਝਾਓ ਕਿ ਓਵਨ ਦਾ ਢੱਕਣ ਖੁੱਲ੍ਹਾ ਰਹਿਣ ਤੇ ਤਾਪਮਾਨ ਕੰਟਰੋਲਰ ਵਿੱਚ ਐਂਟੀ-ਵਾਈਂਡਅੱਪ (Anti-windup) ਲਗਾਉਣਾ ਕਿਉਂ ਜ਼ਰੂਰੀ ਹੈ।',
          summaryEn:
            'Closed-loop feedback control and advanced motor actuation transform silicon intelligence into physical movement: PID controllers eliminate steady-state offsets and dead-time protected H-bridges drive high-torque BLDC and stepper motors.',
          summaryPa:
            'ਕਲੋਜ਼ਡ-ਲੂਪ ਕੰਟਰੋਲ ਅਤੇ ਮੋਟਰਾਂ ਇਲੈਕਟ੍ਰੋਨਿਕਸ ਨੂੰ ਅਸਲ ਤਾਕਤ ਦਿੰਦੀਆਂ ਹਨ: PID ਕੰਟਰੋਲਰ ਗਲਤੀਆਂ ਨੂੰ ਜ਼ੀਰੋ ਕਰਦੇ ਹਨ ਅਤੇ ਡੈੱਡ-ਟਾਈਮ ਵਾਲੇ H-ਬ੍ਰਿਜ ਰੋਬੋਟਾਂ ਦੀਆਂ ਮੋਟਰਾਂ ਨੂੰ ਸ਼ੁੱਧਤਾ ਨਾਲ ਚਲਾਉਂਦੇ ਹਨ।',
          furtherReadingJson: [
            'Modern Control Engineering (5th Edition) by Katsuhiko Ogata',
            'Feedback Control of Dynamic Systems by Gene F. Franklin, J. David Powell, Abbas Emami-Naeini',
            'Electric Motors and Drives: Fundamentals, Types and Applications by Austin Hughes & Bill Drury',
          ],
          quiz: {
            titleEn: 'Level 11 Assessment: Control Systems, PID & Motor Drivers',
            titlePa: 'ਲੈਵਲ 11 ਟੈਸਟ: ਕੰਟਰੋਲ ਸਿਸਟਮ, PID ਅਤੇ ਮੋਟਰ ਡਰਾਈਵਰ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'PID Integral',
                promptEn: 'What is the primary operational function of the Integral (I) term in a closed-loop PID controller?',
                promptPa: 'PID ਕੰਟਰੋਲਰ ਵਿੱਚ Integral (I) ਟਰਮ ਦਾ ਮੁੱਖ ਕੰਮ ਕੀ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'To eliminate residual steady-state offset error by accumulating past error over time',
                  'To predict future errors based on rate of change',
                  'To filter out high-frequency noise',
                  'To invert the output polarity',
                ],
                correctAnswer: 'To eliminate residual steady-state offset error by accumulating past error over time',
                explanationEn:
                  'Proportional action alone requires a permanent steady-state error to produce output. The Integral term integrates this error over time, forcing steady-state error to zero.',
                explanationPa:
                  'ਸਮੇਂ ਦੇ ਨਾਲ ਬਚੇ ਹੋਏ ਲਗਾਤਾਰ ਫ਼ਰਕ (Steady-State Error) ਨੂੰ ਜੋੜ ਕੇ ਬਿਲਕੁਲ ਜ਼ੀਰੋ ਕਰਨਾ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Integrator Windup',
                promptEn: 'What is "Integrator Windup" in an industrial PID controller?',
                promptPa: 'PID ਕੰਟਰੋਲਰ ਵਿੱਚ "Integrator Windup" ਕਿਸਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
                optionsJson: [
                  'Excessive accumulation of the integral term while the actuator is physically saturated at 100%, causing massive overshoot delay',
                  'A physical spring winding up inside the motor',
                  'A clock frequency multiplier bug',
                  'A loss of electrical power',
                ],
                correctAnswer: 'Excessive accumulation of the integral term while the actuator is physically saturated at 100%, causing massive overshoot delay',
                explanationEn:
                  'If an actuator is saturated at 100%, error persists and the integral term keeps accumulating to massive values. When setpoint is reached, it takes a long time to unwind.',
                explanationPa:
                  'ਜਦੋਂ ਮੋਟਰ ਜਾਂ ਵਾਲਵ ਪੂਰਾ 100% ਖੁੱਲ੍ਹ ਚੁੱਕਾ ਹੋਵੇ ਪਰ ਇੰਟੀਗ੍ਰਲ ਫਿਰ ਵੀ ਵਧਦਾ ਰਹੇ, ਜਿਸ ਨਾਲ ਬਾਅਦ ਵਿੱਚ ਬਹੁਤ ਵੱਡਾ ਓਵਰਸ਼ੂਟ ਹੁੰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'H-Bridge Shoot-Through',
                promptEn: 'What causes catastrophic "shoot-through" in an H-bridge motor driver?',
                promptPa: 'H-ਬ੍ਰਿਜ ਮੋਟਰ ਡਰਾਈਵਰ ਵਿੱਚ "Shoot-Through" ਧਮਾਕਾ ਕਿਸ ਕਾਰਨ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'Turning on both the top and bottom MOSFETs on the same bridge leg simultaneously, creating a direct short circuit across the power supply',
                  'Reversing the motor direction too slowly',
                  'Running the motor without load',
                  'Applying low voltage to the gate',
                ],
                correctAnswer: 'Turning on both the top and bottom MOSFETs on the same bridge leg simultaneously, creating a direct short circuit across the power supply',
                explanationEn:
                  'If high-side and low-side switches on one half-bridge conduct at the same time, power rail connects directly to ground through milliohm silicon, causing an instant explosion.',
                explanationPa:
                  'ਇੱਕੋ ਪਾਸੇ ਦੇ ਉੱਪਰਲੇ ਅਤੇ ਹੇਠਲੇ ਦੋਵੇਂ MOSFET ਇਕੱਠੇ ਆਨ ਹੋ ਜਾਣ ਨਾਲ ਸਿੱਧਾ ਸ਼ਾਰਟ ਸਰਕਟ ਹੋ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Dead-Time Insertion',
                promptEn: 'How do motor driver ICs prevent shoot-through during PWM switching transitions?',
                promptPa: 'ਮੋਟਰ ਡਰਾਈਵਰ ICs ਸ਼ੂਟ-ਥਰੂ ਤੋਂ ਬਚਣ ਲਈ ਕੀ ਕਰਦੇ ਹਨ?',
                optionsJson: [
                  'By inserting a hardware "dead-time" delay where both top and bottom transistors are turned completely OFF before turning on the opposing transistor',
                  'By running on AC mains',
                  'By using carbon resistors in series',
                  'By cooling the motor with liquid nitrogen',
                ],
                correctAnswer: 'By inserting a hardware "dead-time" delay where both top and bottom transistors are turned completely OFF before turning on the opposing transistor',
                explanationEn:
                  'Dead-time (typically 100 ns to 1 µs) ensures the outgoing MOSFET has completely turned off and discharged its gate before the incoming MOSFET turns on.',
                explanationPa:
                  'ਡੈੱਡ-ਟਾਈਮ (Dead-Time) ਦੇਰੀ ਲਗਾ ਕੇ, ਜਿਸ ਵਿੱਚ ਪੁਰਾਣੇ ਟ੍ਰਾਂਜਿਸਟਰ ਨੂੰ ਪੂਰਾ ਬੰਦ ਕਰਨ ਤੋਂ ਬਾਅਦ ਹੀ ਨਵਾਂ ਚਾਲੂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'PT100 Nominal Resistance',
                promptEn: 'What is the electrical resistance of an industry-standard platinum RTD PT100 temperature sensor at exactly 0.0 °C?',
                promptPa: 'ਬਿਲਕੁਲ 0.0 °C ਉੱਤੇ PT100 ਪਲੈਟੀਨਮ ਸੈਂਸਰ ਦੀ ਰਜਿਸਟੈਂਸ ਕਿੰਨੀ ਹੁੰਦੀ ਹੈ?',
                optionsJson: ['100.00 Ω', '0.00 Ω', '1000.0 Ω', '10.00 Ω'],
                correctAnswer: '100.00 Ω',
                explanationEn:
                  'By definition (IEC 60751), a PT100 sensor has a resistance of precisely 100.00 Ω at 0 °C (and PT1000 has 1000 Ω at 0 °C).',
                explanationPa:
                  'ਨਾਮ ਅਨੁਸਾਰ (PT100), 0°C ਉੱਤੇ ਇਸਦੀ ਰਜਿਸਟੈਂਸ ਠੀਕ 100.00 Ω ਹੁੰਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Microstepping Calculation',
                promptEn: 'A stepper motor with 200 full steps per revolution (1.8° step angle) is driven with 1/16 microstepping. What is the step angle of each microstep?',
                promptPa: '1.8° ਸਟੈੱਪ ਐਂਗਲ ਵਾਲੀ ਮੋਟਰ ਨੂੰ 1/16 ਮਾਈਕ੍ਰੋਸਟੈਪਿੰਗ ਤੇ ਚਲਾਉਣ ਤੇ ਹਰੇਕ ਮਾਈਕ੍ਰੋਸਟੈੱਪ ਦਾ ਕੋਣ ਕਿੰਨਾ ਹੋਵੇਗਾ?',
                optionsJson: ['0.1125 degrees', '1.8 degrees', '0.225 degrees', '0.05625 degrees'],
                correctAnswer: '0.1125 degrees',
                explanationEn:
                  'Microstep angle = 1.8° / 16 = 0.1125° per microstep pulse (requiring 3200 microsteps per full revolution).',
                explanationPa:
                  'ਕੋਣ = 1.8 / 16 = 0.1125 ਡਿਗਰੀ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'PID Derivative Role',
                promptEn: 'What is the role of the Derivative (D) term in a closed-loop PID motion controller?',
                promptPa: 'PID ਮੋਸ਼ਨ ਕੰਟਰੋਲਰ ਵਿੱਚ Derivative (D) ਟਰਮ ਦਾ ਕੀ ਰੋਲ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'To act as an electronic brake (damping) by opposing the rate of change of error, suppressing overshoot and oscillation',
                  'To eliminate steady-state offset',
                  'To maximize actuator speed when far from setpoint',
                  'To double the motor torque',
                ],
                correctAnswer: 'To act as an electronic brake (damping) by opposing the rate of change of error, suppressing overshoot and oscillation',
                explanationEn:
                  'Derivative term is proportional to de/dt. When the system approaches setpoint rapidly, de/dt is negative, acting as a brake that prevents overshoot.',
                explanationPa:
                  'ਇਹ ਬ੍ਰੇਕ (Damping) ਵਾਂਗ ਕੰਮ ਕਰਦੀ ਹੈ ਤਾਂ ਜੋ ਸਿਸਟਮ ਟੀਚੇ ਤੇ ਪਹੁੰਚ ਕੇ ਅੱਗੇ ਨਾ ਲੰਘੇ ਅਤੇ ਕੰਬਣੀ ਸ਼ਾਂਤ ਹੋ ਜਾਵੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'BLDC Commutation',
                promptEn: 'How does a Brushless DC (BLDC) motor controller know when to switch current through each of its 3 phase coils?',
                promptPa: 'ਬੁਰਸ਼ਲੈੱਸ BLDC ਮੋਟਰ ਕੰਟਰੋਲਰ ਨੂੰ ਕਿਵੇਂ ਪਤਾ ਲੱਗਦਾ ਹੈ ਕਿ 3 ਕੁਆਇਲਾਂ ਵਿੱਚ ਕਰੰਟ ਕਦੋਂ ਬਦਲਣਾ ਹੈ?',
                optionsJson: [
                  'Using three internal Hall-effect sensors or measuring Back-EMF zero-crossings on the unpowered phase wire',
                  'By counting clock cycles from a 555 timer',
                  'Using a mechanical copper slip ring',
                  'It switches randomly at 50 Hz',
                ],
                correctAnswer: 'Using three internal Hall-effect sensors or measuring Back-EMF zero-crossings on the unpowered phase wire',
                explanationEn:
                  'Sensored BLDC motors use 3 Hall sensors to detect rotor magnetic pole position. Sensorless controllers monitor Back-EMF zero-crossings on the floating phase.',
                explanationPa:
                  'ਅੰਦਰ ਲੱਗੇ ਤਿੰਨ ਹਾਲ ਸੈਂਸਰਾਂ (Hall Sensors) ਜਾਂ ਬੈਕ-EMF ਵੋਲਟੇਜ ਨਾਪ ਕੇ ਰੋਟਰ ਦੀ ਸਥਿਤੀ ਦਾ ਪਤਾ ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Open-Loop Limitation',
                promptEn: 'Why are open-loop control systems unsuitable for high-precision manufacturing CNC machines?',
                promptPa: 'ਹਾਈ-ਪ੍ਰੀਸੀਜ਼ਨ CNC ਮਸ਼ੀਨਾਂ ਲਈ ਓਪਨ-ਲੂਪ ਕੰਟਰੋਲ ਸਿਸਟਮ ਬੇਕਾਰ ਕਿਉਂ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'Open-loop systems have no sensor feedback to detect or correct for lost steps, cutting tool load friction, or thermal expansion',
                  'Open-loop systems consume too much electricity',
                  'Open-loop systems cannot be programmed in C',
                  'They require liquid cooling',
                ],
                correctAnswer: 'Open-loop systems have no sensor feedback to detect or correct for lost steps, cutting tool load friction, or thermal expansion',
                explanationEn:
                  'Open loop assumes the actuator reached the commanded position. If a tool jams or a stepper slips, the system has zero awareness, ruining the machined part.',
                explanationPa:
                  'ਇਸ ਵਿੱਚ ਕੋਈ ਸੈਂਸਰ ਫੀਡਬੈਕ ਨਹੀਂ ਹੁੰਦਾ। ਜੇਕਰ ਮੋਟਰ ਫਸ ਜਾਵੇ ਜਾਂ ਕਦਮ ਛੁੱਟ ਜਾਵੇ ਤਾਂ ਕੰਪਿਊਟਰ ਨੂੰ ਪਤਾ ਹੀ ਨਹੀਂ ਲੱਗਦਾ ਅਤੇ ਪਾਰਟ ਖ਼ਰਾਬ ਹੋ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Ziegler-Nichols Tuning',
                promptEn: 'In the classic Ziegler-Nichols closed-loop PID tuning method, what is the "Ultimate Gain" (Ku)?',
                promptPa: 'Ziegler-Nichols PID ਟਿਊਨਿੰਗ ਵਿਧੀ ਵਿੱਚ "Ultimate Gain" (Ku) ਕੀ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'The proportional gain (Kp) at which the closed-loop system begins sustained, stable, continuous oscillation with Ki=0 and Kd=0',
                  'The maximum gain before the amplifier burns out',
                  'The ratio of power supply voltage to motor voltage',
                  'The derivative gain multiplied by clock speed',
                ],
                correctAnswer: 'The proportional gain (Kp) at which the closed-loop system begins sustained, stable, continuous oscillation with Ki=0 and Kd=0',
                explanationEn:
                  'With I and D disabled, Kp is slowly increased until the output oscillates continuously at steady amplitude. This value is Ku, and the period is Tu.',
                explanationPa:
                  'ਉਹ ਪ੍ਰਪੋਰਸ਼ਨਲ ਗੇਨ ਜਿੱਥੇ ਸਿਸਟਮ ਲਗਾਤਾਰ ਇੱਕੋ ਜਿਹੀ ਕੰਬਣੀ (Oscillation) ਵਿੱਚ ਆ ਜਾਂਦਾ ਹੈ।',
              },
            ],
          },
        },
        {
          slug: 'robotics-reliability-mtbf-fmea-compliance',
          orderIndex: 2,
          titleEn: '11.2 Robotics, Safety-Critical Systems, MTBF, FMEA & CE/FCC Compliance',
          titlePa: '11.2 ਰੋਬੋਟਿਕਸ, ਸੁਰੱਖਿਆ-ਮੁਖੀ ਸਿਸਟਮ, MTBF, FMEA ਅਤੇ CE/FCC ਨਿਯਮ',
          objectivesJson: [
            'Analyze robotics forward and inverse kinematics and trajectory planning architectures',
            'Design fault-tolerant safety-critical architectures: Triple Modular Redundancy (TMR), 2oo3 voting logic, and dual-core lockstep CPUs',
            'Model component failure rates lambda and calculate Mean Time Between Failures (MTBF = 1 / lambda) and system reliability R(t)',
            'Conduct Failure Mode and Effects Analysis (FMEA) calculating Severity, Occurrence, and Detection to generate Risk Priority Numbers (RPN)',
            'Comply with CE, FCC Part 15 (Class A vs B), RoHS (lead-free), and UL electronic safety and EMC standards',
          ],
          prerequisitesJson: ['11.1 Control Systems, PID Tuning, Sensors & H-Bridge Motor Drivers'],
          childAnalogyEn:
            'Think of a modern passenger airplane flying through a storm! It doesn’t rely on a single pilot or single computer: it has three identical flight computers running side-by-side (Triple Modular Redundancy). If lightning hits one computer and causes it to say "Turn left", while the other two say "Fly straight", the majority vote wins (2 out of 3), ignoring the broken computer! FMEA is like checking your car brakes before a mountain trip: finding what could fail before it hurts someone!',
          childAnalogyPa:
            'ਤੂਫ਼ਾਨ ਵਿੱਚ ਉੱਡ ਰਹੇ ਹਵਾਈ ਜਹਾਜ਼ ਦੀ ਕਲਪਨਾ ਕਰੋ! ਜਹਾਜ਼ ਵਿੱਚ ਸਿਰਫ਼ ਇੱਕ ਕੰਪਿਊਟਰ ਨਹੀਂ ਹੁੰਦਾ, ਸਗੋਂ ਤਿੰਨ ਇੱਕੋ ਜਿਹੇ ਕੰਪਿਊਟਰ ਇਕੱਠੇ ਕੰਮ ਕਰ ਰਹੇ ਹੁੰਦੇ ਹਨ (ਟ੍ਰਿਪਲ ਰਿਡੰਡੈਂਸੀ)। ਜੇਕਰ ਇੱਕ ਕੰਪਿਊਟਰ ਖ਼ਰਾਬ ਹੋ ਕੇ ਗਲਤ ਫੈਸਲਾ ਦੇਵੇ, ਤਾਂ ਬਾਕੀ ਦੋ ਕੰਪਿਊਟਰ ਵੋਟ ਪਾ ਕੇ ਉਸਨੂੰ ਰੱਦ ਕਰ ਦਿੰਦੇ ਹਨ (2oo3 ਵੋਟਿੰਗ)! FMEA ਪਹਾੜਾਂ ਤੇ ਜਾਣ ਤੋਂ ਪਹਿਲਾਂ ਗੱਡੀ ਦੀਆਂ ਬ੍ਰੇਕਾਂ ਅਤੇ ਟਾਇਰਾਂ ਦੀ ਪੂਰੀ ਜਾਂਚ ਕਰਨ ਵਾਂਗ ਹੈ ਤਾਂ ਜੋ ਰਸਤੇ ਵਿੱਚ ਕੋਈ ਦੁਰਘਟਨਾ ਨਾ ਵਾਪਰੇ!',
          technicalExplanationEn:
            'High-reliability engineering ensures systems operate safely under real-world stresses and satisfy global legal requirements:\n\n1. Safety-Critical Architecture & Redundancy:\n• Triple Modular Redundancy (TMR): Three redundant computational modules feed a hardware majority voter. System functions correctly even if any single channel suffers a catastrophic hardware failure.\n• Dual-Core Lockstep (e.g. TI Hercules, Infineon AURIX): Two CPU cores execute the exact same instruction stream on identical clock cycles. Hardware comparator detects any single-bit flip (such as cosmic ray neutron strike) within one clock cycle and forces a safe shutdown.\n\n2. Reliability & MTBF Mathematics:\n• Exponential Failure Model (Constant failure rate λ during useful life of bathtub curve):\n  - Reliability: R(t) = exp(-λ * t)\n  - Mean Time Between Failures: MTBF = 1 / λ (hours or years)\n• Series System (all must work): λ_total = λ_1 + λ_2 + ... + λ_n (MTBF drops as component count grows).\n• Parallel Redundant System (at least one works): R_sys(t) = 1 - (1 - R_1(t)) * (1 - R_2(t)).\n\n3. Failure Mode and Effects Analysis (FMEA):\n• Severity (S): Severity of effect on user (1 = imperceptible to 10 = catastrophic fatality without warning).\n• Occurrence (O): Probability of failure occurring (1 = extremely rare to 10 = inevitable).\n• Detection (D): Likelihood of existing controls detecting the fault before it reaches user (1 = guaranteed detection to 10 = completely undetectable).\n• Risk Priority Number: RPN = S * O * D (Scale 1 to 1000). Items with high RPN or high Severity mandate engineering redesign.\n\n4. Global Regulatory Compliance Standards:\n• FCC Part 15 (USA): Radiated and conducted electromagnetic emissions. Class B (residential/home devices, strict limits) vs Class A (commercial/industrial, relaxed limits).\n• CE Mark (European Union): EMC Directive (emissions + immunity testing) and Low Voltage Directive (LVD electrical safety).\n• RoHS (Restriction of Hazardous Substances): Restricts Lead (Pb < 1000 ppm), Mercury, Cadmium (Cd < 100 ppm), Hexavalent Chromium, and PBB/PBDE flame retardants.\n• Ingress Protection (IP Code): First digit = solids/dust (IP6x = dust tight); second digit = liquids (IPx7 = immersion up to 1 meter for 30 minutes).',
          technicalExplanationPa:
            'ਸੁਰੱਖਿਆ-ਮੁਖੀ ਇੰਜੀਨੀਅਰਿੰਗ ਅਤੇ ਰੈਗੂਲੇਟਰੀ ਨਿਯਮ:\n\n1. ਸੁਰੱਖਿਆ ਪ੍ਰਣਾਲੀ (Redundancy):\n• ਟ੍ਰਿਪਲ ਰਿਡੰਡੈਂਸੀ (TMR): ਤਿੰਨ ਕੰਪਿਊਟਰ ਇਕੱਠੇ ਚੱਲਦੇ ਹਨ ਅਤੇ ਵੋਟਿੰਗ ਨਾਲ ਫੈਸਲਾ ਹੁੰਦਾ ਹੈ (ਜਹਾਜ਼ਾਂ ਅਤੇ ਸਪੇਸ ਸ਼ਟਲ ਵਿੱਚ)।\n• ਲਾਕਸਟੈੱਪ ਪ੍ਰੋਸੈਸਰ: ਦੋ ਕੋਰ ਇੱਕੋ ਸਾਈਕਲ ਤੇ ਚੱਲਦੇ ਹਨ; ਜੇਕਰ 1 ਬਿੱਟ ਦਾ ਵੀ ਫ਼ਰਕ ਆਵੇ ਤਾਂ ਕਾਰ ਦਾ ਸਿਸਟਮ ਤੁਰੰਤ ਸੁਰੱਖਿਅਤ ਬ੍ਰੇਕ ਲਗਾ ਦਿੰਦਾ ਹੈ।\n\n2. MTBF (ਔਸਤ ਖ਼ਰਾਬੀ ਸਮਾਂ):\nਕੰਪੋਨੈਂਟਾਂ ਦੀ ਅਸਫਲਤਾ ਦਰ (λ) ਦਾ ਉਲਟ: MTBF = 1 / λ। ਕਾਰ ਵਿੱਚ ਲੱਖਾਂ ਘੰਟੇ ਬਿਨਾਂ ਖ਼ਰਾਬੀ ਚੱਲਣ ਦੀ ਗਾਰੰਟੀ।\n\n3. FMEA ਰਿਸਕ ਐਨਾਲਿਸਿਸ:\nRPN = Severity * Occurrence * Detection (ਗੰਭੀਰਤਾ * ਹੋਣ ਦੀ ਸੰਭਾਵਨਾ * ਪਕੜ ਵਿੱਚ ਆਉਣਾ)। ਉੱਚੇ RPN ਵਾਲੇ ਨੁਕਸਾਂ ਨੂੰ ਡਿਜ਼ਾਈਨ ਬਦਲ ਕੇ ਠੀਕ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।\n\n4. ਅੰਤਰਰਾਸ਼ਟਰੀ ਸਰਟੀਫਿਕੇਸ਼ਨ:\n• CE ਅਤੇ FCC: ਤੁਹਾਡਾ ਗੈਜੇਟ ਕਿਸੇ ਹੋਰ ਦੇ ਟੀਵੀ ਜਾਂ ਜਹਾਜ਼ ਦੇ ਰੇਡੀਓ ਵਿੱਚ ਸ਼ੋਰ (EMI) ਨਾ ਪਾਵੇ।\n• RoHS: ਬੋਰਡ ਵਿੱਚ ਜ਼ਹਿਰੀਲਾ ਸਿੱਕਾ (Lead) ਵਰਤਣਾ ਮਨ੍ਹਾ ਹੈ।\n• IP67: ਧੂੜ-ਮਿੱਟੀ ਅਤੇ 1 ਮੀਟਰ ਡੂੰਘੇ ਪਾਣੀ ਵਿੱਚ ਅੱਧਾ ਘੰਟਾ ਬਚਾਅ।',
          practicalExampleEn:
            'Designing an electronic throttle control (Drive-by-Wire) pedal for a modern automobile: If an analog pedal sensor wiper fails, an open-circuit could cause full acceleration into a wall! The engineer implements two independent, electrically isolated pedal sensors with opposite voltage slopes (Sensor 1 ramps 0.5V to 4.5V; Sensor 2 ramps 4.5V to 0.5V). The dual-core lockstep ECU continuously cross-checks Sensor 1 + Sensor 2 = 5.0 V. If any sensor disconnects or drifts, the sum fails the test, and the engine ECU immediately defaults to limp-home idle mode within 50 milliseconds.',
          practicalExamplePa:
            'ਕਾਰ ਦੀ ਇਲੈਕਟ੍ਰਾਨਿਕ ਰੇਸ (Drive-by-Wire Accelerator): ਜੇਕਰ ਰੇਸ ਵਾਲਾ ਸੈਂਸਰ ਟੁੱਟ ਜਾਵੇ ਤਾਂ ਕਾਰ ਬੇਕਾਬੂ ਹੋ ਕੇ ਕੰਧ ਵਿੱਚ ਵੱਜ ਸਕਦੀ ਹੈ! ਇਸ ਲਈ ਪੈਡਲ ਵਿੱਚ ਦੋ ਵੱਖ-ਵੱਖ ਸੈਂਸਰ ਲਗਾਏ ਜਾਂਦੇ ਹਨ: ਇੱਕ ਵੋਲਟੇਜ ਵਧਾਉਂਦਾ ਹੈ (0.5V ਤੋਂ 4.5V) ਅਤੇ ਦੂਜਾ ਘਟਾਉਂਦਾ ਹੈ (4.5V ਤੋਂ 0.5V)। ਦੋਵਾਂ ਦਾ ਜੋੜ ਹਮੇਸ਼ਾ 5.0V ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ। ਜੇਕਰ ਇੱਕ ਤਾਰ ਵੀ ਹਿੱਲੇ, ਤਾਂ ਇੰਜਣ 50 ਮਿਲੀਸਕਿੰਟ ਵਿੱਚ ਰੇਸ ਜ਼ੀਰੋ ਕਰਕੇ ਗੱਡੀ ਸੁਰੱਖਿਅਤ ਰੋਕ ਦਿੰਦਾ ਹੈ।',
          codeDemo: `// TypeScript: FMEA RPN Calculator & Redundant System Reliability
export function calcFmeaRpn(severity: number, occurrence: number, detection: number) {
  if (severity < 1 || severity > 10 || occurrence < 1 || occurrence > 10 || detection < 1 || detection > 10) {
    throw new Error('FMEA scales are strictly from 1 to 10');
  }
  const rpn = severity * occurrence * detection;
  const isHighRisk = rpn > 100 || severity >= 9;

  return { rpn, isHighRisk };
}

export function calcParallelRedundantReliability(rSingleComponent: number) {
  // Dual redundant system: R_sys = 1 - (1 - R)^2
  const unreliability = 1 - rSingleComponent;
  const sysReliability = 1 - Math.pow(unreliability, 2);
  return { singleReliability: rSingleComponent, redundantReliability: sysReliability };
}

// Verification: Throttle sensor S=10, O=3, D=2:
const fmea = calcFmeaRpn(10, 3, 2);
console.log('Throttle FMEA RPN:', fmea.rpn); // 60 (High Risk due to Severity=10)
const rel = calcParallelRedundantReliability(0.95);
console.log('Single 95% -> Dual Redundant Reliability:', (rel.redundantReliability * 100).toFixed(2), '%'); // 99.75%`,
          misconceptionsJson: [
            {
              myth: 'CE mark is an official quality approval certificate issued directly by the European government.',
              truthEn:
                'The CE mark is predominantly a manufacturer self-declaration of conformity. The manufacturer legally certifies that their product meets all applicable directives (EMC, LVD, RoHS) backed by an audited Technical Construction File (TCF) with accredited lab test reports.',
              truthPa:
                'CE ਮਾਰਕ ਕੋਈ ਸਰਕਾਰੀ ਸਰਟੀਫਿਕੇਟ ਨਹੀਂ ਹੈ। ਇਹ ਕੰਪਨੀ ਵੱਲੋਂ ਖੁਦ ਕਾਨੂੰਨੀ ਹਲਫ਼ਨਾਮਾ ਹੁੰਦਾ ਹੈ ਕਿ ਉਹਨਾਂ ਨੇ ਲੈਬ ਟੈਸਟ ਕਰਵਾ ਕੇ ਯੂਰਪ ਦੇ ਸਾਰੇ ਸੁਰੱਖਿਆ ਨਿਯਮ ਪਾਸ ਕਰ ਲਏ ਹਨ।',
            },
            {
              myth: 'An MTBF of 100,000 hours means that an individual device is guaranteed to operate for 11.4 years without failure.',
              truthEn:
                'MTBF is a statistical population metric, not a warranty. According to R(t) = exp(-t / MTBF), by the time t = MTBF (100,000 hours), only 36.8% of devices will have survived! 63.2% of the population will have failed before reaching the MTBF age.',
              truthPa:
                '1,00,000 ਘੰਟੇ MTBF ਦਾ ਮਤਲਬ ਇਹ ਨਹੀਂ ਕਿ ਹਰ ਯੰਤਰ 11 ਸਾਲ ਚੱਲੇਗਾ। ਗਣਿਤ ਅਨੁਸਾਰ MTBF ਦਾ ਸਮਾਂ ਪੂਰਾ ਹੋਣ ਤੱਕ 63% ਯੰਤਰ ਪਹਿਲਾਂ ਹੀ ਖ਼ਰਾਬ ਹੋ ਚੁੱਕੇ ਹੋਣਗੇ।',
            },
            {
              myth: 'RoHS compliance simply means the product works with low electrical voltage.',
              truthEn:
                'RoHS stands for "Restriction of Hazardous Substances". It has nothing to do with operating voltage; it legally restricts toxic heavy metals and chemicals (lead, mercury, cadmium, hexavalent chromium, and plastic phthalates) in consumer electronics.',
              truthPa:
                'RoHS ਦਾ ਵੋਲਟੇਜ ਨਾਲ ਕੋਈ ਸੰਬੰਧ ਨਹੀਂ ਹੈ। ਇਹ ਜ਼ਹਿਰੀਲੀਆਂ ਧਾਤਾਂ (ਜਿਵੇਂ ਸਿੱਕਾ, ਪਾਰਾ, ਕੈਡਮੀਅਮ) ਨੂੰ ਬੈਨ ਕਰਨ ਵਾਲਾ ਵਾਤਾਵਰਣ ਸੁਰੱਖਿਆ ਕਾਨੂੰਨ ਹੈ।',
            },
          ],
          terminologyJson: [
            {
              term: 'MTBF (Mean Time Between Failures)',
              punjabi: 'ਔਸਤ ਖ਼ਰਾਬੀ ਸਮਾਂ (MTBF)',
              meaningEn: 'Predicted elapsed time between inherent failures of a mechanical or electrical system during normal operation.',
              meaningPa: 'ਆਮ ਹਾਲਤਾਂ ਵਿੱਚ ਯੰਤਰਾਂ ਦੇ ਖ਼ਰਾਬ ਹੋਣ ਵਿਚਕਾਰ ਔਸਤ ਸਮੇਂ ਦਾ ਅੰਕੜਾ।',
            },
            {
              term: 'FMEA (Failure Mode and Effects Analysis)',
              punjabi: 'FMEA ਰਿਸਕ ਐਨਾਲਿਸਿਸ',
              meaningEn: 'Systematic structured engineering procedure for identifying and prioritizing potential design failure modes.',
              meaningPa: 'ਡਿਜ਼ਾਈਨ ਵਿੱਚ ਸੰਭਾਵੀ ਖ਼ਰਾਬੀਆਂ ਅਤੇ ਉਹਨਾਂ ਦੇ ਨੁਕਸਾਨ ਦੀ ਪਹਿਲਾਂ ਹੀ ਜਾਂਚ ਕਰਨ ਦੀ ਵਿਧੀ।',
            },
            {
              term: 'Triple Modular Redundancy (TMR)',
              punjabi: 'ਟ੍ਰਿਪਲ ਮੌਡਿਊਲਰ ਰਿਡੰਡੈਂਸੀ (TMR)',
              meaningEn: 'Fault-tolerant architecture where three systems perform a process and results are processed by a majority voting system.',
              meaningPa: 'ਤਿੰਨ ਇੱਕੋ ਜਿਹੇ ਸਿਸਟਮ ਜੋ ਵੋਟਿੰਗ ਰਾਹੀਂ ਫੈਸਲਾ ਕਰਦੇ ਹਨ ਤਾਂ ਜੋ ਇੱਕ ਖ਼ਰਾਬ ਹੋਣ ਤੇ ਵੀ ਕੰਮ ਨਾ ਰੁਕੇ।',
            },
            {
              term: 'RoHS Compliance',
              punjabi: 'RoHS ਸਰਟੀਫਿਕੇਸ਼ਨ',
              meaningEn: 'European directive restricting the use of specific hazardous substances (such as lead-free solder) in electrical equipment.',
              meaningPa: 'ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਵਿੱਚ ਜ਼ਹਿਰੀਲੇ ਕੈਮੀਕਲ ਅਤੇ ਸਿੱਕੇ (Lead) ਉੱਤੇ ਪਾਬੰਦੀ ਲਗਾਉਣ ਵਾਲਾ ਨਿਯਮ।',
            },
            {
              term: 'FCC Part 15',
              punjabi: 'FCC ਪਾਰਟ 15 ਨਿਯਮ',
              meaningEn: 'United States federal regulation limiting intentional and unintentional radio frequency electromagnetic emissions.',
              meaningPa: 'ਅਮਰੀਕੀ ਕਾਨੂੰਨ ਜੋ ਤੈਅ ਕਰਦਾ ਹੈ ਕਿ ਗੈਜੇਟ ਵਿੱਚੋਂ ਨਿਕਲਣ ਵਾਲਾ ਰੇਡੀਓ ਸ਼ੋਰ ਸੀਮਾ ਵਿੱਚ ਰਹੇ।',
            },
            {
              term: 'Dual-Core Lockstep',
              punjabi: 'ਡਿਊਲ-ਕੋਰ ਲਾਕਸਟੈੱਪ',
              meaningEn: 'Safety architecture where two CPU cores execute identical instructions simultaneously to detect transient hardware faults instantly.',
              meaningPa: 'ਕਾਰਾਂ ਵਿੱਚ ਦੋ ਪ੍ਰੋਸੈਸਰਾਂ ਦਾ ਇੱਕੋ ਸਾਈਕਲ ਤੇ ਚੱਲ ਕੇ ਹਰ ਕਦਮ ਦੀ ਆਪਸੀ ਜਾਂਚ ਕਰਨਾ।',
            },
          ],
          interactiveLabId: 'hardware-explorer',
          exercisePromptEn:
            'Reliability Problem: (1) An avionics controller uses an array of 50 identical electronic components in series. Each component has an individual failure rate lambda = 2 * 10^-6 failures per hour. Calculate the total system failure rate and the system MTBF in hours. (2) Evaluate an FMEA item: Severity S = 9, Occurrence O = 2, Detection D = 3. Calculate RPN and explain if design intervention is mandated.',
          exercisePromptPa:
            'ਭਰੋਸੇਯੋਗਤਾ ਸਵਾਲ: (1) 50 ਕੰਪੋਨੈਂਟਾਂ ਵਾਲੇ ਜਹਾਜ਼ ਕੰਟਰੋਲਰ ਵਿੱਚ ਹਰੇਕ ਦੀ ਫੇਲੀਅਰ ਦਰ 2 * 10^-6 ਪ੍ਰਤੀ ਘੰਟਾ ਹੈ। ਕੁੱਲ ਸਿਸਟਮ ਦਾ MTBF (ਘੰਟੇ) ਕੱਢੋ। (2) FMEA ਮੁੱਲ: S = 9, O = 2, D = 3 ਲਈ RPN ਕੱਢੋ ਅਤੇ ਦੱਸੋ ਕਿ ਡਿਜ਼ਾਈਨ ਬਦਲਣਾ ਲਾਜ਼ਮੀ ਹੈ ਜਾਂ ਨਹੀਂ।',
          summaryEn:
            'Advanced engineering integrates physics, safety, and law: fault-tolerant triple redundancy and lockstep CPUs protect human lives, FMEA preempts field catastrophes, and international regulatory compliance certifies electronic hardware for global deployment.',
          summaryPa:
            'ਐਡਵਾਂਸਡ ਇੰਜੀਨੀਅਰਿੰਗ ਮਨੁੱਖੀ ਜਾਨਾਂ ਦੀ ਰਾਖੀ ਕਰਦੀ ਹੈ: ਟ੍ਰਿਪਲ ਰਿਡੰਡੈਂਸੀ ਅਤੇ ਲਾਕਸਟੈੱਪ ਪ੍ਰੋਸੈਸਰ ਹਾਦਸੇ ਰੋਕਦੇ ਹਨ, FMEA ਖ਼ਤਰੇ ਪਹਿਲਾਂ ਫੜਦੀ ਹੈ, ਅਤੇ CE/FCC ਨਿਯਮ ਪੂਰੀ ਦੁਨੀਆ ਵਿੱਚ ਸੁਰੱਖਿਆ ਯਕੀਨੀ ਬਣਾਉਂਦੇ ਹਨ।',
          furtherReadingJson: [
            'Reliability Engineering by Elsayed A. Elsayed',
            'IEC 61508: Functional Safety of Electrical/Electronic/Programmable Electronic Safety-related Systems',
            'Automotive System Safety: Critical Considerations for Engineering and Managing by Joseph D. Miller',
          ],
          quiz: {
            titleEn: 'Level 11 Assessment: Robotics, Reliability, FMEA & Standards',
            titlePa: 'ਲੈਵਲ 11 ਟੈਸਟ: ਰੋਬੋਟਿਕਸ, ਭਰੋਸੇਯੋਗਤਾ, FMEA ਅਤੇ ਮਿਆਰ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'TMR Voting',
                promptEn: 'How does a Triple Modular Redundancy (TMR) system maintain correct operation when one of its three computational channels suffers a permanent hardware fault?',
                promptPa: 'ਜਦੋਂ ਤਿੰਨ ਵਿੱਚੋਂ ਇੱਕ ਕੰਪਿਊਟਰ ਸੜ ਜਾਵੇ ਤਾਂ ਟ੍ਰਿਪਲ ਮੌਡਿਊਲਰ ਰਿਡੰਡੈਂਸੀ (TMR) ਸਿਸਟਮ ਸਹੀ ਕੰਮ ਕਿਵੇਂ ਜਾਰੀ ਰੱਖਦਾ ਹੈ?',
                optionsJson: [
                  'A hardware 2-out-of-3 majority voter accepts the matching outputs of the two healthy channels, out-voting the failed channel',
                  'It shuts down all three computers',
                  'It switches to a backup battery',
                  'It inverts the clock frequency',
                ],
                correctAnswer: 'A hardware 2-out-of-3 majority voter accepts the matching outputs of the two healthy channels, out-voting the failed channel',
                explanationEn:
                  'TMR uses a majority voting circuit. If Channel A fails but Channels B and C agree, the 2-to-1 majority vote passes the correct data seamlessly.',
                explanationPa:
                  'ਹਾਰਡਵੇਅਰ ਵੋਟਿੰਗ ਸਰਕਟ 2 ਬਨਾਮ 1 ਦੇ ਬਹੁਮਤ ਨਾਲ ਸਹੀ ਦੋਵਾਂ ਦਾ ਫੈਸਲਾ ਮੰਨ ਕੇ ਖ਼ਰਾਬ ਚੈਨਲ ਨੂੰ ਰੱਦ ਕਰ ਦਿੰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Lockstep Processor',
                promptEn: 'In an automotive safety microcontroller (e.g. ISO 26262 ASIL-D), what is the function of Dual-Core Lockstep execution?',
                promptPa: 'ਕਾਰ ਦੇ ਸੁਰੱਖਿਆ ਪ੍ਰੋਸੈਸਰ ਵਿੱਚ ਡਿਊਲ-ਕੋਰ ਲਾਕਸਟੈੱਪ (Lockstep) ਦਾ ਕੀ ਕੰਮ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'Both CPU cores execute identical instructions on the same clock cycle; a comparator detects any discrepancy within 1 cycle to trigger safe braking',
                  'To double the maximum clock frequency from 100 MHz to 200 MHz',
                  'To run two separate operating systems at once',
                  'To reduce heat dissipation by 50%',
                ],
                correctAnswer: 'Both CPU cores execute identical instructions on the same clock cycle; a comparator detects any discrepancy within 1 cycle to trigger safe braking',
                explanationEn:
                  'Lockstep cores run in cycle-exact sync. A hardware checker compares their internal states; any mismatch (e.g. from a cosmic ray neutron) triggers immediate fail-safe action.',
                explanationPa:
                  'ਦੋਵੇਂ ਕੋਰ ਇੱਕੋ ਸਾਈਕਲ ਤੇ ਇੱਕੋ ਕੋਡ ਚਲਾਉਂਦੇ ਹਨ; ਜੇਕਰ 1 ਬਿੱਟ ਦਾ ਵੀ ਫ਼ਰਕ ਆਵੇ ਤਾਂ 1 ਸਾਈਕਲ ਵਿੱਚ ਪਤਾ ਲੱਗ ਜਾਂਦਾ ਹੈ ਅਤੇ ਗੱਡੀ ਸੁਰੱਖਿਅਤ ਰੁਕਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'MTBF Formula',
                promptEn: 'If a component has a constant failure rate λ = 0.00002 failures per hour during its useful life, what is its Mean Time Between Failures (MTBF)?',
                promptPa: 'ਜੇਕਰ ਕਿਸੇ ਪੁਰਜ਼ੇ ਦੀ ਫੇਲੀਅਰ ਦਰ λ = 0.00002 ਪ੍ਰਤੀ ਘੰਟਾ ਹੈ ਤਾਂ ਉਸਦਾ MTBF ਕਿੰਨਾ ਹੋਵੇਗਾ?',
                optionsJson: ['50,000 hours', '20,000 hours', '100,000 hours', '5,000 hours'],
                correctAnswer: '50,000 hours',
                explanationEn:
                  'MTBF = 1 / λ = 1 / 0.00002 = 50,000 hours.',
                explanationPa:
                  'MTBF = 1 / 0.00002 = 50,000 ਘੰਟੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'FMEA RPN Calculation',
                promptEn: 'In an FMEA assessment, a potential fault has Severity S = 8, Occurrence O = 3, and Detection D = 5. What is its Risk Priority Number (RPN)?',
                promptPa: 'FMEA ਵਿੱਚ S = 8, O = 3, ਅਤੇ D = 5 ਹੈ। ਇਸਦਾ RPN ਕਿੰਨਾ ਹੋਵੇਗਾ?',
                optionsJson: ['120', '16', '80', '240'],
                correctAnswer: '120',
                explanationEn:
                  'RPN = Severity * Occurrence * Detection = 8 * 3 * 5 = 120.',
                explanationPa:
                  'RPN = 8 * 3 * 5 = 120।',
              },
              {
                questionType: 'mcq',
                topicTag: 'FCC Class Distinction',
                promptEn: 'What is the regulatory difference between FCC Part 15 Class A and Class B electronic emission limits?',
                promptPa: 'FCC ਪਾਰਟ 15 ਕਲਾਸ A ਅਤੇ ਕਲਾਸ B ਵਿੱਚ ਕੀ ਫ਼ਰਕ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'Class B is for residential/home environments and has stricter, lower allowable radiation limits than industrial Class A',
                  'Class A is for military space satellites only',
                  'Class B applies only to battery powered devices',
                  'Class A has zero emission limits',
                ],
                correctAnswer: 'Class B is for residential/home environments and has stricter, lower allowable radiation limits than industrial Class A',
                explanationEn:
                  'Class B (home/residential) enforces much tighter limits (~10 dB stricter) because devices are in close proximity to TVs and radios. Class A is for industrial settings.',
                explanationPa:
                  'ਕਲਾਸ B ਘਰਾਂ ਦੇ ਗੈਜੇਟਾਂ ਲਈ ਹੁੰਦਾ ਹੈ ਅਤੇ ਇਸਦੇ ਨਿਯਮ ਬਹੁਤ ਸਖ਼ਤ ਹੁੰਦੇ ਹਨ ਤਾਂ ਜੋ ਗੁਆਂਢੀਆਂ ਦੇ ਟੀਵੀ ਜਾਂ ਵਾਈ-ਫਾਈ ਵਿੱਚ ਸ਼ੋਰ ਨਾ ਜਾਵੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'RoHS Lead Limit',
                promptEn: 'Under the EU RoHS Directive, what is the maximum allowable concentration of Lead (Pb) by weight in homogeneous materials?',
                promptPa: 'RoHS ਕਾਨੂੰਨ ਅਨੁਸਾਰ ਇਲੈਕਟ੍ਰਾਨਿਕ ਪਦਾਰਥਾਂ ਵਿੱਚ ਵੱਧ ਤੋਂ ਵੱਧ ਕਿੰਨਾ ਸਿੱਕਾ (Lead) ਹੋ ਸਕਦਾ ਹੈ?',
                optionsJson: ['0.1% by weight (1000 ppm)', '0.01% by weight (100 ppm)', '0.0% (strictly zero atoms)', '5.0% by weight'],
                correctAnswer: '0.1% by weight (1000 ppm)',
                explanationEn:
                  'RoHS restricts Lead (Pb), Mercury (Hg), and Hexavalent Chromium to a maximum of 0.1% (1000 ppm). Cadmium (Cd) is restricted even more strictly to 0.01% (100 ppm).',
                explanationPa:
                  'ਵੱਧ ਤੋਂ ਵੱਧ 0.1% (1000 ppm)। ਕੈਡਮੀਅਮ ਲਈ 0.01% (100 ppm) ਹੁੰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'IP67 Rating',
                promptEn: 'What does an Ingress Protection rating of "IP67" guarantee for an industrial electronics enclosure?',
                promptPa: 'ਇਲੈਕਟ੍ਰਾਨਿਕ ਡੱਬੇ ਦੀ "IP67" ਰੇਟਿੰਗ ਕੀ ਗਾਰੰਟੀ ਦਿੰਦੀ ਹੈ?',
                optionsJson: [
                  'Completely dust-tight (6) and protected against water immersion up to 1 meter depth for 30 minutes (7)',
                  'Immunity to direct lightning strikes',
                  'Explosion proof in coal mines',
                  'Protected only against light rain drops',
                ],
                correctAnswer: 'Completely dust-tight (6) and protected against water immersion up to 1 meter depth for 30 minutes (7)',
                explanationEn:
                  'First digit 6 = full dust-tight protection. Second digit 7 = immersion in water up to 1 meter for 30 minutes without harmful ingress.',
                explanationPa:
                  'ਪਹਿਲਾ ਅੰਕ 6 = ਪੂਰੀ ਤਰ੍ਹਾਂ ਧੂੜ-ਮਿੱਟੀ ਪਰੂਫ। ਦੂਜਾ ਅੰਕ 7 = 1 ਮੀਟਰ ਪਾਣੀ ਵਿੱਚ 30 ਮਿੰਟ ਡੁੱਬਣ ਤੇ ਵੀ ਪਾਣੀ ਅੰਦਰ ਨਹੀਂ ਵੜਦਾ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Series System Reliability',
                promptEn: 'If a non-redundant system consists of 100 identical components connected in series reliability, what happens to system MTBF as more components are added?',
                promptPa: 'ਜੇਕਰ ਸਾਰੇ ਕੰਪੋਨੈਂਟ ਸੀਰੀਜ਼ ਭਰੋਸੇਯੋਗਤਾ ਵਿੱਚ ਜੁੜੇ ਹੋਣ, ਤਾਂ ਹੋਰ ਪੁਰਜ਼ੇ ਵਧਾਉਣ ਤੇ ਸਿਸਟਮ ਦੇ MTBF ਤੇ ਕੀ ਅਸਰ ਪੈਂਦਾ ਹੈ?',
                optionsJson: [
                  'Total failure rate increases and system MTBF decreases (the system becomes less reliable)',
                  'System MTBF increases linearly',
                  'System MTBF stays perfectly constant',
                  'System reliability reaches 100%',
                ],
                correctAnswer: 'Total failure rate increases and system MTBF decreases (the system becomes less reliable)',
                explanationEn:
                  'For series reliability, λ_total = Σ λ_i. As component count increases, total failure rate rises and MTBF (1 / λ) inevitably drops.',
                explanationPa:
                  'ਪੁਰਜ਼ੇ ਵਧਣ ਨਾਲ ਖ਼ਰਾਬ ਹੋਣ ਦਾ ਖ਼ਤਰਾ ਵਧਦਾ ਹੈ, ਇਸ ਲਈ ਕੁੱਲ MTBF ਘਟ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Bathtub Curve',
                promptEn: 'What are the three distinct operating phases of the classic engineering "Bathtub Curve" of hardware failure rate?',
                promptPa: 'ਇੰਜੀਨੀਅਰਿੰਗ ਦੇ "ਬਾਥਟੱਬ ਕਰਵ" (Bathtub Curve) ਦੇ ਤਿੰਨ ਪੜਾਅ ਕਿਹੜੇ ਹੁੰਦੇ ਹਨ?',
                optionsJson: [
                  'Infant Mortality (burn-in defects), Constant Useful Life, and Wear-Out phase',
                  'Heating, Cooking, and Cooling',
                  'Low frequency, Medium frequency, High frequency',
                  'Design, Prototyping, and Production',
                ],
                correctAnswer: 'Infant Mortality (burn-in defects), Constant Useful Life, and Wear-Out phase',
                explanationEn:
                  'The bathtub curve exhibits high early failures (infant mortality), dropping to a low constant failure rate (useful life), followed by an increase due to aging (wear-out).',
                explanationPa:
                  'ਸ਼ੁਰੂਆਤੀ ਬੱਚਾ ਮੌਤ ਦਰ (ਨਵੇਂ ਨੁਕਸ), ਲੰਮੀ ਸਥਿਰ ਉਮਰ (Useful Life), ਅਤੇ ਬੁਢਾਪੇ ਵਿੱਚ ਘਸਾਵਟ (Wear-out)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Inverse Kinematics',
                promptEn: 'In industrial robotics, what is "Inverse Kinematics"?',
                promptPa: 'ਉਦਯੋਗਿਕ ਰੋਬੋਟਿਕਸ ਵਿੱਚ "Inverse Kinematics" ਕਿਸਨੂੰ ਕਹਿੰਦੇ ਹਨ?',
                optionsJson: [
                  'Calculating the required joint angles to place the robotic gripper / end-effector at a desired Cartesian (X, Y, Z) point in 3D space',
                  'Reversing the direction of motor rotation',
                  'Calculating the battery charging time of the robot',
                  'Measuring the weight of the robot arm',
                ],
                correctAnswer: 'Calculating the required joint angles to place the robotic gripper / end-effector at a desired Cartesian (X, Y, Z) point in 3D space',
                explanationEn:
                  'Forward kinematics computes tip position from joint angles. Inverse kinematics solves the harder non-linear geometric problem: given a target X, Y, Z point, what joint angles achieve it?',
                explanationPa:
                  '3D ਸਪੇਸ ਵਿੱਚ ਟੀਚੇ (X, Y, Z) ਤੇ ਪਹੁੰਚਣ ਲਈ ਰੋਬੋਟ ਬਾਹੀ ਦੇ ਸਾਰੇ ਜੋੜਾਂ (ਮੋਟਰਾਂ) ਦੇ ਲੋੜੀਂਦੇ ਕੋਣਾਂ ਦਾ ਗਣਿਤਕ ਹੱਲ ਕੱਢਣਾ।',
              },
            ],
          },
        },
      ],
    },
  ],
};
