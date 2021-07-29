export default class Film {
    id: String;
    lang: String;
    title: {
        ru: String;
        ua: String;
    };
    description: {
        ru: String;
        ua: String;
    };
    mainPic: String;
    pics: [String];
    trailerLink: String;
    filmType: [];
    SEO: {
        url: String;
        title: String;
        description: String;
    }
};