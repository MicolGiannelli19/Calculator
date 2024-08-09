# TODO: the actual defentions of the fucntionsh should be put in a seprate file
def add(*args): 
    # return args
    if len(args) == 1: 
        return args[0]
    return sum(args)


print(add(1))
print(add(3))
print(add(1, 3, 2))

from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/")
def hello():
    return f"Hello, Micol!"

@app.route("/add", methods = ['GET'])
def add(name):
    numbers = request.args.get('numbers')
    if not numbers:
        return jsonify({'error': 'No numbers provided'}), 400
        
    try:
        numbers = [float(num) for num in numbers.split(',')] # Converting comma seprated string to float
    except ValueError:
        return jsonify({'error': 'Invalid numbers provided'}), 400

    add(*numbers)
    else:
        return jsonify({'error': 'Invalid operation'}), 400

    return jsonify({'result': result}), 200

if __name__ == '__main__':
    app.run(debug=True)
