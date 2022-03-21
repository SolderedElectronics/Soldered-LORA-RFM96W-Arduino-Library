/**
 **************************************************
 *
 * @file        class_c_ABP.ino
 * @brief       Example to demonstrate sending using 
 *				ABP method which is very rarely used. It is needed
 *				to get credentials through TTN (TheThingsNetwork) 
 *				interface, otherwise this example will not work.
 *				
 *				This code is beerware; if you see me (or any other collaborator 
 * 				member) at the local, and you've found our code helpful, 
 * 				please buy us a round!
 * 				Distributed as-is; no warranty is given.
 *              
 *
 *
 *
 * @authors    	Ivan Moreno
 *        		Eduardo Contreras
 *  			June 2019
 *
 * Modified by: Soldered for use with www.soldered.com/333157 , www.soldered.com/333158
 *
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
///and Interrupt pin 0, if Dasduino ConnectPlus is used
/// (or any other ESP32 board) use pins(SS=27, RST=2, DIO0=32, MISO=33, MOSI=25,SCK=26)

#define LORAWAN		//Specify that module will be used for LoRaWAN network
#include "LoRa-SOLDERED.h"

//ABP Credentials 
const char *devAddr = "00000000";
const char *nwkSKey = "00000000000000000000000000000000";
const char *appSKey = "00000000000000000000000000000000";

const unsigned long interval = 20000;    // 10 s interval to send message
unsigned long previousMillis = 0;  // will store last time message sent
unsigned int counter = 0;     // message counter

char myStr[50];
char outStr[255];
byte recvStatus = 0;

//Pinout is changed here if necessary
const sRFM_pins RFM_pins = {
  .CS = 6,
  .RST = 7,
  .DIO0 = 8,
  .DIO1 = 9,
  .DIO2 = -1,
  .DIO5 = -1,
};


void setup() {
  // Setup loraid access
  Serial.begin(115200);
  delay(5000);
  Serial.println("Start..");
  if(!lora.init())	//Initialize lora and check if it is initialized successfully
  {
    Serial.println("RFM95 not detected");
    delay(5000);
    return;
  }

  // Set LoRaWAN Class change CLASS_A or CLASS_C
  lora.setDeviceClass(CLASS_C);

  // Set Data Rate
  lora.setDataRate(SF7BW125);

  // set channel to random
  lora.setChannel(MULTI);
  
  // Put ABP Key and DevAddress here
  lora.setNwkSKey(nwkSKey);
  lora.setAppSKey(appSKey);
  lora.setDevAddr(devAddr);
}

void loop() {
  
  // Check interval overflow
  if(millis() - previousMillis > interval) {
    previousMillis = millis(); 

    sprintf(myStr, "Counter-%d", counter); //Format string

    Serial.print("Sending: ");
    Serial.println(myStr);
    
    lora.sendUplink(myStr, strlen(myStr), 0, 1);	//Send to gateway
    counter++;
  }

  recvStatus = lora.readData(outStr); //Get data that LoRa has received
  if(recvStatus) {
    Serial.print("====>> ");
    Serial.println(outStr);
  }
  
  // Check Lora RX
  lora.update();	//Check if LoRa has received anything
}