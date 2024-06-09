import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Palestrante from './palestrante.js'
import Evento from './evento.js'

export default class Palestra extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare evento_id: number

  @column()
  declare palestrante_id: number

  @column()
  declare titulo: string

  @column()
  declare descricao: string

  @column.dateTime()
  declare horario: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Evento, {
    foreignKey: 'evento_id',
  })
  declare evento: BelongsTo<typeof Evento>

  @belongsTo(() => Palestrante, {
    foreignKey: 'palestrante_id',
  })
  declare palestrante: BelongsTo<typeof Palestrante>

}
