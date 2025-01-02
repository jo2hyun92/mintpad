const inputTodo = document.getElementById('input-todo');
const addBtn = document.getElementById('add-btn');
const icaddBtns = document.getElementsByClassName('ic-add-btn');
const tagList = document.querySelectorAll('input[type="radio"]');
const todoCategory = document.getElementsByClassName('todo-category');
const modal = document.getElementById('modal');
const editBtn = document.getElementById('edit-btn');
const cancelBtn = document.getElementById('cancel-btn');
const inputEdit = document.getElementById('input-edit');

// 인풋 작성 시 추가 버튼 활성화
inputTodo.addEventListener('input', () => {
    if (inputTodo.value !== "") {
        addBtn.style.backgroundColor = "#30EEE4";
        addBtn.style.color = "#1C1E21";
    } else {
        addBtn.style.backgroundColor = "#eee";
    };
});

// 태그 클릭 시 인풋 활성화
for (let i = 0; i < tagList.length; i++) {
    tagList[i].addEventListener("click", () => {
        inputTodo.focus();
    });
}

// 아이콘 버튼을 통한 해당 카테고리 선택 + 인풋 포커싱
for(let i = 0; i < 3; i++) {
    icaddBtns[i].addEventListener("click", () => {
        tagList[i].checked = true;
        inputTodo.focus();
    });
};

// 추가 시 리스트에 할 일 추가 + 아이콘 버튼 클릭 시 모달 활성
addBtn.addEventListener("click", () => {
    if(inputTodo.value != "") {
        const x = inputTodo.value;
        const addList = document.createElement('li');
        const addText = document.createElement('span');
        const addIconSet = document.createElement('div');
        const addIcon1 = document.createElement('img');
        const addIcon2 = document.createElement('img');

        addText.textContent = x;

        addIcon1.addEventListener("click", () => {
            modal.style.visibility = 'visible';
        });

        addIcon2.addEventListener("click", (e) => {
            console.log(e.target.parentElement.parentElement);
            e.target.parentElement.parentElement.remove();
        })

        for(let i = 0; i < 3; i++) {
            if(tagList[i].checked == true) {
                todoCategory[i].appendChild(addList);
                addList.appendChild(addText);
                addList.appendChild(addIconSet);
                addIconSet.appendChild(addIcon1);
                addIconSet.appendChild(addIcon2)
                addIcon1.src = "/mintpad/images/ic-edit.svg";
                addIcon2.src = "/mintpad/images/ic-del.svg"
                break;
            }
        }
    } else {
        alert("할 일을 작성해주세요🤔");
    }
});

cancelBtn.addEventListener("click", () => {
    modal.style.visibility = 'hidden';
})

editBtn.addEventListener("click", () => {
    console.log(inputEdit.value);
})