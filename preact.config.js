// preact.config.js


export default function (config, env, helpers) {
  config.module.loaders.push({test:/\.mp3|m4a$/, loader: env.production ? 'file-loader' : 'url-loader'})
  if (env.production) {
    config.output.publicPath = '/'
  } 
  //config.plugins.push(defineConstants({ PUBLIC_PATH }))
}