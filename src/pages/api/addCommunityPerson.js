import { SiteClient } from 'datocms-client'

const client = new SiteClient(process.env.DATO_API_FULL_ACCESS_TOKEN)

export default async function addCommunityPerson(req, res) {
  if(req.method === 'POST') {
    const body = req.body
    const newCommunityPerson = await client.items.create({
      itemType: "968762", // model ID
      name: `${body.name}`,
      urlimage: `${body.urlImage}`,
      linkTo: `${body.linkTo}`,
      creatorSlug: `${body.creatorSlug}`,
    });

    res.json({
      ...newCommunityPerson
    })

    return
  } else {
    res.status(404).json({
      error: 'Invalid access'
    })
  }
}
