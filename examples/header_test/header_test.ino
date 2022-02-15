/**
 **************************************************
 *
 * @file        header_test.ino
 * 
 * @brief       Simple hello-world (and compile-test) app
 *
 *              product : www.soldered.com/333099
 *              
 *              Modified by soldered.com
 * 
 * @authors     Terry Moore, MCCI Corporation	April 2018
 ***************************************************/

///                 Arduino      RFM95/96/97/98
///                 GND----------GND   (ground in)
///                 3V3----------3.3V  (3.3V in)
/// interrupt 0 pin D2-----------DIO0  (interrupt request out)
///                 D3-----------IO1   (IO pin 1)
///                 D5-----------RST   (Reset pin)
///          SS pin D10----------NSS   (CS chip select in)
///         SCK pin D13----------SCK   (SPI clock in)
///        MOSI pin D11----------MOSI  (SPI Data in)
///        MISO pin D12----------MISO  (SPI Data out)
/// This is pinout for Arduino Uno, if you are using other MCU, use SPI pins
///and Interrupt pin 0


#define LORAWAN

#include <LoRa-SOLDERED.h>

# define STATIC_ASSERT(e)	\
 void  STATIC_ASSERT__(int MCCIADK_C_ASSERT_x[(e) ? 1: -1])

STATIC_ASSERT(ARDUINO_LMIC_VERSION >= ARDUINO_LMIC_VERSION_CALC(2,1,5,0));

STATIC_ASSERT(ARDUINO_LMIC_VERSION_CALC(1,2,3,4) == 0x01020304);

STATIC_ASSERT(ARDUINO_LMIC_VERSION_GET_MAJOR(ARDUINO_LMIC_VERSION_CALC(1,2,3,4)) == 1);
STATIC_ASSERT(ARDUINO_LMIC_VERSION_GET_MINOR(ARDUINO_LMIC_VERSION_CALC(1,2,3,4)) == 2);
STATIC_ASSERT(ARDUINO_LMIC_VERSION_GET_PATCH(ARDUINO_LMIC_VERSION_CALC(1,2,3,4)) == 3);
STATIC_ASSERT(ARDUINO_LMIC_VERSION_GET_LOCAL(ARDUINO_LMIC_VERSION_CALC(1,2,3,4)) == 4);

void setup()
	{
	}

void loop()
	{
	}
