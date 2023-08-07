module.exports = {
    apps: [
        {
            name: 'EduAIR',
            port: '3000',//自定义的端口
            exec_mode: 'cluster',//cluster  fork
            instances: 'max',//max 1
            script: './server/index.mjs'
        }
    ]
}