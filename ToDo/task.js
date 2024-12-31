document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
  
    // Add task
    addTaskButton.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      }
    });
  
    // Add task to the list
    function addTask(taskText) {
      const li = document.createElement("li");
      li.className = "task-item";
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", () => {
        li.classList.toggle("completed");
      });
  
      const label = document.createElement("label");
      label.textContent = taskText;
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "X";
      removeButton.className = "remove-btn";
      removeButton.addEventListener("click", () => {
        li.remove();
      });
  
      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(removeButton);
      taskList.appendChild(li);
    }
  });