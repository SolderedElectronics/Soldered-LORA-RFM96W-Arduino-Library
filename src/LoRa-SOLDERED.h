/**
 **************************************************
 *
 * @file        LoRa-SOLDERED.h
 * @brief       Header file for sensor specific code.
 *
 *
 * @copyright GNU General Public License v3.0
 * @authors     Goran Juric @ soldered.com
 ***************************************************/

#include "Arduino.h"

// project-specific definitions
#define CFG_eu868 1
//#define CFG_us915 1
//#define CFG_au915 1
//#define CFG_as923 1
// #define LMIC_COUNTRY_CODE LMIC_COUNTRY_CODE_JP      /* for as923-JP; also define CFG_as923 */
//#define CFG_kr920 1
//#define CFG_in866 1
#define CFG_sx1276_radio 1
//#define LMIC_USE_INTERRUPTS


typedef uint8_t bit_t;
typedef uint8_t u1_t;
typedef int8_t s1_t;
typedef uint16_t u2_t;
typedef int16_t s2_t;
typedef uint32_t u4_t;
typedef int32_t s4_t;
typedef unsigned int uint;
typedef const char *str_t;

#ifdef LORAWAN

#include "arduino_lmic.h"

#endif

#ifdef LORA

#include "RH_RF95.h"

#endif
