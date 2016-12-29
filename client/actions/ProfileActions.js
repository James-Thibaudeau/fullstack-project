//Profile Actions
export const EDIT_PROFILE = 'EDIT_PROFILE';
export function editProfile() {
    return {
        type: EDIT_PROFILE,
        editingProfile: true,
        message: 'Editing profile'
    }
}

export const SAVE_PROFILE = 'SAVE_PROFILE';
export function saveProfile() {
    return {
        type: SAVE_PROFILE,
        editingProfile: false,
        message: 'saving profile'
    }
}