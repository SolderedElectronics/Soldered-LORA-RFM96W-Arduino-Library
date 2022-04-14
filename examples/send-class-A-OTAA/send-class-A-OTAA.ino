/**
 **************************************************
 *
 * @file        send-class-A-ABP.ino
 * @brief       Example to demonstrate sending using 
 *				OTAA method which is commonly used. It is needed
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
 * Modified by: Soldered for use with www.soldered.com/333157 , www.soldered.com/333158
 *
 ***************************************************/

///                 GND----------GND   (ground in)
///                 3V3----------3.3V  (3.3V in)
/// interrupt 0 pin D2-----------DIO0  (interrupt request out)
///             pin D3-----------DIO1  (interrupt request out)
///             pin D4-----------DIO2  (interrupt request out)
///             pin D7-----------DIO5  (interrupt request out)
///          SS pin D10----------NSS   (CS chip select in)
///         SCK pin D13----------SCK   (SPI clock in)
///        MOSI pin D11----------MOSI  (SPI Data in)
///        MISO pin D12----------MISO  (SPI Data out)
/// This is pinout for Dasduino Core, if you are using other MCU, use SPI pins
///and Interrupt pin 0, if Dasduino ConnectPlus is used
/// (or any other ESP32 board) use pins(SS=27, RST=2, DIO0=32, MISO=33, MOSI=25,SCK=26)

#define LORAWAN		//Specify that module will be used for LoRaWAN network
#include "LoRa-SOLDERED.h"

// OTAA credentials
const char *devEui = "0000000000000000";
const char *appEui = "0000000000000000";
const char *appKey = "00000000000000000000000000000000";

const unsigned long interval = 10000;    // 10 s interval to send message
unsigned long previousMillis = 0;  // will store last time message sent
unsigned int counter = 0;     // message counter

char myStr[50];
char outStr[255];
byte recvStatus = 0;

//Pinout is changed here if necessary
const sRFM_pins RFM_pins = {
  .CS = 5,
  .RST = 6,
  .DIO0 = 2,
  .DIO1 = 3,
  .DIO2 = 4,
  .DIO5 = 7,
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
  
  // Put OTAA Key and DevAddress here
  lora.setDevEUI(devEui);
  lora.setAppEUI(appEui);
  lora.setAppKey(appKey);

  // Join procedure
  bool isJoined;
  do {
    Serial.println("Joining...");
    isJoined = lora.join();
    
    //wait for 10s to try again
    delay(10000);
  }while(!isJoined);
  Serial.println("Joined to network");
}

void loop() {
  // Check interval overflow
  if(millis() - previousMillis > interval) {
    previousMillis = millis(); 

    sprintf(myStr, "Counter-%d", counter);   //Format string

    Serial.print("Sending: ");
    Serial.println(myStr);
    
    lora.sendUplink(myStr, strlen(myStr), 0, 1);  //Send data to gateway
    counter++;
  }

  recvStatus = lora.readData(outStr); //Get data that LoRa has received
  if(recvStatus)
  {
    Serial.println(outStr);
  }
  
  // Check Lora RX
  lora.update();  //Check if LoRa has received anything
}