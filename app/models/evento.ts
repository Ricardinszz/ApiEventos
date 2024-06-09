import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Inscricoe from './inscricoe.js'
import Palestra from './palestra.js'

export default class Evento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare localizacao: string

  @column.dateTime()
  declare data: DateTime

  @column()
  declare descricao: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Inscricoe, {
    foreignKey: 'evento_id',
  })
  declare inscricoes: HasMany<typeof Inscricoe>

  @hasMany(() => Palestra, {
    foreignKey: 'evento_id',
  })
  declare palestras: HasMany<typeof Palestra>




}
