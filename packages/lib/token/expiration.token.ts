import moment from 'moment'

export function getTokenExpiration(tokenExpiration: Date) {
    const now = moment()

    return {
        type: 'Verfication',
        duration: '15mins',
        isExpired: now.isAfter(tokenExpiration),
        currentDate: now.format('YYYY-MM-DD HH:mm:ss'),
    }
}

export function setTokenExpiration(amount: number) {
    //TODO: This is working but for some reason, I dont know if the time is set in 15 minutes and need test.
    // There's a little bit of configuration to make this compatible in prisma date time.
    const now = moment()
    const expirationTime = now.add(amount, 'minutes') // minutes
    return expirationTime.utc().toISOString
}
