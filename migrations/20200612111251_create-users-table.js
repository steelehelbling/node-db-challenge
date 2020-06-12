exports.up = function (knex, Promise) {
    return knex.schema
      .createTable("progects", (tbl) => {
        tbl.increments();
        tbl.string("progectName", 30).notNullable().unique();
        tbl.string("description", 328);
        tbl.boolean("completed", 0)
      })
  
      .createTable("resources", (tbl) => {
        tbl.increments();
        tbl.string("resourceName", 30).notNullable();
        tbl.string("description", 328);
        tbl.integer("Progect_Id").references("progects.Id");
      })
  
      .createTable("tasks", (tbl) => {
        tbl.increments();
        tbl.string("taskName", 128);
        tbl.boolean("completed", 0)
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