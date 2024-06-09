import Palestrante from '#models/palestrante'
import type { HttpContext } from '@adonisjs/core/http'

export default class PalestrantesController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Palestrante.query().preload('palestras').paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Palestrante.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(["nome", "biografia"])
        return await Palestrante.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const palestrante = await Palestrante.findOrFail(params.id)
        const dados = request.only(["nome", "biografia"])

        palestrante.merge(dados)
        return await palestrante.save()
    }

    async destroy({ params }: HttpContext) {
        const palestrante = await Palestrante.findOrFail(params.id)
        await palestrante.delete()
        return { msg: 'Registro deletado com sucesso', Palestrante }
    }
}
