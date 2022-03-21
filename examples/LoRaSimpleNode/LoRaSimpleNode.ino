/**
 **************************************************
 *
 * @file        LoRaSimpleNode.ino
 * @brief       This code uses InvertIQ function to create a simple Gateway/Node logic.
 *
 *              Gateway - Sends messages with enableInvertIQ()
 *                      - Receives messages with disableInvertIQ()
 *
 *              Node    - Sends messages with disableInvertIQ()
 *                      - Receives messages with enableInvertIQ()
 *
 *              With this arrangement a Gateway never receive messages from another Gateway
 *              and a Node never receive message from another Node.
 *              Only Gateway to Node and vice versa.
 *
 *              This code receives messages and sends a message every second.
 *
 *              InvertIQ function basically invert the LoRa I and Q signals.
 *              
 *
 *
 *
 * @authors    	Tom Igoe
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

#define LORA		//Specify that module will be used for LoRa to LoRa communication
#include <SPI.h>              // include libraries
#include <LoRa-SOLDERED.h>

const long frequency = 868E6;  // LoRa Frequency

const int csPin = 10;          // LoRa radio chip select
const int resetPin = 9;        // LoRa radio reset
const int irqPin = 2;          // Change for your board; must be a hardware interrupt pin

void setup()
{
  Serial.begin(9600);                   // Initialize serial
  while (!Serial);

  LoRa.setPins(csPin, resetPin, irqPin);

  if (!LoRa.begin(frequency)) 	//Initialize LoRa with custom frequency
  {
    Serial.println("LoRa init failed. Check your connections.");
    while (true);                       // If failed, do nothing
  }

  Serial.println("LoRa init succeeded.");
  Serial.println();
  Serial.println("LoRa Simple Node");
  Serial.println("Only receive messages from gateways");
  Serial.println("Tx: invertIQ disable");
  Serial.println("Rx: invertIQ enable");
  Serial.println();

  LoRa.onReceive(onReceive);   //Set callback on receive data
  LoRa.onTxDone(onTxDone);   //Set callback on transmission done
  LoRa_rxMode();   //Set LoRa to receive mode
}

void loop()
{
  if (runEvery(1000)) // Repeat every 1000 millis
  { 

    String message = "HeLoRa World! ";
    message += "I'm a Node! ";
    message += millis();

    LoRa_sendMessage(message); // Send a message

    Serial.println("Send Message!");
  }
}

void LoRa_rxMode()
{
  LoRa.enableInvertIQ();                // Active invert I and Q signals
  LoRa.receive();                       // Set receive mode
}

void LoRa_txMode()
{
  LoRa.idle();                          // Set standby mode
  LoRa.disableInvertIQ();               // Normal mode
}

void LoRa_sendMessage(String message)
{
  LoRa_txMode();   //Set LoRa to transmitt mode                        // Set tx mode
  LoRa.beginPacket();                   // Start packet
  LoRa.print(message);                  // Add payload
  LoRa.endPacket(true);                 // Finish packet and send it
}

void onReceive(int packetSize) 	//Callback on receive data
{
  String message = "";

  while (LoRa.available())  //Read from incoming buffer
  {
    message += (char)LoRa.read();
  }

  Serial.print("Node Receive: ");
  Serial.println(message);
}

void onTxDone() //Callback on transmission done
{
  Serial.println("TxDone");
  LoRa_rxMode();   //Set LoRa to receive mode
}

boolean runEvery(unsigned long interval) //If interval milliseconds has past from last run, run again
{
  static unsigned long previousMillis = 0;
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= interval)
  {
    previousMillis = currentMillis;
    return true;
  }
  return false;
}

