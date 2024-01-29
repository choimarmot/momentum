const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 1. string으로 변환
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text
    const button = document.createElement("button")
    button.id = "todo-delete"
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value; // 이 시점에서 toDoinput의 값이 저장 되기 때문에 아래에서 사라져도 상관 없음
    toDoInput.value = "";
    const newToDoObj = {
        text : newToDo,
        id : Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj)
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// Loading todos
const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // 2. string으로 변환된 것을 JS에서 사용 가능한 배열로 변환
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); // forEach -> paintToDo를 parsedToDos의 배열 요소마다 실행
}
