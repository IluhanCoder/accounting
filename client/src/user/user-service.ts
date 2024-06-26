import $api from "../axios-setup";
import User from "./user-types";

export default new class UserService {
    async fetchUsers(self: boolean | undefined, role: string | undefined): Promise<{status: string, users: User[]}> {
        return (await $api.post("/fetch-users", {self, role})).data;
    }

    async getUserById(userId: string) {
        return (await $api.get(`/user/${userId}`)).data;
    }

    async updateUser(userId: string, newData: User) {
        return (await $api.post(`/user-update/${userId}`, {newData})).data;
    }

    async setAvatar(avatar: File) {
        const formData = new FormData();
        formData.append("file", avatar);
        return (await $api.post("/avatar", formData)).data;
    }
}