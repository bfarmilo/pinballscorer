// preact.config.js

export default function (config, env, helpers) {
  if (env.production) {
    config.output.publicPath = '/pinballscorer/'
  } 
  //config.plugins.push(defineConstants({ PUBLIC_PATH }))
}