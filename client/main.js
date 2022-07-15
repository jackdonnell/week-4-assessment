const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const postInput = document.getElementById("postInput")
const postButton = document.getElementById("postButton")
const putInput = document.getElementById("putInput")
const putButton = document.getElementById("putButton")
const deleteButton = document.getElementById("deleteButton")

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

    axios.put(`http://localhost:4001/api/putInput/${putInput.value}`, changedgradeBody)
    .then((res) => {
        alert(res.data)
    })
}

const deleteGrade = () => {
    const deletegradeBody = {
        deletedGrade: putInput.value
    }

    axios.delete(`http://localhost:4001/api/putInput/${putInput.value}`, deletegradeBody)
    .then((res) => {
        alert('Your grade has been deleted')
    })
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
postButton.addEventListener('click', postGrade)
putButton.addEventListener('click', changeGrade)
deleteButton.addEventListener('click', deleteGrade)