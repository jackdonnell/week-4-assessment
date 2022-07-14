const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const postInput = document.getElementById("postInput")
const postButton = document.getElementById("postButton")

// const postInput = document.querySelector("#post-input")
// const postButton = document.querySelector("#post-button")
const baseURL = `http://localhost:4001`
// const putButton = document.querySelector('#put-button')



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

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
postButton.addEventListener('click', postGrade)
// putButton.addEventListener('click', changeGrade)
// deleteButton.addEventListener('click', deleteGrade)





// const gradeCallback = ({ data: grade }) => displaygrade(grade)
// const errCallback = err => console.log(err)

// const postGrade = body => axios.post(baseURL, body).then(gradeCallback).catch(errCallback)
// const deleteGrade = id => axios.delete(`${baseURL}/${id}`).then(gradeCallback).catch(errCallback)
// const newGrade = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(gradeCallback).catch(errCallback)