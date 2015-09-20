#!/usr/bin/env python

################################################################
##DEBOUNCE UP DOWN
import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)
GPIO.setup(7, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(11, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(7,GPIO.IN)
GPIO.setup(11,GPIO.IN)
# prev_input = 0
# prev_input2 = 0
while True:
    input7 = GPIO.input(7)
    input11 = GPIO.input(11)
    # print str(input7) + "-------" + str(input11)

    if ((not input7) and (not input11)):
        print "Below 65"
    elif ((input7) and (not input11)):
        print "Between 65 and 130"
    elif ((not input7) and ( input11)):
        print "Between 130 and 192"
    else:
        print "Above 192"

  # input = GPIO.input(7)
  # if ((not prev_input) and input):
  #   print("Button 7 pressed")
  # prev_input = input

  # input2 = GPIO.input(12)
  # if (( prev_input2) and not input2):
  #   print("Button 12 pressed")
  # prev_input2 = input2
  
  # time.sleep(0.05)
GPIO.cleanup()