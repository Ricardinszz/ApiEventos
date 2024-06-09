import Evento from '#models/evento'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class EventoSeeder extends BaseSeeder {
  async run() {
    await Evento.createMany([
      {
        nome: 'Reunião com Papa',
        localizacao: 'Localização A',
        data: DateTime.fromISO('2024-06-01'),
        descricao: 'Descrição do Evento A'
      },
      {
        nome: 'Reunião com Lupi',
        localizacao: 'Localização B',
        data: DateTime.fromISO('2024-07-01'),
        descricao: 'Descrição do Evento B'
      },
      {
        nome: 'Reunião com Presidente da Republica',
        localizacao: 'Localização C',
        data: DateTime.fromISO('2024-08-01'),
        descricao: 'Descrição do Evento C'
      },
    ])
  }
}
