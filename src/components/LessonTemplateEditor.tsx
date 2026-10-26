import React, { useState, useEffect, useMemo } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  Plus,
  Trash2,
  Eye,
  Edit3,
  Sparkles,
  FileCheck,
  Layers,
  BookOpen,
} from 'lucide-react';
import { MathMessageRenderer } from './MathMessageRenderer.tsx';

export interface MisconceptionItem {
  myth: string;
  truthEn: string;
  truthPa: string;
}

export interface TerminologyItem {
  term: string;
  punjabi: string;
  meaningEn: string;
  meaningPa: string;
}

export interface Lesson28TemplateState {
  id?: number;
  // 1. Course / Level
  courseId: number;
  // 2. Canonical Slug
  slug: string;
  // 3. Title (English)
  titleEn: string;
  // 4. Title (Punjabi)
  titlePa: string;
  // 5. Interactive Lab ID
  interactiveLabId: string;
  // 6. Learning Objectives
  objectivesJson: string[];
  // 7. Prerequisites
  prerequisitesJson: string[];
  // 8. Child Analogy (English)
  childAnalogyEn: string;
  // 9. Child Analogy (Punjabi)
  childAnalogyPa: string;
  // 10. Core Concept & Architecture (English)
  coreConceptEn: string;
  // 11. Core Concept & Architecture (Punjabi)
  coreConceptPa: string;
  // 12. System Diagram & Signal Flow (English)
  systemDiagramEn: string;
  // 13. System Diagram & Signal Flow (Punjabi)
  systemDiagramPa: string;
  // 14. Mathematical & LaTeX Derivations (English)
  mathDerivationsEn: string;
  // 15. Mathematical & LaTeX Derivations (Punjabi)
  mathDerivationsPa: string;
  // 16. Worked Numerical Examples (English)
  workedExamplesEn: string;
  // 17. Worked Numerical Examples (Punjabi)
  workedExamplesPa: string;
  // 18. Practical Real-World Application (English)
  practicalExampleEn: string;
  // 19. Practical Real-World Application (Punjabi)
  practicalExamplePa: string;
  // 20. Code / Assembly / Hardware HDL Demo
  codeDemo: string;
  // 21. Common Misconceptions
  misconceptionsJson: MisconceptionItem[];
  // 22. Bilingual Terminology Glossary
  terminologyJson: TerminologyItem[];
  // 23. Hands-On Exercise Prompt (English)
  exercisePromptEn: string;
  // 24. Hands-On Exercise Prompt (Punjabi)
  exercisePromptPa: string;
  // 25. Formative Assessment & Self-Check Q&A
  assessmentCheckBilingual: string;
  // 26. Executive Summary (English)
  summaryEn: string;
  // 27. Executive Summary (Punjabi)
  summaryPa: string;
  // 28. Further Reading & Datasheet References
  furtherReadingJson: string[];
}

export interface SectionAuditItem {
  sectionNumber: number;
  key: string;
  labelEn: string;
  labelPa: string;
  group: 'metadata' | 'pedagogy' | 'math-examples' | 'assessment-glossary';
  valid: boolean;
  detail: string;
}

const SECTION_MARKER_REGEX = {
  diagramEn: /\n\n### \[12\. System Block Diagram & Signal Flow\]\n([\s\S]*?)(?=\n\n### \[|$)/,
  mathEn: /\n\n### \[14\. Mathematical Derivations \(LaTeX\)\]\n([\s\S]*?)(?=\n\n### \[|$)/,
  workedEn: /\n\n### \[16\. Worked Numerical Examples\]\n([\s\S]*?)(?=\n\n### \[|$)/,
  assessEn: /\n\n### \[25\. Formative Self-Check Assessment\]\n([\s\S]*?)(?=\n\n### \[|$)/,
  diagramPa: /\n\n### \[13\. ਸਿਸਟਮ ਬਲੌਕ ਡਾਇਗ੍ਰਾਮ ਅਤੇ ਸਿਗਨਲ ਵਹਾਅ\]\n([\s\S]*?)(?=\n\n### \[|$)/,
  mathPa: /\n\n### \[15\. ਗਣਿਤਿਕ ਵਿਉਤਪਤੀ \(LaTeX ਫਾਰਮੂਲੇ\)\]\n([\s\S]*?)(?=\n\n### \[|$)/,
  workedPa: /\n\n### \[17\. ਹੱਲ ਕੀਤੀਆਂ ਗਣਿਤਿਕ ਉਦਾਹਰਣਾਂ\]\n([\s\S]*?)(?=\n\n### \[|$)/,
};

/**
 * Hydrates a complete 28-section template state from any existing lesson record in PostgreSQL.
 */
export function hydrateLessonTo28Sections(
  lesson: any,
  defaultCourseId: number
): Lesson28TemplateState {
  if (!lesson) {
    return createBlank28SectionState(defaultCourseId);
  }

  const rawTechEn: string = lesson.technicalExplanationEn || '';
  const rawTechPa: string = lesson.technicalExplanationPa || '';

  const baseCoreEn = rawTechEn.split('\n\n### [')[0]?.trim() || rawTechEn;
  const baseCorePa = rawTechPa.split('\n\n### [')[0]?.trim() || rawTechPa;

  const extractedDiagramEn = SECTION_MARKER_REGEX.diagramEn.exec(rawTechEn)?.[1]?.trim();
  const extractedMathEn = SECTION_MARKER_REGEX.mathEn.exec(rawTechEn)?.[1]?.trim();
  const extractedWorkedEn = SECTION_MARKER_REGEX.workedEn.exec(rawTechEn)?.[1]?.trim();
  const extractedAssess = SECTION_MARKER_REGEX.assessEn.exec(rawTechEn)?.[1]?.trim();

  const extractedDiagramPa = SECTION_MARKER_REGEX.diagramPa.exec(rawTechPa)?.[1]?.trim();
  const extractedMathPa = SECTION_MARKER_REGEX.mathPa.exec(rawTechPa)?.[1]?.trim();
  const extractedWorkedPa = SECTION_MARKER_REGEX.workedPa.exec(rawTechPa)?.[1]?.trim();

  return {
    id: lesson.id,
    courseId: lesson.courseId || defaultCourseId,
    slug: lesson.slug || '',
    titleEn: lesson.titleEn || '',
    titlePa: lesson.titlePa || '',
    interactiveLabId: lesson.interactiveLabId || 'hardware-explorer',
    objectivesJson:
      Array.isArray(lesson.objectivesJson) && lesson.objectivesJson.length > 0
        ? lesson.objectivesJson
        : [`Master the core principles and practical applications of ${lesson.titleEn || 'this topic'}.`],
    prerequisitesJson:
      Array.isArray(lesson.prerequisitesJson) && lesson.prerequisitesJson.length > 0
        ? lesson.prerequisitesJson
        : ['Basic arithmetic and foundational computer literacy'],
    childAnalogyEn: lesson.childAnalogyEn || '',
    childAnalogyPa: lesson.childAnalogyPa || '',
    coreConceptEn: baseCoreEn,
    coreConceptPa: baseCorePa,
    systemDiagramEn:
      extractedDiagramEn ||
      `Input Stage → Control/Processing Unit (${lesson.interactiveLabId || 'Core'}) → Register/Memory Buffer → Output Verification Stage.`,
    systemDiagramPa:
      extractedDiagramPa ||
      `ਇਨਪੁੱਟ ਪੜਾਅ → ਕੰਟਰੋਲ ਅਤੇ ਪ੍ਰੋਸੈਸਿੰਗ ਯੂਨਿਟ (${lesson.interactiveLabId || 'Core'}) → ਮੈਮੋਰੀ ਰਜਿਸਟਰ → ਆਊਟਪੁੱਟ ਪੜਾਅ।`,
    mathDerivationsEn:
      extractedMathEn ||
      `Key governing relationship:\n$$N_{10} = \\sum_{i=0}^{n-1} b_i \\cdot 2^i, \\quad P = V \\cdot I = I^2 R$$`,
    mathDerivationsPa:
      extractedMathPa ||
      `ਮੁੱਖ ਗਣਿਤਿਕ ਸਬੰਧ ਅਤੇ ਫਾਰਮੂਲਾ:\n$$N_{10} = \\sum_{i=0}^{n-1} b_i \\cdot 2^i, \\quad P = V \\cdot I = I^2 R$$`,
    workedExamplesEn:
      extractedWorkedEn ||
      `Step 1: Identify given parameters from ${lesson.titleEn || 'the system'}.\nStep 2: Substitute values into the governing equation.\nStep 3: Verify units and physical/logical bounds.`,
    workedExamplesPa:
      extractedWorkedPa ||
      `ਕਦਮ 1: ਦਿੱਤੇ ਗਏ ਮੁੱਲਾਂ ਦੀ ਪਛਾਣ ਕਰੋ।\nਕਦਮ 2: ਮੁੱਖ ਫਾਰਮੂਲੇ ਵਿੱਚ ਮੁੱਲ ਭਰੋ।\nਕਦਮ 3: ਇਕਾਈਆਂ (Units) ਅਤੇ ਉੱਤਰ ਦੀ ਜਾਂਚ ਕਰੋ।`,
    practicalExampleEn: lesson.practicalExampleEn || '',
    practicalExamplePa: lesson.practicalExamplePa || '',
    codeDemo:
      lesson.codeDemo ||
      `// Demonstration for ${lesson.titleEn || 'Lesson'}\nMOV R0, #0x01\nADD R1, R0, #0x04\nCMP R1, #0x05`,
    misconceptionsJson:
      Array.isArray(lesson.misconceptionsJson) && lesson.misconceptionsJson.length > 0
        ? lesson.misconceptionsJson
        : [
            {
              myth: 'Higher clock speed or voltage alone always guarantees faster, safer operation.',
              truthEn:
                'Efficiency depends on architecture, CPI, thermal limits, and signal integrity.',
              truthPa:
                'ਸਿਰਫ਼ ਵੱਧ ਸਪੀਡ ਜਾਂ ਵੋਲਟੇਜ ਕਾਫ਼ੀ ਨਹੀਂ; ਆਰਕੀਟੈਕਚਰ, CPI ਅਤੇ ਤਾਪਮਾਨ ਸੀਮਾਵਾਂ ਵੀ ਜ਼ਰੂਰੀ ਹਨ।',
            },
          ],
    terminologyJson:
      Array.isArray(lesson.terminologyJson) && lesson.terminologyJson.length > 0
        ? lesson.terminologyJson
        : [
            {
              term: 'Architecture',
              punjabi: 'ਆਰਕੀਟੈਕਚਰ (ਬਣਤਰ)',
              meaningEn: 'Logical and physical organization of hardware and data pathways.',
              meaningPa: 'ਹਾਰਡਵੇਅਰ ਅਤੇ ਡੇਟਾ ਦੇ ਰਸਤਿਆਂ ਦੀ ਅੰਦਰੂਨੀ ਬਣਤਰ।',
            },
          ],
    exercisePromptEn:
      lesson.exercisePromptEn ||
      `Open the linked ${lesson.interactiveLabId || 'interactive'} lab, vary the input parameters, and record the resulting state transitions.`,
    exercisePromptPa:
      lesson.exercisePromptPa ||
      `ਲਿੰਕ ਕੀਤੀ ਲੈਬ ਖੋਲ੍ਹੋ, ਇਨਪੁੱਟ ਮੁੱਲ ਬਦਲੋ ਅਤੇ ਆਊਟਪੁੱਟ ਵਿੱਚ ਆਉਣ ਵਾਲੇ ਬਦਲਾਅ ਨੋਟ ਕਰੋ।`,
    assessmentCheckBilingual:
      extractedAssess ||
      `Q1: State the primary governing formula and explain each variable in Punjabi and English.\nQ2: Predict how doubling the primary input parameter affects the system output.`,
    summaryEn:
      lesson.summaryEn ||
      `${lesson.titleEn || 'This lesson'} unifies theoretical foundations, mathematical derivations, and practical hardware/software execution.`,
    summaryPa:
      lesson.summaryPa ||
      `${lesson.titlePa || 'ਇਹ ਪਾਠ'} ਸਿਧਾਂਤਕ ਨਿਯਮਾਂ, ਗਣਿਤਿਕ ਫਾਰਮੂਲਿਆਂ ਅਤੇ ਵਿਹਾਰਕ ਪ੍ਰਯੋਗਾਂ ਨੂੰ ਜੋੜਦਾ ਹੈ।`,
    furtherReadingJson:
      Array.isArray(lesson.furtherReadingJson) && lesson.furtherReadingJson.length > 0
        ? lesson.furtherReadingJson
        : [
            'IEEE Standard Computer Dictionary & Digital Logic Specifications',
            'Patterson & Hennessy — Computer Organization and Design',
          ],
  };
}

export function createBlank28SectionState(defaultCourseId: number): Lesson28TemplateState {
  return {
    id: undefined,
    courseId: defaultCourseId,
    slug: '',
    titleEn: '',
    titlePa: '',
    interactiveLabId: 'hardware-explorer',
    objectivesJson: [''],
    prerequisitesJson: [''],
    childAnalogyEn: '',
    childAnalogyPa: '',
    coreConceptEn: '',
    coreConceptPa: '',
    systemDiagramEn: '',
    systemDiagramPa: '',
    mathDerivationsEn: '',
    mathDerivationsPa: '',
    workedExamplesEn: '',
    workedExamplesPa: '',
    practicalExampleEn: '',
    practicalExamplePa: '',
    codeDemo: '',
    misconceptionsJson: [{ myth: '', truthEn: '', truthPa: '' }],
    terminologyJson: [{ term: '', punjabi: '', meaningEn: '', meaningPa: '' }],
    exercisePromptEn: '',
    exercisePromptPa: '',
    assessmentCheckBilingual: '',
    summaryEn: '',
    summaryPa: '',
    furtherReadingJson: [''],
  };
}

/**
 * Evaluates all 28 required sections and returns a detailed compliance report.
 */
export function evaluate28SectionCompliance(state: Lesson28TemplateState): SectionAuditItem[] {
  const nonEmptyStrings = (arr: string[]) => arr.filter((x) => x.trim().length >= 3);
  const validMisconceptions = state.misconceptionsJson.filter(
    (m) => m.myth.trim().length >= 3 && m.truthEn.trim().length >= 3 && m.truthPa.trim().length >= 3
  );
  const validTerms = state.terminologyJson.filter(
    (t) =>
      t.term.trim().length >= 2 &&
      t.punjabi.trim().length >= 2 &&
      t.meaningEn.trim().length >= 3 &&
      t.meaningPa.trim().length >= 3
  );

  return [
    {
      sectionNumber: 1,
      key: 'courseId',
      labelEn: '1. Course / Curriculum Level',
      labelPa: '1. ਕੋਰਸ / ਲੈਵਲ ਚੋਣ',
      group: 'metadata',
      valid: Number.isInteger(state.courseId) && state.courseId > 0,
      detail: state.courseId > 0 ? `Course ID #${state.courseId}` : 'Select a valid course',
    },
    {
      sectionNumber: 2,
      key: 'slug',
      labelEn: '2. Canonical URL Slug',
      labelPa: '2. ਪਾਠ ਸਲੱਗ (URL Slug)',
      group: 'metadata',
      valid: /^[a-z0-9-]{3,120}$/.test(state.slug.trim()),
      detail: state.slug.trim() || 'Required lowercase hyphenated slug',
    },
    {
      sectionNumber: 3,
      key: 'titleEn',
      labelEn: '3. Lesson Title (English)',
      labelPa: '3. ਪਾਠ ਦਾ ਸਿਰਲੇਖ (ਅੰਗਰੇਜ਼ੀ)',
      group: 'metadata',
      valid: state.titleEn.trim().length >= 5,
      detail: `${state.titleEn.trim().length} chars (min 5)`,
    },
    {
      sectionNumber: 4,
      key: 'titlePa',
      labelEn: '4. Lesson Title (Punjabi Gurmukhi)',
      labelPa: '4. ਪਾਠ ਦਾ ਸਿਰਲੇਖ (ਪੰਜਾਬੀ ਗੁਰਮੁਖੀ)',
      group: 'metadata',
      valid: state.titlePa.trim().length >= 5,
      detail: `${state.titlePa.trim().length} chars (min 5)`,
    },
    {
      sectionNumber: 5,
      key: 'interactiveLabId',
      labelEn: '5. Linked Interactive Laboratory',
      labelPa: '5. ਇੰਟਰਐਕਟਿਵ ਲੈਬ ਲਿੰਕ',
      group: 'metadata',
      valid: state.interactiveLabId.trim().length >= 2,
      detail: state.interactiveLabId,
    },
    {
      sectionNumber: 6,
      key: 'objectivesJson',
      labelEn: '6. Learning Objectives',
      labelPa: '6. ਸਿੱਖਣ ਦੇ ਉਦੇਸ਼ (Objectives)',
      group: 'metadata',
      valid: nonEmptyStrings(state.objectivesJson).length >= 1,
      detail: `${nonEmptyStrings(state.objectivesJson).length} objective(s) defined`,
    },
    {
      sectionNumber: 7,
      key: 'prerequisitesJson',
      labelEn: '7. Required Prerequisites',
      labelPa: '7. ਮੁੱਢਲੀਆਂ ਲੋੜਾਂ (Prerequisites)',
      group: 'metadata',
      valid: nonEmptyStrings(state.prerequisitesJson).length >= 1,
      detail: `${nonEmptyStrings(state.prerequisitesJson).length} prerequisite(s) defined`,
    },
    {
      sectionNumber: 8,
      key: 'childAnalogyEn',
      labelEn: '8. Child-Friendly Analogy (English)',
      labelPa: '8. ਬੱਚਿਆਂ ਵਾਂਗ ਉਦਾਹਰਣ (ਅੰਗਰੇਜ਼ੀ)',
      group: 'pedagogy',
      valid: state.childAnalogyEn.trim().length >= 15,
      detail: `${state.childAnalogyEn.trim().length} chars (min 15)`,
    },
    {
      sectionNumber: 9,
      key: 'childAnalogyPa',
      labelEn: '9. Child-Friendly Analogy (Punjabi)',
      labelPa: '9. ਬੱਚਿਆਂ ਵਾਂਗ ਉਦਾਹਰਣ (ਪੰਜਾਬੀ)',
      group: 'pedagogy',
      valid: state.childAnalogyPa.trim().length >= 15,
      detail: `${state.childAnalogyPa.trim().length} chars (min 15)`,
    },
    {
      sectionNumber: 10,
      key: 'coreConceptEn',
      labelEn: '10. Core Concept & Architecture (English)',
      labelPa: '10. ਮੁੱਖ ਤਕਨੀਕੀ ਸਿਧਾਂਤ (ਅੰਗਰੇਜ਼ੀ)',
      group: 'pedagogy',
      valid: state.coreConceptEn.trim().length >= 20,
      detail: `${state.coreConceptEn.trim().length} chars (min 20)`,
    },
    {
      sectionNumber: 11,
      key: 'coreConceptPa',
      labelEn: '11. Core Concept & Architecture (Punjabi)',
      labelPa: '11. ਮੁੱਖ ਤਕਨੀਕੀ ਸਿਧਾਂਤ (ਪੰਜਾਬੀ)',
      group: 'pedagogy',
      valid: state.coreConceptPa.trim().length >= 20,
      detail: `${state.coreConceptPa.trim().length} chars (min 20)`,
    },
    {
      sectionNumber: 12,
      key: 'systemDiagramEn',
      labelEn: '12. Block Diagram & Signal Flow (English)',
      labelPa: '12. ਬਲੌਕ ਡਾਇਗ੍ਰਾਮ ਅਤੇ ਸਿਗਨਲ ਵਹਾਅ (ਅੰਗਰੇਜ਼ੀ)',
      group: 'pedagogy',
      valid: state.systemDiagramEn.trim().length >= 10,
      detail: `${state.systemDiagramEn.trim().length} chars (min 10)`,
    },
    {
      sectionNumber: 13,
      key: 'systemDiagramPa',
      labelEn: '13. Block Diagram & Signal Flow (Punjabi)',
      labelPa: '13. ਬਲੌਕ ਡਾਇਗ੍ਰਾਮ ਅਤੇ ਸਿਗਨਲ ਵਹਾਅ (ਪੰਜਾਬੀ)',
      group: 'pedagogy',
      valid: state.systemDiagramPa.trim().length >= 10,
      detail: `${state.systemDiagramPa.trim().length} chars (min 10)`,
    },
    {
      sectionNumber: 14,
      key: 'mathDerivationsEn',
      labelEn: '14. Mathematical Derivations in LaTeX (English)',
      labelPa: '14. ਗਣਿਤਿਕ ਵਿਉਤਪਤੀ ਅਤੇ LaTeX ਫਾਰਮੂਲੇ (ਅੰਗਰੇਜ਼ੀ)',
      group: 'math-examples',
      valid: state.mathDerivationsEn.trim().length >= 10,
      detail: `${state.mathDerivationsEn.trim().length} chars (min 10)`,
    },
    {
      sectionNumber: 15,
      key: 'mathDerivationsPa',
      labelEn: '15. Mathematical Derivations in LaTeX (Punjabi)',
      labelPa: '15. ਗਣਿਤਿਕ ਵਿਉਤਪਤੀ ਅਤੇ LaTeX ਫਾਰਮੂਲੇ (ਪੰਜਾਬੀ)',
      group: 'math-examples',
      valid: state.mathDerivationsPa.trim().length >= 10,
      detail: `${state.mathDerivationsPa.trim().length} chars (min 10)`,
    },
    {
      sectionNumber: 16,
      key: 'workedExamplesEn',
      labelEn: '16. Step-by-Step Worked Examples (English)',
      labelPa: '16. ਹੱਲ ਕੀਤੀਆਂ ਉਦਾਹਰਣਾਂ (ਅੰਗਰੇਜ਼ੀ)',
      group: 'math-examples',
      valid: state.workedExamplesEn.trim().length >= 15,
      detail: `${state.workedExamplesEn.trim().length} chars (min 15)`,
    },
    {
      sectionNumber: 17,
      key: 'workedExamplesPa',
      labelEn: '17. Step-by-Step Worked Examples (Punjabi)',
      labelPa: '17. ਹੱਲ ਕੀਤੀਆਂ ਉਦਾਹਰਣਾਂ (ਪੰਜਾਬੀ)',
      group: 'math-examples',
      valid: state.workedExamplesPa.trim().length >= 15,
      detail: `${state.workedExamplesPa.trim().length} chars (min 15)`,
    },
    {
      sectionNumber: 18,
      key: 'practicalExampleEn',
      labelEn: '18. Practical Real-World Application (English)',
      labelPa: '18. ਵਿਹਾਰਕ ਅਸਲ-ਜ਼ਿੰਦਗੀ ਦੀ ਉਦਾਹਰਣ (ਅੰਗਰੇਜ਼ੀ)',
      group: 'math-examples',
      valid: state.practicalExampleEn.trim().length >= 10,
      detail: `${state.practicalExampleEn.trim().length} chars (min 10)`,
    },
    {
      sectionNumber: 19,
      key: 'practicalExamplePa',
      labelEn: '19. Practical Real-World Application (Punjabi)',
      labelPa: '19. ਵਿਹਾਰਕ ਅਸਲ-ਜ਼ਿੰਦਗੀ ਦੀ ਉਦਾਹਰਣ (ਪੰਜਾਬੀ)',
      group: 'math-examples',
      valid: state.practicalExamplePa.trim().length >= 10,
      detail: `${state.practicalExamplePa.trim().length} chars (min 10)`,
    },
    {
      sectionNumber: 20,
      key: 'codeDemo',
      labelEn: '20. Code / Assembly / Hardware Simulation Snippet',
      labelPa: '20. ਕੋਡ / ਅਸੈਂਬਲੀ ਪ੍ਰਦਰਸ਼ਨ (Code Demo)',
      group: 'math-examples',
      valid: state.codeDemo.trim().length >= 5,
      detail: `${state.codeDemo.trim().length} chars (min 5)`,
    },
    {
      sectionNumber: 21,
      key: 'misconceptionsJson',
      labelEn: '21. Common Misconceptions & Myths',
      labelPa: '21. ਆਮ ਗਲਤਫਹਿਮੀਆਂ ਅਤੇ ਸੱਚਾਈ',
      group: 'assessment-glossary',
      valid: validMisconceptions.length >= 1,
      detail: `${validMisconceptions.length} misconception entry`,
    },
    {
      sectionNumber: 22,
      key: 'terminologyJson',
      labelEn: '22. Bilingual Technical Terminology',
      labelPa: '22. ਤਕਨੀਕੀ ਸ਼ਬਦਾਵਲੀ (Glossary)',
      group: 'assessment-glossary',
      valid: validTerms.length >= 1,
      detail: `${validTerms.length} bilingual term(s)`,
    },
    {
      sectionNumber: 23,
      key: 'exercisePromptEn',
      labelEn: '23. Hands-On Lab Exercise Prompt (English)',
      labelPa: '23. ਅਭਿਆਸ ਪ੍ਰਸ਼ਨ (ਅੰਗਰੇਜ਼ੀ)',
      group: 'assessment-glossary',
      valid: state.exercisePromptEn.trim().length >= 10,
      detail: `${state.exercisePromptEn.trim().length} chars (min 10)`,
    },
    {
      sectionNumber: 24,
      key: 'exercisePromptPa',
      labelEn: '24. Hands-On Lab Exercise Prompt (Punjabi)',
      labelPa: '24. ਅਭਿਆਸ ਪ੍ਰਸ਼ਨ (ਪੰਜਾਬੀ)',
      group: 'assessment-glossary',
      valid: state.exercisePromptPa.trim().length >= 10,
      detail: `${state.exercisePromptPa.trim().length} chars (min 10)`,
    },
    {
      sectionNumber: 25,
      key: 'assessmentCheckBilingual',
      labelEn: '25. Formative Self-Check Assessment Questions',
      labelPa: '25. ਸਵੈ-ਮੁਲਾਂਕਣ ਸਵਾਲ (Assessments)',
      group: 'assessment-glossary',
      valid: state.assessmentCheckBilingual.trim().length >= 15,
      detail: `${state.assessmentCheckBilingual.trim().length} chars (min 15)`,
    },
    {
      sectionNumber: 26,
      key: 'summaryEn',
      labelEn: '26. Key Takeaways & Summary (English)',
      labelPa: '26. ਪਾਠ ਦਾ ਸਾਰ (ਅੰਗਰੇਜ਼ੀ)',
      group: 'assessment-glossary',
      valid: state.summaryEn.trim().length >= 10,
      detail: `${state.summaryEn.trim().length} chars (min 10)`,
    },
    {
      sectionNumber: 27,
      key: 'summaryPa',
      labelEn: '27. Key Takeaways & Summary (Punjabi)',
      labelPa: '27. ਪਾਠ ਦਾ ਸਾਰ (ਪੰਜਾਬੀ)',
      group: 'assessment-glossary',
      valid: state.summaryPa.trim().length >= 10,
      detail: `${state.summaryPa.trim().length} chars (min 10)`,
    },
    {
      sectionNumber: 28,
      key: 'furtherReadingJson',
      labelEn: '28. Further Reading & IEEE/Datasheet References',
      labelPa: '28. ਹਵਾਲੇ ਅਤੇ ਅਗਲੇਰੀ ਪੜ੍ਹਾਈ',
      group: 'assessment-glossary',
      valid: nonEmptyStrings(state.furtherReadingJson).length >= 1,
      detail: `${nonEmptyStrings(state.furtherReadingJson).length} reference(s)`,
    },
  ];
}

/**
 * Compiles the 28-section state into the canonical API payload for POST /api/admin/lessons.
 */
export function compile28SectionPayload(state: Lesson28TemplateState) {
  const compiledTechEn = [
    state.coreConceptEn.trim(),
    `### [12. System Block Diagram & Signal Flow]\n${state.systemDiagramEn.trim()}`,
    `### [14. Mathematical Derivations (LaTeX)]\n${state.mathDerivationsEn.trim()}`,
    `### [16. Worked Numerical Examples]\n${state.workedExamplesEn.trim()}`,
    `### [25. Formative Self-Check Assessment]\n${state.assessmentCheckBilingual.trim()}`,
  ].join('\n\n');

  const compiledTechPa = [
    state.coreConceptPa.trim(),
    `### [13. ਸਿਸਟਮ ਬਲੌਕ ਡਾਇਗ੍ਰਾਮ ਅਤੇ ਸਿਗਨਲ ਵਹਾਅ]\n${state.systemDiagramPa.trim()}`,
    `### [15. ਗਣਿਤਿਕ ਵਿਉਤਪਤੀ (LaTeX ਫਾਰਮੂਲੇ)]\n${state.mathDerivationsPa.trim()}`,
    `### [17. ਹੱਲ ਕੀਤੀਆਂ ਗਣਿਤਿਕ ਉਦਾਹਰਣਾਂ]\n${state.workedExamplesPa.trim()}`,
  ].join('\n\n');

  return {
    id: state.id,
    courseId: Number(state.courseId),
    slug: state.slug.trim(),
    titleEn: state.titleEn.trim(),
    titlePa: state.titlePa.trim(),
    childAnalogyEn: state.childAnalogyEn.trim(),
    childAnalogyPa: state.childAnalogyPa.trim(),
    technicalExplanationEn: compiledTechEn,
    technicalExplanationPa: compiledTechPa,
    practicalExampleEn: state.practicalExampleEn.trim(),
    practicalExamplePa: state.practicalExamplePa.trim(),
    codeDemo: state.codeDemo.trim(),
    interactiveLabId: state.interactiveLabId.trim(),
    objectivesJson: state.objectivesJson.map((s) => s.trim()).filter(Boolean),
    prerequisitesJson: state.prerequisitesJson.map((s) => s.trim()).filter(Boolean),
    misconceptionsJson: state.misconceptionsJson.filter(
      (m) => m.myth.trim() && m.truthEn.trim() && m.truthPa.trim()
    ),
    terminologyJson: state.terminologyJson.filter(
      (t) => t.term.trim() && t.punjabi.trim() && t.meaningEn.trim() && t.meaningPa.trim()
    ),
    exercisePromptEn: state.exercisePromptEn.trim(),
    exercisePromptPa: state.exercisePromptPa.trim(),
    summaryEn: state.summaryEn.trim(),
    summaryPa: state.summaryPa.trim(),
    furtherReadingJson: state.furtherReadingJson.map((s) => s.trim()).filter(Boolean),
  };
}

interface LessonTemplateEditorProps {
  courses: any[];
  lessons: any[];
  initialLesson?: any | null;
  isAdmin: boolean;
  darkMode: boolean;
  subtlePanel: string;
  surfaceCard: string;
  onSaveLesson: (compiledPayload: ReturnType<typeof compile28SectionPayload>) => Promise<void>;
}

export const LessonTemplateEditor: React.FC<LessonTemplateEditorProps> = ({
  courses,
  lessons,
  initialLesson,
  isAdmin,
  darkMode,
  subtlePanel,
  surfaceCard,
  onSaveLesson,
}) => {
  const defaultCourseId = courses[0]?.id || 1;
  const [formState, setFormState] = useState<Lesson28TemplateState>(() =>
    hydrateLessonTo28Sections(initialLesson || lessons[0], defaultCourseId)
  );
  const [activeGroup, setActiveGroup] = useState<
    'all' | 'metadata' | 'pedagogy' | 'math-examples' | 'assessment-glossary'
  >('all');
  const [previewMode, setPreviewMode] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    if (initialLesson) {
      setFormState(hydrateLessonTo28Sections(initialLesson, defaultCourseId));
    }
  }, [initialLesson?.id]);

  const auditItems = useMemo(() => evaluate28SectionCompliance(formState), [formState]);
  const validCount = auditItems.filter((i) => i.valid).length;
  const compliancePercent = Math.round((validCount / 28) * 100);
  const all28Valid = validCount === 28;

  const handleSelectExistingLesson = (lessonIdStr: string) => {
    setValidationError(null);
    if (lessonIdStr === 'new') {
      setFormState(createBlank28SectionState(defaultCourseId));
      return;
    }
    const found = lessons.find((l) => l.id === Number(lessonIdStr));
    if (found) {
      setFormState(hydrateLessonTo28Sections(found, defaultCourseId));
    }
  };

  const handleLoadStarterTemplate = () => {
    setValidationError(null);
    const targetCourse = courses.find((c) => c.id === formState.courseId) || courses[0];
    const generatedSlug =
      formState.slug.trim() || `level-${targetCourse?.levelNumber ?? 1}-structured-lesson`;
    setFormState({
      ...formState,
      slug: generatedSlug,
      titleEn:
        formState.titleEn.trim() ||
        'Synchronous Digital Logic, Setup/Hold Timing & Register Transfer',
      titlePa:
        formState.titlePa.trim() ||
        'ਸਿੰਕ੍ਰੋਨਸ ਡਿਜੀਟਲ ਲੌਜਿਕ, ਸੈੱਟਅੱਪ/ਹੋਲਡ ਟਾਈਮਿੰਗ ਅਤੇ ਰਜਿਸਟਰ ਟ੍ਰਾਂਸਫਰ',
      interactiveLabId: formState.interactiveLabId || 'logic-gates',
      objectivesJson: [
        'Derive maximum clock frequency from propagation delay, setup time, and clock-to-Q delay.',
        'Analyze D flip-flop timing margins and prevent metastability in digital pipelines.',
      ],
      prerequisitesJson: [
        'Boolean Algebra and Combinational Logic Gates (AND, OR, NOT, XOR)',
        'Binary Number Representation',
      ],
      childAnalogyEn:
        'Imagine a train station where passengers must step onto the platform before the train doors lock (Setup Time) and stand still until the conductor checks tickets (Hold Time).',
      childAnalogyPa:
        'ਇਸ ਨੂੰ ਰੇਲਵੇ ਸਟੇਸ਼ਨ ਵਾਂਗ ਸਮਝੋ ਜਿੱਥੇ ਗੱਡੀ ਦੇ ਦਰਵਾਜ਼ੇ ਬੰਦ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਮੁਸਾਫ਼ਰਾਂ ਨੂੰ ਪਲੇਟਫਾਰਮ ਤੇ ਪਹੁੰਚਣਾ ਪੈਂਦਾ ਹੈ (Setup Time) ਅਤੇ ਟਿਕਟ ਚੈੱਕ ਹੋਣ ਤੱਕ ਸਥਿਰ ਖੜ੍ਹਨਾ ਪੈਂਦਾ ਹੈ (Hold Time)।',
      coreConceptEn:
        'Synchronous sequential circuits coordinate state transitions across D flip-flops using a global clock edge. Reliable state capture requires obeying strict setup and hold timing windows around the active clock transition.',
      coreConceptPa:
        'ਸਿੰਕ੍ਰੋਨਸ ਸਰਕਟ ਕਲੌਕ ਸਿਗਨਲ ਦੇ ਕਿਨਾਰੇ (Clock Edge) ਨਾਲ ਡੇਟਾ ਨੂੰ ਰਜਿਸਟਰਾਂ ਵਿੱਚ ਸਟੋਰ ਕਰਦੇ ਹਨ। ਸਹੀ ਡੇਟਾ ਸਟੋਰ ਕਰਨ ਲਈ Setup Time ਅਤੇ Hold Time ਦੇ ਨਿਯਮਾਂ ਦੀ ਪਾਲਣਾ ਜ਼ਰੂਰੀ ਹੈ।',
      systemDiagramEn:
        'Source Flip-Flop (Q1) → Combinational Logic Cloud (t_pd) → Destination Flip-Flop Input (D2) sampled on rising CLK edge.',
      systemDiagramPa:
        'ਸਰੋਤ ਫਲਿੱਪ-ਫਲੌਪ (Q1) → ਕੰਬੀਨੇਸ਼ਨਲ ਲੌਜਿਕ ਗੇਟ (t_pd) → ਮੰਜ਼ਿਲ ਫਲਿੱਪ-ਫਲੌਪ (D2) ਜੋ ਕਲੌਕ ਦੇ ਚੜ੍ਹਦੇ ਕਿਨਾਰੇ ਤੇ ਸੈਂਪਲ ਹੁੰਦਾ ਹੈ।',
      mathDerivationsEn:
        'The minimum clock period $T_{\\text{clk}}$ and maximum clock frequency $f_{\\max}$ are governed by:\n$$T_{\\text{clk}} \\ge t_{pcq} + t_{pd} + t_{\\text{setup}} - t_{\\text{skew}}$$\n$$f_{\\max} = \\frac{1}{t_{pcq} + t_{pd} + t_{\\text{setup}}}$$',
      mathDerivationsPa:
        'ਘੱਟੋ-ਘੱਟ ਕਲੌਕ ਪੀਰੀਅਡ $T_{\\text{clk}}$ ਅਤੇ ਵੱਧ ਤੋਂ ਵੱਧ ਫ੍ਰੀਕੁਐਂਸੀ $f_{\\max}$ ਦਾ ਫਾਰਮੂਲਾ:\n$$T_{\\text{clk}} \\ge t_{pcq} + t_{pd} + t_{\\text{setup}} - t_{\\text{skew}}$$\n$$f_{\\max} = \\frac{1}{t_{pcq} + t_{pd} + t_{\\text{setup}}}$$',
      workedExamplesEn:
        'Given $t_{pcq} = 40\\text{ ps}$, $t_{pd} = 110\\text{ ps}$, and $t_{\\text{setup}} = 50\\text{ ps}$:\n$$T_{\\text{clk}} \\ge 40 + 110 + 50 = 200\\text{ ps} \\implies f_{\\max} = \\frac{1}{200 \\times 10^{-12}\\text{ s}} = 5.0\\text{ GHz}$$',
      workedExamplesPa:
        'ਜੇਕਰ $t_{pcq} = 40\\text{ ps}$, $t_{pd} = 110\\text{ ps}$, ਅਤੇ $t_{\\text{setup}} = 50\\text{ ps}$ ਹੋਵੇ:\n$$T_{\\text{clk}} \\ge 40 + 110 + 50 = 200\\text{ ps} \\implies f_{\\max} = 5.0\\text{ GHz}$$',
      practicalExampleEn:
        'Modern ARM and x86 CPU pipelines divide complex ALU operations into multiple pipeline stages so $t_{pd}$ per stage shrinks, enabling multi-gigahertz clock rates.',
      practicalExamplePa:
        'ਆਧੁਨਿਕ ਪ੍ਰੋਸੈਸਰ (ARM ਅਤੇ x86) ਵੱਡੇ ਕੰਮਾਂ ਨੂੰ ਛੋਟੇ ਪਾਈਪਲਾਈਨ ਪੜਾਵਾਂ ਵਿੱਚ ਵੰਡਦੇ ਹਨ ਤਾਂ ਜੋ $t_{pd}$ ਘੱਟ ਰਹੇ ਅਤੇ ਪ੍ਰੋਸੈਸਰ ਕਈ GHz ਸਪੀਡ ਤੇ ਚੱਲ ਸਕੇ।',
      codeDemo:
        '// Verilog RTL: Synchronous D-Register with Reset\nalways @(posedge clk or posedge rst) begin\n  if (rst) q <= 8\'b0000_0000;\n  else     q <= d_in;\nend',
      misconceptionsJson: [
        {
          myth: 'Hold time violations can be fixed by slowing down the clock frequency.',
          truthEn:
            'Hold time depends only on fast contamination delay on the same clock edge, independent of clock period.',
          truthPa:
            'ਹੋਲਡ ਟਾਈਮ ਦੀ ਸਮੱਸਿਆ ਕਲੌਕ ਸਪੀਡ ਘਟਾਉਣ ਨਾਲ ਹੱਲ ਨਹੀਂ ਹੁੰਦੀ ਕਿਉਂਕਿ ਇਹ ਇੱਕੋ ਕਲੌਕ ਕਿਨਾਰੇ ਤੇ ਵਾਪਰਦੀ ਹੈ।',
        },
      ],
      terminologyJson: [
        {
          term: 'Setup Time (t_su)',
          punjabi: 'ਸੈੱਟਅੱਪ ਸਮਾਂ',
          meaningEn: 'Minimum interval data must be stable before the active clock edge.',
          meaningPa: 'ਕਲੌਕ ਕਿਨਾਰੇ ਤੋਂ ਪਹਿਲਾਂ ਉਹ ਸਮਾਂ ਜਿਸ ਦੌਰਾਨ ਡੇਟਾ ਸਥਿਰ ਰਹਿਣਾ ਲਾਜ਼ਮੀ ਹੈ।',
        },
        {
          term: 'Hold Time (t_h)',
          punjabi: 'ਹੋਲਡ ਸਮਾਂ',
          meaningEn: 'Minimum interval data must remain stable after the active clock edge.',
          meaningPa: 'ਕਲੌਕ ਕਿਨਾਰੇ ਤੋਂ ਬਾਅਦ ਉਹ ਸਮਾਂ ਜਿਸ ਦੌਰਾਨ ਡੇਟਾ ਬਦਲਣਾ ਨਹੀਂ ਚਾਹੀਦਾ।',
        },
      ],
      exercisePromptEn:
        'Calculate the maximum allowable combinational delay if a processor targets a 2.5 GHz clock with t_pcq = 35 ps and t_setup = 45 ps.',
      exercisePromptPa:
        'ਜੇਕਰ ਪ੍ਰੋਸੈਸਰ 2.5 GHz ਤੇ ਚੱਲਦਾ ਹੈ ਅਤੇ t_pcq = 35 ps, t_setup = 45 ps ਹੈ, ਤਾਂ ਵੱਧ ਤੋਂ ਵੱਧ ਲੌਜਿਕ ਦੇਰੀ (t_pd) ਪਤਾ ਕਰੋ।',
      assessmentCheckBilingual:
        '1. Why does increasing combinational logic depth reduce $f_{\\max}$?\n2. How does a two-flop synchronizer mitigate metastability across asynchronous clock domains?',
      summaryEn:
        'Synchronous digital systems rely on setup and hold timing constraints to guarantee deterministic state transitions across registers.',
      summaryPa:
        'ਸਿੰਕ੍ਰੋਨਸ ਡਿਜੀਟਲ ਸਿਸਟਮ ਰਜਿਸਟਰਾਂ ਵਿੱਚ ਸਹੀ ਡੇਟਾ ਸਟੋਰ ਕਰਨ ਲਈ Setup ਅਤੇ Hold ਟਾਈਮਿੰਗ ਨਿਯਮਾਂ ਤੇ ਨਿਰਭਰ ਕਰਦੇ ਹਨ।',
      furtherReadingJson: [
        'Harris & Harris — Digital Design and Computer Architecture',
        'IEEE Std 1800 SystemVerilog Timing Checks Specification',
      ],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!all28Valid) {
      const missing = auditItems
        .filter((i) => !i.valid)
        .map((i) => `#${i.sectionNumber} (${i.labelEn})`)
        .join(', ');
      setValidationError(
        `Cannot publish lesson until all 28 required structure sections are complete. Incomplete sections: ${missing}`
      );
      return;
    }

    setSaving(true);
    try {
      const compiled = compile28SectionPayload(formState);
      await onSaveLesson(compiled);
    } finally {
      setSaving(false);
    }
  };

  const updateStringArray = (
    field: 'objectivesJson' | 'prerequisitesJson' | 'furtherReadingJson',
    idx: number,
    val: string
  ) => {
    setFormState((prev) => {
      const next = [...prev[field]];
      next[idx] = val;
      return { ...prev, [field]: next };
    });
  };

  const addStringArrayItem = (
    field: 'objectivesJson' | 'prerequisitesJson' | 'furtherReadingJson'
  ) => {
    setFormState((prev) => ({ ...prev, [field]: [...prev[field], ''] }));
  };

  const removeStringArrayItem = (
    field: 'objectivesJson' | 'prerequisitesJson' | 'furtherReadingJson',
    idx: number
  ) => {
    setFormState((prev) => ({
      ...prev,
      [field]: prev[field].length > 1 ? prev[field].filter((_, i) => i !== idx) : prev[field],
    }));
  };

  const compiledPreview = useMemo(() => compile28SectionPayload(formState), [formState]);

  return (
    <div className="space-y-6">
      {/* 28-SECTION STRUCTURE COMPLIANCE AUDIT BAR */}
      <div className={`p-4 sm:p-5 rounded-xl border space-y-4 ${subtlePanel}`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <FileCheck className="w-5 h-5 text-sky-400 shrink-0" />
            <div>
              <div className="text-sm font-bold">
                Standardized 28-Section Lesson Structure Audit · 28-ਭਾਗ ਪਾਠ ਢਾਂਚਾ ਜਾਂਚ
              </div>
              <p className="text-xs text-slate-400">
                Every new or existing lesson must satisfy all 28 bilingual pedagogical, mathematical (KaTeX), and assessment sections.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold border ${
                all28Valid
                  ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300'
                  : 'border-amber-500/40 bg-amber-500/15 text-amber-300'
              }`}
            >
              {validCount} / 28 Sections Complete ({compliancePercent}%)
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${
              all28Valid ? 'bg-emerald-500' : 'bg-sky-500'
            }`}
            style={{ width: `${compliancePercent}%` }}
          />
        </div>

        {/* 28-Section Interactive Status Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5">
          {auditItems.map((item) => (
            <button
              key={item.sectionNumber}
              type="button"
              onClick={() => setActiveGroup(item.group)}
              className={`p-2 rounded-lg border text-left text-[11px] flex items-center gap-1.5 transition-colors ${
                item.valid
                  ? darkMode
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                    : 'border-emerald-300 bg-emerald-50 text-emerald-900'
                  : darkMode
                  ? 'border-amber-500/40 bg-amber-500/10 text-amber-300'
                  : 'border-amber-300 bg-amber-50 text-amber-900'
              }`}
              title={`${item.labelEn} — ${item.detail}`}
            >
              {item.valid ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              ) : (
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              )}
              <span className="truncate font-medium">#{item.sectionNumber} {item.key}</span>
            </button>
          ))}
        </div>
      </div>

      {/* SELECT LESSON OR TEMPLATE TOOLBAR */}
      <div className={`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-3 ${subtlePanel}`}>
        <div className="flex flex-wrap items-center gap-3 flex-1 min-w-[260px]">
          <label className="text-xs font-bold shrink-0">Load Lesson into 28-Section Editor:</label>
          <select
            value={formState.id ?? 'new'}
            onChange={(e) => handleSelectExistingLesson(e.target.value)}
            className={`px-3 py-2 rounded-lg border text-xs font-semibold flex-1 max-w-md ${surfaceCard}`}
          >
            <option value="new">+ Create New 28-Section Lesson</option>
            {lessons.map((l) => (
              <option key={l.id} value={l.id}>
                [Lesson #{l.id}] {l.titleEn} · {l.titlePa}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleLoadStarterTemplate}
            className="px-3 py-2 min-h-[38px] rounded-lg border border-sky-500/40 bg-sky-500/15 text-sky-300 hover:bg-sky-600 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Auto-Fill 28-Section Template</span>
          </button>

          <button
            type="button"
            onClick={() => setPreviewMode(!previewMode)}
            className={`px-3 py-2 min-h-[38px] rounded-lg border text-xs font-bold flex items-center gap-1.5 transition-colors ${
              previewMode
                ? 'bg-amber-500 text-slate-950 border-amber-400'
                : 'border-slate-600 text-slate-300 hover:bg-slate-800'
            }`}
          >
            {previewMode ? <Edit3 className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{previewMode ? 'Back to 28-Section Editor' : 'Live KaTeX & Bilingual Preview'}</span>
          </button>
        </div>
      </div>

      {/* SECTION GROUP FILTER TABS */}
      {!previewMode && (
        <div className="flex flex-wrap items-center gap-1.5">
          {(
            [
              { id: 'all', label: 'All 28 Sections (1–28)' },
              { id: 'metadata', label: 'I. Metadata, Objectives & Prerequisites (1–7)' },
              { id: 'pedagogy', label: 'II. Analogies, Architecture & Diagrams (8–13)' },
              { id: 'math-examples', label: 'III. Math Derivations (LaTeX), Examples & Code (14–20)' },
              { id: 'assessment-glossary', label: 'IV. Misconceptions, Glossary & Assessments (21–28)' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveGroup(tab.id)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                activeGroup === tab.id
                  ? 'bg-sky-600 text-white border-sky-500'
                  : `${subtlePanel} opacity-80 hover:opacity-100`
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {validationError && (
        <div className="p-4 rounded-xl border border-rose-500/50 bg-rose-500/15 text-xs font-semibold text-rose-200 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <div>{validationError}</div>
        </div>
      )}

      {/* PREVIEW MODE */}
      {previewMode ? (
        <div className={`p-5 sm:p-6 rounded-xl border space-y-5 ${surfaceCard}`}>
          <div className="border-b border-slate-500/20 pb-4">
            <div className="text-xs font-mono text-sky-400">
              28-SECTION COMPILED LESSON PREVIEW · SLUG: {compiledPreview.slug || 'unset'}
            </div>
            <h3 className="text-xl font-bold mt-1">{compiledPreview.titleEn || 'Untitled Lesson'}</h3>
            <p className="text-base text-amber-400 font-semibold mt-0.5">
              {compiledPreview.titlePa || 'ਬਿਨਾਂ ਸਿਰਲੇਖ ਪਾਠ'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className={`p-4 rounded-xl border space-y-1.5 ${subtlePanel}`}>
              <div className="font-bold text-sky-400">6. Learning Objectives</div>
              <ul className="list-disc pl-4 space-y-1">
                {compiledPreview.objectivesJson.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
            <div className={`p-4 rounded-xl border space-y-1.5 ${subtlePanel}`}>
              <div className="font-bold text-amber-400">7. Required Prerequisites</div>
              <ul className="list-disc pl-4 space-y-1">
                {compiledPreview.prerequisitesJson.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-amber-500/40 bg-amber-500/10 space-y-2">
            <div className="text-xs font-bold text-amber-400">
              8–9. Child-Friendly Analogy (Punjabi & English)
            </div>
            <MathMessageRenderer
              content={`${compiledPreview.childAnalogyPa}\n\n${compiledPreview.childAnalogyEn}`}
              mode="child-friendly"
              darkMode={darkMode}
            />
          </div>

          <div className={`p-4 rounded-xl border space-y-3 ${subtlePanel}`}>
            <div className="text-xs font-bold text-sky-400">
              10–17 & 25. Technical Architecture, Block Diagram, KaTeX Math Derivations & Worked Examples
            </div>
            <MathMessageRenderer
              content={compiledPreview.technicalExplanationPa}
              mode="math-step"
              darkMode={darkMode}
            />
            <div className="border-t border-slate-500/20 pt-3">
              <MathMessageRenderer
                content={compiledPreview.technicalExplanationEn}
                mode="math-step"
                darkMode={darkMode}
              />
            </div>
          </div>
        </div>
      ) : (
        /* 28-SECTION FORM EDITOR */
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* GROUP I: SECTIONS 1 TO 7 (METADATA, OBJECTIVES, PREREQUISITES) */}
          {(activeGroup === 'all' || activeGroup === 'metadata') && (
            <div className={`p-5 rounded-xl border space-y-4 ${subtlePanel}`}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 border-b border-slate-500/20 pb-2">
                <Layers className="w-4 h-4" />
                <span>Part I — Curriculum Metadata, Objectives & Prerequisites (Sections 1–7)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-1">
                    Section 1: Course / Curriculum Level *
                  </label>
                  <select
                    disabled={!isAdmin}
                    value={formState.courseId}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, courseId: Number(e.target.value) }))
                    }
                    className={`w-full px-3 py-2.5 rounded-lg border text-xs font-semibold ${surfaceCard}`}
                  >
                    {courses.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.titleEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Section 2: Canonical Lesson Slug (a-z, 0-9, -) *
                  </label>
                  <input
                    type="text"
                    disabled={!isAdmin}
                    required
                    placeholder="e.g. synchronous-logic-timing"
                    value={formState.slug}
                    onChange={(e) =>
                      setFormState((p) => ({
                        ...p,
                        slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'),
                      }))
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs font-mono ${surfaceCard}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Section 5: Linked Interactive Simulation Lab *
                  </label>
                  <select
                    disabled={!isAdmin}
                    value={formState.interactiveLabId}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, interactiveLabId: e.target.value }))
                    }
                    className={`w-full px-3 py-2.5 rounded-lg border text-xs font-semibold ${surfaceCard}`}
                  >
                    <option value="hardware-explorer">Lab A: Computer Hardware Explorer</option>
                    <option value="cpu-cycle">Lab B: CPU Instruction Cycle</option>
                    <option value="ram-storage">Lab C: RAM vs Storage Hierarchy</option>
                    <option value="binary-converter">Lab D: Binary Converter</option>
                    <option value="logic-gates">Lab E: Logic Gate Laboratory</option>
                    <option value="network-sim">Lab F: Network Packet Simulator</option>
                    <option value="algorithm-math-lab">Lab G: Algorithms & CS Math</option>
                  </select>
                </div>

                <div className="md:col-span-1">
                  <label className="block text-xs font-bold mb-1">
                    Section 3: Lesson Title (English) *
                  </label>
                  <input
                    type="text"
                    disabled={!isAdmin}
                    required
                    value={formState.titleEn}
                    onChange={(e) => setFormState((p) => ({ ...p, titleEn: e.target.value }))}
                    className={`w-full px-3 py-2 rounded-lg border text-xs ${surfaceCard}`}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold mb-1">
                    Section 4: Lesson Title (Punjabi Gurmukhi · ਪੰਜਾਬੀ ਸਿਰਲੇਖ) *
                  </label>
                  <input
                    type="text"
                    disabled={!isAdmin}
                    required
                    value={formState.titlePa}
                    onChange={(e) => setFormState((p) => ({ ...p, titlePa: e.target.value }))}
                    className={`w-full px-3 py-2 rounded-lg border text-xs ${surfaceCard}`}
                  />
                </div>
              </div>

              {/* Section 6: Objectives */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold">
                    Section 6: Measurable Learning Objectives (Minimum 1) *
                  </label>
                  {isAdmin && (
                    <button
                      type="button"
                      onClick={() => addStringArrayItem('objectivesJson')}
                      className="text-xs text-sky-400 font-semibold flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Objective
                    </button>
                  )}
                </div>
                {formState.objectivesJson.map((obj, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      disabled={!isAdmin}
                      placeholder={`Objective #${idx + 1}...`}
                      value={obj}
                      onChange={(e) => updateStringArray('objectivesJson', idx, e.target.value)}
                      className={`flex-1 px-3 py-1.5 rounded-lg border text-xs ${surfaceCard}`}
                    />
                    {isAdmin && formState.objectivesJson.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeStringArrayItem('objectivesJson', idx)}
                        className="p-1.5 text-rose-400 hover:bg-rose-500/10 rounded"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Section 7: Prerequisites */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold">
                    Section 7: Required Prerequisites (Minimum 1) *
                  </label>
                  {isAdmin && (
                    <button
                      type="button"
                      onClick={() => addStringArrayItem('prerequisitesJson')}
                      className="text-xs text-sky-400 font-semibold flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Prerequisite
                    </button>
                  )}
                </div>
                {formState.prerequisitesJson.map((pre, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      disabled={!isAdmin}
                      placeholder={`Prerequisite #${idx + 1}...`}
                      value={pre}
                      onChange={(e) => updateStringArray('prerequisitesJson', idx, e.target.value)}
                      className={`flex-1 px-3 py-1.5 rounded-lg border text-xs ${surfaceCard}`}
                    />
                    {isAdmin && formState.prerequisitesJson.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeStringArrayItem('prerequisitesJson', idx)}
                        className="p-1.5 text-rose-400 hover:bg-rose-500/10 rounded"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GROUP II: SECTIONS 8 TO 13 (ANALOGIES, CORE CONCEPTS, SYSTEM DIAGRAMS) */}
          {(activeGroup === 'all' || activeGroup === 'pedagogy') && (
            <div className={`p-5 rounded-xl border space-y-4 ${subtlePanel}`}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-slate-500/20 pb-2">
                <BookOpen className="w-4 h-4" />
                <span>Part II — Bilingual Analogies, Core Architecture & Diagrams (Sections 8–13)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-1">
                    Section 8: Child-Friendly Analogy (English) *
                  </label>
                  <textarea
                    rows={3}
                    disabled={!isAdmin}
                    required
                    value={formState.childAnalogyEn}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, childAnalogyEn: e.target.value }))
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs ${surfaceCard}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Section 9: Child-Friendly Analogy (Punjabi · ਬੱਚਿਆਂ ਵਾਂਗ ਉਦਾਹਰਣ) *
                  </label>
                  <textarea
                    rows={3}
                    disabled={!isAdmin}
                    required
                    value={formState.childAnalogyPa}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, childAnalogyPa: e.target.value }))
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs ${surfaceCard}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Section 10: Core Concept & Technical Architecture (English) *
                  </label>
                  <textarea
                    rows={4}
                    disabled={!isAdmin}
                    required
                    value={formState.coreConceptEn}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, coreConceptEn: e.target.value }))
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs ${surfaceCard}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Section 11: Core Concept & Technical Architecture (Punjabi · ਤਕਨੀਕੀ ਵਿਆਖਿਆ) *
                  </label>
                  <textarea
                    rows={4}
                    disabled={!isAdmin}
                    required
                    value={formState.coreConceptPa}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, coreConceptPa: e.target.value }))
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs ${surfaceCard}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Section 12: System Block Diagram & Signal Pathway (English) *
                  </label>
                  <textarea
                    rows={2}
                    disabled={!isAdmin}
                    required
                    value={formState.systemDiagramEn}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, systemDiagramEn: e.target.value }))
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs font-mono ${surfaceCard}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Section 13: System Block Diagram & Signal Pathway (Punjabi · ਬਲੌਕ ਡਾਇਗ੍ਰਾਮ) *
                  </label>
                  <textarea
                    rows={2}
                    disabled={!isAdmin}
                    required
                    value={formState.systemDiagramPa}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, systemDiagramPa: e.target.value }))
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs font-mono ${surfaceCard}`}
                  />
                </div>
              </div>
            </div>
          )}

          {/* GROUP III: SECTIONS 14 TO 20 (MATH DERIVATIONS, WORKED EXAMPLES, PRACTICAL, CODE) */}
          {(activeGroup === 'all' || activeGroup === 'math-examples') && (
            <div className={`p-5 rounded-xl border space-y-4 ${subtlePanel}`}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-500/20 pb-2">
                <Sparkles className="w-4 h-4" />
                <span>
                  Part III — LaTeX Mathematical Derivations, Worked Examples & Code (Sections 14–20)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold">
                    Section 14: Mathematical Derivations with LaTeX $$...$$ (English) *
                  </label>
                  <textarea
                    rows={3}
                    disabled={!isAdmin}
                    required
                    value={formState.mathDerivationsEn}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, mathDerivationsEn: e.target.value }))
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs font-mono ${surfaceCard}`}
                  />
                  <div className={`p-2.5 rounded-lg border text-xs ${surfaceCard}`}>
                    <div className="text-[10px] font-mono text-sky-400 mb-1">
                      Live KaTeX Render Preview (Section 14):
                    </div>
                    <MathMessageRenderer
                      content={formState.mathDerivationsEn}
                      mode="math-step"
                      darkMode={darkMode}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold">
                    Section 15: Mathematical Derivations with LaTeX $$...$$ (Punjabi) *
                  </label>
                  <textarea
                    rows={3}
                    disabled={!isAdmin}
                    required
                    value={formState.mathDerivationsPa}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, mathDerivationsPa: e.target.value }))
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs font-mono ${surfaceCard}`}
                  />
                  <div className={`p-2.5 rounded-lg border text-xs ${surfaceCard}`}>
                    <div className="text-[10px] font-mono text-amber-400 mb-1">
                      Live KaTeX Render Preview (Section 15):
                    </div>
                    <MathMessageRenderer
                      content={formState.mathDerivationsPa}
                      mode="math-step"
                      darkMode={darkMode}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Section 16: Step-by-Step Worked Numerical Example (English) *
                  </label>
                  <textarea
                    rows={3}
                    disabled={!isAdmin}
                    required
                    value={formState.workedExamplesEn}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, workedExamplesEn: e.target.value }))
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs ${surfaceCard}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Section 17: Step-by-Step Worked Numerical Example (Punjabi · ਹੱਲ ਕੀਤੀ ਉਦਾਹਰਣ) *
                  </label>
                  <textarea
                    rows={3}
                    disabled={!isAdmin}
                    required
                    value={formState.workedExamplesPa}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, workedExamplesPa: e.target.value }))
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs ${surfaceCard}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Section 18: Practical Real-World Application (English) *
                  </label>
                  <textarea
                    rows={2}
                    disabled={!isAdmin}
                    required
                    value={formState.practicalExampleEn}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, practicalExampleEn: e.target.value }))
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs ${surfaceCard}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Section 19: Practical Real-World Application (Punjabi · ਵਿਹਾਰਕ ਉਦਾਹਰਣ) *
                  </label>
                  <textarea
                    rows={2}
                    disabled={!isAdmin}
                    required
                    value={formState.practicalExamplePa}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, practicalExamplePa: e.target.value }))
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs ${surfaceCard}`}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold mb-1">
                    Section 20: Code / Assembly / Hardware Simulation Snippet *
                  </label>
                  <textarea
                    rows={3}
                    disabled={!isAdmin}
                    required
                    value={formState.codeDemo}
                    onChange={(e) => setFormState((p) => ({ ...p, codeDemo: e.target.value }))}
                    className={`w-full px-3 py-2 rounded-lg border text-xs font-mono ${surfaceCard}`}
                  />
                </div>
              </div>
            </div>
          )}

          {/* GROUP IV: SECTIONS 21 TO 28 (MISCONCEPTIONS, TERMINOLOGY, EXERCISES, ASSESSMENTS, SUMMARY, REFERENCES) */}
          {(activeGroup === 'all' || activeGroup === 'assessment-glossary') && (
            <div className={`p-5 rounded-xl border space-y-5 ${subtlePanel}`}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 border-b border-slate-500/20 pb-2">
                <FileCheck className="w-4 h-4" />
                <span>
                  Part IV — Misconceptions, Glossary, Lab Exercises, Assessments & Summary (Sections 21–28)
                </span>
              </div>

              {/* Section 21: Misconceptions */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold">
                    Section 21: Common Student Misconceptions (Myth vs. Technical Truth) *
                  </label>
                  {isAdmin && (
                    <button
                      type="button"
                      onClick={() =>
                        setFormState((p) => ({
                          ...p,
                          misconceptionsJson: [
                            ...p.misconceptionsJson,
                            { myth: '', truthEn: '', truthPa: '' },
                          ],
                        }))
                      }
                      className="text-xs text-sky-400 font-semibold flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Misconception
                    </button>
                  )}
                </div>
                {formState.misconceptionsJson.map((m, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <input
                      type="text"
                      disabled={!isAdmin}
                      placeholder="Common Myth..."
                      value={m.myth}
                      onChange={(e) =>
                        setFormState((p) => {
                          const next = [...p.misconceptionsJson];
                          next[idx] = { ...next[idx], myth: e.target.value };
                          return { ...p, misconceptionsJson: next };
                        })
                      }
                      className={`px-3 py-1.5 rounded-lg border text-xs ${surfaceCard}`}
                    />
                    <input
                      type="text"
                      disabled={!isAdmin}
                      placeholder="Truth (English)..."
                      value={m.truthEn}
                      onChange={(e) =>
                        setFormState((p) => {
                          const next = [...p.misconceptionsJson];
                          next[idx] = { ...next[idx], truthEn: e.target.value };
                          return { ...p, misconceptionsJson: next };
                        })
                      }
                      className={`px-3 py-1.5 rounded-lg border text-xs ${surfaceCard}`}
                    />
                    <input
                      type="text"
                      disabled={!isAdmin}
                      placeholder="Truth (Punjabi)..."
                      value={m.truthPa}
                      onChange={(e) =>
                        setFormState((p) => {
                          const next = [...p.misconceptionsJson];
                          next[idx] = { ...next[idx], truthPa: e.target.value };
                          return { ...p, misconceptionsJson: next };
                        })
                      }
                      className={`px-3 py-1.5 rounded-lg border text-xs ${surfaceCard}`}
                    />
                  </div>
                ))}
              </div>

              {/* Section 22: Bilingual Terminology */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold">
                    Section 22: Bilingual Technical Terminology Glossary *
                  </label>
                  {isAdmin && (
                    <button
                      type="button"
                      onClick={() =>
                        setFormState((p) => ({
                          ...p,
                          terminologyJson: [
                            ...p.terminologyJson,
                            { term: '', punjabi: '', meaningEn: '', meaningPa: '' },
                          ],
                        }))
                      }
                      className="text-xs text-sky-400 font-semibold flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Term
                    </button>
                  )}
                </div>
                {formState.terminologyJson.map((t, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                    <input
                      type="text"
                      disabled={!isAdmin}
                      placeholder="English Term..."
                      value={t.term}
                      onChange={(e) =>
                        setFormState((p) => {
                          const next = [...p.terminologyJson];
                          next[idx] = { ...next[idx], term: e.target.value };
                          return { ...p, terminologyJson: next };
                        })
                      }
                      className={`px-3 py-1.5 rounded-lg border text-xs ${surfaceCard}`}
                    />
                    <input
                      type="text"
                      disabled={!isAdmin}
                      placeholder="Punjabi Term (ਗੁਰਮੁਖੀ)..."
                      value={t.punjabi}
                      onChange={(e) =>
                        setFormState((p) => {
                          const next = [...p.terminologyJson];
                          next[idx] = { ...next[idx], punjabi: e.target.value };
                          return { ...p, terminologyJson: next };
                        })
                      }
                      className={`px-3 py-1.5 rounded-lg border text-xs ${surfaceCard}`}
                    />
                    <input
                      type="text"
                      disabled={!isAdmin}
                      placeholder="Definition (English)..."
                      value={t.meaningEn}
                      onChange={(e) =>
                        setFormState((p) => {
                          const next = [...p.terminologyJson];
                          next[idx] = { ...next[idx], meaningEn: e.target.value };
                          return { ...p, terminologyJson: next };
                        })
                      }
                      className={`px-3 py-1.5 rounded-lg border text-xs ${surfaceCard}`}
                    />
                    <input
                      type="text"
                      disabled={!isAdmin}
                      placeholder="Definition (Punjabi)..."
                      value={t.meaningPa}
                      onChange={(e) =>
                        setFormState((p) => {
                          const next = [...p.terminologyJson];
                          next[idx] = { ...next[idx], meaningPa: e.target.value };
                          return { ...p, terminologyJson: next };
                        })
                      }
                      className={`px-3 py-1.5 rounded-lg border text-xs ${surfaceCard}`}
                    />
                  </div>
                ))}
              </div>

              {/* Sections 23–27 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-1">
                    Section 23: Hands-On Lab Exercise Prompt (English) *
                  </label>
                  <textarea
                    rows={2}
                    disabled={!isAdmin}
                    required
                    value={formState.exercisePromptEn}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, exercisePromptEn: e.target.value }))
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs ${surfaceCard}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Section 24: Hands-On Lab Exercise Prompt (Punjabi · ਅਭਿਆਸ ਪ੍ਰਸ਼ਨ) *
                  </label>
                  <textarea
                    rows={2}
                    disabled={!isAdmin}
                    required
                    value={formState.exercisePromptPa}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, exercisePromptPa: e.target.value }))
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs ${surfaceCard}`}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold mb-1">
                    Section 25: Formative Self-Check Assessment Questions & Solutions *
                  </label>
                  <textarea
                    rows={2}
                    disabled={!isAdmin}
                    required
                    value={formState.assessmentCheckBilingual}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, assessmentCheckBilingual: e.target.value }))
                    }
                    className={`w-full px-3 py-2 rounded-lg border text-xs ${surfaceCard}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Section 26: Key Takeaways & Executive Summary (English) *
                  </label>
                  <textarea
                    rows={2}
                    disabled={!isAdmin}
                    required
                    value={formState.summaryEn}
                    onChange={(e) => setFormState((p) => ({ ...p, summaryEn: e.target.value }))}
                    className={`w-full px-3 py-2 rounded-lg border text-xs ${surfaceCard}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Section 27: Key Takeaways & Executive Summary (Punjabi · ਪਾਠ ਦਾ ਸਾਰ) *
                  </label>
                  <textarea
                    rows={2}
                    disabled={!isAdmin}
                    required
                    value={formState.summaryPa}
                    onChange={(e) => setFormState((p) => ({ ...p, summaryPa: e.target.value }))}
                    className={`w-full px-3 py-2 rounded-lg border text-xs ${surfaceCard}`}
                  />
                </div>
              </div>

              {/* Section 28: Further Reading */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold">
                    Section 28: Further Reading, Datasheets & IEEE/ACM References *
                  </label>
                  {isAdmin && (
                    <button
                      type="button"
                      onClick={() => addStringArrayItem('furtherReadingJson')}
                      className="text-xs text-sky-400 font-semibold flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Reference
                    </button>
                  )}
                </div>
                {formState.furtherReadingJson.map((ref, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      disabled={!isAdmin}
                      placeholder={`Reference #${idx + 1}...`}
                      value={ref}
                      onChange={(e) => updateStringArray('furtherReadingJson', idx, e.target.value)}
                      className={`flex-1 px-3 py-1.5 rounded-lg border text-xs ${surfaceCard}`}
                    />
                    {isAdmin && formState.furtherReadingJson.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeStringArrayItem('furtherReadingJson', idx)}
                        className="p-1.5 text-rose-400 hover:bg-rose-500/10 rounded"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {isAdmin && (
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="text-xs text-slate-400">
                {all28Valid
                  ? '✓ All 28 sections verified and ready to publish to Cloud SQL PostgreSQL.'
                  : `Complete the remaining ${28 - validCount} section(s) to unlock lesson publishing.`}
              </div>
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-3 min-h-[44px] rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold disabled:opacity-50"
              >
                {saving
                  ? 'Validating & Saving 28-Section Lesson...'
                  : formState.id
                  ? 'Save 28-Section Lesson Updates'
                  : 'Publish New 28-Section Lesson'}
              </button>
            </div>
          )}
        </form>
      )}
    </div>
  );
};
