const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const postInput = document.getElementById("postInput")
const postButton = document.getElementById("postButton")
const putInput = document.getElementById("putInput")
const putButton = document.getElementById("putButton")

const getCompliment = () => {
    axios.get("http://localhost:4001/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data)
    })
}

const getFortune = () => {
    axios.get("http://localhost:4001/api/fortune")
        .then(res => {
            const data = res.data;
            alert(data)
    })
}

const postGrade = () => {
    const gradeBody = {
        grade: postInput.value
    }
    axios.post("http://localhost:4001/api/postInput", gradeBody)
    .then ((res) => {
        alert(res.data)
    })
}

const changeGrade = () => {
    const changedgradeBody = {
        changedGrade: putInput.value
    }
    axios.put("http://localhost:4001/api/putInput", changedgradeBody)
    .then((res) => {
        alert(res.data)
    })
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
postButton.addEventListener('click', postGrade)
putButton.addEventListener('click', changeGrade)
// deleteButton.addEventListener('click', deleteGrade)





// const gradeCallback = ({ data: grade }) => displaygrade(grade)
// const errCallback = err => console.log(err)

// const postGrade = body => axios.post(baseURL, body).then(gradeCallback).catch(errCallback)
// const deleteGrade = id => axios.delete(`${baseURL}/${id}`).then(gradeCallback).catch(errCallback)