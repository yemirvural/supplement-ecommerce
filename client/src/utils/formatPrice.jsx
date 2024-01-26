export const formatPrice = (value) => {
    const formatOption = new Intl.NumberFormat('en-US');
    const formattedValue = formatOption.format(value)
    return formattedValue;
}
