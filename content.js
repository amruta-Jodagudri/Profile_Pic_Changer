document.addEventListener('DOMContentLoaded', function() {
    const removeProfilePic = () => {
      let profilePic = document.querySelector('.profile-pic-selector'); // Adjust this selector to match the profile image element on the target website
        if (profilePic) {
            profilePic.remove();
            alert('Profile picture removed!');
        } else {
            alert('No profile picture found.');
        }
    };

    // Call the function to remove the profile picture
    removeProfilePic();
});
