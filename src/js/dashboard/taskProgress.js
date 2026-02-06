import { getTasksFromStorage } from "../common/storage.js";

const tasks = getTasksFromStorage();
const total = tasks.length || 1;

const percentOfNotStarted = Math.round((tasks.filter(task => task.status === "not-started").length / total) * 100);
const percentOfInProgress = Math.round((tasks.filter(task => task.status === "in-progress").length / total) * 100);
const percentOfCompleted = Math.round((tasks.filter(task => task.status === "completed").length / total) * 100);
  

function setProgress(id, percent) {
        const circle = document.getElementById(id);
        const label = document.getElementById("percent-" + id.split("-")[1]);
        if (!circle || !label) {return;}

        const radius = 45;
        const circumference = 2 * Math.PI * radius;

        circle.style.strokeDasharray = circumference;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;

        label.textContent = `${percent}%`;
      }

      setProgress("progress-completed", percentOfCompleted);
      setProgress("progress-inprogress", percentOfInProgress);
      setProgress("progress-notstarted", percentOfNotStarted);
