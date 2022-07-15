let gradeStr = ''
module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        let randomIndex = Math.floor(Math.random() * compliments.length)
        let randomCompliment = compliments[randomIndex]
      
        res.status(200).send(randomCompliment)
    },
    getFortune: (req, res) => {
        const fortune = [
            "A hunch is creativity trying to tell you something.", "A lifetime friend shall soon be made.", "A lifetime of happiness lies ahead of you.", "A light heart carries you through all the hard times.", "A new perspective will come with the new year.", "A person of words and not deeds is like a garden full of weeds.", "A pleasant surprise is waiting for you.", "A short pencil is usually better than a long memory any day.", "A small donation is call for. It’s the right thing to do.", "A smile is your personal welcome mat.", "A smooth long journey! Great expectations.", "A soft voice may be awfully persuasive."
        ]
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },
//     deleteGrade: (req, res) => {
//         const existingId = +req.params.id
//         let index = grade.findIndex(grades => grade.id === existingId)
//         grade.splice(index, 1)
//         res.status(200).send(grade)
//     },
    postGrade: (req, res) => {
        console.log('endpoint hit')
        console.log(req.body)
        gradeStr = (req.body.grade)
        res.status(200).send(gradeStr)
    },
    changeGrade: (req, res) => {
        console.log('endpoint hit')
        console.log(req.params)
        console.log(req.body)
        gradeStr = req.body.changedGrade
        res.status(200).send(gradeStr)
    }

    }