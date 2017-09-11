console.log('picture upload script running...');

function submitHandler(){
    let imageInput = document.getElementById("image-input");
    
    let sendingFile = imageInput.files[0];
    let sendingData = {
        'title': document.getElementById("image-title").value,
        'description': document.getElementById("image-description").value
    };
    console.log(JSON.stringify(sendingData));
    console.log(sendingFile);

    if(sendingFile !== undefined){
        let formData = new FormData();
        formData.append("metainfo", JSON.stringify(sendingData));
        formData.append("file", sendingFile);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3000/api/picture");
        xhr.send(formData);
    }
}