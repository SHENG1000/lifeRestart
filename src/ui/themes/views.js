const pages = {
    LOADING: 'LOADING',
    MAIN: 'MAIN',
    TALENT: 'TALENT',
    PROPERTY: 'PROPERTY',
    TRAJECTORY: 'TRAJECTORY',
    SUMMARY: 'SUMMARY',
    ACHIEVEMENT: 'ACHIEVEMENT',
    THANKS: 'THANKS',
};

const popups = {
    ACHIEVEMENT: 'POPUP_ACHIEVEMENT',
};

const cyber = {
    pages: {
        [pages.LOADING]: "loading",
        [pages.MAIN]: "cyber/main",
        [pages.TALENT]: "cyber/talent",
        [pages.PROPERTY]: "cyber/property",
        [pages.TRAJECTORY]: "cyber/trajectory",
        [pages.SUMMARY]: "cyber/summary",
        [pages.ACHIEVEMENT]: "cyber/achievement",
        [pages.THANKS]: "cyber/thanks",
    },
    popups: {
        [popups.ACHIEVEMENT]: "cyber/popup/achievementPopup",
    },
    common: {
        grade0: '#cccccc',
        grade1: '#55fffe',
        grade2: '#b17cff',
        grade3: '#ffce45',
        filter0: '#ccccccff',
        filter0: '#55fffeff',
        filter0: '#b17cffff',
        filter0: '#ffce45ff',
    },
    configs: {
        bgColor: '#04131f',
    }
}

const def = {
    pages: {
        [pages.LOADING]: "loading",
        [pages.MAIN]: "default/main",
        [pages.TALENT]: "default/talent",
        [pages.PROPERTY]: "default/property",
        [pages.TRAJECTORY]: "default/trajectory",
        [pages.SUMMARY]: "default/summary",
        [pages.ACHIEVEMENT]: "default/achievement",
        [pages.THANKS]: "default/thanks",
    },
    popups: {
        [popups.ACHIEVEMENT]: "default/popup/achievementPopup",
    },
    configs: {
        bgColor: '#222831',
        common: {
            defaultFontColor: '#eeeeee',
            trajectoryItem: {
                box: {
                    defaultColor: '#4a5361',
                    defaultStroke: '#eeeeee',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#4a5361',
                    hoverStroke: '#eeeeee',
                    hoverLabel: '#eeeeee',
                    lineWidth: 2,
                    radius: 0,
                },
                ageColor: '#ffffee',
                contentColor: '#eeeeee',
            },
            grade: [
                '#cccccc',
                '#55fffe',
                '#b17cff',
                '#ffce45',
            ],
            filter: [
                '#ccccccff',
                '#55fffeff',
                '#b17cffff',
                '#ffce45ff',
            ],
            card: [
                {
                    normal: {
                        defaultColor: '#464646',
                        defaultStroke: '#f8f8f8',
                        defaultLabel: '#eeeeee',
                        hoverColor: '#c0c0c0',
                        hoverStroke: '#f8f8f8',
                        hoverLabel: '#3b3b3b',
                        lineWidth: 4,
                        radius: 4,
                    },
                    selected: {
                        defaultColor: '#c0c0c0',
                        defaultStroke: '#a5ff88',
                        defaultLabel: '#3b3b3b',
                        hoverColor: '#c0c0c0',
                        hoverStroke: '#a5ff88',
                        hoverLabel: '#3b3b3b',
                        lineWidth: 4,
                        radius: 4,
                    }
                },
                {
                    normal: {
                        defaultColor: '#6495ed',
                        defaultStroke: '#f8f8f8',
                        defaultLabel: '#eeeeee',
                        hoverColor: '#87cefa',
                        hoverStroke: '#f8f8f8',
                        hoverLabel: '#3b3b3b',
                        lineWidth: 4,
                        radius: 4,
                    },
                    selected: {
                        defaultColor: '#87cefa',
                        defaultStroke: '#a5ff88',
                        defaultLabel: '#3b3b3b',
                        hoverColor: '#87cefa',
                        hoverStroke: '#a5ff88',
                        hoverLabel: '#3b3b3b',
                        lineWidth: 4,
                        radius: 4,
                    }
                },
                {
                    normal: {
                        defaultColor: '#e2a7ff',
                        defaultStroke: '#f8f8f8',
                        defaultLabel: '#eeeeee',
                        hoverColor: '#e7beff',
                        hoverStroke: '#f8f8f8',
                        hoverLabel: '#3b3b3b',
                        lineWidth: 4,
                        radius: 4,
                    },
                    selected: {
                        defaultColor: '#e7beff',
                        defaultStroke: '#a5ff88',
                        defaultLabel: '#3b3b3b',
                        hoverColor: '#e7beff',
                        hoverStroke: '#a5ff88',
                        hoverLabel: '#3b3b3b',
                        lineWidth: 4,
                        radius: 4,
                    }
                },
                {
                    normal: {
                        defaultColor: '#ffa07a',
                        defaultStroke: '#f8f8f8',
                        defaultLabel: '#eeeeee',
                        hoverColor: '#f7a989',
                        hoverStroke: '#f8f8f8',
                        hoverLabel: '#3b3b3b',
                        lineWidth: 4,
                        radius: 4,
                    },
                    selected: {
                        defaultColor: '#f7a989',
                        defaultStroke: '#f8f8f8',
                        defaultLabel: '#3b3b3b',
                        hoverColor: '#f7a989',
                        hoverStroke: '#f8f8f8',
                        hoverLabel: '#3b3b3b',
                        lineWidth: 4,
                        radius: 4,
                    }
                }
            ],
            summary: [
                {
                    defaultColor: '#464646',
                    defaultStroke: '#f8f8f8',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#c0c0c0',
                    hoverStroke: '#f8f8f8',
                    hoverLabel: '#3b3b3b',
                    lineWidth: 2,
                    radius: 0,
                },{
                    defaultColor: '#6495ed',
                    defaultStroke: '#f8f8f8',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#87cefa',
                    hoverStroke: '#f8f8f8',
                    hoverLabel: '#3b3b3b',
                    lineWidth: 2,
                    radius: 0,
                },{
                    defaultColor: '#e2a7ff',
                    defaultStroke: '#f8f8f8',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#e7beff',
                    hoverStroke: '#f8f8f8',
                    hoverLabel: '#3b3b3b',
                    lineWidth: 2,
                    radius: 0,
                },
                {
                    defaultColor: '#ffa07a',
                    defaultStroke: '#f8f8f8',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#f7a989',
                    hoverStroke: '#f8f8f8',
                    hoverLabel: '#3b3b3b',
                    lineWidth: 2,
                    radius: 0,
                }
            ],
            achievement: [
                {
                    defaultColor: '#464646',
                    defaultStroke: '#f8f8f8',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#c0c0c0',
                    hoverStroke: '#f8f8f8',
                    hoverLabel: '#3b3b3b',
                    lineWidth: 4,
                    radius: 0,
                },{
                    defaultColor: '#6495ed',
                    defaultStroke: '#f8f8f8',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#87cefa',
                    hoverStroke: '#f8f8f8',
                    hoverLabel: '#3b3b3b',
                    lineWidth: 4,
                    radius: 0,
                },{
                    defaultColor: '#e2a7ff',
                    defaultStroke: '#f8f8f8',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#e7beff',
                    hoverStroke: '#f8f8f8',
                    hoverLabel: '#3b3b3b',
                    lineWidth: 4,
                    radius: 0,
                },
                {
                    defaultColor: '#ffa07a',
                    defaultStroke: '#f8f8f8',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#f7a989',
                    hoverStroke: '#f8f8f8',
                    hoverLabel: '#3b3b3b',
                    lineWidth: 4,
                    radius: 0,
                }
            ]
        },
        class: {
            btn_main: {
                defaultColor: '#393e46',
                defaultStroke: '#eeeeee',
                defaultLabel: '#eeeeee',
                hoverColor: '#ff7878',
                hoverStroke: '#eeeeee',
                hoverLabel: '#eeeeee',
                lineWidth: 2,
                radius: 4,
            },
            btn_small: {
                defaultColor: '#5865f2',
                defaultStroke: '#eeeeee',
                defaultLabel: '#eeeeee',
                hoverColor: '#1160b0',
                hoverStroke: '#eeeeee',
                hoverLabel: '#eeeeee',
                lineWidth: 0,
                radius: 4,
            },
            title: {
                color: '#ffffff',
            },
            font_default: {
                color: '#eeeeee',
            }
        },
        pages: {
            [pages.MAIN]: {
                vars: {
                    btnRemake: 'btn_main',
                    labTitle: { color: '#eeeeee' },
                    labSubTitle: { color: '#eeeeee' },
                },
                names: {
                    btnSmall: 'btn_small',
                }
            },
            [pages.TALENT]: {
                vars: {
                    btnDrawCard: 'btn_main',
                    btnNext: 'btn_main',
                    title: 'title',
                }
            },
            [pages.PROPERTY]: {
                vars: {
                    btnRandomAllocate: 'btn_main',
                    btnNext: 'btn_main',
                    title: 'title',
                },
                names: {
                    font_default: 'font_default',
                    property: {
                        colorFilter: '#eeeeeeff'
                    }
                }
            },
            [pages.TRAJECTORY]: {
                vars: {
                    btnSummary: 'btn_main',
                    boxTrajectory: {
                        defaultColor: '#393e46',
                        defaultStroke: '#eeeeee',
                        defaultLabel: '#eeeeee',
                        hoverColor: '#393e46',
                        hoverStroke: '#eeeeee',
                        hoverLabel: '#eeeeee',
                        lineWidth: 2,
                        radius: 4,
                    },
                    boxSpeed: {
                        colorFilter: '#ffffffff'
                    }
                },
                names: {
                    propertyBox: {
                        defaultColor: '#222831',
                        defaultStroke: '#eeeeee',
                        defaultLabel: '#eeeeee',
                        hoverColor: '#222831',
                        hoverStroke: '#eeeeee',
                        hoverLabel: '#eeeeee',
                        lineWidth: 2,
                        radius: 4,
                    },
                    propertyValue: {
                        defaultColor: '#eeeeee',
                        defaultStroke: '#eeeeee',
                        defaultLabel: '#222831',
                        hoverColor: '#eeeeee',
                        hoverStroke: '#eeeeee',
                        hoverLabel: '#222831',
                        lineWidth: 0,
                        radius: 4,
                    }
                }
            },
            [pages.SUMMARY]: {
                vars: {
                    btnAgain: 'btn_main',
                    title: 'title',
                },
                names: {
                    font_default: 'font_default',
                }
            },
            [pages.ACHIEVEMENT]: {
                vars: {
                    btnBack: 'btn_small',
                    btnRank: 'btn_small',
                },
                names: {
                    font_default: 'font_default',
                    title: 'title',
                }
            },
            [pages.THANKS]: {
                vars: {
                    btnBack: 'btn_small',
                },
            }
        },
        popups: {

        }
    }
}

const themes = { default: def, cyber };

export default { themes, pages, popups };