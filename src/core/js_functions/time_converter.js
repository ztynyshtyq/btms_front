const convertSeconds = (seconds, format) => {
    var days, hours, minutes, total_hours, total_minutes;

    total_minutes = parseInt(Math.floor(seconds / 60));
    total_hours = parseInt(Math.floor(total_minutes / 60));
    days = parseInt(Math.floor(total_hours / 24));

    switch (format) {
        case 'm':
            return total_minutes;
        case 'h':
            return total_hours;
        case 'd':
            return days;
        default:
            return {d: days, h: hours, m: minutes};
    }
};

export default convertSeconds