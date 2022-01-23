import sanityClient from "@sanity/client"

export default sanityClient({
    projectId: "m8831o6m",
    dataset: "production",
    apiVersion: "2021-03-25",
    token: process.env.sanity_token,
    useCdn: false
})