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

export function setTokenExpiration(amount: number): string {
    const now = moment()
    const expirationTime = now.add(amount, 'minutes')
    return expirationTime.utc().toISOString()
}
