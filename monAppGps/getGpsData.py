from time import sleep
import serial
"""import Tkinter
import tkMessageBox"""

portwrite = "/dev/ttyUSB2"
port = "/dev/ttyUSB1"


def formatDegreesMinutes(coordinates, digits):
    
    parts = coordinates.split(".")

    if (len(parts) != 2):
        return coordinates

    if (digits > 3 or digits < 2):
        return coordinates
    
    left = parts[0]
    right = parts[1]
    degrees = str(left[:digits])
    minutes = str(right[:3])

    return degrees + "." + minutes


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
    message = data[0:6]
    print(data)
    message = message.decode("utf8")
    print(message)
        
    # GPRMC = Recommended minimum specific GPS/Transit data
    # Reading the GPS fix data is an alternative approach that also works
    if message == '$GPRMC':
        flag = True
        parts = data.decode().split(",") # le decode etait la solution !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        if parts[2] == 'V':
            # V = Warning, most likely, there are no satellites in view...
            print ("GPS receiver warning")
        else:
            flag = True
            longitude = formatDegreesMinutes(parts[5], 3)
            latitude = formatDegreesMinutes(parts[3], 2)
            print(longitude)
            print(latitude)
            print ("Your position: lon = " + str(longitude) + ", lat = " + str(latitude))
            flag = True
            mescoord["lalongitude"] = longitude
            mescoord["lalatitude"] = latitude
            return(str(latitude) + "," + str(longitude))  




################################ C'est le Maiiiiiiiiiiiiiin ########################################## 

def main():
    print ("Connectinggggg port")
    serw = serial.Serial('/dev/ttyUSB2')
    temp = "AT+QGPS=1 \r"
    serw.write(temp.encode())
    serw.close()
    sleep(0.5)
    
    print ("receiving gps data")
    ser = serial.Serial('/dev/ttyUSB1')
    while True:          # On garde le while car on veut laisser tourner la lecture du port jusqu'à l'acquisition 
        cor=getPositionData(ser)	
        print(flag)
        if flag == True:  #On a la valeur, on peut mettre fin a la fonction
            break
    
main()    