var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch');


var path = {
  src: {
    sass: "sources/*.sass"
  },
  dest: {
    css: "public/styles/"
  }
};


gulp.task('sass', function() {
  return gulp.src(path.src.sass)
    .pipe(sourcemaps.init())
    //For production - Set output style == compressed
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer())
    // If we need sourcemaps
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.dest.css));
})


gulp.task('watch', function() {
  gulp.watch([path.src.sass], function(e) {
    gulp.start('sass');
  });
})



gulp.task('default', ['watch'],function() {
  console.log('Gulp is started!');
});