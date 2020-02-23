//configurações da base de dados de desenvolvimento

module.exports = {
  
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'nodeauth',
  dialect: 'postgres',
  //desabilitar waring
  operatorsAliases: false,
  //desabilitar logs
  loggin: false,
  define:{
    //faz com que toda tabela possua os campos created_at e updated_at
    timestamps: true,
    // faz com que as tabelas estejam no formato undeline, exemplo a tabela UserGroups se torna user_group
    underscored: true,
    // faz com que a regra como a de cima seja feita, também, nos campos da tabela
    underscoredAll: true

  }
}