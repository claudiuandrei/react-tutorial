var gulp = require('gulp');

module.exports = function(config){
  return function(){
    return gulp
      .src(
        ['./public/src/index.html', './public/src/assets/**/*.*', './public/src/img/**/*.*', './public/src/jquery.min.map'],
        {base:'./public/src/'}
      )
      .pipe(gulp.dest('./public/dist'));
  };
};