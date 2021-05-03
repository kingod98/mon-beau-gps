""" 
Pour initialiser le gps, on écrit at+qgps=1 dans USB2
USB1 va alors débiter quelques minutes pour enfin nous donnéer des coord
si on choppe des coordonnées, alors l'initialisation est par conséquent terminée, on stoppe la boucle
"""

from time import sleep
import serial


def getPositionDataInit(gps):   #ancienne fonction qui me permettait de chopper coordonnée, ça sera suffisant 
                                #(suffixe Init à toute les variables, certain pas de conflits)
    global flagInit             #il faudra l'ameliorer, je pense qu'on peut l'alleger pour la simple detection d'état d'initialisation
    flagInit = False
    dataInit = gps.readline()
    messageInit = dataInit[0:6]
    messageInit = messageInit.decode("utf8")
        
    # GPRMC = Recommended minimum specific GPS/Transit data
    # Reading the GPS fix data is an alternative approach that also works
    if messageInit == '$GPRMC':
        flagInit = True
        partsInit = dataInit.decode().split(",") # le decode etait la solution !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        if partsInit[2] == 'V':
            # V = Warning, most likely, there are no satellites in view...
            print ("GPS receiver warning")
        else:
            flagInit = True
            
            




def init():
    serwInit = serial.Serial('/dev/ttyUSB2')
    tempInit = "AT+QGPS=1 \r"
    serwInit.write(tempInit.encode())
    serwInit.close()
    sleep(0.5)
    print ("receiving gps data")
    serInit = serial.Serial('/dev/ttyUSB1')
    while True:          # On garde le while car on veut laisser tourner la lecture du port jusqu'à l'acquisition 
        corInit=getPositionDataInit(serInit)	
        if flagInit == True:  #On a la valeur, on peut mettre fin a la fonction
            break