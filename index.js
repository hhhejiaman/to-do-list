window.onload = function() {
    var userInfo = document.getElementById("user-info");
    var addBtn = document.getElementById("add-info");
    var addList = document.getElementById("add-list");
    var liNow = document.getElementsByTagName("li");
    var listCheck = document.getElementsByClassName("list-check");
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
            userInfo.value = "";
            html += `<li><input type="checkbox" class="list-check" check=${listThing.hasCheck}>${listThing.content}</li> `
            addList.innerHTML = html;
        }

    };

    addList.addEventListener("click", function(event) {
        for (i = 0; i < liNow.length; i++) {
            if (listCheck[i].checked) {
                listCheck[i].parentNode.style.textDecorationLine = "line-through";
                listCheck[i].parentNode.style.color = "grey";
            }
        }
    });

    var allBtn = document.getElementById("all-btn");
    allBtn.addEventListener("click", function() {
        for (i = 0; i < liNow.length; i++) {
            liNow[i].removeAttribute("hidden");
        }
    })


    var activeBtn = document.getElementById("active-btn");
    activeBtn.addEventListener("click", function() {
        for (i = 0; i < liNow.length; i++) {
            if (listCheck[i].checked) {
                var liHidden = listCheck[i].parentNode;
                liHidden.setAttribute("hidden", true);
            }
        }
    });

    var completeBtn = document.getElementById("complete-btn");
    completeBtn.addEventListener("click", function() {
        for (i = 0; i < liNow.length; i++) {
            if (listCheck[i].checked) {
                var liHidden = listCheck[i].parentNode;
                liHidden.setAttribute("hidden", true);
            }
        }
    })
}