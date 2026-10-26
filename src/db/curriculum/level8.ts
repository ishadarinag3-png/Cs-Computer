import { SeedCourse } from './types.ts';

export const LEVEL_8_COURSE: SeedCourse = {
  slug: 'level-8-microcontrollers-and-embedded-systems',
  levelNumber: 8,
  titleEn: 'Level 8: Microcontrollers & Embedded Systems',
  titlePa: 'ਲੈਵਲ 8: ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਅਤੇ ਐਂਬੈੱਡਡ ਸਿਸਟਮ (Microcontrollers)',
  descriptionEn:
    'Harvard vs Von Neumann architectures, memory hierarchy (Flash/SRAM/EEPROM), GPIO configurations, interrupt service routines (ISR), hardware timers, PWM, 12-bit SAR ADCs, serial protocols (UART, SPI, I2C, CAN), STM32/ESP32, and SWD/JTAG debugging.',
  descriptionPa:
    'ਹਾਰਵਰਡ ਬਨਾਮ ਵੌਨ ਨਿਊਮਨ ਆਰਕੀਟੈਕਚਰ, ਮੈਮੋਰੀ (Flash, SRAM), GPIO, ਇੰਟਰੱਪਟ (ISR), ਹਾਰਡਵੇਅਰ ਟਾਈਮਰ, PWM, 12-ਬਿੱਟ ADC, ਸੀਰੀਅਲ ਪ੍ਰੋਟੋਕੋਲ (UART, SPI, I2C, CAN ਬੱਸ), ਅਤੇ JTAG/SWD ਡੀਬੱਗਿੰਗ।',
  category: 'core-electronics',
  estimatedHours: 20,
  modules: [
    {
      orderIndex: 1,
      titleEn: 'Microcontroller Core Architecture, Memory & Interrupt Systems',
      titlePa: 'ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਆਰਕੀਟੈਕਚਰ, ਮੈਮੋਰੀ ਅਤੇ ਇੰਟਰੱਪਟ ਪ੍ਰਣਾਲੀ',
      summaryEn:
        'Harvard vs Von Neumann bus architectures, register files, Flash/SRAM allocation, GPIO modes (Push-Pull, Open-Drain), and Interrupt Service Routine (ISR) mechanics.',
      summaryPa:
        'ਹਾਰਵਰਡ ਆਰਕੀਟੈਕਚਰ, ਪ੍ਰੋਗਰਾਮ ਕਾਊਂਟਰ, Flash ਰੋਮ ਅਤੇ SRAM, ਪੁਸ਼-ਪੁੱਲ ਤੇ ਓਪਨ-ਡਰੇਨ GPIO, ਅਤੇ ਇੰਟਰੱਪਟ ਸਰਵਿਸ ਰੂਟੀਨ (ISR)।',
      lessons: [
        {
          slug: 'mcu-architecture-memory-gpio-interrupts',
          orderIndex: 1,
          titleEn: '8.1 MCU Architecture, Memory (Flash/SRAM), GPIOs & Interrupts (ISR)',
          titlePa: '8.1 ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਆਰਕੀਟੈਕਚਰ, ਮੈਮੋਰੀ, GPIO ਅਤੇ ਇੰਟਰੱਪਟ (ISR)',
          objectivesJson: [
            'Compare Harvard architecture (separate instruction and data buses for parallel fetch) with Von Neumann architecture (unified memory bus)',
            'Map microcontroller memory segments: Flash ROM (code), SRAM (stack/heap/globals), and EEPROM (persistent configuration)',
            'Configure GPIO input modes (Floating, Pull-Up, Pull-Down) and output modes (Push-Pull vs Open-Drain with external pull-ups)',
            'Program external hardware interrupts, configure Interrupt Vector Tables (IVT), minimize ISR execution latency, and declare volatile flags',
          ],
          prerequisitesJson: ['Level 5: Digital Electronics (Sequential logic and registers)'],
          childAnalogyEn:
            'Think of a chef cooking in a Punjabi dhaba! If the chef has to walk to the library in the next room every time to read the next recipe step before fetching butter from the fridge, that is Von Neumann (slow, single hallway)! If the chef has a recipe screen right above the counter and a fridge right under it, they can read and grab ingredients at the exact same time—that is Harvard Architecture! An Interrupt is like a customer ringing the front bell: the chef pauses stirring the pot for 2 seconds to take the urgent order, then returns right back to cooking!',
          childAnalogyPa:
            'ਢਾਬੇ ਦੇ ਰਸੋਈਏ ਦੀ ਕਲਪਨਾ ਕਰੋ! ਜੇਕਰ ਰਸੋਈਏ ਨੂੰ ਹਰ ਮਸਾਲਾ ਚੁੱਕਣ ਲਈ ਨਾਲ ਵਾਲੇ ਕਮਰੇ ਵਿੱਚ ਜਾ ਕੇ ਕਿਤਾਬ ਪੜ੍ਹਨੀ ਪਵੇ, ਤਾਂ ਇਹ ਵੌਨ ਨਿਊਮਨ (ਹੌਲੀ) ਹੈ! ਜੇਕਰ ਰੈਸਿਪੀ ਵਾਲੀ ਸਕ੍ਰੀਨ ਸਾਹਮਣੇ ਹੋਵੇ ਅਤੇ ਮਸਾਲੇ ਹੇਠਾਂ ਹੋਣ, ਤਾਂ ਉਹ ਇੱਕੋ ਸਮੇਂ ਪੜ੍ਹ ਵੀ ਸਕਦਾ ਹੈ ਅਤੇ ਸਮਾਨ ਵੀ ਚੁੱਕ ਸਕਦਾ ਹੈ—ਇਹ ਹਾਰਵਰਡ ਆਰਕੀਟੈਕਚਰ (ਤੇਜ਼) ਹੈ! ਇੰਟਰੱਪਟ (Interrupt) ਦਰਵਾਜ਼ੇ ਦੀ ਘੰਟੀ ਵਾਂਗ ਹੈ: ਰਸੋਈਆ ਆਪਣਾ ਕੰਮ 2 ਸਕਿੰਟ ਰੋਕ ਕੇ ਗਾਹਕ ਦੀ ਗੱਲ ਸੁਣਦਾ ਹੈ (ISR) ਅਤੇ ਫਿਰ ਵਾਪਸ ਆਪਣੀ ਕੜਾਹੀ ਹਿਲਾਉਣ ਲੱਗ ਪੈਂਦਾ ਹੈ!',
          technicalExplanationEn:
            'Microcontrollers integrate a microprocessor CPU core, volatile/non-volatile memory, and hardware peripherals on a single silicon die:\n\n1. Harvard vs Von Neumann Architectures:\n• Von Neumann: Single shared address and data bus for instructions and data (subject to "Von Neumann bottleneck").\n• Harvard Architecture (ARM Cortex-M, AVR, PIC): Separate physical instruction bus (I-Code/Flash) and data bus (D-Code/SRAM), allowing simultaneous instruction fetch and data operand read in a single clock cycle.\n\n2. Memory Organization:\n• Flash ROM: Non-volatile electrically erasable memory holding compiled machine code, interrupt vectors, and constant strings.\n• SRAM: High-speed volatile static RAM holding the execution Call Stack (local variables, function return addresses), Heap (dynamic malloc), and Global/Static variables.\n• EEPROM / Internal Emulated Flash: Byte-writable non-volatile storage for user settings and calibration constants.\n\n3. GPIO Operating Modes:\n• Floating Input: High impedance (>10 MΩ); floating pin picks up ambient 50Hz noise unless tied externally.\n• Pull-Up / Pull-Down Input: Internal ~40 kΩ resistor ties pin to VCC or GND to ensure deterministic logic level when external switch is open.\n• Push-Pull Output: Complementary P-MOS and N-MOS transistors actively drive high (VCC) and low (GND) with fast edges.\n• Open-Drain Output: Only low-side N-MOS is active; requires an external pull-up resistor to pull high. Enables wired-AND bidirectional buses (I2C) and mixed-voltage level shifting.\n\n4. Interrupts & Interrupt Service Routines (ISRs):\n• Hardware Interrupt: Signal from a peripheral (timer, UART) or external pin instantly suspends CPU execution, pushes Program Counter (PC) and Status Register to stack, and vectors to the ISR address in the Interrupt Vector Table (IVT).\n• Latency: Time taken to finish current instruction and load ISR address (typically 6-12 clock cycles in ARM NVIC).\n• Golden Rules of ISRs: Keep them microsecond-fast, never call blocking delays or print functions, and declare shared global variables as `volatile` to prevent compiler register caching.',
          technicalExplanationPa:
            'ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਦੀ ਅੰਦਰੂਨੀ ਬਣਤਰ:\n\n1. ਹਾਰਵਰਡ ਆਰਕੀਟੈਕਚਰ:\nਕੋਡ ਪੜ੍ਹਨ ਲਈ Flash ਤਾਰਾਂ ਵੱਖਰੀਆਂ ਹੁੰਦੀਆਂ ਹਨ ਅਤੇ ਡਾਟਾ ਪੜ੍ਹਨ ਲਈ RAM ਤਾਰਾਂ ਵੱਖਰੀਆਂ ਹੁੰਦੀਆਂ ਹਨ, ਜਿਸ ਕਾਰਨ ਇਹ ਇੱਕੋ ਕਲਾਕ ਸਾਈਕਲ ਵਿੱਚ ਦੋਵੇਂ ਕੰਮ ਇਕੱਠੇ ਕਰ ਲੈਂਦਾ ਹੈ।\n\n2. ਮੈਮੋਰੀ (Memory):\n• Flash Memory: ਪੱਕੀ ਮੈਮੋਰੀ ਜਿਸ ਵਿੱਚ ਤੁਹਾਡਾ ਲਿਖਿਆ ਪ੍ਰੋਗਰਾਮ ਸਟੋਰ ਹੁੰਦਾ ਹੈ (ਬਿਜਲੀ ਬੰਦ ਹੋਣ ਤੇ ਵੀ ਨਹੀਂ ਮਿਟਦਾ)।\n• SRAM: ਅਸਥਾਈ ਰੈਮ ਜਿਸ ਵਿੱਚ ਵੇਰੀਏਬਲ ਅਤੇ ਸਟੈਕ (Stack) ਚੱਲਦੇ ਹਨ।\n\n3. GPIO ਮੋਡ:\n• Push-Pull: ਪਿੰਨ ਜ਼ੋਰ ਨਾਲ 3.3V (ਹਾਈ) ਅਤੇ 0V (ਲੋਅ) ਦਿੰਦੀ ਹੈ।\n• Open-Drain: ਪਿੰਨ ਸਿਰਫ਼ ਜ਼ਮੀਨ (0V) ਖਿੱਚ ਸਕਦੀ ਹੈ; ਹਾਈ ਕਰਨ ਲਈ ਬਾਹਰੀ ਰਜਿਸਟਰ (Pull-Up) ਚਾਹੀਦਾ ਹੈ। ਇਹ I2C ਬੱਸ ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।\n\n4. ਇੰਟਰੱਪਟ (Interrupts):\nਜਦੋਂ ਕੋਈ ਐਮਰਜੈਂਸੀ ਬਟਨ ਦਬਾਇਆ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਪ੍ਰੋਸੈਸਰ ਸਭ ਕੁਝ ਛੱਡ ਕੇ ਤੁਰੰਤ ਉਸਦੇ ਫੰਕਸ਼ਨ (ISR) ਵਿੱਚ ਜਾਂਦਾ ਹੈ। ISR ਵਿੱਚ ਕਦੇ ਵੀ ਵੱਡੀ ਦੇਰੀ (delay) ਨਹੀਂ ਲਗਾਉਣੀ ਚਾਹੀਦੀ ਅਤੇ ਸਾਂਝੇ ਵੇਰੀਏਬਲਾਂ ਅੱਗੇ `volatile` ਲਿਖਣਾ ਲਾਜ਼ਮੀ ਹੈ।',
          practicalExampleEn:
            'Rotary encoder volume knob on an automobile dashboard: Turning the knob pulses two quadrature signals (A and B). If the CPU had to poll these pins continuously inside a busy main loop while updating the screen, fast turns would drop pulses. By attaching an external falling-edge Interrupt to Pin A, every rotational detent instantly triggers a 2-microsecond ISR that reads Pin B, updates the volume counter, and returns, never missing a click even at 100% CPU load.',
          practicalExamplePa:
            'ਕਾਰ ਦੇ ਮਿਊਜ਼ਿਕ ਸਿਸਟਮ ਦਾ ਵਾਲਿਊਮ ਬਟਨ (Rotary Encoder): ਜੇਕਰ ਪ੍ਰੋਸੈਸਰ ਆਮ ਲੂਪ ਵਿੱਚ ਬਟਨ ਚੈੱਕ ਕਰਦਾ ਰਹੇ, ਤਾਂ ਤੇਜ਼ੀ ਨਾਲ ਘੁਮਾਉਣ ਤੇ ਗੇੜੇ ਛੁੱਟ ਜਾਣਗੇ। ਇਸ ਲਈ ਬਟਨ ਦੀ ਤਾਰ ਨੂੰ ਹਾਰਡਵੇਅਰ ਇੰਟਰੱਪਟ (Interrupt) ਨਾਲ ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ। ਜਿਵੇਂ ਹੀ ਬਟਨ ਘੁੰਮਦਾ ਹੈ, ਪ੍ਰੋਸੈਸਰ 2 ਮਾਈਕ੍ਰੋਸਕਿੰਟ ਵਿੱਚ ਵਾਲਿਊਮ ਵਧਾ ਕੇ ਵਾਪਸ ਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਇੱਕ ਵੀ ਕਲਿੱਕ ਮਿਸ ਨਹੀਂ ਹੁੰਦਾ।',
          codeDemo: `// C/C++ Embedded Microcontroller Code: Interrupt Service Routine & Volatile Flag
#include <stdint.h>
#include <stdbool.h>

// Volatile keyword informs compiler that variable can change asynchronously outside main thread!
volatile bool g_emergencyStopPressed = false;
volatile uint32_t g_encoderClickCount = 0;

// External Pin Interrupt Service Routine (ISR)
void EXTI0_IRQHandler(void) {
  // Check pending interrupt bit
  if (EXTI_GetPendingBit(EXTI_Line0)) {
    g_encoderClickCount++;
    g_emergencyStopPressed = true;
    
    // Clear interrupt flag before exiting ISR
    EXTI_ClearPendingBit(EXTI_Line0);
  }
}

int main(void) {
  // Setup hardware clocks, GPIOs, and NVIC interrupt controller...
  while (1) {
    if (g_emergencyStopPressed) {
      // Act immediately on hardware interrupt event
      g_emergencyStopPressed = false;
      // Halt all motors safely...
    }
    // Main background tasks (display update, network ping)...
  }
}`,
          misconceptionsJson: [
            {
              myth: 'Calling a delay function like delay(500) inside an Interrupt Service Routine (ISR) is fine.',
              truthEn:
                'Inside an ISR, other lower-priority interrupts and standard CPU execution threads are blocked. Calling a 500 ms delay halts the entire microcontroller, freezing communication buses, watchdog timers, and causing hard system lockups.',
              truthPa:
                'ISR ਦੇ ਅੰਦਰ ਕਦੇ ਵੀ delay() ਨਹੀਂ ਲਗਾਉਣਾ ਚਾਹੀਦਾ! ਇਹ ਪੂਰੇ ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਨੂੰ ਜਾਮ ਕਰ ਦਿੰਦਾ ਹੈ ਅਤੇ ਵਾਚਡੌਗ ਟਾਈਮਰ ਸਿਸਟਮ ਨੂੰ ਰੀਸੈੱਟ ਕਰ ਦੇਵੇਗਾ।',
            },
            {
              myth: 'Variables shared between an ISR and the main loop do not need the volatile keyword if optimization is off.',
              truthEn:
                'Modern C compilers cache variables in fast CPU registers. Without the `volatile` qualifier, the main while-loop reads the cached register value forever and never detects that the hardware ISR updated the memory variable.',
              truthPa:
                'ISR ਨਾਲ ਸਾਂਝੇ ਕੀਤੇ ਵੇਰੀਏਬਲ ਅੱਗੇ `volatile` ਲਿਖਣਾ ਲਾਜ਼ਮੀ ਹੈ, ਨਹੀਂ ਤਾਂ ਕੰਪਾਈਲਰ ਪੁਰਾਣੀ ਵੈਲਿਊ ਕੈਸ਼ ਵਿੱਚੋਂ ਪੜ੍ਹਦਾ ਰਹੇਗਾ ਅਤੇ ਬਟਨ ਦਬਣ ਦਾ ਪਤਾ ਹੀ ਨਹੀਂ ਲੱਗੇਗਾ।',
            },
            {
              myth: 'A Von Neumann architecture processor can fetch an instruction and read RAM data in the same clock cycle on a single bus.',
              truthEn:
                'In a Von Neumann machine with a single bus, access to instruction memory and data memory must be strictly time-multiplexed across separate clock cycles (the Von Neumann bottleneck). Harvard architecture solves this with physically independent buses.',
              truthPa:
                'ਵੌਨ ਨਿਊਮਨ ਵਿੱਚ ਇੱਕੋ ਬੱਸ ਹੋਣ ਕਰਕੇ ਕੋਡ ਅਤੇ ਡਾਟਾ ਇੱਕੋ ਸਮੇਂ ਨਹੀਂ ਪੜ੍ਹਿਆ ਜਾ ਸਕਦਾ, ਜਦਕਿ ਹਾਰਵਰਡ ਆਰਕੀਟੈਕਚਰ ਦੋ ਵੱਖਰੀਆਂ ਤਾਰਾਂ ਨਾਲ ਦੋਵੇਂ ਕੰਮ ਇਕੱਠੇ ਕਰਦਾ ਹੈ।',
            },
          ],
          terminologyJson: [
            {
              term: 'Harvard Architecture',
              punjabi: 'ਹਾਰਵਰਡ ਆਰਕੀਟੈਕਚਰ',
              meaningEn: 'Computer architecture with physically separate storage and signal pathways for instructions and data.',
              meaningPa: 'ਕੰਪਿਊਟਰ ਡਿਜ਼ਾਈਨ ਜਿਸ ਵਿੱਚ ਕੋਡ ਅਤੇ ਡਾਟੇ ਲਈ ਵੱਖ-ਵੱਖ ਬੱਸਾਂ ਹੁੰਦੀਆਂ ਹਨ।',
            },
            {
              term: 'ISR (Interrupt Service Routine)',
              punjabi: 'ਇੰਟਰੱਪਟ ਸਰਵਿਸ ਰੂਟੀਨ',
              meaningEn: 'High-priority software callback function executed immediately when a hardware interrupt event fires.',
              meaningPa: 'ਹਾਰਡਵੇਅਰ ਇੰਟਰੱਪਟ ਆਉਣ ਤੇ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਚੱਲਣ ਵਾਲਾ ਐਮਰਜੈਂਸੀ ਫੰਕਸ਼ਨ।',
            },
            {
              term: 'Push-Pull Output',
              punjabi: 'ਪੁਸ਼-ਪੁੱਲ ਆਊਟਪੁੱਟ',
              meaningEn: 'Output pin driven actively by two complementary transistors towards both logic high (VCC) and logic low (GND).',
              meaningPa: 'ਦੋ ਟ੍ਰਾਂਜਿਸਟਰਾਂ ਵਾਲੀ ਪਿੰਨ ਜੋ ਹਾਈ ਅਤੇ ਲੋਅ ਦੋਵਾਂ ਪਾਸੇ ਪੂਰੀ ਤਾਕਤ ਨਾਲ ਕਰੰਟ ਦਿੰਦੀ ਹੈ।',
            },
            {
              term: 'Open-Drain Output',
              punjabi: 'ਓਪਨ-ਡਰੇਨ ਆਊਟਪੁੱਟ',
              meaningEn: 'Output configuration where the pin can only sink current to ground, requiring an external pull-up resistor to pull high.',
              meaningPa: 'ਪਿੰਨ ਜੋ ਸਿਰਫ਼ 0V ਤੇ ਖਿੱਚ ਸਕਦੀ ਹੈ; ਹਾਈ ਕਰਨ ਲਈ ਬਾਹਰੀ ਰਜਿਸਟਰ ਚਾਹੀਦਾ ਹੈ।',
            },
            {
              term: 'Volatile Keyword',
              punjabi: 'Volatile ਕੀਵਰਡ',
              meaningEn: 'C/C++ compiler qualifier preventing register caching of variables that may change unexpectedly via hardware or ISRs.',
              meaningPa: 'ਕੰਪਾਈਲਰ ਨੂੰ ਇਹ ਦੱਸਣ ਵਾਲਾ ਸ਼ਬਦ ਕਿ ਇਹ ਵੇਰੀਏਬਲ ਹਾਰਡਵੇਅਰ ਰਾਹੀਂ ਕਿਸੇ ਵੀ ਵੇਲੇ ਬਦਲ ਸਕਦਾ ਹੈ।',
            },
            {
              term: 'Stack Overflow',
              punjabi: 'ਸਟੈਕ ਓਵਰਫਲੋਅ',
              meaningEn: 'Fatal runtime crash occurring when nested function calls or local variables exhaust allocated SRAM stack space.',
              meaningPa: 'ਜਦੋਂ ਫੰਕਸ਼ਨ ਕਾਲਾਂ ਰੈਮ (SRAM) ਦੀ ਸਾਰੀ ਖ਼ਾਲੀ ਥਾਂ ਖ਼ਤਮ ਕਰਕੇ ਕੰਪਿਊਟਰ ਨੂੰ ਕਰੈਸ਼ ਕਰ ਦਿੰਦੀਆਂ ਹਨ।',
            },
          ],
          interactiveLabId: 'cpu-cycle',
          exercisePromptEn:
            'Embedded Architecture Task: (1) An ARM Cortex-M4 microcontroller running at 80 MHz receives an external pin interrupt. If the NVIC hardware takes 12 clock cycles to complete context saving and vector to the ISR, calculate the interrupt latency in nanoseconds. (2) Explain why an I2C communication bus must use Open-Drain GPIO outputs instead of Push-Pull.',
          exercisePromptPa:
            'ਐਂਬੈੱਡਡ ਟਾਸਕ: (1) 80 MHz ਉੱਤੇ ਚੱਲ ਰਹੇ ARM Cortex-M4 ਕੰਟਰੋਲਰ ਵਿੱਚ ਇੰਟਰੱਪਟ ਸ਼ੁਰੂ ਹੋਣ ਲਈ 12 ਕਲਾਕ ਸਾਈਕਲ ਲੱਗਦੇ ਹਨ। ਇਸਦੀ ਇੰਟਰੱਪਟ ਦੇਰੀ (Latency) ਨੈਨੋਸਕਿੰਟਾਂ ਵਿੱਚ ਕੱਢੋ। (2) ਸਮਝਾਓ ਕਿ I2C ਬੱਸ ਵਿੱਚ Push-Pull ਦੀ ਥਾਂ Open-Drain ਪਿੰਨਾਂ ਕਿਉਂ ਜ਼ਰੂਰੀ ਹੁੰਦੀਆਂ ਹਨ।',
          summaryEn:
            'Microcontroller cores combine independent Harvard memory buses, configurable GPIO input/output stages, and low-latency interrupt vectoring to respond to real-world physical events in sub-microsecond timeframes.',
          summaryPa:
            'ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਹਾਰਵਰਡ ਮੈਮੋਰੀ, ਲਚਕਦਾਰ GPIO ਪਿੰਨਾਂ ਅਤੇ ਹਾਈ-ਸਪੀਡ ਇੰਟਰੱਪਟ ਪ੍ਰਣਾਲੀ ਰਾਹੀਂ ਬਾਹਰੀ ਦੁਨੀਆ ਦੀ ਹਰ ਘਟਨਾ ਉੱਤੇ ਮਾਈਕ੍ਰੋਸਕਿੰਟਾਂ ਵਿੱਚ ਪ੍ਰਤੀਕਿਰਿਆ ਕਰਦੇ ਹਨ।',
          furtherReadingJson: [
            'The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors by Joseph Yiu',
            'Making Embedded Systems: Design Patterns for Great Software by Elecia White',
            'Programming with STM32: Getting Started with the Nucleo Board and C/C++ by Frank Meylan',
          ],
          quiz: {
            titleEn: 'Level 8 Assessment: MCU Architecture, Memory & Interrupts',
            titlePa: 'ਲੈਵਲ 8 ਟੈਸਟ: ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਆਰਕੀਟੈਕਚਰ ਅਤੇ ਇੰਟਰੱਪਟ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'Harvard Bus',
                promptEn: 'What is the primary architectural advantage of a Harvard microcontroller architecture over a Von Neumann architecture?',
                promptPa: 'ਵੌਨ ਨਿਊਮਨ ਦੇ ਮੁਕਾਬਲੇ ਹਾਰਵਰਡ ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਆਰਕੀਟੈਕਚਰ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਫ਼ਾਇਦਾ ਕੀ ਹੈ?',
                optionsJson: [
                  'Separate physical instruction and data buses allow fetching code instructions and reading data variables in the exact same clock cycle',
                  'It uses zero RAM memory',
                  'It does not require a clock oscillator',
                  'It operates only on analog signals',
                ],
                correctAnswer: 'Separate physical instruction and data buses allow fetching code instructions and reading data variables in the exact same clock cycle',
                explanationEn:
                  'By decoupling program memory and data memory onto distinct buses, the CPU avoids the Von Neumann bottleneck, doubling memory bandwidth.',
                explanationPa:
                  'ਕੋਡ ਅਤੇ ਡਾਟੇ ਲਈ ਵੱਖ-ਵੱਖ ਬੱਸਾਂ ਹੋਣ ਕਰਕੇ ਪ੍ਰੋਸੈਸਰ ਇੱਕੋ ਕਲਾਕ ਵਿੱਚ ਦੋਵੇਂ ਕੰਮ ਇਕੱਠੇ ਕਰ ਸਕਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Memory Types',
                promptEn: 'Where are local function variables and call stack return frames physically stored during microcontroller program execution?',
                promptPa: 'ਪ੍ਰੋਗਰਾਮ ਚੱਲਦੇ ਸਮੇਂ ਫੰਕਸ਼ਨਾਂ ਦੇ ਲੋਕਲ ਵੇਰੀਏਬਲ ਅਤੇ ਸਟੈਕ ਕਿੱਥੇ ਸਟੋਰ ਹੁੰਦੇ ਹਨ?',
                optionsJson: ['Volatile Static RAM (SRAM)', 'Non-volatile Flash ROM', 'EEPROM', 'Clock crystal'],
                correctAnswer: 'Volatile Static RAM (SRAM)',
                explanationEn:
                  'SRAM provides high-speed read/write memory for the CPU stack, heap, and runtime variables. Flash stores the compiled firmware machine code.',
                explanationPa:
                  'SRAM (Static RAM) ਵਿੱਚ ਤੇਜ਼ ਰਫ਼ਤਾਰ ਨਾਲ ਵੇਰੀਏਬਲ ਅਤੇ ਫੰਕਸ਼ਨ ਕਾਲਾਂ ਸਟੋਰ ਹੁੰਦੀਆਂ ਹਨ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Open-Drain GPIO',
                promptEn: 'Why does the I2C serial communication bus require Open-Drain GPIO outputs with external pull-up resistors?',
                promptPa: 'I2C ਬੱਸ ਵਿੱਚ Push-Pull ਦੀ ਬਜਾਏ Open-Drain ਪਿੰਨਾਂ ਅਤੇ ਪੁੱਲ-ਅੱਪ ਰਜਿਸਟਰ ਕਿਉਂ ਵਰਤੇ ਜਾਂਦੇ ਹਨ?',
                optionsJson: [
                  'To prevent destructive short circuits (bus contention) when multiple chips pull the shared wire low at the same time',
                  'To boost the bus voltage to 24 V',
                  'To convert digital bits to audio',
                  'To invert the clock phase',
                ],
                correctAnswer: 'To prevent destructive short circuits (bus contention) when multiple chips pull the shared wire low at the same time',
                explanationEn:
                  'If push-pull pins shared a bus and one drove High while another drove Low, a direct power-to-ground short would destroy both chips. Open-drain creates a safe wired-AND bus.',
                explanationPa:
                  'ਤਾਂ ਜੋ ਜੇਕਰ ਦੋ ਚਿਪਸ ਇਕੱਠੀਆਂ ਤਾਰ ਨੂੰ ਦਬਾਉਣ, ਤਾਂ ਸ਼ਾਰਟ ਸਰਕਟ ਨਾ ਹੋਵੇ ਅਤੇ ਦੋਵੇਂ ਸੁਰੱਖਿਅਤ ਰਹਿਣ (Wired-AND)।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Volatile Qualifier',
                promptEn: 'Why MUST a C variable modified inside a hardware Interrupt Service Routine (ISR) be declared with the "volatile" keyword?',
                promptPa: 'ISR ਵਿੱਚ ਬਦਲਣ ਵਾਲੇ ਵੇਰੀਏਬਲ ਅੱਗੇ "volatile" ਲਿਖਣਾ ਕਿਉਂ ਲਾਜ਼ਮੀ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'To prevent the optimizing compiler from caching the variable in a CPU register, forcing it to read the real value from SRAM every time',
                  'To allocate the variable in Flash memory instead of RAM',
                  'To make the variable execute faster than the clock',
                  'To encrypt the variable against hackers',
                ],
                correctAnswer: 'To prevent the optimizing compiler from caching the variable in a CPU register, forcing it to read the real value from SRAM every time',
                explanationEn:
                  'Without volatile, the compiler assumes the loop variable never changes and caches it in a register, causing the main loop to ignore updates made by the ISR.',
                explanationPa:
                  'ਕੰਪਾਈਲਰ ਨੂੰ ਇਹ ਦੱਸਣ ਲਈ ਕਿ ਇਹ ਵੈਲਿਊ ਹਾਰਡਵੇਅਰ ਰਾਹੀਂ ਕਦੇ ਵੀ ਬਦਲ ਸਕਦੀ ਹੈ, ਤਾਂ ਜੋ ਉਹ ਹਮੇਸ਼ਾ ਅਸਲ ਰੈਮ ਵਿੱਚੋਂ ਨਵਾਂ ਮੁੱਲ ਪੜ੍ਹੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Floating Input',
                promptEn: 'What happens if a microcontroller digital input pin is configured as "Floating Input" with no external resistor connected to a push-button switch?',
                promptPa: 'ਜੇਕਰ ਇਨਪੁਟ ਪਿੰਨ ਬਿਨਾਂ ਪੁੱਲ-ਅੱਪ ਰਜਿਸਟਰ ਦੇ ਖ਼ਾਲੀ (Floating) ਛੱਡ ਦਿੱਤੀ ਜਾਵੇ ਤਾਂ ਬਟਨ ਖੁੱਲ੍ਹਾ ਹੋਣ ਤੇ ਕੀ ਹੋਵੇਗਾ?',
                optionsJson: [
                  'The pin acts as an antenna, picking up electrostatic and 50Hz mains noise, causing rapid erratic switching between 0 and 1',
                  'The pin automatically defaults to a clean 3.3 V',
                  'The microcontroller will blow an internal fuse',
                  'The clock frequency drops to zero',
                ],
                correctAnswer: 'The pin acts as an antenna, picking up electrostatic and 50Hz mains noise, causing rapid erratic switching between 0 and 1',
                explanationEn:
                  'A high-impedance floating pin has no deterministic voltage path. Stray capacitance and ambient electromagnetic fields cause unpredictable phantom button presses.',
                explanationPa:
                  'ਪਿੰਨ ਐਂਟੀਨਾ ਵਾਂਗ ਹਵਾ ਵਿੱਚੋਂ ਸ਼ੋਰ ਫੜਨ ਲੱਗ ਪੈਂਦੀ ਹੈ ਅਤੇ ਬਿਨਾਂ ਬਟਨ ਦਬਾਏ ਆਪਣੇ-ਆਪ 0 ਅਤੇ 1 ਦੇ ਵਿਚਕਾਰ ਕੰਬਣ ਲੱਗ ਪੈਂਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Interrupt Latency',
                promptEn: 'An 80 MHz ARM Cortex-M microcontroller requires 12 clock cycles of interrupt entry latency. What is the interrupt latency in nanoseconds?',
                promptPa: '80 MHz ਕਲਾਕ ਉੱਤੇ ਚੱਲ ਰਹੇ ਕੰਟਰੋਲਰ ਨੂੰ ਇੰਟਰੱਪਟ ਸ਼ੁਰੂ ਕਰਨ ਲਈ 12 ਸਾਈਕਲ ਲੱਗਦੇ ਹਨ। ਇਹ ਦੇਰੀ ਕਿੰਨੇ ਨੈਨੋਸਕਿੰਟ ਹੈ?',
                optionsJson: ['150 nanoseconds', '12 nanoseconds', '80 nanoseconds', '1.5 microseconds'],
                correctAnswer: '150 nanoseconds',
                explanationEn:
                  'One clock cycle = 1 / (80 * 10^6 Hz) = 12.5 ns. Latency = 12 * 12.5 ns = 150 ns.',
                explanationPa:
                  '1 ਕਲਾਕ = 12.5 ns। 12 ਸਾਈਕਲ = 12 * 12.5 = 150 ਨੈਨੋਸਕਿੰਟ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Interrupt Vector Table',
                promptEn: 'What is the purpose of the Interrupt Vector Table (IVT) in microcontroller architecture?',
                promptPa: 'ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਵਿੱਚ Interrupt Vector Table (IVT) ਦਾ ਕੀ ਕੰਮ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'An array of memory pointers that maps each hardware interrupt source to its corresponding ISR function address in Flash',
                  'A list of mathematical vector formulas',
                  'A table of ADC conversion values',
                  'A list of all variables stored in EEPROM',
                ],
                correctAnswer: 'An array of memory pointers that maps each hardware interrupt source to its corresponding ISR function address in Flash',
                explanationEn:
                  'The IVT is located at the beginning of Flash memory. When an interrupt fires, the CPU hardware looks up its slot in the table to jump to the correct ISR handler.',
                explanationPa:
                  'ਇਹ ਫੰਕਸ਼ਨਾਂ ਦੇ ਪਤਿਆਂ (Addresses) ਦੀ ਸੂਚੀ ਹੁੰਦੀ ਹੈ ਜੋ ਦੱਸਦੀ ਹੈ ਕਿ ਕਿਹੜਾ ਬਟਨ ਦਬਣ ਤੇ ਕਿਹੜਾ ਕੋਡ ਚਲਾਉਣਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Watchdog Timer',
                promptEn: 'What is the vital role of an Independent Watchdog Timer (IWDG) in an industrial embedded microcontroller?',
                promptPa: 'ਇੰਡਸਟਰੀਅਲ ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਵਿੱਚ ਵਾਚਡੌਗ ਟਾਈਮਰ (Watchdog Timer) ਦਾ ਕੀ ਕੰਮ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'To automatically hardware-reset the microcontroller if firmware freezes or gets trapped in an infinite deadlock loop',
                  'To keep accurate date and time during power outages',
                  'To measure the temperature of the CPU core',
                  'To monitor battery state of charge',
                ],
                correctAnswer: 'To automatically hardware-reset the microcontroller if firmware freezes or gets trapped in an infinite deadlock loop',
                explanationEn:
                  'The firmware must periodically "kick" or reload the watchdog countdown. If code hangs or deadlocks, the timer expires and forces an automatic hardware reset.',
                explanationPa:
                  'ਜੇਕਰ ਸਾਫਟਵੇਅਰ ਹੈਂਗ ਹੋ ਜਾਵੇ ਜਾਂ ਫਸ ਜਾਵੇ, ਤਾਂ ਵਾਚਡੌਗ ਟਾਈਮਰ ਆਪਣੇ-ਆਪ ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਨੂੰ ਰੀਸਟਾਰਟ ਕਰ ਦਿੰਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Internal Pull-Up',
                promptEn: 'What is the typical internal pull-up resistor value integrated inside common microcontrollers (such as ATmega328P or STM32)?',
                promptPa: 'ਆਮ ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰਾਂ ਵਿੱਚ ਅੰਦਰੂਨੀ ਪੁੱਲ-ਅੱਪ ਰਜਿਸਟਰ ਦਾ ਮੁੱਲ ਲਗਭਗ ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?',
                optionsJson: ['30 kΩ to 50 kΩ', '10 Ω', '10 MΩ', '100 Ω'],
                correctAnswer: '30 kΩ to 50 kΩ',
                explanationEn:
                  'Internal weak pull-ups are typically 30 kΩ to 50 kΩ, providing enough pull current (~70-100 µA) without draining excessive battery power when closed.',
                explanationPa:
                  'ਇਹ ਲਗਭਗ 30 kΩ ਤੋਂ 50 kΩ ਹੁੰਦਾ ਹੈ ਜੋ ਬਟਨ ਲਈ ਕਾਫੀ ਹੁੰਦਾ ਹੈ ਅਤੇ ਬੈਟਰੀ ਵੀ ਬਚਾਉਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Stack Pointer',
                promptEn: 'What CPU register tracks the current top memory address of the runtime execution call stack in SRAM?',
                promptPa: 'CPU ਦਾ ਕਿਹੜਾ ਰਜਿਸਟਰ ਸਟੈਕ ਮੈਮੋਰੀ ਦੇ ਮੌਜੂਦਾ ਸਿਰਨਾਵੇਂ ਨੂੰ ਟਰੈਕ ਕਰਦਾ ਹੈ?',
                optionsJson: ['Stack Pointer (SP)', 'Program Counter (PC)', 'Accumulator (ACC)', 'Instruction Register (IR)'],
                correctAnswer: 'Stack Pointer (SP)',
                explanationEn:
                  'The Stack Pointer (SP) points to the last allocated byte on the stack in SRAM, decrementing on PUSH and incrementing on POP.',
                explanationPa:
                  'ਸਟੈਕ ਪੁਆਇੰਟਰ (Stack Pointer - SP) ਰੈਮ ਵਿੱਚ ਸਟੈਕ ਦੀ ਸਭ ਤੋਂ ਉੱਪਰਲੀ ਥਾਂ ਨੂੰ ਟਰੈਕ ਕਰਦਾ ਹੈ।',
              },
            ],
          },
        },
        {
          slug: 'mcu-timers-pwm-adc-serial-protocols',
          orderIndex: 2,
          titleEn: '8.2 Hardware Timers, PWM, 12-Bit ADCs & Serial Protocols (UART, SPI, I2C, CAN)',
          titlePa: '8.2 ਹਾਰਡਵੇਅਰ ਟਾਈਮਰ, PWM, 12-ਬਿੱਟ ADC ਅਤੇ ਸੀਰੀਅਲ ਪ੍ਰੋਟੋਕੋਲ (UART, SPI, I2C, CAN)',
          objectivesJson: [
            'Configure 16-bit/32-bit hardware timers: Prescalers, Auto-Reload Registers (ARR), and Output Compare for frequency synthesis',
            'Generate Pulse-Width Modulation (PWM) with configurable duty cycle and resolution for DC motor control and LED dimming',
            'Model Successive Approximation Register (SAR) ADCs calculating LSB voltage resolution (V_lsb = Vref / 4096) and sample-and-hold acquisition',
            'Analyze serial bus protocols: asynchronous UART framing, high-speed full-duplex SPI (CPOL/CPHA), multi-drop 2-wire I2C, and fault-tolerant differential automotive CAN bus',
            'Debug embedded firmware via Serial Wire Debug (SWD) and JTAG hardware breakpoints and trace buffers',
          ],
          prerequisitesJson: ['8.1 MCU Architecture, Memory (Flash/SRAM), GPIOs & Interrupts (ISR)'],
          childAnalogyEn:
            'Think of different ways people talk! UART is like two friends talking on walkie-talkies: one speaks, then the other listens at the agreed code speed (baud rate). SPI is like an Olympic rowing crew: the stroke master beats a drum (Clock wire), and all rowers pull oars in perfect lockstep at blazing megahertz speeds! I2C is like a busy classroom: the teacher calls a student’s roll number (7-bit address), and only that student replies with an "ACK" while everyone else stays quiet! CAN bus is like a noisy Punjabi railway station where priority trains get the green track first!',
          childAnalogyPa:
            'ਆਪਸੀ ਗੱਲਬਾਤ ਦੇ ਵੱਖ-ਵੱਖ ਤਰੀਕਿਆਂ ਦੀ ਕਲਪਨਾ ਕਰੋ! UART ਦੋ ਦੋਸਤਾਂ ਵੱਲੋਂ ਵਾਕੀ-ਟਾਕੀ ਤੇ ਗੱਲ ਕਰਨ ਵਾਂਗ ਹੈ: ਦੋਵੇਂ ਪਹਿਲਾਂ ਤੋਂ ਤੈਅ ਸਪੀਡ (Baud Rate) ਤੇ ਬੋਲਦੇ ਤੇ ਸੁਣਦੇ ਹਨ। SPI ਢੋਲ ਦੇ ਡਗੇ ਤੇ ਦੌੜਦੀ ਕਿਸ਼ਤੀ ਵਾਂਗ ਹੈ: ਇੱਕ ਕਲਾਕ ਤਾਰ ਢੋਲ ਵਜਾਉਂਦੀ ਹੈ ਅਤੇ ਸਾਰੇ ਪੁਰਜ਼ੇ ਤੇਜ਼ ਰਫ਼ਤਾਰ ਤੇ ਡਾਟਾ ਭੇਜਦੇ ਹਨ! I2C ਸਕੂਲ ਦੀ ਜਮਾਤ ਵਾਂਗ ਹੈ: ਮਾਸਟਰ ਰੋਲ ਨੰਬਰ (7-ਬਿੱਟ ਐਡਰੈੱਸ) ਬੋਲਦਾ ਹੈ, ਅਤੇ ਸਿਰਫ਼ ਉਹੀ ਵਿਦਿਆਰਥੀ "ਹਾਜ਼ਰ ਜੀ (ACK)" ਕਹਿੰਦਾ ਹੈ! CAN ਬੱਸ ਰੇਲਵੇ ਸਿਸਟਮ ਵਾਂਗ ਹੈ ਜਿੱਥੇ ਐਮਰਜੈਂਸੀ ਰੇਲ ਗੱਡੀਆਂ ਨੂੰ ਪਹਿਲ ਮਿਲਦੀ ਹੈ!',
          technicalExplanationEn:
            'Embedded microcontrollers bridge analog physical reality with digital computation through specialized peripheral hardware blocks:\n\n1. Hardware Timers & PWM Generation:\n• Timer Equation: f_update = f_clock / [(Prescaler + 1) * (AutoReload + 1)].\n• PWM Duty Cycle: Duty = (CCR_register / AutoReload) * 100%.\n• Center-aligned vs Edge-aligned PWM: Center-aligned doubles switching frequency but slashes motor acoustic electromagnetic noise.\n\n2. Analog-to-Digital Converters (12-Bit SAR ADC):\n• Resolution: N = 12 bits -> 2^12 = 4096 quantization levels.\n• Least Significant Bit (LSB): V_lsb = V_ref / 4096 (e.g., for 3.3V Vref, V_lsb = 0.805 mV).\n• Measured Voltage: V_in = (ADC_reading * V_ref) / 4095.\n• Input Sampling & Acquisition Time: The internal sample-and-hold capacitor (typically 5-10 pF) requires a minimum acquisition time t_acq ≥ 9 * R_source * C_adc to settle within 0.5 LSB.\n\n3. Serial Communication Protocols:\n• UART (Universal Asynchronous Receiver-Transmitter): Point-to-point, full duplex, two wires (TX, RX). Frame: 1 Start bit (low), 8 Data bits (LSB first), optional Parity bit, 1 Stop bit (high). Standard bauds: 9600, 115200, 921600 bps.\n• SPI (Serial Peripheral Interface): Synchronous, 4 wires: SCK (Clock), MOSI (Master Out Slave In), MISO (Master In Slave Out), CS/SS (Chip Select active low). Up to 50-100 MHz. Modes defined by CPOL (clock idle state) and CPHA (sampling edge).\n• I2C (Inter-Integrated Circuit): Synchronous, multi-master/multi-slave, 2 open-drain wires (SDA data, SCL clock) with pull-up resistors. 7-bit addressing, Start/Stop conditions, 9th-bit ACK/NACK handshake. Speeds: Standard (100 kHz), Fast (400 kHz), Fast-Plus (1 MHz).\n• CAN Bus (Controller Area Network): Differential 2-wire (CAN_H, CAN_L) terminated with 120 Ω at each end. Dominant bit (0) overwrites Recessive bit (1), enabling non-destructive bitwise arbitration for automotive safety-critical ECUs.\n\n4. Hardware Debugging:\n• SWD (Serial Wire Debug): 2-wire ARM interface (SWCLK, SWDIO) providing non-intrusive memory inspection, live variable watch, and hardware breakpoints.',
          technicalExplanationPa:
            'ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਪੈਰੀਫਿਰਲ ਅਤੇ ਸੀਰੀਅਲ ਪ੍ਰੋਟੋਕੋਲ:\n\n1. ਟਾਈਮਰ ਅਤੇ PWM:\nਮੋਟਰਾਂ ਦੀ ਸਪੀਡ ਅਤੇ LED ਦੀ ਰੌਸ਼ਨੀ ਕੰਟਰੋਲ ਕਰਨ ਲਈ PWM ਪਲਸਾਂ ਬਣਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ: Duty = (CCR / ARR) * 100%।\n\n2. 12-ਬਿੱਟ ADC (Analog to Digital Converter):\nਐਨਾਲਾਗ ਵੋਲਟੇਜ (0 ਤੋਂ 3.3V) ਨੂੰ 0 ਤੋਂ 4095 ਤੱਕ ਦੇ ਡਿਜੀਟਲ ਨੰਬਰਾਂ ਵਿੱਚ ਬਦਲਦਾ ਹੈ। 1 ਕਾਊਂਟ = 3.3V / 4096 = 0.8 ਮਿਲੀਵੋਲਟ ਹੁੰਦਾ ਹੈ।\n\n3. ਸੀਰੀਅਲ ਪ੍ਰੋਟੋਕੋਲ:\n• UART: 2 ਤਾਰਾਂ (TX, RX)। ਬਲੂਟੁੱਥ ਅਤੇ ਕੰਪਿਊਟਰ ਸੀਰੀਅਲ ਪੋਰਟ ਨਾਲ ਗੱਲ ਕਰਨ ਲਈ (ਜਿਵੇਂ 115200 Baud)।\n• SPI: 4 ਤਾਰਾਂ (SCK, MOSI, MISO, CS)। ਬਹੁਤ ਤੇਜ਼ ਰਫ਼ਤਾਰ (50 MHz) ਉੱਤੇ ਸਕ੍ਰੀਨਾਂ (TFT Display) ਅਤੇ SD ਕਾਰਡ ਚਲਾਉਣ ਲਈ।\n• I2C: 2 ਤਾਰਾਂ (SDA, SCL)। ਸੈਂਸਰਾਂ ਨੂੰ ਜੋੜਨ ਲਈ, ਹਰ ਸੈਂਸਰ ਦਾ ਆਪਣਾ 7-ਬਿੱਟ ਐਡਰੈੱਸ ਹੁੰਦਾ ਹੈ।\n• CAN Bus: ਗੱਡੀਆਂ (ਕਾਰਾਂ, ਟਰੱਕਾਂ) ਵਿੱਚ ਬ੍ਰੇਕਾਂ, ਇੰਜਣ ਅਤੇ ਏਅਰਬੈਗ ਵਿਚਕਾਰ ਪੱਥਰ-ਵਰਗਾ ਮਜ਼ਬੂਤ ਸੰਚਾਰ।\n\n4. SWD / JTAG:\nਕੰਪਿਊਟਰ ਨਾਲ ਜੋੜ ਕੇ ਕੋਡ ਨੂੰ ਲਾਈਵ ਰੋਕਣ (Breakpoints) ਅਤੇ ਰੈਮ ਦੀ ਹਰ ਵੈਲਿਊ ਚੈੱਕ ਕਰਨ ਵਾਲਾ ਇੰਜੀਨੀਅਰਿੰਗ ਟੂਲ।',
          practicalExampleEn:
            'Automotive ABS brake control unit communicating with an Engine ECU: Uses high-speed CAN bus at 500 kbps over a twisted pair terminated with 120 Ω resistors. When an emergency braking event occurs, the ABS controller transmits a high-priority message ID (e.g. 0x010). Because 0 is dominant on the CAN bus, this message automatically wins bitwise arbitration against non-critical messages (like climate control 0x500), forcing the engine ECU to instantly cut throttle torque in under 1 millisecond without losing a single data bit.',
          practicalExamplePa:
            'ਕਾਰ ਦੇ ABS ਬ੍ਰੇਕ ਕੰਟਰੋਲਰ ਅਤੇ ਇੰਜਣ ਵਿਚਕਾਰ CAN ਬੱਸ: ਦੋ ਮਰੋੜੀਆਂ ਹੋਈਆਂ ਤਾਰਾਂ (Twisted Pair) ਉੱਤੇ 500 kbps ਦੀ ਸਪੀਡ ਨਾਲ ਚਲਦੀ ਹੈ। ਜਦੋਂ ਐਮਰਜੈਂਸੀ ਬ੍ਰੇਕ ਲੱਗਦੀ ਹੈ, ਤਾਂ ABS ਦਾ ਸੁਨੇਹਾ ਸਭ ਤੋਂ ਵੱਧ ਪ੍ਰਾਥਮਿਕਤਾ (Priority 0x010) ਵਾਲਾ ਹੁੰਦਾ ਹੈ। ਇਹ AC ਜਾਂ ਰੇਡੀਓ ਦੇ ਸੁਨੇਹਿਆਂ ਨੂੰ ਪਿੱਛੇ ਧੱਕ ਕੇ 1 ਮਿਲੀਸਕਿੰਟ ਵਿੱਚ ਇੰਜਣ ਦੀ ਰੇਸ ਕੱਟ ਦਿੰਦਾ ਹੈ ਅਤੇ ਦੁਰਘਟਨਾ ਹੋਣ ਤੋਂ ਰੋਕ ਲੈਂਦਾ ਹੈ।',
          codeDemo: `// TypeScript: ADC Voltage Converter & Hardware Timer Sizer
export function convertAdcReadingToVoltage(adcCount: number, vRef = 3.3, resolutionBits = 12): number {
  const maxCount = Math.pow(2, resolutionBits) - 1;
  if (adcCount < 0 || adcCount > maxCount) throw new Error('ADC count out of valid range');
  return (adcCount * vRef) / maxCount;
}

export function calcTimerPwmFrequency(timerClockHz: number, prescaler: number, autoReload: number) {
  const updateFreqHz = timerClockHz / ((prescaler + 1) * (autoReload + 1));
  return { updateFreqHz };
}

// Verification: 12-bit ADC reading 2048 with 3.3V reference:
const v = convertAdcReadingToVoltage(2048, 3.3, 12);
console.log('ADC Voltage:', v.toFixed(3), 'V'); // ~1.650 V (Mid-scale)

// STM32 Timer: 72 MHz clock, Prescaler=71 (1 MHz tick), ARR=999 -> 1000 Hz PWM:
const pwm = calcTimerPwmFrequency(72e6, 71, 999);
console.log('PWM Frequency:', pwm.updateFreqHz.toFixed(1), 'Hz'); // 1000.0 Hz`,
          misconceptionsJson: [
            {
              myth: 'SPI and I2C buses can communicate over long cable runs of 50 to 100 meters across a factory floor.',
              truthEn:
                'SPI and I2C are strictly chip-to-chip on-board protocols. Cable runs greater than a few meters accumulate massive parasitic capacitance (>400 pF), destroying signal rise times and causing complete data corruption. Long industrial distances mandate differential transceivers like RS-485 or CAN bus.',
              truthPa:
                'SPI ਅਤੇ I2C ਸਿਰਫ਼ ਇੱਕੋ ਸਰਕਟ ਬੋਰਡ ਉੱਤੇ ਚਿਪਸ ਨੂੰ ਆਪਸ ਵਿੱਚ ਜੋੜਨ ਲਈ ਹੁੰਦੇ ਹਨ। ਇਹਨਾਂ ਨੂੰ 50 ਮੀਟਰ ਲੰਮੀ ਤਾਰ ਤੇ ਨਹੀਂ ਲਿਜਾਇਆ ਜਾ ਸਕਦਾ। ਦੂਰ ਲਈ CAN ਬੱਸ ਜਾਂ RS-485 ਵਰਤਣੀ ਪੈਂਦੀ ਹੈ।',
            },
            {
              myth: 'A 12-bit ADC connected to a 3.3V rail always provides 12 effective, noise-free bits of resolution.',
              truthEn:
                'Real-world ADCs suffer thermal noise, quantization jitter, and power rail ripple. The Effective Number of Bits (ENOB) of a typical microcontroller 12-bit ADC is rarely better than 10.2 to 10.8 bits without external clean precision voltage references and oversampling.',
              truthPa:
                '12-ਬਿੱਟ ADC ਦਾ ਮਤਲਬ ਇਹ ਨਹੀਂ ਕਿ ਸਾਰੇ 12 ਬਿੱਟ ਸ਼ੁੱਧ ਹੋਣਗੇ। ਬਿਜਲੀ ਦੇ ਸ਼ੋਰ ਕਾਰਨ ਆਖਰੀ 2 ਬਿੱਟ ਲਗਾਤਾਰ ਕੰਬਦੇ ਰਹਿੰਦੇ ਹਨ, ਜਿਸ ਕਾਰਨ ਅਸਲ ਸ਼ੁੱਧਤਾ ਲਗਭਗ 10 ਬਿੱਟ (ENOB) ਹੀ ਹੁੰਦੀ ਹੈ।',
            },
            {
              myth: 'CAN bus requires dedicated master and slave designations like SPI.',
              truthEn:
                'CAN is a multi-master peer-to-peer broadcast network with zero node addresses. Messages carry message IDs that designate the data type and priority, not destination addresses. Any node can transmit when the bus is idle.',
              truthPa:
                'CAN ਬੱਸ ਵਿੱਚ ਕੋਈ ਮਾਸਟਰ ਜਾਂ ਸਲੇਵ ਨਹੀਂ ਹੁੰਦਾ। ਹਰ ਕੰਟਰੋਲਰ ਸੁਤੰਤਰ ਹੁੰਦਾ ਹੈ ਅਤੇ ਮੈਸੇਜ ਦੀ ਅਹਿਮੀਅਤ (ID) ਤੈਅ ਕਰਦੀ ਹੈ ਕਿ ਕਿਹੜਾ ਸੁਨੇਹਾ ਪਹਿਲਾਂ ਜਾਵੇਗਾ।',
            },
          ],
          terminologyJson: [
            {
              term: 'SAR ADC (Successive Approximation Register)',
              punjabi: 'SAR ADC',
              meaningEn: 'High-speed analog-to-digital converter using a binary search algorithm through comparator testing.',
              meaningPa: 'ਬਾਈਨਰੀ ਸਰਚ ਰਾਹੀਂ ਐਨਾਲਾਗ ਵੋਲਟੇਜ ਨੂੰ ਬਹੁਤ ਤੇਜ਼ੀ ਨਾਲ ਡਿਜੀਟਲ ਵਿੱਚ ਬਦਲਣ ਵਾਲੀ ਚਿੱਪ।',
            },
            {
              term: 'PWM (Pulse-Width Modulation)',
              punjabi: 'PWM (ਪਲਸ-ਵਿਡਥ ਮੌਡੂਲੇਸ਼ਨ)',
              meaningEn: 'Method of synthesizing variable analog equivalent power by rapidly toggling a digital signal at varied duty cycles.',
              meaningPa: 'ਡਿਜੀਟਲ ਪਲਸਾਂ ਦੀ ਚੌੜਾਈ ਬਦਲ ਕੇ ਮੋਟਰਾਂ ਜਾਂ LED ਦੀ ਪਾਵਰ ਕੰਟਰੋਲ ਕਰਨ ਦਾ ਤਰੀਕਾ।',
            },
            {
              term: 'SPI (Serial Peripheral Interface)',
              punjabi: 'SPI ਪ੍ਰੋਟੋਕੋਲ',
              meaningEn: 'Synchronous four-wire full-duplex serial communication interface capable of multi-megahertz data transfers.',
              meaningPa: 'ਹਾਈ-ਸਪੀਡ 4-ਤਾਰਾਂ ਵਾਲਾ ਸੀਰੀਅਲ ਡਾਟਾ ਪ੍ਰੋਟੋਕੋਲ ਜੋ ਸਕ੍ਰੀਨਾਂ ਅਤੇ SD ਕਾਰਡ ਚਲਾਉਂਦਾ ਹੈ।',
            },
            {
              term: 'I2C (Inter-Integrated Circuit)',
              punjabi: 'I2C ਪ੍ਰੋਟੋਕੋਲ',
              meaningEn: 'Synchronous two-wire bidirectional serial bus using open-drain lines (SDA, SCL) and 7-bit addressing.',
              meaningPa: 'ਸਿਰਫ਼ 2 ਤਾਰਾਂ ਵਾਲਾ ਸੀਰੀਅਲ ਬੱਸ ਪ੍ਰੋਟੋਕੋਲ ਜਿਸ ਨਾਲ ਦਰਜਨਾਂ ਸੈਂਸਰ ਜੁੜ ਸਕਦੇ ਹਨ।',
            },
            {
              term: 'CAN Bus',
              punjabi: 'CAN ਬੱਸ (Controller Area Network)',
              meaningEn: 'Robust automotive differential bus providing non-destructive arbitration and high noise immunity.',
              meaningPa: 'ਗੱਡੀਆਂ ਅਤੇ ਉਦਯੋਗਾਂ ਵਿੱਚ ਨੁਕਸ-ਮੁਕਤ ਸੰਚਾਰ ਲਈ ਬਣਾਈ ਗਈ ਮਜ਼ਬੂਤ ਸੀਰੀਅਲ ਬੱਸ।',
            },
            {
              term: 'SWD (Serial Wire Debug)',
              punjabi: 'SWD ਡੀਬੱਗਿੰਗ ਪੋਰਟ',
              meaningEn: 'Two-pin ARM microcontroller hardware debug protocol replacing 5-pin JTAG for programming and live debugging.',
              meaningPa: 'ARM ਪ੍ਰੋਸੈਸਰਾਂ ਵਿੱਚ ਕੋਡ ਫਲੈਸ਼ ਕਰਨ ਅਤੇ ਲਾਈਵ ਗਲਤੀਆਂ ਲੱਭਣ ਲਈ 2-ਤਾਰਾਂ ਵਾਲਾ ਡੀਬੱਗ ਪੋਰਟ।',
            },
          ],
          interactiveLabId: 'cpu-cycle',
          exercisePromptEn:
            'Embedded Calculations: (1) A 12-bit ADC on an STM32 operates with an analog reference Vref = 3.30 V. If an analog sensor outputs 1.250 V, calculate the resulting integer ADC digital count. (2) You need to configure a 50 Hz servo PWM signal on a timer clocked at 48 MHz. If you set the Prescaler to 47 (giving a 1 MHz tick), what value must be written to the Auto-Reload Register (ARR)?',
          exercisePromptPa:
            'ਐਂਬੈੱਡਡ ਗਣਨਾ: (1) 3.3V ਰੈਫਰੈਂਸ ਵਾਲੇ 12-ਬਿੱਟ ADC ਨੂੰ 1.250V ਮਿਲਦੀ ਹੈ। ਇਸਦਾ ਡਿਜੀਟਲ ਨੰਬਰ (ADC Count) ਕੱਢੋ। (2) 48 MHz ਕਲਾਕ ਵਾਲੇ ਟਾਈਮਰ ਤੋਂ 50 Hz ਦਾ ਸਰਵੋ ਮੋਟਰ ਸਿਗਨਲ ਬਣਾਉਣ ਲਈ (Prescaler = 47), Auto-Reload Register (ARR) ਵਿੱਚ ਕੀ ਵੈਲਿਊ ਭਰਨੀ ਪਵੇਗੀ?',
          summaryEn:
            'Hardware timers, PWM generators, 12-bit SAR converters, and serial communication buses (UART, SPI, I2C, CAN) turn microcontrollers into the central nervous system of modern automotive, medical, and robotics engineering.',
          summaryPa:
            'ਹਾਰਡਵੇਅਰ ਟਾਈਮਰ, PWM, 12-ਬਿੱਟ ADC ਅਤੇ ਸੀਰੀਅਲ ਬੱਸਾਂ (UART, SPI, I2C, CAN) ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰਾਂ ਨੂੰ ਆਧੁਨਿਕ ਗੱਡੀਆਂ, ਰੋਬੋਟਾਂ ਅਤੇ ਮੈਡੀਕਲ ਯੰਤਰਾਂ ਦਾ ਦਿਮਾਗ਼ ਬਣਾਉਂਦੇ ਹਨ।',
          furtherReadingJson: [
            'Mastering STM32 by Carmine Noviello',
            'Controller Area Network (CAN) Basics by Texas Instruments Application Report SLOA101',
            'I2C Manual: Theory and Application by NXP Semiconductors',
          ],
          quiz: {
            titleEn: 'Level 8 Assessment: Timers, PWM, ADCs & Serial Buses',
            titlePa: 'ਲੈਵਲ 8 ਟੈਸਟ: ਟਾਈਮਰ, PWM, ADC ਅਤੇ ਸੀਰੀਅਲ ਪ੍ਰੋਟੋਕੋਲ',
            timeLimitSeconds: 600,
            passingScorePercent: 70,
            questions: [
              {
                questionType: 'mcq',
                topicTag: 'ADC Resolution',
                promptEn: 'What is the voltage resolution (1 LSB step) of a 12-bit ADC operating with a precision 3.30 V reference?',
                promptPa: '3.30V ਰੈਫਰੈਂਸ ਵਾਲੇ 12-ਬਿੱਟ ADC ਦੇ ਇੱਕ ਕਦਮ (1 LSB) ਦੀ ਵੋਲਟੇਜ ਕਿੰਨੀ ਹੁੰਦੀ ਹੈ?',
                optionsJson: ['Approximately 0.806 millivolts', '3.3 millivolts', '0.001 millivolts', '8.06 millivolts'],
                correctAnswer: 'Approximately 0.806 millivolts',
                explanationEn:
                  'V_lsb = Vref / (2^12) = 3.30 V / 4096 = 0.0008056 V ≈ 0.806 mV.',
                explanationPa:
                  'V_lsb = 3.30 / 4096 ≈ 0.000806 ਵੋਲਟ = 0.806 ਮਿਲੀਵੋਲਟ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Timer Frequency',
                promptEn: 'A microcontroller timer clocked at 16 MHz has Prescaler = 15 and Auto-Reload Register (ARR) = 999. What is its update frequency?',
                promptPa: '16 MHz ਕਲਾਕ ਵਾਲੇ ਟਾਈਮਰ ਵਿੱਚ Prescaler = 15 ਅਤੇ ARR = 999 ਹੈ। ਇਸਦੀ ਆਊਟਪੁੱਟ ਫ੍ਰੀਕੁਐਂਸੀ ਕਿੰਨੀ ਹੋਵੇਗੀ?',
                optionsJson: ['1000 Hz (1.0 kHz)', '16 kHz', '100 Hz', '1 MHz'],
                correctAnswer: '1000 Hz (1.0 kHz)',
                explanationEn:
                  'f = 16,000,000 / [(15 + 1) * (999 + 1)] = 16,000,000 / [16 * 1000] = 16,000,000 / 16,000 = 1000 Hz.',
                explanationPa:
                  'f = 16,000,000 / (16 * 1000) = 1000 Hz (1 kHz) ਹੁੰਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'UART Framing',
                promptEn: 'In a standard 8-N-1 UART serial frame, what logic level represents the Start Bit and what is its duration?',
                promptPa: 'ਸਟੈਂਡਰਡ 8-N-1 UART ਸੀਰੀਅਲ ਫਰੇਮ ਵਿੱਚ Start Bit ਕਿਹੜੀ ਹੁੰਦੀ ਹੈ?',
                optionsJson: [
                  'Logic 0 (low) for exactly 1 bit duration',
                  'Logic 1 (high) for 2 bit durations',
                  'A high-frequency AC pulse',
                  'An alternating 0-1 pair',
                ],
                correctAnswer: 'Logic 0 (low) for exactly 1 bit duration',
                explanationEn:
                  'An idle UART line sits high (logic 1). A transmission begins with a transition to logic 0 (Start bit) held for 1 bit period.',
                explanationPa:
                  'ਖ਼ਾਲੀ ਲਾਈਨ 1 ਹੁੰਦੀ ਹੈ; ਡਾਟਾ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਤਾਰ ਨੂੰ 1 ਬਿੱਟ ਸਮੇਂ ਲਈ 0 (Low) ਕੀਤਾ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'SPI Speed',
                promptEn: 'Why is the SPI protocol capable of reaching much higher data transfer rates (50+ MHz) than I2C (typically 400 kHz)?',
                promptPa: 'SPI ਪ੍ਰੋਟੋਕੋਲ I2C ਨਾਲੋਂ ਕਿਤੇ ਵੱਧ ਤੇਜ਼ ਸਪੀਡ (50+ MHz) ਉੱਤੇ ਕਿਉਂ ਚੱਲ ਸਕਦਾ ਹੈ?',
                optionsJson: [
                  'SPI uses push-pull lines and a dedicated clock without open-drain pull-up RC rise-time bottlenecks',
                  'SPI uses wireless radio waves',
                  'SPI transmits fewer bits per byte',
                  'SPI operates at 100 Volts',
                ],
                correctAnswer: 'SPI uses push-pull lines and a dedicated clock without open-drain pull-up RC rise-time bottlenecks',
                explanationEn:
                  'I2C open-drain lines rely on passive resistors to pull high, creating an RC charging curve that limits speed. SPI actively drives both high and low with push-pull MOSFETs.',
                explanationPa:
                  'I2C ਰਜਿਸਟਰਾਂ ਰਾਹੀਂ ਹੌਲੀ ਚੜ੍ਹਦਾ ਹੈ, ਜਦਕਿ SPI ਪੁਸ਼-ਪੁੱਲ ਟ੍ਰਾਂਜਿਸਟਰਾਂ ਨਾਲ ਜ਼ੋਰ ਨਾਲ ਤੇਜ਼ੀ ਨਾਲ ਚੜ੍ਹਦਾ ਤੇ ਡਿੱਗਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'I2C ACK Bit',
                promptEn: 'In an I2C transaction, how does a slave chip acknowledge receipt of an address or data byte?',
                promptPa: 'I2C ਬੱਸ ਵਿੱਚ ਸਲੇਵ ਚਿੱਪ ਡਾਟਾ ਬਾਈਟ ਮਿਲਣ ਦੀ ਪੁਸ਼ਟੀ (ACK) ਕਿਵੇਂ ਕਰਦੀ ਹੈ?',
                optionsJson: [
                  'It pulls the SDA data line LOW during the 9th clock pulse',
                  'It leaves the SDA line floating HIGH',
                  'It pulses the SCL clock twice',
                  'It resets its internal address',
                ],
                correctAnswer: 'It pulls the SDA data line LOW during the 9th clock pulse',
                explanationEn:
                  'The master releases SDA on the 9th clock pulse. If the slave pulls SDA Low, it signals an ACK (Acknowledge). If it stays High, it is a NACK.',
                explanationPa:
                  '9ਵੇਂ ਕਲਾਕ ਉੱਤੇ ਸਲੇਵ ਚਿੱਪ SDA ਤਾਰ ਨੂੰ ਹੇਠਾਂ (0V) ਖਿੱਚਦੀ ਹੈ, ਜਿਸਨੂੰ ACK (Acknowledge) ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'CAN Bus Termination',
                promptEn: 'Why MUST an automotive CAN bus have exactly a 120 Ω termination resistor at each of its two physical cable ends?',
                promptPa: 'ਕਾਰ ਦੀ CAN ਬੱਸ ਦੇ ਦੋਵਾਂ ਸਿਰਿਆਂ ਉੱਤੇ 120 ਓਹਮ ਦਾ ਰਜਿਸਟਰ ਲਗਾਉਣਾ ਕਿਉਂ ਲਾਜ਼ਮੀ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'To match the characteristic impedance of the twisted-pair cable, preventing destructive high-frequency signal reflections',
                  'To limit battery drain',
                  'To step up the signal to 12 Volts',
                  'To provide ground isolation',
                ],
                correctAnswer: 'To match the characteristic impedance of the twisted-pair cable, preventing destructive high-frequency signal reflections',
                explanationEn:
                  'Unterminated transmission lines cause high-speed differential signal waves to reflect back from cable ends, colliding with and corrupting incoming packets.',
                explanationPa:
                  'ਤਾਰ ਦੇ ਅੰਤ ਤੋਂ ਸਿਗਨਲ ਵਾਪਸ ਟਕਰਾ ਕੇ (ਰਿਫਲੈਕਸ਼ਨ) ਡਾਟਾ ਖ਼ਰਾਬ ਨਾ ਕਰੇ, ਇਸ ਲਈ 120 Ω ਦਾ ਟਰਮੀਨੇਸ਼ਨ ਰਜਿਸਟਰ ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'CAN Arbitration',
                promptEn: 'In CAN bus communication, if two nodes begin transmitting at the exact same microsecond, which message wins arbitration?',
                promptPa: 'ਜੇਕਰ ਦੋ ਕੰਪਿਊਟਰ ਇੱਕੋ ਸਮੇਂ CAN ਬੱਸ ਤੇ ਡਾਟਾ ਭੇਜਣ ਲੱਗ ਪੈਣ, ਤਾਂ ਕਿਸਦਾ ਸੁਨੇਹਾ ਜਿੱਤਦਾ ਹੈ?',
                optionsJson: [
                  'The message with the lower numerical Identifier (dominant 0 bits overwrite recessive 1 bits)',
                  'The message with the higher numerical Identifier',
                  'The node with the larger microcontroller RAM',
                  'Both messages are destroyed and dropped',
                ],
                correctAnswer: 'The message with the lower numerical Identifier (dominant 0 bits overwrite recessive 1 bits)',
                explanationEn:
                  'Dominant 0 overwrites recessive 1. When a node transmitting a 1 sees a 0 on the bus, it immediately halts transmission, allowing the lower-ID message to pass without delay.',
                explanationPa:
                  'ਜਿਸਦਾ ID ਨੰਬਰ ਛੋਟਾ ਹੁੰਦਾ ਹੈ (ਜਿਵੇਂ ਐਮਰਜੈਂਸੀ ਬ੍ਰੇਕ 0x010), ਉਹ ਜਿੱਤਦਾ ਹੈ ਕਿਉਂਕਿ 0 ਬਿੱਟ 1 ਉੱਤੇ ਭਾਰੀ ਪੈਂਦਾ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'SAR Sample and Hold',
                promptEn: 'Why does an ADC require a Sample-and-Hold (S/H) capacitor at its analog front-end?',
                promptPa: 'ADC ਦੇ ਅੱਗੇ ਸੈਂਪਲ-ਐਂਡ-ਹੋਲਡ (Sample and Hold) ਕੈਪਸੀਟਰ ਕਿਉਂ ਲੱਗਿਆ ਹੁੰਦਾ ਹੈ?',
                optionsJson: [
                  'To freeze and hold the analog voltage perfectly constant during the multi-microsecond SAR binary conversion process',
                  'To amplify the input voltage by 10x',
                  'To filter out all DC voltages',
                  'To measure the supply current',
                ],
                correctAnswer: 'To freeze and hold the analog voltage perfectly constant during the multi-microsecond SAR binary conversion process',
                explanationEn:
                  'If the input voltage changed during the successive approximation testing of each bit, the resulting digital code would be completely scrambled.',
                explanationPa:
                  'ਜਿੰਨੀ ਦੇਰ ਚਿੱਪ ਵੋਲਟੇਜ ਨਾਪਦੀ ਹੈ, ਓਨੀ ਦੇਰ ਕੈਪਸੀਟਰ ਵੋਲਟੇਜ ਨੂੰ ਬਿਲਕੁਲ ਸਥਿਰ ਫੜ ਕੇ ਰੱਖਦਾ ਹੈ ਤਾਂ ਜੋ ਰੀਡਿੰਗ ਨਾ ਹਿੱਲੇ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'Center-Aligned PWM',
                promptEn: 'What is the main engineering reason for using Center-Aligned PWM instead of Edge-Aligned PWM in three-phase brushless motor inverters?',
                promptPa: 'ਤਿੰਨ-ਫੇਜ਼ ਬੁਰਸ਼ਲੈੱਸ ਮੋਟਰਾਂ ਵਿੱਚ ਐੱਜ-ਅਲਾਈਨ ਦੀ ਬਜਾਏ ਸੈਂਟਰ-ਅਲਾਈਨ (Center-Aligned) PWM ਕਿਉਂ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?',
                optionsJson: [
                  'It spreads switching transitions symmetrically, cutting electromagnetic interference (EMI) and motor acoustic whine in half',
                  'It triples the microcontroller clock speed',
                  'It eliminates the need for MOSFETs',
                  'It allows motors to run backwards without code',
                ],
                correctAnswer: 'It spreads switching transitions symmetrically, cutting electromagnetic interference (EMI) and motor acoustic whine in half',
                explanationEn:
                  'Center-aligned PWM counts up and down, distributing current ripples symmetrically and canceling odd harmonic acoustic motor whine and EMI.',
                explanationPa:
                  'ਇਹ ਮੋਟਰ ਦੇ ਸ਼ੋਰ ਅਤੇ ਸੀਟੀ ਵਰਗੀ ਆਵਾਜ਼ (Acoustic Whine) ਨੂੰ ਅੱਧਾ ਕਰ ਦਿੰਦੀ ਹੈ ਅਤੇ ਬਿਜਲਈ ਸ਼ੋਰ (EMI) ਘਟਾਉਂਦੀ ਹੈ।',
              },
              {
                questionType: 'mcq',
                topicTag: 'SWD Interface',
                promptEn: 'Which two physical signals constitute the ARM Serial Wire Debug (SWD) interface?',
                promptPa: 'ARM ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ ਦੇ SWD ਡੀਬੱਗ ਪੋਰਟ ਵਿੱਚ ਕਿਹੜੀਆਂ 2 ਤਾਰਾਂ ਹੁੰਦੀਆਂ ਹਨ?',
                optionsJson: [
                  'SWDIO (bidirectional data) and SWCLK (clock)',
                  'TX and RX',
                  'SDA and SCL',
                  'MOSI and MISO',
                ],
                correctAnswer: 'SWDIO (bidirectional data) and SWCLK (clock)',
                explanationEn:
                  'ARM SWD uses just two dedicated pins: SWCLK (clock driven by debugger) and SWDIO (bidirectional data transfer for memory and CPU register access).',
                explanationPa:
                  'SWDIO (ਡਾਟਾ ਤਾਰ) ਅਤੇ SWCLK (ਕਲਾਕ ਤਾਰ)।',
              },
            ],
          },
        },
      ],
    },
  ],
};
