import Palestra from '#models/palestra'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class PalestraSeeder extends BaseSeeder {
  async run() {
    await Palestra.createMany([
      {
        evento_id: 1,
        palestrante_id: 1,
        titulo: 'Liberação do casamento LGBT',
        descricao: 'debate sobre a liberação do casamento LGBT',
        horario: DateTime.fromISO('2024-06-01T10:00')
      },
      {
        evento_id: 2,
        palestrante_id: 2,
        titulo: 'Aumento de credito para aposentados',
        descricao: 'descurção para o aumento de credito e a diminuição do juros para aposentados',
        horario: DateTime.fromISO('2024-07-01T11:00')
      },
      {
        evento_id: 3,
        palestrante_id: 3,
        titulo: 'Taxa em compras ate 50 dol',
        descricao: 'Votação para a taxação das compras abaixo de 50 dol',
        horario: DateTime.fromISO('2024-08-01T12:00')
      },
    ])
  }
}
