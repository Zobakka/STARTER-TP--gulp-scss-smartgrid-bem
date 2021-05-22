"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {

    delete require.cache[require.resolve("./../.smart-grid")];

    const settings = require("./../.smart-grid");

    smartgrid("./src/styles/vendor/import/", settings);
    
    cb();
});
