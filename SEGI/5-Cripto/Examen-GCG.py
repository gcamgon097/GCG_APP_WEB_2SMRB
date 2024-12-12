#Nombre: Guillermo Campos González


def descifrado_cesar(cad_cif, clv):
    # Entrada:Mensaje cifrado
    # Salida: mensaje descifrado con la clave de entrada en este caso 5

    # Variable auxiliar
    global abc # La declaracion global indica que la variable abc existe fuera de la función
    abc = list("abcdefghijklmnñopqrstuvwxyz") # Lista con los elementos del abecedario casteñano
    new_cad = "" # Cadena vacía donde se irá creando el mensaje descifrado
    if clv >= len(abc):
        clv = clv % len(abc)

    # Desciframos la cadena cambiando las posiciones
    for i in cad_cif:
        if i in abc:
            if clv > abc.index(i):
                pos = len(abc) - (clv - abc.index(i))
            else:
                pos = abc.index(i) - clv
            new_cad += abc[pos] #Esto es lo que va poniendo las nuevas posiciones 
        else:
            new_cad += " "#Esta linea sirve para que vaya metiendo las letras descifrada a la lista "new_cad" que donde se almacena el mensaje descifrado

    return new_cad


def cifrado_cesar(cad_cif, clv):
    # Entrada: La cadena original cifrada (criptograma) y la clave del algoritmo
    # Salida: mensaje descifrado con la clave de entrada

    # Variable auxiliar
    global abc # La declaracion global indica que la variable abc existe fuera de la función
    abc = list("abcdefghijklmnñopqrstuvwxyz") # Lista con los elementos del abecedario del casteñano
    new_cad = "" # Cadena vacía donde se irá creando la nueva cadena cifrada

    if clv >= len(abc):
        clv = clv % len(abc)

    # Desciframos la cadena cambiando las posiciones
    for i in cad_cif:
        if i in abc:
            if clv > abc.index(i):
                pos = len(abc) - (clv - abc.index(i))
            else:
                pos = abc.index(i) - clv
            new_cad += abc[pos] #Esto es lo que va poniendo la posiciones a las letras 
        else:
            new_cad += " " #Esta linea sirve para que vaya metiendo las letras descifrada a la lista "new_cad" que donde se almacena el mensaje cifrado  

    return new_cad 


#Parametros de las funciones
Mensaje="jp mtqgwj jx jp xjw vzj fp mfgpfw xj vzjif jxujwfrit"
Clave= 5

MensajeClaro="El hombre es el ser que al hablar se queda esperando"

#Descifrar el mensaje
print("El mensaje descifrado es:")
print (descifrado_cesar( Mensaje, Clave))

#Separación
print("-----------------")

#Cifrar el mensaje
print("El mensaje cifrado es:")
print (cifrado_cesar(MensajeClaro, Clave))