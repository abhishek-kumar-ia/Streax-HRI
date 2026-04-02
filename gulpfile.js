const { src, dest, watch, series } = require("gulp");
const sassCompiler = require("gulp-sass")(require("sass"));

const paths = {
  scssEntry: "sass/main.scss",
  scssAll: "sass/**/*.scss",
  cssDest: "css"
};

function styles() {
  return src(paths.scssEntry, { sourcemaps: true })
    .pipe(
      sassCompiler({
        outputStyle: "expanded"
      }).on("error", sassCompiler.logError)
    )
    .pipe(dest(paths.cssDest, { sourcemaps: "." }));
}

function watchScss() {
  watch(paths.scssAll, styles);
}

exports.styles = styles;
exports.start = series(styles, watchScss);
exports.default = exports.start;
