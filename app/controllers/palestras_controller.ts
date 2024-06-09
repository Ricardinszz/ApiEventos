import Palestra from '#models/palestra'
import type { HttpContext } from '@adonisjs/core/http'

export default class PalestrasController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Palestra.query().preload('evento').preload('palestrante').paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Palestra.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(["evento_id", "palestrante_id", "titulo", "descricao", "horario"])
        return await Palestra.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const palestra = await Palestra.findOrFail(params.id)
        const dados = request.only(["evento_id", "palestrante_id", "titulo", "descricao", "horario"])

        palestra.merge(dados)
        return await palestra.save()
    }

    async destroy({ params }: HttpContext) {
        const palestra = await Palestra.findOrFail(params.id)
        await palestra.delete()
        return { msg: 'Registro deletado com sucesso', Palestra }
    }
}
