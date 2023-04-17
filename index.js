   
submitData("Renardo","ren@gmail.com")  

function submitData(user, email){
    const userData = { name: user, email: email}
    const config = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
        body: JSON.stringify(userData),
    }
    return fetch("http://localhost:3000/users", config)
        .then(function(res){return res.json()})
        .then(function(object){
            console.log(object);
            document.querySelector('body').innerHTML = object.id;
        })
        .catch(function (error) {document.querySelector('body').innerHTML = error.message});        
}
