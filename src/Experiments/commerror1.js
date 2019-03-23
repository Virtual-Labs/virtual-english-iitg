function gradeQuiz() {
    var totalRight = 0;
    var cor = document.getElementsByClassName('correct');
    for (var count = 0; count < 10; count++) {
        var resp = document.getElementsByName('quest' + String(count + 1) + 'radio')
        for (var option of resp) {
            if (option.value == cor[count].innerHTML) {
                totalRight++
                cor[count].style.color = "green"
                break
            }
        }
        cor[count].innerHTML = "The correct answer is: " + cor[count].innerHTML
        cor[count].style.visibility = "visible"
    }

    document.getElementById('grade').innerHTML = "You answered " + totalRight + " correctly!"
    percent = (10 * totalRight)
    document.getElementById('percentage').innerHTML = "Percentage: " + percent + "%"
    var report;
    if (percent > 90)
        report = "Great Job! Try another quiz!"
    else if (percent > 80)
        report = "Some quick review of prepositions might be a good idea."
    else if (percent > 70)
        report = "Review is definitely called for."
    else if (percent > 60)
        report = "Seek assistance of tutor or instructor."
    else
        report = "Perhaps you missed the point?"
    alert(report)
}