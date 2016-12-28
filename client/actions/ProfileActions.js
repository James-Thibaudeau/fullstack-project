//Profile Actions
export const EDIT_PROFILE = 'EDIT_PROFILE';
export function editProfile() {
    return {
        editingProfile: true,
        message: 'Editing profile'
    }
}

export const SAVE_PROFILE = 'SAVE_PROFILE';
export function saveProfile() {
    return {
        editingProfile: false,
        message: 'saving profile'
    }
}