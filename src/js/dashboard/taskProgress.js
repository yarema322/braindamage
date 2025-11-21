function setProgress(id, percent) {
        const circle = document.getElementById(id);
        const label = document.getElementById("percent-" + id.split("-")[1]);
        const radius = 45;
        const circumference = 2 * Math.PI * radius;

        circle.style.strokeDasharray = circumference;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;

        label.textContent = `${percent}%`;
      }

      // znachenie progressa
      setProgress("progress-completed", 84);
      setProgress("progress-inprogress", 46);
      setProgress("progress-notstarted", 13);