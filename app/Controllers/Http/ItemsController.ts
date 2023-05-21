import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'

export default class ItemsController {
  public async index({ request }: HttpContextContract) {
    const { page, perPage, ...input } = request.qs()
    const items = await Item.filter(input).paginate(page, perPage)
    return items
  }
}
