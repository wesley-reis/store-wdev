export default defineEventHandler(async (event) => {

    //handle query params
    // const { nome } = useQuery(event)

    //handle post data
    //const { idade } = await useBody(event)

    // return {
    //     message: `Ola ${nome}! você tem ${idade}`
    // }



    //api externa
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=5YZNlHrIsgWYscTdHAPUX0lU1e8SqyvOoKR5eqnI')

    return data;

})