import Participante from '#models/participante'
import type { HttpContext } from '@adonisjs/core/http'

export default class ParticipantesController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Participante.query().preload('inscricoes').paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Participante.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(["nome", "email"])
        return await Participante.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const participante = await Participante.findOrFail(params.id)
        const dados = request.only(["nome", "email"])

        participante.merge(dados)
        return await participante.save()
    }

    async destroy({ params }: HttpContext) {
        const participante = await Participante.findOrFail(params.id)
        await participante.delete()
        return { msg: 'Registro deletado com sucesso', Participante }
    }
}
