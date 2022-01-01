module.exports = {
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /.(png|jpg)$/,
  //     use: [
  //       {
  //         loader: "file-loader",
  //         options: {
  //           name: "[path][name].[ext]?[hash]",
  //           emitFile: false,
  //           publicPath: "/",
  //         },
  //       },
  //     ],
  //   });
  //   return config;
  // },
  webpack: {
    rules: [
      {
        test: /.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]?[hash]",
              emitFile: false,
              publicPath: "/",
            },
          },
        ],
      },
    ],
  },
};
