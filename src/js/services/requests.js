const postData = async(url, data) => {
    let ajaxCounter = 0;
    ajaxCounter++;
    console.log(ajaxCounter);
    const res = await fetch(url, {
        method: "POST",
        body: data
    });
    return await res.text();
};

const getResourse = async(url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fecth ${url}, status${res.status}`);
    }
    return await res.json();
};
export { postData, getResourse };