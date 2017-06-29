import express from 'express';
import path from 'path';

export const NODE_ENVRIOMENT = process.env.NODE_ENV;
export const DECRESCENT_ORDER = -1;
export const MAX_ITEM_PER_PAGE = 5;


/**
 * This function check if the running enviroment
 * is in production mode and if it is, delivery the public folder
 * @param {*} app express app
 */
export const webpackBridge = app => {
  if(NODE_ENVRIOMENT !== 'production') {
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('../webpack.config');

    app.use(webpackMiddleware(webpack(webpackConfig)));
  } else {
    app.use(express.static(path.resolve(__dirname, 'public')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '../public/', 'index.html'));
    })
  }
}