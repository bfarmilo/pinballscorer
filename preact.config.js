// preact.config.js
import envVars from 'preact-cli-plugin-env-vars';


export default function (config, env, helpers) {
  envVars(config, env, helpers);
  if (env.production) {
    config.output.publicPath = '/pinballscorer/'
  } 
  //config.plugins.push(defineConstants({ PUBLIC_PATH }))
}