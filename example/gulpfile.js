var
   gulp    = require('gulp')
  ,plumber = require('gulp-plumber')
  ,htmlInc = require('gulp-htmlinc') /* local module */
  ,dist         = './htdocs'
  ,src          = './src'
  ,defaultTasks = [ 'watch', 'html:inc' ]
  ,watchTasks   = [ 'html:inc' ]
  ,watchFiles   = [ src + '/**/*.html' ]
;

gulp.task( 'html:inc', function() {
  return gulp
    .src( [ src + '/html/_includes/**/*.html' ] )
    .pipe( plumber() )
    .pipe( htmlInc( dist ) )
  ;
})
;

gulp.task('watch', function() {
 gulp.watch( watchFiles, watchTasks );
})
;

gulp.task( 'default', defaultTasks );