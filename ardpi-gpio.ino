/*
  AnalogReadSerial
  Reads an analog input on pin 0, prints the result to the serial monitor.
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

 This example code is in the public domain.
 */

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  pinMode(3,OUTPUT);
  pinMode(5,OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {
  int outputValue = analogRead(A1);
//  int outputValue = map(sensorValue, 0, 1023, 0, 255);


  if (outputValue > 192) {
    digitalWrite(3, HIGH);
    digitalWrite(5, HIGH);
    Serial.println("above 192");
  } else if  (outputValue > 130 && outputValue <= 192) {
    digitalWrite(3, LOW);
    digitalWrite(5, HIGH);
    Serial.println("between 130 and 192");
  }else if   (outputValue > 65 && outputValue <= 130) {
    digitalWrite(3, HIGH);
    digitalWrite(5, LOW);
    Serial.println("between 65 and 130");
  }else  {
    digitalWrite(3, LOW);
    digitalWrite(5, LOW);
    Serial.println("lower 65");
  }


  delay(1);        // delay in between reads for stability
}
