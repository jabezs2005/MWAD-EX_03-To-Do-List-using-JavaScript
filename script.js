
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      const listItem = document.createElement("li");

      const taskText = document.createElement("span");
      taskText.innerText = taskInput.value;

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.onclick = function () {
        taskList.removeChild(listItem);
      };
  

      listItem.appendChild(taskText);
      listItem.appendChild(deleteButton);
  

      taskList.appendChild(listItem);
  
      taskInput.value = "";
    }
  }