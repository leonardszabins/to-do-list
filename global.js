function newItem(){
   var txtVal = document.getElementById("darāmais") 
   date = document.getElementById('termiņš').value,
    atstarpe = " līdz ",
    listNode = document.getElementById('list'),
    liNode = document.createElement("LI"),
    button = document.createElement("button");
    txtNode = document.createTextNode(txtVal+atstarpe+date),
    listItems = document.getElementsByTagName("li");

    liNode.appendChild(txtNode);
    liNode.appendChild(button);
    listNode.appendChild(liNode);

    button.innerText = 'Izdzēst';
    button.className = 'delete-button';

for (var i = 0; i < listItems.length; i++) {
  listItems[i].onclick = function() {this.parentNode.removeChild(this);}
}
};
