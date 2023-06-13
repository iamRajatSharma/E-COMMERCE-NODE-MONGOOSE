const axios = require("axios")
const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
const certificate = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
const outcomes = "<ul class='list-checked primary'> <li>Over 37 lectures and 55.5 hours of content!</li> <li>LIVE PROJECT End to End Software Testing Training Included.</li> <li>Learn Software Testing and Automation basics from a professional trainer from your own desk.</li> <li>Information packed practical training starting from basics to advanced testing techniques.</li> <li>Best suitable for beginners to advanced level users and who learn faster when demonstrated.</li> <li>Course content designed by considering current software testing technology and the job market.</li> <li>Practical assignments at the end of every session.</li> <li>Practical learning experience with live project work and examples.cv</li></ul>"
const language = "English"
const assesment = "Yes"
const skill_level = "Beginner"

const url = "https://random-data-api.com/api/v2/users"
const creatorDetails = async () => {
    await axios.get(url)
        .then((resp) => {
            return resp
        })
        .then((resp) => {
            console.log(resp.data)
            const name = resp.data.first_name + " " + resp.data.last_name
            const email = resp.data.email
        })
}
const data = creatorDetails()


const addNewCourse = () => {


}

addNewCourse();