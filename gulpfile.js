///////////////////////////////////////////////
// NODE MODULES
// =========================

const	GULP = require('gulp');
const WATCH = require('gulp-watch');
const RENAME = require('gulp-rename');
const SASS = require('gulp-compass');
const MINCSS = require('gulp-minify-css');
const JSUGLIFY = require('gulp-uglify');
const JSCONCAT = require('gulp-concat');
const IMAGEMIN = require('gulp-imagemin');

// DEV COMPILE
///////////////////////////////////////////////

GULP.task('dev', function() {
	GULP.watch('_source/sass/**/*.sass', ['sass-dev']);
	GULP.watch('_source/js/**/*.js', ['js-dev', 'js-vendors']);
	GULP.watch('_source/assets/**/*', ['imagemin']);
});


// SASS & CSS
///////////////////////////////////////////////

GULP.task('sass-dev', function() {
	GULP.src('_source/sass/**/*.sass')
		.pipe(SASS({
			css: '_source/css',
			sass: '_source/sass'
		}))
		.pipe(GULP.dest('_source/css'))
		.pipe(RENAME({suffix: '.min'}))
		.pipe(GULP.dest('_html/_css'));
});

GULP.task('sass-prod', function() {
	GULP.src('_source/sass/**/*.sass')
		.pipe(SASS({
			css: '_source/css',
			sass: '_source/sass'
		}))
		.pipe(GULP.dest('_source/css'))
		.pipe(RENAME({suffix: '.min'}))
		.pipe(MINCSS())
		.pipe(GULP.dest('_html/_css'));
});

// JAVASCRIPT
///////////////////////////////////////////////

GULP.task('js-vendors', function(){
	GULP.src(['_source/js/vendors/**/*.js'])
		.pipe(RENAME({suffix: '.min'}))
		.pipe(GULP.dest('_html/_js/vendors'));
})

GULP.task('js-dev', function(){
	GULP.src(['_source/js/**/*.js', '!_source/js/vendors/**/*.js'])
		.pipe(JSCONCAT('app.min.js'))
		.pipe(GULP.dest('_html/_js'));
});

GULP.task('js-prod', function(){
	GULP.src(['_source/js/**/*.js', '!_source/js/vendors/**/*.js'])
		.pipe(JSCONCAT('*.js'))
		.pipe(JSUGLIFY())
		.pipe(RENAME('app.min.js'))
		.pipe(GULP.dest('_html/_js'));
});

// IMAGES
///////////////////////////////////////////////

GULP.task('imagemin', function(){
	GULP.src('_source/assets/**/*')
		.pipe(IMAGEMIN())
		.pipe(GULP.dest('_html/_assets/'));
});

// FONTS
///////////////////////////////////////////////

GULP.task('fonts', function(){
	GULP.src('_source/assets/fonts/**/*')
		.pipe(GULP.dest('_html/_assets/fonts/**/*'));
});
