var buttonobject = document.getElementById("buttonID");
var List=[];


sno = 0;

function AddingFuntion() {
    // var unorderlistobject = document.getElementById("unorderlistID");
    var submitbuttonobj = document.getElementById("buttonsubmitID");
    var invalidfeedback = document.getElementById("invalidfeedbackID");
    submitbuttonobj.src = "submitsicons/submitgif.gif";
    setTimeout(function () {

        submitbuttonobj.src = "./submitsicons/submit.png";

    }, 1000)

    var inputValue = document.getElementById("inputfielsID");
    if (inputValue.value.length == 0) {
        invalidfeedback.style.display = "block";
        inputValue.style.outline = 1 + "px";


    }
    else {

        invalidfeedback.style.display = "none";
        var textvalue = document.createTextNode(inputValue.value);
        var creatingLI = document.createElement("li");
        creatingLI.className = 'mylists';

        creatingLI.style.position = "relative";
        var delbutton = document.createElement("button");
        var editbutton = document.createElement("button");
        editbutton.className = "editbutton";
        delbutton.className = "delbutton";

        creatingLI.appendChild(textvalue);
        creatingLI.appendChild(editbutton);
        creatingLI.appendChild(delbutton);
        objectCreates = {
            Todo: inputValue.value,
            Editbutton: editbutton,
            Delbutton: delbutton,

        }
        List.push(objectCreates);
        localStorage.setItem("todo-list", JSON.stringify(List));
        console.log(List);
        document.getElementById("unorderlistID").appendChild(creatingLI);
        var items = document.querySelectorAll("#unorderlistID li");


        // ????????????????????????????????del funtion?????????????????????????????????????????????????

        delbutton.onclick = function () {
            delfunction();


        }
        editbutton.onclick = function () {
            editfunction();

        }

        // ???????????????????????????????????????????????????????????????????????????????????????????


        if (items.length >= 1) {
            var footerobje = document.getElementById("footerID");
            footerobje.style.display = "flex";
        }




        sno = sno + 1;

    }
    var taskobj = document.getElementById("task");
    taskobj.innerHTML = "Task: " + eval(sno);
    inputValue.value = '';
    inputValue.focus();

}



function delfunction() {
    event.target.parentNode.remove();
    var taskobj = document.getElementById("task");
    sno = sno-1;
    taskobj.innerHTML = "Task: " + sno;
    document.getElementById("inputfielsID").value = "";

}

var updatebutton = document.createElement('button');
function editfunction() {
    updatebutton.style.innerHTML = 'UPdte';
    updatebutton.style.display = 'block';
    updatebutton.className = "updatebutton"
    var updateimage = document.createElement('div');
    updateimage.className = 'updateimageclass';
    updatebutton.appendChild(updateimage);
    buttonobject.style.display = 'none';
    document.getElementById("inputandbuttonID").appendChild(updatebutton);
    var inputValue = document.getElementById("inputfielsID");
    inputValue.value = event.target.parentNode.innerText;
    var tem = event.target.parentNode;
    document.getElementById("inputfielsID").focus();

    updatebutton.onclick = function () {
        updateFuntion(tem, inputValue);
        updatebutton.style.display = 'none';
        buttonobject.style.display = 'flex';

    }
}
function updateFuntion(tem, inputValue) {
    tem.firstChild.nodeValue = inputValue.value;   // cannot use direct method, like store value in parentnode.innertext. it removes function buttons of edit and delete.
    inputValue.value = "";
    inputValue.focus();

}
