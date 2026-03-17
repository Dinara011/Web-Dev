class Animal:
    def __init__(self,name,age,species):
        self.name=name
        self.age=age
        self.species = species
    def speak(self):
        return "I am an animal"
    def move(self):
        return f"{self.name} is moving"
    def __str__(self):
        return f"{self.name} is a {self.age} year old {self.species}"
class Dog(Animal):
    def __init__(self,name,age,breed):
        super().__init__(name,age,"Dog")
        self.breed = breed
    def speak(self):
        return "WOOF WOOF!"
    def eat(self):
        return f"{self.name} is eating meat"
    def __str__(self):
        return f"{self.name} is a {self.age} year old {self.breed} breed dog"
class Cat(Animal):
    def __init__(self,name,age,color):
        super().__init__(name,age,"Cat")
        self.color = color
    def speak(self):
        return "MEOW MEOW!"
    def play(self):
        return f"{self.name} is playing with a ball"
    def __str__(self):
        return f"{self.name} is a {self.age} year old {self.color} cat"

