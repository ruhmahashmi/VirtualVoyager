var timelineData = {
    events: [
        {
            start_date: {
                year: "1947",
                month: "08",
                day: "14"
            },
            text: {
                headline: "Independence Day",
                text: "Pakistan gains independence from British rule."
            },
            media: {
                url: "https://en.wikipedia.org/wiki/Independence_Day_(Pakistan)",
                caption: "Learn more about Independence Day"
            }
        },
        {
            start_date: {
                year: "1956",
                month: "03",
                day: "23"
            },
            text: {
                headline: "First Constitution",
                text: "Pakistan adopts its first constitution and becomes a republic."
            },
            media: {
                url: "https://en.wikipedia.org/wiki/Constitution_of_Pakistan_of_1956",
                caption: "Learn more about the First Constitution"
            }
        },
        {
            start_date: {
                year: "1965",
                month: "09",
                day: "06"
            },
            text: {
                headline: "Indo-Pakistani War",
                text: "The Indo-Pakistani War of 1965 breaks out over Kashmir."
            },
            media: {
                url: "https://en.wikipedia.org/wiki/Indo-Pakistani_War_of_1965",
                caption: "Learn more about the Indo-Pakistani War"
            }
        },
        {
            start_date: {
                year: "1971",
                month: "12",
                day: "16"
            },
            text: {
                headline: "Bangladesh Liberation War",
                text: "East Pakistan (now Bangladesh) declares independence from West Pakistan, leading to the Bangladesh Liberation War."
            },
            media: {
                url: "https://en.wikipedia.org/wiki/Bangladesh_Liberation_War",
                caption: "Learn more about the Bangladesh Liberation War"
            }
        },
        {
            start_date: {
                year: "1973",
                month: "04",
                day: "14"
            },
            text: {
                headline: "Second Constitution",
                text: "Pakistan adopts its second constitution, establishing a parliamentary system."
            },
            media: {
                url: "https://en.wikipedia.org/wiki/Constitution_of_Pakistan_of_1973",
                caption: "Learn more about the Second Constitution"
            }
        },
        {
            start_date: {
                year: "1998",
                month: "05",
                day: "28"
            },
            text: {
                headline: "Nuclear Tests",
                text: "Pakistan conducts a series of nuclear tests in response to India's tests."
            },
            media: {
                url: "https://en.wikipedia.org/wiki/Chagai-I",
                caption: "Learn more about the Nuclear Tests"
            }
        },
        {
            start_date: {
                year: "2001",
                month: "09",
                day: "11"
            },
            text: {
                headline: "September 11 Attacks",
                text: "Pakistan becomes a key ally in the US-led war on terror following the September 11 attacks."
            },
            media: {
                url: "https://en.wikipedia.org/wiki/War_in_Afghanistan_(2001–2021)",
                caption: "Learn more about Pakistan's role in the War on Terror"
            }
        },
        {
            start_date: {
                year: "2007",
                month: "12",
                day: "27"
            },
            text: {
                headline: "Assassination of Benazir Bhutto",
                text: "Former Prime Minister Benazir Bhutto is assassinated, sparking nationwide unrest."
            },
            media: {
                url: "https://en.wikipedia.org/wiki/Assassination_of_Benazir_Bhutto",
                caption: "Learn more about the Assassination of Benazir Bhutto"
            }
        },
        {
            start_date: {
                year: "2011",
                month: "05",
                day: "02"
            },
            text: {
                headline: "Death of Osama bin Laden",
                text: "Osama bin Laden, the leader of al-Qaeda, is killed in a raid by US forces in Abbottabad, Pakistan."
            },
            media: {
                url: "https://en.wikipedia.org/wiki/Death_of_Osama_bin_Laden",
                caption: "Learn more about the Death of Osama bin Laden"
            }
        },
        {
            start_date: {
                year: "2020",
                month: "08",
                day: "05"
            },
            text: {
                headline: "Kashmir Issue",
                text: "India revokes the special status of Jammu and Kashmir, escalating tensions between India and Pakistan."
            },
            media: {
                url: "https://en.wikipedia.org/wiki/Revocation_of_the_special_status_of_Jammu_and_Kashmir",
                caption: "Learn more about the Kashmir Issue"
            }
        }
        // Add more events as needed
    ]
};

// Initialize Timeline
var timeline = new TL.Timeline('timeline', timelineData);

