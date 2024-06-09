import Participante from '#models/participante'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ParticipanteSeeder extends BaseSeeder {
  async run() {
    await Participante.createMany([
      {
        nome: 'Papa',
        email: 'papa@email.com'
      },
      {
        nome: 'Lupi',
        email: 'lupi@email.com'
      },
      {
        nome: 'Lula',
        email: 'lula@email.com'
      },
    ])
  }
}
