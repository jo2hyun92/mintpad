const inputTodo = document.getElementById('input-todo');
const addBtn = document.querySelector('.add-btn');
const icaddBtns = Array.from(document.getElementsByClassName('ic-add-btn'));
let tagList = document.querySelectorAll('input[type="radio"]');
const todoCategory = document.getElementsByClassName('todo-category');

let selectedIdex = 0;
let addedText
let editedElement

// Nodelist를 Array로 변경
tagList = Array.from(tagList);

// '오늘' 태그 선택 상태
tagList[0].classList.add('selected0');

function init() {
    // 인풋 작성 시 추가 버튼 활성화
    inputTodo.addEventListener('input', () => {
        if (inputTodo.value !== "") {
            addBtn.style.backgroundColor = "#30EEE4";
            addBtn.style.color = "#1C1E21";
        } else {
            addBtn.style.backgroundColor = "#eee";
        };
    });
    // + 버튼 클릭 시 해당 태그 활성 + 인풋 포커싱
    for(let i = 0; i < icaddBtns.length; i++) {
        icaddBtns[i].addEventListener("click", (event) => {
            tagList[i].checked = true;
            console.log("선택된 태그", tagList[i]);
            selectedIdex = i;
            inputTodo.focus();
        });
    };

    // 태그 클릭 시 인풋 활성화 + 클릭한 타겟의 인덱스 추출 및 할당
    for (let i = 0; i < tagList.length; i++) {
        tagList[i].addEventListener("click", (event) => {
            const prevSelectedBtn = document.querySelector(`selected${i}`);
            if(prevSelectedBtn) {
                prevSelectedBtn.classList.remove(`selected${i}`);
            }
            inputTodo.value = "";
            inputTodo.focus();
            event.target.classList.add(`selected${i}`);
            selectedIdex = tagList.indexOf(event.target);
        });
    }
}

// 함수로 객체를 생성
function createTodo() {
    const addList = document.createElement('li');
    const addText = document.createElement('span');
    const addIconSet = document.createElement('div');
    const editIcon = document.createElement('img');
    const deleteIcon = document.createElement('img');
    return{addList, addText, addIconSet, editIcon, deleteIcon};
}

function addEventNewElement(todoElement) {
    todoElement.deleteIcon.addEventListener("click", (event) => {
        event.target.parentElement.parentElement.remove();
    });

    // 수정 버튼 클릭 시 이벤트
    todoElement.editIcon.addEventListener("click", () => {
        EditText(todoElement.addText.textContent, todoElement.addList, todoElement.addText);
    });
}

function addApendElement(todoElement, todoCategory, selectedIdex) {
    // 요소에 컨텐츠 삽입
    todoCategory[selectedIdex].appendChild(todoElement.addList); // 암묵적 인자
    todoElement.addList.appendChild(todoElement.addText);
    todoElement.addList.appendChild(todoElement.addIconSet);
    todoElement.addIconSet.appendChild(todoElement.editIcon);
    todoElement.addIconSet.appendChild(todoElement.deleteIcon);
    todoElement.editIcon.src = "/images/ic-edit.svg";
    todoElement.deleteIcon.src = "/images/ic-del.svg";
}

// 추가 버튼 클릭 시 리스트에 할 일 추가 + 인풋 초기화
addBtn.addEventListener("click", () => {
    if(inputTodo.value != "") {

        const todoElement = createTodo();
        // const {addList, addText, addIconSet, editIcon, deleteIcon} = createTodo(); // 객체구조분해

        // 요소 생성
        const addedText = inputTodo.value;

        todoElement.addText.textContent = addedText;

        addEventNewElement(todoElement);

        addApendElement(todoElement, todoCategory, selectedIdex); // 숙제: 노션에서 자바스크립트 공부 // 숙제2: SCSS 적용해보기 숙제3: 플렉스 공부하기
 
        // 인풋 초기화
        inputTodo.value = "";
    } else {
        alert("할 일을 작성해주세요🤔");
    }
});

// 수정 메서드
function EditText(addTextValue, addList, addText) {
    console.log(addText);
    console.log(addTextValue);
    addList.style.display = 'none';

    // 요소 생성
    const editLi = document.createElement('li');
    const addInput = document.createElement('input');
    const addBtnSet = document.createElement('div');
    const addBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');

    // 스타일 클래스 추가
    addInput.classList.add('input-s');
    addBtn.classList.add('btn', 'add-btn');
    cancelBtn.classList.add('btn', 'cancel-btn');

    // 입력되어 있는 텍스트 할당
    addInput.defaultValue = addTextValue;

    // 버튼 텍스트 할당
    cancelBtn.innerText = "취소";
    addBtn.innerText = "수정";

    // 요소 배치
    addList.after(editLi);
    editLi.appendChild(addInput);
    editLi.appendChild(addBtnSet);
    addBtnSet.appendChild(cancelBtn);
    addBtnSet.appendChild(addBtn);

    addInput.focus();
    addInput.setSelectionRange(addTextValue.length, addTextValue.length);

    // 취소 버튼
    cancelBtn.addEventListener("click", () => {
        editLi.remove();
        addList.style.display = '';
    })

    // 수정 버튼 클릭 시
    addBtn.addEventListener("click", () => {
        const newValue = addInput.value;
        addList.style.display = '';
        editLi.style.display = 'none';
        addText.textContent = newValue;
    })
}

init();