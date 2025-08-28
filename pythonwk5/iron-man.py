from abc import ABC, abstractmethod

# Abstract Parent Class (Abstraction)
class Superhero(ABC):
    def __init__(self, name, power_level):
        self.name = name
        self._power_level = power_level   # protected attribute

    @abstractmethod
    def attack(self):
        pass

    def show_power(self):
        return f"{self.name}'s power level: {self._power_level}"


# Child Class (Inheritance)
class Ironman(Superhero):
    def __init__(self, suit_version, power_level=100):
        super().__init__("Ironman", power_level)
        self.__suit_version = suit_version  # private attribute

    # Getter and Setter for encapsulation
    def get_suit_version(self):
        return self.__suit_version

    def set_suit_version(self, version):
        if version > 0:
            self.__suit_version = version
        else:
            print("Invalid suit version!")

    # Overriding abstract method (Polymorphism)
    def attack(self):
        return f"Ironman attacks with Repulsor Beams 💥 (Suit v{self.__suit_version})"

    def fly(self):
        return "Ironman is flying at high speed 🚀"


# Another Child Class
class Hulk(Superhero):
    def __init__(self, power_level=200):
        super().__init__("Hulk", power_level)

    def attack(self):
        return "Hulk smashes everything 💪"
    
class Thor(Superhero):
    def __init__(self, power_level=180):
        super().__init__("Thor", power_level)

    def attack(self):
        return "Thor summons lightning ⚡"



# Create objects
ironman = Ironman(suit_version=85)
hulk = Hulk()
thor = Thor()

print(ironman.show_power())
print(ironman.attack())
print(ironman.fly())
print("Suit version:", ironman.get_suit_version())

print(hulk.show_power())
print(hulk.attack())

print(thor.show_power())
print(thor.attack())

# Polymorphism demonstration
heroes = [ironman, hulk, thor]

print("\nPolymorphism in Action 🎭")
for hero in heroes:
    print(hero.attack())  # Same method name, different outputs
