import CONFIG from "../config.js";

export default {
    // other pages

    id: `${Date.now()}${Math.random()}`,
    date: Date.now(),
    status: true,
    removable: false,
    title: "новая страница",
    titleUA: "новыая",
    description: "",
    descriptionUA: "",
    mainPic: {
        url: CONFIG.PICTURE_PLUG_URL,
    },
    mainPicUA: {
        url: CONFIG.PICTURE_PLUG_URL,
    },
    pics: [
        {
            id: `${Date.now()}${Math.random()}`,
            url: CONFIG.PICTURE_PLUG_URL,
        },
    ],
    picsUA: [
        {
            id: `${Date.now()}${Math.random()}`,
            url: CONFIG.PICTURE_PLUG_URL,
        },
    ],
    SEO: {
        url: "type url here",
        urlUA: "type url here",
        title: "title",
        titleUA: "title",
        keywords: "key words here",
        keywordsUA: "key words here",
        description: "description",
        descriptionUA: "description",
    },
};
