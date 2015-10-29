/*
This sketch demonstrates how to coordinate data
between 3 devices in a Gazell network.

The host collects RSSI samples from the Devices,
and determines which device has the strongest
average RSSI (ie: the Device that is closest
to the Host).  The Green led is set on the
closest Device.

Since the Device must initiate communication, the
device "polls" the Host evey 200ms.
*/

#include <RFduinoGZLL.h> // include rfduino library
device_t role = DEVICE2; // set Device name... DEVICE2 to DEVICE7 / HOST

//define pins
int LEDpin = 2;
int LEDpin2 = 3;

int xpin = 4;
int ypin = 5;
int zpin = 6;


int xval = 0;
int yval = 0;
int zval = 0;

int xvalp = 0;
int yvalp = 0;
int zvalp = 0;

String inputString = "";         // a string to hold incoming data
boolean stringComplete = false;  // whether the string is complete

void setup()
{
  Serial.begin(9600); // begin serial communications
  pinMode(LEDpin, OUTPUT);
  pinMode(LEDpin2, OUTPUT);
  pinMode(xpin, INPUT);
  pinMode(ypin, INPUT);
  pinMode(zpin, INPUT);
inputString.reserve(200);
  RFduinoGZLL.txPowerLevel = 0;

  // start the GZLL stack
  RFduinoGZLL.begin(role); // begin BLE communications
}

void loop()
{
  

  
  char xdata[4];   //declaring character array -- 3 characters plus a nill charachter as terminator
  char ydata[4];
  char zdata[4];
   char sdata[49];
  char mydata[20]; // declare mydata array

  String xstr;//declaring string
  String ystr;//declaring string
  String zstr;//declaring string
  String mystr;
  String sstr;

   serialEvent(); //call the function
  // print the string when a newline arrives:
  if (stringComplete) {
//    Serial.println(inputString);
    sstr=inputString;
    // clear the string:
    inputString = "";
    stringComplete = false;
  }

  xval = analogRead(xpin); // read pin sensor values and place into variavles
  yval = analogRead(ypin);
  zval = analogRead(zpin);

  // convert sendor values to 3 characters.. i.e. value 2 converts to 002, value 40 converts to 040
  if (xval >= 100)
  {
    xstr = String(xval);
  }
  else if (xval < 100 && xval >= 10) {
    xstr = String(0) + String(xval);
  }
  else if (xval < 10) {
    xstr = String(0) + String(0) + String(xval);
  }
  
  
  if (yval >= 100)
  {
    ystr = String(yval);
  }
  else if (yval < 100 && yval >= 10) {
    ystr = String(0) + String(yval);
  }
  else if (yval < 10) {
    ystr = String(0) + String(0) + String(yval);
  }
  
  
  if (zval >= 100)
  {
    zstr = String(zval);
  }
  else if (zval < 100 && zval >= 10) {
    zstr = String(0) + String(zval);
  }
  else if (xval < 10) {
    zstr = String(0) + String(0) + String(zval);
  }

//xstr="100";//testing
//ystr="200";//testing
//zstr="300";//testing
//sstr="111111111211111";////testing
  mystr = "a," + xstr+"," + ystr+"," + zstr+"," + sstr; // combining data for sending to other rfduino... change "a" to other characters to identify message package. your sstr is data from serial

  mystr.toCharArray(mydata, 30); // place mystr data into character buffer

Serial.println(mystr); // print buffer to serial

 RFduinoGZLL.sendToHost(mydata, 30); // send buffer to host other rfduino
    delay(250);

    
}

// if data is recived from another rfduino
void RFduinoGZLL_onReceive(device_t device, int rssi, char *data, int len)
{
  // ignore acknowledgement without payload
  if (len > 0)
  {
    // set the Green led if this device is the closest device
    device_t closest_device = (device_t)data[0];
    //digitalWrite(green_led, (role == closest_device));
  }
}

//event handler to get data from serial when newline is presented
void serialEvent() {
  while (Serial.available()) {
    // get the new byte:
    char inChar = (char)Serial.read();
    // add it to the inputString:
    inputString += inChar;
    // if the incoming character is a newline, set a flag
    // so the main loop can do something about it:
    if (inChar == '\n') {
      stringComplete = true;
    }
  }
}

