from models import Animal, Dog,Cat
def main():
    dog1 = Dog("Aktos",3,"Alabay")
    cat1 = Cat("Murka",2,"White")
    animal = Animal("Animal",1,"Unknown")
    d = []
    d.append(dog1)
    d.append(cat1)
    d.append(animal)
    for i in d:
        print(i)
        print("Sounds:",i.speak())
        print("Action:",i.move())
if __name__ == "__main__":
    main()
    