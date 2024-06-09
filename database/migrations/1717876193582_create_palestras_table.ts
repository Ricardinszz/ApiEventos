import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Palestras extends BaseSchema {
  protected tableName = 'palestras'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('evento_id').unsigned().references('id').inTable('eventos')
      table.integer('palestrante_id').unsigned().references('id').inTable('palestrantes')
      table.string('titulo').nullable()
      table.string('descricao').nullable()
      table.time('horario').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
