window.onload = getInfo;

console.log("javascript is working")

 async function sendInfo(event){
    console.log("sendInfo called!")
    event.preventDefault();
    console.log("preventdefautlcalled")
    obj = {
    name:document.getElementById("username").value,
    phone:  document.querySelector("#phone").value,
    email: document.querySelector("#email").value
    }
    console.log("yes its it")

        try {
            console.log("Making POST request...") // NEW
              await axios.post(("http://localhost:2000/booking/api/send"),obj)
              console.log(" data is sent")
               getInfo()
              
              
        } catch (error) {
            console.log("ERROR OBJECT:", error) // See full error
            console.log("ERROR MESSAGE:", error.message) // See message
            console.log("ERROR RESPONSE:", error.response) // See server response
            console.log("ERROR STATUS:", error.response?.status) // See status code
            console.log(error)
        }

    
}
async function getInfo(){
    try {
       const response =  await axios.get("http://localhost:2000/booking/booking")
       const data = (response.data)
let list = document.getElementById("booklist")
if(!list){
    list = document.createElement("ul")
    list.id = "booklist"
    document.body.appendChild(list)
}
list.innerHTML = data.map(item =>
     `<li>Name: ${item.name} Phone: ${item.phone} Email: ${item.email}</li>`
).join("")

    } catch (error) {
        console.log(error)
    }
}


