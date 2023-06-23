//--------------- On Refresh, Open Root URL -----------------------


const loadRoot = () => {
    if (window.performance && window.performance.navigation && window.performance.navigation.type === 1) {
        window.location.href = '/';
    }
};


export default loadRoot();