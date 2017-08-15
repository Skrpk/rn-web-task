import constants from '../constants/ProfileConstants';

const editProfileInput = (name, value) => ({
  type: constants.EDIT_PROFILE_FIELD,
  name,
  value,
});

const resetProfile = () => ({
  type: constants.RESET_PROFILE,
})

export default {
  editProfileInput,
  resetProfile,
};
