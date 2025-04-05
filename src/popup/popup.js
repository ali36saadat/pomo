let iconSVG = [
    "M31 16.5a7 7 0 0 0-4-6.325V9a6 6 0 0 0-11-3.312A6 6 0 0 0 5 9v1.175a7 7 0 0 0 0 12.65V23a6 6 0 0 0 11 3.313A6 6 0 0 0 27 23v-.175a7.012 7.012 0 0 0 4-6.325ZM11 27a4 4 0 0 1-3.975-3.575c.322.05.648.076.975.075h1a1 1 0 1 0 0-2H8a5 5 0 0 1-1.663-9.713 1.012 1.012 0 0 0 .663-.95V9a4 4 0 0 1 8 0v9.538A5.925 5.925 0 0 0 11 17a1 1 0 1 0 0 2 4 4 0 0 1 0 8Zm13-5.5h-1a1 1 0 0 0 0 2h1c.326 0 .652-.024.975-.075A4 4 0 1 1 21 19a1 1 0 1 0 0-2 5.925 5.925 0 0 0-4 1.538V9a4 4 0 1 1 8 0v1.838a1.012 1.012 0 0 0 .663.95A5 5 0 0 1 24 21.5ZM7.5 16a1 1 0 1 1 0-2 2.513 2.513 0 0 0 2.5-2.5v-1a1 1 0 1 1 2 0v1A4.5 4.5 0 0 1 7.5 16Zm18-1a1 1 0 0 1-1 1 4.5 4.5 0 0 1-4.5-4.5v-1a1 1 0 1 1 2 0v1a2.513 2.513 0 0 0 2.5 2.5 1 1 0 0 1 1 1Z",
    "M10 7V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0Zm5 1a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Zm4 0a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Zm12 7v1a5 5 0 0 1-4.688 4.988A12.25 12.25 0 0 1 22.938 26H26a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h3.063A12.05 12.05 0 0 1 3 17v-6a1 1 0 0 1 1-1h22a5 5 0 0 1 5 5Zm-6-3H5v5a10.037 10.037 0 0 0 5.637 9h8.726a10.039 10.039 0 0 0 5.237-6.238.176.176 0 0 0 .025-.075A9.626 9.626 0 0 0 25 17v-5Zm4 3a3 3 0 0 0-2-2.825V17c0 .628-.05 1.255-.15 1.875A3 3 0 0 0 29 16v-1Z",
];
let endSound = new Audio("../sounds/end.m4a");
let startSound = new Audio("../sounds/start.m4a");

const setTheme = function () {
    chrome.storage.local.get("theme", (data) => {
        let mode, color;

        mode = data.theme.darkMode;
        color = data.theme.color;
        const modeText = document.querySelector(".pomo__mode--text");
        const modeIcon = document.querySelector(".pomo--icon-path");

        if (mode) {
            if (color == "red") {
                //dark red
                document.documentElement.style.setProperty(
                    "--color-main-1",
                    "255, 242, 242"
                );
                document.documentElement.style.setProperty(
                    "--color-main-2",
                    "185, 55, 55"
                );
                document.documentElement.style.setProperty(
                    "--color-background",
                    "0, 0, 0"
                );

                modeText.textContent = "Focus";

                modeIcon.setAttribute("d", iconSVG[0]);
            } else if (color == "green") {
                //dark green
                document.documentElement.style.setProperty(
                    "--color-main-1",
                    "242, 255, 245"
                );
                document.documentElement.style.setProperty(
                    "--color-main-2",
                    "50, 140, 70"
                );
                document.documentElement.style.setProperty(
                    "--color-background",
                    "0, 0, 0"
                );

                modeText.textContent = "Short Break";

                modeIcon.setAttribute("d", iconSVG[1]);
            } else if (color == "blue") {
                //dark blue
                document.documentElement.style.setProperty(
                    "--color-main-1",
                    "242, 249, 255"
                );
                document.documentElement.style.setProperty(
                    "--color-main-2",
                    "49, 110, 163"
                );
                document.documentElement.style.setProperty(
                    "--color-background",
                    "0, 0, 0"
                );

                modeText.textContent = "Long Break";

                modeIcon.setAttribute("d", iconSVG[1]);
            }
        } else {
            if (color == "red") {
                //red
                document.documentElement.style.setProperty(
                    "--color-main-1",
                    "71, 21, 21"
                );
                document.documentElement.style.setProperty(
                    "--color-main-2",
                    "255, 124, 124"
                );
                document.documentElement.style.setProperty(
                    "--color-background",
                    "255, 255, 255"
                );

                modeText.textContent = "Focus";

                modeIcon.setAttribute("d", iconSVG[0]);
            } else if (color == "green") {
                // green
                document.documentElement.style.setProperty(
                    "--color-main-1",
                    "20, 64, 29"
                );
                document.documentElement.style.setProperty(
                    "--color-main-2",
                    "140, 232, 161"
                );
                document.documentElement.style.setProperty(
                    "--color-background",
                    "255, 255, 255"
                );

                modeText.textContent = "Short Break";

                modeIcon.setAttribute("d", iconSVG[1]);
            } else if (color == "blue") {
                //blue
                document.documentElement.style.setProperty(
                    "--color-main-1",
                    "21, 48, 71"
                );
                document.documentElement.style.setProperty(
                    "--color-main-2",
                    "139, 202, 255"
                );
                document.documentElement.style.setProperty(
                    "--color-background",
                    "255, 255, 255"
                );

                modeText.textContent = "Long Break";

                modeIcon.setAttribute("d", iconSVG[1]);
            }
        }
    });
};

document
    .querySelector("#darkModeSetting")
    .addEventListener("click", function () {
        chrome.storage.local.get("theme", (data) => {
            if (data.theme) {
                data.theme.darkMode = !data.theme.darkMode;

                chrome.storage.local.set({ theme: data.theme });

                setTheme();
            }
        });
    });

const theme = function (e) {
    document.documentElement.style.setProperty(
        "--color-main-1",
        "140, 232, 161"
    );
};

document.querySelector(".setting-btn").addEventListener("click", function () {
    document.querySelector(".setting").classList.remove("hidden");
});

document
    .querySelector(".setting__top--icon")
    .addEventListener("click", function () {
        document.querySelector(".setting").classList.add("hidden");
    });

//Set Data
chrome.storage.local.get("theme", (data) => {
    if (data.theme.darkMode) {
        document.querySelector("#darkModeSetting").checked = true;
    }
    setTheme();
});

chrome.storage.local.get("modeLength", (data) => {
    if (data.modeLength.focusLength) {
        document.querySelector("#focusLengthSetting").value =
            data.modeLength.focusLength;
    }
});

chrome.storage.local.get("modeLength", (data) => {
    if (data.modeLength.shortBreakLength) {
        document.querySelector("#shortBreakLengthSetting").value =
            data.modeLength.shortBreakLength;
    }
});

chrome.storage.local.get("modeLength", (data) => {
    if (data.modeLength.longBreakLength) {
        document.querySelector("#longBreakLengthSetting").value =
            data.modeLength.longBreakLength;
    }
});

chrome.storage.local.get("modeLength", (data) => {
    if (data.modeLength.untilLongBreak) {
        document.querySelector("#untilLongBreakSetting").value =
            data.modeLength.untilLongBreak;
    }
});

chrome.storage.local.get("sound", (data) => {
    if (data.sound) {
        document.querySelector("#soundSetting").checked = true;
    }
});

document.querySelector("#soundSetting").addEventListener("click", function () {
    chrome.storage.local.get("sound", (data) => {
        data.sound = !data.sound;
        chrome.storage.local.set({ sound: data.sound });
    });
});

chrome.storage.local.get("sound", (data) => {
    if (data.notifications) {
        document.querySelector("#notificationsSetting").checked = true;
    }
});

document
    .querySelector("#notificationsSetting")
    .addEventListener("click", function () {
        chrome.storage.local.get("notifications", (data) => {
            data.notifications = !data.notifications;
            chrome.storage.local.set({ notifications: data.notifications });
        });
    });

chrome.storage.local.get("notifications", (data) => {
    if (data.notifications) {
        document.querySelector("#notificationsSetting").checked = true;
    }
});

chrome.storage.local.get("pausing", (data) => {
    if (data.pausing) return;
    document
        .querySelectorAll(".timer__text")
        .forEach((e) => e.classList.toggle("timer__text-active"));
});

chrome.storage.local.get("timer", (data) => {
    updateTimer();
});

document.querySelector("#launchButton").addEventListener("click", function () {
    chrome.storage.local.get(["pausing", "sound"], (data) => {
        data.pausing = !data.pausing;

        if (!data.pausing && data.sound) {
            startSound.load();
            startSound.play();
        }

        chrome.storage.local.set({ pausing: data.pausing });
        document
            .querySelectorAll(".timer__text")
            .forEach((e) => e.classList.toggle("timer__text-active"));
    });
});

document
    .querySelector("#nextModeButton")
    .addEventListener("click", function () {
        chrome.storage.local.get(
            ["states", "theme", "modeLength", "pausing", "timer"],
            (data) => {
                [s, th, m, p, t] = [
                    data.states,
                    data.theme,
                    data.modeLength,
                    data.pausing,
                    data.timer,
                ];
                p = true;

                chrome.storage.local.set({
                    pausing: p,
                });

                if (s.currentState < s.longBreakState) {
                    s.currentState = s.currentState + 1;
                } else {
                    s.currentState = 1;
                }
                chrome.storage.local.set({ states: s }, () => {
                    const currentState = s.currentState;

                    if (currentState == s.longBreakState) {
                        if (th) {
                            th.color = "blue";
                            t = data.modeLength.longBreakLength * 60;
                            chrome.storage.local.set({
                                theme: th,
                                timer: t,
                            });

                            updateTimer();
                            setTheme();
                        }
                    } else if (currentState % 2 == 0) {
                        if (th) {
                            th.color = "green";
                            t = data.modeLength.shortBreakLength * 60;
                            chrome.storage.local.set({
                                theme: th,
                                timer: t,
                            });

                            updateTimer();
                            setTheme();
                        }
                    } else {
                        if (th) {
                            th.color = "red";
                            t = data.modeLength.focusLength * 60;
                            chrome.storage.local.set({
                                theme: th,
                                timer: t,
                            });

                            updateTimer();
                            setTheme();
                        }
                    }

                    document
                        .querySelectorAll(".timer__text")
                        .forEach((e) =>
                            e.classList.remove("timer__text-active")
                        );
                });
            }
        );
    });

//UPDATE TIMER
chrome.runtime.onMessage.addListener(function (request) {
    if (request.action === "updateTheme") {
        setTheme();
    }

    if (request.action === "updateTimer") {
        updateTimer();
    }

    if (request.action === "thickFont") {
        document
            .querySelectorAll(".timer__text")
            .forEach((e) => e.classList.remove("timer__text-active"));
    }

    if (request.action === "endSound") {
        endSound.load();
        endSound.play();
    }
});

const updateTimer = function () {
    chrome.storage.local.get(["timer"], (res) => {
        const minTimer = String(Math.floor(res.timer / 60)).padStart(2, "0");
        const secTimer = String(res.timer % 60).padStart(2, "0");
        document.querySelector(".timer__text--min").textContent = minTimer;
        document.querySelector(".timer__text--sec").textContent = secTimer;
    });
};

document
    .querySelector("#focusLengthSetting")
    .addEventListener("blur", function () {
        let inputValue = document.querySelector("#focusLengthSetting").value;

        if (inputValue < 0) {
            inputValue = 0;
        } else if (inputValue > 99) {
            inputValue = 99;
        }

        document.querySelector("#focusLengthSetting").value = inputValue;

        chrome.storage.local.get("modeLength", (data) => {
            data.modeLength.focusLength = inputValue;
            chrome.storage.local.set({ modeLength: data.modeLength });
        });
    });

document
    .querySelector("#shortBreakLengthSetting")
    .addEventListener("blur", function () {
        let inputValue = document.querySelector(
            "#shortBreakLengthSetting"
        ).value;

        if (inputValue < 0) {
            inputValue = 0;
        } else if (inputValue > 99) {
            inputValue = 99;
        }

        document.querySelector("#shortBreakLengthSetting").value = inputValue;

        chrome.storage.local.get("modeLength", (data) => {
            data.modeLength.shortBreakLength = inputValue;
            chrome.storage.local.set({ modeLength: data.modeLength });
        });
    });

document
    .querySelector("#longBreakLengthSetting")
    .addEventListener("blur", function () {
        let inputValue = document.querySelector(
            "#longBreakLengthSetting"
        ).value;
        if (inputValue < 0) {
            inputValue = 0;
        } else if (inputValue > 99) {
            inputValue = 99;
        }

        document.querySelector("#longBreakLengthSetting").value = inputValue;

        chrome.storage.local.get("modeLength", (data) => {
            data.modeLength.longBreakLength = inputValue;
            chrome.storage.local.set({ modeLength: data.modeLength });
        });
    });

document
    .querySelector("#untilLongBreakSetting")
    .addEventListener("blur", function () {
        let inputValue = document.querySelector("#untilLongBreakSetting").value;

        if (inputValue <= 0) {
            inputValue = 1;
        } else if (inputValue > 9) {
            inputValue = 9;
        }

        document.querySelector("#untilLongBreakSetting").value = inputValue;
        const newLongBreakState = inputValue * 2;

        chrome.storage.local.get(["states", "modeLength"], (data) => {
            let currentState = data.states.currentState;
            data.states.longBreakState = newLongBreakState;
            data.modeLength.untilLongBreak = inputValue;
            if (currentState > newLongBreakState) {
                data.states.currentState =
                    (currentState % 2) + newLongBreakState - 2;
            }
            chrome.storage.local.set({
                states: data.states,
                modeLength: data.modeLength,
            });
        });
    });
