module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        [
            "react-app",
            {
                "runtime": "automatic"
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: ['@babel/plugin-proposal-class-properties']
};