const windowReady = async () => {
    if(typeof window !== "undefined") {
        return window;
    }
}

export default windowReady;