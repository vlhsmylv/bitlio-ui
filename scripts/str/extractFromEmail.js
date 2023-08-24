const extractFromEmail = (email) => {
    return email.substring(0,email.indexOf('@'));
}

export default extractFromEmail;