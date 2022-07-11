const complimentBtn = document.getElementById("complimentButton")
const foruneBtn = document.getElementById("fortuneButton")
// const postInput = document.getElementById("post-input")
// const postButton = document.getElementById("post-button")

const postInput = document.querySelector("#post-input")
const postButton = document.querySelector("#post-button")
const baseURL = `http://localhost:4000`
// const putButton = document.querySelector('#put-button')



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data)
    })
}

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data)
    })
}
// const postGrade = () => {
// axios.post("http://localhost:4000")
//     .then (res => {
// const data = res.data
// console.log(data)
//     })
// }

complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener('click', getFortune)
// postButton.addEventListener('click', postGrade)
// putButton.addEventListener('click', changeGrade)
// deleteButton.addEventListener('click', deleteGrade)





// const gradeCallback = ({ data: grade }) => displaygrade(grade)
// const errCallback = err => console.log(err)

// const postGrade = body => axios.post(baseURL, body).then(gradeCallback).catch(errCallback)
// const deleteHouse = id => axios.delete(`${baseURL}/${id}`).then(gradeCallback).catch(errCallback)
// const newGrade = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(gradeCallback).catch(errCallback)