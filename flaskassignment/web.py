from flask import Flask,render_template
app=Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')

@app.route("/gallery")
def gallery():
    return render_template('gallery.html')

@app.route("/movies")
def about():
    return render_template('movies.html')

if __name__=="__main__":
    app.run(host='127.0.0.6')
