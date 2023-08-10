var addCounter = 0;
var delCounter = 0;
var arrDo = [];
var arrDoing = [];
var arrDone = [];
//Task-do section - local storage
if (localStorage.getItem("task-do")) {
  arrDo = JSON.parse(localStorage.getItem("task-do"));
  for (let i = 0; i < arrDo.length; i++) {
    if (arrDo[i] != "") {
      var divDo = $(`<div class="div-p divP-${i}">${arrDo[i]}</div>`);
      var doP = $(`<p class="do-task-${i} p-task"></p>`);
      var delButton = $(`<button class="del-button del-${i}">X</button>`);
      var doButton = $(`<button class="do-button add-button">Doing</button>`);
      doP.append(delButton, divDo, doButton);
      $(`.tasks-do`).prepend(doP);
      delButton.on("click", function () {
        $(`.do-task-${i}`).css({ display: "none" });
        arrDo[i] = "";
        localStorage.setItem("task-do", JSON.stringify(arrDo));
      });
      doButton.on("click", function () {
        $(`.do-task-${i}`).text("");
        var doingButton = $(
          `<button class="doing-button add-button">Done</button>`
        );
        var delButton = $(`<button class="del-button del-${i}">X</button>`);
        $(`.do-task-${i}`).append(delButton, arrDo[i], doingButton);
        $(`.tasks-doing`).prepend($(`.do-task-${i}`));
        arrDoing.push(arrDo[i]);
        localStorage.setItem("task-doing", JSON.stringify(arrDoing));
        arrDo[i] = "";
        localStorage.setItem("task-do", JSON.stringify(arrDo));
        delButton.on("click", function () {
          $(`.do-task-${i}`).css({ display: "none" });
          arrDo[i] = "";
          localStorage.setItem("task-do", JSON.stringify(arrDo));
        });
        doingButton.on("click", function () {
          $(`.do-task-${i}`).text("");
          var doneButton = $(
            `<button class="done-button add-button">Done</button>`
          );
          var delButton = $(`<button class="del-button del-${i}">X</button>`);
          $(`.do-task-${i}`).append(delButton, arrDo[i], doneButton);
          $(`.tasks-done`).prepend($(`.do-task-${i}`));
          arrDone.push(arrDoing[i]);
          localStorage.setItem("task-done", JSON.stringify(arrDone));
          arrDoing[i] = "";
          localStorage.setItem("task-doing", JSON.stringify(arrDoing));
          delButton.on("click", function () {
            $(`.do-task-${i}`).css({ display: "none" });
            arrDo[i] = "";
            localStorage.setItem("task-do", JSON.stringify(arrDo));
          });
          doneButton.on("click", function () {
            alert("You have already finished this task");
          });
        });
      });
    }
  }
}
//Task-doing section - local storage
if (localStorage.getItem("task-doing")) {
  var arrDoing = JSON.parse(localStorage.getItem("task-doing"));
  for (let i = 0; i < arrDoing.length; i++) {
    if (arrDoing[i] != "") {
      var divDoing = $(`<div class="div-p divP-${i}">${arrDoing[i]}</div>`);
      var doingP = $(`<p class="doing-task-${i} p-task"></p>`);
      var delButton = $(`<button class="del-button del-${i}">X</button>`);
      var doingButton = $(
        `<button class="doing-button add-button">Doing</button>`
      );
      doingP.append(delButton, divDoing, doingButton);
      $(`.tasks-doing`).prepend(doingP);
      delButton.on("click", function () {
        $(`.doing-task-${i}`).css({ display: "none" });
        arrDoing[i] = "";
        localStorage.setItem("task-doing", JSON.stringify(arrDoing));
      });
      doingButton.on("click", function () {
        $(`.doing-task-${i}`).text("");
        var doneButton = $(
          `<button class="done-button add-button">Done</button>`
        );
        var delButton = $(`<button class="del-button del-${i}">X</button>`);
        $(`.doing-task-${i}`).append(delButton, arrDoing[i], doneButton);
        $(`.tasks-done`).prepend($(`.doing-task-${i}`));
        delButton.on("click", function () {
          $(`.doing-task-${i}`).css({ display: "none" });
          arrDoing[i] = "";
          localStorage.setItem("task-doing", JSON.stringify(arrDoing));
        });
        doneButton.on("click", function () {
          alert("You have already finished this task");
        });
      });
    }
  }
}
//Task-done section - local storage
if (localStorage.getItem("task-done")) {
  var arrDone = JSON.parse(localStorage.getItem("task-done"));
  for (let i = 0; i < arrDone.length; i++) {
    if (arrDone[i] != "") {
      var divDone = $(`<div class="div-p divP-${i}">${arrDone[i]}</div>`);
      var doneP = $(`<p class="done-task-${i} p-task"></p>`);
      var delButton = $(`<button class="del-button del-${i}">X</button>`);
      var doneButton = $(
        `<button class="done-button add-button">Done</button>`
      );
      doneP.append(delButton, divDone, doneButton);
      $(`.tasks-done`).prepend(doneP);
      delButton.on("click", function () {
        $(`.done-task-${i}`).css({ display: "none" });
        arrDone[i] = "";
        localStorage.setItem("task-done", JSON.stringify(arrDone));
      });

      doneButton.on("click", function () {
        alert("You have already finished this task");
      });
    } else if (arrDone[i] == "") {
      Array.prototype.remove = function (index) {
        this.splice(index, 1);
      };
      arrDone.remove(i);
      localStorage.setItem("task-done", JSON.stringify(arrDone));
    }
  }
}
//Main function
$(`.add-task-button`).on('click', function () {
    var doInputValue = $(`.do-input`).val();
    var doingInputValue = $(`.doing-input`).val();
    var doneInputValue = $(`.done-input`).val();
    var divDo = $(
      `<div class="div-p paragraf-${addCounter}">${doInputValue}</div>`
    );
    var divDoing = $(`<div class="div-p">${doingInputValue}</div>`);
    var divDone = $(`<div class="div-p">${doneInputValue}</div>`);
    var doButton = $(`<button class="do-button add-button">Doing</button>`);
    var doingButton = $(
      `<button class="doing-button add-button">Done</button>`
    );
    var doneButton = $(
      `<button class="done-button add-button"><i class="fa-solid fa-check"></i></button>`
    );
    var delButton = $(
      `<button class="del-button data-sira="${delCounter}"">X</button>`
    );
    var doP = $(`<p class="do-task-${addCounter} p-task"></p>`);
    var doingP = $(`<p class="doing-task-${addCounter} p-task"></p>`);
    var doneP = $(`<p class="done-task-${addCounter} p-task"></p>`);

    delButton.on("click", function () {
      doP.css({ display: "none" });
      console.log(parseInt(delButton.dataset.sira));
    });

    doP.append(delButton, divDo, doButton);
    $(`.tasks-do`).prepend(doP);
    arrDo.push(doInputValue);
    localStorage.setItem("task-do", JSON.stringify(arrDo));
  
  doButton.on("click", function () {
    doP.text("");
    doP.append(delButton, divDo, doingButton);
    $(`.tasks-doing`).prepend(doP);
    delButton.on("click", function () {
      doP.css({ display: "none" });
    });
    doingButton.on("click", function () {
      console.log("isleyir");
      doP.text("");
      doingP.append(delButton, divDo, doneButton);
      $(`.tasks-done`).prepend(doingP);
      doP.css({ display: "none" });
      delButton.on("click", function () {
        doingP.css({ display: "none" });
      });
    });
  });
  delButton.on("click", function () {
    doP.css({ display: "none" });
  });

  if (doingInputValue != "") {
    doingP.append(delButton, divDoing, doingButton);
    $(`.tasks-doing`).prepend(doingP);
    arrDoing.push(doingInputValue);
    localStorage.setItem("task-doing", JSON.stringify(arrDoing));
    doingButton.on("click", function () {
      console.log("isleyir");
      doingP.text("");
      doingP.append(delButton, divDoing, doneButton);
      $(`.tasks-done`).prepend(doingP);
      delButton.on("click", function () {
        doingP.css({ display: "none" });
      });
    });
  }

  delButton.on("click", function () {
    doingP.css({ display: "none" });
  });
  if (doneInputValue != "") {
    doneP.append(delButton, divDone, doneButton);
    $(`.tasks-done`).prepend(doneP);
    arrDone.push(doneInputValue);
    localStorage.setItem("task-done", JSON.stringify(arrDone));
  }
  doneButton.on("click", function () {
    alert("You have already finished this task");
  });
  delButton.on("click", function () {
    $(doneP).css({ display: "none" });
  });
  delCounter++;
  addCounter++;
  $(`.do-input`).val("");
  $(`.doing-input`).val("");
  $(`.done-input`).val("");
});
