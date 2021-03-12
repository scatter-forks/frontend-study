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
    ],
    plugins: ['@babel/plugin-proposal-class-properties']
};