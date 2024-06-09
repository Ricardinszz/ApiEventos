import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Participantes extends BaseSchema {
  protected tableName = 'participantes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome').nullable()
      table.string('email').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
