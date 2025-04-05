chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        theme: { darkMode: false, color: "red" },
        modeLength: {
            focusLength: 25,
            shortBreakLength: 5,
            longBreakLength: 15,
            untilLongBreak: 2,
        },
        sound: true,
        notifications: true,
        pausing: true,
        states: { longBreakState: 4, currentState: 1 },
        timer: 1,
    });
});

chrome.alarms.create("timerAlarm", {
    periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "timerAlarm") {
        chrome.storage.local.get(["timer", "pausing"], (res) => {
            if (!res.pausing) {
                let timer = res.timer;
                let pausing = false;
                if (timer == 1 || timer == 0) {
                    pausing = true;
                    nextState();
                } else {
                    timer = res.timer - 1;
                }
                chrome.storage.local.set({
                    timer,
                    pausing,
                });

                chrome.runtime.sendMessage({ action: "updateTimer" });
            }
        });
    }
});

const nextState = function () {
    chrome.storage.local.get(
        ["states", "modeLength", "timer", "theme", "sound", "notifications"],
        (res) => {
            if (!res.states) {
                res.states = { longBreakState: 4, currentState: 1 };
            }

            res.states.currentState = res.states.currentState + 1;
            const currentState = res.states.currentState;
            console.log(res.states.currentState);
            if (currentState == res.states.longBreakState) {
                res.theme.color = "blue";
                res.timer = res.modeLength.longBreakLength * 60;
            } else if (currentState % 2 == 0) {
                res.theme.color = "green";
                res.timer = res.modeLength.shortBreakLength * 60;
            } else if (currentState % 2 == 1) {
                res.theme.color = "red";
                res.timer = res.modeLength.focusLength * 60;
            }

            chrome.storage.local.set({
                states: res.states,
                theme: res.theme,
                timer: res.timer,
            });

            chrome.runtime.sendMessage({ action: "updateTheme" });
            chrome.runtime.sendMessage({ action: "thickFont" });
            if (res.sound) {
                chrome.runtime.sendMessage({ action: "endSound" });
            }
            if (res.notifications) {
                const iconAddress =
                    res.theme.darkMode == true
                        ? "../../assets/icon/notificationIcon-dark.png"
                        : "../../assets/icon/notificationIcon-light.png";
                this.registration.showNotification("Pomodoro Timer", {
                    body: `${res.timeOption} minutes has passed!`,
                    icon: iconAddress,
                });
            }
        }
    );
};

chrome.storage.local.get(["states", "modeLength", "timer", "theme"], (res) => {
    if (!res.states) {
        res.states = { longBreakState: 4, currentState: 1 };
    } else {
        res.states.currentState = 1;
    }

    const focusLength = res.modeLength?.focusLength ?? 25;
    res.timer = focusLength * 60;

    if (!res.theme) {
        res.theme = { color: "red", darkMode: false };
    } else {
        res.theme.color = "red";
    }

    chrome.storage.local.set({
        states: res.states,
        timer: res.timer,
        theme: res.theme,
    });
});
