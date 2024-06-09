import Inscricoe from '#models/inscricoe'
import type { HttpContext } from '@adonisjs/core/http'

export default class InscricoesController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Inscricoe.query().preload('evento').preload('participante').paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Inscricoe.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(["evento_id", "participante_id", "data_inscricao"])
        return await Inscricoe.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const inscricoe = await Inscricoe.findOrFail(params.id)
        const dados = request.only(["evento_id", "participante_id", "data_inscricao"])

        inscricoe.merge(dados)
        return await inscricoe.save()
    }

    async destroy({ params }: HttpContext) {
        const inscricoe = await Inscricoe.findOrFail(params.id)
        await inscricoe.delete()
        return { msg: 'Registro deletado com sucesso', Inscricoe }
    }
}
