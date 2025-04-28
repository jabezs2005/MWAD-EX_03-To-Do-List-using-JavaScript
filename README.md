# MWAD-EX_03-To-Do-List-using-JavaScript
## Date:

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
### Index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .container {
      max-width: 400px;
      margin: 20px auto;
      text-align: center;
    }
    ul {
      padding: 0;
      list-style: none;
    }
    li {
      background: #f0f0f0;
      margin: 10px 0;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    button {
      background: #ff5c5c;
      border: none;
      color: white;
      padding: 5px 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>To-Do List</h1>
    <input type="text" id="taskInput" placeholder="Enter a task">
    <button onclick="addTask()">Add</button>
    <ul id="taskList"></ul>
  </div>
  <script src="script.js"></script>
</body>
</html>
```
### sciprt.js 
```

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
```

## OUTPUT
![alt text](<img/Screenshot 2025-04-28 102731.png>)

## RESULT
The program for creating To-do list using JavaScript is executed successfully.
