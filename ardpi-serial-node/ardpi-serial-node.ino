int sensorValue[5];

void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600);
}

int i = 0;

void loop() {
  if (i == 0) {
    Serial.println("0");
    i = 1;
  } else {
    Serial.println("1");
    i = 0;
  }



  delay(2000);
}



