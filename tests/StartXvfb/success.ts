import ma = require('azure-pipelines-task-lib/mock-answer');
import tmrm = require('azure-pipelines-task-lib/mock-run');
import path = require('path');

let taskPath = path.join(__dirname, '..','..', 'tasks', 'StartXvfb', 'index.js');
let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);

let a: ma.TaskLibAnswers = <ma.TaskLibAnswers> {
    "which": {
        "/sbin/start-stop-daemon": "/sbin/start-stop-daemon"
    },
    "exec": {
        "/sbin/start-stop-daemon --start --background --make-pidfile --pidfile /tmp/custom_xvfb_13.pid --exec /usr/bin/Xvfb -- :13 -ac -screen 0 1280x1024x16": {
            "code": 0,
            "stdout": "",
            "stderr": ""
        },
        "/sbin/start-stop-daemon --status --pidfile /tmp/custom_xvfb_13.pid": {
            "code": 0,
            "stdout": "",
            "stderr": ""
        }
    }
};
tmr.setAnswers(a)

tmr.setInput('display', '13');
tmr.setInput('screen', '1280x1024x16');

tmr.run();