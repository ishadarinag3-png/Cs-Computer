import React, { useState } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { Copy, Check } from 'lucide-react';

export interface MathToken {
  type: 'text' | 'inline-math' | 'block-math' | 'code-block';
  content: string;
  language?: string;
}

/**
 * Tokenizes a message or lesson string containing mixed Punjabi/English text, fenced code blocks,
 * block LaTeX ($$...$$ or \[...\]), and inline LaTeX ($...$ or \(...\)).
 */
export function tokenizeMathAndText(input: string): MathToken[] {
  if (!input) return [];

  const tokens: MathToken[] = [];
  const pattern =
    /```([a-zA-Z0-9_-]*)\n?([\s\S]*?)```|\$\$([\s\S]+?)\$\$|\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\)|\$([^\n$]+?)\$/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(input)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({
        type: 'text',
        content: input.slice(lastIndex, match.index),
      });
    }

    if (match[2] !== undefined) {
      tokens.push({
        type: 'code-block',
        language: match[1] || 'text',
        content: match[2].trim(),
      });
    } else if (match[3] !== undefined) {
      tokens.push({
        type: 'block-math',
        content: match[3].trim(),
      });
    } else if (match[4] !== undefined) {
      tokens.push({
        type: 'block-math',
        content: match[4].trim(),
      });
    } else if (match[5] !== undefined) {
      tokens.push({
        type: 'inline-math',
        content: match[5].trim(),
      });
    } else if (match[6] !== undefined) {
      tokens.push({
        type: 'inline-math',
        content: match[6].trim(),
      });
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < input.length) {
    tokens.push({
      type: 'text',
      content: input.slice(lastIndex),
    });
  }

  return tokens;
}

/**
 * Safely renders a LaTeX string to high-quality HTML & MathML elements via KaTeX.
 */
export function renderLatexToHtml(latex: string, displayMode: boolean): string {
  try {
    return katex.renderToString(latex, {
      displayMode,
      throwOnError: false,
      strict: false,
      trust: false,
      output: 'htmlAndMathml',
    });
  } catch {
    return latex;
  }
}

export interface LessonFormulaCard {
  labelEn: string;
  labelPa: string;
  latex: string;
  noteEn: string;
}

/**
 * Returns curated KaTeX formulas tailored to a lesson slug or course level so every lesson
 * displays high-quality rendered mathematical equations alongside its text content.
 */
export function getLessonFormulas(slug: string, courseId?: number): LessonFormulaCard[] {
  const s = (slug || '').toLowerCase();

  if (s.includes('math') || s.includes('physics') || courseId === 1) {
    return [
      {
        labelEn: 'Complex Phasor & Euler Identity',
        labelPa: 'ਕੰਪਲੈਕਸ ਫੇਜ਼ਰ ਅਤੇ ਆਇਲਰ ਸਮੀਕਰਨ',
        latex: 'Z = R + jX = |Z|e^{j\\theta}, \\quad |Z| = \\sqrt{R^2 + X^2}, \\quad \\theta = \\arctan\\!\\left(\\frac{X}{R}\\right)',
        noteEn: 'Used in AC impedance analysis and signal phase representation.',
      },
      {
        labelEn: 'Instantaneous Power & Energy Integral',
        labelPa: 'ਤਾਤਕਾਲ ਪਾਵਰ ਅਤੇ ਊਰਜਾ ਇੰਟੀਗਰਲ',
        latex: 'p(t) = v(t) \\cdot i(t), \\quad E = \\int_{t_1}^{t_2} v(t)\\,i(t)\\,dt',
        noteEn: 'Relates voltage, current, power (Watts), and energy (Joules).',
      },
    ];
  }

  if (s.includes('electrical') || s.includes('ohm') || s.includes('kirchhoff') || s.includes('ac-dc')) {
    return [
      {
        labelEn: "Ohm's Law, Kirchhoff's Laws & Power",
        labelPa: 'ਓਹਮ ਦਾ ਨਿਯਮ ਅਤੇ ਕਿਰਚੌਫ ਦੇ ਨਿਯਮ',
        latex: 'V = I \\cdot R, \\quad P = V \\cdot I = I^2 R = \\frac{V^2}{R}, \\quad \\sum_{k=1}^{n} I_k = 0, \\quad \\sum_{k=1}^{m} V_k = 0',
        noteEn: 'Fundamental DC/AC nodal and mesh circuit analysis equations.',
      },
      {
        labelEn: 'RMS Voltage & Equivalent Parallel Resistance',
        labelPa: 'RMS ਵੋਲਟੇਜ ਅਤੇ ਪੈਰਲਲ ਰੈਜ਼ਿਸਟੈਂਸ',
        latex: 'V_{\\text{rms}} = \\frac{V_{\\text{peak}}}{\\sqrt{2}}, \\quad R_{\\text{eq}} = \\left(\\sum_{i=1}^{n} \\frac{1}{R_i}\\right)^{-1}',
        noteEn: 'True heating equivalent of sinusoidal AC and parallel branch conductance.',
      },
    ];
  }

  if (s.includes('passive') || s.includes('capacitor') || s.includes('inductor') || s.includes('rlc')) {
    return [
      {
        labelEn: 'RC Transient Charging & Capacitive/Inductive Reactance',
        labelPa: 'RC ਚਾਰਜਿੰਗ ਅਤੇ ਰਿਐਕਟੈਂਸ ਫਾਰਮੂਲਾ',
        latex: 'V_C(t) = V_0\\!\\left(1 - e^{-t/(RC)}\\right), \\quad X_C = \\frac{1}{2\\pi f C}, \\quad X_L = 2\\pi f L',
        noteEn: 'Time constant τ = RC governs filtering and clock edge slew rates.',
      },
      {
        labelEn: 'RLC Series Resonance & Quality Factor',
        labelPa: 'RLC ਰੈਜ਼ੋਨੈਂਸ ਫ੍ਰੀਕੁਐਂਸੀ ਅਤੇ Q ਫੈਕਟਰ',
        latex: 'f_0 = \\frac{1}{2\\pi\\sqrt{LC}}, \\quad Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}} = \\frac{f_0}{\\Delta f}',
        noteEn: 'At resonance XL = XC and impedance is purely resistive (Z = R).',
      },
    ];
  }

  if (s.includes('semiconductor') || s.includes('diode') || s.includes('transistor') || s.includes('mosfet')) {
    return [
      {
        labelEn: 'Shockley Diode Equation & Thermal Voltage',
        labelPa: 'ਸ਼ੌਕਲੇ ਡਾਇਓਡ ਸਮੀਕਰਨ',
        latex: 'I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right), \\quad V_T = \\frac{k_B T}{q} \\approx 25.85\\text{ mV at } 300\\text{ K}',
        noteEn: 'Models exponential current-voltage behavior across a PN junction.',
      },
      {
        labelEn: 'MOSFET Saturation Current & BJT Current Gain',
        labelPa: 'MOSFET ਡਰੇਨ ਕਰੰਟ ਅਤੇ BJT ਗੇਨ',
        latex: 'I_D = \\frac{1}{2}\\mu_n C_{\\text{ox}}\\frac{W}{L}(V_{GS} - V_{\\text{th}})^2, \\quad I_C = \\beta I_B',
        noteEn: 'Governs CMOS logic switching speed and analog amplification.',
      },
    ];
  }

  if (s.includes('analog') || s.includes('op-amp') || s.includes('amplifier')) {
    return [
      {
        labelEn: 'Closed-Loop Op-Amp Gains & CMRR',
        labelPa: 'ਓਪ-ਐਂਪ ਗੇਨ ਅਤੇ CMRR ਫਾਰਮੂਲਾ',
        latex: 'A_{\\text{inv}} = -\\frac{R_f}{R_{\\text{in}}}, \\quad A_{\\text{non-inv}} = 1 + \\frac{R_f}{R_g}, \\quad \\text{CMRR}_{\\text{dB}} = 20\\log_{10}\\!\\left|\\frac{A_d}{A_{\\text{cm}}}\\right|',
        noteEn: 'Negative feedback stabilizes gain across temperature and process variations.',
      },
    ];
  }

  if (s.includes('binary') || s.includes('logic') || s.includes('digital') || s.includes('sequential')) {
    return [
      {
        labelEn: "Positional Binary Expansion & Two's Complement",
        labelPa: "ਬਾਈਨਰੀ ਵਿਸਤਾਰ ਅਤੇ ਟੂਜ਼ ਕੰਪਲੀਮੈਂਟ (Two's Complement)",
        latex: 'N_{10} = \\sum_{i=0}^{n-1} b_i 2^i, \\quad V_{\\text{signed}} = -b_{n-1}2^{n-1} + \\sum_{i=0}^{n-2} b_i 2^i',
        noteEn: 'Foundation of unsigned and signed integer representation in CPU registers.',
      },
      {
        labelEn: "De Morgan's Theorems & Setup/Hold Timing Margin",
        labelPa: 'ਡੀ ਮੋਰਗਨ ਦੇ ਨਿਯਮ ਅਤੇ ਕਲੌਕ ਟਾਈਮਿੰਗ',
        latex: '\\overline{A \\cdot B} = \\overline{A} + \\overline{B}, \\quad \\overline{A + B} = \\overline{A} \\cdot \\overline{B}, \\quad T_{\\text{clk}} \\ge t_{pcq} + t_{pd} + t_{\\text{setup}}',
        noteEn: 'Determines gate equivalence and maximum synchronous clock frequency.',
      },
    ];
  }

  if (s.includes('cpu') || s.includes('memory') || s.includes('architecture') || s.includes('ipos')) {
    return [
      {
        labelEn: 'CPU Execution Time & Iron Law of Processor Performance',
        labelPa: 'CPU ਪ੍ਰਦਰਸ਼ਨ ਅਤੇ ਐਗਜ਼ੀਕਿਊਸ਼ਨ ਸਮਾਂ',
        latex: 'T_{\\text{CPU}} = \\text{IC} \\times \\text{CPI} \\times T_{\\text{clock}} = \\frac{\\text{Instructions} \\times \\text{CPI}}{f_{\\text{clock}}}',
        noteEn: 'Relates instruction count (IC), cycles per instruction (CPI), and clock rate.',
      },
      {
        labelEn: 'Average Memory Access Time (AMAT) & Amdahl’s Law',
        labelPa: 'ਔਸਤ ਮੈਮੋਰੀ ਐਕਸੈਸ ਸਮਾਂ (AMAT)',
        latex: '\\text{AMAT} = t_{\\text{hit}} + (1 - h)\\cdot t_{\\text{miss}}, \\quad S(p) = \\frac{1}{(1 - f) + \\frac{f}{p}}',
        noteEn: 'Shows why high L1/L2 cache hit ratio (h) is critical for CPU throughput.',
      },
    ];
  }

  if (s.includes('network') || s.includes('internet') || s.includes('security')) {
    return [
      {
        labelEn: 'Shannon-Hartley Channel Capacity & End-to-End Packet Delay',
        labelPa: 'ਸ਼ੈਨਨ ਚੈਨਲ ਸਮਰੱਥਾ ਅਤੇ ਨੈੱਟਵਰਕ ਲੇਟੈਂਸੀ',
        latex: 'C = B \\log_2\\!\\left(1 + \\frac{S}{N}\\right), \\quad d_{\\text{total}} = d_{\\text{trans}} + d_{\\text{prop}} + d_{\\text{queue}} + d_{\\text{proc}}',
        noteEn: 'where d_trans = L/R (packet size / link bandwidth) and d_prop = distance / c.',
      },
    ];
  }

  return [
    {
      labelEn: 'Asymptotic Time Complexity & Master Theorem',
      labelPa: 'ਐਲਗੋਰਿਦਮ ਟਾਈਮ ਕੰਪਲੈਕਸਿਟੀ ਅਤੇ ਮਾਸਟਰ ਥਿਊਰਮ',
      latex: 'T(n) = a\\,T\\!\\left(\\frac{n}{b}\\right) + f(n), \\quad \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2} = \\Theta(n^2), \\quad \\log_2(n!) = \\Theta(n \\log n)',
      noteEn: 'Core recurrence and summation identities for analyzing algorithms and data structures.',
    },
    {
      labelEn: "Conditional Probability (Bayes' Rule) & Variance",
      labelPa: 'ਬੇਜ਼ ਥਿਊਰਮ ਅਤੇ ਸਟੈਂਡਰਡ ਡੈਵੀਏਸ਼ਨ',
      latex: 'P(A \\mid B) = \\frac{P(B \\mid A)P(A)}{P(B)}, \\quad \\sigma^2 = \\frac{1}{N}\\sum_{i=1}^{N}(x_i - \\mu)^2',
      noteEn: 'Essential statistical foundation for machine learning and systems telemetry.',
    },
  ];
}

export const MATH_STEP_REFERENCE_FORMULAS = [
  {
    id: 'binary-expansion',
    titleEn: 'Positional Binary-to-Decimal Expansion',
    titlePa: 'ਬਾਈਨਰੀ ਤੋਂ ਡੈਸੀਮਲ ਵਿਸਤਾਰ ਨਿਯਮ',
    latex: 'N_{10} = \\sum_{i=0}^{n-1} b_i \\cdot 2^i = b_{n-1}2^{n-1} + \\dots + b_1 2^1 + b_0 2^0',
    prompt:
      'In math-step mode, show the complete step-by-step LaTeX positional expansion to convert binary 11001011₂ to decimal and hexadecimal.',
  },
  {
    id: 'twos-complement',
    titleEn: "Two's Complement Signed Integer Representation",
    titlePa: "ਟੂਜ਼ ਕੰਪਲੀਮੈਂਟ (Two's Complement) ਫਾਰਮੂਲਾ",
    latex: 'V = -b_{n-1}2^{n-1} + \\sum_{i=0}^{n-2} b_i 2^i \\quad \\text{where } \\sim x + 1 = 2^n - x',
    prompt:
      "In math-step mode, explain Two's Complement representation and calculate -45 in 8-bit binary step-by-step using LaTeX formulas.",
  },
  {
    id: 'demorgan-boolean',
    titleEn: "De Morgan's Laws & Boolean Algebra",
    titlePa: 'ਡੀ ਮੋਰਗਨ ਦੇ ਨਿਯਮ (Boolean Logic)',
    latex: '\\overline{A \\cdot B} = \\overline{A} + \\overline{B} \\quad \\text{and} \\quad \\overline{A + B} = \\overline{A} \\cdot \\overline{B}',
    prompt:
      "In math-step mode, prove De Morgan's Laws using a truth table and simplify the Boolean expression ¬(A ∧ ¬B) ∨ (¬A ∧ B) step-by-step with LaTeX.",
  },
  {
    id: 'rc-transient',
    titleEn: 'RC Circuit Charging & Cutoff Frequency',
    titlePa: 'RC ਸਰਕਟ ਚਾਰਜਿੰਗ ਅਤੇ ਕੱਟ-ਆਫ ਫ੍ਰੀਕੁਐਂਸੀ',
    latex: 'V_C(t) = V_{in}\\left(1 - e^{-\\frac{t}{R C}}\\right), \\quad f_c = \\frac{1}{2\\pi R C}',
    prompt:
      'In math-step mode, calculate the time constant τ, cutoff frequency f_c, and capacitor voltage at t = 2ms for R = 10 kΩ, C = 100 nF, V_in = 5V using LaTeX.',
  },
  {
    id: 'bayes-complexity',
    titleEn: "Bayes' Theorem & Asymptotic Complexity",
    titlePa: 'ਬੇਜ਼ ਥਿਊਰਮ ਅਤੇ ਐਲਗੋਰਿਦਮ ਕੰਪਲੈਕਸਿਟੀ',
    latex: 'P(A \\mid B) = \\frac{P(B \\mid A)\\,P(A)}{P(B)}, \\quad T(n) = 2T\\left(\\frac{n}{2}\\right) + \\Theta(n) = \\Theta(n \\log_2 n)',
    prompt:
      'In math-step mode, solve the Merge Sort recurrence relation T(n) = 2T(n/2) + n step-by-step using LaTeX equations.',
  },
];

interface MathMessageRendererProps {
  content: string;
  mode?: string;
  darkMode?: boolean;
}

/**
 * Formats inline bold (**text**) and inline code (`code`) within plain text segments.
 */
function renderFormattedInlineText(text: string, darkMode: boolean) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`\n]+`)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={idx} className="font-bold text-sky-400">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code
          key={idx}
          className={`px-1.5 py-0.5 rounded font-mono text-[0.9em] ${
            darkMode
              ? 'bg-slate-800 text-amber-300 border border-slate-700'
              : 'bg-slate-200/80 text-slate-900 border border-slate-300'
          }`}
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}

export const MathMessageRenderer: React.FC<MathMessageRendererProps> = ({
  content,
  mode = 'child-friendly',
  darkMode = true,
}) => {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const tokens = tokenizeMathAndText(content);
  const isMathStepMode = mode === 'math-step';

  const handleCopyLatex = async (latex: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(latex);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1800);
    } catch {
      // Fallback ignored
    }
  };

  return (
    <div className="space-y-2 leading-relaxed break-words">
      {tokens.map((token, idx) => {
        if (token.type === 'block-math') {
          const html = renderLatexToHtml(token.content, true);
          return (
            <div
              key={idx}
              className={`my-2.5 rounded-xl border p-3 sm:p-4 overflow-x-auto relative group transition-colors ${
                isMathStepMode
                  ? darkMode
                    ? 'bg-slate-950/90 border-sky-500/40 shadow-inner'
                    : 'bg-sky-50/70 border-sky-300'
                  : darkMode
                  ? 'bg-slate-950/70 border-slate-800'
                  : 'bg-slate-100 border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400">
                  {isMathStepMode ? 'Step Formula · LaTeX' : 'Formula · KaTeX'}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyLatex(token.content, idx)}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono flex items-center gap-1 border transition-opacity ${
                    darkMode
                      ? 'bg-slate-900 border-slate-700 text-slate-300 hover:border-sky-500'
                      : 'bg-white border-slate-300 text-slate-700 hover:border-sky-500'
                  }`}
                  title="Copy raw LaTeX expression"
                >
                  {copiedIdx === idx ? (
                    <>
                      <Check className="w-2.5 h-2.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-2.5 h-2.5" />
                      <span>LaTeX</span>
                    </>
                  )}
                </button>
              </div>
              <div
                className="text-sm sm:text-base py-1 overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          );
        }

        if (token.type === 'inline-math') {
          const html = renderLatexToHtml(token.content, false);
          return (
            <span
              key={idx}
              className={`inline-block align-middle px-1 rounded ${
                isMathStepMode
                  ? darkMode
                    ? 'bg-sky-500/10 text-sky-200'
                    : 'bg-sky-100/80 text-sky-950'
                  : ''
              }`}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }

        if (token.type === 'code-block') {
          return (
            <pre
              key={idx}
              className={`my-2 p-3 rounded-xl border font-mono text-xs overflow-x-auto ${
                darkMode
                  ? 'bg-slate-950 border-slate-800 text-emerald-300'
                  : 'bg-slate-900 border-slate-800 text-emerald-200'
              }`}
            >
              <code>{token.content}</code>
            </pre>
          );
        }

        return (
          <span key={idx} className="whitespace-pre-line">
            {renderFormattedInlineText(token.content, darkMode)}
          </span>
        );
      })}
    </div>
  );
};
