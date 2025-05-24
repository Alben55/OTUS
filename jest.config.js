module.exports = {
    testEnvironment: "node",
    verbose: true,
    collectCoverage: true,
    coverageReporters: ["html"],
    workerIdleMemoryLimit: '512MB',
    maxWorkers: 4,
    reporters: [
        "default",
        ["jest-html-reporters", {
          publicPath: "./html-report",
          filename: "report.html",
          expand: true,
          openReport: true
        }]
      ]
  };
  