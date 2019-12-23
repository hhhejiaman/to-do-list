window.onload = function() {
    var userInfo = document.getElementById("user-info");
    var addInfo = document.getElementById("add-info");
    var addList = document.getElementById("add-list");
    addInfo.onclick = function() {
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
    }

    var listCheck = document.getElementsByClassName("list-check");
    console.log(listCheck)
    var allBtn = document.getElementById("all-btn");
    this.console.log(allBtn)
    allBtn.onclick = function() {
        alert("1");
    }
}