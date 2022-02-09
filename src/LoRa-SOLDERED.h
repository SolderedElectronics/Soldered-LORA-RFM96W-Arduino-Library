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
