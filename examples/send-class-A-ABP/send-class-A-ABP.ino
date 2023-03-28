/**
 **************************************************
 *
 * @file        send-class-A-ABP.ino
 * @brief       Example to demonstrate sending using 
 *				ABP method which is very rarely used. It is needed
 *				to get credentials through TTN (TheThingsNetwork) 
 *	 			interface, otherwise this example will not work
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
 * Modified by: Soldered for use with www.soldered.com/333157 , www.soldered.com/333158
 *
 ***************************************************/

/**
 * How to run this example:
 * 0. Make sure you have a LoRa gateway nearby you can connect to (check ttnmapper.org)
 * 1. Go to TheThingsNetwork.org, make an account and go to your console, select your region
 * 2. Create an application, and register an end device
 * 3. Enter the device specifics manually, select according frequency plan to your region. For LoRaWAN version
 * use 1.0.2.
 * 4. Click "Show advanced activation LoRaWAN class and cluster settings" and select ABP
 * 5. Create the device and copy the generated codes as well
 * 6. Connect your Dasduiuno board to the breakout according to the diagrams here
 * 7. Upload the sketch and check if your device is sending data to TTN.
 *
 */

/**
 * Diagram for Dasduino ConnectPlus:
 * (Note that the 3v3 version of the breakout is required for Dasduino ConnectPlus)
 * Breakout                     Dasduino ConnectPlus
 * GND------------------------->GND
 * VCC------------------------->3V3
 * MISO------------------------>IO33
 * MOSI------------------------>IO25
 * SCK------------------------->26
 * CS-------------------------->27
 * RESET----------------------->IO0
 * DIO0------------------------>IO32
 * DIO1------------------------>15
 * DIO2------------------------>14
 * DIO5------------------------>13
 * 
 * Diagram for Dasduino Core:
 * (Note that the 5V version of the breakout is required for Dasduino Core)
 * Breakout                     Dasduino Core
 * GND------------------------->GND
 * VCC------------------------->VCC
 * OE-------------------------->VCC
 * MISO------------------------>D12
 * MOSI------------------------>D11
 * SCK------------------------->D13
 * CS-------------------------->D10
 * RESET----------------------->D9
 * DIO0------------------------>D2
 * DIO1------------------------>D3
 * DIO2------------------------>D4
 * DIO5------------------------>D7
 * 
 */

#define LORAWAN		//Specify that module will be used for LoRaWAN network
#include "LoRa-SOLDERED.h"

//ABP Credentials 
const char *devAddr = "00000000";
const char *nwkSKey = "00000000000000000000000000000000";
const char *appSKey = "00000000000000000000000000000000";

const unsigned long interval = 10000;    // 10 s interval to send message
unsigned long previousMillis = 0;  // will store last time message sent
unsigned int counter = 0;     // message counter

char myStr[50];
char outStr[255];
byte recvStatus = 0;

//Pinout is changed here if necessary
const sRFM_pins RFM_pins = {
  .CS = 27,
  .RST = 0,
  .DIO0 = 32,
  .DIO1 = 15,
  .DIO2 = 14,
  .DIO5 = 13,
};

void setup() {
  // Setup loraid access
  Serial.begin(9600);  //Initialize serial communication with PC
  while(!Serial);
  if(!lora.init())	//Initialize lora and check if it is initialized successfully
  {
    Serial.println("RFM95 not detected");
    delay(5000);
    return;
  }

  // Set LoRaWAN Class change CLASS_A or CLASS_C
  lora.setDeviceClass(CLASS_A);

  //The spreading factor controls the chirp rate, and thus controls the speed of data transmission. 
  //Lower spreading factors mean faster chirps and therefore a higher data transmission rate. 
  //For every increase in spreading factor, the chirp sweep rate is halved, 
  //and so the data transmission rate is halved.
  //Lower spreading factors reduce the range of LoRa transmissions, because they reduce 
  //the processing gain and increase the bit rate. Changing spreading factor allows the network 
  //to increase or decrease data rate for each end device at the cost of range.
  //The network also uses spreading factors to control congestion. Spreading factors are orthogonal,
  //so signals modulated with different spreading factors and transmitted on the same frequency channel
  //at the same time do not interfere with each other.
  //Bandwidth is the difference between the upper and lower frequencies in a continuous band of frequencies. 
  //It is typically measured in hertz, and depending on context, may specifically refer to passband bandwidth 
  //or baseband bandwidth.
  //LoRa uses spreading factors from 7 to 12 and bandwidths 125 kHz (or 500kHz but only for spread factor 7).
  lora.setDataRate(SF9BW125);

  // set channel to random
  lora.setChannel(MULTI);
  
  // Put ABP Key and DevAddress here
  lora.setNwkSKey(nwkSKey);
  lora.setAppSKey(appSKey);
  lora.setDevAddr(devAddr);
}

void loop() {
  // Check interval overflow
  if(millis() - previousMillis > interval)
  {
    previousMillis = millis(); 

    sprintf(myStr, "Counter-%d", counter);  //Format string

    Serial.print("Sending: ");
    Serial.println(myStr);
    
    lora.sendUplink(myStr, strlen(myStr), 0, 1);  //Send data to gateway
    counter++;
  }

  recvStatus = lora.readData(outStr);  //Get data that LoRa has received
  if(recvStatus)
  {
    Serial.println(outStr);
  }
  
  // Check Lora RX
  lora.update();  //Check if LoRa has received anything
}
