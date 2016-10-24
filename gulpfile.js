/**
 * Created by 123 on 19.10.2016.
 */
var gulp = require('gulp'), //плагин галпа - основной через bower
    server = require('gulp-server-livereload'), //мини-ервер
    sass = require('gulp-sass'),//плагин для транспиляции sass
    prefix = require('gulp-autoprefixer'),//авто-префиксы при транспиляции в папку
    useref = require('gulp-useref'),  //для склейки файла
    gulpif = require('gulp-if'),      //склейка файлов js\сss - тоже плагин - посмотреть функции uglify and gulp-if
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-csso');

    //server
gulp.task('serv', function() {
    gulp.src('./app')
        .pipe(server({
            livereload: true,
            open: true
        }));
});

    //styles
gulp.task('style', function(){
   return gulp.src('./app/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix({
           browsers : ['last 15 versions']
       }))
        .pipe(gulp.dest('./app/css'));
});
    //таск для
gulp.task('build', function () {
    return gulp.src('./app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('public'));
});
    //перезагрузчик для наблюдения изменнения в реальном времени
gulp.task('watch', function(){
    gulp.watch('app/sass/**/*.sass',['style'])
});
    //запуск галпа по дефолту - в квадратных скобках стоят таски которые нужно выполнить при вызове gulp в терминале
gulp.task("default",['serv','watch']);

