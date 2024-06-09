import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Inscricoes extends BaseSchema {
  protected tableName = 'inscricoes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('evento_id').unsigned().references('id').inTable('eventos')
      table.integer('participante_id').unsigned().references('id').inTable('participantes')
      table.dateTime('data_inscricao').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}