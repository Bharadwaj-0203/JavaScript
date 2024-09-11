let count = 0;

function increaseCount(){
    count+=1;
    displayCount();
    checkCountValue();
}

function resetCount(){
    count=0;
    displayCount();
    alert('Your Instagram followers count had been reset to 0');
}

function checkCountValue(){
    if(count===10){
        alert('Your Instagram gained 10 followers! Congratulations!')
    }
    else if(count === 20){
        alert('Your Instagram gained 20 followers! Keep it up!')
    }
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}
