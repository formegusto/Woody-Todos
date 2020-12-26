function todoLoad() {
	const todos = JSON.parse(localStorage.getItem("todos"));

	if(todos){
		todos.map((todo, idx) => {
			const li = document.createElement("li");
			
			const checkBox = document.createElement("input");
			checkBox.type = "checkbox";
			checkBox.value = todo.isFinish;
			checkBox.onchange = todoFinish;

			const title = document.createElement("a");
			title.href = `#${idx}`;
			title.innerText = todo.title;

			const date = document.createElement("span");
			date.innerText = new Date(todo.date).getDate();

			const listBlock = document.createElement("div");
			listBlock.appendChild(checkBox);
			listBlock.appendChild(title);
			listBlock.appendChild(date);

			li.appendChild(listBlock);
			document.getElementById("todos").appendChild(li);
		})
	}
}

function todoSave() {
	let todos = JSON.parse(localStorage.getItem("todos"));
	const todo = {
		isFinish: false,
		title: document.getElementsByName("title")[0].value,
		date: new Date
	};

	if(todos) {
		todos.push(todo);	
	} else {
		todos = [todo];
	}

	localStorage.setItem("todos", JSON.stringify(todos));

	window.location.reload();
}

function todoFinish(e) {
	
}

window.onload = function() {
	todoLoad();
}