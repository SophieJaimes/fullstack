class  Main
	attr_accessor :name
	attr_accessor :age

	def initialize(name = "Sophie", age = 24)
		@name=name
		@age=age
	end
	def hello_world
		if @age > 18
			puts "#{name} su edad es #{age} y es mayor de edad"
		else
			puts "#{name} su edad es #{age} y es menor de edad"
		end
	end
end

if __FILE__ == $0
  ma = Main.new
  ma.hello_world
  ma.name = "Marie"
  ma.age = 15
  ma.hello_world
end