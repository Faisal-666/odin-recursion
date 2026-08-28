const fibs = (n) => {
    if (n === 0) return [];
    if (n === 1) return [0];

    const result = [];

    for (let i = 0; i < n; i++) {
        i < 2
            ? result.push(i)
            : result[i] = result[i - 1] + result[i - 2]
        ;
    }

    return result;
};

const fibsRec = (n) => {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    const result = [...fibsRec(n - 1)];
    result.push(
        result.length < 2
            ? n - 1
            : result[result.length - 1] + result[result.length - 2]
    );

    return result;
};


export { fibs, fibsRec};