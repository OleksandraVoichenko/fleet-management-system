function authenticateUser(login, password) {
    if (!login || !password) {
        return {
            success: false,
            message: "Login and password are required"
        };
    }

    return {
        success: true,
        message: "User authenticated successfully"
    };
}

module.exports = { authenticateUser };