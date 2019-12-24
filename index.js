window.onload = function() {
    var userInfo = document.getElementById("user-info");
    var addBtn = document.getElementById("add-info");
    var addList = document.getElementById("add-list");
    var html = "";
    userInfo.addEventListener("keydown", function(event) {
        if (event.keyCode == 13) {
            listJoin(event);

        }
    });
    addBtn.addEventListener("click", function(event) {
        listJoin(event);

    })

    function listJoin(event) {
        if (userInfo.value != "") {
            var storage = window.localStorage;
            var index = storage.length;
            var listThing = {
                "index": index,
                "content": userInfo.value,
                "hasCheck": false
            }
            storage.setItem(index, JSON.stringify(listThing));
            console.log(storage)
            userInfo.value = "";
            html += `<li><input type="checkbox" class="list-check" check=${listThing.hasCheck}>${listThing.content}</li> `
            addList.innerHTML = html;
        }

    };

    addList.addEventListener("click", function() {
        var liNow = document.getElementsByTagName("li");
        var listCheck = document.getElementsByClassName("list-check");
        console.log(listCheck)
        for (i = 0; i < liNow.length; i++) {
            if (listCheck[i].checked) {
                listCheck[i].parentNode.style.textDecorationLine = "line-through";
                listCheck[i].parentNode.style.color = "grey";
            }
        }
    });






    /*addInfo.onclick = function() {

        if (userInfo.value != "") {
            var li = document.createElement("li");
            li.setAttribute("class", "list-row");
            var html = "";
            html += `<input type="checkbox" class="list-check">${userInfo.value}`
            li.innerHTML = html;
            addList.appendChild(li);
            return false;
        } else {
            return false;
        }

        alert("1");
    }*/
}