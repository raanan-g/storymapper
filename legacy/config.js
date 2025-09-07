async function loadHTMLContent(path) {
    const response = await fetch(path);
    return response.text();
}

async function loadConfig() {
    const homeDescription = await loadHTMLContent('/components/home-description.html');
    const introDescription = await loadHTMLContent('/components/intro-description.html');

    var config = {
        accessToken: 'pk.eyJ1IjoiYmx1ZWNvbmR1aXQtcmFhbmFuIiwiYSI6ImNrcDQ1dmI5cTA3YWgyeHQ4eTgya3RkbmMifQ.Yy7t6IfU4KV2QTGhl91PZA',
        style: 'mapbox://styles/mapbox/streets-v12',
        alignment: 'left',
        toptitle: 'New Story Map created with Storymapper',
        title: "New Story Map",
        byline: 'Add your byline here.',
        description: homeDescription,
        chapters: [
          // intro
            {
                id: 'id0',
                title: 'Add a title here',
                image: '',
                imageCredit: '',
                description: introDescription,
                location: {
                    center: [-99.429,38.679],
                    zoom: 3.27,
                    pitch: 0,
                    bearing: 0
                },
                onChapterEnter: [],
                onChapterExit: [],
                chapterLegend: {}
            },
        ]
    };

    return config;
}

window.loadConfig = loadConfig;