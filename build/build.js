let node_env=process.argv[2];
process.env.NODE_ENV=node_env;


switch (node_env) {
  case 'prep':
    require('./prep-server')
    break;
  default:
    require('./local-server')
}
