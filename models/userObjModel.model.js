import extractFromEmail from "../scripts/str/extractFromEmail";

const userObjModel = (user) => {
    return {
        username: user.fullName || user.screenName || extractFromEmail(user.email),
        picture: user.photoURL,
        uid: user.uid,
        email: user.email,
        type: user.type, 
        premium: false, 
        lastPayment: null, 
        dash: {
            keys: 0,
            coins: 0,
            xp: 0,
            totalViews: user.type === "tutor" ? 0 : null,
            totalLikes: user.type === "tutor" ? 0 : null,
            totalDislikes: user.type === "tutor" ? 0 : null,
            totalBought: user.type === "tutor" ? 0 : null,
            totalRatio: user.type === "tutor" ? 0 : null
        },
        cont: {
            createdTrainings: user.type === "tutor" ? [] : null,
            createdPosts: user.type === "tutor" ? [] : null,
            trainings: [],
            posts: []
        },
        verified: user.type === "tutor" ? false : null
    }
}

export default userObjModel;