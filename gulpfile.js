var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');

gulp.task("default",function(){

  // console.log(1111);

});

gulp.task("cleCss",function(){
	gulp.src("./css/*css")
		.pipe(cleanCss())
		.pipe(gulp.dest("build/css"));
})

gulp.task("cleJs",function(){
	gulp.src("./js/*js")
		.pipe(uglify())
		.pipe(gulp.dest("build/js"));
})