import Evento from '#models/evento'
import type { HttpContext } from '@adonisjs/core/http'

export default class EventosController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Evento.query().preload('inscricoes').preload('palestras').paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Evento.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(["nome", "localizacao", "data", "descricao"])
        return await Evento.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const evento = await Evento.findOrFail(params.id)
        const dados = request.only(["nome", "localizacao", "data", "descricao"])

        evento.merge(dados)
        return await evento.save()
    }

    async destroy({ params }: HttpContext) {
        const evento = await Evento.findOrFail(params.id)
        await evento.delete()
        return { msg: 'Registro deletado com sucesso', Evento }
    }
}
