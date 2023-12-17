import webpack, {Configuration, DefinePlugin} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';


export const buildPlugins = ({ paths, platform}: BuildOptions): Configuration['plugins'] => {

    return [new HtmlWebpackPlugin({template: paths.html}),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new BundleAnalyzerPlugin(),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform)
        }),
        new ForkTsCheckerWebpackPlugin(),
        // new ReactRefreshWebpackPlugin()
    ]
}