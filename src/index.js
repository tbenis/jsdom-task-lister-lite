document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const  button = document.querySelector("[type='submit']");
  const tasks = document.getElementById("tasks");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const item = document.getElementById('new-task-description').value;
    const li = document.createElement("li");
    const newItem = document.createTextNode(item);
    li.appendChild(newItem);
    tasks.appendChild(li);
    document.getElementById('new-task-description').value = "";
  })
  
});
