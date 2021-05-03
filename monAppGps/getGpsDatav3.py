from time import sleep
import serial
import initGps
from initGps import *

port = "/dev/ttyUSB2"

#aya faut créer une initialisation, ecrire la comma truc=1, 
# lire USB1 dans while (comme avant) et une fois que tout va bien le flag break et on passe a la suite



def getPositionData(gps):
    global flag 
    flag = False
    global mescoord
    mescoord = {
      "lalongitude":0 ,
      "lalatitude": 0,
          }
    print("on esaie de get")
    data = gps.readline()
    message = data.decode("utf8") 
    # GPRMC = Recommended minimum specific GPS/Transit data
    # Reading the GPS fix data is an alternative approach that also works
    if message[0:9] == '+QGPSLOC:':
        message = data[9:]
        flag = True
        parts = message.decode("utf8").split(",") 
        if parts[2] == 'V':
            # V = Warning, most likely, there are no satellites in view...
            print ("GPS receiver warning")
        else:
            flag = True
            longitude = parts[2]
            latitude = parts[1]
            print(longitude)
            print(latitude)
            print ("Your position: lon = " + str(longitude) + ", lat = " + str(latitude))
            flag = True
            mescoord["lalongitude"] = longitude
            mescoord["lalatitude"] = latitude
            return(str(latitude) + "," + str(longitude))  




################################ C'est le Maiiiiiiiiiiiiiin ########################################## 

def main():
    initGps.init()
    print ("Connecting port")
    serw = serial.Serial(port)
    temp = "AT+QGPSLOC=2 \r"      #Commande qui demande au gps 1 trame, contenant coord (format décimal !!!)
    
    while True:
        serw.write(temp.encode()) #Ne permet pas d'acquisition en continue ? :(  on réécrit à chaque boucle
        sleep(0.5)
        cor=getPositionData(serw)
        if flag == True:  #On a la valeur, on peut mettre fin a la fonction
            break

main()