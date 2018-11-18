
let gulp = require('gulp') //加载gulp模块
let pro = require('child_process') //运行子进程库
let sftp = require('gulp-sftp') //sftp上传程序
let address='/server/html/zhuancaiqian';
let projectName='zhuancaiqian'

let username='root';
let password='819819819qQ';

let  assets = process.cwd() + '/'+projectName,
  remoteServer1Prep = {
      host: '47.92.74.29',
      port: 22,
      remotePath: address,
      user: username,
      pass: password
  }


const build = (env) => {
    return new Promise((resolve, reject) => {
        pro.exec('npm run '+env, (error, stdout, stderr) => {
            if (error !== null) {
                console.log('exec error: ' + error)
            }
            resolve()
            console.log('build codeing finished')
        })
    })
}

//先执行build命令打包。在把程序上传至服务器
gulp.task('prep', () => build('realPrep').then(() => {
    gulp.src(assets + '/**').pipe(sftp(remoteServer1Prep))
}))

