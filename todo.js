function toDo() {

const button = document.getElementById('add-button');
button.addEventListener('click',() => {
    const input = document.getElementById('new-todo');

    const li = document.createElement('li');
    li.classList.add('add-text');
    li.innerText = input.value;

    const doneButton = document.createElement('button');
    doneButton.classList.add('add-button');
    doneButton.innerText = '完';
    // todoの済みボタン

    li.appendChild(doneButton);
    doneButton.addEventListener('click',()=>{
        const li = doneButton.closest('li');
        //closest一番近い親要素
        li.classList.add('done');
    });

    const ul = document.querySelector('ul');
    //本当はid名で指定した方がいい。ulの子要素としてliを作る
    ul.appendChild(li);
});

};
window.addEventListener('load',toDo);