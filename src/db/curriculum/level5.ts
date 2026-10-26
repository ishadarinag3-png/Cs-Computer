import { SeedCourse } from './types.ts';

export const LEVEL_5_COURSE: SeedCourse = {
  slug: 'level-5-digital-electronics',
  levelNumber: 5,
  titleEn: 'Level 5: Digital Electronics',
  titlePa: 'ਲੈਵਲ 5: ਡਿਜੀਟਲ ਇਲੈਕਟ੍ਰਾਨਿਕਸ (Digital Electronics)',
  descriptionEn:
    'Binary arithmetic, two’s complement, Boolean algebra, Karnaugh maps, combinational logic (adders, multiplexers, decoders), sequential flip-flops, synchronous counters, FSMs, setup/hold timing, and CMOS/TTL logic families.',
  descriptionPa:
    'ਬਾਈਨਰੀ ਗਣਿਤ, ਟੂਅਜ਼ ਕੰਪਲੀਮੈਂਟ, ਬੂਲੀਅਨ ਅਲਜਬਰਾ, ਕੇ-ਮੈਪ (K-Map), ਹਾਫ/ਫੁੱਲ ਐਡਰ, ਮਲਟੀਪਲੈਕਸਰ, ਡੀਕੋਡਰ, ਫਲਿੱਪ-ਫਲੌਪ (D, JK), ਕਾਊਂਟਰ, FSM, ਟਾਈਮਿੰਗ ਅਤੇ CMOS/TTL ਪਰਿਵਾਰ।',
  category: 'core-electronics',
  estimatedHours: 18,
  modules: [
    {
      orderIndex: 1,
      titleEn: 'Number Systems, Boolean Algebra & Combinational Logic',
      titlePa: 'ਨੰਬਰ ਸਿਸਟਮ, ਬੂਲੀਅਨ ਅਲਜਬਰਾ ਅਤੇ ਕੰਬੀਨੇਸ਼ਨਲ ਲੌਜਿਕ',
      summaryEn:
        'Hexadecimal and binary systems, signed two’s complement, logic gates, De Morgan’s laws, Karnaugh map minimization, adders, MUX, and decoders.',
      summaryPa:
        'ਬਾਈਨਰੀ ਅਤੇ ਹੈਕਸਾਡੈਸੀਮਲ ਗਣਨਾ, ਸਾਈਨਡ ਨੰਬਰ, ਲੌਜਿਕ ਗੇਟ (AND, OR, NOT, NAND, XOR), ਡੀ ਮੌਰਗਨ ਨਿਯਮ, ਕੇ-ਮੈਪ, ਅਤੇ ਐਡਰ ਸਰਕਟ।',
      lessons: [
        {
          slug: 'digital-logic-binary-karnaugh-combinational',
          orderIndex: 1,
          titleEn: '5.1 Number Systems, Boolean Algebra, Logic Gates & Combinational Circuits',
          titlePa: '5.1 ਨੰਬਰ ਸਿਸਟਮ, ਬੂਲੀਅਨ ਅਲਜਬਰਾ, ਲੌਜਿਕ ਗੇਟ ਅਤੇ ਕੰਬੀਨੇਸ਼ਨਲ ਸਰਕਟ',
          objectivesJson: [
            'Convert fluently between Decimal, Binary, Octal, and Hexadecimal representations and perform Two’s Complement signed arithmetic',
            'Prove Boolean algebra theorems, idempotence, absorption, and apply De Morgan’s laws to simplify multi-variable expressions',
            'Construct 2, 3, and 4-variable Karnaugh Maps (K-maps) to eliminate redundant logic terms using Gray-code adjacency',
            'Synthesize combinational building blocks: Half Adders, Full Adders, 4:1 Multiplexers, and 3:8 Line Decoders',
          ],
          prerequisitesJson: ['Level 0: Mathematics for Electronics (Algebra and basic logic)'],
          childAnalogyEn:
            'Think of light switches in your room! A regular switch has only two states: ON (1, voltage present) or OFF (0, zero voltage). An AND gate is like a bank vault with two keys: both the manager AND the cashier must turn their keys together for the heavy door to open! An OR gate is like a staircase light: flipping either the downstairs OR upstairs switch turns the light on!',
          childAnalogyPa:
            'ਕਮਰੇ ਦੇ ਬਿਜਲੀ ਵਾਲੇ ਬਟਨਾਂ ਦੀ ਕਲਪਨਾ ਕਰੋ! ਬਟਨ ਦੇ ਸਿਰਫ਼ ਦੋ ਹੀ ਰੂਪ ਹੁੰਦੇ ਹਨ: ON (1, ਕਰੰਟ ਚਾਲੂ) ਜਾਂ OFF (0, ਕਰੰਟ ਬੰਦ)। AND ਗੇਟ ਬੈਂਕ ਦੇ ਲਾਕਰ ਵਾਂਗ ਹੈ: ਜਦੋਂ ਮੈਨੇਜਰ ਅਤੇ ਕੈਸ਼ੀਅਰ ਦੋਵੇਂ ਆਪਣੀਆਂ ਚਾਬੀਆਂ ਘੁਮਾਉਣਗੇ (ਦੋਵੇਂ 1 ਹੋਣਗੇ), ਦਰਵਾਜ਼ਾ ਤਾਂ ਹੀ ਖੁੱਲ੍ਹੇਗਾ! OR ਗੇਟ ਪੌੜੀਆਂ ਵਾਲੇ ਬਲਬ ਵਾਂਗ ਹੈ: ਭਾਵੇਂ ਹੇਠਲਾ ਬਟਨ ਦਬਾਓ ਜਾਂ ਉੱਪਰਲਾ ਬਟਨ ਦਬਾਓ, ਬਲਬ ਜਗ ਪਵੇਗਾ!',
          technicalExplanationEn:
            'Digital systems encode continuous realities into discrete binary states (0 and 1):\n\n1. Number Systems & Binary Arithmetic:\n• Bases: Binary (Base-2), Octal (Base-8), Decimal (Base-10), Hexadecimal (Base-16).\n• Two\'s Complement Representation for signed N-bit integers:\n  - Positive: MSB = 0\n  - Negative: Invert all bits (One’s complement) and add 1 (Two\'s complement).\n  - Range for 8-bit signed integer: -128 to +127.\n  - Arithmetic Overflow occurs when adding two numbers of the same sign produces a result with the opposite sign.\n\n2. Fundamental Logic Gates & Truth Tables:\n• AND (Y = A · B): Output 1 only when all inputs are 1.\n• OR (Y = A + B): Output 1 when at least one input is 1.\n• NOT (Y = Ā): Inversion.\n• NAND (Y = (A · B)̄): Universal gate; output 0 only when both inputs are 1.\n• NOR (Y = (A + B)̄): Universal gate; output 1 only when all inputs are 0.\n• XOR (Y = A ⊕ B = ĀB + AB̄): Output 1 when inputs differ (odd parity).\n• XNOR (Y = (A ⊕ B)̄ = AB + ĀB̄): Equivalence detector.\n\n3. De Morgan’s Laws:\n• (A · B)̄ = Ā + B̄  (NAND equals negative-OR)\n• (A + B)̄ = Ā · B̄  (NOR equals negative-AND)\n\n4. Karnaugh Map (K-Map) Minimization:\nArranges truth table minterms in a geometric matrix where adjacent cells differ by exactly one binary bit (Gray code: 00, 01, 11, 10). Groups of 1, 2, 4, 8, or 16 ones eliminate variable dependencies.\n\n5. Combinational Modules:\n• Half Adder: Sum = A ⊕ B, Carry = A · B.\n• Full Adder: Sum = A ⊕ B ⊕ Cin, Cout = (A · B) + (Cin · (A ⊕ B)).\n• Multiplexer (MUX 2^N:1): Selects one of 2^N data inputs to a single output line based on N select lines.',
          technicalExplanationPa:
            'ਡਿਜੀਟਲ ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਦੀਆਂ ਬੁਨਿਆਦਾਂ:\n\n1. ਨੰਬਰ ਸਿਸਟਮ:\n• ਬਾਈਨਰੀ (Base 2): ਸਿਰਫ਼ 0 ਅਤੇ 1।\n• ਹੈਕਸਾਡੈਸੀਮਲ (Base 16): 0 ਤੋਂ 9 ਅਤੇ A ਤੋਂ F।\n• Two\'s Complement: ਨੈਗੇਟਿਵ ਨੰਬਰ ਦਰਸਾਉਣ ਦਾ ਤਰੀਕਾ। ਸਾਰੇ ਬਿੱਟ ਉਲਟਾ ਕੇ 1 ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ (ਜਿਵੇਂ -5 ਦਰਸਾਉਣ ਲਈ)।\n\n2. ਲੌਜਿਕ ਗੇਟ (Logic Gates):\n• AND ਗੇਟ: ਦੋਵੇਂ 1 ਹੋਣ ਤਾਂ ਹੀ ਆਊਟਪੁੱਟ 1 ਮਿਲਦੀ ਹੈ।\n• OR ਗੇਟ: ਕੋਈ ਇੱਕ ਵੀ 1 ਹੋਵੇ ਤਾਂ ਆਊਟਪੁੱਟ 1 ਮਿਲਦੀ ਹੈ।\n• NOT ਗੇਟ: 0 ਨੂੰ 1 ਅਤੇ 1 ਨੂੰ 0 ਵਿੱਚ ਬਦਲਦਾ ਹੈ।\n• NAND ਅਤੇ NOR: ਯੂਨੀਵਰਸਲ ਗੇਟ, ਇਹਨਾਂ ਨਾਲ ਦੁਨੀਆ ਦਾ ਹਰ ਸਰਕਟ ਬਣ ਸਕਦਾ ਹੈ।\n• XOR: ਜਦੋਂ ਦੋਵੇਂ ਬਿੱਟ ਵੱਖਰੇ ਹੋਣ (0 ਅਤੇ 1), ਤਾਂ 1 ਦਿੰਦਾ ਹੈ।\n\n3. ਕਾਰਨੋਫ ਮੈਪ (K-Map):\nਲੌਜਿਕ ਸਰਕਟਾਂ ਵਿੱਚੋਂ ਫਾਲਤੂ ਗੇਟ ਹਟਾ ਕੇ ਖ਼ਰਚਾ ਅਤੇ ਸਪੀਡ ਸੁਧਾਰਨ ਦਾ ਤਰੀਕਾ।\n\n4. ਫੁੱਲ ਐਡਰ (Full Adder):\nਤਿੰਨ ਬਿੱਟਾਂ (A, B, ਅਤੇ ਪਿਛਲਾ Carry) ਨੂੰ ਜੋੜ ਕੇ Sum ਅਤੇ Carry ਦਿੰਦਾ ਹੈ।',
          practicalExampleEn:
            'Designing an automotive seatbelt warning chime system: A chime must sound (Chime = 1) if the ignition is ON (I = 1) AND the driver is seated (S = 1) AND the seatbelt is NOT buckled (B = 0). The Boolean expression is Chime = I · S · B̄. This is built in hardware using one inverter (NOT gate on seatbelt sensor) and one 3-input AND gate.',
          practicalExamplePa:
            'ਕਾਰ ਵਿੱਚ ਸੀਟਬੈਲਟ ਦੀ ਚੇਤਾਵਨੀ ਵਾਲਾ ਬੀਪਰ: ਘੰਟੀ ਤਾਂ ਹੀ ਵੱਜਣੀ ਚਾਹੀਦੀ ਹੈ ਜੇਕਰ ਕਾਰ ਸਟਾਰਟ ਹੋਵੇ (I = 1), ਸੀਟ ਉੱਤੇ ਬੰਦਾ ਬੈਠਾ ਹੋਵੇ (S = 1), ਪਰ ਸੀਟਬੈਲਟ ਨਾ ਲੱਗੀ ਹੋਵੇ (B = 0)। ਬੂਲੀਅਨ ਫਾਰਮੂਲਾ: Chime = I · S · (NOT B)। ਇਹ ਸਰਕਟ ਇੱਕ NOT ਗੇਟ ਅਤੇ ਇੱਕ 3-ਇਨਪੁਟ AND ਗੇਟ ਨਾਲ ਬਣਦਾ ਹੈ।',
          codeDemo: `// TypeScript: Binary Two's Complement & Full Adder Simulation
export function toTwosComplement8Bit(num: number): string {
  if (num < -128 || num > 127) throw new Error('Out of 8-bit signed range (-128 to +127)');
  const unsignedVal = (num < 0) ? (256 + num) : num;
  return unsignedVal.toString(2).padStart(8, '0');
}

export function simulateFullAdder(a: 0 | 1, b: 0 | 1, cin: 0 | 1) {
  const sum = ((a ^ b) ^ cin) as 0 | 1;
  const cout = ((a & b) | (cin & (a ^ b))) as 0 | 1;
  return { sum, cout };
}

// Verification: 1 + 1 with carry in 0:
const fa = simulateFullAdder(1, 1, 0);
console.log('Full Adder 1+1:', 'Sum =', fa.sum, 'Carry =', fa.cout); // Sum=0, Cout=1 (Binary "10" = 2)
console.log('-18 in 8-bit 2s Complement:', toTwosComplement8Bit(-18)); // 11101110`,
          misconceptionsJson: [
            {
              myth: 'Digital logic gates consume zero electrical energy when in a steady state.',
              truthEn:
                'While CMOS gates draw virtually zero static current in steady state, real-world TTL gates draw continuous static bias current through internal bipolar resistors. Furthermore, during high-speed transitions, CMOS gates consume dynamic power (P = C * V^2 * f) and shoot-through currents.',
              truthPa:
                'CMOS ਚਿੱਪਾਂ ਸਥਿਰ ਹਾਲਤ ਵਿੱਚ ਬਹੁਤ ਘੱਟ ਕਰੰਟ ਲੈਂਦੀਆਂ ਹਨ, ਪਰ ਜਦੋਂ ਕਰੋੜਾਂ ਵਾਰ ਆਨ-ਆਫ ਹੁੰਦੀਆਂ ਹਨ (ਜਿਵੇਂ ਕੰਪਿਊਟਰ CPU), ਤਾਂ ਉਹ ਬਹੁਤ ਜ਼ਿਆਦਾ ਬਿਜਲੀ ਅਤੇ ਗਰਮੀ ਪੈਦਾ ਕਰਦੀਆਂ ਹਨ (P = C * V^2 * f)।',
            },
            {
              myth: 'Two\'s complement addition can never result in an arithmetic error.',
              truthEn:
                'If two large positive numbers are added and the result exceeds +127 (in an 8-bit register), the sum wraps around into negative numbers, setting the hardware Overflow Flag (V). Software must check this flag.',
              truthPa:
                'ਜੇਕਰ ਦੋ ਵੱਡੇ ਪਾਜ਼ਿਟਿਵ ਨੰਬਰ ਜੋੜਨ ਤੇ ਉੱਤਰ 127 ਤੋਂ ਵੱਡਾ ਹੋ ਜਾਵੇ, ਤਾਂ 8-ਬਿੱਟ ਵਿੱਚ ਉਹ ਪੁੱਠਾ ਨੈਗੇਟਿਵ ਬਣ ਜਾਂਦਾ ਹੈ (Arithmetic Overflow)। ਇਸ ਲਈ ਓਵਰਫਲੋਅ ਫਲੈਗ ਚੈੱਕ ਕਰਨਾ ਪੈਂਦਾ ਹੈ।',
            },
            {
              myth: 'A multiplexer (MUX) can only route digital 0s and 1s.',
              truthEn:
                'Digital multiplexers only route logic levels. However, analog multiplexers/switches (such as the CD4051 or 74HC4051) use bidirectional transmission gates that seamlessly route continuous analog audio and sensor voltages.',
              truthPa:
                'ਡਿਜੀਟਲ MUX ਸਿਰਫ਼ 0 ਅਤੇ 1 ਚਲਾਉਂਦਾ ਹੈ, ਪਰ ਐਨਾਲਾਗ MUX (ਜਿਵੇਂ CD4051) ਸੈਂਸਰਾਂ ਦੀਆਂ ਵੋਲਟੇਜਾਂ ਅਤੇ ਗੀਤਾਂ ਦੇ ਆਡੀਓ ਸਿਗਨਲ ਨੂੰ ਵੀ ਬਿਨਾਂ ਵਿਗਾੜੇ ਚੁਣ ਸਕਦਾ ਹੈ।',
            },
          ],
          terminologyJson: [
            {
              term: 'Two’s Complement',
              punjabi: 'ਟੂਅਜ਼ ਕੰਪਲੀਮੈਂਟ (Two’s Complement)',
              meaningEn: 'Standard binary representation for signed integers where negative values are obtained by inverting bits and adding 1.',
              meaningPa: 'ਬਾਈਨਰੀ ਵਿੱਚ ਨੈਗੇਟਿਵ ਨੰਬਰ ਲਿਖਣ ਦਾ ਵਿਸ਼ਵਵਿਆਪੀ ਤਰੀਕਾ।',
            },
            {
              term: 'Karnaugh Map (K-Map)',
              punjabi: 'ਕਾਰਨੋਫ ਮੈਪ (K-Map)',
              meaningEn: 'Graphical tabular method for simplifying Boolean expressions without manual algebraic factoring.',
              meaningPa: 'ਬੂਲੀਅਨ ਸਮੀਕਰਨਾਂ ਨੂੰ ਸੌਖਾ ਕਰਨ ਅਤੇ ਫਾਲਤੂ ਲੌਜਿਕ ਗੇਟ ਹਟਾਉਣ ਦਾ ਗ੍ਰਾਫੀਕਲ ਤਰੀਕਾ।',
            },
            {
              term: 'Multiplexer (MUX)',
              punjabi: 'ਮਲਟੀਪਲੈਕਸਰ (MUX)',
              meaningEn: 'Combinational circuit selecting one of multiple data input lines and forwarding it to a single output line.',
              meaningPa: 'ਕਈ ਇਨਪੁਟ ਲਾਈਨਾਂ ਵਿੱਚੋਂ ਚੋਣ ਕਰਕੇ ਕਿਸੇ ਇੱਕ ਨੂੰ ਆਊਟਪੁੱਟ ਤੇ ਭੇਜਣ ਵਾਲਾ ਡਿਜੀਟਲ ਸਵਿੱਚ।',
            },
            {
              term: 'Decoder',
              punjabi: 'ਡੀਕੋਡਰ (Decoder)',
              meaningEn: 'Combinational circuit converting an N-bit coded input into a maximum of 2^N unique active output lines.',
              meaningPa: 'ਬਾਈਨਰੀ ਕੋਡ ਨੂੰ ਪਛਾਣ ਕੇ ਕਿਸੇ ਇੱਕ ਖਾਸ ਲਾਈਨ ਨੂੰ ਚਾਲੂ ਕਰਨ ਵਾਲਾ ਸਰਕਟ।',
            },
            {
              term: 'Universal Gate',
              punjabi: 'ਯੂਨੀਵਰਸਲ ਗੇਟ (NAND / NOR)',
              meaningEn: 'Logic gate capable of implementing any Boolean function without requiring any other gate type.',
              meaningPa: 'ਉਹ ਲੌਜਿਕ ਗੇਟ (ਜਿਵੇਂ NAND ਜਾਂ NOR) ਜਿਸ ਨਾਲ ਬਾਕੀ ਸਾਰੇ ਗੇਟ ਬਣਾਏ ਜਾ ਸਕਦੇ ਹਨ।',
            },
            {
              term: 'De Morgan’s Laws',
              punjabi: 'ਡੀ ਮੌਰਗਨ ਦੇ ਨਿਯਮ',
              meaningEn: 'Theorems stating that the complement of a product is the sum of complements, and vice versa.',
              meaningPa: 'NAND ਅਤੇ NOR ਗੇਟਾਂ ਨੂੰ ਆਪਸ ਵਿੱਚ ਬਦਲਣ ਦੇ ਗਣਿਤਕ ਨਿਯਮ।',
            },
          ],
          interactiveLabId: 'binary-logic',
          exercisePromptEn:
            'Problem Solving: (1) Convert decimal -42 into 8-bit signed two’s complement binary. (2) Use De Morgan’s laws to simplify the expression: Y = NOT( (A AND NOT(B)) OR (NOT(C) AND D) ).',
          exercisePromptPa:
            'ਸਵਾਲ: (1) ਡੈਸੀਮਲ ਨੰਬਰ -42 ਨੂੰ 8-ਬਿੱਟ ਟੂਅਜ਼ ਕੰਪਲੀਮੈਂਟ ਬਾਈਨਰੀ ਵਿੱਚ ਬਦਲੋ। (2) ਡੀ ਮੌਰਗਨ ਦੇ ਨਿਯਮ ਲਗਾ ਕੇ ਸਮੀਕਰਨ Y = NOT( (A AND NOT(B)) OR (NOT(C) AND D) ) ਨੂੰ ਸਰਲ ਕਰੋ।',
          summaryEn:
            'Digital logic translates human arithmetic and deterministic decision-making into silicon gates: Boolean theorems minimize component counts, two’s complement enables unified addition and subtraction, and combinational multiplexers route data streams.',
          summaryPa:
            'ਡਿਜੀਟਲ ਲੌਜਿਕ ਇਨਸਾਨੀ ਫੈਸਲਿਆਂ ਨੂੰ ਸਿਲੀਕਾਨ ਚਿਪਸ ਵਿੱਚ ਬਦਲਦਾ ਹੈ: ਬੂਲੀਅਨ ਨਿਯਮ ਸਰਕਟ ਛੋਟਾ ਕਰਦੇ ਹਨ, ਟੂਅਜ਼ ਕੰਪਲੀਮੈਂਟ ਜੋੜ-ਘਟਾਓ ਸੌਖਾ ਕਰਦਾ ਹੈ, ਅਤੇ ਮਲਟੀਪਲੈਕਸਰ ਡਾਟੇ ਨੂੰ ਸਹੀ ਰਸਤੇ ਤੋਰਦੇ ਹਨ।',
          furtherReadingJson: [
            'Digital Design: With an Introduction to the Verilog HDL by M. Morris Mano & Michael D. Ciletti',
            'Fundamentals of Logic Design by Charles H. Roth Jr. & Larry L. Kinney',
            'Digital Integrated Circuits: A Design Perspective by Jan M. Rabaey',
          ],
          quiz: {
            titleEn: 'Level 5 Assessment: Binary Arithmetic, Gates & Combinational Logic',
            titlePa: 'ਲੈਵਲ 5 ਟੈਸਟ: ਬਾਈਨਰੀ ਗਣਿਤ, ਗੇਟ ਅਤੇ ਕੰਬੀਨੇਸ਼ਨਲ ਲੌਜਿਕ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'Twos Complement',
                promptEn: 'What is the 8-bit signed Two’s Complement binary representation of decimal -1?',
                promptPa: 'ਡੈਸੀਮਲ ਨੰਬਰ -1 ਦਾ 8-ਬਿੱਟ ਸਾਈਨਡ ਟੂਅਜ਼ ਕੰਪਲੀਮੈਂਟ ਬਾਈਨਰੀ ਰੂਪ ਕੀ ਹੁੰਦਾ ਹੈ?',
                optionsJson: ['11111111', '10000001', '00000001', '10000000'],
                correctAnswer: '11111111',
                explanationEn:
                  '+1 = 00000001. Invert bits = 11111110. Add 1 = 11111111.',
                explanationPa:
                  '+1 = 00000001। ਬਿੱਟ ਉਲਟਾਓ = 11111110। 1 ਜੋੜੋ = 11111111।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Hexadecimal Conversion',
                promptEn: 'What is the binary equivalent of hexadecimal 0x3F?',
                promptPa: 'ਹੈਕਸਾਡੈਸੀਮਲ 0x3F ਦਾ ਬਾਈਨਰੀ ਮੁੱਲ ਕੀ ਹੈ?',
                optionsJson: ['00111111', '00111110', '00101111', '11110011'],
                correctAnswer: '00111111',
                explanationEn:
                  'Hex 3 = 0011 in binary; Hex F = 1111 in binary. Combined: 00111111.',
                explanationPa:
                  '3 = 0011, F = 1111। ਇਕੱਠੇ ਕਰਨ ਤੇ 00111111 ਬਣਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Universal Gates',
                promptEn: 'Which two logic gate types are universally capable of constructing all other Boolean logic gates?',
                promptPa: 'ਕਿਹੜੇ ਦੋ ਗੇਟਾਂ ਨੂੰ "ਯੂਨੀਵਰਸਲ ਗੇਟ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ ਜਿਨ੍ਹਾਂ ਨਾਲ ਬਾਕੀ ਸਾਰੇ ਗੇਟ ਬਣਾਏ ਜਾ ਸਕਦੇ ਹਨ?',
                optionsJson: ['NAND and NOR', 'AND and OR', 'XOR and XNOR', 'NOT and AND'],
                correctAnswer: 'NAND and NOR',
                explanationEn:
                  'NAND and NOR gates are functionally complete: any Boolean expression can be synthesized exclusively using either NAND or NOR gates.',
                explanationPa:
                  'NAND ਅਤੇ NOR ਯੂਨੀਵਰਸਲ ਗੇਟ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'XOR Operation',
                promptEn: 'What is the output of a 2-input XOR gate when both inputs A and B are equal to logic 1?',
                promptPa: 'ਜਦੋਂ XOR ਗੇਟ ਦੇ ਦੋਵੇਂ ਇਨਪੁਟ (A ਅਤੇ B) 1 ਹੋਣ ਤਾਂ ਆਊਟਪੁੱਟ ਕੀ ਹੋਵੇਗੀ?',
                optionsJson: ['Logic 0', 'Logic 1', 'High Impedance', 'Undefined'],
                correctAnswer: 'Logic 0',
                explanationEn:
                  'XOR outputs 1 only when inputs are strictly different (odd parity). When both inputs are 1 (equal), the output is 0.',
                explanationPa:
                  'XOR ਗੇਟ ਸਿਰਫ਼ ਉਦੋਂ 1 ਦਿੰਦਾ ਹੈ ਜਦੋਂ ਇਨਪੁਟ ਵੱਖਰੇ ਹੋਣ। ਦੋਵੇਂ 1 ਹੋਣ ਤੇ ਆਊਟਪੁੱਟ 0 ਹੁੰਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'De Morgans Law',
                promptEn: 'According to De Morgan’s Law, the negated conjunction NOT(A AND B) is logically equivalent to:',
                promptPa: 'ਡੀ ਮੌਰਗਨ ਦੇ ਨਿਯਮ ਅਨੁਸਾਰ NOT(A AND B) ਕਿਸਦੇ ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ?',
                optionsJson: ['NOT(A) OR NOT(B)', 'NOT(A) AND NOT(B)', 'A OR B', 'NOT(A OR B)'],
                correctAnswer: 'NOT(A) OR NOT(B)',
                explanationEn:
                  '(A · B)̄ = Ā + B̄ (The complement of an AND product is the OR sum of individual complements).',
                explanationPa:
                  'NOT(A AND B) = (NOT A) OR (NOT B)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Karnaugh Map Adjacency',
                promptEn: 'Why are rows and columns in a Karnaugh map labeled using Gray code (00, 01, 11, 10) instead of standard binary counting (00, 01, 10, 11)?',
                promptPa: 'ਕੇ-ਮੈਪ ਵਿੱਚ ਆਮ ਬਾਈਨਰੀ ਦੀ ਥਾਂ ਗ੍ਰੇਅ ਕੋਡ (00, 01, 11, 10) ਕਿਉਂ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
                optionsJson: [
                  'To ensure that adjacent matrix cells differ by exactly one single binary variable, enabling algebraic elimination',
                  'To reduce the physical area of the drawing',
                  'To prevent odd parity errors',
                  'It is purely an arbitrary historic convention',
                ],
                correctAnswer: 'To ensure that adjacent matrix cells differ by exactly one single binary variable, enabling algebraic elimination',
                explanationEn:
                  'Gray code adjacency guarantees that moving between any two adjacent squares changes exactly one variable, allowing grouping to cancel out that variable.',
                explanationPa:
                  'ਤਾਂ ਜੋ ਨਾਲ ਲੱਗਦੇ ਖਾਨਿਆਂ ਵਿੱਚ ਸਿਰਫ਼ ਇੱਕ ਬਿੱਟ ਦਾ ਫ਼ਰਕ ਹੋਵੇ, ਜਿਸ ਨਾਲ ਫਾਲਤੂ ਵੇਰੀਏਬਲ ਆਸਾਨੀ ਨਾਲ ਕੱਟਿਆ ਜਾ ਸਕੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Full Adder Sum',
                promptEn: 'What is the Boolean logic formula for the Sum output of a 1-bit Full Adder with inputs A, B, and Cin?',
                promptPa: 'ਫੁੱਲ ਐਡਰ (Full Adder) ਦੇ Sum ਆਊਟਪੁੱਟ ਦਾ ਬੂਲੀਅਨ ਫਾਰਮੂਲਾ ਕੀ ਹੈ?',
                optionsJson: ['A ⊕ B ⊕ Cin', 'A · B · Cin', '(A + B) · Cin', 'A ⊕ B · Cin'],
                correctAnswer: 'A ⊕ B ⊕ Cin',
                explanationEn:
                  'Sum is the odd-parity XOR combination of the three input bits: Sum = A ⊕ B ⊕ Cin.',
                explanationPa:
                  'Sum = A ⊕ B ⊕ Cin (ਤਿੰਨਾਂ ਬਿੱਟਾਂ ਦਾ XOR)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Multiplexer Select Lines',
                promptEn: 'How many binary select control lines are required for an 8-to-1 data multiplexer (8:1 MUX)?',
                promptPa: '8-ਤੋਂ-1 ਮਲਟੀਪਲੈਕਸਰ (8:1 MUX) ਵਿੱਚ ਕਿੰਨੀਆਂ ਸਿਲੈਕਟ (ਚੋਣ) ਲਾਈਨਾਂ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ?',
                optionsJson: ['3 select lines', '8 select lines', '4 select lines', '2 select lines'],
                correctAnswer: '3 select lines',
                explanationEn:
                  '2^N = Number of inputs. Since 2^3 = 8, exactly 3 select lines (S0, S1, S2) are needed.',
                explanationPa:
                  'ਕਿਉਂਕਿ 2^3 = 8 ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ 3 ਸਿਲੈਕਟ ਲਾਈਨਾਂ ਚਾਹੀਦੀਆਂ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Decoder Active Low',
                promptEn: 'In a 3-to-8 line decoder (such as the 74HC138), what does an "Active-Low" output mean?',
                promptPa: '74HC138 ਵਰਗੇ ਡੀਕੋਡਰ ਵਿੱਚ "Active-Low" ਆਊਟਪੁੱਟ ਦਾ ਕੀ ਮਤਲਬ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'The selected decoded output line drops to logic 0 (0 V), while all unselected lines remain at logic 1',
                  'The output voltage is limited to 1.0 V',
                  'The chip operates only at low clock speeds',
                  'The chip is turned off',
                ],
                correctAnswer: 'The selected decoded output line drops to logic 0 (0 V), while all unselected lines remain at logic 1',
                explanationEn:
                  'Active-low outputs indicate active assertion by driving low (0 V / logic 0), which provides better noise margin and sink current capacity in TTL/CMOS.',
                explanationPa:
                  'ਚੁਣੀ ਹੋਈ ਲਾਈਨ 0V (Low) ਹੋ ਜਾਂਦੀ ਹੈ ਅਤੇ ਬਾਕੀ ਸਾਰੀਆਂ 5V (High) ਰਹਿੰਦੀਆਂ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Arithmetic Overflow',
                promptEn: 'In an 8-bit signed two’s complement system, what happens if you add +100 and +50?',
                promptPa: '8-ਬਿੱਟ ਸਾਈਨਡ ਟੂਅਜ਼ ਕੰਪਲੀਮੈਂਟ ਵਿੱਚ +100 ਅਤੇ +50 ਨੂੰ ਜੋੜਨ ਤੇ ਕੀ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'Arithmetic overflow occurs (+150 exceeds +127 maximum limit) and wraps around to -106',
                  'The CPU halts permanently',
                  'The sum is perfectly stored as +150',
                  'The carry bit prevents the addition',
                ],
                correctAnswer: 'Arithmetic overflow occurs (+150 exceeds +127 maximum limit) and wraps around to -106',
                explanationEn:
                  '8-bit signed range is -128 to +127. 150 exceeds +127; binary 01100100 (+100) + 00110010 (+50) = 10010110, which represents -106 in two’s complement (setting the V overflow flag).',
                explanationPa:
                  'ਕਿਉਂਕਿ 8-ਬਿੱਟ ਵਿੱਚ ਵੱਧ ਤੋਂ ਵੱਧ +127 ਹੀ ਆ ਸਕਦਾ ਹੈ, ਇਸ ਲਈ ਓਵਰਫਲੋਅ ਹੋ ਕੇ ਉੱਤਰ ਨੈਗੇਟਿਵ (-106) ਬਣ ਜਾਂਦਾ ਹੈ।',
              },
            ],
          },
        },
        {
          slug: 'sequential-logic-flipflops-counters-fsm',
          orderIndex: 2,
          titleEn: '5.2 Latches, Flip-Flops, Synchronous Counters, FSMs & Timing Analysis',
          titlePa: '5.2 ਲੈਚ, ਫਲਿੱਪ-ਫਲੌਪ, ਕਾਊਂਟਰ, FSM ਅਤੇ ਟਾਈਮਿੰਗ ਵਿਸ਼ਲੇਸ਼ਣ',
          objectivesJson: [
            'Differentiate transparent latches from edge-triggered D and JK flip-flops with setup/hold timing diagrams',
            'Design 4-bit synchronous up/down binary counters using D or JK flip-flops and look-ahead carry logic',
            'Model Finite-State Machines (FSM) comparing Mealy (input-dependent output) and Moore (state-dependent output) state architectures',
            'Calculate maximum clock frequency (f_max) accounting for propagation delay, logic delay, setup time, and clock skew',
            'Compare CMOS (74HC/AHC) and TTL (74LS) logic families for supply voltages, logic levels, noise margins, and fan-out',
          ],
          prerequisitesJson: ['5.1 Number Systems, Boolean Algebra, Logic Gates & Combinational Circuits'],
          childAnalogyEn:
            'Think of a photographer taking a photo of a running horse! A transparent Latch is like a video camera: as long as the shutter is open, every movement is recorded continuously. A Flip-Flop is like a flash snapshot: at the exact microsecond the camera flash triggers (clock rising edge), it freezes the horse’s position into memory, ignoring everything that happens before or after until the next photo is taken!',
          childAnalogyPa:
            'ਦੌੜਦੇ ਘੋੜੇ ਦੀ ਫੋਟੋ ਖਿੱਚਣ ਵਾਲੇ ਕੈਮਰੇ ਦੀ ਕਲਪਨਾ ਕਰੋ! ਲੈਚ (Latch) ਇੱਕ ਖੁੱਲ੍ਹੇ ਵੀਡੀਓ ਕੈਮਰੇ ਵਾਂਗ ਹੈ ਜੋ ਹਰ ਹਰਕਤ ਲਗਾਤਾਰ ਰਿਕਾਰਡ ਕਰਦਾ ਹੈ। ਫਲਿੱਪ-ਫਲੌਪ (Flip-Flop) ਕੈਮਰੇ ਦੇ ਤੇਜ਼ ਫਲੈਸ਼ ਵਾਂਗ ਹੈ: ਜਿਸ ਨੈਨੋਸਕਿੰਟ ਉੱਤੇ ਕਲਾਕ (Clock) ਦੀ ਟਿਕ ਹੁੰਦੀ ਹੈ, ਇਹ ਉਸੇ ਪਲ ਡਾਟੇ ਦੀ ਫੋਟੋ ਖਿੱਚ ਕੇ ਮੈਮੋਰੀ ਵਿੱਚ ਸੇਵ ਕਰ ਲੈਂਦਾ ਹੈ, ਅਤੇ ਅਗਲੀ ਟਿਕ ਤੱਕ ਬਾਹਰਲੀ ਹਰ ਹਿਲਜੁਲ ਨੂੰ ਨਜ਼ਰਅੰਦਾਜ਼ ਕਰ ਦਿੰਦਾ ਹੈ!',
          technicalExplanationEn:
            'Sequential logic incorporates memory (state) that depends on both current inputs and past history:\n\n1. Latches vs Flip-Flops:\n• SR Latch: Cross-coupled NOR or NAND gates. Level-sensitive. Unstable when S=1, R=1 simultaneously.\n• D Flip-Flop (Delay): Edge-triggered storage element. Captures D input on rising (or falling) clock edge: Q(next) = D.\n• JK Flip-Flop: Universal sequential element. Eliminates forbidden state: when J=1, K=1, it toggles (Q(next) = Q̄).\n• T Flip-Flop: Toggle flip-flop. Divider by 2.\n\n2. Setup Time, Hold Time & Metastability:\n• Setup Time (t_su): Minimum time data must remain stable BEFORE the active clock edge.\n• Hold Time (t_hold): Minimum time data must remain stable AFTER the active clock edge.\n• Metastability: If data violates t_su or t_hold, the flip-flop output enters an unstable balance state between 0 and 1, taking an indeterminate time to resolve, causing system crashes.\n\n3. Synchronous Counters:\nUnlike ripple counters where clock propagates asynchronously through each stage creating accumulating skew, synchronous counters clock every flip-flop simultaneously. Maximum frequency is determined by logic gate delay between stages.\n\n4. Finite State Machines (FSM):\n• Moore Machine: Outputs depend strictly on current state registers.\n• Mealy Machine: Outputs depend on both current state registers AND instantaneous primary inputs (responds faster, but outputs can glitch with asynchronous inputs).\n\n5. Logic Families & Noise Margins:\n• 5V TTL: V_IL(max) = 0.8V, V_IH(min) = 2.0V, V_OL(max) = 0.4V, V_OH(min) = 2.4V.\n• 3.3V LVCMOS: V_IL = 0.8V, V_IH = 2.0V, V_OL = 0.2V, V_OH = 2.4V.\n• Noise Margin High (NMH) = V_OH - V_IH. Noise Margin Low (NML) = V_IL - V_OL.\n• Tri-State Logic: Outputs can be 0, 1, or High-Z (floating/disconnected), enabling shared bidirectional data buses.',
          technicalExplanationPa:
            'ਸੀਕੁਐਂਸ਼ੀਅਲ ਲੌਜਿਕ ਅਤੇ ਮੈਮੋਰੀ ਦੇ ਅਸੂਲ:\n\n1. ਫਲਿੱਪ-ਫਲੌਪ (Flip-Flops):\nਇਹ 1 ਬਿੱਟ ਮੈਮੋਰੀ ਸਟੋਰ ਕਰਨ ਦਾ ਸਭ ਤੋਂ ਛੋਟਾ ਯੰਤਰ ਹੈ:\n• D ਫਲਿੱਪ-ਫਲੌਪ: ਕਲਾਕ ਪਲਸ ਆਉਂਦੇ ਹੀ D ਉੱਤੇ ਪਿਆ ਡਾਟਾ Q ਉੱਤੇ ਸੇਵ ਹੋ ਜਾਂਦਾ ਹੈ।\n• JK ਫਲਿੱਪ-ਫਲੌਪ: ਜਦੋਂ ਦੋਵੇਂ J=1 ਅਤੇ K=1 ਹੋਣ ਤਾਂ ਇਹ ਹਰ ਕਲਾਕ ਤੇ ਉਲਟਦਾ ਹੈ (Toggle)।\n\n2. ਟਾਈਮਿੰਗ ਅਤੇ ਮੈਟਾਸਟੇਬਿਲਟੀ:\n• Setup Time: ਕਲਾਕ ਆਉਣ ਤੋਂ ਕਿੰਨਾ ਸਮਾਂ ਪਹਿਲਾਂ ਡਾਟਾ ਸਥਿਰ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।\n• Hold Time: ਕਲਾਕ ਆਉਣ ਤੋਂ ਕਿੰਨਾ ਸਮਾਂ ਬਾਅਦ ਤੱਕ ਡਾਟਾ ਨਹੀਂ ਹਿੱਲਣਾ ਚਾਹੀਦਾ।\nਜੇਕਰ ਇਹ ਨਿਯਮ ਟੁੱਟੇ ਤਾਂ ਫਲਿੱਪ-ਫਲੌਪ ਅੱਧ-ਵਿਚਕਾਰ ਫਸ ਜਾਂਦਾ ਹੈ (Metastability) ਅਤੇ ਕੰਪਿਊਟਰ ਹੈਂਗ ਹੋ ਜਾਂਦਾ ਹੈ!\n\n3. ਫਿਨਾਈਟ ਸਟੇਟ ਮਸ਼ੀਨਾਂ (FSM):\nਕੰਪਿਊਟਰ ਪ੍ਰੋਸੈਸਰਾਂ ਅਤੇ ਟ੍ਰੈਫਿਕ ਲਾਈਟਾਂ ਦੇ ਫੈਸਲੇ ਲੈਣ ਵਾਲਾ ਮਾਡਲ। ਮੂਰ (Moore) ਵਿੱਚ ਆਊਟਪੁੱਟ ਸਿਰਫ਼ ਸਟੇਟ ਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ।\n\n4. ਟ੍ਰਾਈ-ਸਟੇਟ ਲੌਜਿਕ (Tri-State):\nਤਿੰਨ ਹਾਲਤਾਂ: 0, 1, ਅਤੇ High-Z (ਡਿਸਕਨੈਕਟ)। ਇਹ ਇੱਕੋ ਬੱਸ ਤਾਰ ਉੱਤੇ ਕਈ ਚਿਪਸ ਨੂੰ ਆਪਸ ਵਿੱਚ ਬਿਨਾਂ ਟਕਰਾਏ ਡਾਟਾ ਭੇਜਣ ਦਿੰਦੀ ਹੈ।',
          practicalExampleEn:
            'Digital stopwatch second counter: Four flip-flops are connected as a synchronous BCD (Binary Coded Decimal) modulo-10 counter. It counts 0000 (0) through 1001 (9). On the tenth clock tick, an AND gate detects state 9, resets the counter to 0000, and sends a single carry pulse to the tens-of-seconds stage.',
          practicalExamplePa:
            'ਡਿਜੀਟਲ ਸਟਾਪਵਾਚ ਦਾ ਸੈਕਿੰਡ ਕਾਊਂਟਰ: ਚਾਰ ਫਲਿੱਪ-ਫਲੌਪ ਮਿਲ ਕੇ 0 ਤੋਂ 9 ਤੱਕ ਗਿਣਦੇ ਹਨ। ਜਿਵੇਂ ਹੀ 9 ਤੋਂ ਬਾਅਦ 10ਵਾਂ ਸੈਕਿੰਡ ਆਉਂਦਾ ਹੈ, ਸਰਕਟ ਆਪਣੇ-ਆਪ ਨੂੰ 0 ਕਰ ਲੈਂਦਾ ਹੈ ਅਤੇ ਅਗਲੇ ਡਿਸਪਲੇਅ ਨੂੰ ਇੱਕ ਪਲਸ ਭੇਜ ਕੇ 1 ਵਧਾ ਦਿੰਦਾ ਹੈ।',
          codeDemo: `// TypeScript: D Flip-Flop & Synchronous 4-bit Up-Counter Simulation
export class Synchronous4BitCounter {
  private count = 0;

  public clockTick(enable = true): number {
    if (enable) {
      this.count = (this.count + 1) % 16;
    }
    return this.count;
  }

  public reset(): void {
    this.count = 0;
  }

  public getBinaryString(): string {
    return this.count.toString(2).padStart(4, '0');
  }
}

// Timing Analysis Calculator
export function calcMaxClockFrequency(tPropNs: number, tCombNs: number, tSetupNs: number, tSkewNs: number) {
  const minPeriodNs = tPropNs + tCombNs + tSetupNs + tSkewNs;
  const maxFreqMhz = 1000 / minPeriodNs;
  return { minPeriodNs, maxFreqMhz };
}

// Verification: Flip-flop t_prop=3ns, combinational logic=5ns, t_setup=2ns, clock skew=1ns
const timing = calcMaxClockFrequency(3, 5, 2, 1);
console.log('Min Clock Period:', timing.minPeriodNs, 'ns'); // 11 ns
console.log('Max Clock Freq:', timing.maxFreqMhz.toFixed(1), 'MHz'); // 90.9 MHz`,
          misconceptionsJson: [
            {
              myth: 'An asynchronous ripple counter is just as good as a synchronous counter for high-speed processors.',
              truthEn:
                'In ripple counters, each flip-flop clock is triggered by the previous stage’s output. Across an 8-bit counter, the cumulative propagation delay causes transient illegal states ("glitches" or decoding spikes) that corrupt high-speed digital systems.',
              truthPa:
                'ਰਿਪਲ ਕਾਊਂਟਰ ਵਿੱਚ ਹਰ ਪੜਾਅ ਪਿਛਲੇ ਪੜਾਅ ਦੀ ਉਡੀਕ ਕਰਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਲੇਟ ਹੋ ਕੇ ਗਲਤ ਨੰਬਰ ਬਣਦੇ ਹਨ। ਹਾਈ ਸਪੀਡ ਲਈ ਸਿੰਕ੍ਰੋਨਸ ਕਾਊਂਟਰ ਜ਼ਰੂਰੀ ਹੈ ਜਿੱਥੇ ਸਾਰੇ ਇੱਕੋ ਕਲਾਕ ਨਾਲ ਚੱਲਦੇ ਹਨ।',
            },
            {
              myth: 'Metastability in flip-flops can be completely eliminated by designing a faster circuit.',
              truthEn:
                'Physics dictates that whenever an asynchronous input changes unpredictably during the setup/hold aperture, there is always a non-zero statistical probability of entering a metastable state. It is mitigated using 2-stage or 3-stage synchronizer flip-flop chains, raising the Mean Time Between Failures (MTBF) to centuries.',
              truthPa:
                'ਮੈਟਾਸਟੇਬਿਲਟੀ ਨੂੰ ਕਦੇ 100% ਖ਼ਤਮ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ। ਇਸ ਲਈ ਦੋ ਜਾਂ ਤਿੰਨ ਫਲਿੱਪ-ਫਲੌਪ ਲਗਾਤਾਰ ਲਗਾਏ ਜਾਂਦੇ ਹਨ (Synchronizer Chain) ਤਾਂ ਜੋ ਗਲਤੀ ਦੀ ਸੰਭਾਵਨਾ ਲੱਖਾਂ ਸਾਲਾਂ ਵਿੱਚ ਇੱਕ ਵਾਰ ਰਹਿ ਜਾਵੇ।',
            },
            {
              myth: 'TTL 5V chips can directly receive 3.3V CMOS outputs without any buffer.',
              truthEn:
                '3.3V LVCMOS has Voh_min = 2.4V, which just meets 5V TTL Vih_min = 2.0V, but leaves a precarious noise margin of only 0.4V. Conversely, driving 3.3V CMOS inputs with 5V TTL can destroy the 3.3V chip unless its inputs are explicitly 5V-tolerant.',
              truthPa:
                '3.3V ਵਾਲੀ ਚਿੱਪ ਨੂੰ 5V ਸਿੱਧਾ ਦੇਣ ਨਾਲ 3.3V ਵਾਲੀ ਚਿੱਪ ਸੜ ਸਕਦੀ ਹੈ। ਇਸ ਲਈ ਵਿਚਕਾਰ ਲੈਵਲ ਸ਼ਿਫਟਰ (Level Shifter) ਲਗਾਉਣਾ ਪੈਂਦਾ ਹੈ।',
            },
          ],
          terminologyJson: [
            {
              term: 'D Flip-Flop',
              punjabi: 'D ਫਲਿੱਪ-ਫਲੌਪ',
              meaningEn: 'Edge-triggered bistable multivibrator that stores one bit of data sampled at clock transition.',
              meaningPa: 'ਕਲਾਕ ਦੇ ਕਿਨਾਰੇ ਉੱਤੇ 1 ਬਿੱਟ ਡਾਟਾ ਸਟੋਰ ਕਰਨ ਵਾਲਾ ਮੈਮੋਰੀ ਸੈੱਲ।',
            },
            {
              term: 'Setup Time (t_su)',
              punjabi: 'ਸੈੱਟਅੱਪ ਸਮਾਂ',
              meaningEn: 'Required interval during which input data must be stable prior to the active clock edge.',
              meaningPa: 'ਕਲਾਕ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਡਾਟਾ ਸਥਿਰ ਰਹਿਣ ਲਈ ਲੋੜੀਂਦਾ ਸਮਾਂ।',
            },
            {
              term: 'Hold Time (t_hold)',
              punjabi: 'ਹੋਲਡ ਸਮਾਂ',
              meaningEn: 'Required interval during which input data must remain stable following the active clock edge.',
              meaningPa: 'ਕਲਾਕ ਆਉਣ ਤੋਂ ਬਾਅਦ ਡਾਟਾ ਸਥਿਰ ਰੱਖਣ ਲਈ ਲੋੜੀਂਦਾ ਸਮਾਂ।',
            },
            {
              term: 'Metastability',
              punjabi: 'ਮੈਟਾਸਟੇਬਿਲਟੀ (ਅਸਥਿਰ ਸੰਤੁਲਨ)',
              meaningEn: 'Unstable intermediate state where a flip-flop fails to settle to 0 or 1 within specified propagation delay.',
              meaningPa: 'ਫਲਿੱਪ-ਫਲੌਪ ਦਾ 0 ਅਤੇ 1 ਦੇ ਵਿਚਕਾਰ ਅਨਿਸ਼ਚਿਤ ਸਮੇਂ ਲਈ ਲਟਕ ਜਾਣਾ।',
            },
            {
              term: 'Finite State Machine (FSM)',
              punjabi: 'ਫਿਨਾਈਟ ਸਟੇਟ ਮਸ਼ੀਨ (FSM)',
              meaningEn: 'Mathematical computational model consisting of a discrete set of states, inputs, and transition logic.',
              meaningPa: 'ਕੰਪਿਊਟਰੀ ਫੈਸਲਿਆਂ ਅਤੇ ਪ੍ਰੋਸੈਸਰਾਂ ਦਾ ਸਟੇਟ-ਅਧਾਰਿਤ ਕੰਟਰੋਲ ਮਾਡਲ।',
            },
            {
              term: 'Tri-State Logic',
              punjabi: 'ਟ੍ਰਾਈ-ਸਟੇਟ ਲੌਜਿਕ',
              meaningEn: 'Logic output capable of High, Low, and high-impedance (High-Z) disconnected states.',
              meaningPa: 'ਆਊਟਪੁੱਟ ਦੀਆਂ 3 ਹਾਲਤਾਂ: 1, 0 ਅਤੇ ਹਾਈ-ਇੰਪੀਡੈਂਸ (ਬੱਸ ਤੋਂ ਅਲੱਗ ਹੋਣਾ)।',
            },
          ],
          interactiveLabId: 'binary-logic',
          exercisePromptEn:
            'Timing Calculation: A digital processor pipeline registers data through a D flip-flop with propagation delay t_prop = 1.8 ns and setup time t_setup = 1.2 ns. The combinational logic between stages has a maximum delay of 4.5 ns, and clock skew across the board is estimated at 0.5 ns. (1) Calculate the minimum clock period in nanoseconds. (2) Calculate the maximum guaranteed clock frequency in MHz.',
          exercisePromptPa:
            'ਟਾਈਮਿੰਗ ਗਣਨਾ: ਇੱਕ ਪ੍ਰੋਸੈਸਰ ਪਾਈਪਲਾਈਨ ਵਿੱਚ ਫਲਿੱਪ-ਫਲੌਪ ਦੀ t_prop = 1.8 ns ਅਤੇ t_setup = 1.2 ns ਹੈ। ਵਿਚਕਾਰਲੇ ਲੌਜਿਕ ਦੀ ਦੇਰੀ 4.5 ns ਹੈ ਅਤੇ ਕਲਾਕ ਸਕਿਊ 0.5 ns ਹੈ। (1) ਘੱਟੋ-ਘੱਟ ਕਲਾਕ ਪੀਰੀਅਡ (ns) ਕੱਢੋ। (2) ਵੱਧ ਤੋਂ ਵੱਧ ਕਲਾਕ ਫ੍ਰੀਕੁਐਂਸੀ (MHz) ਪਤਾ ਕਰੋ।',
          summaryEn:
            'Sequential logic orchestrates time, memory, and state: flip-flops freeze transient inputs into stable bits, synchronous counters step deterministically, and finite-state machines guide processor control pipelines.',
          summaryPa:
            'ਸੀਕੁਐਂਸ਼ੀਅਲ ਲੌਜਿਕ ਸਮੇਂ ਅਤੇ ਯਾਦਾਸ਼ਤ ਨੂੰ ਕੰਟਰੋਲ ਕਰਦਾ ਹੈ: ਫਲਿੱਪ-ਫਲੌਪ ਡਾਟਾ ਸਾਂਭਦੇ ਹਨ, ਕਾਊਂਟਰ ਸਮਾਂ ਗਿਣਦੇ ਹਨ, ਅਤੇ ਸਟੇਟ ਮਸ਼ੀਨਾਂ ਕੰਪਿਊਟਰ ਪ੍ਰੋਸੈਸਰ ਨੂੰ ਚਲਾਉਂਦੀਆਂ ਹਨ।',
          furtherReadingJson: [
            'CMOS VLSI Design: A Circuits and Systems Perspective by Neil H. E. Weste & David Harris',
            'Synchronous Design of Digital Systems by Charles H. Roth',
            'Texas Instruments Guide to Designing with Logic Families and Level Shifters',
          ],
          quiz: {
            titleEn: 'Level 5 Assessment: Flip-Flops, Counters & Timing Analysis',
            titlePa: 'ਲੈਵਲ 5 ਟੈਸਟ: ਫਲਿੱਪ-ਫਲੌਪ, ਕਾਊਂਟਰ ਅਤੇ ਟਾਈਮਿੰਗ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'D Flip Flop',
                promptEn: 'On the rising edge of the clock signal, what does a standard D Flip-Flop do?',
                promptPa: 'ਕਲਾਕ ਸਿਗਨਲ ਦੇ ਰਾਈਜ਼ਿੰਗ ਐੱਜ (ਚੜ੍ਹਦੇ ਕਿਨਾਰੇ) ਉੱਤੇ D ਫਲਿੱਪ-ਫਲੌਪ ਕੀ ਕਰਦਾ ਹੈ?',
                optionsJson: [
                  'Transfers the logic level present on the D input to the Q output and stores it',
                  'Inverts the previous output regardless of D',
                  'Resets the output Q to 0 unconditionally',
                  'Disconnects from the power rail',
                ],
                correctAnswer: 'Transfers the logic level present on the D input to the Q output and stores it',
                explanationEn:
                  'A D flip-flop samples its D input on the active clock edge and locks it onto the Q output until the next clock event.',
                explanationPa:
                  'D ਉੱਤੇ ਪਿਆ ਸਿਗਨਲ Q ਉੱਤੇ ਟ੍ਰਾਂਸਫਰ ਕਰਕੇ ਮੈਮੋਰੀ ਵਿੱਚ ਸਟੋਰ ਕਰ ਲੈਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'JK Toggle',
                promptEn: 'What is the next state Q(next) of a JK flip-flop when both J = 1 and K = 1 upon receiving an active clock edge?',
                promptPa: 'ਜਦੋਂ J = 1 ਅਤੇ K = 1 ਦੋਵੇਂ ਹੋਣ ਤਾਂ ਕਲਾਕ ਪਲਸ ਆਉਣ ਤੇ JK ਫਲਿੱਪ-ਫਲੌਪ ਕੀ ਕਰਦਾ ਹੈ?',
                optionsJson: [
                  'Toggles its output to the opposite state (Q becomes NOT Q)',
                  'Sets output Q to 1',
                  'Resets output Q to 0',
                  'Enters an illegal forbidden condition',
                ],
                correctAnswer: 'Toggles its output to the opposite state (Q becomes NOT Q)',
                explanationEn:
                  'When J=1 and K=1, the JK flip-flop toggles its state (invert: 0 becomes 1, 1 becomes 0), functioning as a frequency divider.',
                explanationPa:
                  'ਆਊਟਪੁੱਟ ਉਲਟ ਜਾਂਦੀ ਹੈ (Toggle: 0 ਦਾ 1, ਅਤੇ 1 ਦਾ 0 ਬਣ ਜਾਂਦਾ ਹੈ)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Setup Time Violation',
                promptEn: 'What catastrophic digital malfunction can occur if data changes during the setup-and-hold time aperture of a flip-flop?',
                promptPa: 'ਜੇਕਰ ਫਲਿੱਪ-ਫਲੌਪ ਦੇ ਸੈੱਟਅੱਪ ਅਤੇ ਹੋਲਡ ਸਮੇਂ ਦੌਰਾਨ ਡਾਟਾ ਹਿੱਲ ਜਾਵੇ ਤਾਂ ਕੀ ਗੜਬੜ ਹੁੰਦੀ ਹੈ?',
                optionsJson: [
                  'Metastability (the flip-flop enters an unpredictable oscillating state between 0 and 1)',
                  'The power supply voltage collapses',
                  'The clock speed increases permanently',
                  'The flip-flop converts to an analog amplifier',
                ],
                correctAnswer: 'Metastability (the flip-flop enters an unpredictable oscillating state between 0 and 1)',
                explanationEn:
                  'Violating setup or hold times causes internal regenerative feedback to balance precariously between 0 and 1, producing unpredictable delay and system corruption.',
                explanationPa:
                  'ਮੈਟਾਸਟੇਬਿਲਟੀ (Metastability) ਹੁੰਦੀ ਹੈ, ਜਿੱਥੇ ਫਲਿੱਪ-ਫਲੌਪ ਨਾ 0 ਰਹਿ ਸਕਦਾ ਹੈ ਨਾ 1, ਅਤੇ ਸਿਸਟਮ ਕਰੈਸ਼ ਹੋ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'FSM Architecture',
                promptEn: 'What is the distinguishing characteristic of a Moore Finite State Machine compared to a Mealy machine?',
                promptPa: 'ਮੂਰ (Moore) ਸਟੇਟ ਮਸ਼ੀਨ ਦੀ ਮੀਲੀ (Mealy) ਮਸ਼ੀਨ ਨਾਲੋਂ ਕੀ ਵਿਸ਼ੇਸ਼ਤਾ ਹੁੰਦੀ ਹੈ?',
                optionsJson: [
                  'Outputs depend strictly and exclusively on the current state registers',
                  'Outputs depend directly on instantaneous asynchronous inputs',
                  'It uses zero flip-flops',
                  'It operates without any clock signal',
                ],
                correctAnswer: 'Outputs depend strictly and exclusively on the current state registers',
                explanationEn:
                  'In a Moore machine, outputs are purely a function of current state flip-flops (immune to asynchronous input glitches). In a Mealy machine, outputs also depend on inputs.',
                explanationPa:
                  'ਮੂਰ ਮਸ਼ੀਨ ਵਿੱਚ ਆਊਟਪੁੱਟ ਸਿਰਫ਼ ਮੌਜੂਦਾ ਸਟੇਟ ਉੱਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ, ਬਾਹਰੀ ਇਨਪੁਟ ਦੇ ਸ਼ੋਰ ਦਾ ਇਸਤੇ ਅਸਰ ਨਹੀਂ ਹੁੰਦਾ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Tri-State High-Z',
                promptEn: 'What is the physical meaning of the "High-Z" (High Impedance) state of a digital tri-state buffer output?',
                promptPa: 'ਡਿਜੀਟਲ ਟ੍ਰਾਈ-ਸਟੇਟ ਬਫਰ ਦੀ "High-Z" ਹਾਲਤ ਦਾ ਕੀ ਮਤਲਬ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'The output is electronically disconnected (floating) as if an open switch isolate it from the bus',
                  'The output is connected directly to +12 V',
                  'The output is forced to logic 0 with heavy current sink',
                  'The output frequency is at maximum',
                ],
                correctAnswer: 'The output is electronically disconnected (floating) as if an open switch isolate it from the bus',
                explanationEn:
                  'Both output pull-up and pull-down transistors are turned OFF, presenting a megaohm impedance allowing other devices to drive the shared wire.',
                explanationPa:
                  'ਆਊਟਪੁੱਟ ਤਾਰ ਤੋਂ ਬਿਲਕੁਲ ਅਲੱਗ (Disconnect) ਹੋ ਜਾਂਦੀ ਹੈ ਤਾਂ ਜੋ ਕੋਈ ਦੂਜੀ ਚਿੱਪ ਉਸ ਤਾਰ ਤੇ ਆਪਣਾ ਡਾਟਾ ਭੇਜ ਸਕੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Synchronous Counter',
                promptEn: 'Why do high-frequency microprocessors use synchronous counters instead of asynchronous ripple counters?',
                promptPa: 'ਹਾਈ-ਸਪੀਡ ਪ੍ਰੋਸੈਸਰਾਂ ਵਿੱਚ ਰਿਪਲ ਕਾਊਂਟਰ ਦੀ ਥਾਂ ਸਿੰਕ੍ਰੋਨਸ ਕਾਊਂਟਰ ਕਿਉਂ ਵਰਤੇ ਜਾਂਦੇ ਹਨ?',
                optionsJson: [
                  'All flip-flops are triggered by the exact same clock edge simultaneously, preventing cumulative propagation delay glitches',
                  'Synchronous counters use fewer logic gates',
                  'Ripple counters consume more power at DC',
                  'Synchronous counters can only count downwards',
                ],
                correctAnswer: 'All flip-flops are triggered by the exact same clock edge simultaneously, preventing cumulative propagation delay glitches',
                explanationEn:
                  'In a synchronous counter, every stage updates at the identical instant, eliminating the ripple delay that causes erroneous decoding spikes.',
                explanationPa:
                  'ਸਾਰੇ ਫਲਿੱਪ-ਫਲੌਪ ਇੱਕੋ ਸਮੇਂ ਕਲਾਕ ਨਾਲ ਚੱਲਦੇ ਹਨ, ਜਿਸ ਨਾਲ ਲੇਟ ਹੋ ਕੇ ਗਲਤ ਸਿਗਨਲ ਪੈਦਾ ਨਹੀਂ ਹੁੰਦੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Timing Calculation',
                promptEn: 'If a sequential circuit has t_prop = 2 ns, t_logic = 4 ns, t_setup = 1.5 ns, and t_skew = 0.5 ns, what is the maximum operating clock frequency?',
                promptPa: 'ਜੇਕਰ t_prop = 2ns, t_logic = 4ns, t_setup = 1.5ns, ਅਤੇ t_skew = 0.5ns ਹੋਵੇ ਤਾਂ ਵੱਧ ਤੋਂ ਵੱਧ ਕਲਾਕ ਫ੍ਰੀਕੁਐਂਸੀ ਕਿੰਨੀ ਹੋਵੇਗੀ?',
                optionsJson: ['125 MHz', '50 MHz', '250 MHz', '100 MHz'],
                correctAnswer: '125 MHz',
                explanationEn:
                  'Tmin = 2 + 4 + 1.5 + 0.5 = 8.0 ns. fmax = 1 / Tmin = 1 / (8.0 * 10^-9 s) = 125,000,000 Hz = 125 MHz.',
                explanationPa:
                  'Tmin = 2 + 4 + 1.5 + 0.5 = 8 ns। fmax = 1 / 8ns = 125 MHz।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Shift Register SIPO',
                promptEn: 'What is a Serial-In Parallel-Out (SIPO) shift register commonly used for in embedded systems?',
                promptPa: 'ਐਂਬੈੱਡਡ ਸਿਸਟਮਾਂ ਵਿੱਚ SIPO ਸ਼ਿਫਟ ਰਜਿਸਟਰ (ਜਿਵੇਂ 74HC595) ਕਿਸ ਕੰਮ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
                optionsJson: [
                  'Expanding a few microcontroller GPIO pins into many parallel outputs (e.g. driving 8 LEDs or a 7-segment display with 3 pins)',
                  'Measuring analog voltages',
                  'Storing gigabytes of operating system data',
                  'Inverting AC into DC',
                ],
                correctAnswer: 'Expanding a few microcontroller GPIO pins into many parallel outputs (e.g. driving 8 LEDs or a 7-segment display with 3 pins)',
                explanationEn:
                  'A SIPO shift register accepts data bits sequentially over one data pin and outputs them simultaneously across 8 or 16 parallel pins.',
                explanationPa:
                  'ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਦੀਆਂ ਸਿਰਫ਼ 3 ਪਿੰਨਾਂ ਨਾਲ 8 ਜਾਂ 16 LED ਬਲਬ ਜਾਂ ਡਿਸਪਲੇਅ ਚਲਾਉਣ ਲਈ (ਪਿੰਨਾਂ ਵਧਾਉਣ ਲਈ)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Noise Margin',
                promptEn: 'How is the High-State Noise Margin (NMH) of a digital logic family defined mathematically?',
                promptPa: 'ਡਿਜੀਟਲ ਲੌਜਿਕ ਵਿੱਚ ਹਾਈ-ਸਟੇਟ ਨੌਇਜ਼ ਮਾਰਜਿਨ (NMH) ਦਾ ਗਣਿਤਕ ਫਾਰਮੂਲਾ ਕੀ ਹੈ?',
                optionsJson: ['NMH = VOH - VIH', 'NMH = VIH - VIL', 'NMH = VOH - VOL', 'NMH = VCC - VOH'],
                correctAnswer: 'NMH = VOH - VIH',
                explanationEn:
                  'NMH = V_OH(min) - V_IH(min). It represents the maximum noise voltage that can be added to a High output before the receiving gate misinterprets it.',
                explanationPa:
                  'NMH = VOH - VIH (ਆਊਟਪੁੱਟ ਹਾਈ ਅਤੇ ਇਨਪੁਟ ਹਾਈ ਵੋਲਟੇਜ ਦਾ ਫ਼ਰਕ)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Clock Skew',
                promptEn: 'What is Clock Skew in a printed circuit board or integrated circuit?',
                promptPa: 'ਸਰਕਟ ਬੋਰਡ ਜਾਂ ਚਿੱਪ ਵਿੱਚ "Clock Skew" ਕਿਸਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
                optionsJson: [
                  'The difference in arrival time of the clock edge at different flip-flops across the chip due to trace length variations',
                  'A change in clock frequency over temperature',
                  'A distortion of the clock duty cycle',
                  'Noise on the ground plane',
                ],
                correctAnswer: 'The difference in arrival time of the clock edge at different flip-flops across the chip due to trace length variations',
                explanationEn:
                  'Because copper traces have finite propagation delay (~15 cm/ns), differing trace lengths cause the clock signal to reach different components at slightly different times.',
                explanationPa:
                  'ਤਾਰਾਂ ਦੀ ਲੰਬਾਈ ਵੱਖਰੀ ਹੋਣ ਕਰਕੇ ਕਲਾਕ ਦੀ ਟਿਕ ਵੱਖ-ਵੱਖ ਪੁਰਜ਼ਿਆਂ ਤੱਕ ਅੱਗੇ-ਪਿੱਛੇ ਪਹੁੰਚਣ ਦਾ ਸਮਾਂ ਫ਼ਰਕ।',
              },
            ],
          },
        },
      ],
    },
  ],
};
