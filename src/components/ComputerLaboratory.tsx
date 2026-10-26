import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Play,
  Pause,
  RotateCcw,
  StepForward,
  Zap,
  HardDrive,
  Network,
  Binary,
  GitBranch,
  Calculator,
  CheckCircle2,
  ArrowRight,
  Gauge,
  Wrench,
  Activity,
  Sliders,
} from 'lucide-react';

export type LabId =
  | 'hardware-explorer'
  | 'cpu-cycle'
  | 'ram-storage'
  | 'binary-converter'
  | 'logic-gates'
  | 'network-sim'
  | 'algorithm-math-lab'
  | 'resistor-calc'
  | 'transistor-switch'
  | 'multimeter-lab'
  | 'lab-power-rail-short-finder'
  | 'lab-pad-trace-repair-simulator';

export const VALID_LAB_IDS: ReadonlySet<string> = new Set<string>([
  'hardware-explorer',
  'cpu-cycle',
  'cpu-simulator',
  'ram-storage',
  'binary-converter',
  'number-converter',
  'logic-gates',
  'binary-logic',
  'network-sim',
  'algorithm-math-lab',
  'sorting-visualizer',
  'discrete-math',
  'resistor-calc',
  'transistor-switch',
  'multimeter-lab',
  'lab-power-rail-short-finder',
  'lab-pad-trace-repair-simulator',
]);

export function resolveValidLabId(rawId?: string | null): LabId {
  if (!rawId) return 'hardware-explorer';
  const normalized = rawId.trim();
  switch (normalized) {
    case 'cpu-simulator':
      return 'cpu-cycle';
    case 'number-converter':
      return 'binary-converter';
    case 'binary-logic':
      return 'logic-gates';
    case 'sorting-visualizer':
    case 'discrete-math':
      return 'algorithm-math-lab';
    case 'hardware-explorer':
    case 'cpu-cycle':
    case 'ram-storage':
    case 'binary-converter':
    case 'logic-gates':
    case 'network-sim':
    case 'algorithm-math-lab':
    case 'resistor-calc':
    case 'transistor-switch':
    case 'multimeter-lab':
    case 'lab-power-rail-short-finder':
    case 'lab-pad-trace-repair-simulator':
      return normalized;
    default:
      return 'hardware-explorer';
  }
}

interface Props {
  initialLab?: LabId | string;
  langMode: 'bilingual' | 'punjabi' | 'english';
  darkMode: boolean;
}

interface HardwarePart {
  id: string;
  nameEn: string;
  namePa: string;
  roleEn: string;
  rolePa: string;
  childAnalogyPa: string;
  specs: string;
  troubleshooting: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

const HARDWARE_PARTS: HardwarePart[] = [
  {
    id: 'cpu',
    nameEn: 'CPU (Central Processing Unit)',
    namePa: 'ਸੀ.ਪੀ.ਯੂ (Central Processing Unit — ਦਿਮਾਗ)',
    roleEn: 'Executes instructions via the Fetch-Decode-Execute cycle using the ALU, Control Unit, and Registers.',
    rolePa: 'ਇਹ ਕੰਪਿਊਟਰ ਦਾ ਮੁੱਖ ਦਿਮਾਗ ਹੈ ਜੋ ALU, Control Unit ਅਤੇ Registers ਦੀ ਮਦਦ ਨਾਲ ਸਾਰੇ ਹੁਕਮ ਚਲਾਉਂਦਾ ਹੈ।',
    childAnalogyPa: 'ਰਸੋਈ ਦਾ ਮੁੱਖ ਰਸੋਈਆ (Head Chef) ਜੋ ਪਰਚੀ ਪੜ੍ਹ ਕੇ ਸਬਜ਼ੀ ਕੱਟਦਾ ਅਤੇ ਪਕਾਉਂਦਾ ਹੈ।',
    specs: '8–16 Cores · 3.8–5.6 GHz Clock · L1/L2/L3 SRAM Cache · 65W–125W TDP',
    troubleshooting: 'High thermal throttling (>95°C): Verify cooler mount pressure, dried thermal paste, or fan PWM header.',
    x: 205,
    y: 95,
    w: 115,
    h: 110,
  },
  {
    id: 'ram',
    nameEn: 'DDR5 RAM (Volatile Main Memory)',
    namePa: 'ਰੈਮ (Random Access Memory — ਕੰਮ ਵਾਲਾ ਮੇਜ਼)',
    roleEn: 'Stores currently running programs and active data for nanosecond access by the CPU. Loses data when power turns off.',
    rolePa: 'ਇਸ ਵੇਲੇ ਚੱਲ ਰਹੇ ਪ੍ਰੋਗਰਾਮਾਂ ਅਤੇ ਡਾਟੇ ਨੂੰ ਰੱਖਦੀ ਹੈ ਤਾਂ ਜੋ CPU ਤੇਜ਼ੀ ਨਾਲ ਕੰਮ ਕਰ ਸਕੇ। ਬਿਜਲੀ ਜਾਣ ਤੇ ਇਹ ਖਾਲੀ ਹੋ ਜਾਂਦੀ ਹੈ।',
    childAnalogyPa: 'ਤਰਖਾਣ ਦੇ ਸਾਹਮਣੇ ਪਿਆ ਕੰਮ ਵਾਲਾ ਮੇਜ਼ — ਜਿੰਨਾ ਖੁੱਲ੍ਹਾ ਮੇਜ਼, ਓਨੇ ਜ਼ਿਆਦਾ ਕੰਮ ਇਕੱਠੇ ਹੋ ਸਕਦੇ ਹਨ!',
    specs: '16GB–64GB DDR5 · 6000 MT/s · ~60 ns Latency · Dual-Channel 128-bit Bus',
    troubleshooting: 'System fails POST with DRAM beep/LED: Reseat DIMM modules firmly in slots A2/B2 and test with MemTest86.',
    x: 355,
    y: 70,
    w: 65,
    h: 160,
  },
  {
    id: 'ssd',
    nameEn: 'NVMe M.2 SSD (Non-Volatile Storage)',
    namePa: 'ਐਸ.ਐਸ.ਡੀ (NVMe Solid State Drive — ਪੱਕਾ ਗੋਦਾਮ)',
    roleEn: 'Permanently stores the Operating System, apps, and user files on NAND flash memory chips even without power.',
    rolePa: 'Operating System, ਐਪਸ ਅਤੇ ਤੁਹਾਡੀਆਂ ਫੋਟੋਆਂ/ਫਾਈਲਾਂ ਨੂੰ ਪੱਕੇ ਤੌਰ ਤੇ ਸੁਰੱਖਿਅਤ ਰੱਖਦੀ ਹੈ, ਭਾਵੇਂ ਕੰਪਿਊਟਰ ਬੰਦ ਹੋਵੇ।',
    childAnalogyPa: 'ਪੱਕੀ ਅਲਮਾਰੀ ਜਾਂ ਤਿਜੋਰੀ ਜਿੱਥੇ ਕਿਤਾਬਾਂ ਹਮੇਸ਼ਾ ਸੁਰੱਖਿਅਤ ਰਹਿੰਦੀਆਂ ਹਨ।',
    specs: '1TB–4TB PCIe 4.0 x4 · 7,000 MB/s Read · No moving parts · Non-Volatile NAND',
    troubleshooting: 'Boot device not found: Check M.2 standoff screw, UEFI NVMe configuration, and SMART health wear level.',
    x: 200,
    y: 230,
    w: 125,
    h: 42,
  },
  {
    id: 'gpu',
    nameEn: 'GPU (Graphics Processing Unit)',
    namePa: 'ਜੀ.ਪੀ.ਯੂ (Graphics Card — ਹਜ਼ਾਰਾਂ ਛੋਟੇ ਕਾਮੇ)',
    roleEn: 'Contains thousands of parallel ALU cores specialized for 3D rendering, matrix math, video, and AI workloads.',
    rolePa: 'ਇਸ ਵਿੱਚ ਹਜ਼ਾਰਾਂ ਛੋਟੇ ਕੋਰ ਹੁੰਦੇ ਹਨ ਜੋ 3D ਗ੍ਰਾਫਿਕਸ, ਵੀਡੀਓ ਅਤੇ AI ਦੇ ਗਣਿਤ ਨੂੰ ਇੱਕੋ ਵੇਲੇ ਹੱਲ ਕਰਦੇ ਹਨ।',
    childAnalogyPa: '1000 ਚਿੱਤਰਕਾਰ ਜੋ ਮਿਲ ਕੇ ਇੱਕੋ ਸਕਿੰਟ ਵਿੱਚ ਪੂਰੀ ਤਸਵੀਰ ਵਿੱਚ ਰੰਗ ਭਰ ਦਿੰਦੇ ਹਨ!',
    specs: 'PCIe 4.0/5.0 x16 Slot · GDDR6X VRAM · Parallel SIMD Architecture',
    troubleshooting: 'No display output or artifacting: Verify PCIe 8-pin/16-pin power cables and monitor cable plugged into GPU port.',
    x: 145,
    y: 295,
    w: 275,
    h: 55,
  },
  {
    id: 'psu',
    nameEn: 'PSU (Power Supply Unit)',
    namePa: 'ਪਾਵਰ ਸਪਲਾਈ ਯੂਨਿਟ (PSU — ਬਿਜਲੀ ਘਰ)',
    roleEn: 'Converts high-voltage AC wall power (230V AC) into regulated low-voltage DC rails (+12V, +5V, +3.3V).',
    rolePa: 'ਕੰਧ ਵਾਲੇ ਪਲੱਗ ਦੀ 230V AC ਬਿਜਲੀ ਨੂੰ ਕੰਪਿਊਟਰ ਦੇ ਹਿੱਸਿਆਂ ਲਈ ਸੁਰੱਖਿਅਤ +12V, +5V ਅਤੇ +3.3V DC ਵਿੱਚ ਬਦਲਦਾ ਹੈ।',
    childAnalogyPa: 'ਘਰ ਦਾ ਸਟੈਬਲਾਈਜ਼ਰ ਅਤੇ ਟ੍ਰਾਂਸਫਾਰਮਰ ਜੋ ਹਰ ਹਿੱਸੇ ਨੂੰ ਲੋੜ ਮੁਤਾਬਕ ਸੁਰੱਖਿਅਤ ਬਿਜਲੀ ਦਿੰਦਾ ਹੈ।',
    specs: '650W–1000W 80+ Gold · +12V Rail for CPU/GPU · Over-Voltage Protection',
    troubleshooting: 'Sudden shutdown under load: Check 24-pin ATX + 8-pin EPS connectors and wattage capacity.',
    x: 25,
    y: 250,
    w: 95,
    h: 100,
  },
  {
    id: 'cooling',
    nameEn: 'Thermal Cooling System & VRM Heatsink',
    namePa: 'ਕੂਲਿੰਗ ਸਿਸਟਮ (Heatsink & Fan — ਠੰਢਕ ਸਿਸਟਮ)',
    roleEn: 'Dissipates heat generated by billions of switching transistors inside the CPU and voltage regulators.',
    rolePa: 'CPU ਦੇ ਕਰੋੜਾਂ ਟ੍ਰਾਂਜ਼ਿਸਟਰਾਂ ਦੇ ਚੱਲਣ ਨਾਲ ਪੈਦਾ ਹੋਈ ਗਰਮੀ ਨੂੰ ਬਾਹਰ ਕੱਢ ਕੇ ਪ੍ਰੋਸੈਸਰ ਨੂੰ ਠੰਢਾ ਰੱਖਦਾ ਹੈ।',
    childAnalogyPa: 'ਗੱਡੀ ਦਾ ਰੇਡੀਏਟਰ ਅਤੇ ਪੱਖਾ ਜੋ ਇੰਜਣ ਨੂੰ ਗਰਮ ਹੋਣ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।',
    specs: 'Copper Heatpipes · Aluminum Fin Stack · PWM Controlled Fan (800–2000 RPM)',
    troubleshooting: 'Loud fan noise or high idle temp: Clean dust from heatsink fins and ensure proper airflow direction.',
    x: 25,
    y: 80,
    w: 140,
    h: 130,
  },
];

const CPU_PROGRAM = [
  {
    addr: '0x00',
    instr: 'LOAD R1, #14',
    paDesc: 'RAM ਤੋਂ ਨੰਬਰ 14 ਲਿਆ ਕੇ Register R1 ਵਿੱਚ ਰੱਖੋ',
    enDesc: 'Load constant 14 into Register R1',
    op: 'LOAD_R1',
    val: 14,
  },
  {
    addr: '0x01',
    instr: 'LOAD R2, #28',
    paDesc: 'RAM ਤੋਂ ਨੰਬਰ 28 ਲਿਆ ਕੇ Register R2 ਵਿੱਚ ਰੱਖੋ',
    enDesc: 'Load constant 28 into Register R2',
    op: 'LOAD_R2',
    val: 28,
  },
  {
    addr: '0x02',
    instr: 'ADD ACC, R1, R2',
    paDesc: 'ALU ਰਾਹੀਂ R1 (14) + R2 (28) ਜੋੜ ਕੇ ACC (42) ਵਿੱਚ ਰੱਖੋ',
    enDesc: 'ALU adds R1 + R2 and stores result 42 in Accumulator',
    op: 'ADD',
    val: 42,
  },
  {
    addr: '0x03',
    instr: 'STORE ACC, [0x10]',
    paDesc: 'Accumulator ਦਾ ਨਤੀਜਾ (42) ਵਾਪਸ RAM ਦੇ ਪਤੇ 0x10 ਉੱਤੇ ਸੇਵ ਕਰੋ',
    enDesc: 'Write Accumulator (42) back to RAM address [0x10]',
    op: 'STORE',
    val: 42,
  },
];

export const ComputerLaboratory: React.FC<Props> = ({ initialLab = 'hardware-explorer', langMode, darkMode }) => {
  const [activeLab, setActiveLab] = useState<LabId>(() => resolveValidLabId(initialLab));

  useEffect(() => {
    if (initialLab) setActiveLab(resolveValidLabId(initialLab));
  }, [initialLab]);

  // --- Sim A: Hardware Explorer State ---
  const [selectedPartId, setSelectedPartId] = useState<string>('cpu');
  const selectedPart = HARDWARE_PARTS.find((p) => p.id === selectedPartId) || HARDWARE_PARTS[0];

  // --- Sim B: CPU Instruction Cycle State (Accurate 4-Stage Pipeline) ---
  const [cpuStepIndex, setCpuStepIndex] = useState<number>(0); // 0..3 instruction index
  const [cpuStage, setCpuStage] = useState<'FETCH' | 'DECODE' | 'EXECUTE' | 'WRITEBACK'>('FETCH');
  const [cpuPlaying, setCpuPlaying] = useState<boolean>(false);
  const [regIR, setRegIR] = useState<string>('LOAD R1, #14');
  const [decodedSummary, setDecodedSummary] = useState<string>('Waiting for DECODE stage...');
  const [aluOutputLatch, setAluOutputLatch] = useState<string>('Idle');
  const [regR1, setRegR1] = useState<number>(0);
  const [regR2, setRegR2] = useState<number>(0);
  const [regACC, setRegACC] = useState<number>(0);
  const [ram0x10, setRam0x10] = useState<number>(0);

  const currentCpuInstruction = CPU_PROGRAM[cpuStepIndex];

  const getCpuStageActionDescription = () => {
    const instr = CPU_PROGRAM[cpuStepIndex];
    if (cpuStage === 'FETCH') {
      return {
        en: `FETCH Stage: Control Unit reads instruction "${instr.instr}" from RAM address ${instr.addr} (pointed to by PC) into the Instruction Register (IR). Architectural registers have not changed yet.`,
        pa: `FETCH ਪੜਾਅ: Control Unit ਨੇ PC (${instr.addr}) ਵਾਲੇ ਪਤੇ ਤੋਂ ਹੁਕਮ "${instr.instr}" ਪੜ੍ਹ ਕੇ Instruction Register (IR) ਵਿੱਚ ਲੋਡ ਕੀਤਾ ਹੈ।`,
      };
    }
    if (cpuStage === 'DECODE') {
      return {
        en: `DECODE Stage: Control Unit decodes opcode and operand targets (${decodedSummary}). No register or memory write has occurred yet.`,
        pa: `DECODE ਪੜਾਅ: Control Unit ਨੇ ਹੁਕਮ ਦਾ ਮਤਲਬ ਸਮਝ ਲਿਆ ਹੈ (${decodedSummary}) ਅਤੇ ALU/Registers ਦੇ ਸਿਗਨਲ ਤਿਆਰ ਕੀਤੇ ਹਨ।`,
      };
    }
    if (cpuStage === 'EXECUTE') {
      return {
        en: `EXECUTE Stage: ALU / Execution Unit computes the operation result in its internal latch (${aluOutputLatch}). Architectural registers/RAM will be updated in WRITEBACK.`,
        pa: `EXECUTE ਪੜਾਅ: ALU ਨੇ ਗਣਨਾ ਪੂਰੀ ਕਰਕੇ ਨਤੀਜਾ (${aluOutputLatch}) ਤਿਆਰ ਕਰ ਲਿਆ ਹੈ। ਅਗਲੇ ਪੜਾਅ (WRITEBACK) ਵਿੱਚ ਇਹ ਰਜਿਸਟਰ/RAM ਵਿੱਚ ਸੇਵ ਹੋਵੇਗਾ।`,
      };
    }
    return {
      en: `WRITEBACK Stage: Result (${aluOutputLatch}) is committed to the destination register or RAM address, completing "${instr.instr}".`,
      pa: `WRITEBACK ਪੜਾਅ: ਨਤੀਜਾ (${aluOutputLatch}) ਪੱਕੇ ਤੌਰ 'ਤੇ ਸਬੰਧਤ Register ਜਾਂ RAM [0x10] ਵਿੱਚ ਲਿਖ ਦਿੱਤਾ ਗਿਆ ਹੈ!`,
    };
  };

  const advanceCpuCycle = () => {
    const currentInstr = CPU_PROGRAM[cpuStepIndex];
    if (cpuStage === 'FETCH') {
      // Transition FETCH -> DECODE: Decode the fetched instruction without mutating R1/R2/ACC/RAM
      setRegIR(currentInstr.instr);
      if (currentInstr.op === 'LOAD_R1') {
        setDecodedSummary('Opcode: LOAD_IMM · Target: R1 · Immediate Operand: #14');
      } else if (currentInstr.op === 'LOAD_R2') {
        setDecodedSummary('Opcode: LOAD_IMM · Target: R2 · Immediate Operand: #28');
      } else if (currentInstr.op === 'ADD') {
        setDecodedSummary(`Opcode: ALU_ADD · Dest: ACC · Inputs: R1 (${regR1}) + R2 (${regR2})`);
      } else {
        setDecodedSummary(`Opcode: MEM_STORE · Source: ACC (${regACC}) -> Dest RAM: [0x10]`);
      }
      setAluOutputLatch('Ready to Execute');
      setCpuStage('DECODE');
    } else if (cpuStage === 'DECODE') {
      // Transition DECODE -> EXECUTE: Compute value in ALU / Execution Latch without committing to registers yet
      if (currentInstr.op === 'LOAD_R1') {
        setAluOutputLatch('Immediate Value = 14 (Pending Write to R1)');
      } else if (currentInstr.op === 'LOAD_R2') {
        setAluOutputLatch('Immediate Value = 28 (Pending Write to R2)');
      } else if (currentInstr.op === 'ADD') {
        const sum = regR1 + regR2;
        setAluOutputLatch(`ALU Sum: ${regR1} + ${regR2} = ${sum} (Pending Write to ACC)`);
      } else if (currentInstr.op === 'STORE') {
        setAluOutputLatch(`Bus Data: ${regACC} -> Address [0x10] (Pending RAM Write)`);
      }
      setCpuStage('EXECUTE');
    } else if (cpuStage === 'EXECUTE') {
      // Transition EXECUTE -> WRITEBACK: Commit computed result to architectural registers or RAM
      if (currentInstr.op === 'LOAD_R1') {
        setRegR1(14);
        setAluOutputLatch('Committed: R1 <= 14');
      } else if (currentInstr.op === 'LOAD_R2') {
        setRegR2(28);
        setAluOutputLatch('Committed: R2 <= 28');
      } else if (currentInstr.op === 'ADD') {
        const sum = regR1 + regR2;
        setRegACC(sum);
        setAluOutputLatch(`Committed: ACC <= ${sum}`);
      } else if (currentInstr.op === 'STORE') {
        setRam0x10(regACC);
        setAluOutputLatch(`Committed: RAM[0x10] <= ${regACC}`);
      }
      setCpuStage('WRITEBACK');
    } else {
      // Transition WRITEBACK -> Next instruction FETCH
      const nextIdx = (cpuStepIndex + 1) % CPU_PROGRAM.length;
      if (nextIdx === 0) {
        setRegR1(0);
        setRegR2(0);
        setRegACC(0);
        setRam0x10(0);
      }
      setCpuStepIndex(nextIdx);
      setRegIR(CPU_PROGRAM[nextIdx].instr);
      setDecodedSummary('Waiting for DECODE stage...');
      setAluOutputLatch('Idle');
      setCpuStage('FETCH');
    }
  };

  useEffect(() => {
    if (!cpuPlaying) return;
    const timer = setInterval(advanceCpuCycle, 1400);
    return () => clearInterval(timer);
  }, [cpuPlaying, cpuStage, cpuStepIndex, regR1, regR2, regACC]);

  const resetCpuSim = () => {
    setCpuPlaying(false);
    setCpuStepIndex(0);
    setCpuStage('FETCH');
    setRegIR(CPU_PROGRAM[0].instr);
    setDecodedSummary('Waiting for DECODE stage...');
    setAluOutputLatch('Idle');
    setRegR1(0);
    setRegR2(0);
    setRegACC(0);
    setRam0x10(0);
  };

  // --- Sim C: RAM vs Storage Power & Latency State ---
  const [powerOn, setPowerOn] = useState<boolean>(true);
  const [ramBufferText, setRamBufferText] = useState<string>('Unsaved Document: "Sat Sri Akal World"');
  const [ssdSavedText, setSsdSavedText] = useState<string>('Saved File on SSD: "Syllabus_v1.txt"');

  const toggleSystemPower = () => {
    if (powerOn) {
      // Turning power off wipes volatile RAM & Cache!
      setPowerOn(false);
      setRamBufferText('[CLEARED — 00000000 (Volatile RAM lost power!)]');
    } else {
      setPowerOn(true);
      setRamBufferText('Freshly Booted Empty RAM Workspace');
    }
  };

  const commitRamToSsd = () => {
    if (!powerOn) return;
    setSsdSavedText(ramBufferText);
  };

  // --- Sim D: Binary / Hex / Octal / Decimal Converter State ---
  const [decimalValue, setDecimalValue] = useState<number>(42);
  const [practiceTarget, setPracticeTarget] = useState<number>(19);
  const [practiceFeedback, setPracticeFeedback] = useState<string>('');

  const weights = [128, 64, 32, 16, 8, 4, 2, 1];
  const toggleBitWeight = (weight: number) => {
    const isBitOn = (decimalValue & weight) !== 0;
    const nextVal = isBitOn ? decimalValue - weight : decimalValue + weight;
    setDecimalValue(nextVal);
    if (nextVal === practiceTarget) {
      setPracticeFeedback('ਸ਼ਾਬਾਸ਼! (Correct! You matched the target binary number!)');
    } else {
      setPracticeFeedback('');
    }
  };

  // --- Sim E: Logic Gate Laboratory State ---
  const [gateType, setGateType] = useState<'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR' | 'XNOR'>('XOR');
  const [inputA, setInputA] = useState<0 | 1>(1);
  const [inputB, setInputB] = useState<0 | 1>(0);

  const computeGate = (g: typeof gateType, a: 0 | 1, b: 0 | 1): 0 | 1 => {
    switch (g) {
      case 'AND':
        return (a & b) as 0 | 1;
      case 'OR':
        return (a | b) as 0 | 1;
      case 'NOT':
        return a === 1 ? 0 : 1;
      case 'NAND':
        return (a & b) === 1 ? 0 : 1;
      case 'NOR':
        return (a | b) === 1 ? 0 : 1;
      case 'XOR':
        return (a ^ b) as 0 | 1;
      case 'XNOR':
        return (a ^ b) === 0 ? 1 : 0;
    }
  };

  const currentGateOutput = computeGate(gateType, inputA, inputB);

  // --- Sim F: Network Packet Simulator State (Accurate DNS-First Resolution Flow) ---
  const [packetHop, setPacketHop] = useState<number>(0);
  const NETWORK_NODES = [
    {
      name: '1. DNS Query — Client to Resolver (UDP/53)',
      pa: 'ਪਹਿਲਾਂ ਤੁਹਾਡਾ ਫ਼ੋਨ (192.168.1.15) DNS Resolver (8.8.8.8) ਨੂੰ ਪੁੱਛਦਾ ਹੈ: "academy.edu ਦਾ IP Address ਕੀ ਹੈ?"',
      en: 'Before connecting to the web server, the client sends a DNS A-record query to resolver 8.8.8.8 (UDP port 53) via its local switch/gateway.',
      header: 'DNS QUERY: Who is academy.edu? · SRC: 192.168.1.15 -> DST: 8.8.8.8:53',
    },
    {
      name: '2. DNS Resolution — IP Returned to Client',
      pa: 'DNS Resolver ਡਾਇਰੀ ਵਿੱਚੋਂ ਲੱਭ ਕੇ ਫ਼ੋਨ ਨੂੰ ਜਵਾਬ ਦਿੰਦਾ ਹੈ ਕਿ "academy.edu" ਦਾ IP Address 93.184.216.34 ਹੈ।',
      en: 'DNS Resolver returns the authoritative IPv4 address (93.184.216.34) back to the client OS DNS cache.',
      header: 'DNS RESPONSE: academy.edu => 93.184.216.34 (TTL 300s)',
    },
    {
      name: '3. Client Creates HTTPS Packet to Server IP',
      pa: 'ਹੁਣ ਅਸਲ IP ਪਤਾ ਲੱਗਣ ਤੋਂ ਬਾਅਦ, ਬ੍ਰਾਊਜ਼ਰ 93.184.216.34 (Port 443) ਲਈ TCP/TLS ਤੇ HTTP GET ਪੈਕਟ ਬਣਾਉਂਦਾ ਹੈ।',
      en: 'Using the resolved IP 93.184.216.34, the client initiates TCP/TLS handshake and encapsulates the HTTP GET request.',
      header: 'SRC: 192.168.1.15:54122 -> DST: 93.184.216.34:443 (HTTPS)',
    },
    {
      name: '4. L2 LAN Switch & L3 Internet Router Forwarding',
      pa: 'Local Switch MAC ਫਰੇਮ ਨੂੰ Gateway Router ਵੱਲ ਭੇਜਦਾ ਹੈ, ਅਤੇ Internet Router TTL (64->63) ਘਟਾ ਕੇ ਪੈਕਟ ਨੂੰ ਸਰਵਰ ਵੱਲ ਤੋਰਦਾ ਹੈ।',
      en: 'Layer-2 Switch forwards Ethernet frame to Default Gateway; Layer-3 Router decrements TTL (64->63) and routes packet via BGP/OSPF.',
      header: 'L2 MAC -> GATEWAY · L3 DST IP: 93.184.216.34 · TTL: 63',
    },
    {
      name: '5. Academy Web Server Response (93.184.216.34)',
      pa: 'Web Server ਪੈਕਟ ਪ੍ਰਾਪਤ ਕਰਦਾ ਹੈ ਅਤੇ TLS Encrypted (HTTP/2 200 OK) ਵੈੱਬਪੇਜ ਸਿੱਧਾ ਤੁਹਾਡੇ ਫ਼ੋਨ ਨੂੰ ਵਾਪਸ ਭੇਜਦਾ ਹੈ!',
      en: 'Academy Web Server (93.184.216.34) processes the request and sends back the TLS 1.3 encrypted HTTP/2 200 OK response.',
      header: 'SRC: 93.184.216.34:443 -> DST: 192.168.1.15 · HTTP/2 200 OK',
    },
  ];

  // --- Sim G: Algorithm & CS Math Visualizer State ---
  const [algoTab, setAlgoTab] = useState<'binary-search' | 'discrete-math'>('binary-search');
  const sortedNumbers = [4, 9, 15, 23, 31, 42, 56, 68, 77, 89, 95];
  const [searchTarget, setSearchTarget] = useState<number>(42);
  const [bsLow, setBsLow] = useState<number>(0);
  const [bsHigh, setBsHigh] = useState<number>(sortedNumbers.length - 1);
  const [bsHistory, setBsHistory] = useState<string[]>([
    'Click "Step Binary Search" to watch Low, Mid, and High pointers halve the search space!',
  ]);

  const bsMid = Math.floor((bsLow + bsHigh) / 2);
  const bsFound = sortedNumbers[bsMid] === searchTarget;

  const stepBinarySearch = () => {
    if (bsLow > bsHigh || bsFound) return;
    const midVal = sortedNumbers[bsMid];
    if (midVal === searchTarget) {
      setBsHistory((prev) => [
        ...prev,
        `Found ${searchTarget} at index ${bsMid}! (ਸਿਰਫ਼ ਕੁਝ ਕਦਮਾਂ ਵਿੱਚ ਲੱਭ ਗਿਆ!)`,
      ]);
    } else if (midVal < searchTarget) {
      setBsHistory((prev) => [
        ...prev,
        `Mid index ${bsMid} has value ${midVal} < ${searchTarget} -> Discard left half! New Low = ${bsMid + 1}`,
      ]);
      setBsLow(bsMid + 1);
    } else {
      setBsHistory((prev) => [
        ...prev,
        `Mid index ${bsMid} has value ${midVal} > ${searchTarget} -> Discard right half! New High = ${bsMid - 1}`,
      ]);
      setBsHigh(bsMid - 1);
    }
  };

  const resetBinarySearch = (newTarget = searchTarget) => {
    setSearchTarget(newTarget);
    setBsLow(0);
    setBsHigh(sortedNumbers.length - 1);
    setBsHistory([`Searching for ${newTarget} in 11 sorted elements...`]);
  };

  // Discrete Math & Statistics interactive state
  const [statNumbers, setStatNumbers] = useState<number[]>([12, 18, 20, 24, 96]);
  const sortedStats = [...statNumbers].sort((a, b) => a - b);
  const statMean = Math.round(statNumbers.reduce((a, b) => a + b, 0) / statNumbers.length);
  const statMedian = sortedStats[Math.floor(sortedStats.length / 2)];

  // Simulation H: Ohm's Law, Voltage Divider, RC & RLC Resonance state
  const [vsVolts, setVsVolts] = useState<number>(12);
  const [r1Ohms, setR1Ohms] = useState<number>(1000);
  const [r2Ohms, setR2Ohms] = useState<number>(2000);
  const [capMicroFarads, setCapMicroFarads] = useState<number>(10);
  const [indMilliHenries, setIndMilliHenries] = useState<number>(4.7);

  const totalR = Math.max(1, r1Ohms + r2Ohms);
  const loopCurrentAmps = vsVolts / totalR;
  const vOutUnloaded = vsVolts * (r2Ohms / totalR);
  const powerR1Watts = loopCurrentAmps * loopCurrentAmps * r1Ohms;
  const powerR2Watts = loopCurrentAmps * loopCurrentAmps * r2Ohms;
  const rcTauSeconds = r1Ohms * (capMicroFarads * 1e-6);
  const rcCutoffHz = 1 / (2 * Math.PI * Math.max(1e-9, rcTauSeconds));
  const rlcResonanceHz =
    1 / (2 * Math.PI * Math.sqrt(Math.max(1e-18, indMilliHenries * 1e-3 * capMicroFarads * 1e-6)));

  // Simulation I: BJT & MOSFET Switching + Thermal Workbench state
  const [bjtVin, setBjtVin] = useState<number>(3.3);
  const [bjtRbOhms, setBjtRbOhms] = useState<number>(4700);
  const [bjtRcOhms, setBjtRcOhms] = useState<number>(470);
  const [bjtBeta, setBjtBeta] = useState<number>(100);
  const bjtVcc = 12;
  const ibAmps = bjtVin > 0.7 ? (bjtVin - 0.7) / Math.max(1, bjtRbOhms) : 0;
  const icIdealAmps = bjtBeta * ibAmps;
  const icSatAmps = (bjtVcc - 0.2) / Math.max(1, bjtRcOhms);
  const icActualAmps = Math.min(icIdealAmps, icSatAmps);
  const vceVolts = ibAmps <= 0 ? bjtVcc : Math.max(0.2, bjtVcc - icActualAmps * bjtRcOhms);
  const bjtRegion =
    ibAmps <= 0 ? 'CUTOFF (OFF)' : icIdealAmps >= icSatAmps ? 'SATURATION (ON)' : 'FORWARD-ACTIVE';

  const [mosfetIdAmps, setMosfetIdAmps] = useState<number>(8);
  const [mosfetRdsMilliOhms, setMosfetRdsMilliOhms] = useState<number>(12);
  const [thetaJa, setThetaJa] = useState<number>(45);
  const mosfetPcondWatts = mosfetIdAmps * mosfetIdAmps * (mosfetRdsMilliOhms * 1e-3);
  const mosfetTjCelsius = 25 + mosfetPcondWatts * thetaJa;

  // Simulation J: Multimeter Loading & N-bit ADC Quantizer state
  const [dmmSourceVolts, setDmmSourceVolts] = useState<number>(5.0);
  const [circuitRthKOhms, setCircuitRthKOhms] = useState<number>(100);
  const [dmmInputMOhms, setDmmInputMOhms] = useState<number>(10);
  const rMeterKOhms = dmmInputMOhms * 1000;
  const dmmMeasuredVolts =
    dmmSourceVolts * (rMeterKOhms / Math.max(1e-6, circuitRthKOhms + rMeterKOhms));
  const dmmLoadingErrorPct =
    ((dmmMeasuredVolts - dmmSourceVolts) / Math.max(1e-6, dmmSourceVolts)) * 100;

  const [adcBits, setAdcBits] = useState<number>(10);
  const [adcVref, setAdcVref] = useState<number>(3.3);
  const [adcVin, setAdcVin] = useState<number>(1.65);
  const adcLevels = Math.pow(2, adcBits);
  const adcLsbMillivolts = (adcVref / adcLevels) * 1000;
  const adcDigitalCode = Math.min(
    adcLevels - 1,
    Math.max(0, Math.floor((adcVin / Math.max(0.1, adcVref)) * adcLevels))
  );

  // Simulation K: Motherboard Power-Rail Short Finder state
  const [selectedRail, setSelectedRail] = useState<'3V3_SYS' | '5V0_MAIN' | 'VCORE_1V1'>('3V3_SYS');
  const [injectCurrentAmps, setInjectCurrentAmps] = useState<number>(1.5);
  const [kelvinProbeNode, setKelvinProbeNode] = useState<number>(3);
  const railSpecs: Record<
    '3V3_SYS' | '5V0_MAIN' | 'VCORE_1V1',
    { nominalVolts: number; coldOhms: string; faultStatus: string }
  > = {
    '3V3_SYS': { nominalVolts: 3.3, coldOhms: '0.62', faultStatus: 'SHORT DETECTED (MLCC C402 on Node #3)' },
    '5V0_MAIN': { nominalVolts: 5.0, coldOhms: '4,250', faultStatus: 'HEALTHY HIGH-Z RAIL' },
    VCORE_1V1: { nominalVolts: 1.1, coldOhms: '34.0', faultStatus: 'NORMAL LOW-Z CPU CORE RAIL (Not a Short)' },
  };
  const activeRailSpec = railSpecs[selectedRail];
  const nodeDropFactors = [0.22, 0.56, 0.94, 0.94];
  const kelvinDropMillivolts =
    selectedRail === '3V3_SYS'
      ? injectCurrentAmps * 12.5 * (nodeDropFactors[kelvinProbeNode - 1] || 0.5)
      : injectCurrentAmps * 0.4;

  // Simulation L: PCB Pad/Trace Resistance & IPC-2152 Workbench state
  const [traceWidthMm, setTraceWidthMm] = useState<number>(0.5);
  const [traceLengthMm, setTraceLengthMm] = useState<number>(25);
  const [copperOz, setCopperOz] = useState<number>(1);
  const [solderAlloy, setSolderAlloy] = useState<'SAC305' | 'Sn63Pb37' | 'Sn42Bi58'>('SAC305');
  const copperThicknessMm = copperOz * 0.0347;
  const crossSectionMm2 = Math.max(1e-5, traceWidthMm * copperThicknessMm);
  const traceResistanceMilliohms = ((1.68e-5 * traceLengthMm) / crossSectionMm2) * 1000;
  const crossSectionMils2 = (traceWidthMm * 39.37) * (copperOz * 1.37);
  const safeCurrentAmps10C = 0.048 * Math.pow(10, 0.44) * Math.pow(crossSectionMils2, 0.725);

  const LAB_TABS: Array<{ id: LabId; labelEn: string; labelPa: string; icon: React.ReactNode }> = [
    { id: 'hardware-explorer', labelEn: 'A. Hardware Explorer', labelPa: 'ਹਾਰਡਵੇਅਰ ਖੋਜੀ', icon: <Cpu className="w-4 h-4" /> },
    { id: 'cpu-cycle', labelEn: 'B. CPU Cycle & Assembly', labelPa: 'CPU ਚੱਕਰ', icon: <Zap className="w-4 h-4" /> },
    { id: 'ram-storage', labelEn: 'C. RAM vs Storage', labelPa: 'RAM ਬਨਾਮ SSD', icon: <HardDrive className="w-4 h-4" /> },
    { id: 'binary-converter', labelEn: 'D. Binary Converter', labelPa: 'ਬਾਈਨਰੀ ਕਨਵਰਟਰ', icon: <Binary className="w-4 h-4" /> },
    { id: 'logic-gates', labelEn: 'E. Logic Gates Lab', labelPa: 'ਲੌਜਿਕ ਗੇਟ', icon: <GitBranch className="w-4 h-4" /> },
    { id: 'network-sim', labelEn: 'F. Network Packets', labelPa: 'ਇੰਟਰਨੈੱਟ ਪੈਕਟ', icon: <Network className="w-4 h-4" /> },
    { id: 'algorithm-math-lab', labelEn: 'G. Algorithms & CS Math', labelPa: 'ਐਲਗੋਰਿਦਮ ਅਤੇ ਗਣਿਤ', icon: <Calculator className="w-4 h-4" /> },
    { id: 'resistor-calc', labelEn: 'H. Ohm’s Law & RC/RLC', labelPa: 'ਓਹਮ ਦਾ ਨਿਯਮ ਅਤੇ RC/RLC', icon: <Sliders className="w-4 h-4" /> },
    { id: 'transistor-switch', labelEn: 'I. BJT & MOSFET Switch', labelPa: 'ਟ੍ਰਾਂਜ਼ਿਸਟਰ ਸਵਿੱਚ', icon: <Activity className="w-4 h-4" /> },
    { id: 'multimeter-lab', labelEn: 'J. DMM & ADC Lab', labelPa: 'ਮਲਟੀਮੀਟਰ ਅਤੇ ADC', icon: <Gauge className="w-4 h-4" /> },
    { id: 'lab-power-rail-short-finder', labelEn: 'K. Power-Rail Short Finder', labelPa: 'ਪਾਵਰ ਰੇਲ ਸ਼ਾਰਟ ਫਾਈਂਡਰ', icon: <Zap className="w-4 h-4" /> },
    { id: 'lab-pad-trace-repair-simulator', labelEn: 'L. PCB Trace & Rework', labelPa: 'PCB ਟ੍ਰੇਸ ਰਿਪੇਅਰ', icon: <Wrench className="w-4 h-4" /> },
  ];

  const surfaceCard = darkMode
    ? 'bg-slate-900 border-slate-800 text-slate-100'
    : 'bg-white border-slate-200 text-slate-900';

  const subtlePanel = darkMode
    ? 'bg-slate-950/70 border-slate-800 text-slate-200'
    : 'bg-slate-50 border-slate-200 text-slate-800';

  return (
    <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
      {/* Educational Simulation Disclaimer Banner */}
      <div className={`px-4 py-2.5 rounded-xl border text-xs flex flex-wrap items-center justify-between gap-2 ${subtlePanel}`}>
        <div>
          <span className="font-bold text-sky-500">Educational Simulation Model · ਸਿੱਖਿਆਦਾਇਕ ਸਿਮੂਲੇਸ਼ਨ ਮਾਡਲ: </span>
          <span>
            These interactive laboratories are simplified educational simulations designed to teach core computer science concepts clearly, rather than cycle-accurate silicon hardware or physical network emulation.
          </span>
        </div>
      </div>

      {/* Lab Selector Tabs */}
      <div className={`p-1.5 rounded-xl border w-full max-w-full overflow-x-auto no-scrollbar flex items-center gap-1.5 ${surfaceCard}`}>
        {LAB_TABS.map((tab) => {
          const active = activeLab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveLab(tab.id)}
              className={`flex items-center gap-2 px-3.5 min-h-[42px] rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                active
                  ? 'bg-sky-600 text-white shadow-xs'
                  : darkMode
                  ? 'text-slate-300 hover:bg-slate-800'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab.icon}
              <span>{langMode === 'punjabi' ? tab.labelPa : tab.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* SIMULATION A: COMPUTER HARDWARE EXPLORER */}
      {activeLab === 'hardware-explorer' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left 7 Cols: Interactive SVG Motherboard Stage */}
          <div className={`lg:col-span-7 p-6 rounded-xl border flex flex-col justify-between ${surfaceCard}`}>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Simulation A: Interactive Motherboard & System Architecture</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Click any component on the blueprint below to inspect its function, bus pathways, and Punjabi explanation
                </p>
              </div>
              <span className="text-xs font-mono text-sky-600 dark:text-sky-400">Interactive Blueprint</span>
            </div>

            <div className="w-full overflow-hidden rounded-lg border border-slate-700/40 bg-slate-950 p-3">
              <svg viewBox="0 0 460 380" className="w-full h-auto select-none">
                {/* PCB Grid Background */}
                <rect x="10" y="10" width="440" height="360" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="2" />
                {/* Copper Data Bus Traces */}
                <path d="M 260 150 L 355 150" stroke="#0284c7" strokeWidth="3" strokeDasharray="4 2" />
                <path d="M 260 205 L 260 230" stroke="#10b981" strokeWidth="3" strokeDasharray="4 2" />
                <path d="M 260 272 L 260 295" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4 2" />
                <path d="M 120 300 L 205 160" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />

                <text x="24" y="34" fill="#94a3b8" fontSize="11" fontFamily="IBM Plex Mono">
                  MOTHERBOARD SYSTEM BUS (PCIe 5.0 / DDR5 MEMORY BUS)
                </text>

                {HARDWARE_PARTS.map((part) => {
                  const isSelected = part.id === selectedPartId;
                  return (
                    <g
                      key={part.id}
                      onClick={() => setSelectedPartId(part.id)}
                      className="cursor-pointer transition-opacity hover:opacity-95"
                    >
                      <rect
                        x={part.x}
                        y={part.y}
                        width={part.w}
                        height={part.h}
                        rx="8"
                        fill={isSelected ? '#0369a1' : '#1e293b'}
                        stroke={isSelected ? '#38bdf8' : '#64748b'}
                        strokeWidth={isSelected ? '3' : '1.5'}
                      />
                      <text
                        x={part.x + part.w / 2}
                        y={part.y + part.h / 2 - 4}
                        textAnchor="middle"
                        fill="#f8fafc"
                        fontSize="11"
                        fontWeight="bold"
                        fontFamily="Plus Jakarta Sans"
                      >
                        {part.id.toUpperCase()}
                      </text>
                      <text
                        x={part.x + part.w / 2}
                        y={part.y + part.h / 2 + 12}
                        textAnchor="middle"
                        fill="#bae6fd"
                        fontSize="8.5"
                        fontFamily="IBM Plex Mono"
                      >
                        Click to Inspect
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right 5 Cols: Component Details & Bilingual Explanation */}
          <div className={`lg:col-span-5 p-6 rounded-xl border flex flex-col justify-between space-y-4 ${surfaceCard}`}>
            <div className="space-y-3">
              <div className="text-xs text-sky-600 dark:text-sky-400 font-semibold">
                Selected Hardware Component · ਚੁਣਿਆ ਗਿਆ ਹਿੱਸਾ
              </div>
              <h4 className="text-xl font-bold">{selectedPart.nameEn}</h4>
              <p className="text-base font-semibold text-amber-600 dark:text-amber-400">{selectedPart.namePa}</p>

              <div className={`p-3.5 rounded-lg border ${subtlePanel}`}>
                <div className="text-xs font-semibold text-slate-500 mb-1">
                  🧒 ਬੱਚਿਆਂ ਵਾਂਗ ਸੌਖੀ ਉਦਾਹਰਣ (Child-Friendly Analogy)
                </div>
                <p className="text-sm leading-relaxed">{selectedPart.childAnalogyPa}</p>
              </div>

              {langMode !== 'punjabi' && (
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">Technical Function (English)</div>
                  <p className="text-sm leading-relaxed">{selectedPart.roleEn}</p>
                </div>
              )}

              {langMode !== 'english' && (
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">ਤਕਨੀਕੀ ਕੰਮ (Punjabi Explanation)</div>
                  <p className="text-sm leading-relaxed">{selectedPart.rolePa}</p>
                </div>
              )}

              <div className={`p-3 rounded-lg border font-mono text-xs ${subtlePanel}`}>
                <div className="font-semibold mb-1">Typical Specifications:</div>
                <div>{selectedPart.specs}</div>
              </div>

              <div className={`p-3 rounded-lg border text-xs ${subtlePanel}`}>
                <div className="font-semibold mb-1">Practical Hardware Troubleshooting:</div>
                <div>{selectedPart.troubleshooting}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {HARDWARE_PARTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPartId(p.id)}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    selectedPartId === p.id
                      ? 'bg-sky-600 text-white'
                      : darkMode
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {p.id.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SIMULATION B: CPU INSTRUCTION CYCLE & ASSEMBLY */}
      {activeLab === 'cpu-cycle' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className={`lg:col-span-7 p-6 rounded-xl border space-y-5 ${surfaceCard}`}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold">Simulation B: CPU Instruction Cycle (Fetch → Decode → Execute → Write-Back)</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Educational CPU Register & ALU Model — Watch how Assembly instructions execute step-by-step
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCpuPlaying(!cpuPlaying)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 text-white text-xs font-semibold hover:bg-sky-500"
                >
                  {cpuPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{cpuPlaying ? 'Pause' : 'Auto Play'}</span>
                </button>
                <button
                  onClick={advanceCpuCycle}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold ${subtlePanel}`}
                >
                  <StepForward className="w-3.5 h-3.5" />
                  <span>Next Stage</span>
                </button>
                <button
                  onClick={resetCpuSim}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs ${subtlePanel}`}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* 4 Stage Pipeline Indicator */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(['FETCH', 'DECODE', 'EXECUTE', 'WRITEBACK'] as const).map((st, i) => {
                const isActive = cpuStage === st;
                return (
                  <div
                    key={st}
                    className={`p-2.5 sm:p-3 rounded-lg border text-center transition-all min-w-0 ${
                      isActive
                        ? 'bg-sky-600 text-white border-sky-500 font-bold'
                        : darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-400'
                        : 'bg-slate-50 border-slate-200 text-slate-500'
                    }`}
                  >
                    <div className="text-[11px] font-mono">STAGE {i + 1}</div>
                    <div className="text-xs sm:text-sm truncate">{st}</div>
                  </div>
                );
              })}
            </div>

            {/* Live Stage Action Explanation */}
            <div className="p-3.5 rounded-xl border border-sky-500/40 bg-sky-500/10 space-y-1 text-xs">
              <div className="font-bold text-sky-400">
                Active Stage Action ({cpuStage}) · ਇਸ ਪੜਾਅ ਦੀ ਕਾਰਵਾਈ:
              </div>
              {langMode !== 'english' && (
                <div className="font-medium">{getCpuStageActionDescription().pa}</div>
              )}
              {langMode !== 'punjabi' && (
                <div className="text-slate-400">{getCpuStageActionDescription().en}</div>
              )}
            </div>

            {/* Decoder & ALU Pipeline Latch Status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className={`p-3 rounded-lg border ${subtlePanel}`}>
                <div className="text-slate-500">Control Unit Decoder Status</div>
                <div className="font-bold text-sky-400 mt-0.5">{decodedSummary}</div>
              </div>
              <div className={`p-3 rounded-lg border ${subtlePanel}`}>
                <div className="text-slate-500">ALU / Execution Latch</div>
                <div className="font-bold text-amber-400 mt-0.5">{aluOutputLatch}</div>
              </div>
            </div>

            {/* CPU Registers & ALU Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono tabular-nums">
              <div className={`p-3.5 rounded-lg border ${subtlePanel}`}>
                <div className="text-xs text-slate-500">Program Counter (PC)</div>
                <div className="text-lg font-bold text-sky-500">{currentCpuInstruction.addr}</div>
              </div>
              <div className={`p-3.5 rounded-lg border ${subtlePanel}`}>
                <div className="text-xs text-slate-500">Instruction Register (IR)</div>
                <div className="text-sm font-bold text-amber-500">{regIR}</div>
              </div>
              <div className={`p-3.5 rounded-lg border ${subtlePanel}`}>
                <div className="text-xs text-slate-500">Accumulator (ACC)</div>
                <div className="text-lg font-bold text-emerald-500">{regACC}</div>
              </div>
              <div className={`p-3.5 rounded-lg border ${subtlePanel}`}>
                <div className="text-xs text-slate-500">Register R1</div>
                <div className="text-lg font-bold">{regR1}</div>
              </div>
              <div className={`p-3.5 rounded-lg border ${subtlePanel}`}>
                <div className="text-xs text-slate-500">Register R2</div>
                <div className="text-lg font-bold">{regR2}</div>
              </div>
              <div className={`p-3.5 rounded-lg border ${subtlePanel}`}>
                <div className="text-xs text-slate-500">RAM Address [0x10]</div>
                <div className="text-lg font-bold text-purple-400">{ram0x10}</div>
              </div>
            </div>
          </div>

          <div className={`lg:col-span-5 p-6 rounded-xl border space-y-4 ${surfaceCard}`}>
            <h4 className="text-base font-bold">Stored Program in RAM (Assembly Trace)</h4>
            <div className="space-y-2">
              {CPU_PROGRAM.map((row, idx) => {
                const isCurrent = idx === cpuStepIndex;
                return (
                  <div
                    key={row.addr}
                    className={`p-3 rounded-lg border transition-colors ${
                      isCurrent
                        ? 'border-sky-500 bg-sky-500/10'
                        : darkMode
                        ? 'border-slate-800 bg-slate-950/40'
                        : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-xs mb-1">
                      <span className="font-bold text-sky-500">{row.addr}</span>
                      <span className="font-semibold">{row.instr}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">{row.paDesc}</p>
                    <p className="text-xs text-slate-500">{row.enDesc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* SIMULATION C: RAM vs STORAGE HIERARCHY */}
      {activeLab === 'ram-storage' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className={`lg:col-span-7 p-6 rounded-xl border space-y-5 ${surfaceCard}`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Simulation C: Volatility & Latency — Cache vs RAM vs SSD vs HDD</h3>
                <p className="text-xs text-slate-500">
                  Test what happens to data in Volatile RAM vs Non-Volatile SSD when electrical power is cut!
                </p>
              </div>
              <button
                onClick={toggleSystemPower}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                  powerOn ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                }`}
              >
                {powerOn ? '⚡ System Power: ON (Click to Cut Power)' : '🔌 Power OFF (Click to Boot)'}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`p-4 rounded-xl border ${subtlePanel}`}>
                <div className="text-xs font-semibold text-amber-500 mb-1">
                  DRAM (Volatile Memory · ~60 ns Latency)
                </div>
                <input
                  type="text"
                  disabled={!powerOn}
                  value={ramBufferText}
                  onChange={(e) => setRamBufferText(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-400/40 bg-transparent text-xs font-mono mb-3"
                />
                <button
                  onClick={commitRamToSsd}
                  disabled={!powerOn}
                  className="w-full py-2 rounded-lg bg-sky-600 text-white text-xs font-semibold hover:bg-sky-500 disabled:opacity-40"
                >
                  Save (Write) from RAM to Non-Volatile SSD →
                </button>
              </div>

              <div className={`p-4 rounded-xl border ${subtlePanel}`}>
                <div className="text-xs font-semibold text-emerald-500 mb-1">
                  NVMe SSD (Non-Volatile Storage · ~50,000 ns)
                </div>
                <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/5 text-xs font-mono">
                  {ssdSavedText}
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  ✅ Survives power loss! Stored in NAND Flash floating-gate transistors.
                </p>
              </div>
            </div>
          </div>

          <div className={`lg:col-span-5 p-6 rounded-xl border space-y-3 ${surfaceCard}`}>
            <h4 className="text-base font-bold">Memory Hierarchy Speed Comparison</h4>
            <div className="space-y-2.5 text-xs font-mono tabular-nums">
              <div className={`p-3 rounded-lg border ${subtlePanel}`}>
                <div className="font-bold text-sky-500">1. CPU Registers (Flip-Flops)</div>
                <div>Latency: 0.4 ns · Volatile · Inside CPU Core</div>
              </div>
              <div className={`p-3 rounded-lg border ${subtlePanel}`}>
                <div className="font-bold text-sky-400">2. L1 / L2 / L3 SRAM Cache</div>
                <div>Latency: 1 – 10 ns · Volatile · On-die SRAM</div>
              </div>
              <div className={`p-3 rounded-lg border ${subtlePanel}`}>
                <div className="font-bold text-amber-500">3. DDR5 Main Memory (RAM)</div>
                <div>Latency: ~60 ns · Volatile · Active Workspace</div>
              </div>
              <div className={`p-3 rounded-lg border ${subtlePanel}`}>
                <div className="font-bold text-emerald-500">4. NVMe SSD / Magnetic HDD</div>
                <div>Latency: 50,000 ns (SSD) / 5,000,000 ns (HDD) · Non-Volatile</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SIMULATION D: BINARY, DECIMAL, OCTAL & HEXADECIMAL CONVERTER */}
      {activeLab === 'binary-converter' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className={`lg:col-span-7 p-6 rounded-xl border space-y-5 ${surfaceCard}`}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold">Simulation D: Interactive 8-Bit Binary Torch Switchboard</h3>
                <p className="text-xs text-slate-500">
                  Click any bit switch below to turn the positional weight ON (1) or OFF (0)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={0}
                  max={255}
                  value={decimalValue}
                  onChange={(e) => setDecimalValue(Math.max(0, Math.min(255, Number(e.target.value) || 0)))}
                  className={`w-24 px-3 py-1.5 rounded-lg border text-sm font-mono tabular-nums ${subtlePanel}`}
                />
                <span className="text-xs text-slate-500">(0–255)</span>
              </div>
            </div>

            {/* 8 Interactive Binary Bit Switches */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 font-mono tabular-nums">
              {weights.map((w, idx) => {
                const isOn = (decimalValue & w) !== 0;
                return (
                  <button
                    key={w}
                    onClick={() => toggleBitWeight(w)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      isOn
                        ? 'bg-sky-600 text-white border-sky-400 shadow-sm'
                        : darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-400'
                        : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    <div className="text-[10px] opacity-80">2^{7 - idx}</div>
                    <div className="text-xs font-bold mb-1">+{w}</div>
                    <div className="text-2xl font-bold">{isOn ? '1' : '0'}</div>
                    <div className="text-[10px] mt-1">{isOn ? 'ON' : 'OFF'}</div>
                  </button>
                );
              })}
            </div>

            {/* Live Addition Formula */}
            <div className={`p-4 rounded-xl border font-mono text-xs ${subtlePanel}`}>
              <div className="text-slate-500 mb-1">Step-by-Step Positional Weight Calculation (ਸੱਜੇ ਤੋਂ ਖੱਬੇ ਜੋੜ):</div>
              <div className="text-sm font-bold">
                {weights
                  .filter((w) => (decimalValue & w) !== 0)
                  .map((w) => `${w}`)
                  .join(' + ') || '0'}{' '}
                = {decimalValue} (Decimal)
              </div>
            </div>

            {/* Practice Challenge */}
            <div className={`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-3 ${subtlePanel}`}>
              <div>
                <div className="text-xs font-bold">🎯 Practice Challenge (ਅਭਿਆਸ):</div>
                <div className="text-sm">
                  Toggle the 8 switches above to build Decimal <strong className="font-mono">{practiceTarget}</strong>!
                </div>
                {practiceFeedback && (
                  <div className="text-xs font-bold text-emerald-500 mt-1">{practiceFeedback}</div>
                )}
              </div>
              <button
                onClick={() => {
                  const next = Math.floor(Math.random() * 250) + 1;
                  setPracticeTarget(next);
                  setPracticeFeedback('');
                }}
                className="px-3 py-1.5 rounded-lg bg-sky-600 text-white text-xs font-semibold"
              >
                New Target Number
              </button>
            </div>
          </div>

          <div className={`lg:col-span-5 p-6 rounded-xl border space-y-4 font-mono tabular-nums ${surfaceCard}`}>
            <h4 className="text-base font-bold font-sans">Multi-Base Representations</h4>
            <div className={`p-3.5 rounded-lg border ${subtlePanel}`}>
              <div className="text-xs text-slate-500">Binary (Base-2)</div>
              <div className="text-xl font-bold text-sky-500">{decimalValue.toString(2).padStart(8, '0')}</div>
            </div>
            <div className={`p-3.5 rounded-lg border ${subtlePanel}`}>
              <div className="text-xs text-slate-500">Decimal (Base-10)</div>
              <div className="text-xl font-bold text-emerald-500">{decimalValue.toString(10)}</div>
            </div>
            <div className={`p-3.5 rounded-lg border ${subtlePanel}`}>
              <div className="text-xs text-slate-500">Octal (Base-8)</div>
              <div className="text-xl font-bold text-amber-500">0o{decimalValue.toString(8)}</div>
            </div>
            <div className={`p-3.5 rounded-lg border ${subtlePanel}`}>
              <div className="text-xs text-slate-500">Hexadecimal (Base-16)</div>
              <div className="text-xl font-bold text-purple-400">
                0x{decimalValue.toString(16).toUpperCase().padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SIMULATION E: LOGIC GATE LABORATORY */}
      {activeLab === 'logic-gates' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className={`lg:col-span-7 p-6 rounded-xl border space-y-5 ${surfaceCard}`}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-bold">Simulation E: Interactive Logic Gate Laboratory</h3>
              <div className="flex flex-wrap gap-1">
                {(['AND', 'OR', 'NOT', 'NAND', 'NOR', 'XOR', 'XNOR'] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGateType(g)}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold ${
                      gateType === g
                        ? 'bg-sky-600 text-white'
                        : darkMode
                        ? 'bg-slate-800 text-slate-300'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Inputs -> Gate -> Output */}
            <div className={`p-6 rounded-xl border flex flex-col sm:flex-row items-center justify-around gap-6 ${subtlePanel}`}>
              <div className="space-y-3">
                <button
                  onClick={() => setInputA(inputA === 1 ? 0 : 1)}
                  className={`w-36 py-3 rounded-xl font-mono font-bold text-sm border transition-all ${
                    inputA === 1
                      ? 'bg-emerald-600 text-white border-emerald-400'
                      : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  Input A = {inputA}
                </button>
                {gateType !== 'NOT' && (
                  <button
                    onClick={() => setInputB(inputB === 1 ? 0 : 1)}
                    className={`w-36 py-3 rounded-xl font-mono font-bold text-sm border transition-all block ${
                      inputB === 1
                        ? 'bg-emerald-600 text-white border-emerald-400'
                        : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}
                  >
                    Input B = {inputB}
                  </button>
                )}
              </div>

              <div className="text-center px-6 py-4 rounded-2xl border-2 border-sky-500 bg-sky-500/10">
                <div className="text-xs font-mono text-sky-400">LOGIC GATE</div>
                <div className="text-2xl font-bold font-mono">{gateType}</div>
              </div>

              <div
                className={`w-40 py-4 rounded-xl text-center font-mono font-bold border-2 ${
                  currentGateOutput === 1
                    ? 'bg-amber-500 text-slate-950 border-amber-300'
                    : 'bg-slate-900 text-slate-400 border-slate-700'
                }`}
              >
                <div className="text-xs">OUTPUT Y</div>
                <div className="text-3xl">{currentGateOutput}</div>
              </div>
            </div>
          </div>

          {/* Truth Table */}
          <div className={`lg:col-span-5 p-6 rounded-xl border space-y-3 ${surfaceCard}`}>
            <h4 className="text-base font-bold">Live Truth Table ({gateType} Gate)</h4>
            <table className="w-full text-xs font-mono tabular-nums border-collapse">
              <thead>
                <tr className="border-b border-slate-500/30 text-left">
                  <th className="py-2 px-3">Input A</th>
                  {gateType !== 'NOT' && <th className="py-2 px-3">Input B</th>}
                  <th className="py-2 px-3">Output Y</th>
                </tr>
              </thead>
              <tbody>
                {(gateType === 'NOT'
                  ? ([
                      [0, 0],
                      [1, 0],
                    ] as Array<[0 | 1, 0 | 1]>)
                  : ([
                      [0, 0],
                      [0, 1],
                      [1, 0],
                      [1, 1],
                    ] as Array<[0 | 1, 0 | 1]>)
                ).map(([a, b], idx) => {
                  const out = computeGate(gateType, a, b);
                  const activeRow = a === inputA && (gateType === 'NOT' || b === inputB);
                  return (
                    <tr
                      key={idx}
                      className={`border-b border-slate-500/20 ${
                        activeRow ? 'bg-sky-500/20 font-bold text-sky-400' : ''
                      }`}
                    >
                      <td className="py-2.5 px-3">{a}</td>
                      {gateType !== 'NOT' && <td className="py-2.5 px-3">{b}</td>}
                      <td className="py-2.5 px-3">{out}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SIMULATION F: NETWORK PACKET SWITCHING */}
      {activeLab === 'network-sim' && (
        <div className={`p-6 rounded-xl border space-y-6 ${surfaceCard}`}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold">
                Simulation F: DNS Resolution & Packet Routing (DNS Query → DNS Reply → HTTPS Packet → Switch/Router → Server)
              </h3>
              <p className="text-xs text-slate-500">
                Simplified Educational Network Model — Step through DNS lookup (8.8.8.8) first, followed by TCP/IP packet routing to 93.184.216.34
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPacketHop((h) => (h + 1) % NETWORK_NODES.length)}
                className="px-4 py-2 rounded-lg bg-sky-600 text-white text-xs font-semibold hover:bg-sky-500 flex items-center gap-1.5"
              >
                <span>Transmit to Next Hop</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setPacketHop(0)}
                className={`px-3 py-2 rounded-lg border text-xs ${subtlePanel}`}
              >
                Reset
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {NETWORK_NODES.map((node, i) => {
              const active = i === packetHop;
              const passed = i < packetHop;
              return (
                <div
                  key={node.name}
                  onClick={() => setPacketHop(i)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    active
                      ? 'border-sky-500 bg-sky-500/15 shadow-sm'
                      : passed
                      ? 'border-emerald-500/40 bg-emerald-500/5'
                      : subtlePanel
                  }`}
                >
                  <div className="text-xs font-bold mb-1">{node.name}</div>
                  <div className="text-[11px] font-mono text-sky-500 mb-2">{node.header}</div>
                  <p className="text-xs leading-relaxed mb-1">{node.pa}</p>
                  <p className="text-[11px] text-slate-500">{node.en}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SIMULATION G: ALGORITHMS & CS MATH VISUALIZER */}
      {activeLab === 'algorithm-math-lab' && (
        <div className={`p-6 rounded-xl border space-y-6 ${surfaceCard}`}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold">
                Simulation G: Step-by-Step Algorithm & CS Mathematics Laboratory
              </h3>
              <p className="text-xs text-slate-500">
                Interactive Binary Search O(log n) Visualizer + Discrete Math Set Theory & Live Statistics
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setAlgoTab('binary-search')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                  algoTab === 'binary-search' ? 'bg-sky-600 text-white' : subtlePanel
                }`}
              >
                Binary Search Visualizer
              </button>
              <button
                onClick={() => setAlgoTab('discrete-math')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                  algoTab === 'discrete-math' ? 'bg-sky-600 text-white' : subtlePanel
                }`}
              >
                Discrete Math & Statistics
              </button>
            </div>
          </div>

          {algoTab === 'binary-search' ? (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold">Target to Find:</span>
                  {sortedNumbers.map((n) => (
                    <button
                      key={n}
                      onClick={() => resetBinarySearch(n)}
                      className={`px-2 py-1 rounded text-xs font-mono ${
                        searchTarget === n ? 'bg-amber-500 text-slate-950 font-bold' : subtlePanel
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={stepBinarySearch}
                    className="px-4 py-1.5 rounded-lg bg-sky-600 text-white text-xs font-semibold"
                  >
                    Step Binary Search
                  </button>
                  <button
                    onClick={() => resetBinarySearch(searchTarget)}
                    className={`px-3 py-1.5 rounded-lg border text-xs ${subtlePanel}`}
                  >
                    Reset
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-11 gap-2 font-mono tabular-nums">
                {sortedNumbers.map((val, idx) => {
                  const inRange = idx >= bsLow && idx <= bsHigh;
                  const isMid = idx === bsMid && inRange;
                  return (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        isMid
                          ? 'bg-amber-500 text-slate-950 border-amber-300 font-bold scale-105'
                          : inRange
                          ? 'bg-sky-500/15 border-sky-500/40'
                          : 'opacity-30 border-slate-700'
                      }`}
                    >
                      <div className="text-[10px]">[{idx}]</div>
                      <div className="text-base font-bold">{val}</div>
                      <div className="text-[10px]">
                        {isMid ? 'MID' : idx === bsLow ? 'LOW' : idx === bsHigh ? 'HIGH' : ''}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={`p-4 rounded-xl border font-mono text-xs space-y-1 ${subtlePanel}`}>
                {bsHistory.map((line, i) => (
                  <div key={i}>• {line}</div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-4 rounded-xl border space-y-3 ${subtlePanel}`}>
                <h4 className="text-sm font-bold">
                  1. Statistics: Mean (ਔਸਤ) vs Median (ਮੱਧਮਾਨ) Explorer
                </h4>
                <p className="text-xs text-slate-500">
                  Adjust the 5th number (Outlier) to see why Median stays stable while Mean jumps!
                </p>
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span>Dataset: [12, 18, 20, 24, </span>
                  <input
                    type="number"
                    value={statNumbers[4]}
                    onChange={(e) => {
                      const next = [...statNumbers];
                      next[4] = Number(e.target.value) || 0;
                      setStatNumbers(next);
                    }}
                    className="w-20 px-2 py-1 rounded border border-sky-500 bg-transparent font-bold"
                  />
                  <span>]</span>
                </div>
                <div className="grid grid-cols-2 gap-3 font-mono tabular-nums pt-2">
                  <div className="p-3 rounded-lg border border-amber-500/40 bg-amber-500/10">
                    <div className="text-xs">Mean (Average)</div>
                    <div className="text-xl font-bold">{statMean}</div>
                  </div>
                  <div className="p-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10">
                    <div className="text-xs">Median (Middle Value)</div>
                    <div className="text-xl font-bold">{statMedian}</div>
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-xl border space-y-3 ${subtlePanel}`}>
                <h4 className="text-sm font-bold">
                  2. Discrete Math: Set Theory & De Morgan’s Law
                </h4>
                <div className="text-xs font-mono space-y-1.5">
                  <div>Set A (Punjabi Dish Lovers) = &#123;Saag, Paneer, Kheer&#125;</div>
                  <div>Set B (Sweet Dish Lovers) = &#123;Kheer, Jalebi, GulabJamun&#125;</div>
                  <div className="text-emerald-500 font-bold pt-1">
                    Intersection (A ∩ B — ਦੋਵਾਂ ਵਿੱਚ ਸਾਂਝਾ) = &#123;Kheer&#125;
                  </div>
                  <div className="text-sky-400 font-bold">
                    Union (A ∪ B — ਕੁੱਲ ਮਿਲਾ ਕੇ) = &#123;Saag, Paneer, Kheer, Jalebi, GulabJamun&#125;
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* SIMULATION H: OHM'S LAW, VOLTAGE DIVIDER, RC & RLC RESONANCE LAB */}
      {activeLab === 'resistor-calc' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className={`lg:col-span-7 p-6 rounded-xl border space-y-5 ${surfaceCard}`}>
            <div>
              <h3 className="text-lg font-bold">
                Simulation H: Ohm’s Law, Voltage Divider & Passive RC / RLC Filter Workbench
              </h3>
              <p className="text-xs text-slate-500">
                Adjust supply voltage V_s, R_1, R_2, C, and L to inspect exact loop current, power dissipation ratings, -3.0103 dB cutoff frequency, and LC resonance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <label className={`p-3 rounded-xl border space-y-1.5 ${subtlePanel}`}>
                <span className="font-semibold text-sky-500">Supply Voltage V_s (V)</span>
                <input
                  type="number"
                  step="0.5"
                  min={1}
                  max={48}
                  value={vsVolts}
                  onChange={(e) => setVsVolts(Math.max(0.5, Number(e.target.value) || 0))}
                  className="w-full px-2.5 py-1.5 rounded border border-slate-500/40 bg-transparent text-sm font-bold"
                />
              </label>
              <label className={`p-3 rounded-xl border space-y-1.5 ${subtlePanel}`}>
                <span className="font-semibold text-amber-500">Top Resistor R₁ (Ω)</span>
                <input
                  type="number"
                  step="100"
                  min={10}
                  max={1000000}
                  value={r1Ohms}
                  onChange={(e) => setR1Ohms(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full px-2.5 py-1.5 rounded border border-slate-500/40 bg-transparent text-sm font-bold"
                />
              </label>
              <label className={`p-3 rounded-xl border space-y-1.5 ${subtlePanel}`}>
                <span className="font-semibold text-emerald-500">Bottom Resistor R₂ (Ω)</span>
                <input
                  type="number"
                  step="100"
                  min={10}
                  max={1000000}
                  value={r2Ohms}
                  onChange={(e) => setR2Ohms(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full px-2.5 py-1.5 rounded border border-slate-500/40 bg-transparent text-sm font-bold"
                />
              </label>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono tabular-nums">
              <div className={`p-3.5 rounded-xl border ${subtlePanel}`}>
                <div className="text-[11px] text-slate-500">Divider Output V_out</div>
                <div className="text-lg font-bold text-sky-500">{vOutUnloaded.toFixed(3)} V</div>
                <div className="text-[10px] text-slate-500">V_s · R₂ / (R₁ + R₂)</div>
              </div>
              <div className={`p-3.5 rounded-xl border ${subtlePanel}`}>
                <div className="text-[11px] text-slate-500">Series Current I</div>
                <div className="text-lg font-bold text-emerald-500">{(loopCurrentAmps * 1000).toFixed(2)} mA</div>
                <div className="text-[10px] text-slate-500">I = V_s / (R₁ + R₂)</div>
              </div>
              <div className={`p-3.5 rounded-xl border ${subtlePanel}`}>
                <div className="text-[11px] text-slate-500">Power P(R₁)</div>
                <div className={`text-lg font-bold ${powerR1Watts > 0.25 ? 'text-rose-500' : 'text-amber-500'}`}>
                  {(powerR1Watts * 1000).toFixed(1)} mW
                </div>
                <div className="text-[10px] text-slate-500">
                  {powerR1Watts > 0.25 ? '⚠️ Exceeds 1/4W Rating!' : '✅ Safe for 1/4W (250mW)'}
                </div>
              </div>
              <div className={`p-3.5 rounded-xl border ${subtlePanel}`}>
                <div className="text-[11px] text-slate-500">Power P(R₂)</div>
                <div className={`text-lg font-bold ${powerR2Watts > 0.25 ? 'text-rose-500' : 'text-amber-500'}`}>
                  {(powerR2Watts * 1000).toFixed(1)} mW
                </div>
                <div className="text-[10px] text-slate-500">P = I² · R₂</div>
              </div>
            </div>
          </div>

          <div className={`lg:col-span-5 p-6 rounded-xl border space-y-4 ${surfaceCard}`}>
            <h4 className="text-base font-bold">RC Time Constant (τ) & RLC Resonance Calculator</h4>
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <label className={`p-3 rounded-xl border space-y-1 ${subtlePanel}`}>
                <span>Capacitance C (µF)</span>
                <input
                  type="number"
                  step="1"
                  min={0.001}
                  value={capMicroFarads}
                  onChange={(e) => setCapMicroFarads(Math.max(0.0001, Number(e.target.value) || 0.1))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
              <label className={`p-3 rounded-xl border space-y-1 ${subtlePanel}`}>
                <span>Inductance L (mH)</span>
                <input
                  type="number"
                  step="0.5"
                  min={0.01}
                  value={indMilliHenries}
                  onChange={(e) => setIndMilliHenries(Math.max(0.01, Number(e.target.value) || 0.1))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
            </div>
            <div className={`p-4 rounded-xl border font-mono text-xs space-y-2 ${subtlePanel}`}>
              <div>
                <span className="text-slate-500">RC Time Constant (τ = R₁ · C): </span>
                <span className="font-bold text-sky-500">{(rcTauSeconds * 1000).toFixed(3)} ms</span>
              </div>
              <div>
                <span className="text-slate-500">Half-Power (-3.0103 dB) Cutoff f_c: </span>
                <span className="font-bold text-emerald-500">{rcCutoffHz.toFixed(2)} Hz</span>
              </div>
              <div>
                <span className="text-slate-500">LC Resonant Frequency f₀ = 1/(2π√LC): </span>
                <span className="font-bold text-amber-500">{rlcResonanceHz.toFixed(2)} Hz</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SIMULATION I: SEMICONDUCTOR BJT BIASING & MOSFET SWITCHING LAB */}
      {activeLab === 'transistor-switch' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className={`lg:col-span-7 p-6 rounded-xl border space-y-4 ${surfaceCard}`}>
            <div>
              <h3 className="text-lg font-bold">
                Simulation I: NPN BJT Operating Region & N-Channel MOSFET Switching Lab
              </h3>
              <p className="text-xs text-slate-500">
                Configure base drive V_in, R_B, collector load R_C, and β (h_FE) to observe Cutoff, Forward-Active amplification, and hard Saturation switching.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              <label className={`p-3 rounded-xl border space-y-1 ${subtlePanel}`}>
                <span>Base Drive V_in (V)</span>
                <input
                  type="number"
                  step="0.2"
                  value={bjtVin}
                  onChange={(e) => setBjtVin(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
              <label className={`p-3 rounded-xl border space-y-1 ${subtlePanel}`}>
                <span>Base R_B (Ω)</span>
                <input
                  type="number"
                  step="500"
                  value={bjtRbOhms}
                  onChange={(e) => setBjtRbOhms(Math.max(100, Number(e.target.value) || 100))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
              <label className={`p-3 rounded-xl border space-y-1 ${subtlePanel}`}>
                <span>Collector R_C (Ω)</span>
                <input
                  type="number"
                  step="50"
                  value={bjtRcOhms}
                  onChange={(e) => setBjtRcOhms(Math.max(10, Number(e.target.value) || 10))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
              <label className={`p-3 rounded-xl border space-y-1 ${subtlePanel}`}>
                <span>Current Gain β (h_FE)</span>
                <input
                  type="number"
                  step="10"
                  value={bjtBeta}
                  onChange={(e) => setBjtBeta(Math.max(10, Number(e.target.value) || 10))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono tabular-nums text-xs">
              <div className={`p-3 rounded-xl border ${subtlePanel}`}>
                <div className="text-slate-500">Base Current I_B</div>
                <div className="text-base font-bold text-sky-500">{(ibAmps * 1e6).toFixed(1)} µA</div>
              </div>
              <div className={`p-3 rounded-xl border ${subtlePanel}`}>
                <div className="text-slate-500">Collector I_C</div>
                <div className="text-base font-bold text-emerald-500">{(icActualAmps * 1000).toFixed(2)} mA</div>
              </div>
              <div className={`p-3 rounded-xl border ${subtlePanel}`}>
                <div className="text-slate-500">Collector-Emitter V_CE</div>
                <div className="text-base font-bold text-amber-500">{vceVolts.toFixed(2)} V</div>
              </div>
              <div className={`p-3 rounded-xl border ${subtlePanel}`}>
                <div className="text-slate-500">Operating Region</div>
                <div className="text-xs font-bold text-sky-400">{bjtRegion}</div>
              </div>
            </div>
          </div>

          <div className={`lg:col-span-5 p-6 rounded-xl border space-y-4 ${surfaceCard}`}>
            <h4 className="text-base font-bold">Power MOSFET Conduction & Thermal SOA</h4>
            <div className="grid grid-cols-3 gap-2 font-mono text-xs">
              <label className={`p-2.5 rounded-lg border space-y-1 ${subtlePanel}`}>
                <span>Drain I_D (A)</span>
                <input
                  type="number"
                  step="0.5"
                  value={mosfetIdAmps}
                  onChange={(e) => setMosfetIdAmps(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
              <label className={`p-2.5 rounded-lg border space-y-1 ${subtlePanel}`}>
                <span>R_DS(on) (mΩ)</span>
                <input
                  type="number"
                  step="2"
                  value={mosfetRdsMilliOhms}
                  onChange={(e) => setMosfetRdsMilliOhms(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
              <label className={`p-2.5 rounded-lg border space-y-1 ${subtlePanel}`}>
                <span>θ_JA (°C/W)</span>
                <input
                  type="number"
                  step="5"
                  value={thetaJa}
                  onChange={(e) => setThetaJa(Math.max(5, Number(e.target.value) || 5))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
            </div>
            <div className={`p-4 rounded-xl border font-mono text-xs space-y-2 ${subtlePanel}`}>
              <div>
                Conduction Loss P = I_D² · R_DS(on):{' '}
                <span className="font-bold text-amber-500">{mosfetPcondWatts.toFixed(3)} W</span>
              </div>
              <div>
                Junction Temp T_J = 25°C + P · θ_JA:{' '}
                <span className={`font-bold ${mosfetTjCelsius > 125 ? 'text-rose-500' : 'text-emerald-500'}`}>
                  {mosfetTjCelsius.toFixed(1)} °C {mosfetTjCelsius > 125 ? '(⚠️ Heatsink Required!)' : '(✅ Safe SOA)'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SIMULATION J: MULTIMETER INPUT LOADING, SAR ADC & OSCILLOSCOPE LAB */}
      {activeLab === 'multimeter-lab' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className={`lg:col-span-6 p-6 rounded-xl border space-y-4 ${surfaceCard}`}>
            <h3 className="text-lg font-bold">
              Simulation J1: DMM Input Impedance Loading Calculator
            </h3>
            <p className="text-xs text-slate-500">
              See how a standard 10 MΩ Digital Multimeter loads down high-impedance sensor/bias nodes.
            </p>
            <div className="grid grid-cols-3 gap-3 font-mono text-xs">
              <label className={`p-3 rounded-xl border space-y-1 ${subtlePanel}`}>
                <span>True Node V (V)</span>
                <input
                  type="number"
                  value={dmmSourceVolts}
                  onChange={(e) => setDmmSourceVolts(Math.max(0.1, Number(e.target.value) || 0.1))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
              <label className={`p-3 rounded-xl border space-y-1 ${subtlePanel}`}>
                <span>Source R_th (kΩ)</span>
                <input
                  type="number"
                  value={circuitRthKOhms}
                  onChange={(e) => setCircuitRthKOhms(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
              <label className={`p-3 rounded-xl border space-y-1 ${subtlePanel}`}>
                <span>DMM Z_in (MΩ)</span>
                <input
                  type="number"
                  value={dmmInputMOhms}
                  onChange={(e) => setDmmInputMOhms(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
            </div>
            <div className={`p-4 rounded-xl border font-mono text-xs space-y-1.5 ${subtlePanel}`}>
              <div>
                DMM Displayed Reading:{' '}
                <span className="text-base font-bold text-sky-500">{dmmMeasuredVolts.toFixed(4)} V</span>
              </div>
              <div>
                Measurement Loading Error:{' '}
                <span className="font-bold text-amber-500">{dmmLoadingErrorPct.toFixed(2)}%</span>
              </div>
            </div>
          </div>

          <div className={`lg:col-span-6 p-6 rounded-xl border space-y-4 ${surfaceCard}`}>
            <h3 className="text-lg font-bold">
              Simulation J2: Embedded SAR ADC Resolution & Quantization Lab
            </h3>
            <p className="text-xs text-slate-500">
              Compute step size (1 LSB) and output digital code for Microcontroller ADCs (8-bit to 16-bit).
            </p>
            <div className="grid grid-cols-3 gap-3 font-mono text-xs">
              <label className={`p-3 rounded-xl border space-y-1 ${subtlePanel}`}>
                <span>ADC Bits (N)</span>
                <input
                  type="number"
                  min={4}
                  max={16}
                  value={adcBits}
                  onChange={(e) => setAdcBits(Math.max(4, Math.min(16, Number(e.target.value) || 10)))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
              <label className={`p-3 rounded-xl border space-y-1 ${subtlePanel}`}>
                <span>V_ref (V)</span>
                <input
                  type="number"
                  step="0.1"
                  value={adcVref}
                  onChange={(e) => setAdcVref(Math.max(0.5, Number(e.target.value) || 3.3))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
              <label className={`p-3 rounded-xl border space-y-1 ${subtlePanel}`}>
                <span>Analog V_in (V)</span>
                <input
                  type="number"
                  step="0.1"
                  value={adcVin}
                  onChange={(e) => setAdcVin(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
            </div>
            <div className={`p-4 rounded-xl border font-mono text-xs space-y-1.5 ${subtlePanel}`}>
              <div>
                Resolution (2^N Levels): <span className="font-bold">{adcLevels} discrete steps</span> · 1 LSB ={' '}
                <span className="font-bold text-emerald-500">{adcLsbMillivolts.toFixed(3)} mV</span>
              </div>
              <div>
                Output Digital Register Value:{' '}
                <span className="text-base font-bold text-sky-500">
                  {adcDigitalCode} (0x{adcDigitalCode.toString(16).toUpperCase()})
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SIMULATION K: POWER RAIL SHORT-CIRCUIT & 4-WIRE KELVIN FINDER */}
      {activeLab === 'lab-power-rail-short-finder' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className={`lg:col-span-7 p-6 rounded-xl border space-y-4 ${surfaceCard}`}>
            <div>
              <h3 className="text-lg font-bold">
                Simulation K: PCB Power Rail Cold-Resistance & 4-Wire Kelvin Short-Circuit Finder
              </h3>
              <p className="text-xs text-slate-500">
                Localize a dead short on a multi-capacitor power rail by measuring millivolt gradients along the PCB copper trace.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {(['3V3_SYS', '5V0_MAIN', 'VCORE_1V1'] as const).map((rail) => (
                <button
                  key={rail}
                  onClick={() => setSelectedRail(rail)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono font-bold border ${
                    selectedRail === rail ? 'bg-sky-600 text-white border-sky-400' : subtlePanel
                  }`}
                >
                  Rail: {rail}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <label className={`p-3 rounded-xl border space-y-1 ${subtlePanel}`}>
                <span>Current-Clamped Injection I_inj (A) @ 1.0V Limit</span>
                <input
                  type="number"
                  step="0.25"
                  min={0.1}
                  max={3.0}
                  value={injectCurrentAmps}
                  onChange={(e) => setInjectCurrentAmps(Math.max(0.1, Math.min(3, Number(e.target.value) || 1)))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
              <div className={`p-3 rounded-xl border space-y-1 ${subtlePanel}`}>
                <span>4-Wire Kelvin Probe Position (Node 1 → 4)</span>
                <div className="flex gap-1.5 pt-1">
                  {[1, 2, 3, 4].map((node) => (
                    <button
                      key={node}
                      onClick={() => setKelvinProbeNode(node)}
                      className={`px-3 py-1 rounded font-bold ${
                        kelvinProbeNode === node ? 'bg-amber-500 text-slate-950' : 'border border-slate-600'
                      }`}
                    >
                      Node #{node}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-xl border font-mono text-xs space-y-2 ${subtlePanel}`}>
              <div>
                Cold Resistance to GND: <span className="font-bold text-amber-500">{activeRailSpec.coldOhms} Ω</span> ·{' '}
                <span className="font-bold text-sky-400">{activeRailSpec.faultStatus}</span>
              </div>
              <div>
                4-Wire Kelvin Voltage Drop at Node #{kelvinProbeNode}:{' '}
                <span className="text-base font-bold text-emerald-500">{kelvinDropMillivolts.toFixed(2)} mV</span>
              </div>
              <div className="text-slate-400">
                {selectedRail === '3V3_SYS'
                  ? kelvinProbeNode >= 3
                    ? '🎯 Voltage drop plateaus at Node #3 (C402)! Current leaves the rail into GND right at C402.'
                    : '↗️ Voltage drop is still increasing; move probe further toward Node #3 to reach the shorted component.'
                  : '✅ No abnormal trace current gradient detected on this rail.'}
              </div>
            </div>
          </div>

          <div className={`lg:col-span-5 p-6 rounded-xl border space-y-3 ${surfaceCard}`}>
            <h4 className="text-base font-bold">Diagnostic Protocol Summary (ਪੜਤਾਲ ਵਿਧੀ)</h4>
            <div className={`p-3.5 rounded-xl border text-xs space-y-2 ${subtlePanel}`}>
              <p>1. Never power a suspect board blindly; measure cold DC resistance across every rail to GND first.</p>
              <p>2. Distinguish low-impedance CPU/GPU core rails (~30–80 Ω) from true dead shorts (&lt; 1 Ω).</p>
              <p>3. Inject 0.8V–1.0V (below silicon forward threshold) at controlled current and follow the microvolt gradient to the exact shorted MLCC.</p>
            </div>
          </div>
        </div>
      )}

      {/* SIMULATION L: IPC-7721 PAD/TRACE REPAIR & IPC-2152 CURRENT LAB */}
      {activeLab === 'lab-pad-trace-repair-simulator' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className={`lg:col-span-7 p-6 rounded-xl border space-y-4 ${surfaceCard}`}>
            <div>
              <h3 className="text-lg font-bold">
                Simulation L: IPC-2152 Copper Trace Ampacity & IPC-7721 Micro-Jumper Rework Lab
              </h3>
              <p className="text-xs text-slate-500">
                Calculate copper trace resistance, maximum safe current for ΔT = 10°C, and compare Sn63/Pb37 vs SAC305 reflow profiles.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 font-mono text-xs">
              <label className={`p-3 rounded-xl border space-y-1 ${subtlePanel}`}>
                <span>Trace Width W (mm)</span>
                <input
                  type="number"
                  step="0.1"
                  min={0.1}
                  value={traceWidthMm}
                  onChange={(e) => setTraceWidthMm(Math.max(0.1, Number(e.target.value) || 0.25))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
              <label className={`p-3 rounded-xl border space-y-1 ${subtlePanel}`}>
                <span>Trace Length L (mm)</span>
                <input
                  type="number"
                  step="5"
                  min={1}
                  value={traceLengthMm}
                  onChange={(e) => setTraceLengthMm(Math.max(1, Number(e.target.value) || 10))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
              <label className={`p-3 rounded-xl border space-y-1 ${subtlePanel}`}>
                <span>Copper Weight (oz/ft²)</span>
                <input
                  type="number"
                  step="0.5"
                  min={0.5}
                  max={4}
                  value={copperOz}
                  onChange={(e) => setCopperOz(Math.max(0.5, Number(e.target.value) || 1))}
                  className="w-full px-2 py-1 rounded border border-slate-500/40 bg-transparent font-bold"
                />
              </label>
            </div>

            <div className={`p-4 rounded-xl border font-mono text-xs space-y-2 ${subtlePanel}`}>
              <div>
                Trace Resistance R = ρ·L/(W·t):{' '}
                <span className="font-bold text-sky-500">{traceResistanceMilliohms.toFixed(2)} mΩ</span>
              </div>
              <div>
                IPC-2152 Safe Continuous Current (ΔT = 10°C):{' '}
                <span className="font-bold text-emerald-500">{safeCurrentAmps10C.toFixed(2)} A</span>
              </div>
            </div>
          </div>

          <div className={`lg:col-span-5 p-6 rounded-xl border space-y-3 ${surfaceCard}`}>
            <h4 className="text-base font-bold">Solder Metallurgy & Thermal Profile</h4>
            <div className="flex gap-2">
              {(['SAC305', 'Sn63Pb37'] as const).map((alloy) => (
                <button
                  key={alloy}
                  onClick={() => setSolderAlloy(alloy)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold border ${
                    solderAlloy === alloy ? 'bg-sky-600 text-white border-sky-400' : subtlePanel
                  }`}
                >
                  {alloy}
                </button>
              ))}
            </div>
            <div className={`p-3.5 rounded-xl border font-mono text-xs space-y-1.5 ${subtlePanel}`}>
              {solderAlloy === 'SAC305' ? (
                <>
                  <div className="font-bold text-amber-500">RoHS Lead-Free SAC305 (96.5% Sn / 3.0% Ag / 0.5% Cu)</div>
                  <div>Liquidus Melting Point: 217°C – 220°C</div>
                  <div>Recommended Board Preheater: 150°C · Peak Reflow: 240°C – 245°C</div>
                </>
              ) : (
                <>
                  <div className="font-bold text-emerald-500">Eutectic Leaded Sn63 / Pb37</div>
                  <div>Sharp Eutectic Melting Point: 183°C</div>
                  <div>Recommended Board Preheater: 130°C · Peak Reflow: 210°C – 220°C</div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
