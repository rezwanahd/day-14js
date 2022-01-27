const devs_form = document.getElementById("devs_form");
const devs_area = document.querySelector(".devs-area");

devs_form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = this.querySelector('input[name="name"]');
    let gender = this.querySelector('input[name="gender"]:checked');
    let skill = this.querySelectorAll('input[name="skill"]:checked');
    let photo = this.querySelector('input[name="photo"]');

    let skill_arr = [];

    for (let i = 0; i < skill.length; i++) {
        skill_arr.push(skill[i].value);
    }

    // console.log(skill_arr);

    // local storage------------------------------//

    let data_arr;
    if (dataGet("devs")) {
        data_arr = dataGet("devs");
    } else {
        data_arr = [];
    }
    data_arr.push({
        name: name.value,
        gender: gender.value,
        skill: skill_arr,
        photo: photo.value,
    });

    dataSend("devs", data_arr);

    allDevs();
});

//Function --------------------//

allDevs();
function allDevs() {
    let all_devs = dataGet("devs");

    let data = "";
    all_devs.map(d => {


        let lists = '';
        d.skill.map(list =>{

            lists += `<li class="list-group-item"> ${list} </li>`
        })

        data += `

    <div class="col-md-4 my-3">
        <div class="card">
            <img style="width: 100%; height: 200px; object-fit: cover; "
                src="${d.photo}" alt="">
                <div class="card-body">
                    <h3>${d.name}</h3>
                        <span>${d.gender}</span>
                        <hr>
                        <span>Skills</span>
                        <hr>
                        <ul class="list-group">
                             ${ lists }
                        </ul>


                </div>
        </div>
    </div>
        
        
        `;
    });

    
    devs_area.innerHTML = data;
}


