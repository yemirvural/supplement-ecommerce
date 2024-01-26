export const formatPhoneNumber = (phoneNumber, phoneCode) => {
    let cleaned = phoneNumber.replace(/\D/g, '');
    if (phoneNumber.includes(' ') && phoneNumber.startsWith('+')) {
        phoneCode = phoneNumber.split(' ')[0]
    }
    if (phoneNumber.includes(phoneCode)) {
        cleaned = cleaned.slice(phoneCode.length - 1);
    }
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        let data = phoneCode;
        for (let i = 0; i < cleaned.length; i++) {
            if (i === 0) {
                data += ' (' + cleaned[i];
            }
            else if (i === 2) {
                data += cleaned[i] + ') ';
            } else if (i === 5) {
                data += cleaned[i] + ' ';
            }
            else if (i === 7) {
                data += cleaned[i] + ' ';
            }
            else {
                data += cleaned[i];
            }
        }
        return data;
    }
    if (cleaned.length > 0) {
        return null;
    }
    return undefined;
};