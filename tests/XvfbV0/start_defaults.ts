import ma = require('azure-pipelines-task-lib/mock-answer');
import tmrm = require('azure-pipelines-task-lib/mock-run');
import path = require('path');

let taskPath = path.join(__dirname, '..', '..', 'tasks', 'XvfbV0', 'index.js');
let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);

let a: ma.TaskLibAnswers = <ma.TaskLibAnswers> {
    "exec": {
        "/sbin/start-stop-daemon --start --make-pidfile --pidfile /tmp/start-stop-daemon_0.pid --background --exec /usr/bin/Xvfb -- :0 -ac -screen 0 1280x1024x8": {
            "code": 0,
            "stdout": "",
            "stderr": ""
        },
        "xdpyinfo -display :0": {
            "code": 0,
            "stdout": "",
            "stderr": ""
        }
    }
};

tmr.setAnswers(a)
tmr.setInput('action', 'start');
tmr.setInput('exportDisplay', 'true');
tmr.setInput('display', '0');
tmr.run();