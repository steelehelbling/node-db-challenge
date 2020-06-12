exports.up = function (knex, Promise) {
    return knex.schema
      .createTable("progects", (tbl) => {
        tbl.increments();
        tbl.string("progectName", 30).notNullable().unique();
        tbl.boolean("completed", true)
      })
  
      .createTable("resources", (tbl) => {
        tbl.increments();
        tbl.string("resourceName", 30).notNullable();
        tbl.integer("Progect_Id").references("progects.Id");
      })
  
      .createTable("tasks", (tbl) => {
        tbl.increments();
        tbl.string("taskName", 128);
        tbl.boolean("completed", true)
        tbl.string("description", 328);
        tbl.integer("Progect_Id").references("progects.Id");
      });
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema
      .dropTableIfExists("tasks")
      .dropTableIfExists("resources")
      .dropTableIfExists("progects");
  };