const gulp = require('gulp');

var connect = require('gulp-connect');

//使用connect启动一个Web服务器
gulp.task('connect',function(){
	connect.server({
		root:'./',
        host:'10.1.117.60',// 默认localhost，这里改为了本机ip
		port:'8000',
		livereload: true
	})
});

//html任务
gulp.task('html',function(){
	gulp.src('./*.html')
	.pipe(connect.reload());
});

//创建watch任务去检测html文件,其定义了当html改动之后，去调用一个Gulp的Task
gulp.task('html:watch', function () {
  gulp.watch(['./*.html'], ['html']);
});

//运行gulp 默认的Task
gulp.task('default',['connect','html','html:watch'])