class  Main
	attr_accessor :total, :promedio

	def initialize(total = 0, promedio = 0)
		@total=total
		@promedio=promedio
	end
	def calculateAvg
		notas = []
		puts "#{notas}"
		for i in(0..6)
			print "Ingrese nota: "
    		nota=gets.to_i
   			notas.push nota
   			self.total = notas[i].to_i + total
   			if notas[i] == 0
				self.promedio = self.total/i;
				break;
			end
			self.promedio = self.total/notas.length
		end
		puts("El total es #{total}")
		puts "El promedio es: #{promedio}"
	end
end

if __FILE__ == $0
  ma = Main.new
  ma.calculateAvg
end