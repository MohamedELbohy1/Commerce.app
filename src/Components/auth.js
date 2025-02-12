const users = JSON.parse(localStorage.getItem("users")) || [];

export const signUp = (username, email, password, phoneNumber, role) => {
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return { success: false, message: "User with this email already exists." };
    }

    const newUser = {
        username,
        email,
        password,
        phoneNumber,
        role,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    return { success: true };
};

export const login = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return { success: false, message: "Invalid email or password." };
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    return { success: true };
};

export const isAuthenticated = () => {
    return !!localStorage.getItem("loggedInUser");
};

export const logout = () => {
    localStorage.removeItem("loggedInUser");
};
