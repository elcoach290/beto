var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var connect = require('gulp-connect');
var imagemin = require('gulp-imagemin'); //Compresor de imágenes  
var imageminPngcrush = require('imagemin-pngcrush');
var notify = require('gulp-notify'); //Muestra un mensaje callback
var filter = require('gulp-filter');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var mainBowerFiles = require('main-bower-files');
var copy = require('gulp-copy');

var jadeSources = ['src/jade/*.jade'];
var scssSources = ['src/scss/main.scss'];

// Define default destination folder
var dest = 'dist/';



gulp.task('js', function() {

	var jsFiles = ['src/js/*'];

	gulp.src(mainBowerFiles().concat(jsFiles))
		.pipe(filter('**/*.js'))
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest(dest + 'js'));

});

// esta tarea copia archivos de src a dist

gulp.task('copyFilesToDist', function () {
    gulp.src(['bower_components/slick-carousel/slick/fonts/*']).pipe(gulp.dest('dist/fonts'));
    gulp.src(['src/videos/*']).pipe(gulp.dest('dist/videos'));
});





gulp.task('scss', function(){
	gulp.src(scssSources)
	.pipe(sass())
	.pipe(gulp.dest('./dist/css'))
	.pipe(connect.reload());
})

gulp.task('connect', function(){
	connect.server({
		root: 'dist/',
		port: 8000,
		livereload: true
		});
});

gulp.task('jade', function(){
	var LOCALS = {};
	gulp.src(jadeSources)
	.pipe(jade({
		locals: LOCALS,
		pretty: true
	}))
	.pipe(gulp.dest('./dist'))
	.pipe(connect.reload());
})


gulp.task('comprimir-images', function(){  
    gulp.src('./src/images/*.{png,jpg,jpeg,gif,svg}') //Ruta donde buscara las imágenes con extensiones .{png,jpg,jpeg,gif,svg} a comprimir
    .pipe(
        imagemin({
          plugins:[imageminPngcrush()] //Optimiza la conversión de imágenes PNG
        }))
    .pipe(gulp.dest('dist/images')) //Ruta donde se guardaran la imágenes comprimidas
    .pipe(notify("Ha finalizado la compresión de imágenes!")); //Muestra un mensaje cuando termina la tarea
});

gulp.task('watch', function(){
	gulp.watch('./src/scss/*.scss', ['scss']);
	gulp.watch('./src/jade/**/*.jade',['jade']);
	gulp.watch('./src/images/**/*',['comprimir-images']);
});
 

gulp.task('default', ['connect','jade', 'scss', 'watch', 'comprimir-images']);