//https://teachablemachine.withgoogle.com/models/d4qNu5ZJF/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/d4qNu5ZJF/model.json", modelReady);
}

function modelReady(){
console.log("Model Loaded");
classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results)
        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(3) + "%"
        img = document.getElementById("nothin");
        if (results[0].label == "Meow") {
           img.src = Cat.gif;
        } else if (results[0].label == "Squeak") {
            img.src = Hamster.gif;
        } else if (results[0].label == "Sss") {
            img.src = Snake.gif;
        } else {
            img.src = nothinSoFar.gif;
        }
    }
}