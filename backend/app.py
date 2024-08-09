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



@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()  # Get the JSON data from the request

    operation = data.get('operation')
    num1 = data.get('num1')
    num2 = data.get('num2')

    if not all([operation, num1, num2]):
        return jsonify({'error': 'Invalid input, please provide operation, num1, and num2'}), 400

    try:
        num1 = float(num1)
        num2 = float(num2)
    except ValueError:
        return jsonify({'error': 'Invalid numbers provided'}), 400

    if operation == 'add':
        result = num1 + num2
    elif operation == 'subtract':
        result = num1 - num2
    elif operation == 'multiply':
        result = num1 * num2
    elif operation == 'divide':
        if num2 == 0:
            return jsonify({'error': 'Division by zero is not allowed'}), 400
        result = num1 / num2
    else:
        return jsonify({'error': 'Invalid operation'}), 400

    return jsonify({'result': result}), 200
