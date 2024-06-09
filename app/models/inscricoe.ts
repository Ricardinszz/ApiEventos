import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Evento from './evento.js'
import Participante from './participante.js'

export default class Inscricoe extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare evento_id: number

  @column()
  declare participante_id: number

  @column.dateTime()
  declare data_inscricao: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Evento, {
    foreignKey: 'evento_id',
  })
  declare evento: BelongsTo<typeof Evento>

  @belongsTo(() => Participante, {
    foreignKey: 'participante_id',
  })
  declare participante: BelongsTo<typeof Participante>

}
