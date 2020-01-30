import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-bc79e.firebaseio.com'
})