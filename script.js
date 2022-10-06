function drawDashboard(){
  

    const targetUrl = "https://api.github.com/repositories";

    let targetElement = document.querySelector(".result");

    fetch(targetUrl).then(response => response.json())
                    .then(response => {
                        for(var i=0; i<response.length; i++){
                            let divElement = document.createElement("div");
                            let h2Element = document.createElement("h2");
                            h2Element.innerText = response[i].owner.login;

                            divElement.appendChild(h2Element);

                            let imgElement = document.createElement("img");
                            imgElement.src = response[i].owner.avatar_url;

                            divElement.appendChild(imgElement);

                            targetElement.appendChild(divElement);


                            
                        }
                    })
}