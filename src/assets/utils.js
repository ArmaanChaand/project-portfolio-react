export function getDbUrl(){
    const DB_URL = `${location.protocol}//${location.host}/db.json`
    return DB_URL
}