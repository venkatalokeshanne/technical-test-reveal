import { fetchCitiesByCountry, fetchCountries } from "./services";

it("Testing api to get all cities", async function(){
    const response = await fetchCitiesByCountry('')
    expect(response.status).toEqual(200)
})

it("Testing api to get cities based on country", async function(){
    const response = await fetchCitiesByCountry('India')
    expect(response.status).toEqual(200)
})

it("Testing api to get all countries", async function(){
    const response = await fetchCountries()
    expect(response.status).toEqual(200)
})