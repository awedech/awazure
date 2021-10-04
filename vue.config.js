module.exports = {
    transpileDependencies: [
    'vuetify'
    ],
    devServer:{
        proxy :'https://awazure-apim.azure-api.net/pfetch'
    }
}

