def add(*args): 
    # return args
    if len(args) == 1: 
        return args[0]
    return sum(args)

print(add(9,8))
print(add(*[9.1,8,7]))