module.exports = {
  packages: {
    'angular-slickgrid': {
      ignorableDeepImportMatchers: [
        /assign-deep/,
        /slickgrid\//,
        /flatpickr/,
        /dequal/,
        /jquery-ui\//,
      ]
    },
  }
};
