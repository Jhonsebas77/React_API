 module.exports={
   entry:'./src/index.jsx',
   output:{
     path: __dirname + '/public/js',
     filename: 'bundle.js'
   },
   /**
    * Necesario para convertir JSX-> JS
    */
    module:{
      loaders:[
        {
          test:/\.jsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve:{
      extensions:['.js','.jsx'],
    }
 }
