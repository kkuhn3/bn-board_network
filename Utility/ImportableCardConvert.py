import csv
import sys
import os
import string
import random

fin = open("ImportableCardList.csv", 'r+')
fout = open("cardOutput.txt", 'w+')

try:
    spamreader = csv.reader(fin, delimiter=',', quotechar='"')
    for line in spamreader:
        fout.write("\t\t\t<img id='"+line[0]+"' src='img/cards/SF3/SecretGiga/"+line[0]+".png'/>\n")

finally:
    fin.close()
    fout.close()
