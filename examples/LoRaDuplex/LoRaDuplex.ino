/**
 **************************************************
 *
 * @file        LoRaDuplex.ino
 * @brief       Sends a message every half second, and polls continually
 *				for new incoming messages. Implements a one-byte addressing scheme,
 * 				with 0xFF as the broadcast address.
 *
 * 				Uses readString() from Stream class to read payload. The Stream class'
 *				timeout may affect other functuons, like the radio's callback.
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
#include <SPI.h>              // Include libraries
#include <LoRa-SOLDERED.h>

const int csPin = 7;          // LoRa radio chip select
const int resetPin = 6;       // LoRa radio reset
const int irqPin = 1;         // Change for your board; must be a hardware interrupt pin

String outgoing;              // Outgoing message

byte msgCount = 0;            // Count of outgoing messages
byte localAddress = 0xBB;     // Address of this device
byte destination = 0xFF;      // Destination to send to
long lastSendTime = 0;        // Last send time
int interval = 2000;          // Interval between sends

void setup()
{
  Serial.begin(9600);                   // Initialize serial
  while (!Serial);

  Serial.println("LoRa Duplex");

  // Override the default CS, reset, and IRQ pins (optional)
  LoRa.setPins(csPin, resetPin, irqPin);// set CS, reset, IRQ pin

  if (!LoRa.begin(868E6))
  {             // Initialize ratio at 868 MHz
    Serial.println("LoRa init failed. Check your connections.");
    while (true);                       // If failed, do nothing
  }

  Serial.println("LoRa init succeeded.");
}

void loop()
{
  if (millis() - lastSendTime > interval)
  {
    String message = "HeLoRa World!";   // Send a message
    sendMessage(message);
    Serial.println("Sending " + message);
    lastSendTime = millis();            // Timestamp the message
    interval = random(2000) + 1000;    // 2-3 seconds
  }

  // Parse for a packet, and call onReceive with the result:
  onReceive(LoRa.parsePacket());
}

void sendMessage(String outgoing)
{
  LoRa.beginPacket();                   // Start packet
  LoRa.write(destination);              // Add destination address
  LoRa.write(localAddress);             // Add sender address
  LoRa.write(msgCount);                 // Add message ID
  LoRa.write(outgoing.length());        // Add payload length
  LoRa.print(outgoing);                 // Add payload
  LoRa.endPacket();                     // Finish packet and send it
  msgCount++;                           // Increment message ID
}

void onReceive(int packetSize)
{
  if (packetSize == 0) return;          // If there's no packet, return

  // read packet header bytes:
  int recipient = LoRa.read();          // Recipient address
  byte sender = LoRa.read();            // Sender address
  byte incomingMsgId = LoRa.read();     // Incoming msg ID
  byte incomingLength = LoRa.read();    // Incoming msg length

  String incoming = "";

  while (LoRa.available())
  {
    incoming += (char)LoRa.read();
  }

  if (incomingLength != incoming.length())
  {   // Check length for error
    Serial.println("error: message length does not match length");
    return;                             // Skip rest of function
  }

  // If the recipient isn't this device or broadcast,
  if (recipient != localAddress && recipient != 0xFF)
  {
    Serial.println("This message is not for me.");
    return;                             // Skip rest of function
  }

  // If message is for this device, or broadcast, print details:
  Serial.println("Received from: 0x" + String(sender, HEX));
  Serial.println("Sent to: 0x" + String(recipient, HEX));
  Serial.println("Message ID: " + String(incomingMsgId));
  Serial.println("Message length: " + String(incomingLength));
  Serial.println("Message: " + incoming);
  Serial.println("RSSI: " + String(LoRa.packetRssi()));
  Serial.println("Snr: " + String(LoRa.packetSnr()));
  Serial.println();
}

