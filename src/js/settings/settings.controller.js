class SettingsCtrl {
    constructor(User, $state) {
        'ngInject';

        this._User = User;
        this._$state = $state;

        this.formData = {
            email: this._User.current.email,
            bio: this._User.current.bio,
            image: this._User.current.image,
            username: this._User.current.username
        };

        // Bind is req'd because the logout method assumes
        // the execution context is within the User object.
        this.logout = this._User.logout.bind(User);
    }
    submitForm() {
        this.isSubmitting = true;
        this._User.update(this.formData).then(
            (user) => {
                this._$state.go('app.profile', {username:user.username});
            },
            (err) => {
                this.isSubmitting = false;
                this.errors = err.data.errors;
            }
        )
    }
}


export default SettingsCtrl;