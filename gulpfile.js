const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify-es").default;
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const del = require("del");

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });
}

function cleanDist() {
  return del("dist");
}

function scripts() {
  return src([
    //'node_modules/slick-carousel/slick/slick.js',
    //'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
    "app/js/main.js",
  ])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function styles() {
  return (
    src("app/scss/*.scss")
      .pipe(sourcemaps.init())
      .pipe(scss({ outputStyle: "compressed" }))
      .pipe(concat("style.min.css"))
      // .pipe(rename({
      //     suffix: '.min'
      // }))
      .pipe(
        autoprefixer({
          overrideBrowserslist: ["last 2 version"],
          cascade: false,
          grid: true,
        })
      )
      .pipe(sourcemaps.write("."))
      .pipe(dest("app/css"))
      .pipe(browserSync.stream())
  );
}

function build() {
  return src(
    [
      "app/css/*",
      "app/fonts/**/*",
      "app/images/**/*",
      "app/js/*.js",
      "!app/js/main.js",
      "app/*.html",
    ],
    { base: "app" }
  ).pipe(dest("dist"));
}

function watching() {
  watch(["app/scss/**/*.scss"], styles);
  watch(["app/js/**/*.js", "!app/js/main.min.js"], scripts);
  watch(["app/*.html"]).on("change", browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, build);
exports.default = parallel(styles, scripts, browsersync, watching);
