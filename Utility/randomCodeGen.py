import csv
import sys
import os
import string
import random

fin = open("CodeCounts.csv", 'r+')
fout = open("temp.csv", 'w+')

try:
    spamreader = csv.reader(fin, delimiter=',', quotechar='"')
    codedict = {}
    firstrow = True
    for line in spamreader:
        if not firstrow:
            codedict[line[0]] = int(line[1])
        else:
            firstrow = False

    mincount = 100;
    for key in codedict:
        if(codedict[key] < mincount):
            mincount = codedict[key]

    foundbool = False
    returnkey = "*";
    while not foundbool:
        returnkey = random.choice(string.ascii_uppercase)
        if(codedict[returnkey] == mincount):
            foundbool = True;
    print returnkey

    increment = int(sys.argv[1])
    writer = csv.writer(fout)
    fin.seek(0)
    for line in spamreader:
        if line[0] == returnkey:
            writer.writerow([line[0], int(line[1])+increment])
        else:
            writer.writerow([line[0], line[1]])

    os.remove("CodeCounts.csv")
    os.rename("temp.csv", "CodeCounts.csv")

finally:
    fin.close()
    fout.close()
