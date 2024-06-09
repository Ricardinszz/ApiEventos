import EventosController from '#controllers/eventos_controller'
import ParticipantesController from '#controllers/participantes_controller'
import PalestrantesController from '#controllers/palestrantes_controller'
import InscricoesController from '#controllers/inscricoes_controller'
import PalestrasController from '#controllers/palestras_controller'

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/eventos', EventosController).apiOnly()
router.resource('/participantes', ParticipantesController).apiOnly()
router.resource('/palestrantes', PalestrantesController).apiOnly()
router.resource('/inscricoes', InscricoesController).apiOnly()
router.resource('/palestras', PalestrasController).apiOnly()