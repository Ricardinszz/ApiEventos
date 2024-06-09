import Palestrante from '#models/palestrante'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class PalestranteSeeder extends BaseSeeder {
  async run() {
    await Palestrante.createMany([
      {
        nome: 'Presidente das Igrejas',
        biografia: 'Biografia do Palestrante Presidente Igrejas'
      },
      {
        nome: 'Presidente do INSS',
        biografia: 'Biografia do Palestrante Presidente INSS'
      },
      {
        nome: 'Vice-presidente Geraldo Alckmin',
        biografia: 'Biografia do Palestrante Alckmin'
      },
    ])
  }
}
