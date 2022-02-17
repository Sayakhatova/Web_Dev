document.querySelector('#push').onclick = function(){

    if(document.querySelector('.newtask input').value.length == 0){
        alert("error")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class = "task">
                <li id = "taskname">
                    ${document.querySelector('.newtask input').value}
                    
                    <button class="delete">
                        <img src='https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png'>
                     </button>

                </li>

            </div>
        `;

        current_tasks = document.querySelectorAll(".delete");

        for(let i = 0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        tasks = document.querySelectorAll(".task");

        for(let i = 0; i < tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector(".newtask input").value = "";
    }
}