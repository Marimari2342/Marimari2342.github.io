# Ejercicios 7,8,9 Ruby 

# EJERCICIO 7: Crear a Sandman, sabiendo que tiene un descanso inicial
# de 14, puede dormir! una cantidad de minutos y aumentar su descanso 
# en esa cantidad, si tiene menos de 41 de descanso diremos que 
# necesita_reposo?. 
# Hay que definir el objeto Sandman con el atributo @descanso con su
# getter, el objeto entiende los mensajes dormir! que recibe min como
# argumento, y necesita_reposo?

module Sandman 
    @descanso = 14
    def self.descanso
        @descanso
    end
    def self.dormir!(min)
        @descanso +=min
    end
    def self.necesita_reposo?
        @descanso>41
    end
end

# EJERCICIO 8: En un curso tenemos un conjunto de estudiantes, es 
# necesario saber quienes aprobaron. Teniendo en cuenta que cada
# estudiante sabe responder al mensaje ha_aprobado? Definí el método
# personas_aprobadas que retorne que estudiantes aprobaron del Alumnado.

module Alumnado
    @estudiantes = [May,Gus,Ro,Agus,Lu,Ale]
def self.personas_aprobadas
    @estudiantes.select{|un_estudiante|un_estudiante.ha_aprobado}
end

# EJERCICIO 9: A la hora de viajar sabemos que las intancias de la 
# clase Persona usan su boleto. Actualmente tenemos dos tipos de 
# boleto: BoletoUsoUnico, sólo se puede usar una vez y tiene un
# atributo @usado; y BoletoUsoMultiple, tiene un saldo que disminuye
# 22 con cada viaje. Definí el método realizar_viaje! en la clase
# Persona y el método usar! en los distintos tipos de boleto

class Persona 
    def initialize(un_boleto)
        @boleto = un_boleto
    end
    def realizar_viaje!
        @boleto.usar!
    end
end

class BoletoUsoUnico
    def initialize()
        @usado=false
    end
    def usar!
        @usado=true
    end
end

class BoletoUsoMultiple
    def initialize(un_saldo)
        @saldo = un_saldo
    end
    def usar!
        @saldo-=22
    end
end

