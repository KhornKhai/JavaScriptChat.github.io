let add = () => {
    let name = document.querySelector('.container #name'); 
    let comment = document.querySelector('.container #comment'); 
     
    if (name.value !== "" && comment.value != "") { 
     
    let list = document.querySelector('.list'); 
    let list_item = document.createElement ("l1"); 
    list_item.innerHTML = `
    <span>
    <p><br></p>
    </span>
    <span>
    <p><b>Name :</b> ${name.value}</p> 
    </span>
    <p><b>Said :</b> ${comment.value}</p>
    `;
    list.append(list_item); 
    }
     
    if (name.value == "" || comment.value == "") {
    let list = document.querySelector('.list'); 
    let list_item = document.createElement ("l2"); 
    var warn = 'Please input name & comment!';  
    list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
    list.append(list_item); 
     }
    name.value=comment.value = "";
    }