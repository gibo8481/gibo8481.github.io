const button = document.querySelector('#js-new-quote');
const btnClick = button.addEventListener('click', getFact);

const endpoint = "https://meowfacts.herokuapp.com/";

async function getFact(){

    try{
        const response = await fetch(endpoint);
        if(!response.ok)
        {
            throw Error(response.statusText);
        }

        jsonData = await response.json();
        
        const quoteText = jsonData['data'];
        console.log(quoteText);
        const quoteArea = document.querySelector('#js-quote-text');
        quoteArea.textContent = quoteText;
        
    }
    catch(err){
        console.log(err);
        alert('failed');
    }
}

const showImageButton = document.getElementById("show-image-button");
const myImage = document.getElementById("my-image"); 
showImageButton.addEventListener("click", () => { 
   myImage.style.display = "block"; 
});
   

  