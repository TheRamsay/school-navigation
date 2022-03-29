with open("ucebny.txt") as f:
    floors = f.read().split("-----")
    for floor in floors:
        print(floor.split("\n")[0])
