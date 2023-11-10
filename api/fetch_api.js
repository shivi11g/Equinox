 

function getData(){
    url= "https://libretranslate.com/languages"
    fetch(url).then((response)=> {
        return response.json();
    }).then((data)=> {
  console.log(data);
    
    
    })
}
getData();





