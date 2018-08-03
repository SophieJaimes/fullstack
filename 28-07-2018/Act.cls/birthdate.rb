class  Main
	attr_accessor :birthdate, :day, :month, :year

	def initialize( day = 20, month = 8, year = 1993)
		@birthdate=birthdate
		@day=day
		@month=month
		@year=year
	end
	def calculate_age
		dateNow=Time.now
		yearNow=dateNow.strftime("%Y").to_i
		monthNow=dateNow.strftime("%m").to_i
		dayNow=dateNow.strftime("%d").to_i
		age = yearNow-year
		difMonth = monthNow-month
		difDay = dayNow-day
			if(difMonth < 0)
				age = age-1
				puts "Su edad es #{age}"
			elsif(difMonth == 0 and difDay<0)
				age = age-1
				puts "Su edad es #{age}"
			else
				puts "Su edad es #{age}"
			end
	end
end

if __FILE__ == $0
  ma = Main.new
  ma.calculate_age
  ma.month = 7
  ma.day = 30
  ma.calculate_age
end