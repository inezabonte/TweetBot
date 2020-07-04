const tweetText = document.querySelector('.tweet-text')
const chosenFile = document.getElementById('chosen-file')
const customText = document.getElementById('custom-text')
const btnChoose = document.querySelector('.add-image')

btnChoose.addEventListener('click', function() {
    chosenFile.click()
} )

chosenFile.addEventListener('change', function(){
    if(chosenFile.value){
        customText.innerHTML = chosenFile.value
    }else{
        customText.innerHTML = 'No file chosen'
    }
})