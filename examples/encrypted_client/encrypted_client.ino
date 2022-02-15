/**
 **************************************************
 *
 * @file        rf95_server.ino
 * @brief       LoRa Simple Hello World Client with encrypted communications 
 *              In order for this to compile you MUST uncomment the #define RH_ENABLE_ENCRYPTION_MODULE line
 *              at the bottom of RadioHead.h, AND you MUST have installed the Crypto directory from arduinolibs:
 *              http://rweather.github.io/arduinolibs/index.html
 *
 *              product : www.soldered.com/333099
 *              
 *              Modified by soldered.com
 * 
 * @authors     Philippe.Rochat'at'gmail.com
 ***************************************************/

///                 Arduino      RFM95/96/97/98
///                 GND----------GND   (ground in)
///                 3V3----------3.3V  (3.3V in)
/// interrupt 0 pin D2-----------DIO0  (interrupt request out)
///          SS pin D10----------NSS   (CS chip select in)
///         SCK pin D13----------SCK   (SPI clock in)
///        MOSI pin D11----------MOSI  (SPI Data in)
///        MISO pin D12----------MISO  (SPI Data out)
/// This is pinout for Arduino Uno, if you are using other MCU, use SPI pins
///and Interrupt pin 0

#define LORA

#include <LoRa-SOLDERED.h>
#include <RHEncryptedDriver.h>
#include <Speck.h>

#define CS_PIN  15
#define INT_PIN 0

// Singleton instance of the radio driver
RH_RF95 rf95;
//RH_RF95 rf95(CS_PIN, INT_PIN); // Custom pins can be used

Speck myCipher;   // Instanciate a Speck block ciphering
RHEncryptedDriver myDriver(rf95, myCipher); // Instantiate the driver with those two

float frequency = 868.0; // Change the frequency here. 
unsigned char encryptkey[16] = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16}; // The very secret key
char HWMessage[] = "Hello World ! I'm happy if you can read me";
uint8_t HWMessageLen;

void setup()
{
  HWMessageLen = strlen(HWMessage);
  Serial.begin(9600);
  while (!Serial) ; // Wait for serial port to be available
  Serial.println("LoRa Simple_Encrypted Client");
  if (!rf95.init())
    Serial.println("LoRa init failed");
  // Setup ISM frequency
  rf95.setFrequency(frequency);
  // Setup Power,dBm
  rf95.setTxPower(13);
  myCipher.setKey(encryptkey, sizeof(encryptkey));
  Serial.println("Waiting for radio to setup");
  delay(1000);
  Serial.println("Setup completed");
}

void loop()
{
  uint8_t data[HWMessageLen+1] = {0};
  for(uint8_t i = 0; i<= HWMessageLen; i++) data[i] = (uint8_t)HWMessage[i];
  myDriver.send(data, sizeof(data)); // Send out ID + Sensor data to LoRa gateway
  Serial.print("Sent: ");
  Serial.println((char *)&data);
  delay(4000);
}
