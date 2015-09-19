#!/usr/bin/env python

############## UNREAD TITLE SEARCH  ##############
## searches email titles and returns the summary of targetted search


import feedparser		# imports feedparser to parse XML feed

user='dtclass15@gmail.com'		# replace dtclass15@gmail.com with your personal gmail user or email, or youruser@newschool.edu for your school account
passwd='dtclass15password'		# replace *** with your password for the above account


newmails = feedparser.parse("https://" + user + ":" + passwd + "@mail.google.com/gmail/feed/atom").entries
for i in newmails:		#for loop itterates through newmails feed
    #print str(i.title)		# uncomment to print out each title of unread emails
    if str(i.title)=="Search":		# replace the word Search with the title of the email you are searching for
        print i.summary




