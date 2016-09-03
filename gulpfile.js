var gulp = require('gulp'),
    connect = require('gulp-connect'),
    historyApiFallback = require('connect-history-api-fallback');

// task server
gulp.task('server', function(){
    connect.server({
        root: './dev',
        port: 3000,
        livereload: true,
        middleware: function(connect, opt){
            return [historyApiFallback({})];
        }
    });
});

gulp.task('html', function(){
    gulp.src('./dev/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function(){
    gulp.watch(['./dev/*.html'],['html']);
});

gulp.task('default', ['server', 'watch']);

// task dev
gulp.task('dev.materialize', function(){
    gulp.src('node_modules/materialize-css/dist/css/materialize.css')
    .pipe(gulp.dest('dev/css/'));

    gulp.src('node_modules/materialize-css/dist/js/materialize.js')
    .pipe(gulp.dest('dev/app/js/'));
});

gulp.task('dev.normalize.css', function(){
    gulp.src('node_modules/normalize.css/normalize.css')
    .pipe(gulp.dest('dev/css/'))
});

gulp.task('dev.jquery.js', function(){
    gulp.src('node_modules/jquery/dist/jquery.js')
    .pipe(gulp.dest('dev/app/js/'));
});

gulp.task('dev.angular.js', function(){
    gulp.src('node_modules/angular/angular.js')
    .pipe(gulp.dest('dev/app/js/'));

    gulp.src('node_modules/angular-route/angular-route.js')
    .pipe(gulp.dest('dev/app/js/'));
});