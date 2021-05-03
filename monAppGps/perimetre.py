"""
   perimetre.py est un peu naze
   Je veux 1 et 1 seul fichier dans lequel rentrer mes points particuliers
   mesPoints.js et permimetre.py faut encore faire correspondre tout ça

   peut etre un moyen d'importer mes point en geojson (javascript) dans du python
"""

from geopy.distance import geodesic


coord = {"Auchan": (43.409181, 3.66955628),
         "Corniche": (43.393615, 3.6676516), 
         "monoprix": (43.403273, 3.69672283),
         "Mcdo":(43.409622, 3.70764729),
         "Briselame":(43.3933158, 3.70366592),
         "PointeBalaruc": (43.4356586421474, 3.6731635309516157),
         "skateparksete": (43.39849578557984, 3.661383413337412),
         "SeteAgglo": (43.43806778629719, 3.7013647147765636),
         "Garesete": (43.41261749088507, 3.6966459164693366)}
         

radius = 27

##########################################################################################

"""
for cle,valeur in coord.items():
    #point = Point(reversed(valeur))
    if geodesic(valeur, me).kilometers <= radius :
        print("%s est dans le périmètre" %(cle))
    else:
        print("%s n'est pas dans le périmètre" %(cle))

"""