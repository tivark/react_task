const checkUpdatedOptions = (newSelectedVariants, lastUpdate) => {
    return (newSelectedVariants.length === 0)
    || (newSelectedVariants.length === lastUpdate.length
        && newSelectedVariants.every((el) => {
            return lastUpdate.includes(el);
        }));
}

export default checkUpdatedOptions;