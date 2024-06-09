import Inscricoe from '#models/inscricoe'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class InscricoeSeeder extends BaseSeeder {
  async run() {
    await Inscricoe.createMany([
      {
        evento_id: 1,
        participante_id: 1,
        data_inscricao: DateTime.fromISO('2024-06-01')
      },
      {
        evento_id: 2,
        participante_id: 2,
        data_inscricao: DateTime.fromISO('2024-07-01')
      },
      {
        evento_id: 3,
        participante_id: 3,
        data_inscricao: DateTime.fromISO('2024-08-01')
      },
    ])
  }
}
