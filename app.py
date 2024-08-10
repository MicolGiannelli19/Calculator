# TODO: the actual defentions of the fucntionsh should be put in a seprate file
def add_numbers(*args): 
    # return args
    if len(args) == 1: 
        return args[0]
    return sum(args)

from flask import Flask, request, jsonify, render_template

app = Flask(__name__)


@app.route("/")
def hello():
    return render_template('index.html') # Should change this to display index.html

@app.route("/add", methods = ['GET'])
def add():

    numbers = request.args.get('numbers')

    if not numbers:
        return jsonify({'error': 'No numbers provided'}), 400
        
    try:
        # QUESTION: what would be best practice to check for the types here, in the add function, on client side or on all of them?
        numbers = [float(num) for num in numbers.split(',')] # Converting comma seprated string to float
    except ValueError:
        return jsonify({'error': 'Invalid numbers provided'}), 400

    try:
        result = add_numbers(*numbers)
    except:
        return jsonify({'error': 'Invalid operation'}), 400

    return jsonify({'result': result}), 200

if __name__ == '__main__':

    app.run(debug=True)
