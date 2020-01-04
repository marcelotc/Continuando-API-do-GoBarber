module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'gobarber',
    define: {
        timestamps: true, //Cria uma coluna created at e updated at
        underscored: true,
        underscoredAll: true
    }
};