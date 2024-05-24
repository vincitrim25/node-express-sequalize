import dbConfig from '../../config/db.config.js'
import { Sequelize } from 'sequelize'
import tutorial from './tutorial.model.js'
import comment from './comment.model.js'
import tag from './tag.model.js'

const sequalize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: dbConfig.pool
    }
);

const db = {};

db.Sequalize = Sequelize
db.sequalize = sequalize

db.tutorials = tutorial(sequalize, Sequelize);
db.comments = comment(sequalize, Sequelize);
db.tags = tag(sequalize, Sequelize);

db.tutorials.hasMany(db.comments, {as: 'comments'});
db.tutorials.belongsToMany(db.tags, {
    through: 'tutorial_tag',
    as: 'tags',
    foreignKey: 'tutorial_id'
});
db.comments.belongsTo(db.tutorials, {
    foreignKey: 'tutorial_id',
    as: 'tutorial'
});
db.tags.belongsToMany(db.tutorials, {
    through: 'tutorial_tag',
    as: 'tutorials',
    foreignKey: 'tag_id'
})

export default db;