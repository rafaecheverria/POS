export default function ({ $axios }, inject) {
    const api = $axios.create({
        headers: {
            common:{
                Accept: 'text/plain, */*'
            }
        }
    })

    api.setBaseURL('http://localhost:8000/api/')

    inject('api', api)
}
