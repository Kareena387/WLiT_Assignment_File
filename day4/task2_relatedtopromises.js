const DEMO_URL = "https://course-api.com/react-store-products"


function fetchData(DEMO_URL, callback) {
    fetch(DEMO_URL).then((response) => {
        //console.log(Response)
        return response.json()
    }).then((data) => {
        callback(data)
    }).catch((error) => {
        console.log("error occured", error)
    })

}
//function handleData(data) {
    //console.log(data[0]["name"])
    //console.log(data)
 
    /*function handleData(data){
        for(i=0; i<data.length; i++)
        {
            console.log(data[i]["name"]+"-"+(data[i]["price"]) )
        }
    }
*/
    


//fetchData(DEMO_URL, handleData)


function handleData(data){
    const heading = document.getElementById("heading")
    
}
